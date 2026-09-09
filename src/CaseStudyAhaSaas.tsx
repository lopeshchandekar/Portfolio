import { useEffect } from "react";
import "./case-study.css";

const proto =
  "https://www.figma.com/proto/iPXYsUGPaQrk3tMgygtu8U/AHA-Project-Management-APP?node-id=4538-7525&t=nPHilSFSrehJrV9z-0&scaling=min-zoom&content-scaling=fixed&page-id=3063%3A5293&starting-point-node-id=4538%3A7525&hide-ui=1";

const facts = [
  { label: "Client", value: "AHA Smart Homes" },
  { label: "Product", value: "Internal operations SaaS, first version" },
  { label: "Platform", value: "Desktop + tablet" },
  { label: "Team", value: "Sr. Product Designer · Junior Designer · Product Manager · Sr. Developer" },
];

const outcomes = [
  { value: "50%", label: "Less operational work" },
  { value: "4+", label: "Hours saved per team" },
];

const preSteps = [
  { step: "STEP 1", icon: "lead", lead: "Lead from Meta ads → call → demo", note: "Customer details were in CRM, WhatsApp, and a notebook" },
  { step: "STEP 2", icon: "sheet", lead: "Quotation made in a separate Excel", note: "Each person used a different format. Many files for the same quote" },
  { step: "STEP 3", icon: "share", lead: "Proposal PDF sent on WhatsApp from that Excel", note: "Nobody knew which PDF the client had" },
  { step: "STEP 4", icon: "plan", lead: "Device plan drawn on paper", note: "Sales, site team, and store did not agree on what was sold" },
  { step: "STEP 5", icon: "phone", lead: "Engineer got the brief on calls and WhatsApp", note: "At the house, the plan did not match" },
  { step: "STEP 6", icon: "track", lead: "Work tracked by follow-up calls and messages", note: "PM checked the WhatsApp group to know the status" },
  { step: "STEP 7", icon: "pay", lead: "Money tracked in a separate accounts Excel", note: "Install still started when payment was pending" },
  { step: "STEP 8", icon: "handover", lead: "Handover done on a call. Job never marked closed", note: "No one place that said deal won" },
];

const userRoles = [
  {
    name: "Consultant",
    color: "#4d4afc",
    people: 2 as const,
    job: "Sales. Demo, HA diagram, price, PDF on WhatsApp.",
  },
  {
    name: "Project Manager",
    color: "#7b5cff",
    people: 2 as const,
    job: "Client WhatsApp group, daily tasks, what is still pending.",
  },
  {
    name: "Engineer",
    color: "#1a7a4c",
    people: 2 as const,
    job: "Site visit, then install on tablet or desktop.",
  },
  {
    name: "Procurement",
    color: "#2bb8b3",
    people: 2 as const,
    job: "Inventory for this job, including third-party devices.",
  },
  {
    name: "Accountant",
    color: "#e0a800",
    people: 1 as const,
    job: "Received vs pending. Unpaid parts are not installed.",
  },
  {
    name: "Management",
    color: "#ff3a39",
    people: 1 as const,
    job: "Sees all jobs. Also on the client WhatsApp group.",
  },
];

const decisions = [
  {
    n: "01",
    title: "Six dashboards, not one home",
    decision: "Each role gets its own home on the same job.",
    why: "A consultant placing devices on a floor plan and an engineer on site do not need the same screen. One shared dashboard would bury both.",
  },
  {
    n: "02",
    title: "The PDF still goes on WhatsApp",
    decision: "The SaaS generates the proposal PDF. Sales still sends it in chat.",
    why: "Homeowners already talk on WhatsApp. A client portal would be a login they would not use. The product is for AHA staff.",
  },
  {
    n: "03",
    title: "Install follows the money",
    decision: "If accounts shows amount pending, those devices stay off the wall.",
    why: "Before, install could start while payment sat in a separate Excel. That is now a product rule, not a reminder in a group chat.",
  },
];

