import { useEffect } from "react";
import "./case-study.css";

const proto =
  "https://www.figma.com/proto/xCkPFRpL3BUfoboQNeVWCh/Lopesh-Portfolio?node-id=632-333&t=YFu4XpfMqIP91zUS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=632%3A333";

const outcomes = [
  { value: "8%", label: "Doctor sign-ups ↑" },
  { value: "2X", label: "Faster journey completion" },
  { value: "15%", label: "Revenue conversion" },
];

const facts = [
  { label: "Role", value: "UI/UX Researcher & Designer" },
  { label: "Duration", value: "4 months" },
  { label: "Platform", value: "iOS & Android" },
];

const problems = [
  {
    lead: "Manual processes",
    text: "Appointment bookings, patient records, and prescriptions are often paper-based, leading to loss, duplication, and errors.",
  },
  {
    lead: "Fragmented communication",
    text: "Lack of centralized communication means doctors juggle between calls, WhatsApp, and SMS to reach patients.",
  },
  {
    lead: "Inefficient consultation management",
    text: "Tracking pending, ongoing, and completed appointments is cumbersome, especially with increased telemedicine demand.",
  },
  {
    lead: "Inaccessible patient history",
    text: "Without digital records, following up on previous consultations and ensuring continuity of care is challenging.",
  },
  {
    lead: "Payment tracking difficulties",
    text: "Managing consultation fees, tracking paid/unpaid appointments, and issuing receipts is often an administrative hassle.",
  },
];

const solutions = [
  {
    lead: "Centralized appointment management",
    text: "View pending, ongoing, and completed consultations at a glance. Easily contact patients via call or WhatsApp directly from the app.",
  },
  {
    lead: "Digital patient records",
    text: "Store patient information, consultation history, and prescriptions securely for instant access during follow-ups.",
  },
  {
    lead: "Integrated teleconsultation",
    text: "Support for video consultations and digital appointment scheduling.",
  },
  {
    lead: "Prescription generation",
    text: "Quickly add and send digital prescriptions, minimizing paperwork and errors.",
  },
  {
    lead: "Payment tracking",
    text: "Display transaction details, payment status, and manage billing within each appointment.",
  },
  {
    lead: "User-friendly interface",
    text: "Color-coded actions, intuitive icons, and a modern design tailored for quick navigation and a minimal learning curve.",
  },
];

const workstreams = [
  {
    n: "01",
    title: "Discovery & Research 🧠",
    steps: [
      "Conducted interviews with practicing doctors to understand their workflows, frustrations, and digital adoption barriers.",
      "Mapped out key pain points and daily routines.",
      "Synthesized findings into clear problem statements such as: “Doctors need a simple way to manage consultations and prescriptions digitally without disrupting their routine.”",
    ],
  },
  {
    n: "02",
    title: "Information Architecture & Strategy 🏗️",
    steps: [
      "Created wireframes and high-fidelity UI designs, focusing on clear action buttons, colour-coded status, and minimal steps to complete key tasks.",
      "Ensured all critical actions (call, WhatsApp, add prescription, mark as done) are accessible in one touch.",
    ],
  },
  {
    n: "03",
    title: "UX/UI Design 🎨",
    steps: [
      "Designed a modern dashboard interface focused on clarity, efficiency, and ease of use.",
      "Built a consistent visual system with reusable UI components, spacing rules, and typography hierarchy.",
    ],
  },
  {
    n: "04",
    title: "Collaboration & Execution 🚑",
    steps: [
      "Worked closely with founders, developers, and internal teams to align business goals with product execution.",
    ],
  },
  {
    n: "05",
    title: "Iteration & Evolution 🔄",
    steps: [
      "Conducted usability tests with doctors using interactive prototypes.",
      "Gathered feedback and iterated on navigation, feature accessibility, and visual clarity.",
      "Optimized data visibility, task tracking, and notification flows for improved efficiency.",
    ],
  },
];

const phases = [
  { phase: "Phase 1 · Research", text: "User interviews, synthesis, persona building" },
  { phase: "Phase 2 · Define", text: "Problem framing, user flows, IA" },
  { phase: "Phase 3 · Design", text: "Wireframes, UI design, prototype" },
  { phase: "Phase 4 · Iterate", text: "Usability testing, refinements, final handoff" },
];

