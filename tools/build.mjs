// Noble Thermador Service — static site generator.
// Usage: node tools/build.mjs   → writes site/*.html + site/sitemap.xml
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { BRAND, REGIONS, CITIES, PROBLEMS, COOKING_HUB, COOLING_HUB, QUICK_LINKS, PILLARS, REVIEWS, FAQS_HOME } from './data.mjs';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');
mkdirSync(OUT, { recursive: true });

const cityBySlug = Object.fromEntries(CITIES.map(c => [c.slug, c]));
const cityHref = s => `thermador-repair-${s}.html`;

// City photography: drop assets/cities/<slug>.jpg and rebuild — pages pick it up.
mkdirSync(join(OUT, 'assets', 'cities'), { recursive: true });
const cityImg = s => existsSync(join(OUT, 'assets', 'cities', `${s}.jpg`)) ? `assets/cities/${s}.jpg` : null;

// Appliance/lifestyle photography in assets/media (basename without extension).
// Thermador renders supplied by owner 2026-08-07 (Desktop\noble thermador
// pictures), converted to 1600w jpgs. Update the maps below to reassign.
const media = n => existsSync(join(OUT, 'assets', 'media', `${n}.jpg`)) ? `assets/media/${n}.jpg` : null;
const mediaImg = (n, alt, cls = 'city-hero', extra = '') => {
  const src = media(n);
  return src ? `<img class="${cls}" src="${src}" alt="${alt}"${extra}>` : '';
};
const logoImg = (cls = 'brand-logo') => existsSync(join(OUT, 'assets', 'media', 'logo.png'))
  ? `<img class="${cls}" src="assets/media/logo.png" alt="${BRAND.name}">`
  : '';

// Responsive background video for a photo hero. Expects <base>.mp4 and/or
// <base>-mobile.mp4 with matching -poster jpgs in assets/media. When only
// the mobile clip exists, desktop removes the video and keeps a plain hero.
const heroVideo = base => {
  const hasDesktop = existsSync(join(OUT, 'assets', 'media', `${base}.mp4`));
  const hasMobile = existsSync(join(OUT, 'assets', 'media', `${base}-mobile.mp4`));
  if (!hasDesktop && !hasMobile) return '';
  const poster = hasDesktop ? `${base}-poster.jpg` : `${base}-poster-mobile.jpg`;
  return `<video class="hero-bg" autoplay muted loop playsinline preload="auto" poster="assets/media/${poster}"></video>
  <script>(function () {
    var sc = document.currentScript;
    var v = sc.previousElementSibling;
    var mobile = window.matchMedia && window.matchMedia('(max-width: 833px)').matches;
    var hasDesktop = ${hasDesktop};
    if (mobile && ${hasMobile}) {
      v.poster = 'assets/media/${base}-poster-mobile.jpg';
      v.src = 'assets/media/${base}-mobile.mp4';
    } else if (hasDesktop) {
      v.src = 'assets/media/${base}.mp4';
    } else {
      var scrim = sc.nextElementSibling;
      v.remove();
      if (scrim && scrim.className === 'hero-scrim') scrim.remove();
    }
  })();</script>
  <div class="hero-scrim"></div>`;
};

// Hero image per problem page.
const PROB_IMG = {
  'thermador-oven-not-heating': ['thermador-new-walloven-02', 'Thermador wall oven set in a marble wall'],
  'thermador-oven-uneven-baking': ['thermador-new-walloven-09', 'Thermador wall oven stack midway through a bake'],
  'thermador-star-burner-clicking': ['thermador-used-range-03', 'Star Burner lit with blue flame on a Thermador rangetop'],
  'thermador-oven-door-problems': ['thermador-used-range-07', 'Open Thermador oven door with a dish coming out'],
  'thermador-refrigerator-not-cooling': ['thermador-used-fridge-01', 'Built in Thermador refrigerator in a cream kitchen'],
  'thermador-refrigerator-leaking-water': ['thermador-used-fridge-05', 'Thermador refrigerator nameplate and handle up close'],
  'thermador-ice-maker-repair': ['thermador-new-freezer-08', 'Open Thermador freezer column with ice drawers'],
  'thermador-freezer-not-freezing': ['thermador-new-freezer-01', 'Thermador freezer column in white oak cabinetry'],
  'thermador-column-refrigeration-service': ['thermador-new-freezer-02', 'Panel ready Thermador column pair in rift oak'],
  'thermador-condenser-cleaning': ['thermador-used-fridge-07', 'Panel ready Thermador column open in a walnut kitchen'],
};

// Gallery wall on the homepage.
const GALLERY = [
  ['thermador-kitchen-new-11', 'Penthouse kitchen at dusk with Thermador columns'],
  ['thermador-kitchen-new-02', 'Thermador range under a Calacatta marble hood'],
  ['thermador-kitchen-new-10', 'Thermador range in a European farmhouse kitchen'],
  ['thermador-used-fridge-10', 'Thermador refrigerator in a craftsman kitchen'],
  ['thermador-kitchen-new-03', 'Dark walnut kitchen with a Thermador range'],
  ['thermador-kitchen-new-13', 'Vineyard estate kitchen with a Thermador range'],
  ['thermador-kitchen-used-13', 'Evening entertaining around a Thermador kitchen'],
  ['thermador-kitchen-new-08', 'Thermador range in an industrial loft kitchen'],
];
const cityCardMedia = c => {
  const img = cityImg(c.slug);
  return `<div class="frame">${img
    ? `<img src="${img}" alt="${c.name}" loading="lazy">`
    : `<div class="photo">${c.name} (photo coming)</div>`}</div>`;
};

