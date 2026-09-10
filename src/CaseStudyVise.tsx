import { useEffect } from "react";
import "./case-study.css";

const live = "https://www.vise.in/";
const proto =
  "https://www.figma.com/proto/rFzQwtCuqFSTxXfq8Tmove/VISE---Banners?node-id=2003-12157&t=hdVPka8od8GbTr1E-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2003%3A12157";
const protoResponsive =
  "https://www.figma.com/proto/rFzQwtCuqFSTxXfq8Tmove/VISE---Banners?node-id=2003-3623&t=Y8zVoJIOXy1Dp52z-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2003%3A3623&show-proto-sidebar=1";
const protoEmbed =
  "https://embed.figma.com/proto/m0xijXwYF6YpFsGXeiRylP/Viay-Sales---Vise?node-id=4066-13174&scaling=min-zoom&content-scaling=fixed&page-id=154%3A266&starting-point-node-id=4066%3A13174&embed-host=share";

const overview = [
  { label: "Client", value: "Vijay Sales" },
  { label: "Product", value: "Vise brand website" },
  { label: "Duration", value: "1 week" },
  { label: "My Role", value: "Sr. UI/UX Designer" },
];

const problems = [
  "The old home led with a campaign, not a way to find a TV by size or an AC by ton.",
  "Shop Now existed, but the path to Vijay Sales was not the job of the page.",
  "Vise could look like a nameless online label if Vijay Sales stores were not in the story.",
];

const goals = [
  "Make vise.in a product finder for the house brand.",
  "Keep trust: Vise is Vijay Sales’ own line, with stores behind it.",
  "Send buy, delivery, and pickup to Vijay Sales. Keep Find Store next to search.",
];

const approach = [
  {
    title: "Audit",
    tone: "mint",
    text: "Looked at the old vise.in journeys and how the site sat next to Vijay Sales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5 21 21" />
      </svg>
    ),
  },
  {
    title: "Analyze",
    tone: "peach",
    text: "Found the campaign-first home, the weak spec path, and a buy action that was not the job of the page.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h10M4 17h7" />
        <circle cx="18.5" cy="16.5" r="3" />
        <path d="M18.5 15.2v1.5l1 1" />
      </svg>
    ),
  },
  {
    title: "Structure",
    tone: "blue",
    text: "Set the IA: category, filter by spec, product, then buy on Vijay Sales or find a store.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="3" width="8" height="5" rx="1" />
        <rect x="3" y="16" width="6" height="5" rx="1" />
        <rect x="15" y="16" width="6" height="5" rx="1" />
        <path d="M12 8v4M6 16v-4h12v4" />
      </svg>
    ),
  },
  {
    title: "Redesign",
    tone: "yellow",
    text: "Designed the homepage and one inner page. The junior designer applied that to the rest of the inner pages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
];

const shopBy = [
  { label: "TV size", h: 90, tone: "cyan" },
  { label: "AC ton", h: 72, tone: "peach" },
  { label: "Washer kg", h: 50, tone: "lilac" },
  { label: "Fridge", h: 34, tone: "pink" },
];

const buyHow = [
  { label: "Store", h: 86, tone: "lilac" },
  { label: "Site then buy", h: 62, tone: "cyan" },
  { label: "Find store", h: 38, tone: "peach" },
];

const consumerTypes = [
  { label: "First look at Vise", size: "md", tone: "mint" },
  { label: "Site then store", size: "sm", tone: "lilac" },
  { label: "Replacing a TV or AC", size: "hero", tone: "blue" },
];

const productTypes = [
  { label: "Televisions", size: "xl", tone: "yellow" },
  { label: "Air conditioners", size: "lg", tone: "blue" },
  { label: "Washing machines", size: "md", tone: "mint" },
  { label: "Refrigerators", size: "md", tone: "peach" },
  { label: "Find Store", size: "sm", tone: "lilac" },
  { label: "EMI, exchange", size: "sm", tone: "pink" },
  { label: "Buy on Vijay Sales", size: "md", tone: "cyan" },
];

