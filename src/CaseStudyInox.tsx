import { useEffect, type ReactNode } from "react";
import "./case-study.css";

const proto =
  "https://www.figma.com/proto/3A4XqzGzHJYmkpTgRNDi9g/INOX-F-B-Track-Order?node-id=2933-694&t=pehMJf5wr1YG1ggF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2933%3A694";

const protoEmbed = (node: string, start = "2933-694") =>
  `https://embed.figma.com/proto/3A4XqzGzHJYmkpTgRNDi9g/INOX-F-B-Track-Order?node-id=${node}&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=${start.replace("-", "%3A")}&hide-ui=1&embed-host=share`;

const outcomes = [
  { value: "6%", label: "Faster booking" },
  { value: "+4%", label: "App downloads" },
  { value: "F&B", label: "Inside the booking path" },
];

const facts = [
          { label: "Team", value: "Lead Product Designer · Junior Designer · Project Manager" },
  { label: "Platform", value: "Mobile App" },
  { label: "Focus", value: "UX Flow · Interaction Design · UI Design · Prototyping" },
];

const challenges = [
  {
    icon: "look",
    title: "Make the app easier to use and more visually appealing",
    text: "The old app felt dated and was difficult to navigate. The goal was to improve usability, modernize the visual experience, and make interactions more intuitive without changing the familiar ticket-booking flow that users already know.",
  },
  {
    icon: "food",
    title: "A dedicated Food & Beverage page with exclusive offers",
    text: "Introduced a new F&B section into the booking journey, allowing users to explore food and beverage offers before their movie. Offers can be redeemed easily at the cinema counter by scanning a QR code displayed on the user’s phone.",
  },
];

/** `plain` for screenshots that already include a device frame of their own. */
type Frame = { src: string; alt: string; plain?: boolean } | { embed: string; title: string };

type Comparison = {
  id: string;
  title: string;
  lead: string;
  beforeLabel: string;
  afterLabel: string;
  before?: Frame;
  after?: Frame;
  changed: string[];
};

const comparisons: Comparison[] = [
  {
    id: "home",
    title: "A. Home Screen",
    lead: "A modern interface with a simpler experience.",
    beforeLabel: "Old version",
    afterLabel: "New version, live prototype",
    before: {
      src: "/assets/cs-inox-home-before.png",
      alt: "Old PVR home screen with a Sonic 2 hero banner, location picker, and a movie carousel",
      plain: true,
    },
    after: { embed: protoEmbed("2933-694"), title: "Redesigned INOX PVR home screen, interactive prototype" },
    changed: [
      "Cleaner typography · Consistent icons · Better hierarchy · Modern PVR/INOX visual language",
      "Fragmented F&B discovery → Dedicated F&B entry point",
    ],
  },
  {
    id: "fnb",
    title: "B. F&B Discovery",
    lead: "Offers and food items are easier to discover, with multiple ways to grab an offer.",
    beforeLabel: "Old version",
    afterLabel: "New version, live prototype",
    before: {
      src: "/assets/cs-inox-fnb-before.png",
      alt: "Old Food & Beverages screen listing All, Combos, Popcorn, Beverages, and Snacks category tiles",
    },
    after: { embed: protoEmbed("2933-6221"), title: "Redesigned INOX PVR F&B experience, interactive prototype" },
    changed: ["Existing ordering flow → Simplified F&B journey"],
  },
  {
    id: "payment",
    title: "C. Payment Screen, Bank Offers",
    lead: "Less cluttered payment screen with bank offers kept in context.",
    beforeLabel: "Old version",
    afterLabel: "New version",
    before: {
      src: "/assets/cs-inox-payment-before.png",
      alt: "Old payment screen with a full card-entry form, save-card option, and a net banking bank list",
    },
    after: {
      src: "/assets/cs-inox-payment-after.png",
      alt: "New payment screen showing savings on the bill, an applied coupon, a bank offers carousel, and collapsed payment methods",
    },
    changed: ["Information-heavy payment → Clearer bank offers in context"],
  },
  {
    id: "checkout",
    title: "D. Movies Checkout Screen",
    lead: "New “Add Food” makes F&B accessible even if users forgot during booking.",
    beforeLabel: "Old version",
    afterLabel: "New version, live prototype",
    before: {
      src: "/assets/cs-inox-checkout-before.png",
      alt: "Old Booking Review screen listing the film, F&B order, apply-discount options, and reward point toggles",
    },
    after: {
      embed: protoEmbed("3146-443", "1764-955"),
      title: "Redesigned INOX PVR movies checkout, interactive prototype",
    },
    changed: ["Less cluttered with offers as bank offers moved to the next screen"],
  },
];