const quotes = [
  {
    quote:
      "I spend too much time writing prescriptions manually, which reduces the time I can actually spend with patients during consultations.",
    who: "Dr. Mehta, General Physician",
  },
  {
    quote:
      "Managing appointments, walk-ins, and follow-ups together becomes difficult, especially during peak clinic hours.",
    who: "Dr. Shah, Clinic Owner",
  },
  {
    quote: "I often end up repeating the same medicines and instructions for common cases almost every day.",
    who: "Dr. Kulkarni, Pediatrician",
  },
  {
    quote:
      "Sometimes patients or pharmacies struggle to understand handwritten prescriptions, which can lead to unnecessary confusion.",
    who: "Dr. Patil, Specialist",
  },
];

const insights = [
  {
    n: "01",
    title: "Repetitive workflows",
    text: "Doctors spent significant time repeatedly writing the same medicines, dosage instructions, and follow-up details for common cases.",
  },
  {
    n: "02",
    title: "Consultation pressure",
    text: "Managing appointments, patient history, and prescriptions together often reduced the time available for patient interaction.",
  },
  {
    n: "03",
    title: "Prescription clarity",
    text: "Handwritten prescriptions sometimes created confusion for patients and pharmacies due to readability issues.",
  },
  {
    n: "04",
    title: "Clinic management overload",
    text: "Handling walk-ins, scheduled appointments, and follow-ups manually became difficult during busy clinic hours.",
  },
];

const persona = {
  name: "Dr. Priya Sharma",
  role: "General Physician, Private Clinic, 38",
  quote:
    "I want to spend more time with my patients, not on paperwork. If I can manage everything from my phone, that’s a relief.",
  pains:
    "Administrative overload, lost or misplaced prescriptions, fragmented communication, and difficulty tracking appointment payments.",
  goals: [
    "Manage appointments more efficiently",
    "Maintain accurate and clear patient records",
    "Focus more on patient interaction during consultations",
    "Reduce time spent on repetitive prescription writing",
  ],
  frustrations: [
    "Rewriting common medicines and instructions daily",
    "Managing walk-ins and scheduled appointments together",
    "Handwritten prescriptions causing confusion",
    "Difficulty accessing old patient records quickly",
  ],
};

const empathy = [
  {
    title: "Thinks & feels",
    emoji: "🧠",
    items: [
      "Pressure during busy clinic hours.",
      "Frustration from repetitive tasks.",
      "Concern about maintaining accuracy while saving time.",
    ],
  },
  {
    title: "Hears",
    emoji: "👂",
    items: [
      "Patients asking repetitive questions.",
      "Constant phone calls for appointments and follow-ups.",
      "Staff coordinating schedules manually.",
    ],
  },
  {
    title: "Sees",
    emoji: "👁️",
    items: [
      "Crowded waiting rooms.",
      "Stacks of patient files and handwritten notes.",
      "Time being lost on administrative work.",
    ],
  },
  {
    title: "Says & does",
    emoji: "🗣",
    items: [
      "Writes similar prescriptions repeatedly.",
      "Manages appointments between consultations.",
      "Tries to keep consultations quick without compromising care.",
    ],
  },
];

const entry = ["Splash screen", "Onboarding", "Authentication", "Doctor dashboard"];

const branches = [
  { title: "Appointments management", items: ["Today’s queue", "Walk-ins", "Follow-ups", "Calendar"] },
  { title: "Patients records", items: ["Search", "Patient list", "Patient info", "History"] },
  {
    title: "Prescription management",
    items: ["Create Rx", "Medicine", "Dosage", "Instructions"],
    tail: "Save / share Rx",
  },
  { title: "Consultation history", items: ["Past visits", "Previous Rx", "Notes", "Attachments"] },
  { title: "Notifications & alerts", items: ["New alerts", "Follow-ups", "Reminders", "Archive"] },
];

const learnings = [
  {
    n: "01",
    title: "Role-based UX improved usability significantly",
    text: "Designing around staff responsibilities instead of generic dashboards created a more intuitive experience. Users could focus only on the tasks relevant to their daily workflow.",
  },
  {
    n: "02",
    title: "Multi-clinic management needed greater visibility",
    text: "During the design process, assigning assistants to multiple clinics emerged as a critical operational requirement. Making clinic assignment more visible improved administrative confidence and reduced errors.",
  },
  {
    n: "03",
    title: "Progressive disclosure worked better than dense forms",
    text: "Breaking large workflows into smaller sections helped reduce cognitive load, especially for healthcare staff working in fast-paced environments.",
  },
  {
    n: "04",
    title: "Operational context matters in healthcare products",
    text: "Features like quick appointment access, billing shortcuts, WhatsApp communication, and prescription management became more important than visually complex UI patterns.",
  },
];

const future = [
  "Insurance integration",
  "Advanced reporting dashboards",
  "Smart scheduling suggestions",
  "Staff activity logs",
  "Inventory & pharmacy management",
  "Real-time notifications and reminders",
];

