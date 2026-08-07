// Noble Thermador Service — site content data.
// All copy is original. Phone, email, and claims are brand-wide constants.
// Copy rule: no dashes or hyphens in visible text. Thermador needs none.
// Copy is deliberately worded apart from the Noble Sub-Zero, Noble Viking,
// and Noble Appliance sites to avoid duplicate content across the domains.
// Same concepts, unique sentences. Verify with a shingle scan after edits.
//
// PHONE IS A PLACEHOLDER — swap BRAND.phone/tel here and the literal in
// tools/check.mjs when the real tracking number arrives.

export const BRAND = {
  name: 'Noble Thermador Service',
  navName: 'Noble Thermador Appliance Service',
  short: 'Noble',
  phone: '(747) 444-0000',
  tel: '+17474440000',
  email: 'contact@noblethermadorservice.com',
  domain: 'https://noblethermadorservice.com',
  hours: 'Open daily, 7am to 7pm',
  base: 'Los Angeles, CA',
  diagnostic: '$89',
  warrantyYears: '3',
  years: '27',
};

// ---------------------------------------------------------------------------
// Cities. slug => page thermador-repair-<slug>.html
// intro: unique opening line(s) for the city page. hoods: local areas served.
// ---------------------------------------------------------------------------
export const REGIONS = [
  'Westside',
  'Hollywood & Central LA',
  'South Bay',
  'San Fernando Valley',
  'Pasadena & the Foothills',
  'Conejo Valley & Ventura County',
  'Malibu & the Canyons',
  'Beyond Los Angeles',
];

