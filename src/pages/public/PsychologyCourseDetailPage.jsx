import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PsychologyAcademyNavbar from '../../components/psychology/PsychologyAcademyNavbar';
import Footer from '../../components/common/Footer';
import UrgentHelpStrip from '../../components/psychology/UrgentHelpStrip';
import { useCourseAvailability, AccessCodeModal, AccessNotice, priceLabel } from '../../components/courses/CourseAccess';
import { apiClient } from '../../services/apiClient';
import { useAuth } from '../../services/auth/authContext';
import { mockEngine } from '../../services/db/mockEngine';
import { PSYCHOLOGY_COURSES } from '../../services/db/psychologyCourses';

export default function PsychologyCourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [remote, setRemote] = useState(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [codeOpen, setCodeOpen] = useState(false);
  const local = PSYCHOLOGY_COURSES.find(c => c.slug === slug || c.id === slug);
  const course = remote?.slug === slug || remote?.id === slug ? remote : local;
  const availability = useCourseAvailability(course?.id);

  useEffect(() => {
    let current = true;
    setMessage('');
    setCodeOpen(false);
    apiClient.getCourseBySlug(slug).then(result => {
      if (current && result?.division === 'psychology') setRemote(result);
    }).catch(() => {});
    return () => { current = false; };
  }, [slug]);

  const enrolment = currentUser && course
    ? mockEngine.getEnrolmentsForUser(currentUser.id, 'psychology').find(e => e.course_id === course.id)
    : null;

  async function enrol() {
    if (availability.loading || availability.comingSoon || busy) return;
    if (!currentUser) {
      navigate('/login?redirect=' + encodeURIComponent('/academy/psychology/courses/' + course.slug));
      return;
    }
    if (availability.needsCode) {
      setCodeOpen(true);
      return;
    }
    setBusy(true);
    setMessage('');
    try {
      const result = await apiClient.enrol(currentUser.id, course.id);
      if (result?.locked) {
        if (result.reason === 'COMING_SOON') setMessage('Enrolment has not opened yet.');
        else setCodeOpen(true);
      } else if (result) navigate('/student/course/' + course.id);
      else setMessage('Enrolment could not be confirmed. Please try again.');
    } catch {
      setMessage('Enrolment could not be confirmed. Please try again.');
    } finally { setBusy(false); }
  }

  async function cancel() {
    if (!enrolment || !window.confirm('Cancel your enrolment in this course?')) return;
    setBusy(true);
    try {
      await apiClient.cancelEnrolment(enrolment.id, currentUser.id, course.id);
      window.location.reload();
    } catch {
      setMessage('The change could not be confirmed. Please try again.');
      setBusy(false);
    }
  }

  const modules = course?.modules || [];
  const lessonCount = modules.reduce((total, m) => total + (m.lessons?.length || 0), 0);
  const actionClass = 'inline-flex items-center justify-center rounded-lg bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-950 disabled:opacity-60';
  return (
    <div data-academy-theme="psychology" className="min-h-screen bg-stone-950 text-stone-100">
      <UrgentHelpStrip />
      <PsychologyAcademyNavbar />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:px-10">
        <Link className="text-sm text-amber-300 underline underline-offset-4" to="/academy/psychology">Psychology Academy</Link>
        {!course ? <h1 className="my-10 text-3xl">Course unavailable</h1> : <>
          <header className="mt-8 border-b border-stone-700 pb-8">
            <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-3xl leading-7 text-stone-300">{course.overview}</p>
            <p className="mt-5 text-sm text-stone-400">{lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'} · {course.estimated_duration}</p>
          </header>
          <div className="mt-9 grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_17rem]">
            <section aria-labelledby="course-syllabus">
              <h2 id="course-syllabus" className="mb-5 font-serif text-3xl">Course syllabus</h2>
              {modules.map((module, index) => (
                <details key={module.id} open={index === 0} className="border-t border-stone-700 py-4">
                  <summary className="cursor-pointer font-semibold text-amber-100">{module.title}</summary>
                  <ol className="mt-4 space-y-5">
                    {(module.lessons || []).map(lesson => <li key={lesson.id}>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-300">{lesson.summary}</p>
                      {lesson.duration && <span className="text-xs text-stone-400">{lesson.duration}</span>}
                    </li>)}
                  </ol>
                </details>
              ))}
              {course.what_you_will_learn?.length > 0 && <><h2 className="mb-4 mt-8 font-serif text-2xl">What you will learn</h2>
                <ul className="list-disc space-y-2 pl-5 text-stone-300">{course.what_you_will_learn.map(goal => <li key={goal}>{goal}</li>)}</ul></>}
            </section>
            <aside aria-label="Course access" className="space-y-4 rounded-xl border border-stone-700 p-5">
              <h2 className="font-serif text-xl">Course access</h2>
              <AccessNotice availability={availability} />
              {enrolment ? <><Link className={actionClass} to={'/student/course/' + course.id}>Open classroom</Link>
                <button type="button" className="block text-sm underline" disabled={busy} onClick={cancel}>Cancel enrolment</button></> :
                !availability.comingSoon && <button type="button" className={actionClass} disabled={busy || availability.loading} onClick={enrol}>
                  {availability.loading ? 'Checking availability' : busy ? 'Enrolling…' : availability.needsCode ? 'Request course access' : 'Enrol · ' + priceLabel(availability)}
                </button>}
              {!availability.loading && !availability.comingSoon && <button type="button" className="block text-sm text-amber-200 underline" onClick={() => setCodeOpen(true)}>Use an access code</button>}
              {message && <p role="status" className="text-sm text-stone-200">{message}</p>}
            </aside>
          </div>
          <AccessCodeModal open={codeOpen} onClose={() => setCodeOpen(false)} course={course} priceInr={availability.price_inr} />
        </>}
      </main>
      <Footer />
    </div>
  );
}
