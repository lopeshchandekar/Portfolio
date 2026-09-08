import { Fragment, useEffect } from "react";
import "./case-study.css";

const proto =
  "https://www.figma.com/proto/z7CgmIA9rcgg7nyeYgP4jU/CorssFit?node-id=662-2813&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A1321";

const protoEmbed =
  "https://embed.figma.com/proto/z7CgmIA9rcgg7nyeYgP4jU/CorssFit?node-id=662-2813&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42-1321&hide-ui=1&embed-host=share";

const outcomes = [
  { value: "425+", label: "Active users" },
  { value: "35%+", label: "Retention ↑" },
  { value: "4.5", label: "Average rating" },
];

const facts = [
  { label: "Client", value: "CrossFit Kaali · Mumbai" },
  { label: "Platform", value: "iOS & Android" },
  { label: "Research", value: "8 athletes · 2 coaches · 1 gym owner" },
  { label: "My Role", value: "Product Designer" },
];

const goals = [
  "Track workout performance effortlessly",
  "Monitor fitness progress over time",
  "Access daily WODs from anywhere",
  "Stay consistent with training routines",
  "Achieve personal records and fitness milestones",
  "Compare performance with fellow athletes",
  "Engage with the gym community",
  "Stay motivated through competition and recognition",
];

const process = [
  { n: "01", title: "Observe" },
  { n: "02", title: "Define" },
  { n: "03", title: "Ideate" },
  { n: "04", title: "Design" },
  { n: "05", title: "Validate" },
];

const takeaways = [
  {
    title: "Why people join CrossFit",
    text: "Users are motivated by structured training, measurable progress, accountability, and being part of a supportive fitness community.",
  },
  {
    title: "How they track performance",
    text: "Many athletes manually record scores through notebooks, spreadsheets, WhatsApp groups, or gym whiteboards, making it difficult to monitor long-term progress.",
  },
  {
    title: "What motivates them",
    text: "Personal records, leaderboards, community recognition, streaks, and visible improvement are strong drivers of engagement.",
  },
  {
    title: "When they engage",
    text: "Before workouts to check the WOD, after workouts to log scores, and throughout the day to compare performance with peers.",
  },
];

const userChallenges = [
  {
    title: "Inconsistent workout tracking",
    text: "Users struggle to maintain a complete history of workouts because scores are recorded across multiple tools or not recorded at all.",
  },
  {
    title: "Lack of progress visibility",
    text: "Athletes often train consistently but find it difficult to understand whether they are improving over time.",
  },
  {
    title: "Limited community outside the gym",
    text: "Most interactions happen during class, leaving little opportunity for continued motivation and accountability.",
  },
  {
    title: "Difficulty accessing historical records",
    text: "Finding previous scores, personal records, or workout performance requires manually searching through notes or spreadsheets.",
  },
  {
    title: "Lack of recognition",
    text: "Athletes want PRs, streaks, and effort seen beyond the class, not only in the room while the whiteboard is still up.",
  },
];

const solutions = [
  {
    lead: "Daily WOD",
    text: "Today’s workout is the home screen (strength, warmup, metcon, accessory), not a buried class schedule.",
  },
  {
    lead: "Plan ahead",
    text: "Plan WOD lists upcoming sessions so members can see the week, not only the hour they walk in.",
  },
  {
    lead: "Log the score",
    text: "After class, type, time, rounds, and notes live on one screen, instead of a notebook or a WhatsApp chat.",
  },
  {
    lead: "Progress by movement",
    text: "Analytics track 1RMs and history per lift, so improvement is visible without reconstructing a spreadsheet.",
  },
  {
    lead: "Leaderboard and streaks",
    text: "Daily / weekly ranks and streak badges keep competition and consistency going after class ends.",
  },
  {
    lead: "Box community",
    text: "Comments and a feed sit on the workout, so the whiteboard conversation has a place to live on the phone.",
  },
];

const problems = [
  {
    title: "Scores lived in too many places",
    text: "Notebooks, WhatsApp, whiteboards, and memory meant there was no single history of a member’s training.",
  },
  {
    title: "Work was invisible",
    text: "People trained consistently but could not tell if they were getting stronger week to week.",
  },
  {
    title: "The community stopped at the door",
    text: "Accountability happened in class. After that, there was no leaderboard, streak, or recognition to come back to.",
  },
];

