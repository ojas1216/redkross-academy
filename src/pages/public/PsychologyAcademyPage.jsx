import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UrgentHelpStrip from '../../components/psychology/UrgentHelpStrip';
import PsychologyAcademyNavbar from '../../components/psychology/PsychologyAcademyNavbar';
import Footer from '../../components/common/Footer';
import { apiClient } from '../../services/apiClient';
import { socketClient } from '../../services/socket/socketClient';
import { useAuth } from '../../services/auth/authContext';

function AvailabilityBadge({ access, courseId }) {
  const s = access?.settings?.[courseId];
  if (!s) return null;
  const unlocked = access.is_admin || (access.unlocked_course_ids || []).includes(courseId);
  let text = null;
  let cls = '';
  if (s.visibility === 'COMING_SOON' && !unlocked) {
    text = 'Coming soon';
    cls = 'bg-sky-500/90 text-white';
  } else if (unlocked && (s.price_inr > 0 || s.visibility === 'HIDDEN')) {
    text = 'Unlocked for you';
    cls = 'bg-emerald-500/90 text-black';
  } else if (s.price_inr > 0) {
    text = `₹${Number(s.price_inr).toLocaleString('en-IN')}`;
    cls = 'bg-amber-400/95 text-black';
  }
  if (!text) return null;
  return <span className={`absolute -top-3 left-6 z-30 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${cls}`}>{text}</span>;
}

/** Hidden courses are listed only for students who have them unlocked. */
function visibleIn(access, courseId) {
  const s = access?.settings?.[courseId];
  if (!s || s.visibility !== 'HIDDEN') return true;
  return Boolean(access.is_admin || (access.unlocked_course_ids || []).includes(courseId));
}

export default function PsychologyAcademyPage() {
  const { currentUser } = useAuth();
  const [access, setAccess] = useState(null);
  useEffect(() => {
    apiClient.getCatalogAccess({ fresh: true }).then(setAccess);
  }, [currentUser?.id]);
  const [courses, setCourses] = useState([]);
  const [learningPaths, setLearningPaths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPsychCurriculum = async () => {
      try {
        setLoading(true);
        const [courseRes, pathRes] = await Promise.all([
          apiClient.getCoursesByDivision('psychology'),
          apiClient.getLearningPathsByDivision('psychology')
        ]);
        setCourses(courseRes.courses || []);
        setLearningPaths(pathRes.learning_paths || []);
      } catch (err) {
        console.error('Error loading psychology curriculum:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPsychCurriculum();
    const unsub = socketClient.on('course:mutation', loadPsychCurriculum);
    return () => {
      if (typeof unsub === 'function') unsub();
    };
  }, []);

  const visibleCourses = courses.filter(course => visibleIn(access, course.id));
  return (
    <div data-academy-theme="psychology" className="min-h-screen bg-stone-950 text-stone-100">
      <UrgentHelpStrip />
      <PsychologyAcademyNavbar />
      <main className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:px-10">
        <header className="border-b border-stone-700 pb-8">
          <h1 className="font-serif text-4xl sm:text-6xl">Psychology Academy</h1>
          <p className="my-5 max-w-2xl text-lg leading-relaxed text-stone-300">Explore how people think, respond to stress and interpret evidence. Each short course pairs a reading with a fictional case or a question you can work through.</p>
          <Link to="/academy/psychology/student" className="text-amber-300 underline underline-offset-4">Open student dashboard</Link>
        </header>
        <section id="courses" className="my-10" aria-labelledby="psych-courses">
          <h2 id="psych-courses" className="mb-6 font-serif text-3xl">Courses</h2>
          {loading ? <p role="status">Loading courses...</p> : !visibleCourses.length ? <p>There are no courses available to view.</p> :
            <div className="grid gap-5 md:grid-cols-2">
              {visibleCourses.map(course => (
                <article key={course.id} className="relative rounded-xl border border-stone-700 bg-stone-900 px-5 py-6">
                  <AvailabilityBadge courseId={course.id} access={access} />
                  <h3 className="font-serif text-2xl leading-tight"><Link className="hover:text-amber-200" to={'/academy/psychology/courses/' + course.slug}>{course.title}</Link></h3>
                  <p className="my-3 text-sm leading-6 text-stone-300">{course.overview || course.short_desc}</p>
                  <p className="text-sm text-stone-400">{course.estimated_duration}</p>
                </article>
              ))}
            </div>}
        </section>
        {learningPaths.length > 0 && <section aria-labelledby="psych-paths">
          <h2 id="psych-paths" className="mb-3 font-serif text-3xl">Learning paths</h2>
          {learningPaths.map(track => {
            const members = (track.course_ids || []).map(id => visibleCourses.find(course => course.id === id)).filter(Boolean);
            if (!members.length) return null;
            return <article key={track.id} className="border-t border-stone-700 py-5">
              <h3 className="font-semibold">{track.title}</h3>
              <p className="my-2 text-sm leading-6 text-stone-300">{track.short_desc}</p>
              <ol className="list-decimal space-y-1 pl-5">{members.map(c => <li key={c.id}><Link className="text-amber-200 underline" to={'/academy/psychology/courses/' + c.slug}>{c.title}</Link></li>)}</ol>
            </article>;
          })}
        </section>}
      </main>
      <Footer />
    </div>
  );
}