export const CITIES = [
  {
    slug: 'bel-air', name: 'Bel Air', region: 'Westside',
    hoods: ['East Gate', 'West Gate', 'Stone Canyon', 'Bel Air Crest', 'Moraga Drive'],
    nearby: ['beverly-hills', 'holmby-hills', 'brentwood'],
    intro: 'Behind the gates of Bel Air, the kitchen is usually the most engineered room in the house. Freedom columns hidden in millwork, a 60 inch Pro Grand anchoring the island. Machines at that level deserve technicians at that level, and that is the whole reason Noble exists.',
  },
  {
    slug: 'beverly-hills', name: 'Beverly Hills', region: 'Westside',
    hoods: ['The Flats', 'Trousdale Estates', 'Benedict Canyon', 'The Golden Triangle', 'Beverly Hills Post Office'],
    nearby: ['bel-air', 'century-city', 'holmby-hills'],
    intro: 'A Beverly Hills kitchen is judged by how effortlessly it performs, not by how new it is. We keep the Thermador side of that performance invisible. The burner lights, the columns hold their number, and no one thinks about either, which is the goal.',
  },
  {
    slug: 'brentwood', name: 'Brentwood', region: 'Westside',
    hoods: ['Brentwood Park', 'Mandeville Canyon', 'Crestwood Hills', 'Kenter Canyon', 'Brentwood Glen'],
    nearby: ['pacific-palisades', 'santa-monica', 'bel-air'],
    intro: 'Brentwood hosts more dinners per square mile than almost anywhere in the city, and hosting runs on working equipment. Our Westside route passes through Mandeville and Kenter several times a week, trucks stocked with the igniters, sensors, and valves these kitchens actually consume.',
  },
  {
    slug: 'century-city', name: 'Century City', region: 'Westside',
    hoods: ['Century Towers', 'Le Parc', 'Century Hill', 'The Century'],
    nearby: ['beverly-hills', 'westchester', 'culver-city'],
    intro: 'High rise service is its own discipline. Loading docks, elevator reservations, building engineers, quiet hours. We handle the logistics before the visit, so a Century City repair feels as simple as one at a house with a driveway.',
  },
  {
    slug: 'culver-city', name: 'Culver City', region: 'Westside',
    hoods: ['Culver Crest', 'Carlson Park', 'Sunkist Park', 'Blair Hills', 'Fox Hills'],
    nearby: ['playa-vista', 'westchester', 'marina-del-rey'],
    intro: 'Culver City remodels put serious cooking equipment into houses of every age, and the equipment outlives the trends around it. Whatever generation of Thermador lives in your kitchen, from early Professional models to the current Star Burner platforms, it is inside our certification.',
  },
  {
    slug: 'hollywood', name: 'Hollywood', region: 'Hollywood & Central LA',
    hoods: ['Hollywood Hills', 'Outpost Estates', 'Whitley Heights', 'Sunset Square', 'Beachwood Canyon'],
    nearby: ['los-feliz', 'hancock-park', 'studio-city'],
    intro: 'The hills above Hollywood punish sloppy service companies. No parking, tight switchbacks, kitchens cantilevered over air. We schedule those visits deliberately, bring everything up in one carry, and treat the house as carefully as the machine.',
  },
  {
    slug: 'los-feliz', name: 'Los Feliz', region: 'Hollywood & Central LA',
    hoods: ['The Oaks', 'Laughlin Park', 'Franklin Hills', 'Los Feliz Estates'],
    nearby: ['hollywood', 'glendale', 'hancock-park'],
    intro: 'In Los Feliz the cabinetry is often older than the technician, and the appliance behind it is panel matched to wood nobody can source anymore. Extracting a column from that setting without a mark is careful work. It is also our normal Tuesday.',
  },
  {
    slug: 'malibu', name: 'Malibu', region: 'Malibu & the Canyons',
    hoods: ['Point Dume', 'Malibu Colony', 'Carbon Beach', 'Broad Beach', 'Serra Retreat', 'Paradise Cove'],
    nearby: ['pacific-palisades', 'topanga', 'calabasas'],
    intro: 'Salt air is patient. It works on igniter contacts, condenser fins, and door hinges all year until something gives. Malibu sits on a standing weekly route for exactly that reason, and coastal corrosion checks come standard with every visit we make out here.',
  },
  {
    slug: 'marina-del-rey', name: 'Marina del Rey', region: 'Westside',
    hoods: ['Silver Strand', 'Marina Peninsula', 'Via Marina', 'Mariners Village'],
    nearby: ['playa-del-rey', 'culver-city', 'westchester'],
    intro: 'Between the marine layer and the tower living, Marina del Rey appliances age on their own schedule. We know the buildings, the parking decks, and the way sea air treats a condenser coil, and we plan the work around all three.',
  },
  {
    slug: 'pacific-palisades', name: 'Pacific Palisades', region: 'Westside',
    hoods: ['The Riviera', 'Huntington Palisades', 'Rustic Canyon', 'Castellammare', 'The Highlands'],
    nearby: ['brentwood', 'santa-monica', 'malibu'],
    intro: 'Family life in the Palisades moves through the kitchen from breakfast to homework to dinner, and it does not pause for a broken oven. We hold weekly capacity for the 90272, and a refrigerator losing its cold gets bumped to the top of it.',
  },
  {
    slug: 'playa-del-rey', name: 'Playa del Rey', region: 'Westside',
    hoods: ['The Bluffs', 'Del Rey Lagoon', 'The Jungle'],
    nearby: ['playa-vista', 'westchester', 'marina-del-rey'],
    intro: 'Playa del Rey is compact enough that some companies skip it between bigger stops. We treat it as a full stop. Certified Thermador work, stocked truck, and no small town penalty on the calendar.',
  },
  {
    slug: 'playa-vista', name: 'Playa Vista', region: 'Westside',
    hoods: ['Concert Park', 'The Runway district', 'Crescent Park'],
    nearby: ['playa-del-rey', 'culver-city', 'westchester'],
    intro: 'Playa Vista kitchens are young, but builder warranties end and induction boards, ice systems, and door seals do not read the calendar. When the first real repair arrives, most of the neighborhood has already learned which number to call.',
  },
  {
    slug: 'santa-monica', name: 'Santa Monica', region: 'Westside',
    hoods: ['North of Montana', 'Santa Monica Canyon', 'Ocean Park', 'Sunset Park', 'Wilshire Montana'],
    nearby: ['pacific-palisades', 'brentwood', 'marina-del-rey'],
    intro: 'Santa Monica has no patience for vague arrival windows or half finished jobs, and neither do we. The appointment lands when promised, the repair finishes properly, and the kitchen is cleaner at the end than the start.',
  },
  {
    slug: 'westchester', name: 'Westchester', region: 'Westside',
    hoods: ['Kentwood', 'Loyola Village', 'Westport Heights', 'Osage'],
    nearby: ['playa-del-rey', 'el-segundo', 'culver-city'],
    intro: 'Westchester sits where two of our daily routes cross, which quietly works in its favor. Kentwood and Loyola Village get first pick of appointment windows, and parts rarely have to wait for a second trip.',
  },
  {
    slug: 'el-segundo', name: 'El Segundo', region: 'South Bay',
    hoods: ['Smoky Hollow', 'Downtown El Segundo', 'The east side'],
    nearby: ['manhattan-beach', 'westchester', 'hermosa-beach'],
    intro: 'El Segundo runs on routine, and a cooktop that will not light breaks the whole morning. We put it back. Precise diagnosis, genuine Thermador parts, and a written promise that the fix will hold for years.',
  },
  {
    slug: 'hermosa-beach', name: 'Hermosa Beach', region: 'South Bay',
    hoods: ['The Strand', 'The Sand Section', 'The Hill Section', 'East Hermosa'],
    nearby: ['manhattan-beach', 'redondo-beach', 'el-segundo'],
    intro: 'Hermosa kitchens are packed tight by design, with appliances measured to the walls around them. Sliding a built in unit out of that geometry, servicing it, and returning it flush takes practice these blocks have given us plenty of.',
  },
  {
    slug: 'manhattan-beach', name: 'Manhattan Beach', region: 'South Bay',
    hoods: ['The Strand', 'The Sand Section', 'The Tree Section', 'The Hill Section', 'East Manhattan'],
    nearby: ['hermosa-beach', 'el-segundo', 'redondo-beach'],
    intro: 'Walk the Tree Section on a Sunday and you can smell how seriously Manhattan Beach cooks. Ranges and steam ovens out here earn their keep, and equipment that works that hard needs a service company that keeps pace with it.',
  },
  {
    slug: 'palos-verdes', name: 'Palos Verdes', region: 'South Bay',
    hoods: ['Palos Verdes Estates', 'Rancho Palos Verdes', 'Rolling Hills', 'Rolling Hills Estates', 'Lunada Bay'],
    nearby: ['redondo-beach', 'hermosa-beach', 'manhattan-beach'],
    intro: 'The Hill has a way of thinning out service coverage. Ours holds all the way up. Palos Verdes Estates through Rolling Hills ride a scheduled route with fully stocked trucks and no added mileage charge, ever.',
  },
  {
    slug: 'redondo-beach', name: 'Redondo Beach', region: 'South Bay',
    hoods: ['The Esplanade', 'Hollywood Riviera', 'North Redondo', 'South Redondo'],
    nearby: ['hermosa-beach', 'palos-verdes', 'manhattan-beach'],
    intro: 'Redondo shares the coast, so it shares the coast problem. Air that never stops carrying salt inland. Our advice here never changes. Put refrigeration maintenance on a calendar, and let us keep the coil ahead of the corrosion.',
  },
  {
    slug: 'encino', name: 'Encino', region: 'San Fernando Valley',
    hoods: ['Amestoy Estates', 'Encino Hills', 'Rancho Estates', 'South of the Boulevard'],
    nearby: ['sherman-oaks', 'tarzana', 'studio-city'],
    intro: 'Encino kitchens are built at estate scale. Twin wall ovens, a rangetop with six Star Burners, refrigeration in the plural. We certify across that whole lineup, and when Valley heat arrives a struggling refrigerator here gets emergency treatment.',
  },
  {
    slug: 'granada-hills', name: 'Granada Hills', region: 'San Fernando Valley',
    hoods: ['Knollwood', 'O’Melveny', 'The Balboa corridor'],
    nearby: ['porter-ranch', 'chatsworth', 'sherman-oaks'],
    intro: 'When Granada Hills crosses 100 degrees, refrigeration failures stop being inconvenient and start being urgent. Through every heat wave, warm units in the north Valley hold first claim on our schedule board.',
  },
  {
    slug: 'porter-ranch', name: 'Porter Ranch', region: 'San Fernando Valley',
    hoods: ['The Vineyards', 'Renaissance', 'Westcliffe', 'Porter Ranch Estates'],
    nearby: ['granada-hills', 'chatsworth', 'woodland-hills'],
    intro: 'Porter Ranch builds run heavy on integrated appliances, where the refrigerator wears the same face as the pantry. Servicing those means respecting cabinetry that was cut exactly once. We open it, fix the machine, and close it like we were never there.',
  },
  {
    slug: 'sherman-oaks', name: 'Sherman Oaks', region: 'San Fernando Valley',
    hoods: ['Longridge Estates', 'Royal Woods', 'Chandler Estates', 'South of Ventura'],
    nearby: ['studio-city', 'encino', 'toluca-lake'],
    intro: 'A Sherman Oaks kitchen feeds carpools, houseguests, and holidays without a break in the schedule. Our job is making sure the equipment underneath keeps up, with appointment windows tight enough to plan a real day around.',
  },
  {
    slug: 'studio-city', name: 'Studio City', region: 'San Fernando Valley',
    hoods: ['Colfax Meadows', 'Longridge', 'Fryman Canyon', 'The Silver Triangle'],
    nearby: ['sherman-oaks', 'toluca-lake', 'hollywood'],
    intro: 'Studio City lives on call sheets and early departures, so we run it like a set. Confirmed windows, a heads up call from the tech before arrival, and repairs wrapped before the driveway fills up again.',
  },
  {
    slug: 'tarzana', name: 'Tarzana', region: 'San Fernando Valley',
    hoods: ['Braemar', 'Mulholland Park', 'Melody Acres', 'The Tarzana hills'],
    nearby: ['encino', 'woodland-hills', 'calabasas'],
    intro: 'South of the Boulevard, Tarzana values room to breathe and nobody in its business. We arrive quietly, work thoroughly, and leave behind nothing except an appliance returned to spec and a guarantee that runs three years.',
  },
  {
    slug: 'woodland-hills', name: 'Woodland Hills', region: 'San Fernando Valley',
    hoods: ['Walnut Acres', 'Vista de Oro', 'Warner Center', 'South of the Boulevard'],
    nearby: ['tarzana', 'calabasas', 'porter-ranch'],
    intro: 'Woodland Hills summers are a stress test no appliance lab quite reproduces. Compressors out here carry a heavier load than anywhere on our map, so a refrigerator faltering in July gets scheduled with real urgency and checked with extra care.',
  },
  {
    slug: 'chatsworth', name: 'Chatsworth', region: 'San Fernando Valley',
    hoods: ['Monteria Estates', 'Indian Springs', 'Stoney Point', 'Chatsworth Lake Manor'],
    nearby: ['porter-ranch', 'granada-hills', 'woodland-hills'],
    intro: 'Distance from the showroom district has never meant much to us. Chatsworth ranch properties and gated estates sit on our northwest rotation every week, with the same parts inventory rolling up the driveway.',
  },
  {
    slug: 'altadena', name: 'Altadena', region: 'Pasadena & the Foothills',
    hoods: ['Christmas Tree Lane', 'The Meadows', 'Janes Village', 'President streets'],
    nearby: ['pasadena', 'la-canada-flintridge', 'sierra-madre'],
    intro: 'Altadena was built by people who expected their work to outlive them, and the town still measures craftsmanship that way. Our repairs aim at the same standard. Diagnosed honestly, fixed completely, built to stay fixed.',
  },
  {
    slug: 'glendale', name: 'Glendale', region: 'Pasadena & the Foothills',
    hoods: ['Rossmoyne', 'Verdugo Woodlands', 'Oakmont', 'Chevy Chase Canyon', 'Adams Hill'],
    nearby: ['la-canada-flintridge', 'pasadena', 'los-feliz'],
    intro: 'From Rossmoyne up through the canyon neighborhoods, Glendale households hand us both sides of the kitchen. The cold half and the hot half, refrigeration and cooking, one company accountable for the pair.',
  },
  {
    slug: 'la-canada-flintridge', name: 'La Cañada Flintridge', region: 'Pasadena & the Foothills',
    hoods: ['Flintridge', 'Alta Canyada', 'The Sagebrush district'],
    nearby: ['pasadena', 'glendale', 'altadena'],
    intro: 'A La Cañada household schedule is a machine of its own, and the kitchen is its engine room. Our foothill route reserves time here every week, so the engine room never sits broken for long.',
  },
  {
    slug: 'pasadena', name: 'Pasadena', region: 'Pasadena & the Foothills',
    hoods: ['Oak Knoll', 'Linda Vista', 'San Rafael', 'Madison Heights', 'Bungalow Heaven'],
    nearby: ['san-marino', 'altadena', 'sierra-madre'],
    intro: 'Pasadena kitchens span a century of architecture, and the appliances inside span every Thermador era with them. New build on Linda Vista or a craftsman remodel in Bungalow Heaven, the service standard walking through the door is identical.',
  },
  {
    slug: 'san-marino', name: 'San Marino', region: 'Pasadena & the Foothills',
    hoods: ['The Huntington district', 'Lacy Park', 'The Mission district'],
    nearby: ['pasadena', 'sierra-madre', 'altadena'],
    intro: 'San Marino keeps records, keeps standards, and keeps the same service people for decades once they prove out. We come prepared for that audition every time. Documented work, protected floors, and part numbers in writing.',
  },
  {
    slug: 'sierra-madre', name: 'Sierra Madre', region: 'Pasadena & the Foothills',
    hoods: ['The Canyon', 'The Village', 'Upper Sierra Madre'],
    nearby: ['pasadena', 'altadena', 'san-marino'],
    intro: 'Sierra Madre likes its trucks unmarked and its mornings undisturbed. Fine by us. The visit is brief, the repair is complete, and the loudest thing about it is the burner lighting on the first click again.',
  },
  {
    slug: 'agoura-hills', name: 'Agoura Hills', region: 'Conejo Valley & Ventura County',
    hoods: ['Old Agoura', 'Morrison Ranch', 'Lake Lindero', 'Liberty Canyon'],
    nearby: ['calabasas', 'westlake-village', 'thousand-oaks'],
    intro: 'Plenty of service maps fade to white past Calabasas. Ours keeps going. Agoura Hills belongs to a dedicated Conejo route that runs on schedule whether one house calls or ten.',
  },
  {
    slug: 'calabasas', name: 'Calabasas', region: 'Conejo Valley & Ventura County',
    hoods: ['The Oaks', 'Calabasas Park', 'Mont Calabasas', 'Mulholland Heights', 'Park Moderne'],
    nearby: ['hidden-hills', 'woodland-hills', 'agoura-hills'],
    intro: 'In Calabasas the kitchen is part of the presentation, and presentation does not allow for a dead burner or a sweating column door. We keep the machinery matching the room. Flawless, quietly, on schedule.',
  },
  {
    slug: 'hidden-hills', name: 'Hidden Hills', region: 'Conejo Valley & Ventura County',
    hoods: ['Round Meadow', 'Long Valley', 'Spring Valley'],
    nearby: ['calabasas', 'woodland-hills', 'agoura-hills'],
    intro: 'Everything in Hidden Hills happens behind the gate, and service that works here has to respect that completely. Cleared techs, coordination with house staff, and not a word about whose kitchen we were in.',
  },
  {
    slug: 'moorpark', name: 'Moorpark', region: 'Conejo Valley & Ventura County',
    hoods: ['Moorpark Highlands', 'Campus Park', 'Mountain Meadows', 'Serenata'],
    nearby: ['simi-valley', 'thousand-oaks', 'westlake-village'],
    intro: 'Moorpark used to import its appliance expertise from over the grade, one long appointment at a time. Now the expertise commutes instead. Same certified techs, same stocked trucks, same three year promise, delivered locally.',
  },
  {
    slug: 'simi-valley', name: 'Simi Valley', region: 'Conejo Valley & Ventura County',
    hoods: ['Wood Ranch', 'Bridle Path', 'Big Sky', 'Indian Hills'],
    nearby: ['moorpark', 'thousand-oaks', 'chatsworth'],
    intro: 'Simi Valley sits comfortably inside our coverage, not at the edge of it. Cooking repairs, refrigeration repairs, and preventive care from Wood Ranch to Big Sky, handled on a regular rotation.',
  },
  {
    slug: 'thousand-oaks', name: 'Thousand Oaks', region: 'Conejo Valley & Ventura County',
    hoods: ['North Ranch', 'Lynn Ranch', 'Conejo Oaks', 'Lake Sherwood'],
    nearby: ['westlake-village', 'agoura-hills', 'moorpark'],
    intro: 'A North Ranch kitchen often carries five or six serious appliances, and problems rarely travel alone. Where parts allow, we consolidate. One visit, the full suite inspected, everything left running to spec.',
  },
  {
    slug: 'westlake-village', name: 'Westlake Village', region: 'Conejo Valley & Ventura County',
    hoods: ['Westlake Island', 'First Neighborhood', 'Three Springs', 'North Ranch borders'],
    nearby: ['thousand-oaks', 'agoura-hills', 'calabasas'],
    intro: 'Westlake Village entertains constantly, and entertaining forgives nothing in the kitchen. Before the season of long tables arrives, our maintenance visits make sure the cold holds and every flame behaves.',
  },
  {
    slug: 'topanga', name: 'Topanga', region: 'Malibu & the Canyons',
    hoods: ['Fernwood', 'Old Canyon', 'Viewridge', 'Top of Topanga'],
    nearby: ['malibu', 'pacific-palisades', 'calabasas'],
    intro: 'The boulevard through Topanga discourages casual service calls, which suits us fine. We are not casual about it. Canyon addresses get scheduled visits, full trucks, and the same standard we bring to any address in the flats.',
  },
  {
    slug: 'holmby-hills', name: 'Holmby Hills', region: 'Westside',
    hoods: ['The Mapleton corridor', 'Holmby Park', 'Comstock Hills'],
    nearby: ['bel-air', 'beverly-hills', 'century-city'],
    intro: 'Holmby Hills estates operate through house managers, and so do we when asked. Scheduling, access, invoicing, and reporting all flow through your structure, while the kitchen quietly returns to perfect working order.',
  },
  {
    slug: 'hancock-park', name: 'Hancock Park', region: 'Hollywood & Central LA',
    hoods: ['Windsor Square', 'Fremont Place', 'Larchmont', 'Brookside'],
    nearby: ['hollywood', 'los-feliz', 'beverly-hills'],
    intro: 'Hancock Park pairs prewar architecture with thoroughly modern equipment, and both deserve respect. We bring the machine back to factory behavior while handling the surrounding woodwork like the irreplaceable thing it is.',
  },
  {
    slug: 'toluca-lake', name: 'Toluca Lake', region: 'San Fernando Valley',
    hoods: ['The Lake district', 'Toluca Woods', 'West Toluca'],
    nearby: ['studio-city', 'sherman-oaks', 'hollywood'],
    intro: 'Toluca Lake still trades in personal recommendations, and that is how most of our calls here begin. Someone across the street had their oven fixed properly, and now we are meeting you. We intend to keep the chain going.',
  },
  {
    slug: 'newport-beach', name: 'Newport Beach', region: 'Beyond Los Angeles',
    hoods: ['Newport Coast', 'Corona del Mar', 'Balboa Island', 'Lido Isle', 'Crystal Cove'],
    nearby: ['palos-verdes', 'manhattan-beach', 'beverly-hills'],
    intro: 'Newport Beach earned its own days on our calendar the honest way, by asking for them repeatedly. Crystal Cove to Lido Isle now gets the same certified crew and the same truck inventory our Los Angeles routes carry.',
  },
  {
    slug: 'santa-barbara', name: 'Santa Barbara', region: 'Beyond Los Angeles',
    hoods: ['Montecito', 'Hope Ranch', 'The Riviera', 'The Upper East', 'Mission Canyon'],
    nearby: ['malibu', 'westlake-village', 'thousand-oaks'],
    intro: 'Santa Barbara households plan appliance care the way they plan the garden, seasonally and without drama. Our dedicated days up the coast serve Montecito and Hope Ranch on that rhythm, with emergencies folded in when the cold fails.',
  },
];

