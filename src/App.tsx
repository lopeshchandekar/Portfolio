import { useEffect, useState, type ReactNode } from "react";

const works = [
  {
    id: "aha-saas",
    kicker: "IOT Enterprise · SaaS",
    title: "AHA SaaS System",
    body: "Cut operational overhead by ~50%, saving 4+ hours/week, by transforming manual workflows into a structured, role-based SaaS system.",
    meta: "| Internal Financial & Operations tool · Sr. Product Designer",
    tags: [
      "User Interviews",
      "Whiteboard Sessions",
      "Wireframing",
      "Role-based UX",
      "Workflow Automation",
      "Design System",
    ],
    cta: "View Case Study",
    stats: [
      { value: "50%", label: "Faster operations" },
      { value: "4+", label: "Hours saved per team" },
      { value: "5", label: "User roles" },
    ],
    visual: "saas" as const,
  },
  {
    id: "aha-landing",
    kicker: "Website · Growth Design",
    title: "AHA Smart Home Landing Page",
    body: "Built and optimized a high-performing landing page, driving SEO-led traffic and contributing to ₹1Cr+ in revenue (through leads)",
    meta: "| Brand Website · Sr. UI/UX Designer",
    tags: [
      "Conversion Design",
      "Information Architecture",
      "Design System",
      "SEO Optimization",
    ],
    cta: "View Case Study",
    stats: [
      { value: "25%", label: "Engagement ↑" },
      { value: "6+", label: "Architects & Interior Designers Reached" },
      { value: "1CR+", label: "Revenue Generated" },
    ],
    visual: "landing" as const,
  },
  {
    id: "prescrip",
    kicker: "iOS & Android App · Healthcare",
    title: "Prescrip - App for Doctors",
    body: "Redesigned and optimized the Prescrip healthcare platform to improve doctor onboarding, streamline user workflows, and drive higher engagement, conversions, and operational efficiency.",
    meta: "| Healthcare Platform · Sr. UI/UX Designer",
    tags: [
      "Conversion Design",
      "Information Architecture",
      "Design System",
      "SEO Optimization",
    ],
    cta: "View Case Study",
    stats: [
      { value: "8%", label: "Doctor Sign-Ups ↑" },
      { value: "2X", label: "Faster User Journey Completion" },
      { value: "15%", label: "Revenue Conversion" },
    ],
    visual: "prescrip" as const,
  },
  {
    id: "epix",
    kicker: "Entertainment Platform · Web & Mobile",
    title: "Epix Cinemas",
    body: "Redesigned the Epix Cinemas digital experience to improve movie discovery, streamline ticket booking journeys, and create a more engaging cross-platform user experience across web and mobile.",
    meta: "| Cinema Platform · Sr UI UX Designer · 2025–Present · Bahrain",
    tags: [
      "Journey Mapping",
      "UX Strategy",
      "Conversion Design",
      "Web & Mobile UI UX",
    ],
    cta: "View Prototype",
    stats: [
      { value: "15%", label: "Revenue Increases" },
      { value: "2M+", label: "Platform Users" },
      { value: "10K", label: "App downloads ↑" },
    ],
    visual: "landing" as const,
  },
  {
    id: "maruti",
    kicker: "/Live · iOS & Android",
    title: "Maruti Suzuki",
    body: "Maruti Suzuki's digital experience was split across 3 disconnected apps. I unified it into one super app directing 6 designers across buying, loyalty, servicing & post-sale.",
    meta: "| Consumer Super App · Design Lead · 2025–Present",
    tags: [
      "Usability Testing",
      "Affinity Mapping",
      "Heuristic Evaluation",
      "Mental Model Mapping",
    ],
    cta: "Project Teaser",
    secondary: "Full Story Coming Soon",
    stats: [
      { value: "3M+", label: "Installs" },
      { value: "3%", label: "Booking ↑" },
    ],
    visual: "prescrip" as const,
  },
  {
    id: "acrossfit",
    kicker: "Fitness Management Platform · iOS & Android",
    title: "Acrossfit Kaali",
    body: "Designed a fitness and workout management platform focused on helping users track workouts, monitor performance, and improve engagement through structured fitness experiences.",
    meta: "| Fitness Management App · Product Designer",
    tags: ["Design System", "Fitness App", "Mobile UX", "User Engagement"],
    cta: "View Case Study",
    stats: [
      { value: "425+", label: "Active Users" },
      { value: "35%+", label: "Increase in User Retention" },
      { value: "4.5", label: "Average User Rating" },
    ],
    visual: "acrossfit" as const,
  },
];

