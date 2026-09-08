import { useEffect, type ReactNode } from "react";
import "./case-study.css";

const proto =
  "https://www.figma.com/proto/3A4XqzGzHJYmkpTgRNDi9g/INOX-F-B-Track-Order?node-id=2933-694&t=pehMJf5wr1YG1ggF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2933%3A694";

const protoEmbed = (node: string, start = "2933-694") =>
  `https://embed.figma.com/proto/3A4XqzGzHJYmkpTgRNDi9g/INOX-F-B-Track-Order?node-id=${node}&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=${start.replace("-", "%3A")}&hide-ui=1&embed-host=share`;

const outcomes = [
  { value: "6%", label: "Faster booking" },
  { value: "+4%", label: "App downloads" },
  { value: "Better", label: "F&B engagement" },
];

const facts = [
          { label: "Team", value: "Lead Product Designer · Junior Designer · Project Manager" },
  { label: "Platform", value: "Mobile App" },
  { label: "Focus", value: "UX Flow · Interaction Design · UI Design · Prototyping" },
];

const challenges = [
  {
    title: "F&B lived outside the booking journey",
    text: "Food ordering sat in its own category grid, disconnected from the flow users were actually in. If you didn’t think about food while booking your seat, nothing brought it back up, so the order was lost to the counter queue.",
    ask: "Introduce a clearer way to discover, access, and redeem F&B.",
  },
  {
    title: "Offers were scattered across unrelated screens",
    text: "Bank offers, coupons, vouchers, and reward points each surfaced in a different place, and the payment screen carried most of them at once. Users had to scan a dense page to work out which discount applied to them.",
    ask: "Refresh the visual language and simplify the experience while keeping familiar core journeys intact.",
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
    title: "Give F&B a clear destination",
    decision: "Create a dedicated Food experience.",
    why: "Make F&B services and offers easier to discover without making users search through the wider booking experience.",
  },
  {
    n: "02",
    title: "Keep different offer types in context",
    decision: "Keep Bank Offers within the relevant payment/offer experience while introducing dedicated Food Offers.",
    why: "Bank offers and F&B promotions serve different user needs.",
  },
  {
    n: "03",
    title: "Use one redemption method",
    decision: "Both Scan QR and Food Offers lead users to the same QR-based redemption experience.",
    why: "Different ways of discovering an offer shouldn’t result in different redemption processes. Different discovery → Same redemption.",
  },
  {
    n: "04",
    title: "Better Payment Experience",
    decision: "Improved information hierarchy and clearer Bank Offers make the payment screen easier to understand.",
    why: "The old payment screen was information-heavy, making it harder to find relevant offers and understand the final payment.",
  },
];

const impacts = [
  {
    emoji: "🎯",
    title: "Better Offer Discovery",
    copy: "A dedicated Food Offers experience makes F&B promotions easier to discover and understand. More visibility → Better awareness → More opportunity to convert.",
  },
  {
    emoji: "🍿",
    title: "Stronger F&B Engagement",
    copy: "Bringing F&B services and offers into a clearer experience gives users more opportunities to explore food during their cinema journey. Discover → Explore → Order.",
  },
  {
    emoji: "📱",
    title: "Digital-to-Physical Connection",
    copy: "QR-based redemption connects the digital offer experience with the physical food counter. App → QR → Counter → Redeem.",
  },
  {
    emoji: "💼",
    title: "Stronger Promotional Channel",
    copy: "Food Offers creates a dedicated space for promoting F&B campaigns and offers. Visibility → Consideration → Purchase opportunity.",
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
            {challenges.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="cs-ask">
                  <strong>The brief:</strong> {item.ask}
                </p>
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
              src="https://embed.figma.com/board/HV24JMtjO9t2jQN7ES80iM/Inox-Wireframe---User-Journeys?node-id=0-1&embed-host=share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="cs-block">
          <Seq>Style Guide, Design System</Seq>
          <div className="cs-embed">
            <iframe
              title="INOX design system, style guide"
              src="https://evict-tool-46901106.figma.site/"
              allowFullScreen
            />
          </div>
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
          <Seq n="02">What Changed? Before &amp; After</Seq>
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
          <Seq n="03">Design Decisions</Seq>
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
          <Seq n="04">Business Impact</Seq>
          <p>
            Post-launch, booking got roughly 6% faster and app downloads rose about 4%. The redesign also opened up F&amp;B
            ground the old app couldn’t reach:
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
            The four points above describe opportunities the redesign created. I’ve kept them separate from the measured
            figures rather than dressing them up as revenue or conversion numbers.
          </p>
        </section>

        <a className="cs-back" href="#work">
          ← Back to selected works
        </a>
      </div>
    </main>
  );
}