const journey = ["Check today’s WOD", "Train in class", "Log the score", "See PRs and rank", "Come back for the streak"];

const ia = [
  { title: "Home", text: "Streak, weekly progress, today’s WOD, leaders of the day, personal records." },
  { title: "WOD", text: "Full workout list, notes, comments. The digital whiteboard." },
  { title: "Log", text: "Type, score, rounds, reps, how it felt. Save. Done." },
  { title: "Analytics", text: "Week overview, top movements, 1RM history per lift." },
  { title: "Community", text: "Leaderboard, streaks and badges, box feed, profile and membership." },
];

const decisions = [
  {
    n: "01",
    title: "Put the WOD on home",
    decision: "The first screen is today’s work, not a generic fitness dashboard.",
    why: "Members open the app to know what they are about to do. If that takes two taps, they go back to the whiteboard.",
  },
  {
    n: "02",
    title: "Logging is its own step",
    decision: "Score entry is a dedicated flow after class (type, time, optional rounds), not mixed into discovery.",
    why: "Logging happens sweaty and rushed. It has to be one screen, or it does not happen.",
  },
  {
    n: "03",
    title: "Progress is per movement, not steps",
    decision: "Analytics are built around 1RMs and history for lifts like back squat and deadlift.",
    why: "CrossFit progress is PRs, not a step count. A generic activity graph would not answer “am I stronger?”",
  },
  {
    n: "04",
    title: "Keep the box together after class",
    decision: "Leaderboard, streaks, and comments sit next to the WOD so competition does not end when people leave the floor.",
    why: "Interviews said community was the reason people stay. The app had to carry that past the hour of class.",
  },
];

const impacts = [
  {
    title: "425+ active users",
    copy: "The box now has a digital system of record for WODs and scores, instead of scattered notes.",
  },
  {
    title: "35%+ retention ↑",
    copy: "Streaks, PRs, and a standing leaderboard give people a reason to come back between classes.",
  },
  {
    title: "4.5 average rating",
    copy: "The app is used as the daily companion to class (check, train, log), not as an unused membership portal.",
  },
];