const decisions = [
  {
    n: "01",
    title: "Keep the booking flow people already know",
    decision: "Refresh the look, type, and hierarchy. Do not invent a new way to book a ticket.",
    why: "A dated app loses trust fast. A new booking path would make people relearn a job they already do. The work was to make the known path clearer, not to replace it.",
  },
  {
    n: "02",
    title: "Give F&B a home, and more than one way in",
    decision: "A dedicated Food page, plus an entry on Home, plus Add Food at checkout.",
    why: "A single buried tab is easy to skip. People decide on snacks at different moments: while browsing movies, while paying, or after seats are already booked. One destination with two reminders catches those moments.",
  },
  {
    n: "03",
    title: "Keep bank offers on payment, food offers with food",
    decision: "Ticket discounts stay on the payment screen. Exclusive F&B offers live in the food experience.",
    why: "The old payment screen stacked bank offers, coupons, vouchers, and snack deals together. A bank offer changes what you pay for the ticket. A food offer changes what you buy at the counter. They belong on different screens.",
  },
  {
    n: "04",
    title: "One QR at the counter, however you found the offer",
    decision: "Scan QR and Food Offers both end on the same QR on the phone. Staff scan that at the counter.",
    why: "Mapping every route into food showed two discovery paths and two redemption paths. Two ways to redeem is two ways for the counter to fail. One endpoint means the offer in the app is the same offer in the lobby.",
  },
];

const impacts = [
  {
    emoji: "🍿",
    title: "Food shows up before the queue",
    copy: "Home, a dedicated F&B page, and Add Food at checkout give people more than one chance to see food before they stand at the counter.",
  },
  {
    emoji: "📱",
    title: "Offers that can actually be used",
    copy: "Exclusive food offers redeem with one QR on the phone. An offer in the app can be used at the counter without a second process.",
  },
  {
    emoji: "🏦",
    title: "Bank offers stay on payment",
    copy: "Ticket discounts and food offers serve different jobs. Splitting them made payment easier to read, and made food offers easier to find.",
  },
  {
    emoji: "💼",
    title: "Why F&B was the right place to work",
    copy: "F&B is about 30% of PVR INOX revenue, and the profitable part of a visit. Tickets are shared with distributors. Putting food inside booking works on the line that matters most per guest.",
  },
];

