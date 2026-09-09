import { useEffect, useState, type ReactNode } from "react";
import { CaseStudyAhaSaas } from "./CaseStudyAhaSaas";
import { CaseStudyAhaWebsite } from "./CaseStudyAhaWebsite";
import { CaseStudyInox } from "./CaseStudyInox";
import { CaseStudyPrescrip } from "./CaseStudyPrescrip";
import { CaseStudyEpix } from "./CaseStudyEpix";
import { CaseStudyAcrossfit } from "./CaseStudyAcrossfit";

const works = [
  {
    id: "aha-saas",
    kicker: "Internal SaaS · Smart Home Operations",
    title: "AHA SaaS System",
    body: "The internal tool AHA’s teams use to run a smart-home job, from first lead to handover. Sales send a proposal PDF on WhatsApp. Install starts only after payment. About 50% less operational work, and 4+ hours saved per team.",
    meta: "Internal operations SaaS · Sr. Product Designer",
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
      { value: "6", label: "Role dashboards" },
    ],
    visual: "saas" as const,
    href: "#aha-saas",
  },
  {
    id: "maruti",
    kicker: "Entertainment Platform · Mobile App",
    title: "INOX PVR Movie Booking App",
    body: "Redesigned the cinema experience to simplify movie booking and introduce a clearer F&B journey, making it easier for users to discover offers, order food, and redeem promotions during their cinema visit.",
    meta: "Cinema Platform · Product Designer · UX/UI Design",
    tags: ["UX Redesign", "F&B Experience", "Offer Discovery", "QR Redemption"],
    cta: "View Case Study",
    href: "#inox",
    stats: [
      { value: "6%", label: "Faster booking" },
      { value: "+4%", label: "App Downloads" },
      { value: "Better", label: "F&B Engagement" },
    ],
    visual: "maruti" as const,
  },
  {
    id: "aha-landing",
    kicker: "Website · Growth Design",
    title: "AHA Smart Home Website",
    body: "Rebuilt AHA’s public website (the homeowner-facing site, not the internal SaaS) so visitors could understand the offering, trust the brand, and enquire. SEO-led traffic contributed to ₹1Cr+ in revenue from leads.",
    meta: "Brand Website · Sr. UI/UX Designer",
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
    href: "#aha-landing",
  },
  {
    id: "prescrip",
    kicker: "iOS & Android App · Healthcare",
    title: "Prescrip - App for Doctors",
    body: "An app for doctors to run a clinic from their phone: appointments, digital prescriptions, and patient records, instead of paper, WhatsApp, and handwritten scripts.",
    meta: "Healthcare Platform · Sr. UI/UX Designer",
    tags: [
      "Doctor Interviews",
      "Practice Workflows",
      "Mobile UX",
      "Healthcare UX",
    ],
    cta: "View Case Study",
    href: "#prescrip-case",
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
    body: "Designed Epix Cinemas’ first digital booking experience: a booking bar on home, VIP / Kids / XL filters beside Now Showing, and only seats and pay after Book Now, for a cinema that previously had no website.",
    meta: "Cinema Platform · Sr UI UX Designer · 2025 to Present · Bahrain",
    tags: [
      "Journey Mapping",
      "UX Strategy",
      "Conversion Design",
      "Web & Mobile UI UX",
    ],
    cta: "View Case Study",
    href: "#epix",
    stats: [
      { value: "15%", label: "Sales increase" },
      { value: "2M+", label: "App downloads" },
      { value: "1,100+", label: "Seats across 10 screens" },
    ],
    visual: "epix" as const,
  },
  {
    id: "acrossfit",
    kicker: "Fitness Management Platform · iOS & Android",
    title: "Acrossfit Kaali",
    body: "Designed the daily companion for CrossFit Kaali: today’s WOD on home, log the score after class, see PRs and a leaderboard, instead of notebooks and WhatsApp.",
    meta: "Fitness Management App · Product Designer",
    tags: ["Design System", "Fitness App", "Mobile UX", "User Engagement"],
    cta: "View Case Study",
    href: "#acrossfit",
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

const clientLogos = [
  { src: "/assets/logo-prescrip.png", alt: "prescrip" },
  { src: "/assets/logo-inox.png", alt: "INOX" },
  { src: "/assets/logo-vijay.png", alt: "Vijay Sales" },
  { src: "/assets/logo-ajb.png", alt: "Agent Jack's" },
  { src: "/assets/logo-cossmic.png", alt: "Cossmic" },
  { src: "/assets/logo-aha.png", alt: "AHA" },
  { src: "/assets/logo-drinx.png", alt: "Drinx Exchange" },
  { src: "/assets/logo-raylogic.png", alt: "raylogic" },
];

function ClientLogoRow({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="logo-set" aria-hidden={decorative || undefined}>
      {clientLogos.map((logo) => (
        <img key={`${decorative ? "dup-" : ""}${logo.alt}`} src={logo.src} alt={decorative ? "" : logo.alt} />
      ))}
    </div>
  );
}

function OffsetButton({
  href,
  download,
  children,
  icon,
  className = "",
}: {
  href?: string;
  download?: boolean | string;
  children: ReactNode;
  icon: string;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      <span className="offset-btn-icon">
        <img src={icon} alt="" width={12} height={12} />
      </span>
    </>
  );
  if (href) {
    const fileName = download === true ? href.split("/").pop() : download || undefined;
    const external = href.startsWith("http") && !fileName;
    return (
      <a
        className={`offset-btn ${className}`}
        href={href}
        {...(fileName ? { download: fileName } : {})}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
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
        <a href="https://www.linkedin.com/in/lopesh-chandekar-71a48322/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src="/assets/icon-linkedin.svg" alt="" width={14} height={14} />
        </a>
      </nav>
      <a className="brand" href="#top">
        <img src="/assets/avatar.png?v=2" alt="" width={20} height={20} />
        <span>
          <span className="brand-im">I’m </span>
          <em>Lopesh Chandekar</em>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#about">About me</a>
        <a
          className="resume-link"
          href="/Lopesh_A_Chandekar_Resume.pdf"
          download="Lopesh_A_Chandekar_Resume.pdf"
        >
          <span className="resume-text">Download Resume</span>
          <img src="/assets/icon-download.svg" alt="" width={12} height={12} />
        </a>
      </nav>
    </header>
  );
}

function WorkVisual({ type }: { type: (typeof works)[number]["visual"] }) {
  const shots: Partial<Record<(typeof works)[number]["visual"], { src: string; alt: string }>> = {
    saas: { src: "/assets/img-aha-saas.png", alt: "AHA SaaS Proposal Management dashboard" },
    landing: { src: "/assets/img-aha-website.png", alt: "AHA Smart Homes website on a laptop" },
    prescrip: { src: "/assets/img-prescrip-app.png", alt: "Prescrip transactions app on a phone" },
    epix: { src: "/assets/img-epix-cinemas.png", alt: "Epix Cinemas website on a laptop" },
    maruti: { src: "/assets/img-maruti.png?v=2", alt: "INOX PVR movie booking and F&B app screens" },
    acrossfit: { src: "/assets/img-acrossfit.png", alt: "Acrossfit Kaali workout dashboard and get started screens" },
  };

  if (type in shots && shots[type]) {
    const shot = shots[type];
    return (
      <div className="work-visual">
        <img className="shot fill" src={shot.src} alt={shot.alt} />
      </div>
    );
  }

  return (
    <div className="work-visual">
      <img className="bg" src="/assets/hero-photo.png" alt="" />
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero" aria-label="Hero">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">6+ years of experience</p>
          <h1>
            Sr. Product Designer,
            <br />
            Turning Complexity
            <br />
            into Clarity.
          </h1>
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
        <a className="hero-visual" href="#maruti" aria-label="View INOX PVR Movie Booking App" data-reveal>
          <img
            className="hero-shot"
            src="/assets/hero-visual.png?v=3"
            alt="INOX PVR Movie Booking App, view project"
          />
        </a>
      </section>

      <section className="clients" aria-label="Clients">
        <h2>Clients</h2>
        <div className="logo-ticker">
          <div className="logo-track">
            <ClientLogoRow />
            <ClientLogoRow decorative />
          </div>
        </div>
      </section>

      <h2 className="section-title" id="work" data-reveal>
        Selected Works
      </h2>
      <div className="works">
        {works.map((work) => (
          <article className="work" key={work.id} id={work.id} data-reveal>
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
                <div className="work-cta">
                  <OffsetButton href={"href" in work ? work.href : undefined} icon="/assets/icon-arrow-ne.svg">
                    {work.cta}
                  </OffsetButton>
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
            <article className="stamp" key={item.title} data-reveal>
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
          <span>[6+ Years]</span>
        </div>
        <div className="jobs">
          <div className="job" data-reveal>
            <h3>Sr Product Designer</h3>
            <time>Jun 2024 to Present</time>
            <div className="company">AHA! Smart Homes</div>
          </div>
          <div className="job" data-reveal>
            <h3>Senior UI/UX Designer</h3>
            <time>May 2022 to Jun 2024</time>
            <div className="company">Aurus IT Solutions</div>
          </div>
          <div className="job" data-reveal>
            <h3>Junior UI/UX Designer</h3>
            <time>Apr 2020 to May 2022</time>
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
          <p className="kind-words" data-reveal>
            Kind ♡ Words from
            <br />
            <span>Collaborators</span>
          </p>
          <div className="rule-v" />
          <div className="quotes" data-reveal>
            <blockquote>
              <p>
                Working with Lopesh was a great experience. He brings clarity to complex product requirements and
                consistently delivers clean, well-structured designs that are easy for both users and developers to
                understand
              </p>
              <cite>
                <strong>Chetan Mukhne</strong>
                <em>Ecommerce, Product Head @Vijay Sales</em>
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
        My focus is product strategy, interaction design, system design, UX thinking, and growth design, with a bias
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
        <OffsetButton
          className="white"
          href="/Lopesh_A_Chandekar_Resume.pdf"
          download="Lopesh_A_Chandekar_Resume.pdf"
          icon="/assets/icon-download-lg.svg"
        >
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

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            // Stagger items that cross the threshold together.
            el.style.transitionDelay = `${Math.min(i * 70, 280)}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hash]);

  const showAbout = hash === "#about-more";
  const showAhaSaas = hash === "#aha-saas";
  const showAhaWebsite = hash === "#aha-landing";
  const showInox = hash === "#inox";
  const showPrescrip = hash === "#prescrip-case";
  const showEpix = hash === "#epix";
  const showAcrossfit = hash === "#acrossfit";

  return (
    <div id="top">
      <Header />
      {showAhaSaas ? (
        <CaseStudyAhaSaas />
      ) : showAhaWebsite ? (
        <CaseStudyAhaWebsite />
      ) : showInox ? (
        <CaseStudyInox />
      ) : showPrescrip ? (
        <CaseStudyPrescrip />
      ) : showEpix ? (
        <CaseStudyEpix />
      ) : showAcrossfit ? (
        <CaseStudyAcrossfit />
      ) : showAbout ? (
        <About />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  );
}