const stamps = [
  {
    img: "/assets/skill-research.png",
    title: "Research",
    phase: "Discovery Phase",
    copy: "Competitor Analysis, User Research, Ideation, Pain Point Discovery",
  },
  {
    img: "/assets/skill-define.png",
    title: "Define",
    phase: "Synthesis Phase",
    copy: "User Personas, Problem Statements, Key Insights, User Needs",
  },
  {
    img: "/assets/skill-design.png",
    title: "Design Process",
    phase: "Creation Phase",
    copy: "Scenario Brainstorming, Wireframing, User Flow Creation, UX Design",
  },
  {
    img: "/assets/skill-prototype.png",
    title: "Prototype",
    phase: "Build Phase",
    copy: "High-fidelity Wireframes, Interactive Prototyping, AI-Driven Features, UI Kit Development",
  },
  {
    img: "/assets/skill-test.png",
    title: "Test",
    phase: "Validation Phase",
    copy: "Usability Testing, A/B Testing, Feedback Analysis, Iterative Improvements",
  },
];

function OffsetButton({
  href,
  children,
  icon,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  icon: string;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <span style={{ width: 24, height: 24, overflow: "hidden", flex: "0 0 24px" }}>
        <img src={icon} alt="" width={13} height={13} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </span>
    </>
  );
  if (href) {
    return (
      <a className={`offset-btn ${className}`} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={`offset-btn ${className}`}>
      {inner}
    </button>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="socials" aria-label="Social">
        <a href="https://www.linkedin.com/in/lopeshchandekar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src="/assets/icon-linkedin.svg" alt="" width={14} height={14} />
        </a>
        <a href="https://www.instagram.com/lopeshchandekar" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src="/assets/icon-instagram.svg" alt="" width={14} height={14} />
        </a>
        <a href="https://www.behance.net/lopeshchandekar" target="_blank" rel="noreferrer" aria-label="Behance">
          <img src="/assets/icon-behance.svg" alt="" width={14} height={14} />
        </a>
      </nav>
      <a className="brand" href="#top">
        <img src="/assets/avatar.png" alt="" width={20} height={20} />
        <span>
          I’m <em>Lopesh Chandekar</em>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#about">About me</a>
        <a className="resume-link" href="#resume">
          Download Resume
          <img src="/assets/icon-download.svg" alt="" width={12} height={12} />
        </a>
      </nav>
    </header>
  );
}

function WorkVisual({ type }: { type: (typeof works)[number]["visual"] }) {
  if (type === "saas") {
    return (
      <div className="work-visual">
        <img className="bg" src="/assets/aha-saas-bg.png" alt="" />
        <img className="shot" src="/assets/aha-saas.png" alt="AHA SaaS dashboard" />
      </div>
    );
  }
  if (type === "landing") {
    return (
      <div className="work-visual">
        <img className="bg" src="/assets/aha-landing-bg.png" alt="" />
        <img className="shot" src="/assets/aha-landing.png" alt="Website on a laptop" />
      </div>
    );
  }
  if (type === "acrossfit") {
    return (
      <div className="work-visual">
        <img className="bg" src="/assets/acrossfit-bg.png" alt="" />
        <div className="phones">
          <img className="front" src="/assets/acrossfit-phone-a.png" alt="Acrossfit app dashboard" />
          <img className="back" src="/assets/acrossfit-phone-b.png" alt="Acrossfit get started screen" />
        </div>
      </div>
    );
  }
  return (
    <div className="work-visual">
      <img className="bg" src="/assets/hero-photo.png" alt="" />
      <div className="phones">
        <img className="front" src="/assets/hero-phone.png" alt="Mobile app mockup" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">6+ years of experience</p>
          <h1>Sr. Product Designer, Turning Complexity into Clarity.</h1>
          <div className="focus">
            <span className="focus-label">My focus:</span>
            {["Product Strategy", "Interaction Design", "System Design", "UX Thinking", "Growth Design"].map(
              (item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ),
            )}
          </div>
          <OffsetButton href="#work" icon="/assets/icon-arrow.svg">
            View Selected Work
          </OffsetButton>
        </div>
        <div className="hero-visual">
          <div className="ticker" aria-hidden="true">
            <img src="/assets/hero-ticker.svg" alt="" />
            <img src="/assets/hero-ticker.svg" alt="" />
          </div>
          <div className="hero-stage">
            <img className="photo" src="/assets/hero-photo.png" alt="" />
          </div>
        </div>
      </section>

      <section className="clients" aria-label="Clients">
        <h2>Clients</h2>
        <div className="logo-row">
          <img src="/assets/logo-prescrip.png" alt="prescrip" />
          <img src="/assets/logo-inox.png" alt="INOX" />
          <img src="/assets/logo-vijay.png" alt="Vijay Sales" />
          <img src="/assets/logo-ajb.png" alt="Agent Jack's" />
          <img src="/assets/logo-cossmic.png" alt="Cossmic" />
          <img src="/assets/logo-aha.png" alt="AHA" />
          <img src="/assets/logo-drinx.png" alt="Drinx Exchange" />
          <img src="/assets/logo-raylogic.png" alt="raylogic" />
        </div>
      </section>

      <h2 className="section-title" id="work">
        Selected Works
      </h2>
      <div className="works">
        {works.map((work) => (
          <article className="work" key={work.id} id={work.id}>
            <div className="work-copy">
              <div>
                <p className="kicker">{work.kicker}</p>
                <h3>{work.title}</h3>
                <p>{work.body}</p>
                <p className="meta">{work.meta}</p>
                <div className="tags">
                  {work.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
                  <OffsetButton icon="/assets/icon-arrow-ne.svg">{work.cta}</OffsetButton>
                  {"secondary" in work && work.secondary ? (
                    <span style={{ fontSize: 14, color: "var(--grey-50)" }}>{work.secondary}</span>
                  ) : null}
                </div>
              </div>
              <div className="stats">
                {work.stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <WorkVisual type={work.visual} />
          </article>
        ))}
      </div>

      <section className="think">
        <img className="think-bg" src="/assets/think-bg.png" alt="" />
        <div className="think-wash" />
        <h2>How I Think</h2>
        <div className="stamps">
          {stamps.map((item) => (
            <article className="stamp" key={item.title}>
              <img src={item.img} alt="" width={300} height={300} />
              <h3>{item.title}</h3>
              <p className="phase">{item.phase}</p>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="about">
        <div className="experience-head">
          <h2>Where I’ve been</h2>
          <span>[5 + years]</span>
        </div>
        <div className="jobs">
          <div className="job">
            <h3>Sr Product Designer</h3>
            <time>Jun 2024 – Present</time>
            <div className="company">AHA! Smart Homes</div>
          </div>
          <div className="job">
            <h3>Senior UI/UX Designer</h3>
            <time>May 2022 – Jun 2024</time>
            <div className="company">Aurus IT Solutions</div>
          </div>
          <div className="job">
            <h3>Junior UI/UX Designer</h3>
            <time>Apr 2020 – May 2022</time>
            <div className="company">Aurus IT Solutions</div>
          </div>
        </div>
        <div className="center-btn">
          <OffsetButton href="#about-more" icon="/assets/icon-arrow-ne.svg">
            About Me
          </OffsetButton>
        </div>
      </section>

      <section className="testimonials">
        <div className="testi-head">
          <h2>Testimonials</h2>
          <span>[Word on the street]</span>
        </div>
        <div className="testi-rule" />
        <div className="testi-grid">
          <p className="kind-words">
            Kind ♡ Words from
            <br />
            <span>Collaborators</span>
          </p>
          <div className="rule-v" />
          <div className="quotes">
            <blockquote>
              <p>
                Working with Lopesh was a great experience. He brings clarity to complex product requirements and
                consistently delivers clean, well-structured designs that are easy for both users and developers to
                understand
              </p>
              <cite>
                <strong>Chetan Mukhne</strong>
                <em>Ecommerce — Product Head @Vijay Sales</em>
              </cite>
            </blockquote>
            <blockquote>
              <p>
                Lopesh played a key role in shaping our SaaS platform’s UX. He translated complex smart home workflows
                into a clear, intuitive system that our project managers and engineers could use efficiently. His
                structured approach and attention to detail significantly improved usability across the product
              </p>
              <cite>
                <strong>Kushal Kalambi</strong>
                <em>COO @AHA Smart Homes</em>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <main className="about-page" id="about-more">
      <p className="eyebrow">About me</p>
      <h1>I design products that people actually enjoy using.</h1>
      <p>
        I’m Lopesh Chandekar, a senior product designer with 6+ years of experience turning complex systems into clear
        digital products. I currently lead design at AHA Smart Homes, and I have shipped consumer, healthcare,
        entertainment, and enterprise work for teams including Maruti Suzuki, Vijay Sales, and Prescrip.
      </p>
      <p>
        My focus is product strategy, interaction design, system design, UX thinking, and growth design — with a bias
        toward research, structured workflows, and measurable outcomes.
      </p>
    </main>
  );
}

function Footer() {
  const line = "I design for that moment where complexity becomes clarity";
  return (
    <footer className="site-footer" id="resume">
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          <p>{line} · {line} · </p>
          <p>{line} · {line} · </p>
        </div>
      </div>
      <div className="footer-cta">
        <OffsetButton className="white" href="#resume" icon="/assets/icon-download-lg.svg">
          Download Resume
        </OffsetButton>
      </div>
      <div className="footer-bar">
        <span>@lopeshchandekar</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
          <img src="/assets/icon-back-top.svg" alt="" width={18} height={18} />
        </button>
      </div>
    </footer>
  );
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const showAbout = hash === "#about-more";

  return (
    <div id="top">
      <Header />
      {showAbout ? <About /> : <Home />}
      <Footer />
    </div>
  );
}
