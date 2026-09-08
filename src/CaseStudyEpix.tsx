import { useEffect } from "react";
import "./case-study.css";

const protoWeb =
  "https://www.figma.com/proto/ymH05WVUpMqPBMCzZGQGHF/V-4-EPIX-Cinema-Web-Layouts--Copy-?node-id=704-4622&t=k0yLfqRS72wyIHEo-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A2162&hide-ui=1";

const protoMobile =
  "https://www.figma.com/proto/iNIh5k8iHRMSPulB4LJ1ws/EPIX-Cinema---Responsive-Hompeage---App---Final?node-id=3233-10&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=885%3A5";

const protoWebEmbed =
  "https://embed.figma.com/proto/ymH05WVUpMqPBMCzZGQGHF/V-4-EPIX-Cinema-Web-Layouts--Copy-?node-id=704-4622&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9-2162&hide-ui=1&embed-host=share";

const protoMobileEmbed =
  "https://embed.figma.com/proto/iNIh5k8iHRMSPulB4LJ1ws/EPIX-Cinema---Responsive-Hompeage---App---Final?node-id=3233-10&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=885-5&hide-ui=1&embed-host=share";

const outcomes = [
  { value: "15%", label: "Sales ↑ after launch" },
  { value: "2M+", label: "App downloads" },
  { value: "1,100+", label: "Seats across 10 screens" },
];

const facts = [
  { label: "Client", value: "Epix Cinemas · Bahrain" },
  { label: "Team", value: "Project Manager · Sr. UI/UX Designer · Jr. Designer · Sr. Developer" },
  { label: "Timeline", value: "1 week" },
  { label: "My Role", value: "Sr. UI/UX Designer" },
];

const challenges = [
  {
    title: "No digital channel to start from",
    text: "Epix had the cinema (10 screens, VIP, Kids, XL) but no website and no booking app. Tickets lived at the counter. The product had to be invented, not restyled.",
  },
  {
    title: "Experiences had to be obvious on day one",
    text: "VIP, Kids, and XL only work if they’re visible at discovery, not buried after someone has already picked a standard screen.",
  },
  {
    title: "One booking model for home and the mall",
    text: "The same cinema had to make sense on a laptop the night before and on a phone in the lobby: one information architecture, two surfaces.",
  },
];

const decisions = [
  {
    n: "01",
    title: "Quick booking on the home page",
    decision:
      "A booking bar on home (location, cinema, movie, date, time) so a ticket starts on the landing page, not after opening a film to find a CTA.",
    why: "Regulars already know the show. They should set it from the hero, the same way they would tell the person at the desk, without scrolling Now Showing first.",
  },
  {
    n: "02",
    title: "Design around how people already buy tickets",
    decision:
      "Home is built around the job: see what’s on, pick an experience, book. Cinema operations stay in the background.",
    why: "This was the first digital product. If the page does not match how someone already buys a ticket at the desk, they go back to the queue.",
  },
  {
    n: "03",
    title: "VIP, Kids, and XL filters next to Now Showing",
    decision:
      "Experience filters sit on the home page, beside Now Showing, not inside seat selection and not in a hidden menu.",
    why: "VIP, Kids, and XL only convert if you can filter to them while browsing films. Finding the hall after a standard seat is already picked is too late.",
  },
  {
    n: "04",
    title: "Fewer steps after Book Now",
    decision:
      "After Book Now, only seat selection and payment. No extra confirm pages, and no sending people back to pick a cinema or experience they already set on home.",
    why: "A fast start on home does not help if the next four screens feel like paperwork. Drop-off happens after intent. Every extra step is a chance to abandon.",
  },
];

