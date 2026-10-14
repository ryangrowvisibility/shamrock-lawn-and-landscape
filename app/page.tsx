import Reveal from "./Reveal";
import { Icon, Stars, type IconName } from "./Icons";

const PHONE_DISPLAY = "(226) 929-3170";
const PHONE_TEL = "tel:+12269293170";
const PHONE_SMS = "sms:+12269293170";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Shamrock%20Lawn%20and%20Landscape&query_place_id=ChIJq6qq3X70K4gRZTlT8rY3syc";

const services: { icon: IconName; title: string; body: string; featured?: boolean }[] = [
  {
    icon: "mower",
    title: "Grass cutting and lawn care",
    body: "Regular, reliable grass cutting and lawn maintenance for houses, rentals and commercial lots. The crew shows up on schedule, does the job properly and leaves the property looking sharp.",
    featured: true,
  },
  {
    icon: "snow",
    title: "Snow removal",
    body: "Full-winter snow removal for homes and properties across Kitchener-Waterloo. One customer has relied on Shamrock for every winter for more than three years, praising the fast response after a snowfall.",
  },
  {
    icon: "sprout",
    title: "Landscaping and yard work",
    body: "Landscaping projects and one-off yard work when the property needs more than a cut: tidying beds, refreshing planted areas and getting the yard back in shape.",
  },
  {
    icon: "building",
    title: "Property management and student housing",
    body: "Ongoing grounds care for property management companies, commercial buildings and student housing. One company to keep lawns cut in summer and walkways clear in winter across your properties.",
  },
];

const reviews = [
  {
    name: "Lauren J.",
    job: "Snow removal + summer lawn care, 3+ years",
    quote:
      "We have used Shamrock for full winter snow removal and summer lawn care for more than three years. High-quality work, excellent response time, very fair pricing and a friendly attitude.",
  },
  {
    name: "HRS Property Management",
    job: "Landscaping + snow removal",
    quote: "Very professional, high-quality landscaping and snow removal. We will keep using them for our properties.",
  },
  {
    name: "Jim T.",
    job: "Lawn mowing",
    quote: "They do what they say they will. Always on time and reliable.",
  },
];

const steps = [
  { title: "Call or text", body: "Tell us the property address, what you need and whether it is a house, a rental or a building you manage." },
  { title: "Get a fair quote", body: "We will price the work clearly, whether it is a weekly cut, one landscaping job or a full winter of snow removal." },
  { title: "We get on the schedule", body: "Your property goes on our route. We show up when we say we will, every time." },
  { title: "Year-round care", body: "Keep the same insured, local crew from spring cleanups through the last snowfall." },
];

