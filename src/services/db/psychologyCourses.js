/** Introductory psychology course and learning-path definitions. */
const SRC = {
  nimh: '[NIMH, Psychotherapies](https://www.nimh.nih.gov/health/topics/psychotherapies)',
  who: '[WHO, Psychological first aid: Guide for field workers (2011)](https://www.who.int/publications-detail-redirect/9789241548205)',
  nccih: '[NCCIH, Meditation and Mindfulness: Effectiveness and Safety](https://www.nccih.nih.gov/health/meditation-and-mindfulness-effectiveness-and-safety/)',
  ledoux: 'LeDoux JE (2012). Rethinking the emotional brain. Neuron. [Read the paper](https://pubmed.ncbi.nlm.nih.gov/22365542/)'
};

const SCOPE_NOTE =
  '> **About this lesson:** This is introductory educational content. It does not train you to provide therapy or assessment. It is not a substitute for help from a qualified professional. If you or someone near you is in immediate danger, contact local emergency services.';

const NON_ACCREDITED_RECORD = 'RedKross Academy course completion record (educational; not a professional qualification, accreditation or licence)';

const EDITORIAL_AUTHOR = {
  name: 'RedKross Academy editorial team',
  title: 'Introductory educational content',
  role: 'Course editorial team',
  avatar: ''
};

export const PSYCHOLOGY_LEARNING_PATHS = [
  {
    id: 'path_clinical_psychology',
    division: 'psychology',
    slug: 'clinical-psychology-counseling-track',
    title: 'Introduction to Psychological Therapies and Emotion',
    short_desc: 'A short introductory path covering the basic ideas behind CBT, the principles of psychological first aid and how researchers think about threat and fear. It does not train you as a counsellor or therapist.',
    difficulty: 'Beginner',
    estimated_weeks: 1,
    total_hours: 4,
    courses_count: 3,
    milestone_cert: NON_ACCREDITED_RECORD,
    featured: true,
    skills: ['Describing the cognitive model', 'Spotting unhelpful thinking patterns', 'PFA principles', 'Evaluating neuroscience claims'],
    course_ids: ['crs_psych_cbt', 'crs_psych_crisis', 'crs_psych_neuro']
  },
  {
    id: 'path_crisis_intervention',
    division: 'psychology',
    slug: 'crisis-intervention-pfa-specialist',
    title: 'Supporting People in Distress: An Introduction',
    short_desc: 'Introductory material on the principles of psychological first aid and on understanding exam stress, with clear guidance on when to involve qualified or emergency help.',
    difficulty: 'Beginner',
    estimated_weeks: 1,
    total_hours: 2,
    courses_count: 2,
    milestone_cert: NON_ACCREDITED_RECORD,
    featured: true,
    skills: ['PFA principles', 'Listening without pressure', 'Knowing when to refer', 'Reasoning about correlation and cause'],
    course_ids: ['crs_psych_crisis', 'crs_psych_adolescent']
  },
  {
    id: 'path_neuro_cognition',
    division: 'psychology',
    slug: 'neurobehavioral-science-cognitive-health',
    title: 'Evaluating Claims About the Brain, Stress and Mindfulness',
    short_desc: 'A short path on reading claims about threat circuits and mindfulness critically, using a published review and a public research summary.',
    difficulty: 'Beginner',
    estimated_weeks: 1,
    total_hours: 2,
    courses_count: 2,
    milestone_cert: NON_ACCREDITED_RECORD,
    featured: false,
    skills: ['Survival circuits versus feelings', 'Reading mixed evidence', 'Correlation versus cause'],
    course_ids: ['crs_psych_neuro', 'crs_psych_mindfulness']
  }
];