function Seq({ n, children }: { n?: string; children: string }) {
  return (
    <h2>
      {n ? <span className="cs-seq">{n}</span> : null}
      {children}
    </h2>
  );
}

function Points({ items }: { items: { lead: string; text: string }[] }) {
  return (
    <ul className="cs-points">
      {items.map((item) => (
        <li key={item.lead}>
          <strong>{item.lead}:</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

function List({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ArchNode({ children }: { children: string }) {
  return <span className="cs-arch-node">{children}</span>;
}

function Face({ kind }: { kind: "user" | "brain" }) {
  return (
    <span className={`cs-face cs-face-${kind}`} aria-hidden="true">
      {kind === "brain" ? (
        "🧠"
      ) : (
        <svg viewBox="0 0 24 24" width="28" height="28">
          <circle cx="12" cy="8" r="4" fill="currentColor" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="currentColor" />
        </svg>
      )}
    </span>
  );
}

function Proto() {
  return (
    <a className="offset-btn cs-proto" href={proto} target="_blank" rel="noreferrer">
      Prototype Link
      <span className="offset-btn-icon">
        <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
      </span>
    </a>
  );
}

export function CaseStudyPrescrip() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-prescrip cs-paneled">
      <section className="cs-hero">
        <img
          src="/assets/cs-prescrip-hero.png"
          alt="Prescrip, a doctor using the app beside a Today’s Appointments panel"
        />
        <div className="cs-hero-copy">
          <h1>Prescrip, App for Doctors</h1>
        </div>
      </section>

      <div className="cs-wrap">
        <div className="cs-toolbar">
          <a className="cs-back" href="#work">
            ← Back to selected works
          </a>
          <Proto />
        </div>

        <section className="cs-block cs-outcomes">
          <div className="cs-stats cs-stats-3">
            {outcomes.map((item) => (
              <article key={item.label}>
                <p>{item.value}</p>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq>Overview</Seq>
          <p>
            Prescrip is a mobile app for doctors: appointments, patient records, and prescriptions on a phone, so a
            clinic is not run from paper, WhatsApp, and handwritten scripts.
          </p>
          <dl className="cs-facts">
            {facts.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="cs-proto-block">
            <p className="cs-sub">Explore the Prototype</p>
            <Proto />
          </div>
        </section>

        <section className="cs-block">
          <Seq n="01">Why This Matters</Seq>
          <p>
            The landscape of healthcare is changing rapidly, with a growing emphasis on digital transformation and
            telemedicine. For practicing doctors, especially in fast-paced clinical settings, managing patient records,
            appointments, and prescriptions efficiently is critical, not only for operational effectiveness but for
            improving patient care and safety.
          </p>
          <p>
            Traditional paper-based systems are prone to errors, loss, and inefficiency, while the COVID-19 pandemic
            underscored the need for remote consultation tools. Prescrip bridges that gap with a simple, secure, and
            intuitive platform for managing a practice digitally.
          </p>
          <figure className="cs-shot">
            <img
              src="/assets/cs-prescrip-showcase.png"
              alt="Prescrip app screens: a doctor profile with booking options, and a transactions dashboard"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="cs-block">
          <Seq n="02">The Objective</Seq>
          <p>
            Empower doctors with a digital tool that streamlines patient management, appointment scheduling, and
            prescription generation, all in one place. The goal was to reduce administrative burden, minimize manual
            errors, improve access to patient data, and enable remote care, while ensuring data security and a gentle
            learning curve for medical professionals.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="03">The Problem</Seq>
          <p>Doctors face several pain points with the systems they have today:</p>
          <Points items={problems} />
        </section>

        <section className="cs-block">
          <Seq n="04">The Solution</Seq>
          <p>Prescrip is a mobile application designed for doctors, offering:</p>
          <Points items={solutions} />
        </section>

        <section className="cs-block">
          <Seq n="05">Process</Seq>
          <div className="cs-decisions">
            {workstreams.map((item) => (
              <article key={item.n}>
                <h3>
                  {item.n}. {item.title}
                </h3>
                <List items={item.steps} className="cs-substeps" />
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="06">Design Process</Seq>
          <p>
            The project ran over five weeks with a structured double-diamond approach, diverging to understand users
            deeply before converging on a validated, testable solution.
          </p>
          <div className="cs-goals cs-goals-4">
            {phases.map((item) => (
              <article key={item.phase}>
                <b>{item.phase}</b>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="07">User Research</Seq>
          <p>
            To better understand real clinical workflows, I ran 1:1 interviews with 15 doctors: general physicians,
            specialists, and clinic owners. The goal was to learn what they struggle with while managing appointments,
            writing prescriptions, and handling consultations. Those conversations pointed to the same few
            opportunities: simplify workflows, cut repetitive tasks, and give time back to the consultation itself.
          </p>
          <p className="cs-sub">What I heard</p>
          <div className="cs-quotes">
            {quotes.map((item) => (
              <blockquote key={item.who}>
                <p>{item.quote}</p>
                <cite>{item.who}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="08">Key Research Insights</Seq>
          <div className="cs-impact-list">
            {insights.map((item) => (
              <article key={item.n}>
                <h3>
                  {item.n}. {item.title}
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block cs-duo-block">
          <Seq n="09">User Personas</Seq>
          <div className="cs-duo">
            <article className="cs-persona-card">
              <header className="cs-persona-head">
                <Face kind="user" />
                <div>
                  <h3>{persona.name}</h3>
                  <p className="cs-persona-role">{persona.role}</p>
                </div>
              </header>
              <blockquote>“{persona.quote}”</blockquote>
              <p className="cs-persona-pains">{persona.pains}</p>
              <p className="cs-kicker">Goals</p>
              <List items={persona.goals} className="cs-bullets" />
              <p className="cs-kicker">Frustrations</p>
              <List items={persona.frustrations} className="cs-bullets" />
            </article>

            <article className="cs-persona-card">
              <header className="cs-persona-head">
                <Face kind="brain" />
                <h3>Empathy Map</h3>
              </header>
              <p className="cs-persona-pains">
                The empathy map helped uncover the operational and emotional challenges doctors experience while
                handling consultations, appointments, and patient documentation daily.
              </p>
              <div className="cs-empathy">
                {empathy.map((item) => (
                  <article key={item.title}>
                    <h3>
                      <span aria-hidden="true">{item.emoji}</span> {item.title}
                    </h3>
                    <List items={item.items} className="cs-bullets" />
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="10">Design &amp; Architecture</Seq>
          <p className="cs-sub">Information Architecture</p>
          <p>
            Built around doctors’ core workflows (appointments, prescriptions, patient records), keeping navigation
            simple and task-focused. Everything routes through a single dashboard rather than nesting features in
            separate corners of the app.
          </p>
          <div
            className="cs-arch"
            role="img"
            aria-label="Prescrip information architecture: splash, onboarding, and authentication lead into the doctor dashboard, which branches into appointments, patient records, prescriptions, consultation history, and notifications."
          >
            <ol className="cs-arch-entry">
              {entry.map((step) => (
                <li key={step}>
                  <ArchNode>{step}</ArchNode>
                </li>
              ))}
            </ol>
            <div className="cs-arch-branches">
              {branches.map((item) => (
                <div className="cs-arch-col" key={item.title}>
                  <ArchNode>{item.title}</ArchNode>
                  <ul>
                    {item.items.map((leaf) => (
                      <li key={leaf}>
                        <ArchNode>{leaf}</ArchNode>
                      </li>
                    ))}
                  </ul>
                  {"tail" in item && item.tail ? (
                    <p className="cs-arch-tail">
                      <ArchNode>{item.tail}</ArchNode>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="11">Wireframes & UI Design</Seq>
          <p>
            Wireframes prioritized information hierarchy over visual polish, making sure the right data surfaced at each
            decision moment without the doctor having to dig for it. The UI design then introduced a calm, reassuring
            palette and a clear typographic hierarchy, reflecting the context these screens get used in: mid-clinic,
            between patients, under time pressure.
          </p>
          <p className="cs-sub">Wireframes</p>
          <figure className="cs-shot">
            <img
              src="/assets/cs-prescrip-wireframes.png"
              alt="Prescrip wireframes: doctor dashboard, clinics list, add assistant, assistant role permissions, and consultation notes"
              loading="lazy"
            />
          </figure>

          <p className="cs-sub">High-fidelity UI screens</p>
          <figure className="cs-shot">
            <img
              src="/assets/cs-prescrip-screens.png"
              alt="Prescrip final UI: video consultation setup, pending consultations, transactions dashboard, patient vitals, clinic appointments, and a generated prescription"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="cs-block">
          <Seq n="12">Reflections & Learnings</Seq>
          <div className="cs-impact-list">
            {learnings.map((item) => (
              <article key={item.n}>
                <h3>
                  {item.n}. {item.title}
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="cs-sub">Where I’d take it next</p>
          <div className="cs-flow">
            {future.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <a className="cs-back" href="#work">
          ← Back to selected works
        </a>
      </div>
    </main>
  );
}