// ---------------------------------------------------------------------------
// Shared chrome
// ---------------------------------------------------------------------------
const head = (title, desc, path, extra = '') => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${BRAND.domain}/${path === 'index.html' ? '' : path.replace(/\.html$/, '')}">
<link rel="icon" type="image/png" href="favicon.png">
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="site.css">
<script src="site.js" defer></script>
${extra}</head>
<body>
`;

const nav = (current = '') => `
<nav class="global-nav">
  <div class="inner">
    <a class="wordmark" href="index.html"><img class="nav-crest" src="assets/media/crest-bright.png" alt="">${BRAND.navName}</a>
    <div class="links">
      <a href="problems.html">Problems we fix</a>
      <a href="cities.html">Cities served</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </div>
    <a class="call" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
</nav>

<nav class="sub-nav">
  <div class="inner">
    <div class="category"><img class="nav-crest sub" src="favicon.png" alt="">${current || 'Noble'}</div>
    <div class="links">
      <a href="index.html">Overview</a>
      <a href="problems.html">Repairs</a>
      <a href="cities.html">Service area</a>
      <a class="book" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    </div>
  </div>
</nav>
`;

const footer = () => `
<div class="call-bar">
  <a class="btn btn-primary" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
</div>
<footer class="site-footer">
  <div class="inner">
    ${logoImg()}
    <div class="cols">
      <div class="col">
        <h4>Cooking</h4>
        <a href="thermador-oven-not-heating.html">Oven not heating</a>
        <a href="thermador-oven-uneven-baking.html">Uneven baking</a>
        <a href="thermador-star-burner-clicking.html">Burner clicking</a>
        <a href="thermador-oven-door-problems.html">Door and hinges</a>
      </div>
      <div class="col">
        <h4>Refrigeration</h4>
        <a href="thermador-refrigerator-not-cooling.html">Not cooling</a>
        <a href="thermador-refrigerator-leaking-water.html">Leaking water</a>
        <a href="thermador-ice-maker-repair.html">Ice maker repair</a>
        <a href="thermador-freezer-not-freezing.html">Freezer repair</a>
        <a href="thermador-column-refrigeration-service.html">Column service</a>
        <a href="thermador-condenser-cleaning.html">Condenser cleaning</a>
      </div>
      <div class="col">
        <h4>Company</h4>
        <a href="about.html">About Noble</a>
        <a href="cities.html">Cities served</a>
        <a href="problems.html">Problems we fix</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="col">
        <h4>Concierge line</h4>
        <a href="tel:${BRAND.tel}">${BRAND.phone}</a>
        <a href="mailto:${BRAND.email}">${BRAND.email}</a>
        <a href="contact.html">${BRAND.hours}</a>
        <a href="cities.html">By appointment · ${BRAND.base}</a>
      </div>
    </div>
    <div class="legal">${BRAND.name} is an independent service company and is not affiliated with, endorsed by, or sponsored by BSH Home Appliances Corporation. Thermador&reg; is a registered trademark of BSH Home Appliances Corporation. Licensed and insured in California.<br>
    Copyright &copy; 2026 ${BRAND.name}. All rights reserved. &middot; <a href="contact.html">Terms</a> &middot; <a href="contact.html">Privacy</a></div>
  </div>
</footer>

</body>
</html>
`;

const pillarsTile = (surface = 'tile-parchment') => `
<section class="tile ${surface}">
  <h2>What every visit includes.</h2>
  <p class="lead-airy muted">Six commitments, kept on every job without exception.</p>
  <div class="card-grid">
    ${PILLARS.map(([t, d]) => `<div class="utility-card"><h3>${t}</h3><p>${d}</p></div>`).join('\n    ')}
  </div>
</section>`;

const ctaTile = (h = 'Consider it handled.', sub = `One phone call and the problem becomes ours. ${BRAND.hours}.`) => `
<section class="tile tile-navy">
  <h2>${h}</h2>
  <p class="lead muted">${sub}</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
  <p class="lead-airy muted" style="font-size: 14px; margin-top: 18px;">First callers get first pick of the same day windows. The ${BRAND.diagnostic} diagnostic credits toward the repair, so the answer itself ends up costing nothing.</p>
</section>`;

// Risk-reversal tile — removes every reason to hesitate before calling.
const riskTile = () => `
<section class="tile tile-white">
  <h2>Every reason to wait, removed.</h2>
  <p class="lead-airy muted">We designed the hesitation out of this decision on purpose.</p>
  <div class="card-grid">
    <div class="utility-card"><h3>Free once you say yes</h3><p>The ${BRAND.diagnostic} diagnostic is quoted before booking and credited entirely against an approved repair. Learning what broke carries no separate cost.</p></div>
    <div class="utility-card"><h3>One written number</h3><p>Nothing starts until you approve a single quoted price, and that price does not move afterward. Hard jobs stay our problem, not your invoice.</p></div>
    <div class="utility-card"><h3>${BRAND.warrantyYears} years of cover</h3><p>Parts and labor both, in writing. Should the repair fail within ${BRAND.warrantyYears} years, we return and make it right for free.</p></div>
  </div>
  <div class="ctas"><a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a></div>
