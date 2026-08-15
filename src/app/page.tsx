import Image from "next/image";
import InquiryForm from "./InquiryForm";

const packages = [
  { name: "Front Stoop", price: "From $350", note: "A polished welcome for compact entries.", items: ["Curated pumpkin and gourd mix", "Seasonal planter or mum pair", "Lantern and natural accent styling", "Delivery, design, and installation"] },
  { name: "Full Harvest", price: "From $650", note: "A layered, photo-ready porch moment.", items: ["Expanded heirloom pumpkin palette", "Mums, baskets, lanterns, and texture", "Steps and entry styled as one composition", "Delivery, design, and installation"], featured: true },
  { name: "Statement Porch", price: "From $950", note: "A generous transformation with curb presence.", items: ["Premium volume and larger feature gourds", "Garland, dried botanicals, and vessels", "Custom composition for porch architecture", "Delivery, design, and installation"] }
];

const faqs = [
  ["Are the package prices final?", "Not yet. These are preliminary Fall 2026 starting prices while sourcing, labor, and route plans are finalized. Your proposal will confirm the exact design and price before booking."],
  ["What happens to the pumpkins afterward?", "Optional end-of-season removal will be available where scheduling allows. We’re also exploring responsible local composting and donation options; details will be confirmed before the season."],
  ["Can you use décor I already own?", "Yes. Share photos in your consultation and we can decide what belongs in the design, especially favorite lanterns, planters, and wreaths."],
  ["Will the display block my steps or deliveries?", "No. Usable doors, walkways, railings, and safe step depth come first. The design works around everyday access."],
  ["Are these photographs of completed client projects?", "No. The imagery on this launch site is AI-generated design-concept photography, clearly labeled so you can see the intended visual direction before our first season."],
  ["Do you serve Pennsylvania?", "Pennsylvania is a planned future expansion. Join the list and choose your location—we’ll use interest to shape the next service area."]
];

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">G</span><span>Gourd <i>&</i> Garland</span></a><nav aria-label="Primary navigation"><a href="#process">How it works</a><a href="#packages">Packages</a><a href="#service-area">Service area</a></nav><a className="header-cta" href="#inquire">Fall 2026 list</a></header>
    <main id="main">
      <section className="hero" id="top">
        <Image src="/hero.jpg" alt="AI design concept of an elegant New England porch styled with pumpkins, mums, garland, and lanterns" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow">Boston’s southwest suburbs · Fall 2026</p><h1>Seasonal magic,<br/><em>styled at your doorstep.</em></h1><p className="hero-text">We deliver, design, and install a beautifully layered fall porch—without the shopping, guesswork, or heavy lifting.</p><div className="hero-actions"><a className="button button-gold" href="#inquire">Join the priority list</a><a className="text-link" href="#packages">Explore packages <span aria-hidden="true">↘</span></a></div><p className="concept-label">AI-generated design concept · Fall 2026 launch</p></div>
      </section>

      <section className="intro section-pad"><div className="kicker"><span>01</span><p>A considered welcome</p></div><div className="intro-copy"><h2>Your porch,<br/><em>made ready for fall.</em></h2><p>Gourd & Garland brings the ingredients of a beautiful autumn entry to you, then composes every pumpkin, planter, lantern, and natural texture around the architecture of your home.</p><p>The result feels collected, balanced, and unmistakably yours—not dropped off in a pile.</p></div></section>

      <section className="process section-pad" id="process"><div className="section-heading light"><div><p className="eyebrow">How it works</p><h2>From porch photo<br/>to finished <em>scene.</em></h2></div><p>Four thoughtful steps. One beautifully handled front door.</p></div><ol className="steps"><li><span>01</span><h3>Share your porch</h3><p>Send a few photos, your town, and the package that catches your eye.</p></li><li><span>02</span><h3>Choose a direction</h3><p>We align on palette, scale, access needs, and any pieces you already love.</p></li><li><span>03</span><h3>We style it</h3><p>Our team sources, delivers, and installs the full composition in your scheduled window.</p></li><li><span>04</span><h3>Enjoy the season</h3><p>Optional removal means you can close out fall without the hauling, too.</p></li></ol></section>

      <section className="packages section-pad" id="packages"><div className="section-heading"><div><p className="eyebrow">Preliminary Fall 2026 packages</p><h2>Choose your<br/><em>moment.</em></h2></div><p>Starting prices are preliminary while final sourcing and route costs are confirmed. Every design is adjusted to fit the porch.</p></div><div className="package-grid">{packages.map((pkg, i) => <article className={pkg.featured ? "package featured" : "package"} key={pkg.name}>{pkg.featured && <p className="popular">Most requested scale</p>}<span className="package-number">0{i + 1}</span><h3>{pkg.name}</h3><p className="package-price">{pkg.price} <small>preliminary</small></p><p className="package-note">{pkg.note}</p><ul>{pkg.items.map(item => <li key={item}>{item}</li>)}</ul><a href="#inquire">Ask about this package <span aria-hidden="true">→</span></a></article>)}</div><p className="package-footnote">Optional removal, unusually large porches, specialty vessels, and travel beyond the core route are quoted separately.</p></section>

      <section className="gallery section-pad"><div className="gallery-heading"><p className="eyebrow">Design studies</p><h2>Autumn, in<br/><em>your home’s language.</em></h2><p>Original AI-generated design concepts created for Gourd & Garland. These are visual directions—not photographs of completed client work.</p></div><div className="gallery-grid"><figure><div className="triptych crop-left" role="img" aria-label="AI concept of a brick stoop with pumpkins, mums, and lanterns"/><figcaption><span>01</span> The Borough Stoop</figcaption></figure><figure><div className="triptych crop-center" role="img" aria-label="AI concept of a broad clapboard porch with heirloom pumpkins and dried botanicals"/><figcaption><span>02</span> The Gathered Porch</figcaption></figure><figure><div className="triptych crop-right" role="img" aria-label="AI concept detail with brass lantern and pale gourds on stone steps"/><figcaption><span>03</span> The Quiet Detail</figcaption></figure></div></section>

      <section className="service-area section-pad" id="service-area"><div className="area-copy"><p className="eyebrow">The first route</p><h2>Rooted near Boston.<br/><em>Designed to grow.</em></h2><p>Our Fall 2026 launch is focused on a compact southwest-suburban route so every installation receives the time it deserves.</p><ul><li>Dedham</li><li>Westwood</li><li>Norwood</li><li>Walpole</li><li>Medfield</li></ul><p className="area-note">Nearby town? Join the list anyway. We’ll confirm availability as routes take shape. Pennsylvania is planned as a future expansion.</p></div><div className="area-art" aria-hidden="true"><span className="map-ring one"/><span className="map-ring two"/><span className="map-ring three"/><span className="map-pin">G<span>Boston area</span></span></div></section>

      <section className="why section-pad"><div className="kicker"><span>02</span><p>Why Gourd & Garland</p></div><div><h2>All the feeling.<br/><em>None of the lifting.</em></h2><div className="reasons"><article><span>✦</span><h3>Edited, not overdone</h3><p>We build shape, color, and rhythm around your home instead of adding more for more’s sake.</p></article><article><span>✦</span><h3>Handled end to end</h3><p>Sourcing, delivery, design, installation, and optional removal live in one simple plan.</p></article><article><span>✦</span><h3>Real-life access first</h3><p>Your door opens. Your steps work. Packages and people can still pass safely.</p></article></div></div></section>

      <section className="faq section-pad"><div><p className="eyebrow">Before the pumpkins arrive</p><h2>A few good<br/><em>questions.</em></h2></div><div className="faq-list">{faqs.map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="inquire section-pad" id="inquire"><div className="inquire-copy"><p className="eyebrow">Fall 2026 priority list</p><h2>Be first at<br/><em>the doorstep.</em></h2><p>Tell us where you are and what you’re imagining. Priority-list members will hear first when consultation windows, final packages, and installation dates open.</p><div className="season-note"><span>Limited first-season route</span><p>Joining is free and does not reserve a date or require a deposit.</p></div></div><InquiryForm /></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">G</span><span>Gourd <i>&</i> Garland</span></a><p>Seasonal magic, styled at your doorstep.</p><p className="copyright">© 2026 Gourd & Garland. Fall 2026 launch.</p></footer>
  </>;
}