function Seq({ n, children }: { n?: string; children: string }) {
  return (
    <h2>
      {n ? <span className="cs-seq">{n}</span> : null}
      {children}
    </h2>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="cs-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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

export function CaseStudyAcrossfit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-acrossfit cs-paneled">
      <section className="cs-hero">
        <img
          src="/assets/cs-acrossfit-hero.jpg"
          alt="CrossFit Kaali gym: a coach addressing athletes, with the line Empowering India through Strength, Discipline and Community"
        />
        <div className="cs-hero-copy">
          <h1>Acrossfit Kaali: Workout tracking for a CrossFit community</h1>
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
          <Seq n="00">Overview</Seq>
          <dl className="cs-facts">
            {facts.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            The product was built to simplify workout planning, progress tracking, and daily fitness management while
            creating a seamless and motivating mobile experience for users across different fitness levels.
          </p>
          <p>
            CrossFit Kaali (Goddess of Boxes) needed an app around its own training methodology and community, not
            another generic gym tracker.
          </p>
          <p className="cs-sub">The Acrossfit Kaali app</p>
          <figure className="cs-shot">
            <img
              src="/assets/cs-acrossfit-showcase.jpg"
              alt="Acrossfit Kaali on three phones: Work of the Day dashboard, Plan WOD, and Workout Tracking onboarding"
              loading="lazy"
            />
          </figure>
          <div className="cs-proto-block">
            <p className="cs-sub">Explore the Prototype</p>
            <Proto />
          </div>
        </section>

        <section className="cs-block">
          <Seq n="01">Why this matters</Seq>
          <p>
            CrossFit is fundamentally different from a traditional gym experience. Members don’t simply follow
            individual workout plans. They train as a community, compete with one another, track performance daily,
            and constantly strive to improve personal records.
          </p>
          <p>
            While many CrossFit gyms in India rely on third-party platforms to manage workouts and leaderboards,
            Acrossfit Kaali wanted a solution built around its own training methodology and community culture. The goal
            was a dedicated digital experience that could support daily workouts, performance tracking, coach-led
            programming, and community-driven competition in a single platform.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="02">Objective</Seq>
          <p>
            Give the box a dedicated app for daily WODs, logging scores, seeing progress, and competing with the
            community, built around how CrossFit Kaali actually trains, not a generic membership template.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="03">Goals</Seq>
          <List items={goals} />
        </section>

        <section className="cs-block">
          <Seq n="04">The Solution</Seq>
          <p>
            One app for the hour before class, the hour after, and the days in between. Built around how this box
            already trains, not a generic gym membership shell.
          </p>
          <Points items={solutions} />
        </section>

        <section className="cs-block">
          <Seq n="05">Process</Seq>
          <div className="cs-goals">
            {process.map((item) => (
              <article key={item.n}>
                <b>Step {item.n}</b>
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="06">Observe</Seq>
          <p className="cs-sub">User interviews</p>
          <p>
            I interviewed 8 CrossFit athletes, 2 coaches, and 1 gym owner to understand how members track workouts, stay
            motivated, and engage with their fitness community. The goal was to uncover challenges around workout
            logging, progress tracking, and maintaining consistency.
          </p>
          <article className="cs-persona-card">
            <h3>User profile</h3>
            <p>
              Ages 18-45, active gym members who regularly participate in WODs, strength training, and community fitness
              programs. Most users rely on a combination of gym whiteboards, spreadsheets, notes apps, or memory to
              track their performance.
            </p>
          </article>
          <div className="cs-duo cs-research-split">
            <div>
              <h3>Key takeaways</h3>
              <div className="cs-impact-list">
                {takeaways.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3>User challenges</h3>
              <div className="cs-impact-list">
                {userChallenges.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="07">Define</Seq>
          <p>
            The interviews did not point to a prettier class calendar. They pointed to three jobs the analog tools were
            failing:
          </p>
          <div className="cs-decisions">
            {problems.map((item, i) => (
              <article key={item.title}>
                <h3>
                  0{i + 1}. {item.title}
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="08">Ideate</Seq>
          <p>
            The product had to match the real loop of a CrossFit day, then give the box a place to live after people
            left the floor.
          </p>
          <p className="cs-sub">Daily loop</p>
          <div className="cs-flow">
            {journey.map((step, i) => (
              <Fragment key={step}>
                <span>{step}</span>
                {i < journey.length - 1 ? <i aria-hidden="true">→</i> : null}
              </Fragment>
            ))}
          </div>
          <p className="cs-sub">Information architecture</p>
          <div className="cs-challenge-list">
            {ia.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="cs-sub">Lo-fi wireframes</p>
          <p>
            Early concepts mapped workout flows, leaderboards, membership, and training progress. Navigation stayed
            shallow so today’s WOD, log, and records were never more than a tap away.
          </p>
          <figure className="cs-shot">
            <img
              src="/assets/cs-acrossfit-wireframes.jpg"
              alt="Lo-fi wireframes: home dashboard, WOD details, log workout, analytics overview, movement detail, leaderboard, streaks, community, profile, and menu"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="cs-block">
          <Seq n="09">Design</Seq>
          <p>
            Hi-fi keeps the same structure as the wireframes: WOD first, then plan, log, and progress. Workout types
            get their own color so strength, warmup, metcon, and accessory scan as different jobs on one list.
          </p>
          <div className="cs-decisions">
            {decisions.map((item) => (
              <article key={item.n}>
                <h3>
                  {item.n}. {item.title}
                </h3>
                <p>
                  <strong>Decision:</strong> {item.decision}
                </p>
                <p>
                  <strong>Why:</strong> {item.why}
                </p>
              </article>
            ))}
          </div>
          <figure className="cs-shot">
            <img
              src="/assets/cs-acrossfit-showcase.jpg"
              alt="Hi-fi Acrossfit Kaali: Work of the Day, Plan WOD, and Workout Tracking onboarding"
              loading="lazy"
            />
          </figure>
          <p className="cs-sub">Live prototype</p>
          <div className="cs-proto-phone">
            <div className="cs-phone">
              <div className="cs-phone-screen">
                <iframe title="Acrossfit Kaali, interactive prototype" src={protoEmbed} allowFullScreen />
              </div>
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="10">Validate</Seq>
          <p>
            After launch the app became the place scores live. Retention and rating sit on top of that: a daily habit
            around class, not a download that goes unused.
          </p>
          <div className="cs-impact-list">
            {impacts.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
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