</section>`;

const faqBlock = faqs => `
  <div class="faq">
    ${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n    ')}
  </div>`;

const write = (file, html) => writeFileSync(join(OUT, file), html, 'utf8');
const pages = [];
const page = (file, html) => { write(file, html); pages.push(file); };

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
const ldHome = `<script type="application/ld+json">
${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
  name: BRAND.name, telephone: BRAND.phone, email: BRAND.email, url: BRAND.domain,
  areaServed: CITIES.map(c => c.name), openingHours: 'Mo-Su 07:00-19:00',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA' },
  description: 'Factory trained Thermador appliance repair across greater Los Angeles.',
}, null, 1)}
</script>
`;

page('index.html', head(
  `${BRAND.name} | Thermador repair for the homes that expect more`,
  `Thermador specialists serving greater Los Angeles. Ranges, cooktops, wall ovens, refrigeration columns. Factory trained, white glove, 3 year guarantee. ${BRAND.phone}.`,
  'index.html', ldHome)
+ nav('Noble')
+ `
<section class="tile tile-hero">
  <picture>
    <source media="(max-width: 833px)" srcset="assets/media/hero-mobile.jpg">
    <img class="hero-bg" src="assets/media/hero-desktop.jpg" alt="Thermador range beneath a plaster hood in a kitchen under Noble care">
  </picture>
  <div class="hero-scrim"></div>
  <div class="hero-content">
    <p class="eyebrow">Thermador specialists &middot; Los Angeles &middot; ${BRAND.hours}</p>
    <h1>Your Thermador, <span class="accent-cold">back to its best</span>. <br>Frequently the very day you call.</h1>
    <p class="lead muted">We have spent ${BRAND.years} years inside professional kitchen equipment and never grew tired of it. Genuine parts travel with the tech, the guarantee runs ${BRAND.warrantyYears} years on paper, and the ${BRAND.diagnostic} diagnostic credits toward your repair.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    </div>
    <p class="lead-airy muted" style="font-size: 14px; margin-top: 14px;">Refrigeration losing its cold? Say so on the call and the schedule bends for you.</p>
  </div>
</section>

<section class="tile tile-navy">
  ${existsSync(join(OUT, 'assets', 'media', 'crest-bright.png')) ? '<img class="promise-crest" src="assets/media/crest-bright.png" alt="Noble crest">' : ''}
  <p class="eyebrow" style="color: var(--color-primary-on-dark);">The Noble Promise</p>
  <h2>One number, honored.</h2>
  <p class="lead muted">Your quote arrives in writing before work begins, and nothing about it changes after.</p>
  <div class="prose">
    <p>Pricing at Noble happens exactly once per repair. Following the diagnosis you get a single written figure covering the complete fix for the problem you called about. Once you approve it, that figure is frozen. It cannot inflate in the driveway or mutate on the invoice.</p>
    <p>Some jobs turn stubborn. An extra part, an extra hour, a second trip to finish it right. The price you approved still stands, because absorbing the difficult days is what a real quote means. That risk belongs to us and we planned for it.</p>
    <p>If we notice something unrelated while inside the machine, you hear about it, in plain terms, as a separate written item. Nothing lands on your bill that you did not explicitly approve.</p>
    <p><strong>And behind every job stands the same commitment. ${BRAND.warrantyYears} years, parts and labor, written down.</strong></p>
  </div>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
</section>

<section class="tile tile-ice">
  <h2>Waiting is the most expensive option.</h2>
  <div class="card-grid">
    <div class="utility-card"><h3>The groceries go first</h3><p>Hundreds of dollars of food sit inside a failing refrigerator, and spoilage does not wait for a convenient moment. It begins quietly the hour the temperature slips.</p></div>
    <div class="utility-card"><h3>The machine goes next</h3><p>Equipment compensating for a weak component works overtime, and overtime is how a modest fix escalates into sealed system surgery or a dead control board.</p></div>
    <div class="utility-card"><h3>The house can follow</h3><p>Slow water travels under floors invisibly, and a door leaking oven heat cooks the cabinetry around it week after week. Deferral sends the bill to the building itself.</p></div>
  </div>
  <p class="lead-airy muted" style="font-size: 17px; margin-top: 28px;">Every appliance problem has a small version and a large one. Calling early is how you buy the small version.</p>
  <div class="ctas"><a class="btn btn-primary" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a></div>
</section>

<section class="tile tile-parchment">
  <h2>${BRAND.years} years, deliberately narrow.</h2>
  <p class="lead-airy muted">Specialization is a bet that depth beats breadth. After ${BRAND.years} years inside these machines, we would make the same bet again.</p>
  <div class="metric-grid">
    <div class="metric"><div class="value">${BRAND.years}<span style="font-size:22px">yrs</span></div><div class="label">of factory certified work</div></div>
    <div class="metric"><div class="value">${BRAND.warrantyYears}<span style="font-size:22px">yr</span></div><div class="label">written parts and labor cover</div></div>
    <div class="metric"><div class="value">7<span style="font-size:22px">days</span></div><div class="label">weekly, 7am to 7pm</div></div>
    <div class="metric"><div class="value">${BRAND.diagnostic}</div><div class="label">diagnostic, credited to the repair</div></div>
    <div class="metric"><div class="value">100%</div><div class="label">factory parts, zero substitutes</div></div>
    <div class="metric"><div class="value">1<span style="font-size:22px">st</span></div><div class="label">trip completions on most calls</div></div>
  </div>