function ChallengeIcon({ name }: { name: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "look":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" {...stroke} />
          <path d="M10 18.5h4" {...stroke} />
          <path d="M12 6.2v0M10.4 8.4h3.2M10.4 11h3.2M10.4 13.6h2.2" {...stroke} />
          <path d="M18.6 5.2l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" {...stroke} />
        </svg>
      );
    case "food":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="2.5" width="8.5" height="8.5" rx="1.2" {...stroke} />
          <rect x="4.6" y="4.6" width="4.3" height="4.3" rx="0.6" {...stroke} />
          <path d="M13.2 10h8.2l-1.3 10.2h-5.6L13.2 10z" {...stroke} />
          <path d="M15.2 10c0-1.3.9-2.3 2.1-2.3s2.1 1 2.1 2.3" {...stroke} />
          <path d="M16.4 8.2c-.2-1 .5-1.9 1.4-1.9" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

function Seq({ n, children }: { n?: string; children: string }) {
  return (
    <h2>
      {n ? <span className="cs-seq">{n}</span> : null}
      {children}
    </h2>
  );
}

function Proto() {
  return (
    <a className="offset-btn cs-proto" href={proto} target="_blank" rel="noreferrer">
      View Figma Prototype
      <span className="offset-btn-icon">
        <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
      </span>
    </a>
  );
}

function Dummy({
  label,
  ratio = "16 / 10",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div className="cs-dummy" style={{ aspectRatio: ratio }} role="img" aria-label={`${label} placeholder`}>
      <span>{label}</span>
      <em>Replace with final image</em>
    </div>
  );
}

function Phone({
  children,
  plain = false,
  shot = false,
}: {
  children: ReactNode;
  plain?: boolean;
  shot?: boolean;
}) {
  return (
    <div className={`cs-phone${plain ? " is-plain" : ""}${shot ? " is-shot" : ""}`}>
      <div className="cs-phone-screen">{children}</div>
    </div>
  );
}

function Slot({ frame, fallback }: { frame: Frame | undefined; fallback: string }) {
  if (!frame) return <Dummy label={fallback} ratio="9 / 16" />;
  if ("embed" in frame) {
    return (
      <Phone>
        <iframe title={frame.title} src={frame.embed} allowFullScreen />
      </Phone>
    );
  }
  return (
    <Phone plain={frame.plain} shot={!frame.plain}>
      <img src={frame.src} alt={frame.alt} loading="lazy" />
    </Phone>
  );
}

function BeforeAfter({ beforeLabel, afterLabel, id, before, after }: Comparison) {
  return (
    <div className="cs-ba">
      <figure>
        <p className="cs-ba-label">{beforeLabel}</p>
        <Slot frame={before} fallback={`${id} before`} />
      </figure>
      <figure>
        <p className="cs-ba-label">{afterLabel}</p>
        <Slot frame={after} fallback={`${id} after`} />
      </figure>
    </div>
  );
}

export function CaseStudyInox() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-inox cs-paneled">
      <section className="cs-hero">
        <img src="/assets/cs-inox-banner.jpg" alt="INOX cinema lobby with concession counter and lounge seating" />
        <div className="cs-hero-copy">
          <h1>INOX PVR Movie Booking App</h1>
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
          <Seq>About the Client</Seq>
          <p>
            INOX PVR is one of India’s leading cinema brands, bringing movies, entertainment, and food &amp; beverage
            experiences together across its cinema network.
          </p>
          <p>
            For our client INOX PVR, I worked on improving the digital booking experience, with a focus on connecting
            movie ticket booking and Food &amp; Beverage ordering into a smoother journey.
          </p>

          <div className="cs-role">
            <h3>My Role</h3>
            <p className="cs-role-title">Lead Product Designer</p>
            <p>
              I led the redesign of the overall experience, including the new Home Screen and complete F&amp;B journey,
              while guiding a junior designer across the remaining screens.
            </p>
          </div>

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
          <Seq n="01">The Challenge</Seq>
          <div className="cs-challenge-list">
            {challenges.map((item, i) => (
              <article key={item.title}>
                <div className="cs-inox-challenge-mark">
                  <ChallengeIcon name={item.icon} />
                  <b>{String(i + 1).padStart(2, "0")}</b>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq>The Goal</Seq>
          <p>
            To modernize the experience, improve F&amp;B engagement, and create a stronger digital channel for promoting
            food offers.
          </p>
        </section>

        <section className="cs-block">
          <Seq>User Journey</Seq>
          <p>
            I mapped every route into food (during booking, after booking, and from a physical counter) before drawing
            a single screen. Mapping them together is what exposed the duplicate redemption paths, and led to the single
            QR endpoint described below.
          </p>
          <div className="cs-embed">
            <iframe
              title="INOX wireframe, user journeys"
              src="https://embed.figma.com/board/HV24JMtjO9t2jQN7ES80iM/Inox-Wireframe---User-Journeys?node-id=0-1&embed-host=share&t=MIPyKMGAVkFBwRPc-0"
              allowFullScreen
            />
          </div>
        </section>

        <section className="cs-block">
          <Seq n="02">What I chose</Seq>
          <p>
            After mapping every route into food, these were the calls. They decided what to keep, what to add, and how
            offers would work at the counter.
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
          <Seq>Style Guide, Design System</Seq>
          <figure className="cs-shot">
            <a href="/assets/cs-inox-design-system.png" target="_blank" rel="noreferrer">
              <img
                src="/assets/cs-inox-design-system.png"
                alt="INOX design system: foundations, components, cinema, seat, food, and offer patterns"
              />
            </a>
          </figure>
        </section>

        <section className="cs-block">
          <Seq>Wireframes</Seq>
          <p>
            Fifteen screens covering onboarding, cinema selection, the F&amp;B home, offers, checkout, order status, and
            voucher redemption.
          </p>
          <figure className="cs-shot">
            <a href="/assets/cs-inox-wireframes.jpg" target="_blank" rel="noreferrer">
              <img
                src="/assets/cs-inox-wireframes.jpg"
                alt="PVR Cinemas wireframes: onboarding, location, cinema list, F&B home, offers, checkout, order status, and vouchers"
              />
            </a>
          </figure>
          <p className="cs-caption">Open the full-size sheet ↗</p>
        </section>

        <section className="cs-block">
          <Seq n="03">What Changed? Before &amp; After</Seq>
          <p>
            The redesign wasn’t only about making the interface look better. I used the visual refresh as cover to fix
            four specific F&amp;B touchpoints. Each one is paired with the screen it replaced below.
          </p>

          {comparisons.map((item) => (
            <div className="cs-change" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.lead}</p>
              <BeforeAfter {...item} />
              <div className="cs-changed">
                <p className="cs-sub">What changed?</p>
                {item.changed.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="cs-block">
          <Seq n="04">Business Impact</Seq>
          <p>
            Post-launch, booking got roughly 6% faster and app downloads rose about 4%. Those two figures are measured.
            The F&amp;B work did something else: it put food and exclusive offers in the path while people were already
            buying a ticket.
          </p>
          <div className="cs-impact-list">
            {impacts.map((item) => (
              <article key={item.title}>
                <h3>
                  <span aria-hidden="true">{item.emoji}</span> {item.title}
                </h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="cs-footnote">
            The four points above describe what the F&amp;B work opened up. They are not revenue or conversion numbers. I
            have kept them separate from the 6% and 4% figures.
          </p>
        </section>

        <a className="cs-back" href="#work">
          ← Back to selected works
        </a>
      </div>
    </main>
  );
}