const discoveryGoals = [
  {
    id: "G1",
    text: "Understand how a smart home job runs today: lead, proposal, install, payment, and handover.",
  },
  {
    id: "G2",
    text: "Find problems caused by Excel files and WhatsApp.",
  },
  {
    id: "G3",
    text: "See how each role works, and where they get stuck: consultant, engineer, PM, accounts, management.",
  },
  {
    id: "G4",
    text: "Decide what one tool must do, so people stop running the job on Excel and WhatsApp.",
  },
  {
    id: "G5",
    text: "Test the main flows with the team before development: proposal, HA diagram, install tracking, and payment.",
  },
];

const research = [
  ["To understand", "Is the same job split across Excel, CRM, and WhatsApp?"],
  ["To understand", "Where does the job break, from proposal to handover?"],
  ["To understand", "How do sales, site, and accounts share information today?"],
  ["To check", "How is received vs pending money tracked today?"],
  ["To check", "Can people finish a full job inside the new tool, without going back to Excel?"],
];

const lifecycle = [
  {
    n: "01",
    emoji: "👤",
    title: "Customer on file",
    copy: "Lead from Meta ads, then a call, then a demo. After that the customer is saved on the job with the electrical plan, instead of in three places.",
    img: "/assets/cs-aha-life-1.png",
    alt: "Upload electrical layout plan in Proposal Management",
  },
  {
    n: "02",
    emoji: "📐",
    title: "HA diagram: devices and price",
    copy: "The consultant places devices on the floor plan, estimates the price, and generates the PDF that goes out on WhatsApp.",
    img: "/assets/cs-aha-life-2.png",
    alt: "Sales Order Management HA diagram with devices on a floor plan",
  },
  {
    n: "03",
    emoji: "📦",
    title: "Inventory",
    copy: "Procurement handles stock for this job, including anything the site visit added.",
    img: "/assets/cs-aha-life-3.png",
    alt: "Device Manager add-devices form with pricing",
  },
  {
    n: "04",
    emoji: "🏠",
    title: "Site visit, then tasks",
    copy: "Engineer and PM check each point on site. Then the PM assigns daily work in the SaaS. The client still follows the WhatsApp group.",
    img: "/assets/cs-aha-life-4.png",
    alt: "Task List weekly calendar for installation planning",
  },
  {
    n: "05",
    emoji: "🛠️",
    title: "Install on tablet or desktop",
    copy: "Engineers mark progress on the same job. If the accountant shows amount pending, some devices are not installed.",
    img: "/assets/cs-aha-life-5.png",
    alt: "Customer Project Plan with task status updates",
  },
  {
    n: "06",
    emoji: "💳",
    title: "Money on this job",
    copy: "Accounts sees received vs pending here, then emails, posts on the WhatsApp group, or calls. Full payment unlocks handover.",
    img: "/assets/cs-aha-life-7.png",
    alt: "Payment Summary with milestone status",
  },
  {
    n: "07",
    emoji: "🏁",
    title: "Closed / deal won",
    copy: "Management watches the portfolio. After handover, the job is marked closed or deal won. That is the company’s close, not an automated client email.",
    img: "/assets/cs-aha-life-6.png",
    alt: "Project Management overview of project progress",
  },
];

const impacts = [
  {
    icon: "cycle",
    title: "One job, six roles",
    copy: "Quote, floor plan, site, install, stock, and money sit on the same customer. Not five tools.",
  },
  {
    icon: "bolt",
    title: "50% less operational work",
    copy: "Less rebuilding the job from Excel, CRM, and chat. Teams got 4+ hours back.",
  },
  {
    icon: "eye",
    title: "A home for each role",
    copy: "The hard design problem: six dashboards so a consultant and an engineer are not staring at the same screen.",
  },
  {
    icon: "target",
    title: "Install follows the money",
    copy: "Accountant pending is a product rule. Unpaid parts stay off the wall.",
  },
  {
    icon: "send",
    title: "Closed in the tool",
    copy: "Handover still happens with people. The job is then marked closed / deal won on the same record.",
  },
];

