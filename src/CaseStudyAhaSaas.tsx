import { useEffect } from "react";
import "./case-study.css";

const preSteps = [
  { step: "STEP 1", icon: "lead", lead: "Lead received → Manually added to CRM", note: "Duplicate entries, inconsistent data across tools" },
  { step: "STEP 2", icon: "sheet", lead: "Quotation created in separate spreadsheets", note: "No standard format, version confusion" },
  { step: "STEP 3", icon: "share", lead: "Proposal shared via WhatsApp / Email manually", note: "No tracking, no visibility if client viewed" },
  { step: "STEP 4", icon: "plan", lead: "Device planning done on paper / separate drawings", note: "No clarity on actual device placement" },
  { step: "STEP 5", icon: "phone", lead: "Engineer receives instructions via calls/messages", note: "Miscommunication between PM & site team" },
  { step: "STEP 6", icon: "track", lead: "Execution tracked manually (calls / follow-ups)", note: "No visibility into project progress" },
  { step: "STEP 7", icon: "pay", lead: "Payments tracked in separate sheets/accounts tools", note: "No real-time tracking of received vs pending" },
  { step: "STEP 8", icon: "handover", lead: "Final handover communicated manually via call", note: "Inconsistent experience, no structured closure" },
];

const postSteps = [
  { step: "STEP 1", icon: "system", lead: "Lead received → Directly into system", note: "Structured data, no duplication" },
  { step: "STEP 2", icon: "doc", lead: "Proposal generated inside platform", note: "Standardized, version-controlled" },
  { step: "STEP 3", icon: "eye", lead: "Proposal auto-shared with tracking", note: "Know when client views" },
  { step: "STEP 4", icon: "plan", lead: "HA Diagram (Floor Plan mapping)", note: "Accurate device placement" },
  { step: "STEP 5", icon: "dash", lead: "Execution managed via shared dashboard", note: "Engineers + PM aligned" },
  { step: "STEP 6", icon: "live", lead: "Real-time project tracking", note: "No manual follow-ups" },
  { step: "STEP 7", icon: "pay", lead: "Integrated payment tracking", note: "Clear received vs pending" },
  { step: "STEP 8", icon: "check", lead: "Automated handover communication", note: "Professional, consistent customer experience" },
];

const discoveryGoals = [
  {
    id: "G1",
    text: "Understand the end-to-end smart home project lifecycle across all stages from lead generation and proposal to execution, payment, and final handover.",
  },
  {
    id: "G2",
    text: "Identify gaps and inefficiencies caused by spreadsheets (multiple excel, manual processes, and communication channels)",
  },
  {
    id: "G3",
    text: "Map role-based workflows and pain points across engineers, project managers, accounts, and admins.",
  },
  {
    id: "G4",
    text: "Define requirements for a unified platform that reduces manual coordination and improves cross-team collaboration.",
  },
  {
    id: "G5",
    text: "Validate key workflows (proposal creation, HA diagram mapping, execution tracking, and payment flow) through iterative feedback before development.",
  },
];

const lifecycle = [
  { n: "01", emoji: "📐", title: "Plan", copy: "Electrical plan arrives", img: "/assets/cs-aha-life-1.png", alt: "Upload electrical layout plan in Proposal Management" },
  { n: "02", emoji: "💡", title: "Propose", copy: "Consultant creates proposal / SO", img: "/assets/cs-aha-life-2.png", alt: "Sales Order Management HA diagram with devices on a floor plan" },
  { n: "03", emoji: "📦", title: "Prepare", copy: "Procurement checks availability", img: "/assets/cs-aha-life-3.png", alt: "Device Manager add-devices form with pricing" },
  { n: "04", emoji: "📋", title: "Plan Installation", copy: "Project Manager creates and assigns tasks", img: "/assets/cs-aha-life-4.png", alt: "Task List weekly calendar for installation planning" },
  { n: "05", emoji: "🛠️", title: "Task Update Status", copy: "Engineers completes work on site and update on the app", img: "/assets/cs-aha-life-5.png", alt: "Customer Project Plan with task status updates" },
  { n: "06", emoji: "💳", title: "Payment Tracking", copy: "Account Team tracks payment", img: "/assets/cs-aha-life-6.png", alt: "Project Management overview of project progress" },
  { n: "07", emoji: "📊", title: "Monitor", copy: "Management sees project and team progress", img: "/assets/cs-aha-life-7.png", alt: "Payment Summary with milestone status" },
];

const stats = [
  { value: "50%", label: "Faster operations" },
  { value: "4+ hours", label: "Saved per team (approx)" },
  { value: "Real Time", label: "Visibility" },
  { value: "↑Efficiency", label: "Execution of projects" },
];