</section>

<section class="tile tile-ember">
  <p class="eyebrow" style="color: var(--color-wolf);">Thermador cooking</p>
  <h2>Real fire, precisely managed.</h2>
  <p class="lead muted">Ranges, cooktops, rangetops, and wall ovens. Star Burner ignition, ExtraLow simmers, convection, steam, doors, and controls, all brought back to factory behavior.</p>
  <div class="ctas">
    <a class="btn btn-wolf" href="problems.html#cooking">What we fix</a>
    <a class="btn btn-ghost-wolf" href="tel:${BRAND.tel}">Call now</a>
  </div>
  ${mediaImg('thermador-new-range-03', 'Thermador Star Burner lit with blue flame', 'city-hero ph-shadow', ' style="max-width: 720px; height: 420px; border-radius: 8px;"')}
</section>

<section class="tile tile-dark">
  <p class="eyebrow" style="color: var(--color-primary-on-dark);">Thermador refrigeration</p>
  <h2>The cold, held steady.</h2>
  <p class="lead muted">Freedom columns, built in refrigerators, freezers, and ice systems. Sealed systems, gaskets, airflow, and drift, each returned to the number on the display.</p>
  <div class="ctas">
    <a class="btn btn-primary" href="problems.html#refrigeration">What we fix</a>
    <a class="btn btn-ghost-dark" href="tel:${BRAND.tel}">Call now</a>
  </div>
  ${mediaImg('thermador-new-freezer-03', 'Thermador refrigeration columns in a marble wall', 'city-hero ph-shadow', ' style="max-width: 720px; height: 420px; border-radius: 8px;"')}
</section>

<section class="tile tile-white">
  <h2>Rooms in our care.</h2>
  <p class="lead-airy muted">A few of the kitchens we look after, from canyon estates to houses by the sand.</p>
  <div class="gallery-grid">
    ${GALLERY.map(([n, alt]) => media(n) ? `<div class="shot"><img src="${media(n)}" alt="${alt}" loading="lazy"></div>` : '').join('\n    ')}
  </div>
</section>

${pillarsTile('tile-parchment')}

<section class="tile tile-white">
  <h2>Four steps, no surprises.</h2>
  <ol class="step-list">
    <li><div><h3>Measure first</h3><p>The tech tests circuits and systems with instruments before offering a single opinion, then explains the finding in ordinary language.</p></div></li>
    <li><div><h3>Approve one price</h3><p>A single written figure, shown before any repair begins. The ${BRAND.diagnostic} diagnostic is already counted inside it.</p></div></li>
    <li><div><h3>Repair with real parts</h3><p>Genuine Thermador components, most already on the truck. The floors stay covered and the majority of jobs close in one visit.</p></div></li>
    <li><div><h3>Stand behind it</h3><p>${BRAND.warrantyYears} years of documented coverage on the work. Should anything give out, the return visit costs you nothing. That is the entire policy.</p></div></li>
  </ol>
</section>

${riskTile()}

<section class="tile tile-navy">
  <h2>What we are actually protecting.</h2>
  <p class="lead-airy muted" style="max-width: 720px; margin-left: auto; margin-right: auto;">A kitchen is where the household actually happens. Pancakes before school, the long slow holiday meals, the midnight conversations by refrigerator light. Our trade is machinery, but our product is that room continuing without interruption. The craft matters to us enormously, and it is still just the means.</p>
</section>

<section class="tile tile-white">
  <h2>The questions everyone asks.</h2>
  ${faqBlock(FAQS_HOME)}
</section>

