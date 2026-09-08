import { Fragment, useEffect } from "react";
import "./case-study.css";

const overview = [
  { icon: "building", label: "Client", value: "AHA Smart Homes" },
  { icon: "chip", label: "Industry", value: "Smart Home · IoT" },
  { icon: "cal", label: "Timeline", value: "2022 – 2024" },
  { icon: "user", label: "My Role", value: "Sr. UI/UX Designer" },
];

const problems = [
  { icon: "leads", text: "Low lead conversion from organic and paid traffic." },
  { icon: "seo", text: "SEO content was not structured for how people actually search." },
  { icon: "spark", text: "Premium positioning was invisible — the site read like a generic gadget catalog." },
  { icon: "help", text: "Hard to understand the offering, cost, or why AHA over imported kits." },
];

const insights = [
  { icon: "chip", text: "Are the devices Chinese or imported — and who stands behind them?" },
  { icon: "shield", text: "What does the warranty actually cover?" },
  { icon: "swap", text: "Who replaces a failed product after handover?" },
  { icon: "home", text: "Can I see real homes, not stock renders?" },
];

const journey = [
  { icon: "search", label: "Google Search" },
  { icon: "page", label: "Product / Service page" },
  { icon: "eye", label: "Evaluate" },
  { icon: "shield", label: "Build trust" },
  { icon: "send", label: "Enquire" },
];

const questions = [
  { icon: "rupee", text: "How much does it cost?" },
  { icon: "shield", text: "Can I trust AHA?" },
  { icon: "home", text: "What does a finished home look like?" },
  { icon: "clock", text: "How long does installation take?" },
  { icon: "wrench", text: "Who handles service after handover?" },
];

const decisions = [
  { icon: "cam", title: "Premium imagery", copy: "Real homes and dark, editorial product shots instead of generic IoT stock." },
  { icon: "page", title: "Dedicated product pages", copy: "Each product line got its own page so search and sales could land on lighting, locks, climate, and more — not a generic catalog." },
  { icon: "layers", title: "Stronger visual hierarchy", copy: "Scan the offering, proof, and enquire without hunting." },
  { icon: "form", title: "Multiple enquiry forms", copy: "Ask along the journey — not only at the footer." },
  { icon: "seo", title: "SEO-focused structure", copy: "Product and service pages written for search and conversion together." },
];

const impacts = [
  { icon: "home", title: "150+ Homes Automated", copy: "Live proof on the site, not a vague claim." },
  { icon: "award", title: "10+ Premium Projects", copy: "Architect and interior-designer work made visible." },
  { icon: "rupee", title: "₹1Cr+ through leads", copy: "SEO-led traffic contributing to revenue from enquiries." },
  { icon: "trend", title: "25% engagement ↑", copy: "People stayed longer once the story and proof were clear." },
];

const stats = [
  { value: "25%", label: "Engagement ↑" },
  { value: "6+", label: "Architects & designers reached" },
  { value: "1Cr+", label: "Revenue through leads" },
];

const proto =
  "https://www.figma.com/proto/0lfSCnOUUBHVaKKVZ0O3UR/AHA?node-id=13431-1074&t=JCppNJoDzHpqkHQY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13431%3A1074";

/* Figma's own chrome and sidebar are hidden, and the design is scaled to the
   frame width, so the embed reads as the browser window it sits inside. */
const protoEmbed =
  "https://embed.figma.com/proto/0lfSCnOUUBHVaKKVZ0O3UR/AHA?node-id=13431-1074&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13431%3A1074&hide-ui=1&embed-host=share";

function Seq({ n, children }: { n: string; children: string }) {
  return (
    <h2>
      <span className="cs-seq">{n}</span>
      {children}
    </h2>
  );
}

function WebIcon({ name }: { name: string }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "building":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20V8l8-4 8 4v12" {...s} />
          <path d="M9 20v-6h6v6M9 11h.01M15 11h.01M12 11h.01" {...s} />
        </svg>
      );
    case "chip":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="2" {...s} />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" {...s} />
        </svg>
      );
    case "cal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" {...s} />
          <path d="M8 3v4M16 3v4M3 10h18" {...s} />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="3.2" {...s} />
          <path d="M5 20c0-3.4 3.1-6 7-6s7 2.6 7 6" {...s} />
        </svg>
      );
    case "leads":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 16l5-5 3 3 8-8" {...s} />
          <path d="M15 6h5v5" {...s} />
        </svg>
      );
    case "seo":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" {...s} />
          <path d="M16 16l5 5" {...s} />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8z" {...s} />
        </svg>
      );
    case "help":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" {...s} />
          <path d="M9.5 9.2a2.6 2.6 0 0 1 5 1c0 1.6-2.5 2-2.5 3.6M12 17h.01" {...s} />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l8 3v6c0 5-3.4 8.2-8 9.5C7.4 20.2 4 17 4 12V6z" {...s} />
          <path d="M9 12l2 2 4-4" {...s} />
        </svg>
      );
    case "swap":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7h11l-3-3M17 17H6l3 3" {...s} />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 11l8-7 8 7v9H4z" {...s} />
          <path d="M10 20v-6h4v6" {...s} />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" {...s} />
          <path d="M16 16l5 5" {...s} />
        </svg>
      );
    case "page":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h8l5 5v13H7z" {...s} />
          <path d="M15 3v5h5M9 13h8M9 17h5" {...s} />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" {...s} />
          <circle cx="12" cy="12" r="3" {...s} />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12l16-8-6 16-2-6-8-2z" {...s} />
        </svg>
      );
    case "rupee":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 6h10M7 10h10M7 6c4 0 6 2 6 4s-2 4-6 4l8 6" {...s} />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" {...s} />
          <path d="M12 7v6l4 2" {...s} />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L15 12z" {...s} />
        </svg>
      );
    case "cam":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 8h4l2-2h4l2 2h4v11H4z" {...s} />
          <circle cx="12" cy="13" r="3.5" {...s} />
        </svg>
      );
    case "layers":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4l9 5-9 5-9-5z" {...s} />
          <path d="M3 14l9 5 9-5" {...s} />
        </svg>
      );
    case "form":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="3" width="14" height="18" rx="2" {...s} />
          <path d="M8 8h8M8 12h8M8 16h5" {...s} />
        </svg>
      );
    case "award":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="9" r="5" {...s} />
          <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" {...s} />
        </svg>
      );
    case "trend":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 16l5-5 3 3 8-8" {...s} />
          <path d="M15 6h5v5" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function Mark({ name, tone }: { name: string; tone: "problem" | "ok" | "blue" }) {
  return (
    <span className={`cs-mark ${tone}`}>
      <WebIcon name={name} />
    </span>
  );
}