const impacts = [
  { icon: "cycle", title: "1. End-to-End Lifecycle", copy: "From proposal to handover in one seamless flow" },
  { icon: "bolt", title: "2. 50%+ Efficiency Gain", copy: "Reduction in manual coordination and tool switching" },
  { icon: "eye", title: "3. Real-time Visibility", copy: "Track projects, payments, and execution live" },
  { icon: "target", title: "4. Higher Accuracy", copy: "Multiple design iterations for web and mobile views." },
  { icon: "send", title: "5. Improved Delivery Experience", copy: "Through timely updates and professional communication" },
];

const research = [
  ["Generative", "How fragmented is the current project lifecycle across spreadsheets and teams?"],
  ["Generative", "What are the critical breakdown points from proposal to project handover?"],
  ["Generative", "How do different roles collaborate and share information today?"],
  ["Generative", "What causes delays, errors, or rework in smart home project execution?"],
  ["Evaluative", "Where do errors or miscommunication occur between teams?"],
  ["Evaluative", "How is financial tracking (received vs pending) currently managed?"],
  ["Evaluative", "Can users efficiently complete end-to-end workflows within the SaaS platform?"],
];

const userRoles = [
  { name: "Consultant", color: "#4d4afc", people: 2 },
  { name: "Project Managers", color: "#7b5cff", people: 2 },
  { name: "Accounts", color: "#e0a800", people: 1 },
  { name: "Management", color: "#ff3a39", people: 1 },
  { name: "Procurement", color: "#2bb8b3", people: 2 },
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
    case "system":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="12" rx="2" {...stroke} />
          <path d="M8 21h8M12 17v4" {...stroke} />
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h8l5 5v13H7z" {...stroke} />
          <path d="M15 3v5h5M9 14l2 2 4-4" {...stroke} />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" {...stroke} />
          <circle cx="12" cy="12" r="3" {...stroke} />
        </svg>
      );
    case "dash":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="1" {...stroke} />
          <rect x="13" y="3" width="8" height="5" rx="1" {...stroke} />
          <rect x="13" y="10" width="8" height="11" rx="1" {...stroke} />
          <rect x="3" y="13" width="8" height="8" rx="1" {...stroke} />
        </svg>
      );
    case "live":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 14l4-4 3 3 5-6 4 4" {...stroke} />
          <path d="M4 19h16" {...stroke} />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" {...stroke} />
          <path d="M8 12l2.5 2.5L16 9" {...stroke} />
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
    <main className="case-study cs-paneled">
      <section className="cs-hero">
        <img src="/assets/cs-aha-hero.jpg" alt="" />
        <div className="cs-hero-copy">
          <h1>AHA SaaS : One System. Every Step. Zero Gaps</h1>
        </div>
      </section>

      <div className="cs-wrap">
        <div className="cs-toolbar">
          <a className="cs-back" href="#work">
            ← Back to selected works
          </a>
          <a
            className="offset-btn cs-proto"
            href="https://www.figma.com/proto/iPXYsUGPaQrk3tMgygtu8U/AHA-Project-Management-APP?node-id=4538-7525&t=nPHilSFSrehJrV9z-0&scaling=min-zoom&content-scaling=fixed&page-id=3063%3A5293&starting-point-node-id=4538%3A7525&hide-ui=1"
            target="_blank"
            rel="noreferrer"
          >
            Prototype Link
            <span className="offset-btn-icon">
              <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
            </span>
          </a>
        </div>

        <section className="cs-block">
          <Seq n="01">What AHA Actually is?</Seq>
          <p>
            AHA isn’t simply selling smart switches or individual smart-home gadgets. The company describes itself as a
            full-stack smart-home technology company that designs its own products, develops its own software, and
            engineers complete smart-home systems.
          </p>
          <img
            className="cs-figure"
            src="/assets/cs-aha-what.png?v=3"
            alt="AHA Sales Order Management: mapping devices onto a floor plan"
          />
        </section>

        <section className="cs-block">
          <Seq n="02">The Challenge</Seq>
          <ul className="cs-points">
            <li>
              <strong>Multiple Tools:</strong> Different teams relied on separate spreadsheets and CRM, leading to
              duplicated data, inconsistent updates, and no unified view of project status across departments.
            </li>
            <li>
              <strong>Miscommunication:</strong> Lack of a shared system forced teams to rely on calls, WhatsApp, and
              emails — resulting in unclear instructions, missed updates, and frequent coordination gaps.
            </li>
            <li>
              <strong>Zero Visibility:</strong> With no centralized tracking, stakeholders had no real-time insight into
              project progress, payment status, or execution stages.
            </li>
          </ul>
        </section>

        <section className="cs-journey">
          <p className="cs-label">The real project execution journey (pre-AHA)</p>
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
              {["No single source of truth", "High dependency on manual coordination", "Data inconsistency across teams", "Poor customer communication"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="03">The Solution</Seq>
          <ul className="cs-points">
            <li>
              <strong>Single, Unified Platform:</strong> A centralized system that connects every stage from proposal to
              handover — eliminating fragmented spreadsheets and creating a single source of truth.
            </li>
            <li>
              <strong>Real Time Visibility:</strong> Live tracking of project progress, payments, and execution stages
              giving teams instant clarity without manual follow-ups.
            </li>
            <li>
              <strong>Role-Based Control:</strong> Tailored access and workflows for each role ensuring engineers,
              project managers, and accounts teams interact only with what matters to them.
            </li>
          </ul>
        </section>

        <section className="cs-journey">
          <p className="cs-label">The AHA unified workflow (post-AHA)</p>
          <ol className="cs-steps">
            {postSteps.map((item) => (
              <li key={item.step}>
                <div className="cs-step-mark solution">
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
          <div className="cs-callout solution">
            <p>The solution</p>
            <div>
              {["Single source of truth", "Automated Workflows", "Real-time Visibility", "Accurate Data", "Better Customer Experience"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="cs-block cs-roles-block">
          <div className="cs-roles-row">
            <Seq n="04">User Roles:</Seq>
            <div className="cs-role-cards">
              {userRoles.map((role) => (
                <article className="cs-role-card" key={role.name}>
                  <PeopleIcon color={role.color} people={role.people as 1 | 2} />
                  <span>{role.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="05">Discovery &amp; Research</Seq>
          <p>
            Welcome to Phase 1 of the design process! This is where ideas take shape, inspirations are gathered and
            initial concepts are brought to life. As a designer, you are in the early stages of creating a vision for
            the website.
          </p>
          <div className="cs-goals">
            {discoveryGoals.map((goal) => (
              <article key={goal.id}>
                <b>{goal.id}</b>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="06">Information Architecture Discovery</Seq>
          <p>
            Card sorting sessions mapped how teams grouped features, roles, and workflows. Those clusters shaped a
            clearer, more conversion-focused information architecture: first understand the offering, then build trust,
            explore capabilities, and finally take action.
          </p>
          <img
            className="cs-figure"
            src="/assets/cs-aha-ia.png?v=2"
            alt="Card sorting boards exploring information architecture across three groupings"
          />
        </section>

        <section className="cs-block">
          <Seq n="07">Design System Overview</Seq>
          <div className="cs-ds">
            <div>
              <h3>Atoms (Basic Elements)</h3>
              <ol>
                <li>
                  Color <span>→ All foundational color tokens</span>
                </li>
                <li>
                  Typography <span>→ Font families, scales, weights</span>
                </li>
                <li>
                  Shadows &amp; Blurs <span>→ Depth system</span>
                </li>
                <li>
                  Spacing <span>→ Spacing tokens</span>
                </li>
                <li>
                  Icon <span>→ Iconography library</span>
                </li>
              </ol>
            </div>
            <div>
              <h3>Components</h3>
              <ol start={6}>
                <li>Button</li>
                <li>Text Fields</li>
                <li>Dropdown</li>
                <li>Checkbox / Radio</li>
                <li>Persona Facepile</li>
                <li>Badges</li>
                <li>Date Picker</li>
                <li>Teaching Bubble</li>
                <li>Slider Rating</li>
                <li>Progress Bar</li>
                <li>Breadcrumbs</li>
              </ol>
            </div>
          </div>
          <img
            className="cs-figure"
            src="/assets/cs-aha-design-system.png?v=2"
            alt="AHA Smart Homes design system: color foundations and brand palette"
          />
        </section>

        <section className="cs-block">
          <Seq n="08">Research Questions</Seq>
          <table className="cs-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Research Question</th>
              </tr>
            </thead>
            <tbody>
              {research.map(([type, q]) => (
                <tr key={q}>
                  <td>{type}</td>
                  <td>{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="cs-block">
          <Seq n="09">The AHA: Project Lifecycle</Seq>
          <p className="cs-sub">A seamless journey from the first quote to the final handover.</p>
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
          <Seq n="10">Key Business Impact</Seq>
          <div className="cs-stats">
            {stats.map((item) => (
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
        </section>

        <a className="cs-back" href="#work">
          ← Back to selected works
        </a>
      </div>
    </main>
  );
}