<section class="tile tile-ice">
  <h2>Reviews earned, never chased.</h2>
  <p class="lead-airy muted">We just do the work as if the client is watching. Word travels on its own after that.</p>
  <div class="quote-grid">
    ${REVIEWS.map(r => `<figure class="quote" style="margin:0">
      <div class="review-head">
        <div class="review-avatar">${r.name.charAt(0)}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-meta">${r.area}</div>
        </div>
      </div>
      <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p>&ldquo;${r.q}&rdquo;</p>
      <span class="review-tag">${r.service}</span>
    </figure>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>Odds are, we already drive your street.</h2>
  <p class="lead-airy muted">Wherever the serious kitchens are, the routes already reach.</p>
  <div class="chip-row">
    ${['beverly-hills','bel-air','malibu','pacific-palisades','calabasas','manhattan-beach','pasadena','hidden-hills','newport-beach','santa-barbara'].map(s => `<a class="chip" href="${cityHref(s)}">${cityBySlug[s].name}</a>`).join('\n    ')}
  </div>
  <div class="ctas"><a class="btn btn-ghost" href="cities.html">All cities served</a></div>
</section>

<section class="tile tile-parchment">
  <h2>Built for estates and portfolios.</h2>
  <div class="prose">
    <p>House managers, family offices, and property firms keep Noble on standing account because it removes a category of problems from their desk. Every appliance gets a documented history, certificates of insurance arrive on request, our techs carry existing clearances for the gated communities, and invoices arrive shaped for your bookkeeping rather than ours.</p>
    <p>Multiple properties become one calendar under the Noble maintenance plan. Condenser service, gasket and seal inspection, and cooking calibration across every unit you manage, approved once and handled all year.</p>
  </div>
  ${mediaImg('thermador-new-freezer-05', 'Integrated Thermador refrigeration beside a glass wine room', 'city-hero', ' loading="lazy"')}
  <div class="ctas">
    <a class="btn btn-primary" href="contact.html">Speak with us</a>
  </div>
</section>
`
+ ctaTile()
+ footer());

// ---------------------------------------------------------------------------
// Problems hub
// ---------------------------------------------------------------------------
const HUB_IMG = {
  'Oven not heating': ['thermador-new-walloven-02', 'Thermador wall oven in a marble wall'],
  'Uneven baking': ['thermador-new-walloven-09', 'Thermador oven stack midway through a bake'],
  'Burner clicking': ['thermador-used-range-03', 'Lit Star Burner up close'],
  'Simmer and flame faults': ['thermador-new-range-02', 'Thermador gas range, straight on'],
  'Door and hinge trouble': ['thermador-used-range-07', 'Open Thermador oven door'],
  'Self clean lockouts': ['thermador-used-walloven-05', 'Thermador oven control panel up close'],
  'Not cooling': ['thermador-used-fridge-01', 'Built in Thermador refrigerator'],
  'Leaking water': ['thermador-used-fridge-05', 'Thermador refrigerator door detail'],
  'Ice maker down': ['thermador-new-freezer-08', 'Freezer column with ice drawers open'],
  'Freezer trouble': ['thermador-new-freezer-01', 'Thermador freezer column in white oak'],
  'Column care': ['thermador-new-freezer-02', 'Panel ready Thermador column pair'],
  'Excess frost': ['thermador-new-fridge-03', 'Refrigerator and freezer columns open'],
  'Door seal failure': ['thermador-new-fridge-04', 'Thermador column doors at dusk'],
  'Unusual noise': ['thermador-used-fridge-08', 'Thermador refrigerator pair in cream cabinetry'],
};
const hubCard = i => {
  const im = HUB_IMG[i.title];
  const pic = im && media(im[0]) ? `<img class="card-img" src="${media(im[0])}" alt="${im[1]}" loading="lazy">` : '';
  return `<div class="utility-card">${pic}<h3>${i.title}</h3><p>${i.desc}</p>${i.link ? `<a class="more" href="${i.link}">The full story</a>` : ''}</div>`;
};

page('problems.html', head(
  `Problems we fix | Thermador appliance repair | ${BRAND.name}`,
  `Thermador failures diagnosed and repaired by factory trained Noble techs. Ovens, Star Burners, doors, refrigerators, freezers, columns, ice makers.`,
  'problems.html')
+ nav('Problems we fix')
+ `
<section class="tile tile-hero">
  ${heroVideo('problems')}
  <div class="hero-content">
    <p class="eyebrow">Problems we fix</p>
    <h1>Whatever failed, <br>it has failed for us before.</h1>
    <p class="lead muted">${BRAND.years} years of certified Thermador work means your symptom is almost certainly an old acquaintance of ours.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    </div>
  </div>
</section>

<section class="tile tile-parchment">
  <h2>When to pick up the phone.</h2>
  <ol class="step-list">
    <li><div><h3>Numbers stop agreeing</h3><p>The display says one temperature, a thermometer says another. Caught early, drift is the least expensive repair in this building.</p></div></li>
    <li><div><h3>Cycles never end</h3><p>A refrigerator that cannot rest or an oven that preheats forever is compensating for something. Compensation always has a cost.</p></div></li>
    <li><div><h3>The soundtrack changes</h3><p>Clicks, hums, and grinding that were not there last month. Components complain audibly before they die.</p></div></li>
    <li><div><h3>Frost, drips, or stray heat</h3><p>Anything appearing where it does not belong is a message from a system further upstream.</p></div></li>
    <li><div><h3>Doors misbehave</h3><p>A drooping oven door or a refrigerator door that needs convincing is spending your energy around a broken seal.</p></div></li>
  </ol>
</section>

<section class="tile tile-ember" id="cooking">
  <p class="eyebrow" style="color: var(--color-wolf);">Thermador cooking</p>
  <h2>Where the heat lives.</h2>
  <div class="card-grid">
    ${COOKING_HUB.map(hubCard).join('\n    ')}
  </div>
</section>

<section class="tile tile-ice" id="refrigeration">
  <p class="eyebrow" style="color: var(--color-primary);">Thermador refrigeration</p>
  <h2>Where the cold lives.</h2>
  <div class="card-grid">
    ${COOLING_HUB.map(hubCard).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>Start from the symptom.</h2>
  <p class="lead-airy muted">Choose what sounds like your kitchen. Figuring out the rest is what we are for.</p>
  <div class="chip-row">
    ${QUICK_LINKS.map(([href, label]) => `<a class="chip" href="${href}">${label}</a>`).join('\n    ')}
  </div>
</section>
`
+ ctaTile('Describe the symptom. We bring the answer.')
+ footer());

// ---------------------------------------------------------------------------
// Problem detail pages
// ---------------------------------------------------------------------------
for (const p of PROBLEMS) {
  const isCooking = p.side === 'cooking';
  const accent = isCooking ? 'var(--color-wolf)' : 'var(--color-primary)';
  const btn = isCooking ? 'btn-wolf' : 'btn-primary';
  const others = PROBLEMS.filter(o => o.slug !== p.slug).slice(0, 5);
  page(`${p.slug}.html`, head(
    `${p.title} | expert repair | ${BRAND.name}`,
    `${p.title}: what causes it, why waiting costs more, and how Noble repairs it with factory trained techs, genuine parts, and a ${BRAND.warrantyYears} year guarantee.`,
    `${p.slug}.html`)
  + nav(p.title)
  + `
<section class="tile tile-white">
  <p class="eyebrow" style="color: ${accent};">${isCooking ? 'Thermador cooking' : 'Thermador refrigeration'}</p>
  <h1>${p.title}.</h1>
  <p class="lead muted">${p.tagline}</p>
  <div class="ctas">
    <a class="btn ${btn} btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
  ${PROB_IMG[p.slug] ? mediaImg(PROB_IMG[p.slug][0], PROB_IMG[p.slug][1], 'city-hero', ' loading="lazy"') : ''}
</section>

<section class="tile tile-parchment">
  <h2>What is actually happening.</h2>
  <div class="prose">
    ${p.what.map(t => `<p>${t}</p>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-white">
  <h2>The usual suspects.</h2>
  <div class="card-grid">
    ${p.causes.map(([t, d]) => `<div class="utility-card"><h3>${t}</h3><p>${d}</p></div>`).join('\n    ')}
  </div>
</section>

<section class="tile tile-parchment">
  <h2>Worth knowing.</h2>
  ${faqBlock(p.faqs)}
</section>

<section class="tile tile-white">
  <h2>Also in our wheelhouse.</h2>
  <div class="chip-row">
    ${others.map(o => `<a class="chip" href="${o.slug}.html">${o.nav}</a>`).join('\n    ')}
    <a class="chip" href="problems.html">All problems we fix</a>
  </div>
</section>
`
  + ctaTile(`${isCooking ? 'The heat comes back' : 'The cold comes back'} with one call.`)
  + footer());
}

// ---------------------------------------------------------------------------
// Cities hub
// ---------------------------------------------------------------------------
const regionBlocks = REGIONS.map(r => {
  const list = CITIES.filter(c => c.region === r);
  if (!list.length) return '';
  return `<div class="region">
    <h3>${r}</h3>
    <div class="city-grid">
      ${list.map(c => `<a class="city-card" href="${cityHref(c.slug)}">
        ${cityCardMedia(c)}
        <div class="name">${c.name}</div>
        <div class="sub">Thermador appliance repair</div>
      </a>`).join('\n      ')}
    </div>
  </div>`;
}).join('\n  ');

page('cities.html', head(
  `Cities served | Thermador repair across greater Los Angeles | ${BRAND.name}`,
  `Noble covers ${CITIES.length} communities from Beverly Hills to Montecito and Malibu to Newport Coast. Find yours and book certified Thermador service.`,
  'cities.html')
+ nav('Cities served')
+ `
<section class="tile tile-white">
  <p class="eyebrow muted">Service area</p>
  <h1>Our routes follow<br>the serious kitchens.</h1>
  <p class="lead muted">${CITIES.length} communities in regular rotation across greater Los Angeles, with Newport Beach and Santa Barbara holding their own standing service days.</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
</section>

<section class="tile tile-parchment" style="text-align: center;">
  <h2>Pick your city.</h2>
  ${regionBlocks}
</section>

<section class="tile tile-white">
  <h2>City missing?</h2>
  <p class="lead-airy muted">Addresses beyond the printed routes get handled by arrangement more often than not. Worth a call.</p>
  <div class="ctas"><a class="btn btn-primary" href="contact.html">Contact Noble</a></div>
</section>
`
+ ctaTile()
+ footer());

// Alias page (kept for parity with sibling sites; one canonical + redirect)
page('cities-we-serve.html', `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=cities.html"><link rel="canonical" href="${BRAND.domain}/cities"><title>Cities served | ${BRAND.name}</title></head>
<body><p>Moved: <a href="cities.html">Cities served</a></p></body></html>
`);

// ---------------------------------------------------------------------------
// City pages
// ---------------------------------------------------------------------------
for (const c of CITIES) {
  const nearby = c.nearby.map(s => cityBySlug[s]).filter(Boolean);
  const ld = `<script type="application/ld+json">
${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Service',
    name: `Thermador appliance repair in ${c.name}`,
    provider: { '@type': 'HomeAndConstructionBusiness', name: BRAND.name, telephone: BRAND.phone, url: BRAND.domain },
    areaServed: c.name, serviceType: 'Appliance repair',
  }, null, 1)}
</script>
`;
  page(cityHref(c.slug), head(
    `Thermador repair in ${c.name} | ranges, ovens, columns | ${BRAND.name}`,
    `Thermador range, wall oven, and refrigeration repair in ${c.name} by certified Noble techs. Genuine parts, white glove care, ${BRAND.warrantyYears} year guarantee. ${BRAND.phone}.`,
    cityHref(c.slug), ld)
  + nav(c.name)
  + `
<section class="tile tile-white">
  <p class="eyebrow muted">${c.region}</p>
  <h1>Thermador repair<br>in ${c.name}.</h1>
  <p class="lead muted">Ranges, cooktops, wall ovens, refrigerators, freezers, and Freedom columns, handled by certified techs whose route already includes your street. Failing refrigeration earns same day priority, and each repair carries our written ${BRAND.warrantyYears} year guarantee out the door.</p>
  <div class="ctas">
    <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
  </div>
  ${cityImg(c.slug)
    ? `<img class="city-hero" src="${cityImg(c.slug)}" alt="${c.name}">`
    : `<div class="ph" style="height: 380px; border-radius: var(--rounded-lg);">${c.name} city photo (coming)</div>`}
</section>

<section class="tile tile-parchment">
  <h2>How we serve ${c.name}.</h2>
  <div class="prose">
    <p>${c.intro}</p>
    <p>The Noble routine does not vary by zip code. Instruments before opinions, genuine parts riding on the truck, floors and millwork shielded from door to door, and a ${BRAND.warrantyYears} year written guarantee handed over with the invoice. What the paperwork cannot capture is the rest of it. Honest recommendations, unhurried explanations, and the small corrections we make along the way simply because we saw they were needed. ${c.name} holds its homes to a standard. So do we.</p>
  </div>
</section>

<section class="tile tile-white">
  <div class="card-grid two">
    <div class="utility-card">
      <h3 style="color: var(--color-wolf);">Thermador cooking</h3>
      <p>Ovens losing heat or baking crooked, Star Burners clicking without flame, simmers that die, doors that sag. Certified hands return the fire to factory spec.</p>
      <a class="more" href="problems.html#cooking">Cooking repairs</a>
    </div>
    <div class="utility-card">
      <h3 style="color: var(--color-primary);">Thermador refrigeration</h3>
      <p>Compartments going warm, freezers losing zero, columns drifting apart, leaks, ice makers, tired gaskets. Instruments find it and factory parts end it.</p>
      <a class="more" href="problems.html#refrigeration">Refrigeration repairs</a>
    </div>
  </div>
</section>

${pillarsTile('tile-parchment')}

<section class="tile tile-white">
  <h2>Across ${c.name}.</h2>
  <p class="lead-airy muted">${c.hoods.join(' · ')}</p>
</section>

<section class="tile tile-ice">
  <h2>${c.name} tends to ask.</h2>
  ${faqBlock([
    ['Can the visit stay low profile?', `Absolutely. Unmarked vehicles on request, clearances already in place for gated ${c.name} communities, and easy coordination with household staff. We aim to leave a working kitchen and no other evidence.`],
    ['What protection does my kitchen get?', 'Runners down before tools come out, shoe covers at the threshold, padding on panels and stone. Custom cabinetry gets treated as unrepeatable, because it usually is.'],
    ['My refrigerator is warming right now. What happens?', `Tell the scheduler and the ${c.name} board gets reshuffled around you, typically same day or next morning, weekends included. Keep the doors closed until we arrive. ${BRAND.phone}.`],
    ['What stands behind the repair?', `A written ${BRAND.warrantyYears} year guarantee on parts and labor, plus the ${BRAND.diagnostic} diagnostic folding into the price of any repair you approve.`],
  ])}
</section>

<section class="tile tile-white">
  <h2>Neighbors we also serve.</h2>
  <div class="chip-row">
    ${nearby.map(n => `<a class="chip" href="${cityHref(n.slug)}">${n.name}</a>`).join('\n    ')}
    <a class="chip" href="cities.html">All cities served</a>
  </div>
</section>
`
  + ctaTile(`${c.name}, this one is ours now.`)
  + footer());
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
page('about.html', head(
  `About Noble | ${BRAND.years} years, one specialty | ${BRAND.name}`,
  `Noble Thermador Service: ${BRAND.years} years of certified repair for the region's most invested kitchens. Who we are and how we work.`,
  'about.html')