/** Either a flat screenshot or a live prototype, shown inside browser chrome. */
type Screen = { src: string; alt: string } | { embed: string; title: string };

function Desktop({ screen, caption }: { screen: Screen; caption: string }) {
  return (
    <figure className="cs-desktop">
      <div className="cs-desktop-bezel">
        <div className="cs-desktop-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {"embed" in screen ? (
          <div className="cs-desktop-screen">
            <iframe title={screen.title} src={screen.embed} allowFullScreen />
          </div>
        ) : (
          <img src={screen.src} alt={screen.alt} />
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function CaseStudyAhaWebsite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-paneled">
      <section className="cs-hero">
        <img src="/assets/cs-aha-web-hero.jpg" alt="AHA Smart Home: a warm, backlit luxury bedroom" />
        <div className="cs-hero-copy">
          <h1>AHA Smart Home Website Revamp</h1>
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

        <section className="cs-block">
          <Seq n="00">Project Overview</Seq>
          <dl className="cs-meta">
            {overview.map((item) => (
              <div key={item.label}>
                <dt>
                  <Mark name={item.icon} tone="blue" />
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            Redesigning AHA Smart Homes’ digital experience — homepage and dedicated product pages — to position it as a
            premium brand, then converting that trust into SEO-led traffic and qualified leads.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="01">The Problem</Seq>
          <p>The existing website wasn’t turning curious visitors into qualified leads. A few gaps showed up immediately:</p>
          <div className="cs-cards">
            {problems.map((item) => (
              <article key={item.text}>
                <Mark name={item.icon} tone="problem" />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="cs-callout problem">
            <p>The problem</p>
            <div>
              {["Weak conversion", "Thin SEO", "No premium feel", "Unclear offering"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <Desktop
            screen={{
              src: "/assets/cs-aha-web-old.jpg?v=5",
              alt: "Previous AHA Smart Homes website: room mood controls and key-free home sections",
            }}
            caption="Before — the previous home page"
          />
        </section>

        <section className="cs-block">
          <Seq n="02">The Goal</Seq>
          <p>
            Showcase AHA as a premium smart-home automation provider across the homepage and dedicated product pages:
            make each offering obvious, build trust quickly, and make enquiry the natural last step.
          </p>
          <div className="cs-callout solution">
            <p>The goal</p>
            <div>
              {["Premium brand", "Product pages", "Trust first", "SEO-led traffic", "Enquire with confidence"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <Desktop
            screen={{ embed: protoEmbed, title: "Revamped AHA Smart Homes website — interactive prototype" }}
            caption="After — the revamped website (live prototype)"
          />
          <a className="offset-btn cs-proto" href={proto} target="_blank" rel="noreferrer">
            Prototype Link
            <span className="offset-btn-icon">
              <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
            </span>
          </a>
        </section>

        <section className="cs-block">
          <Seq n="03">Key Insights</Seq>
          <p>
            The real friction wasn’t the catalog — it was trust. Customers were shopping a high-ticket home system and
            needed answers before they would enquire:
          </p>
          <div className="cs-cards">
            {insights.map((item) => (
              <article key={item.text}>
                <Mark name={item.icon} tone="blue" />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p>
            AHA’s edge is owning the stack and taking responsibility when something fails — including replacing
            products. The site had to say that out loud.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="04">UX Strategy</Seq>
          <p>
            Search traffic usually lands on a product page, not the homepage. Those product pages were designed as the
            real front door: evaluate the offering, look for proof, then enquire. Every one had to answer “What do I
            get?” before asking for a form fill.
          </p>
          <div className="cs-flow cs-flow-icons">
            {journey.map((step, i) => (
              <Fragment key={step.label}>
                <span>
                  <Mark name={step.icon} tone="blue" />
                  {step.label}
                </span>
                {i < journey.length - 1 ? <i aria-hidden="true">→</i> : null}
              </Fragment>
            ))}
          </div>
          <p className="cs-sub">What do I get?</p>
          <div className="cs-cards cs-cards-wide">
            {questions.map((item) => (
              <article key={item.text}>
                <Mark name={item.icon} tone="ok" />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="05">Design Decisions</Seq>
          <p>Visual appeal only works if information is easy to find. The redesign balanced both:</p>
          <div className="cs-impact">
            {decisions.map((item) => (
              <article key={item.title}>
                <div className="cs-impact-icon">
                  <WebIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="06">Business Impact</Seq>
          <p>The revamp strengthened AHA’s digital presence and gave sales a site that actually supported the close.</p>
          <div className="cs-stats cs-stats-3">
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
                  <WebIcon name={item.icon} />
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