const impacts = [
  {
    title: "15% sales increase",
    copy: "Ticket sales rose 15% after the product launched, the first time Epix had a digital booking channel alongside the counter.",
  },
  {
    title: "2M+ app downloads",
    copy: "The mobile app reached 2M+ downloads after launch.",
  },
  {
    title: "A complete product, not a concept",
    copy: "The brief was the whole booking journey. The team shipped end-to-end design in a week: home, quick booking, experience filters, seats, and pay, on web and mobile.",
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

function Proto({ href, children }: { href: string; children: string }) {
  return (
    <a className="offset-btn cs-proto" href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="offset-btn-icon">
        <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
      </span>
    </a>
  );
}

export function CaseStudyEpix() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-epix cs-paneled">
      <section className="cs-hero">
        <img
          src="/assets/cs-epix-hero.jpg"
          alt="Epix Cinemas website on a laptop: Jurassic World hero, booking bar, and Now Showing posters"
        />
        <div className="cs-hero-copy">
          <h1>Epix Cinemas: Designing a Seamless Digital Movie Experience</h1>
        </div>
      </section>

      <div className="cs-wrap">
        <div className="cs-toolbar">
          <a className="cs-back" href="#work">
            ← Back to selected works
          </a>
          <div className="cs-proto-row">
            <Proto href={protoWeb}>Web Prototype</Proto>
            <Proto href={protoMobile}>Mobile Prototype</Proto>
          </div>
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
          <Seq n="00">Project Overview</Seq>
          <dl className="cs-facts">
            {facts.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            Epix Cinemas is a cinema destination in Bahrain offering multiple viewing experiences, including VIP and
            family-oriented halls. It operates at Dana Mall with 10 screens and capacity for over 1,100 seats.
          </p>
          <p>
            This was a new product. There was no existing website. I designed the first digital booking experience,
            web and mobile, so movie discovery and ticket booking would exist as one path, not a counter queue.
          </p>
          <div className="cs-role">
            <h3>My Role</h3>
            <p className="cs-role-title">Sr. UI/UX Designer</p>
            <p>
              I owned the end-to-end design for web and mobile, working with a project manager, a junior designer, and
              a senior developer. The brief was a complete product, not a set of screens. In one week we shipped the
              full booking design: discovery, quick booking, VIP / Kids / XL filters, seats, and pay.
            </p>
          </div>
          <div className="cs-proto-block">
            <p className="cs-sub">Explore the Prototype</p>
            <div className="cs-proto-row">
              <Proto href={protoWeb}>Web Prototype</Proto>
              <Proto href={protoMobile}>Mobile Prototype</Proto>
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="01">The Challenge</Seq>
          <p>
            A cinema’s first digital product has one job: get someone from “what’s on” to a confirmed seat without
            making them think about the machinery underneath. The constraints were specific:
          </p>
          <div className="cs-challenge-list">
            {challenges.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="02">The Goal</Seq>
          <p>
            Ship a home page that can start a ticket from the hero, filter Now Showing by VIP / Kids / XL, and reach a
            confirmed seat in two steps after Book Now. Same structure on the website and the phone, from the first
            release.
          </p>
        </section>

        <section className="cs-block">
          <Seq n="03">Design Decisions</Seq>
          <p>
            Four calls shaped the first release. Each one is about getting from “what’s on” to a confirmed seat without
            sending people back to the counter.
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
          <Seq n="04">Design Solution</Seq>
          <p>
            The bar starts the ticket on home. The filters sit beside Now Showing. After Book Now, only seats and pay
            remain. Web and mobile share that structure so the cinema feels like one product at home and in the lobby.
          </p>
          <div className="cs-devices">
            <figure>
              <p className="cs-ba-label">Desktop, live prototype</p>
              <div className="cs-desktop">
                <div className="cs-desktop-bezel">
                  <div className="cs-desktop-bar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="cs-desktop-screen">
                    <iframe title="Epix Cinemas website, interactive prototype" src={protoWebEmbed} allowFullScreen />
                  </div>
                </div>
              </div>
            </figure>
            <figure>
              <p className="cs-ba-label">Mobile, live prototype</p>
              <div className="cs-phone">
                <div className="cs-phone-screen">
                  <iframe title="Epix Cinemas mobile app, interactive prototype" src={protoMobileEmbed} allowFullScreen />
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="05">Business Impact</Seq>
          <p>
            After launch, sales rose 15% and the mobile app reached 2M+ downloads. The week produced a booking product
            people could actually use, not a homepage concept waiting on a later phase.
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