const insights = [
  {
    title: "Shop by spec",
    points: [
      "People shop this range by TV size, AC tonnage, washer kg.",
      "Not by a campaign line.",
      "So nav is the range, then filter.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M7 12h10M10 17h4" />
      </svg>
    ),
  },
  {
    title: "Offer, EMI & exchange",
    points: [
      "Home can lead with product and offer.",
      "EMI and exchange belong on the path.",
      "Buy still completes on Vijay Sales.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.4 13.2 12 21.6 3.6 13.2V4h9.2L20.4 11a1.7 1.7 0 0 1 0 2.2z" />
        <circle cx="8" cy="8" r="1.2" />
      </svg>
    ),
  },
  {
    title: "House brand",
    points: [
      "Vise only works if Vijay Sales is visible.",
      "Stores, buy path, and warranty have to show.",
      "So the site cannot look like a nameless online label.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
        <path d="M9 21v-8h6v8" />
      </svg>
    ),
  },
  {
    title: "Product pages",
    points: [
      "Need details, features, specs, and support.",
      "About cannot carry all of that.",
      "One inner page set the pattern for the rest.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9h16M9 9v11" />
      </svg>
    ),
  },
  {
    title: "Find Store",
    points: [
      "Belongs in the header, next to search.",
      "Not buried in About.",
      "Shoppers may check the site, then walk in.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    ),
  },
  {
    title: "Site finds, store sells",
    points: [
      "vise.in finds and explains.",
      "It should not be the full Vijay Sales catalogue.",
      "Buy, delivery, and pickup stay on Vijay Sales.",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M16.5 16.5 21 21" />
      </svg>
    ),
  },
];

const journeyTitle = "Finding a TV or AC on vise.in";
const journeyStart = "Shopper journey";
const journeySteps = [
  "Needs a TV by size or an AC by ton",
  "Comes to vise.in to find the house brand",
  "Picks a category from the nav",
  "Filters by size, tonnage, or kg",
  "Reads details, features, specs, and support",
  "Checks Find Store, EMI, and exchange",
  "Buys on Vijay Sales, not a vise.in cart",
  "Delivery, pickup, or a store visit",
];

const impact = [
  {
    title: "Improved SEO and search visibility",
    text: "A better-structured site with clearer content, product information, and page organization can support search visibility and help vise.in show more clearly in Google.",
  },
  {
    title: "Stronger brand credibility",
    text: "A modern, consistent, visually polished experience strengthens how VISE is seen. Clearer communication and a stronger presentation can make the house brand feel more trustworthy and professional.",
  },
  {
    title: "Reduced customer effort",
    text: "Better navigation, information hierarchy, product categories, and clearer product information help customers find what they need faster and decide with less effort.",
  },
  {
    title: "Increased purchase intent",
    text: "A clearer journey from product discovery to product details to Find Store or Vijay Sales can encourage more people to take a purchase-related step.",
  },
  {
    title: "Better mobile experience",
    text: "A responsive, mobile-first experience makes product discovery and research easier on phones, and can improve engagement and reduce drop-off.",
  },
  {
    title: "Potential increase in sales and conversions",
    text: "Better discoverability, stronger brand trust, less friction, and a clearer path to Vijay Sales can contribute to more conversions and sales. No conversion number from the client, so none here.",
  },
];

const iaEntry = ["Home", "Search", "Find Store"];

const iaBranches = [
  {
    title: "Televisions",
    items: ["Category listing", "Filter by size", "Filter by resolution", "Product page"],
    tail: "Buy on Vijay Sales",
  },
  {
    title: "Air conditioners",
    items: ["Category listing", "Filter by tonnage", "Product page", "Specs and support"],
    tail: "Buy on Vijay Sales",
  },
  {
    title: "Washing machines",
    items: ["Category listing", "Filter by kg", "Product page", "Specs and support"],
    tail: "Buy on Vijay Sales",
  },
  {
    title: "Refrigerators",
    items: ["Category listing", "Filter by litre", "Product page", "Specs and support"],
    tail: "Buy on Vijay Sales",
  },
  {
    title: "Brand and store",
    items: ["About Us", "Why VISE", "Contact Us", "Support Q&A"],
  },
];

function Seq({ n, children }: { n: string; children: string }) {
  return (
    <h2>
      <span className="cs-seq">{n}</span>
      {children}
    </h2>
  );
}

function Desktop({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="cs-desktop">
      <div className="cs-desktop-bezel">
        <div className="cs-desktop-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img src={src} alt={alt} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function BarChart({ items }: { items: { label: string; h: number; tone: string }[] }) {
  return (
    <div className="cs-vise-bars">
      {items.map((item) => (
        <figure key={item.label}>
          <span className="cs-vise-bars-track">
            <i className={item.tone} style={{ height: `${item.h}%` }} />
          </span>
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function ArchNode({ children }: { children: string }) {
  return <span className="cs-arch-node">{children}</span>;
}

function JourneyArrow({ dir, area }: { dir: "right" | "left" | "down"; area: string }) {
  return <span className={`cs-vise-jarrow ${dir} ${area}`} aria-hidden="true" />;
}

function ProtoButtons() {
  return (
    <div className="cs-toolbar-actions">
      <a className="offset-btn cs-proto" href={proto} target="_blank" rel="noreferrer">
        Desktop prototype
        <span className="offset-btn-icon">
          <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
        </span>
      </a>
      <a className="offset-btn cs-proto" href={protoResponsive} target="_blank" rel="noreferrer">
        Responsive prototype
        <span className="offset-btn-icon">
          <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
        </span>
      </a>
      <a className="offset-btn cs-proto" href={live} target="_blank" rel="noreferrer">
        Live site
        <span className="offset-btn-icon">
          <img src="/assets/icon-arrow-ne.svg" alt="" width={12} height={12} />
        </span>
      </a>
    </div>
  );
}

export function CaseStudyVise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study cs-web cs-vise cs-paneled">
      <section className="cs-hero">
        <img src="/assets/cs-vise-hero.jpg" alt="Vijay Sales storefront" />
        <div className="cs-hero-copy">
          <h1>VijaySales- Vise Brand Website</h1>
          <p className="cs-hero-lede">
            Vijay Sales’ house electronics brand. Find a TV or AC on vise.in, then buy at Vijay Sales.
          </p>
        </div>
      </section>

      <div className="cs-wrap">
        <div className="cs-toolbar">
          <a className="cs-back" href="#work">
            ← Back to selected works
          </a>
          <ProtoButtons />
        </div>

        <section className="cs-block">
          <Seq n="00">Overview</Seq>
          <dl className="cs-facts">
            {overview.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <p>
            Vise is Vijay Sales’ own electronics brand, launched in 2014: televisions, air conditioners, washing
            machines, and refrigerators. This case is the public website,{" "}
            <a href={live} target="_blank" rel="noreferrer">
              vise.in
            </a>
            . It is not the main Vijay Sales catalogue. It is the house brand.
          </p>
          <div className="cs-role">
            <h3>My Role</h3>
            <p className="cs-role-title">Sr. UI/UX Designer</p>
            <p>
              One week, with a junior designer. I designed the homepage and one inner page. The junior designer did the
              rest of the inner pages.
            </p>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="01">The problem</Seq>
          <p>
            The old site ran for years as a brand and campaign homepage. Nav was Home, About, Products, Contact. Products
            and Shop Now were there. Finding a 55 inch TV or a 1.5 ton AC was not the job of the page.
          </p>
          <div className="cs-cards cs-cards-wide">
            {problems.map((text) => (
              <article key={text}>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="cs-callout problem">
            <p>The problem</p>
            <div>
              {["Campaign first", "Weak spec path", "Buy not the job of the page"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <Desktop
            src="/assets/cs-vise-before.png"
            alt="Old Vise homepage campaign: Celebrate Colours"
            caption="Before: campaign home, Feb 2024"
          />
        </section>

        <section className="cs-block">
          <Seq n="02">The goal</Seq>
          <p>
            Turn vise.in from a brand brochure into a product finder that still carries Vijay Sales. The site finds and
            explains. Purchase stays on Vijay Sales.
          </p>
          <div className="cs-cards cs-cards-wide">
            {goals.map((text) => (
              <article key={text}>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="cs-callout solution">
            <p>The goal</p>
            <div>
              {["Find by spec", "Trust the house brand", "Buy on Vijay Sales"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="03">The shopper</Seq>
          <p>Not interview counts. How this range is shopped, and what vise.in had to hold.</p>
          <div className="cs-vise-research">
            <div>
              <h3>What they shop by</h3>
              <BarChart items={shopBy} />
              <h3>How they buy</h3>
              <BarChart items={buyHow} />
            </div>
            <div>
              <h3>Type of shopper</h3>
              <div className="cs-vise-people cs-vise-bubbles">
                {consumerTypes.map((item) => (
                  <span key={item.label} className={`${item.size} ${item.tone}`}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3>The range</h3>
              <div className="cs-vise-cluster cs-vise-bubbles">
                {productTypes.map((item) => (
                  <span key={item.label} className={`${item.size} ${item.tone}`}>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="04">Key insights</Seq>
          <p>What that meant for the site. Not a counted study.</p>
          <div className="cs-vise-insights">
            {insights.map((item) => (
              <article key={item.title}>
                <h3>
                  <span className="cs-vise-insights-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.title}
                </h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="05">My Approach</Seq>
          <p>One week. Use the old site, the shopper jobs, and the split with Vijay Sales. Then design home and one inner page.</p>
          <div className="cs-vise-approach">
            {approach.map((item) => (
              <article key={item.title} className={item.tone}>
                <span className="cs-vise-approach-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <b>{item.title}</b>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-block">
          <Seq n="06">Information architecture</Seq>
          <p>
            Nav is the range. Each category lists, then filters by spec. Product pages hold details, features, specs, and
            support. Buy leaves for Vijay Sales. Find Store sits in the header, next to search.
          </p>
          <div
            className="cs-arch"
            role="img"
            aria-label="Vise information architecture: home, search, and find store lead into televisions, air conditioners, washing machines, refrigerators, and brand pages. Buy goes to Vijay Sales."
          >
            <ol className="cs-arch-entry">
              {iaEntry.map((step) => (
                <li key={step}>
                  <ArchNode>{step}</ArchNode>
                </li>
              ))}
            </ol>
            <div className="cs-arch-branches">
              {iaBranches.map((item) => (
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
          <Seq n="07">User journey</Seq>
          <p>The path the live site is built for. Find on vise.in. Buy on Vijay Sales.</p>
          <h3 className="cs-vise-journey-title">{journeyTitle}</h3>
          <div
            className="cs-vise-snake"
            role="list"
            aria-label="Shopper journey: find a TV or AC on vise.in, then buy on Vijay Sales"
          >
            <div className="cs-vise-snake-step start a" role="listitem">
              {journeyStart}
            </div>
            <JourneyArrow dir="right" area="ah1" />
            <div className="cs-vise-snake-step b" role="listitem">
              {journeySteps[0]}
            </div>
            <JourneyArrow dir="right" area="ah2" />
            <div className="cs-vise-snake-step c" role="listitem">
              {journeySteps[1]}
            </div>
            <JourneyArrow dir="down" area="vd1" />
            <div className="cs-vise-snake-step d" role="listitem">
              {journeySteps[2]}
            </div>
            <JourneyArrow dir="left" area="ah4" />
            <div className="cs-vise-snake-step e" role="listitem">
              {journeySteps[3]}
            </div>
            <JourneyArrow dir="left" area="ah3" />
            <div className="cs-vise-snake-step f" role="listitem">
              {journeySteps[4]}
            </div>
            <JourneyArrow dir="down" area="vd2" />
            <div className="cs-vise-snake-step g" role="listitem">
              {journeySteps[5]}
            </div>
            <JourneyArrow dir="right" area="ah5" />
            <div className="cs-vise-snake-step h" role="listitem">
              {journeySteps[6]}
            </div>
            <JourneyArrow dir="right" area="ah6" />
            <div className="cs-vise-snake-step i" role="listitem">
              {journeySteps[7]}
            </div>
          </div>
        </section>

        <section className="cs-block">
          <Seq n="08">New Design</Seq>
          <div className="cs-vise-design-links">
            <ProtoButtons />
          </div>
          <p>Desktop prototype of the new vise.in. Click through the flow.</p>
          <div className="cs-embed">
            <iframe title="Vise desktop prototype" src={protoEmbed} allowFullScreen />
          </div>
        </section>

        <section className="cs-block">
          <Seq n="09">Business Impact</Seq>
          <p>
            The site is live on vise.in. These are the business effects the redesign was built to support. No conversion
            number from the client, so none here.
          </p>
          <div className="cs-vise-impact">
            {impact.map((item, i) => (
              <article key={item.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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