export const PSYCHOLOGY_COURSES = [
  {
    id: 'crs_psych_cbt',
    division: 'psychology',
    slug: 'cognitive-behavioral-therapy-foundations-practice',
    title: 'Introduction to Cognitive Behavioral Therapy: Core Ideas',
    version: '1.0',
    category: 'Clinical Psychology',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'About 2 hours, self-paced',
    estimated_hours: 2,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 1,
    skills: [
      'Describing the cognitive model',
      'Understanding collaboration and tailoring in therapy',
      'Recognising common unhelpful thinking patterns'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A three-lesson introduction to the core ideas of Cognitive Behavioral Therapy (CBT): how thoughts, feelings and behaviours can influence one another, why therapy is collaborative and tailored to the person, and how people learn to notice unhelpful thinking patterns. This course explains ideas. It does not teach you to deliver CBT or to assess anyone.',
    what_you_will_learn: [
      'Describe the link between thoughts, feelings and behaviours that CBT works with.',
      'Explain why the model is a working framework rather than proof of what causes a person\'s distress.',
      'Explain why therapy is collaborative and tailored to each person, and why it belongs with qualified professionals.',
      'Recognise common names for unhelpful thinking patterns and the limits of applying those labels.'
    ],
    modules: [
      {
        id: 'mod_cbt_1',
        title: 'Module 1: The Cognitive Model & Collaboration',
        description: 'The basic idea that thoughts, feelings and behaviours are linked, and why CBT is a collaborative, tailored approach.',
        order: 1,
        lessons: [
          {
            id: 'lsn_cbt_1_1',
            title: '1.1 The Cognitive Model: Thoughts, Feelings and Behaviour',
            duration: '25 mins',
            xp: 150,
            summary: 'An introduction to how CBT links thoughts, feelings and behaviour, and what the model does not claim.',
            content_markdown: `# 1.1 The Cognitive Model: Thoughts, Feelings and Behaviour

${SCOPE_NOTE}

## Learning goals

- Describe in plain language the idea that thoughts, feelings and behaviours are linked.
- Explain why this is a working model, not proof of what causes any one person's distress.

## Lesson

### What CBT works with

The US National Institute of Mental Health (NIMH) describes CBT as a type of psychotherapy that helps people notice and change patterns in how they think, feel and behave. NIMH also notes that therapy is tailored to the person and the problem.

### A simple working model

Teaching materials often draw the model as a loop:

**Situation → interpretation (thought) → feelings and body sensations → actions → back to the situation**

The arrows run in more than one direction. An action can change the situation, a body sensation can shape the next thought, and so on. For example, someone who expects a party to go badly may feel tense, leave early, and never find out whether it might have gone better. Leaving early can then strengthen the original expectation.

### What the model does not claim

- **It does not say events are unimportant.** Real circumstances matter. The model adds that how a situation is interpreted is also part of the picture.
- **A link in a diagram is not proof of cause.** If two things happen together, such as a worried thought and a low mood, that alone does not show which came first or whether a third factor drives both. In therapy, a link like this is treated as a hypothesis to explore.
- **It is not a self-diagnosis tool.** Recognising a loop in your own life does not tell you whether you have a mental health condition. Only a qualified professional can assess that.

## Self-check

*Case (fictional):* Sam receives a short reply from a manager, "See me tomorrow." Sam thinks, "I'm going to be fired," feels sick, sleeps badly and calls in sick the next day.

1. Label the situation, thought, feeling or body sensation, and action.
2. How might the action feed back into the loop?
3. A classmate says, "This proves Sam's thinking caused the insomnia." Is that justified?

## Model answer

1. Situation: the short message. Thought: "I'm going to be fired." Feeling or body sensation: feeling sick, sleeping badly. Action: calling in sick.
2. Avoiding the meeting means Sam never checks the prediction. Missing work may also create a real new problem, which can make the worry seem more justified.
3. No. The story shows that these things happened together. It does not show cause. Poor sleep could have other causes, and only a careful, collaborative exploration with a qualified professional could test what is going on for a real person.

## Sources

- ${SRC.nimh} (CBT and thought, feeling and behaviour patterns; therapy tailored to the person).
- [Beck Institute: the cognitive model](https://beckinstitute.org/about/understanding-cbt/). The loop above illustrates one fictional situation.
`
          },
          {
            id: 'lsn_cbt_1_2',
            title: '1.2 Collaboration and Tailoring in Therapy',
            duration: '25 mins',
            xp: 150,
            summary: 'Why CBT is described as collaborative and tailored, and why it is not something to practise on friends or yourself after a short course.',
            content_markdown: `# 1.2 Collaboration and Tailoring in Therapy

${SCOPE_NOTE}

## Learning goals

- Explain what it means for therapy to be collaborative and tailored.
- Explain why an introductory course does not prepare you to run therapy sessions.

## Lesson

### Working together

CBT is often described as collaborative. The therapist and the person seeking help work together to understand the problem and agree on what to try. Ideas about a person's thinking are treated as guesses to test, not as conclusions the therapist imposes.

### Tailored, not one-size-fits-all

NIMH notes that therapy is tailored to the person and their needs. The choice of approach, the number and length of sessions, and whether to combine therapy with other treatment are decisions made with a qualified professional. This course does not prescribe a fixed session structure, and you should be wary of any source that promises one protocol works for everyone.

### Where an introductory course stops

Knowing the vocabulary of CBT is not the same as being trained to deliver it. Trained practitioners learn assessment, how to recognise risk, and when another type of help is needed. They also work under professional standards and supervision. Completing this course does not give you any of these.

## Self-check

*Case (fictional):* A friend who has been feeling low for months says, "You did that CBT course. Can you do some sessions with me?"

1. What is a respectful and safe response?
2. Name two things a qualified professional would do that this course has not prepared you to do.

## Model answer

1. Thank them for trusting you and listen. Explain honestly that a short introductory course does not qualify you to provide therapy. Encourage them to speak to a doctor or qualified mental health professional, and offer practical help with that step if they want it. If they mention thoughts of harming themselves or are in danger, help them contact emergency services or a crisis service right away.
2. Any two of the following: assess what is going on, recognise and respond to risk, tailor an approach to the person, and work within professional standards and supervision.

## Sources

- ${SRC.nimh} (therapy tailored to the individual).
- [Beck Institute: understanding CBT](https://beckinstitute.org/about/understanding-cbt/).
`
          }
        ]
      },
      {
        id: 'mod_cbt_2',
        title: 'Module 2: Unhelpful Thinking Patterns',
        description: 'Common names for unhelpful thinking patterns and how to describe a more balanced view, with the limits of using these labels.',
        order: 2,
        lessons: [
          {
            id: 'lsn_cbt_2_1',
            title: '2.1 Common Unhelpful Thinking Patterns',
            duration: '30 mins',
            xp: 180,
            summary: 'Recognise commonly named patterns such as all-or-nothing thinking and catastrophising, and use the labels carefully.',
            content_markdown: `# 2.1 Common Unhelpful Thinking Patterns

${SCOPE_NOTE}

## Learning goals

- Recognise several commonly named unhelpful thinking patterns.
- Write a more balanced version of a thought.
- Explain the limits of these labels.

## Lesson

### Why patterns are named

NIMH describes CBT as helping people notice and change patterns in thinking. CBT educational materials often give these patterns names, so that people can spot them more easily. Common examples include:

| Pattern | Plain description | Example |
| --- | --- | --- |
| All-or-nothing thinking | Seeing things only in extremes | "If it isn't perfect, it's a failure." |
| Catastrophising | Jumping to the worst outcome | "One bad grade means my future is ruined." |
| Mind-reading | Assuming you know what others think | "They didn't reply, so they're angry with me." |
| Emotional reasoning | Treating a feeling as proof | "I feel stupid, so I must be stupid." |
| Personalisation | Taking responsibility for things outside your control | "The team lost because of me." |

### Writing a balanced alternative

A balanced alternative is not forced positive thinking. It is a statement that fits all the available evidence better. For example, "One bad grade is disappointing. I have passed other tests, and I can ask what to work on."

### Limits of the labels

- These labels describe a thought. They do not describe the person who had it.
- Thoughts like these are common, and having them does not mean someone has a mental health condition.
- Do not use the labels to judge or diagnose other people. Saying "you're catastrophising" to someone in distress can feel dismissive.
- Sometimes a worrying thought is accurate. Checking the evidence matters more than the label.

## Self-check

Name the closest pattern for each thought, then write a balanced alternative for item 3.

1. "My friend looked at her phone while I was talking. She thinks I'm boring."
2. "I missed one workout, so the whole plan is pointless."
3. "I feel anxious about the flight, so something bad will happen."

## Model answer

1. Mind-reading. There are other possible reasons for looking at a phone.
2. All-or-nothing thinking. One missed session does not undo a plan.
3. Emotional reasoning. A balanced alternative: "Feeling anxious is uncomfortable, but my feeling does not predict what will happen on the flight."

Other reasonable answers are fine. Several patterns can overlap in one thought.

## Sources

- ${SRC.nimh} (CBT helps people identify and change thought patterns).
- [Beck Institute: the cognitive model](https://beckinstitute.org/about/understanding-cbt/). The examples in the table are fictional.
`
          }
        ]
      }
    ]
  },
  {
    id: 'crs_psych_crisis',
    division: 'psychology',
    slug: 'psychological-first-aid-crisis-intervention',
    title: 'Introduction to Psychological First Aid',
    version: '1.0',
    category: 'Crisis Response',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'Under 1 hour, self-paced',
    estimated_hours: 1,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 2,
    skills: [
      'Humane, practical support',
      'Listening without pressure',
      'Knowing when to involve emergency or professional help'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A single introductory lesson on the principles of psychological first aid (PFA), based on the World Health Organization field guide. PFA means humane, practical support. It involves listening if a person wants to talk and never pressing them to retell what happened. This lesson is not crisis or suicide-risk training, and it does not replace formal PFA training or professional help.',
    what_you_will_learn: [
      'Describe PFA as humane, supportive and practical help.',
      'Explain why listening should be voluntary and why people should not be pressed to retell events.',
      'Recognise when to involve emergency services or qualified professionals.'
    ],
    modules: [
      {
        id: 'mod_crisis_1',
        title: 'Module 1: Principles of Psychological First Aid',
        description: 'What PFA is and what it is not: practical comfort and respect for people\'s choices, without pressured retelling of events.',
        order: 1,
        lessons: [
          {
            id: 'lsn_crisis_1_1',
            title: '1.1 Psychological First Aid: Core Principles',
            duration: '35 mins',
            xp: 140,
            summary: 'The principles of PFA as described in the WHO field guide, with a worked case.',
            content_markdown: `# 1.1 Psychological First Aid: Core Principles

${SCOPE_NOTE}

## Learning goals

- Describe PFA as humane, supportive and practical help.
- Explain why talking should be voluntary and retelling should never be pressured.
- Recognise when a situation needs emergency or professional help.

## Lesson

### What PFA is

The WHO guide *Psychological first aid: Guide for field workers* describes PFA as humane, supportive and practical help for people who have been through a serious crisis event. The focus is on comfort, basic needs and respect for the person's own choices.

### Listening is voluntary

You can offer to listen, but a person should not have to talk. Some people want to talk and others do not. Both are acceptable. Being calmly present and helping with practical needs can be enough.

### Do not press for the story

The WHO guide advises against pressing people to describe what happened or how they feel about it. PFA is not a technique for getting someone to relive an event. If the person chooses to share, listen without pushing for detail.

### Practical help and staying safe

Practical help can include finding water, a quiet place, or a way to contact family. It can also mean helping someone get accurate information or reach services. Look after your own safety too. If anyone is in immediate danger or has a serious injury, or someone talks about harming themselves, contact emergency services. Do not try to manage that alone.

## Self-check

*Case (fictional):* After a kitchen fire in a student hostel, no one is badly hurt. Asha is sitting alone outside, shaking and quiet. Another student keeps asking her, "What exactly did you see? Tell me everything, it'll help."

1. What, if anything, is unhelpful about the other student's approach?
2. Describe two humane, practical things you could offer Asha.
3. What would change your response to "get emergency help now"?

## Model answer

1. The student is pressing Asha to retell the event. The WHO guide advises against this. Talking should be her choice.
2. Any two of the following: introduce yourself calmly and ask whether she would like company; offer water, a blanket or a quieter place; help her contact a friend or family member; share accurate information about what happens next; make it clear she does not have to talk.
3. Signs of injury or medical distress, a danger that is still present, or any mention of wanting to harm herself. In those cases, contact emergency services or the responsible staff immediately.

## Sources

- ${SRC.who} (PFA as humane, supportive and practical help; listening without pressure; not pressing people to retell events).

`
          }
        ]
      }
    ]
  },
  {
    id: 'crs_psych_neuro',
    division: 'psychology',
    slug: 'neuropsychology-affective-neuroscience-emotional-regulation',
    title: 'Introduction to Affective Neuroscience: Threat, Survival Circuits and Fear',
    version: '1.0',
    category: 'Neuroscience',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'Under 1 hour, self-paced',
    estimated_hours: 1,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 3,
    skills: [
      'Distinguishing survival circuits from conscious feelings',
      'Evaluating brain-based claims',
      'Correlation versus cause'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A single introductory lesson on how one influential review, by Joseph LeDoux (2012), distinguishes brain circuits that detect and respond to threats from the conscious feeling of fear. Learners practise judging popular claims such as "the amygdala is the fear centre." The lesson does not cover clinical neuropsychology, stress hormones or treatment.',
    what_you_will_learn: [
      'Explain the difference between survival circuits and the conscious feeling of fear, as argued by LeDoux (2012).',
      'Explain why simple "two roads" diagrams of fear are teaching pictures, not diagnostic tools.',
      'Spot claims that treat brain activity as proof of a feeling or as a cause.'
    ],
    modules: [
      {
        id: 'mod_neuro_1',
        title: 'Module 1: Threat Circuits and the Feeling of Fear',
        description: 'Survival circuits, conscious fear, and why simplified pathway diagrams should be read with care.',
        order: 1,
        lessons: [
          {
            id: 'lsn_neuro_1_1',
            title: '1.1 Threat Detection, Survival Circuits and the Feeling of Fear',
            duration: '35 mins',
            xp: 160,
            summary: 'How LeDoux (2012) separates threat-response circuits from conscious fear, and why the popular "low road / high road" picture is not diagnostic.',
            content_markdown: `# 1.1 Threat Detection, Survival Circuits and the Feeling of Fear

${SCOPE_NOTE}

## Learning goals

- Explain the difference between survival circuits and the conscious feeling of fear.
- Explain the limits of the popular "low road / high road" diagram.
- Judge brain-based claims for jumps from correlation to cause.

## Lesson

### Survival circuits versus feelings

In a 2012 review, neuroscientist Joseph LeDoux argued for separating two things that are often merged:

- **Survival circuits:** brain systems, found in many species, that detect and respond to challenges such as threats. In the case of threat, they produce defensive responses.
- **Conscious feelings:** such as the experience of being afraid.

LeDoux argues that these circuits are distinct from the conscious feeling of fear. Activity in a threat-response circuit is not the same thing as a person feeling afraid.

### The "two roads" picture

Popular teaching often shows a fast "low road" to the amygdala and a slower "high road" through the cortex. This is a simplified teaching picture. Use it carefully:

- It does not let you diagnose anyone or explain a particular person's anxiety.
- It does not show that the amygdala is a single "fear centre."
- The picture alone cannot tell us how quickly an individual processed a particular event.

### Reasoning about brain claims

When you read "brain area X lit up, so the person felt Y," ask:

1. Was the feeling measured separately, or inferred only from brain activity?
2. Does the activity *cause* the feeling, or does it simply occur at the same time?
3. Could the same activity happen in other situations too?

## Self-check

Decide whether each claim is justified, and explain why.

1. "The scan showed amygdala activity, so the participant was consciously afraid."
2. "A rat freezes when it hears a tone that was paired with a shock, so this proves the rat feels fear exactly as people do."
3. "Threat-detection circuits and the feeling of fear can be studied as related but different things."

## Model answer

1. Not justified. Threat-circuit activity is not the same as conscious fear, and activity alone does not show what someone felt. You would need a separate measure, such as the person's own report, and even then the activity is a correlation, not proof of cause.
2. Not justified. Freezing is a defensive response that survival circuits can produce. Whether the animal has a conscious feeling like human fear is a separate question that this behaviour cannot settle.
3. Justified. This is the distinction LeDoux (2012) argues for.

## Sources

- ${SRC.ledoux} (survival circuits as distinct from conscious feelings of fear).
- [Pessoa and Adolphs: From a low road to many roads](https://pubmed.ncbi.nlm.nih.gov/20959860/). The authors describe multiple pathways involved in evaluating significance.
`
          }
        ]
      }
    ]
  },
  {
    id: 'crs_psych_forensic',
    division: 'psychology',
    slug: 'forensic-psychology-criminal-profiling-methodology',
    title: 'Introduction to Forensic Reasoning: Evidence, Inference and the Limits of Profiling',
    version: '1.0',
    category: 'Forensic Science',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'Under 1 hour, self-paced',
    estimated_hours: 1,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 4,
    skills: [
      'Separating observation from inference',
      'Generating alternative explanations',
      'Base-rate reasoning'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A single introductory lesson on careful reasoning about evidence: telling what was observed apart from what is inferred, considering alternative explanations, and seeing why traits common in the general population cannot pick out individuals. It does not teach criminal profiling, competency or malingering assessment, or how to identify "dangerous people."',
    what_you_will_learn: [
      'Separate observations from inferences in a case description.',
      'Generate and compare alternative explanations for the same evidence.',
      'Use base-rate reasoning to explain why trait-based "profiles" mislead when applied to individuals.'
    ],
    modules: [
      {
        id: 'mod_forensic_1',
        title: 'Module 1: Reasoning from Evidence',
        description: 'Observation versus inference, alternative hypotheses, and base rates, using fictional examples.',
        order: 1,
        lessons: [
          {
            id: 'lsn_forensic_1_1',
            title: '1.1 Reasoning from Evidence: Observation, Inference and Its Limits',
            duration: '35 mins',
            xp: 150,
            summary: 'General reasoning skills for evidence: separating what was seen from what is assumed, and why traits cannot identify individuals.',
            content_markdown: `# 1.1 Reasoning from Evidence: Observation, Inference and Its Limits

${SCOPE_NOTE}

## Learning goals

- Separate observations from inferences.
- Generate at least two alternative explanations for a piece of evidence.
- Explain, with a worked example, why trait-based "profiles" mislead when applied to individuals.

## Lesson

### Observation versus inference

An **observation** is what was recorded, such as "the back window was broken from outside." An **inference** is a conclusion drawn from observations, such as "the intruder was experienced." Inferences can be reasonable, but they should be labelled as inferences and kept open to revision.

### Keep alternatives open

For any piece of evidence, list more than one explanation before choosing between them. Then ask what further evidence would tell the explanations apart. Settling on one story too early makes it easy to notice only the facts that fit, a reasoning error often called confirmation bias.

### Why traits cannot identify individuals (base rates)

*Illustrative numbers, not real data:* imagine a town of 100,000 people where 10 people committed a particular offence. Suppose 8 of those 10 share a trait, and so do 20% of everyone else in the town.

- People with the trait who did not offend: about 20,000.
- People with the trait who did offend: 8.

So a person with the trait has roughly a 0.04% chance of being an offender (8 in about 20,000). The trait is common among offenders, but it is far more common among people who have done nothing wrong. This is why this course does not teach "profiles" for identifying dangerous people from traits.

### Ethics

Real forensic work happens within legal and professional frameworks, with qualified practitioners. Speculating about real people, whether named suspects, classmates or public figures, can cause serious harm. Use only fictional cases.

## Self-check

*Case (fictional):* A shop is found with its till empty. The door was unlocked, with no damage. A staff member who usually closes up left early that evening.

1. List two observations and one inference someone might jump to.
2. Give two alternative explanations for the unlocked, undamaged door.
3. What further evidence would help tell them apart?

## Model answer

1. Observations: the till is empty; the door is unlocked with no damage; a staff member left early. A tempting inference: "The staff member who left early took the money."
2. Any two of the following: someone with a key entered and left the door unlocked; the previous user omitted the locking step; or the lock was faulty.
3. Banking and till records, a list of who holds keys, any camera footage or access logs, and checking the lock. The aim is to test each explanation, not to confirm the first one.

## Sources

- [NIST: Human factors in forensic science](https://www.nist.gov/forensic-science/human-factors-forensic-science). The shop case and numerical examples in this lesson are fictional.

`
          }
        ]
      }
    ]
  },
  {
    id: 'crs_psych_adolescent',
    division: 'psychology',
    slug: 'adolescent-mental-health-academic-burnout-mitigation',
    title: 'Understanding Exam Stress: An Introduction for Students and Mentors',
    version: '1.0',
    category: 'Youth & Academic Health',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'Under 1 hour, self-paced',
    estimated_hours: 1,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 5,
    skills: [
      'Reflecting on thoughts, feelings and behaviour',
      'Correlation versus cause',
      'Knowing when and how to seek help'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A single introductory lesson for students and the adults who support them. It uses the general thought-feeling-behaviour idea as a reflection tool for exam stress, practises telling correlation from cause in claims about students, and sets out when to involve a trusted adult or a qualified professional. It is not screening, diagnosis or treatment.',
    what_you_will_learn: [
      'Use the thought-feeling-behaviour idea to reflect on a stressful exam situation.',
      'Judge whether claims about student stress confuse correlation with cause.',
      'Recognise when to involve a trusted adult, a health professional or emergency services.'
    ],
    modules: [
      {
        id: 'mod_adol_1',
        title: 'Module 1: Understanding Exam Stress',
        description: 'A reflection model for exam stress, reasoning about evidence, and when to seek help.',
        order: 1,
        lessons: [
          {
            id: 'lsn_adol_1_1',
            title: '1.1 Understanding Exam Stress: A Thinking Model and Its Limits',
            duration: '35 mins',
            xp: 130,
            summary: 'Reflect on exam stress with a simple model, judge claims about cause, and know when to get help.',
            content_markdown: `# 1.1 Understanding Exam Stress: A Thinking Model and Its Limits

${SCOPE_NOTE}

## Learning goals

- Use a simple thought-feeling-behaviour model to reflect on a stressful exam situation.
- Tell correlation from cause in claims about students.
- Know when to involve someone else.

## Lesson

### A reflection model, not a treatment

NIMH describes CBT as working with links between thoughts, feelings and behaviours. You can borrow that general idea as a **reflection tool**. It is not a substitute for therapy.

*Example:* "If I fail this test, I've failed at everything" (thought) → racing heart, dread (feeling) → putting off revision (behaviour) → less preparation, and more worry the next day.

Noticing a loop like this can help you decide what to talk about with a teacher, a counsellor or a family member.

### Correlation is not cause

Claims about students often mix these two up. *Illustrative example, not real data:* a school survey finds that students who report less sleep also report more exam worry. Possible explanations include:

- worry makes it harder to sleep;
- poor sleep makes worry worse;
- a third factor, such as a heavy workload or a part-time job, affects both;
- some mix of all three.

A survey like this cannot tell which is true. Be careful with any article that turns a link like this into "X causes Y" or a precise percentage, unless it cites a reliable source.

### For mentors and educators

- Listen and take the student seriously. Do not label or diagnose.
- Do not promise to keep a disclosure secret if it involves risk of harm. Follow your institution's safeguarding procedure.
- Point the student towards qualified help, such as a school counsellor, a doctor, or a mental health service.

### When to get help

Talk to a trusted adult or a health professional if stress lasts a long time, gets in the way of daily life, sleep or eating, or feels unmanageable. If someone talks about harming themselves or is in immediate danger, contact emergency services or a crisis line straight away.


## Self-check

1. A blog says, "Students who use their phones at night get lower grades, so phones cause bad grades." Give two other explanations.
2. *Case (fictional):* Dev, 16, tells a tutor that he hasn't slept properly for weeks, has stopped eating lunch, and says, "There's no point in anything." What should the tutor do?

## Model answer

1. Any two of the following: students who are already struggling may stay up later on their phones; a third factor, such as stress or long work hours, may cause both late nights and lower grades; or grades and phone use may each have several separate causes. The link alone does not show cause.
2. Listen calmly and take Dev seriously. Do not try to diagnose him or set up a self-help plan. Follow the institution's safeguarding procedure and involve the responsible staff and a qualified professional promptly. "There's no point in anything" can signal serious distress, so if there is any sign of risk of self-harm, seek urgent help through emergency or crisis services. Tell Dev honestly what you will do next.

## Sources

- ${SRC.nimh} (general idea that thoughts, feelings and behaviours are linked in CBT).
- [NHS: Help your child beat exam stress](https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/help-your-child-beat-exam-stress/).

`
          }
        ]
      }
    ]
  },
  {
    id: 'crs_psych_mindfulness',
    division: 'psychology',
    slug: 'applied-mindfulness-mbsr-somatic-regulation',
    title: 'Mindfulness and Meditation: Understanding the Evidence',
    version: '1.0',
    category: 'Applied Mindfulness',
    difficulty: 'Beginner',
    price: 0,
    cert_price: 0,
    estimated_duration: 'Under 1 hour, self-paced',
    estimated_hours: 1,
    effort: 'Self-paced',
    access: 'Free Institutional Access',
    rating: null,
    enrolled_count: null,
    motifVariant: 6,
    skills: [
      'Reading mixed evidence',
      'Comparing different mindfulness programs',
      'Recognising possible adverse experiences'
    ],
    milestone_cert: NON_ACCREDITED_RECORD,
    lead_author: EDITORIAL_AUTHOR,
    overview: 'A single introductory lesson on what research summaries say about mindfulness and meditation. The evidence is mixed, programs differ in ways that make results hard to compare, and some people report unpleasant or adverse experiences. Learners practise judging popular claims. This is not an MBSR program, teacher training or a treatment plan.',
    what_you_will_learn: [
      'Summarise in plain terms what a public research summary says about the effectiveness of mindfulness and meditation.',
      'Explain why differences between programs make results hard to compare.',
      'Recognise that meditation can involve adverse experiences, and judge marketing claims critically.'
    ],
    modules: [
      {
        id: 'mod_mbsr_1',
        title: 'Module 1: Reading the Evidence on Mindfulness',
        description: 'Mixed evidence, differing programs and safety, using a public research summary.',
        order: 1,
        lessons: [
          {
            id: 'lsn_mbsr_1_1',
            title: '1.1 What the Evidence Does and Does Not Show About Mindfulness',
            duration: '30 mins',
            xp: 120,
            summary: 'Mixed evidence, differences between programs, possible adverse experiences, and how to judge claims.',
            content_markdown: `# 1.1 What the Evidence Does and Does Not Show About Mindfulness

${SCOPE_NOTE}

## Learning goals

- Summarise what a public research summary says about mindfulness and meditation.
- Explain why "mindfulness" studies are not all testing the same thing.
- Recognise possible adverse experiences and judge marketing claims.

## Lesson

### The evidence is mixed

The US National Center for Complementary and Integrative Health (NCCIH) summarises research on meditation and mindfulness. In brief, results vary across studies and across health outcomes. Some findings are encouraging and others are inconclusive. "Mindfulness works" is too simple a summary.

### Programs differ

"Mindfulness" covers many different practices and programs. Mindfulness-Based Stress Reduction (MBSR) is one named program. Programs differ in content, length and who teaches them, and the people studied differ too. So a result from one program or group may not apply to another.

### Possible adverse experiences

NCCIH notes that meditation and mindfulness practices can sometimes involve unpleasant or adverse experiences, such as increased anxiety. Anyone with a health condition, or who has found practice distressing, should talk to a qualified health professional. Stopping a practice that feels harmful is always acceptable.

### Judging claims

When reading a study, identify the practice, the comparison group, the outcome and the follow-up period before applying its findings to another setting.

1. Which program, for whom, compared with what?
2. Is this one study or a summary of many?
3. Does it show cause, or only a link?
4. Are risks mentioned?

## Self-check

Assess this advert: *"Our 10-minute daily mindfulness app is scientifically proven to cure stress and has no side effects."*

## Model answer

- **"Scientifically proven to cure":** the research summary describes mixed evidence that varies by outcome. "Cure" is not supported.
- **Generalising from other programs:** evidence about one program, such as MBSR, does not automatically apply to a different app.
- **"No side effects":** NCCIH notes that adverse experiences can occur.
- A fairer claim would be specific and cautious, for example: "Some people find brief mindfulness practice helpful. The evidence is mixed. Stop and seek advice if it causes distress."

## Sources

- ${SRC.nccih} (mixed evidence; programs differ; potential adverse experiences).
`
          }
        ]
      }
    ]
  }
];