+ nav('About Noble')
+ `
<section class="tile tile-white">
  <p class="eyebrow muted">About</p>
  <h1>Depth over breadth,<br>for ${BRAND.years} years.</h1>
  <p class="lead muted">Spark circuits, sealed refrigeration, convection cavities, control electronics. One category of machine, studied until it stopped keeping secrets.</p>
  ${mediaImg('thermador-new-walloven-10', 'Thermador wall ovens centered in an oak cabinet wall', 'city-hero', ' loading="lazy"')}
</section>

<section class="tile tile-parchment">
  <h2>The reason Noble exists.</h2>
  <div class="prose">
    <p>A Thermador range is not really purchased as an appliance. It is purchased as the heart of a room, and the room is usually designed around it. The refrigeration columns disappear into walls the architect drew with them already in mind. Equipment woven that deeply into a home deserves service with the same seriousness, and mostly it was not getting any.</p>
    <p>That gap started this company. The kitchens with the most invested in them were being serviced by generalists juggling forty brands, dispatchers sending whoever was closest, and repairs that quietly expired within the year. We chose the opposite structure on purpose. A narrow specialty, genuine mastery of it, and every kitchen treated as the custom installation it actually is.</p>
    <p>Today the routes stretch from Santa Barbara to Newport Coast, and the growth has come almost entirely by referral. A house manager mentions us to another. A designer writes our number inside a cabinet door. Keeping that reputation is unglamorous work. Returning calls when promised, explaining repairs without jargon, and flagging a weakening part before it strands a dinner party. We consider the reviews a side effect. The habits are the product.</p>
  </div>
</section>

<section class="tile tile-navy">
  <h2>The shape of the operation.</h2>
  <div class="metric-grid">
    <div class="metric"><div class="value">${BRAND.years}<span style="font-size:22px">yrs</span></div><div class="label">at factory certification level</div></div>
    <div class="metric"><div class="value">1</div><div class="label">specialty, held deliberately</div></div>
    <div class="metric"><div class="value">${BRAND.warrantyYears}<span style="font-size:22px">yr</span></div><div class="label">written guarantee on repairs</div></div>
    <div class="metric"><div class="value">7<span style="font-size:22px">days</span></div><div class="label">weekly, 7am to 7pm</div></div>
    <div class="metric"><div class="value">${CITIES.length}</div><div class="label">communities in rotation</div></div>
    <div class="metric"><div class="value">0</div><div class="label">subcontractors on the payroll</div></div>
  </div>
</section>

${pillarsTile('tile-white')}

<section class="tile tile-parchment">
  <h2>Who rings the doorbell.</h2>
  <div class="card-grid">
    <div class="utility-card">
      <div class="card-ph">Technician portrait (media coming)</div>
      <h3>Our people, on our payroll</h3>
      <p>Every tech is a direct Noble employee. Uniformed, background checked, and certified on the current Thermador platforms.</p>
    </div>
    <div class="utility-card">
      <div class="card-ph">Training photo (media coming)</div>
      <h3>Training that never ends</h3>
      <p>New platforms arrive and the certifications follow. Star Burner systems, Freedom refrigeration, steam ovens, and the electronics behind them all.</p>
    </div>
    <div class="utility-card">
      <div class="card-ph">Service truck photo (media coming)</div>
      <h3>Inventory that travels</h3>
      <p>The parts that fail most live permanently on every truck. It is the unglamorous secret behind our one visit repairs.</p>
    </div>
  </div>
</section>
`
+ ctaTile('Judge us by one visit.', `About an hour into the first appointment, the reputation starts making sense. ${BRAND.hours}.`)
+ footer());

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
page('contact.html', head(
  `Contact Noble | phone, email, hours | ${BRAND.name}`,
  `Reach Noble Thermador Service at ${BRAND.phone} or ${BRAND.email}. ${BRAND.hours}. Greater Los Angeles, Newport Beach, and Santa Barbara.`,
  'contact.html')
+ nav('Contact')
+ `
<section class="tile tile-hero">
  ${heroVideo('contact')}
  <div class="hero-content">
    <p class="eyebrow">Contact</p>
    <h1>Talk to a person.</h1>
    <p class="lead muted">The phone is answered by someone who understands these machines, not a menu with hold music.</p>
    <div class="ctas">
      <a class="btn btn-primary btn-hero" href="tel:${BRAND.tel}">Call ${BRAND.phone}</a>
    </div>
  </div>
</section>

<section class="tile tile-parchment">
  <div class="card-grid">
    <div class="utility-card">
      <h3>Concierge line</h3>
      <p><a href="tel:${BRAND.tel}">${BRAND.phone}</a><br>${BRAND.hours}.<br>Failing refrigeration and live leaks jump the line.</p>
    </div>
    <div class="utility-card">
      <h3>Email</h3>
      <p><a href="mailto:${BRAND.email}">${BRAND.email}</a><br>Include the model plate and a photo of the trouble and the tech arrives already briefed.</p>
    </div>
    <div class="utility-card">
      <h3>Service area</h3>
      <p>Greater Los Angeles end to end, the beach cities to the foothills, with dedicated days for Newport Beach and Santa Barbara. <a href="cities.html">All cities</a>.</p>
    </div>
  </div>
</section>

<section class="tile tile-white">
  <h2>Portfolio and estate accounts.</h2>
  <div class="prose">
    <p>Standing accounts carry documented histories for every appliance, insurance certificates on demand, gate clearances that persist between visits, and consolidated invoicing across properties. Email <a href="mailto:${BRAND.email}">${BRAND.email}</a>, mention the word portfolio, and yours gets built correctly from day one.</p>
  </div>
</section>
`
+ ctaTile('Start with one call.', `${BRAND.phone}. A person answers, and you hang up holding a confirmed appointment.`)
+ footer());

// ---------------------------------------------------------------------------
// Book — booking removed; old URL forwards to contact.
// ---------------------------------------------------------------------------
page('book.html', `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=contact.html"><link rel="canonical" href="${BRAND.domain}/contact"><title>Contact | ${BRAND.name}</title></head>
<body><p>Moved: <a href="contact.html">Contact Noble</a> or call ${BRAND.phone}.</p></body></html>
`);

// ---------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------
const urls = ['', 'about', 'cities', 'cities-we-serve', 'problems', 'contact',
  ...PROBLEMS.map(p => p.slug),
  ...CITIES.map(c => `thermador-repair-${c.slug}`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${BRAND.domain}/${u}</loc></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${BRAND.domain}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages + sitemap.xml + robots.txt into ${OUT}`);