const faqs = [
  {
    q: "Are you insured?",
    a: "Yes. Shamrock Lawn and Landscape is fully insured, which matters for homeowners and is essential for property managers and commercial clients.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Kitchener and Waterloo. If your property is nearby and you are not sure we cover it, call or text (226) 929-3170.",
  },
  {
    q: "Do you work with property managers and student housing?",
    a: "Yes. Property management companies and student housing are a core part of our work. We handle ongoing grass cutting, landscaping and snow removal across multiple properties.",
  },
  {
    q: "Can I get lawn care and snow removal from the same company?",
    a: "Yes, and many of our customers do. One client has used us for full winter snow removal and summer lawn care for more than three years.",
  },
  {
    q: "How long have you been in business?",
    a: "Shamrock has been cutting grass and clearing snow in Kitchener-Waterloo for 7 years. It is a small, family-run company, and co-owner Conal Clohissey has a background in horticulture.",
  },
  {
    q: "When can I reach you?",
    a: "Our Google listing shows we open at 9 a.m. Call or text (226) 929-3170 any time and leave a message if we are out on a job; we reply quickly.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the size of the property and how often you need service. Customers consistently describe our pricing as very fair. Call for a quote.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Shamrock Lawn and Landscape",
  telephone: "+1-226-929-3170",
  areaServed: ["Kitchener, ON", "Waterloo, ON"],
  founder: { "@type": "Person", name: "Conal Clohissey" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "6" },
  sameAs: [MAPS_URL],
  description:
    "Small, family-run, fully insured lawn and landscaping company in Kitchener-Waterloo offering grass cutting, landscaping and snow removal for residential, commercial, student housing and property management clients.",
};

function CallButton({ className = "", label = `Call ${PHONE_DISPLAY}` }: { className?: string; label?: string }) {
  return (
    <a
      href={PHONE_TEL}
      className={`btn-press inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-cta px-7 py-3 text-lg font-extrabold text-cta-ink shadow-sm hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${className}`}
    >
      <Icon name="phone" className="h-5 w-5" />
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-soft text-sm font-semibold text-brand-deep md:block">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-2">
          <span className="inline-flex items-center gap-1.5"><Icon name="pin" className="h-4 w-4" /> Kitchener &amp; Waterloo</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4" /> Opens 9 a.m.</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="shield" className="h-4 w-4" /> Fully insured</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Shamrock Lawn and Landscape home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-head text-xl font-black tracking-tight text-brand-deep">Shamrock</span>
              <span className="block text-xs font-semibold text-muted">Lawn and Landscape</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-[0.95rem] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#property-managers" className="hover:text-brand">Property Managers</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="hidden font-bold hover:text-brand md:inline">{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn-press hidden min-h-11 items-center rounded-lg bg-cta px-5 font-extrabold text-cta-ink hover:bg-cta-hover md:inline-flex">
              Call Now
            </a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="btn-press grid h-11 w-11 place-items-center rounded-lg bg-cta text-cta-ink md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <h1 className="text-brand-deep">Lawn Care &amp; Snow Removal in Kitchener-Waterloo</h1>
              <p className="measure mt-6 text-lg text-muted md:text-xl">
                Grass cutting in summer, snow removal all winter, landscaping in between. A small, family-run, fully insured crew trusted by homeowners, student housing and property managers for 7 years.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href={PHONE_SMS} className="btn-press inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 py-3 text-lg font-bold text-brand-deep hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" /> Text us
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.95rem] font-semibold">
                <span className="inline-flex items-center gap-2"><Stars /> 5.0</span>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">6 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>7 years in business</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Fully insured</span>
              </div>
            </div>

            <div className="rounded-2xl bg-brand p-7 text-white shadow-[0_30px_60px_-30px_oklch(0.27_0.08_262/0.7)]">
              <p className="font-head text-lg font-extrabold">Quick facts</p>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: "calendar" as IconName, t: "Year-round service", s: "Lawn care spring to fall, snow removal all winter" },
                  { icon: "building" as IconName, t: "Homes to multi-property", s: "Residential, commercial, student housing, property managers" },
                  { icon: "shield" as IconName, t: "Fully insured", s: "Protection for you and your property" },
                  { icon: "clock" as IconName, t: "Opens 9 a.m.", s: "Fast response, especially after a snowfall" },
                ].map((f) => (
                  <li key={f.t} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/12"><Icon name={f.icon} className="h-5 w-5" /></span>
                    <span>
                      <span className="block font-bold">{f.t}</span>
                      <span className="block text-[0.95rem] text-white/80">{f.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="border-y border-line bg-brand-soft">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, t: "5.0 on Google", s: "Owner replies to every review" },
              { icon: "calendar" as IconName, t: "7 years", s: "Serving Kitchener-Waterloo" },
              { icon: "shield" as IconName, t: "Fully insured", s: "Homes and commercial" },
              { icon: "user" as IconName, t: "Family-run", s: "Horticulture background" },
            ].map((i) => (
              <div key={i.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand text-white"><Icon name={i.icon} className="h-5 w-5" /></span>
                <div>
                  <p className="font-head text-lg font-extrabold leading-tight text-brand-deep">{i.t}</p>
                  <p className="text-sm text-muted">{i.s}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal>
              <h2 className="text-brand-deep">Lawn, landscape and snow services</h2>
              <p className="measure mt-4 text-muted">
                Four services, one dependable crew. Book one, or let us look after your property all year.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.title}
                  className={`lift flex flex-col rounded-2xl border bg-surface p-7 ${s.featured ? "border-brand border-2" : "border-line"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-0.5 text-xs font-extrabold text-cta-ink">Most requested</span>}
                  </div>
                  <h3 className="mt-4 text-xl">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.body}</p>
                  <a href={PHONE_TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-deep">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Property managers */}
        <section id="property-managers" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-brand-deep">Grounds care for property managers and student housing</h2>
              <p className="measure mt-4 text-muted">
                Managing rentals or commercial buildings in Kitchener-Waterloo means you need lawns cut and walkways cleared without chasing anyone. Shamrock already works with property management firms and student housing, and we are fully insured.
              </p>
              <p className="measure mt-4 text-muted">
                One call covers grass cutting through the growing season, landscaping touch-ups between tenants and snow removal all winter.
              </p>
              <CallButton label="Talk to us about your properties" className="mt-8" />
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "shield" as IconName, t: "Fully insured", s: "Coverage property managers expect." },
                { icon: "clock" as IconName, t: "Reliable schedule", s: "We do what we say, on time." },
                { icon: "snow" as IconName, t: "Fast snow response", s: "Excellent response time, per our clients." },
                { icon: "dollar" as IconName, t: "Fair pricing", s: "Straightforward quotes per property." },
              ].map((d) => (
                <li key={d.t} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <p className="mt-3 font-head text-lg font-extrabold">{d.t}</p>
                  <p className="mt-1 text-[0.95rem] text-muted">{d.s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-brand-deep">Rated 5.0 from 6 Google reviews</h2>
                <p className="measure mt-3 text-muted">
                  Long-term homeowners and a property management firm agree: high-quality work, fast response, fair prices and a friendly crew.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-line bg-surface px-5 font-bold hover:border-brand md:self-auto">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
              <figure className="flex flex-col rounded-2xl border-2 border-brand bg-surface p-8">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-4 flex-1 text-xl leading-relaxed md:text-2xl">&ldquo;{reviews[0].quote}&rdquo;</blockquote>
                <figcaption className="mt-6 text-sm">
                  <strong>{reviews[0].name}</strong>
                  <span className="block text-muted">{reviews[0].job}</span>
                </figcaption>
              </figure>
              <div className="grid gap-5">
                {reviews.slice(1).map((r) => (
                  <figure key={r.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                    <Stars />
                    <blockquote className="mt-3 flex-1 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                    <figcaption className="mt-4 text-sm">
                      <strong>{r.name}</strong>
                      <span className="block text-muted">{r.job}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-brand-deep">Small, family-run and here for the long haul</h2>
              <div className="measure mt-5 space-y-4 text-muted">
                <p>
                  Shamrock Lawn and Landscape is a small, family-run lawn and landscaping company that has served Kitchener-Waterloo for 7 years. Co-owner Conal Clohissey brings a background in horticulture, so your lawn is looked after by people who understand how grass and plants actually grow.
                </p>
                <p>
                  We work for homeowners, commercial properties, student housing and property management companies. Some customers have been with us for years, booking summer lawn care and full-winter snow removal season after season.
                </p>
                <p>
                  The owner personally replies to every review we receive. That is how we run the business: we pay attention, we keep our word and we treat every property like it matters.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "leaf" as IconName, t: "Horticulture know-how", s: "Lawn care grounded in real plant knowledge." },
                { icon: "check" as IconName, t: "High-quality work", s: "The theme of every review we get." },
                { icon: "clock" as IconName, t: "Always on time", s: "We do what we say we will." },
                { icon: "user" as IconName, t: "Friendly crew", s: "Easy to deal with, every visit." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-surface p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-3 text-lg">{d.t}</h3>
                  <p className="mt-1 text-[0.95rem] text-muted">{d.s}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal>
              <h2 className="text-brand-deep">How it works</h2>
            </Reveal>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-line bg-surface p-6">
                  <span className="font-head text-5xl font-black text-cta">{i + 1}</span>
                  <h3 className="mt-3">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-6 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-brand-deep">Serving Kitchener and Waterloo</h2>
              <p className="measure mt-4 text-muted">
                Lawn care, landscaping and snow removal for houses, rentals, student housing and commercial properties across both cities.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Kitchener", "Waterloo"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2 font-bold">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-muted">
                Property just outside the city? <a href={PHONE_SMS} className="font-bold text-brand underline underline-offset-4">Text us the address</a> and we will let you know.
              </p>
            </Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of Kitchener and Waterloo"
                src="https://maps.google.com/maps?q=Kitchener-Waterloo%2C%20Ontario&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <Reveal>
              <h2 className="text-brand-deep">Frequently asked questions</h2>
            </Reveal>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-line bg-surface">
                  <summary className="flex min-h-14 items-center justify-between gap-4 px-5 py-4 text-lg font-bold">
                    {f.q}
                    <Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep py-16 text-white md:py-24">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <h2 className="text-white md:text-5xl">Get your lawn and winter sorted.</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">Call Shamrock at {PHONE_DISPLAY}. Fully insured, family-run, serving Kitchener-Waterloo for 7 years. Opens 9 a.m.</p>
            </div>
            <CallButton />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-surface pb-24 pt-12 md:pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-head text-xl font-black text-brand-deep">Shamrock Lawn and Landscape</p>
            <p className="mt-2 text-muted">Family-run, fully insured lawn care, landscaping and snow removal in Kitchener-Waterloo for 7 years.</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-2 space-y-1.5 text-muted">
              <li><a href={PHONE_TEL} className="hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li>Opens 9 a.m.</li>
              <li>Service area: Kitchener and Waterloo, Ontario</li>
              <li>Fully insured</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-2 space-y-1.5 text-muted">
              {services.map((s) => <li key={s.title}>{s.title}</li>)}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-6">&copy; {new Date().getFullYear()} Shamrock Lawn and Landscape. All rights reserved.</p>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface p-3 md:hidden">
        <a href={PHONE_TEL} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-extrabold text-cta-ink">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={PHONE_SMS} className="btn-press inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand-deep">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