// ---------------------------------------------------------------------------
// Problem pages. slug => <slug>.html
// side: 'cooking' (red accent) | 'cooling' (blue accent)
// ---------------------------------------------------------------------------
export const PROBLEMS = [
  {
    slug: 'thermador-oven-not-heating',
    side: 'cooking',
    title: 'Thermador oven not heating',
    nav: 'Oven not heating',
    tagline: 'A cold oven, a slow oven, or an oven that gives up halfway. Each one traces to a part we can name.',
    what: [
      'A Thermador oven that will not make heat is rarely a dead machine. In gas models the story usually starts at the igniter, which weakens with age until it can no longer prove itself to the safety valve, so the valve holds the gas back and nothing happens. In electric and steam models the trail leads through elements, thermal sensors, and the relays that feed them.',
      'The wrong response is swapping parts on a hunch. The right one is measurement. We put a meter on the circuit, watch what the control board actually commands, confirm which component dropped out of spec, and replace that one with a genuine Thermador part. The oven then gets verified at temperature before we consider it finished.',
    ],
    causes: [
      ['Aging igniter', 'The glow looks healthy while the current draw quietly falls below the threshold the gas valve demands. First place we test on any gas oven, and the most frequent finding.'],
      ['Element burnout', 'Bake and broil elements in electric and dual fuel models fail with visible blisters or a clean break. Straightforward to confirm and replace.'],
      ['Sensor out of spec', 'A drifting thermal sensor feeds the board bad numbers, and the board obediently cooks wrong. We test resistance against the factory table.'],
      ['Relay or board fault', 'The control asks for heat and the power never leaves the board. Circuit tracing tells us whether the board or its relay is the liar.'],
      ['Gas valve failure', 'Rarer than its reputation. We only replace a valve after the igniter has proven itself in front of us.'],
      ['Compromised door seal', 'Heat leaves as fast as the oven makes it. Endless preheats with weak browning point here before anything electrical.'],
    ],
    faqs: [
      ['It glows inside but never lights. Broken?', 'That glow is an igniter running below strength, the single most common call we take on gas ovens. The part rides on our trucks and the swap is routine.'],
      ['Can I keep using the range top while the oven is down?', 'Usually yes, the systems are separate. If you smell gas anywhere, stop, ventilate, and call. Otherwise the cooktop can work while the oven waits its turn.'],
      ['Will this be a one visit repair?', 'Most of the time. The frequently failing igniters, elements, and sensors already live on the truck, so the majority of heat complaints end the day we arrive.'],
    ],
  },
  {
    slug: 'thermador-oven-uneven-baking',
    side: 'cooking',
    title: 'Thermador oven baking unevenly',
    nav: 'Uneven baking',
    tagline: 'Burnt edges, pale centers, or one rack racing the other. The cavity is out of balance and we can prove where.',
    what: [
      'Even baking is airflow plus honest temperature plus a sealed cavity. Lose any leg and results wander. In Thermador convection ovens the usual suspects are a fan losing speed under heat, an element cooking along just a portion of its coil, a sensor whose numbers drifted, or a gasket seating unevenly around the door.',
      'We do not guess from a photo of your cookies. We instrument the cavity, log temperatures at several points through a full cycle, watch fan behavior hot, and check the door seal all the way around. Whatever failed gets replaced with factory parts, and calibration gets confirmed against measurement before the job closes.',
    ],
    causes: [
      ['Convection fan losing speed', 'Bearings drag once the fan warms up, circulation collapses, and the cavity splits into hot and cool zones.'],
      ['Element with a dead section', 'Part of the element still glows, so it passes a glance test while robbing one side of the oven of heat.'],
      ['Thermal drift', 'The displayed temperature and the true temperature part ways slowly enough that your recipes take the blame for months.'],
      ['Uneven gasket contact', 'One soft corner in the seal leaks continuously, and everything baked near it shows the difference.'],
    ],
    faqs: [
      ['I already rotate every tray. Is that the fix?', 'Rotation is a workaround, not a repair. A healthy convection oven bakes evenly without your help, and yours did once. It can again.'],
      ['How exact should oven temperature be?', 'Well within ten degrees of the setting through the whole cycle. More swing than that changes results, and our instruments will show it plainly.'],
      ['Do you verify the fix or just install parts?', 'Every uneven baking job ends with a measured heat map of the cavity. The oven earns its way off our list, we do not just assume.'],
    ],
  },
  {
    slug: 'thermador-star-burner-clicking',
    side: 'cooking',
    title: 'Thermador Star Burner clicking',
    nav: 'Burner clicking',
    tagline: 'Endless sparking, no flame, or clicking that continues with the flame lit. All three have known causes.',
    what: [
      'The click you hear is the spark system trying to light gas that is not arriving, or firing long after its job is done. On Thermador cooktops and rangetops the usual chain involves moisture from cleaning or a boil over sitting in the spark switches, a fouled or cracked igniter electrode at the burner, a spark module aging out, or a Star Burner cap sitting a few degrees off its seat.',
      'Because one module typically serves several burners, one wet switch can set the entire top clicking, which sounds worse than it is. We dry and test the circuit, replace the component that actually failed, reseat and gap every burner, and confirm each one lights on the first spark before packing up.',
    ],
    causes: [
      ['Moisture in the spark circuit', 'Cleaning day and boil overs push water where the spark lives. Some evaporates harmlessly. The rest corrodes switches and keeps the top clicking for weeks.'],
      ['Fouled or cracked electrode', 'A film of grease or a hairline fracture bleeds the spark away before it reaches gas. The burner clicks forever and never catches.'],
      ['Spark module fatigue', 'Weak spark, lazy spark, or spark that will not stop after ignition. The module has one job and it is measurably failing at it.'],
      ['Star Burner cap misalignment', 'The points of the cap have to sit exactly home. A little off and the gas path misses the spark gap entirely.'],
    ],
    faqs: [
      ['The clicking started right after I scrubbed the cooktop.', 'Very common. Let the area dry for a day, run a neighboring burner low to help it along, and if the sound outlives the weekend the moisture found something to damage. Then call us.'],
      ['Is nonstop clicking dangerous?', 'The sound is not. Failed ignition attempts do release small amounts of unburned gas, so a stove that smells like gas gets shut off and aired out before anything else happens.'],
      ['Do you service every Thermador cooktop style?', 'Yes. Star Burner gas tops, rangetops, professional ranges, and induction surfaces, current platforms and the generations before them.'],
    ],
  },
  {
    slug: 'thermador-oven-door-problems',
    side: 'cooking',
    title: 'Thermador oven door and hinge repair',
    nav: 'Door and hinges',
    tagline: 'Sagging, slamming, or sealing badly. A failing door costs heat, energy, and eventually the cabinetry beside it.',
    what: [
      'Thermador oven doors are substantial, and the hinge hardware carrying them wears on a predictable schedule. Early signs are subtle. The door needs a lift to latch, or drops slightly as it opens. Later the gasket stops meeting the frame evenly, heat pours past it, preheats stretch, bakes go uneven, and the cabinet faces nearby run hot.',
      'A proper repair treats the door as a system. Hinges replaced in matched pairs, springs renewed together, the receivers in the frame inspected for wear, the gasket replaced if it has stiffened, and the door aligned until the seal touches evenly on all four sides. Half measures on doors come back, so we do not sell them.',
    ],
    causes: [
      ['Hinge wear', 'The signature failure. The door rides lower every month until the gasket cannot do its work. Pairs only, never singles, so the load carries straight.'],
      ['Spring fatigue', 'A door that falls open or slams shut has lost its counterbalance. Springs stretch long before anything visibly breaks.'],
      ['Stiffened gasket', 'Years of heat cycles harden the seal. Run a hand near the door edge during preheat and a failed gasket announces itself.'],
      ['Worn hinge receivers', 'The sockets in the oven frame slowly egg out under the door weight. New hinges in worn receivers fail young, so we address both.'],
    ],
    faqs: [
      ['The door does not quite close. Still usable?', 'We would wait. The oven runs longer and hotter fighting the leak, components age faster, and the escaping heat works on your cabinets the whole time.'],
      ['Why does the repair include both hinges?', 'A fresh hinge against a tired one carries the door crooked, chews through the new part, and puts you right back here. Matched pairs keep the geometry true.'],
      ['My door glass fogs or stains inside. Related?', 'Often, yes. A leaking seal lets vapor migrate between panes. We can open the door assembly, clean the glass, and cure the leak that let it in.'],
    ],
  },
  {
    slug: 'thermador-refrigerator-not-cooling',
    side: 'cooling',
    title: 'Thermador refrigerator not cooling',
    nav: 'Not cooling',
    tagline: 'Rising temperature is a countdown, not an inconvenience. We schedule it that way.',
    what: [
      'When a Thermador refrigerator loses its cold, one link in the chain has usually let go rather than the whole system. A condenser coil suffocating under dust. An evaporator fan that stopped moving air. A damper stuck shut, a sensor feeding fiction to the control, a compressor down on capacity, or refrigerant escaping through a joint too small to see.',
      'Each cause has a different price, which is exactly why guessing is expensive. Our diagnostic walks the refrigeration circuit in order, verifies the failure with real readings, and puts the result in front of you with one written price. Say yes and the diagnostic fee disappears into the repair.',
    ],
    causes: [
      ['Starved condenser', 'Dust and pet hair blanket the coil until it cannot reject heat. The unit runs constantly, cools poorly, and ages fast. Also the most preventable failure on this list.'],
      ['Evaporator fan down', 'Cold is being made but not delivered. Compartments drift warm while the machine sounds perfectly normal.'],
      ['Damper or airflow fault', 'The path between compartments closes and one side freezes while the other warms. Common in bottom freezer models.'],
      ['Sensor or control error', 'Bad temperature data in, bad decisions out. We read live sensor values against a reference thermometer.'],
      ['Sealed system leak', 'Refrigerant seeps away over weeks and performance fades with it. Gauges settle the question definitively.'],
      ['Compressor decline', 'The heart of the machine loses capacity gradually. We measure before we ever pronounce, because this word should never be used casually.'],
    ],
    faqs: [
      ['How quickly can you get here?', 'Warm refrigerator calls take priority over everything routine, seven days a week. Most of our map sees a tech the same day or the following morning.'],
      ['What should I do before you arrive?', 'Keep the doors closed as much as possible. A loaded refrigerator holds its cold surprisingly long when nobody opens it. Skip the urge to empty it into coolers unless we tell you otherwise.'],
      ['Is a unit this old worth repairing?', 'Built in Thermador refrigeration is designed for decades of service, and a correct repair usually costs a small fraction of replacement. We give you real numbers and an honest read, then the call is yours.'],
    ],
  },
  {
    slug: 'thermador-refrigerator-leaking-water',
    side: 'cooling',
    title: 'Thermador refrigerator leaking water',
    nav: 'Leaking water',
    tagline: 'Water on the floor started somewhere higher. Finding that somewhere is the actual repair.',
    what: [
      'Refrigerator water has a short list of origins. A defrost drain iced over and overflowing on schedule. A water line hardened and split where it flexes. An inlet valve seeping past its seat. A drain pan bumped out of position during floor work. In panel integrated kitchens the water often travels hidden behind toe kicks before it surfaces, so the puddle and the problem can be feet apart.',
      'We trace the water uphill to its true source, repair it with genuine parts, then dry and inspect the cavity around the unit. The last step matters. Hardwood and cabinetry lose quietly against slow water, and a complete repair protects the room as well as the machine.',
    ],
    causes: [
      ['Iced defrost drain', 'The runaway leader. Meltwater refreezes in the drain until each defrost cycle overflows into the compartment or onto the floor.'],
      ['Failing water line', 'Lines to ice makers and dispensers stiffen with years and crack at the flex points. Replacement includes routing it correctly and pressure testing.'],
      ['Seeping inlet valve', 'A valve that no longer seats fully drips around the clock. Small, silent, and destructive on a long timeline.'],
      ['Shifted drain pan', 'After remodels and moves, condensate sometimes lands beside the pan instead of in it. The cheapest fix on this page once found.'],
    ],
    faqs: [
      ['Active leak right now. What do I do?', 'Close the supply valve if it is reachable, lay towels, and tell us the leak is live when you call. Active water moves ahead of routine work in the schedule.'],
      ['Could the leak damage the refrigerator too?', 'Yes. Water finds hinges, base pans, and low voltage connections. A leak fixed this week is a small job. The same leak in three months often is not.'],
      ['Can you write it up for my insurance claim?', 'We document cause, repair, and parts in the service record. Adjusters and flooring contractors use our paperwork regularly.'],
    ],
  },
  {
    slug: 'thermador-ice-maker-repair',
    side: 'cooling',
    title: 'Thermador ice maker repair',
    nav: 'Ice maker',
    tagline: 'No ice, thin ice, strange ice, or a bin frozen into one block. Familiar territory, all of it.',
    what: [
      'Ice systems fail in repeatable ways. A fill valve choked by scale delivers a dribble that freezes inside the fill tube. A harvest motor wears until cubes stop releasing. A level sensor decides an empty bin is full and shuts the whole show down. Water quality sits behind more of these failures than most people expect.',
      'We carry the common valves, modules, and assemblies with us, so the typical ice call ends with production restarted the same visit. While the panels are open we check filtration and mineral buildup too, because the repair lasts longer when the water stops working against it.',
    ],
    causes: [
      ['Scaled fill valve', 'Minerals narrow the opening until the fill becomes a trickle. Hollow cubes and falling output are the classic evidence.'],
      ['Frozen fill tube', 'The weak fill freezes before it lands, ice plugs the tube, and production stops entirely until the blockage is cleared and the cause fixed.'],
      ['Worn harvest mechanism', 'Cycles stall mid release, leaving stubs, crescents, or an empty tray depending on where the motion died.'],
      ['Confused bin sensor', 'The sensor reads full against an empty bin and the machine politely retires. Testing takes minutes.'],
    ],
    faqs: [
      ['Why does the ice taste off?', 'Usually a filter past its service life or a bin that has absorbed odors. We change the filter, sanitize the bin and chute, and check the door seal that let the odor through.'],
      ['How much ice should a healthy system make?', 'Enough to refill its bin roughly every day. A system consistently behind that pace is telling you a valve or sensor is slipping.'],
      ['We just ignore it and buy bags. Bad idea?', 'The ice maker itself is optional. The seeping valve or slow leak behind a dead ice maker is not. Cheap symptom, expensive root. Worth a look.'],
    ],
  },
  {
    slug: 'thermador-freezer-not-freezing',
    side: 'cooling',
    title: 'Thermador freezer not freezing',
    nav: 'Freezer trouble',
    tagline: 'Soft ice cream is the early warning. Thawed food is the deadline. Call during the warning.',
    what: [
      'Freezer failures announce themselves in stages. First the ice cream gives, then frost patterns change, then the temperature display starts arguing with reality. Behind those stages sits a short list. Defrost systems that stopped cycling, evaporator coils buried in frost, a fan that quit, a gasket leaking humid air, or a sealed system slowly losing charge.',
      'Bottom freezer models and freezer columns each fail in their own patterns, and we know both well. The diagnostic measures rather than assumes, the repair uses factory parts, and before we leave, the compartment proves it can hold its number through a full cycle.',
    ],
    causes: [
      ['Defrost failure', 'When the defrost heater or its control quits, frost swallows the evaporator coil and airflow dies with it. The freezer weakens over days, not minutes.'],
      ['Evaporator fan quit', 'No circulation means the cold pools where it forms. Upper baskets warm first while the bottom stays hard.'],
      ['Leaking gasket', 'Humid room air feeds frost buildup and forces long run times. A gasket check takes seconds and explains a surprising number of calls.'],
      ['Charge loss', 'A slow refrigerant leak steals capacity week by week. Gauges confirm it, and sealed system work restores it.'],
      ['Control or sensor fault', 'The machine acts on bad information. We compare its readings to instruments that do not lie.'],
    ],
    faqs: [
      ['The freezer is frosting up like never before. Why?', 'New frost patterns mean new air or new failure. Either humid air is sneaking past a seal, or the defrost cycle stopped doing its rounds. Both are fixable, and sooner is cheaper.'],
      ['How cold should a freezer actually run?', 'Zero degrees Fahrenheit, give or take a couple. Anything drifting above the single digits deserves attention before the food does the complaining.'],
      ['Is my food safe during the wait?', 'A full freezer left closed protects itself for a long time. Keep the door shut, note anything that softens, and mention the timeline when you call so we can slot you correctly.'],
    ],
  },
  {
    slug: 'thermador-column-refrigeration-service',
    side: 'cooling',
    title: 'Thermador column refrigerator and freezer service',
    nav: 'Columns',
    tagline: 'Freedom columns are built into the house itself. Servicing them well is a specialty, and it is ours.',
    what: [
      'Thermador Freedom columns are refrigeration as architecture. Full height refrigerator columns, freezer columns, and panel ready faces that vanish into cabinetry. That integration is the appeal, and it is also why generalist repair falls short here. Reaching the machine without harming the millwork around it is half the job.',
      'We service columns as a dedicated discipline. Panel removal and reinstallation without a blemish, door alignment restored to factory reveal lines, sealed system and airflow work on both refrigerator and freezer columns, and temperature verification zone by zone before the panels go back on. The kitchen looks untouched. The columns simply work again.',
    ],
    causes: [
      ['Temperature drift in one column', 'Each column runs its own system, so one failing while its twin runs perfectly is normal, not strange. We diagnose the sick one and health check its neighbor while we are there.'],
      ['Door alignment and reveal', 'Column doors carry heavy panels, and hinges drift under that load until gaps go uneven and seals suffer. Realignment is precision work worth doing right.'],
      ['Condensation on panels', 'Sweating faces or damp edges mean a seal, heater, or humidity problem asking for attention before the cabinetry pays for it.'],
      ['Ice and frost in the freezer column', 'Defrost faults show up fast in a tall single purpose cavity. Frost patterns tell us where to look first.'],
      ['Noise from the machine compartment', 'Fans and compressors speak up before they fail. New sounds from the top or base of a column deserve a listen from someone who knows the vocabulary.'],
    ],
    faqs: [
      ['Do you remove the custom panels yourselves?', 'Yes, and we put them back exactly as found. Panel handling is part of the service, done with padding and patience, not pried at with a screwdriver.'],
      ['My refrigerator column works but the freezer column died. How?', 'They are independent machines sharing a wall. One failing says nothing about the other, but while we repair the sick one, the healthy one gets a quick inspection on the house.'],
      ['Can you match the door gaps back to original?', 'We align to the factory reveal specification, the same even sightlines the installer chased on day one. It is fussy work and we happen to enjoy it.'],
    ],
  },
  {
    slug: 'thermador-condenser-cleaning',
    side: 'cooling',
    title: 'Thermador condenser cleaning',
    nav: 'Condenser cleaning',
    tagline: 'The least dramatic service we offer, and the one that saves clients the most money over a decade.',
    what: [
      'Refrigeration breathes through its condenser, and the condenser filters the whole kitchen through itself all day, every day. Dust, lint, and pet hair accumulate into insulation exactly where the machine needs to shed heat. Efficiency slides first, then run times stretch, and eventually the compressor spends its life making up for a dirty coil.',
      'Our cleaning is the full procedure, not a vacuum wave. Grilles and access panels off, coil cleaned front and back, fan blades cleaned and spun up under test, temperatures and run behavior verified after reassembly. Done yearly, it is the cheapest life insurance a built in refrigerator can buy.',
    ],
    causes: [
      ['How the coil chokes', 'Air carries the kitchen into the coil, and the coil keeps a little of it forever. Households with pets or open lofts load the coil twice as fast.'],
      ['What it costs to skip', 'Rising electric use, marathon run cycles, weak cooling in heat waves, and compressor failures that arrive years earlier than they should have.'],
      ['What the service returns', 'Factory airflow, shorter cycles, quieter operation, and headroom for the brutal weeks of summer when the machine needs every degree of rejection it can get.'],
    ],
    faqs: [
      ['How often is this actually needed?', 'Once a year for most homes. Twice for shedding pets or heavy cooking households. We can put it on a schedule so nobody has to remember.'],
      ['Can I do it myself with a vacuum?', 'The grille, sure. The coil face, the deep side, and the fan need panels removed and proper tools, and bent fins from enthusiastic brushing are a repair of their own. Let us take it.'],
      ['Does the maintenance plan cover this?', 'It is the centerpiece of the plan, joined by gasket checks, temperature verification, and a cooking side inspection in the same visit.'],
    ],
  },
];