function JourneyIcon({ name }: { name: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "lead":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10" cy="8" r="3" {...stroke} />
          <path d="M4 20c0-3 2.7-5 6-5s6 2 6 5" {...stroke} />
          <path d="M18 8v6M15 11h6" {...stroke} />
        </svg>
      );
    case "sheet":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="3" width="16" height="18" rx="2" {...stroke} />
          <path d="M8 8h8M8 12h8M8 16h5" {...stroke} />
        </svg>
      );
    case "share":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12l16-8-6 16-2-6-8-2z" {...stroke} />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="1.5" {...stroke} />
          <path d="M3 10h18M10 4v16M14 10v10" {...stroke} />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h4l1 4-2 2a12 12 0 0 0 5 5l2-2 4 1v4c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2z" {...stroke} />
        </svg>
      );
    case "track":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="2" {...stroke} />
          <path d="M9 9h6M9 13h6M9 17h3" {...stroke} />
        </svg>
      );
    case "pay":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="2" {...stroke} />
          <path d="M3 10h18M7 14h3" {...stroke} />
        </svg>
      );
    case "handover":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 14l3 3 8-8" {...stroke} />
          <circle cx="12" cy="12" r="9" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

function PeopleIcon({ color, people }: { color: string; people: 1 | 2 }) {
  if (people === 1) {
    return (
      <svg className="cs-role-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" fill={color} />
        <path d="M5 20c0-3.8 3.1-6.5 7-6.5s7 2.7 7 6.5" fill={color} />
      </svg>
    );
  }
  return (
    <svg className="cs-role-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3.4" fill={color} />
      <path d="M3.2 20c0-3.3 2.6-5.6 5.8-5.6s5.8 2.3 5.8 5.6" fill={color} />
      <circle cx="16" cy="8.5" r="3" fill={color} opacity="0.85" />
      <path d="M11.5 20c0.4-2.6 2.4-4.6 5-4.6 2.8 0 5 2.2 5 5" fill={color} opacity="0.85" />
    </svg>
  );
}