// Cooking problem topics shown on the problems hub that link to detail pages
export const COOKING_HUB = [
  { title: 'Oven not heating', link: 'thermador-oven-not-heating.html', desc: 'Cold cavities, endless preheats, or heat that quits before the food is done.' },
  { title: 'Uneven baking', link: 'thermador-oven-uneven-baking.html', desc: 'Hot corners and pale centers. Airflow, elements, or calibration, and we find which.' },
  { title: 'Burner clicking', link: 'thermador-star-burner-clicking.html', desc: 'Star Burners sparking without a flame, or clicking on long after ignition.' },
  { title: 'Simmer and flame faults', link: null, desc: 'An ExtraLow that dies out, flames that surge tall, or a burner stuck at one output.' },
  { title: 'Door and hinge trouble', link: 'thermador-oven-door-problems.html', desc: 'Doors that drop, drift open, or let the heat escape past a tired gasket.' },
  { title: 'Self clean lockouts', link: null, desc: 'A clean cycle that ends in a sealed door or a blank display. A weekly sight for us.' },
];

export const COOLING_HUB = [
  { title: 'Not cooling', link: 'thermador-refrigerator-not-cooling.html', desc: 'Compartments losing ground, a unit that never stops running, or numbers that no longer match a thermometer.' },
  { title: 'Leaking water', link: 'thermador-refrigerator-leaking-water.html', desc: 'Water showing at the kick plate, pooling under drawers, or tracking out from beneath a built in.' },
  { title: 'Ice maker down', link: 'thermador-ice-maker-repair.html', desc: 'Empty bins, hollow cubes, odd tastes, or a harvest that quits halfway.' },
  { title: 'Freezer trouble', link: 'thermador-freezer-not-freezing.html', desc: 'Soft ice cream, creeping frost, or a compartment that lost its zero.' },
  { title: 'Column care', link: 'thermador-column-refrigeration-service.html', desc: 'Freedom refrigerator and freezer columns, panel work and reveal alignment included.' },
  { title: 'Excess frost', link: null, desc: 'A snowdrift on the back wall or frost reaching new territory. Defrost or air leak, we sort out which.' },
  { title: 'Door seal failure', link: null, desc: 'Sweaty gaskets, doors needing a push, warmth around the edges of the cold.' },
  { title: 'Unusual noise', link: null, desc: 'Buzzing, clicking, grinding. Machinery narrates its problems if someone fluent is listening.' },
];

export const QUICK_LINKS = [
  ['thermador-oven-not-heating.html', 'Oven not heating'],
  ['thermador-star-burner-clicking.html', 'Burner clicking'],
  ['thermador-refrigerator-not-cooling.html', 'Refrigerator not cooling'],
  ['thermador-freezer-not-freezing.html', 'Freezer trouble'],
  ['thermador-column-refrigeration-service.html', 'Column service'],
];

export const PILLARS = [
  ['Certified on Thermador, yearly', 'Training is not a one time event here. Noble techs recertify on current Thermador cooking and refrigeration platforms every single year.'],
  ['Genuine parts only', 'Factory components from authorized sources, with the high turnover parts living on the truck. First visit completions are the direct result.'],
  ['A guarantee measured in years', 'Three years on parts and labor, written down. If our repair does not hold, the next visit costs you nothing.'],
  ['White glove is the default', 'Floor runners, shoe covers, padded protection on panels and counters. We clean up, explain the work, and leave the room better than we found it.'],
  ['The diagnostic pays you back', '$89, quoted upfront, credited in full against any repair you approve. Knowledge should not cost extra.'],
  ['Seven days, twelve hours', 'Every day from 7am to 7pm. Failing refrigeration jumps the queue, because food and time both spoil.'],
];

// Placeholder testimonials written for launch. Replace each entry with real
// customer reviews as they come in — same shape: quote, name, area, service.
export const REVIEWS = [
  { q: 'Our column fridge started climbing on a Friday afternoon. They had a tech out Saturday morning, found a fan motor, and had it holding 38 again before the weekend groceries arrived. Cannot ask for more.', name: 'Marissa T.', area: 'Pacific Palisades', service: 'Column refrigerator' },
  { q: 'Three burners clicking nonstop after a deep clean. He dried the switches, replaced one cracked electrode, and walked me through how to clean around them next time. Charged exactly what was quoted.', name: 'James H.', area: 'Sherman Oaks', service: 'Star Burner repair' },
  { q: 'The wall oven had been baking crooked for a year and I blamed the recipes. Turned out to be the convection fan. Cakes come out level now and I owe several apologies to several cookbooks.', name: 'Elena V.', area: 'San Marino', service: 'Wall oven repair' },
  { q: 'They serviced everything in one morning. Range, both columns, the ice maker. One invoice for the house manager, floors spotless, and a reminder set for the next condenser cleaning. Seamless.', name: 'Michael B.', area: 'Hidden Hills', service: 'Estate account' },
  { q: 'Freezer thawed once already this summer and another company shrugged. Noble found the defrost fault in twenty minutes and showed me the readings that proved it. It has held zero ever since.', name: 'Susan L.', area: 'Encino', service: 'Freezer repair' },
  { q: 'Quiet, punctual, and clearly knew the machine better than the manual does. My range lights instantly on every burner again and the oven holds temperature like it did the year we built the kitchen.', name: 'David R.', area: 'Manhattan Beach', service: 'Thermador range' },
];

export const FAQS_HOME = [
  ['How fast can someone come out?', 'Emergencies like warming refrigeration or active water get same day or next morning attention every day of the week. Routine repairs typically land within a few days of the call.'],
  ['Who does the work?', 'A Noble employee in a Noble uniform. Background checked, factory trained on Thermador equipment, and introduced by name and photo before arrival. We never send strangers from a marketplace.'],
  ['Do you use genuine Thermador parts?', 'Exclusively, through authorized channels. The parts that fail most often already ride the truck, which is why so many repairs finish on the first visit.'],
  ['What does the diagnostic cost?', '$89, stated when you book. Approve the repair and that entire amount comes off the bill. There is no separate service call fee hiding behind it.'],
  ['How long do you stand behind a repair?', 'Three years on both parts and labor, in writing. If our work fails inside that window, the return visit is free. We have not found anyone else offering that.'],
  ['Will my kitchen be protected during the visit?', 'Floor runners, shoe covers, and padding on every surface we touch, on every visit, without being asked. The kitchen should only be able to tell we were there by the fact that everything works.'],
];