function ImpactIcon({ name }: { name: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "cycle":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" {...stroke} />
          <path d="M20 4v4h-4" {...stroke} />
          <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" {...stroke} />
          <path d="M4 20v-4h4" {...stroke} />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 3L5 14h7l-1 7 8-11h-7l1-7z" {...stroke} />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" {...stroke} />
          <circle cx="12" cy="12" r="3" {...stroke} />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" {...stroke} />
          <circle cx="12" cy="12" r="4" {...stroke} />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12l16-8-6 16-2-6-8-2z" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

function Seq({ n, children }: { n: string; children: string }) {
  return (
    <h2>
      <span className="cs-seq">{n}</span>
      {children}
    </h2>
  );
}

export function CaseStudyAhaSaas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-paneled cs-aha-saas">
      <section className="cs-hero">
        <img src="/assets/cs-aha-hero.jpg" alt="" />
        <div className="cs-hero-copy">
          <h1>AHA SaaS System</h1>
          <p className="cs-hero-lede">Internal operations for AHA’s teams. Not the public website. Homeowners never log in.</p>
        </div>
      </section>

      <div className="cs-wrap">
        <div className="cs-toolbar">
          <a className="cs-back" href="#work">
            ← Back to selected works
          </a>
          <a className="offset-btn cs-proto" href={proto} target="_blank" rel="noreferrer">
            Prototype Link
            <span className="offset-btn-icon">
              <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
            </span>
          </a>
        </div>

        <section className="cs-block cs-outcomes">
          <div className="cs-stats cs-stats-2">
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
            AHA designs smart homes: hardware, software, and installation. This case study is the{" "}
            <strong>internal SaaS</strong> their teams use to run a job. Homeowners never log in. The public website is
            a separate case study.
          </p>
          <p>We built the first version from scratch.</p>
          <div className="cs-role">
            <h3>My Role</h3>
            <p className="cs-role-title">Sr. Product Designer</p>
            <p>
              I led research, flows, role dashboards, the HA diagram, and the prototype. The hard problem was six
              dashboards for six roles on one job.
            </p>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="01">The problem</Seq>
          <p>
            A job sat in CRM, Excel, paper drawings, WhatsApp, and a separate accounts file. Same customer, five
            places. Those are the eight steps below.
          </p>
        </section>

        <section className="cs-journey">
          <p className="cs-label">The job, before the SaaS</p>
          <ol className="cs-steps">
            {preSteps.map((item) => (
              <li key={item.step}>
                <div className="cs-step-mark problem">
                  <JourneyIcon name={item.icon} />
                  <span>{item.step}</span>
                </div>
                <p>
                  {item.lead}
                  <em>{item.note}</em>
                </p>
              </li>
            ))}
          </ol>
          <div className="cs-callout problem">
            <p>The problem</p>
            <div>
              {["No one place for the job", "Proposal PDF made outside the tool", "Site visit not in the plan", "Install even if payment pending"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="02">What I chose</Seq>
          <p>
            After sitting with each role on a live job, I made three calls. They decided the product. Everything else is
            screens.
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
        </section>

        <section className="cs-block">
          <Seq n="03">User Roles</Seq>
          <p>Six roles, six dashboards. Only AHA staff log in.</p>
          <div className="cs-role-grid">
            {userRoles.map((role) => (
              <article className="cs-role-card cs-role-card-job" key={role.name}>
                <PeopleIcon color={role.color} people={role.people} />
                <div>
                  <span>{role.name}</span>
                  <small>{role.job}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="04">Discovery and research</Seq>
          <p>
            I sat with consultants, PMs, engineers, procurement, accounts, and management, plus the product manager and
            senior developer. We followed one job from first lead to handover, then wrote what we had to know before
            drawing screens.
          </p>
          <div className="cs-goals">
            {discoveryGoals.map((goal) => (
              <article key={goal.id}>
                <b>{goal.id}</b>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
          <p className="cs-label">Research questions</p>
          <table className="cs-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Research question</th>
              </tr>
            </thead>
            <tbody>
              {research.map(([type, q]) => (
                <tr key={q}>
                  <td>
                    <span className={type === "To understand" ? "cs-type cs-type-gen" : "cs-type cs-type-eval"}>{type}</span>
                  </td>
                  <td>{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cs-block">
          <Seq n="05">Information architecture</Seq>
          <p>
            Card sorting with consultants, PMs, engineers, procurement, accounts, and management showed how they already
            grouped a job: proposals, devices on a floor plan, installation tasks, inventory, and payments.
          </p>
          <p>
            The IA follows those clusters, so each role’s dashboard is a slice of the same map. It is not a marketing
            funnel (understand the offering, then trust, then take action).
          </p>
          <img
            className="cs-figure"
            src="/assets/cs-aha-ia.png?v=2"
            alt="Card sorting boards exploring information architecture across three groupings"
          />
        </section>

        <section className="cs-block">
          <Seq n="06">Design system</Seq>
          <p>
            Six dashboards still have to feel like one company. Tokens, type, and shared components kept web and tablet
            from drifting while each home stayed role-specific.
          </p>
          <img
            className="cs-figure"
            src="/assets/cs-aha-design-system.png?v=2"
            alt="AHA Smart Homes design system: color foundations and brand palette"
          />
        </section>

        <section className="cs-block">
          <Seq n="07">How a job moves through the product</Seq>
          <p>
            WhatsApp is still how the household sees the job. The SaaS is how AHA trusts it. Each step below is a
            screen, not a slide.
          </p>
          <ol className="cs-life">
            {lifecycle.map((item) => (
              <li key={item.n}>
                <div className="cs-life-mark">
                  <span className="cs-life-emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <b>{item.n}</b>
                </div>
                <div className="cs-life-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <img className="cs-life-shot" src={item.img} alt={item.alt} />
              </li>
            ))}
          </ol>
        </section>

        <section className="cs-block">
          <Seq n="08">What changed</Seq>
          <p>
            After launch, teams reported about <strong>50% less operational work</strong>, and{" "}
            <strong>4+ hours</strong> back per team. That time used to go into rebuilding the job across tools.
          </p>
          <div className="cs-stats cs-stats-2">
            {outcomes.map((item) => (
              <article key={item.label}>
                <p>{item.value}</p>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <div className="cs-impact">
            {impacts.map((item) => (
              <article key={item.title}>
                <div className="cs-impact-icon">
                  <ImpactIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p>
            What I would measure next: time from first lead to closed job, how often unpaid devices still get installed,
            and whether the PDF in WhatsApp matches the job in the SaaS. I do not have those numbers yet.
          </p>
        </section>

        <a className="cs-back" href="#work">
          ← Back to selected works
        </a>
      </div>
    </main>
  );
}
