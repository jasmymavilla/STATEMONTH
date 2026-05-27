// ─── CATEGORIES ──────────────────────────────────────────
// Order matters — first match wins
const CATEGORIES = [
  {
    name: 'Housing', emoji: '🏠', icon: 'category-icons/icon-housing.svg',
    keywords: ['rent', 'lease', 'mortgage', 'hoa ', 'landlord', 'property management'],
  },
  {
    name: 'Groceries', emoji: '🛒', icon: 'category-icons/icon-groceries.svg',
    keywords: [
      'grocery', 'whole foods', 'trader joe', 'kroger', 'safeway', 'albertsons',
      'publix', 'wegmans', 'supermarket', 'aldi', 'lidl', 'costco', "sam's club",
      'walmart', 'target', 'heb ', 'food lion', 'stop & shop', 'giant food',
      'meijer', 'sprouts', 'fresh market', 'food 4 less', 'winco', 'market basket',
      'h mart', 'aldi',
    ],
  },
  {
    name: 'Food & Drinks', emoji: '🍔', icon: 'category-icons/icon-dining.svg',
    keywords: [
      'ubereats', 'uber eats', 'doordash', 'grubhub', 'seamless', 'postmates',
      'restaurant', 'cafe', 'coffee', 'starbucks', 'mcdonalds', 'burger',
      'pizza', 'sushi', 'taco', 'chipotle', 'subway', 'door dash',
      'chick-fil', "wendy's", 'popeyes', 'dunkin', 'panera', 'panda express',
      'kfc', 'domino', 'five guys', 'shake shack', 'wingstop', "raising cane",
      'diner', 'grill', 'kitchen', 'bistro', 'bakery', 'deli', 'bbq',
      'steakhouse', 'bar ', 'pub ', 'tavern', 'boba', 'smoothie', 'juice bar',
      'eatery', 'buffet', 'noodle', 'ramen', 'poke', 'toast ', 'brunch',
    ],
  },
  {
    name: 'Transport', emoji: '🚗', icon: 'category-icons/icon-transport.svg',
    keywords: [
      'uber', 'lyft', 'taxi', 'metro', 'transit', 'parking', 'shell', 'bp ',
      'chevron', 'exxon', 'mobil', 'sunoco', 'speedway', "casey's", 'circle k',
      'wawa', 'fuel', 'toll', 'amtrak', 'delta air', 'american air',
      'united air', 'southwest', 'jetblue', 'spirit air', 'frontier air',
      'rental car', 'hertz', 'enterprise rent', 'avis', 'mta ', 'cta ',
      'bart ', 'septa', 'gas station', 'autozone', 'jiffy lube', 'oil change',
      'bus', 'transit',
    ],
  },
  {
    name: 'Entertainment', emoji: '🎬', icon: 'category-icons/icon-entertainment.svg',
    keywords: [
      'netflix', 'hulu', 'spotify', 'apple music', 'disney+', 'hbo', 'amazon prime',
      'paramount+', 'peacock', 'twitch', 'youtube premium', 'movie', 'theater',
      'cinema', 'concert', 'ticketmaster', 'stubhub', 'eventbrite', 'amc ',
      'regal ', 'steam ', 'playstation', 'xbox', 'nintendo', 'epic games',
      'arcade', 'bowling', 'escape room', 'ticket ', 'live nation', 'museum',
      'comedy', 'club ', 'bar tab', 'night club',
    ],
  },
  {
    name: 'Shopping', emoji: '🛍️', icon: 'category-icons/icon-shopping.svg',
    keywords: [
      'amazon', 'ebay', 'etsy', 'nike', 'adidas', 'h&m', 'zara', 'gap ',
      'old navy', 'banana republic', 'forever 21', 'nordstrom', "macy's",
      'hollister', 'tj maxx', 'marshalls', 'ross ', 'home depot', "lowe's",
      'ikea', 'best buy', 'apple store', 'shein', 'asos', 'aeropostale',
      'uniqlo', 'anthropologie', 'urban outfitters', 'free people', 'wayfair',
      'chewy', 'petsmart', 'petco', 'dollar tree', 'five below', 'ulta', 'sephora',

    ],
  },
  {
    name: 'Health', emoji: '💊', icon: 'category-icons/icon-health.svg',
    keywords: [
      'pharmacy', 'cvs', 'walgreens', 'rite aid', 'doctor', 'hospital',
      'clinic', 'dental', 'vision', 'gym', 'fitness', 'planet fitness',
      'anytime fitness', 'la fitness', '24 hour fitness', 'equinox',
      'yoga', 'pilates', 'physical therapy', 'urgent care', 'medical',
      'health', 'wellness', 'vitamin', 'supplement', 'dermatologist',
    ],
  },
  {
    name: 'Utilities', emoji: '💡', icon: 'category-icons/icon-utilities.svg',
    keywords: [
      'electric', 'water bill', 'gas bill', 'internet', 'at&t', 'verizon',
      'comcast', 'xfinity', 't-mobile', 'sprint', 'spectrum', 'cox ',
      'centurylink', 'pg&e', 'con ed', 'duke energy', 'utility', 'cable',
      'phone bill', 'wireless', 'broadband',
    ],
  },
  {
    name: 'Subscriptions', emoji: '📱', icon: 'category-icons/icon-subscriptions.svg',
    keywords: [
      'subscription', 'membership', 'annual fee', 'adobe', 'microsoft 365',
      'google one', 'icloud', 'dropbox', 'patreon', 'substack', 'medium',
      'audible', 'kindle unlimited', 'masterclass',
    ],
  },
  {
    name: 'Misc', emoji: '💸', icon: 'category-icons/icon-misc.svg',
    keywords: [],
  },
];

// ─── PERSONALITY PROFILES ─────────────────────────────────
const PERSONALITIES = {
  'Housing':       { title: 'PAYING THE RENT',            quote: '"adulting is a scam but at least you have a roof"' },
  'Groceries':     { title: 'DOMESTIC ROYALTY',            quote: '"meal preppinh any day now"' },
  'Transport':     { title: 'ALWAYS IN MOTION',            quote: '"uber should name a car after you"' },
  'Food & Drinks': { title: 'PROFESSIONAL EATER',          quote: '"the restaurant industry thanks you"' },
  'Entertainment': { title: 'MAIN CHARACTER',              quote: '"life is content. content is life"' },
  'Shopping':      { title: 'RETAIL THERAPIST',            quote: '"it was on sale. technically you saved money"' },
  'Health':        { title: 'WELLNESS ERA',                quote: '"your body is a temple. a pricey one"' },
  'Utilities':     { title: 'KEEPING THE LIGHTS ON',       quote: '"literally just existing costs money"' },
  'Subscriptions': { title: 'SUBSCRIBED TO LIFE',          quote: '"you cancelled one. you added three"' },
  'Misc':          { title: 'FINANCIALLY ALIVE',           quote: '"no pattern detected. respect"' },
};

// ─── SKIP PATTERNS ────────────────────────────────────────
const SKIP_PATTERNS = [
  'payment', 'transfer', 'deposit', 'direct dep', 'payroll',
  'zelle received', 'venmo credit', 'mobile dep', 'ach credit',
  'wire credit', 'online transfer', 'credit card payment', 'autopay',
  'overdraft', 'interest charge', 'atm fee', 'monthly fee',
  'account fee', 'minimum balance',
];

// ─── BANK CATEGORY MAP ───────────────────────────────────
// Maps bank-provided category strings (Chase, Capital One, Mint, etc.)
// to our internal category names. Checked before keyword matching.
const BANK_CATEGORY_MAP = {
  'food & drink': 'Food & Drinks',  'food and drink': 'Food & Drinks',
  'food & dining': 'Food & Drinks', 'dining': 'Food & Drinks',
  'restaurants': 'Food & Drinks',   'restaurant': 'Food & Drinks',
  'fast food': 'Food & Drinks',     'coffee shops': 'Food & Drinks',
  'coffee': 'Food & Drinks',        'bars': 'Food & Drinks',
  'alcohol & bars': 'Food & Drinks','cafes': 'Food & Drinks',
  'bakeries': 'Food & Drinks',

  'groceries': 'Groceries',         'supermarkets': 'Groceries',
  'supermarkets & groceries': 'Groceries', 'food & groceries': 'Groceries',

  'shopping': 'Shopping',           'merchandise': 'Shopping',
  'clothing': 'Shopping',           'electronics & software': 'Shopping',
  'home furnishings': 'Shopping',   'sporting goods': 'Shopping',
  'books': 'Shopping',              'hobbies': 'Shopping',
  'online shopping': 'Shopping',    'department stores': 'Shopping',
  'home improvement': 'Shopping',   'apparel': 'Shopping',

  'travel': 'Transport',            'gas': 'Transport',
  'gas & fuel': 'Transport',        'automotive': 'Transport',
  'auto & transport': 'Transport',  'transportation': 'Transport',
  'airlines': 'Transport',          'rideshare': 'Transport',
  'ride share': 'Transport',        'taxis': 'Transport',
  'public transit': 'Transport',    'car rental': 'Transport',
  'parking': 'Transport',

  'entertainment': 'Entertainment', 'arts & entertainment': 'Entertainment',
  'movies & dvds': 'Entertainment', 'music': 'Entertainment',
  'video games': 'Entertainment',   'streaming': 'Entertainment',
  'games': 'Entertainment',         'sports': 'Entertainment',
  'amusement': 'Entertainment',

  'health & wellness': 'Health',    'healthcare': 'Health',
  'health care': 'Health',          'medical': 'Health',
  'pharmacy': 'Health',             'doctor': 'Health',
  'dentist': 'Health',              'gym': 'Health',
  'fitness': 'Health',              'personal care': 'Health',

  'bills & utilities': 'Utilities', 'utilities': 'Utilities',
  'mobile phone': 'Utilities',      'internet': 'Utilities',
  'telecommunications': 'Utilities','phone': 'Utilities',
  'cable': 'Utilities',

  'home': 'Housing',                'rent': 'Housing',
  'mortgage': 'Housing',            'home services': 'Housing',

  'subscriptions': 'Subscriptions', 'software subscriptions': 'Subscriptions',
  'software': 'Subscriptions',

  'personal': 'Misc', 'education': 'Misc', 'charity': 'Misc',
  'gifts & donations': 'Misc',      'fees & adjustments': 'Misc',
  'taxes': 'Misc',                  'insurance': 'Misc',
};

// ─── WORD TOKENS ─────────────────────────────────────────
// Whole-word fallback so unique restaurant/establishment names
// (e.g. "NOBU", "LE BERNARDIN CATERING") still get categorised
// when none of the brand keywords match.
const WORD_TOKENS = {
  restaurant: 'Food & Drinks', restaurants: 'Food & Drinks',
  grill: 'Food & Drinks',      grille: 'Food & Drinks',
  bistro: 'Food & Drinks',     brasserie: 'Food & Drinks',
  trattoria: 'Food & Drinks',  osteria: 'Food & Drinks',
  cantina: 'Food & Drinks',    taqueria: 'Food & Drinks',
  pizzeria: 'Food & Drinks',   creperie: 'Food & Drinks',
  patisserie: 'Food & Drinks', boulangerie: 'Food & Drinks',
  bakery: 'Food & Drinks',     pastry: 'Food & Drinks',
  diner: 'Food & Drinks',      eatery: 'Food & Drinks',
  brewery: 'Food & Drinks',    brewpub: 'Food & Drinks',
  taproom: 'Food & Drinks',    brewhouse: 'Food & Drinks',
  steakhouse: 'Food & Drinks', chophouse: 'Food & Drinks',
  smokehouse: 'Food & Drinks', catering: 'Food & Drinks',
  buffet: 'Food & Drinks',     shawarma: 'Food & Drinks',
  kebab: 'Food & Drinks',      ramen: 'Food & Drinks',
  gelato: 'Food & Drinks',     creamery: 'Food & Drinks',
  boba: 'Food & Drinks',       cider: 'Food & Drinks',
  grocer: 'Groceries',         grocers: 'Groceries',
  pharmacy: 'Health',          dental: 'Health',
  clinic: 'Health',            optometry: 'Health',
  veterinary: 'Health',        veterinarian: 'Health',
  parking: 'Transport',        rideshare: 'Transport',
};

// ─── CSV PARSING ──────────────────────────────────────────

function parseCSVLine(line) {
  const fields = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
      else inQ = !inQ;
    } else if (ch === ',' && !inQ) {
      fields.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  fields.push(cur.trim());
  return fields;
}

function parseDate(str) {
  if (!str) return null;
  str = str.replace(/"/g, '').trim();

  let m;
  // MM/DD/YYYY or M/D/YYYY
  m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return new Date(+m[3], +m[1] - 1, +m[2]);

  // YYYY-MM-DD
  m = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);

  // MM-DD-YYYY
  m = str.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (m) return new Date(+m[3], +m[1] - 1, +m[2]);

  // M/D/YY
  m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/);
  if (m) return new Date(2000 + +m[3], +m[1] - 1, +m[2]);

  const d = new Date(str);
  return isNaN(d) ? null : d;
}

function parseAmount(str) {
  if (!str && str !== 0) return null;
  str = String(str).replace(/[$\s"]/g, '');
  const neg = str.startsWith('(') && str.endsWith(')');
  str = str.replace(/[()]/g, '').replace(/,/g, '');
  const v = parseFloat(str);
  if (isNaN(v)) return null;
  return neg ? -v : v;
}

function shouldSkip(desc) {
  const d = desc.toLowerCase();
  return SKIP_PATTERNS.some(p => d.includes(p));
}

function categorize(desc) {
  const d = desc.toLowerCase();

  // Phase 1 — brand / chain substring match
  for (const cat of CATEGORIES) {
    if (cat.keywords.some(k => d.includes(k))) return cat;
  }

  // Phase 2 — generic establishment-type words (whole-word only)
  // Splits on spaces, punctuation, digits so "GRILL" matches but "GRILLMASTER" doesn't
  const words = d.split(/[\s\-\/&,.()+\d]+/).filter(Boolean);
  for (const word of words) {
    const catName = WORD_TOKENS[word];
    if (catName) return CATEGORIES.find(c => c.name === catName) ?? CATEGORIES[CATEGORIES.length - 1];
  }

  return CATEGORIES[CATEGORIES.length - 1];
}

function looksLikeDate(str) {
  return /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/.test(str.trim()) ||
         /^\d{4}-\d{2}-\d{2}$/.test(str.trim());
}

function detectFormat(headers) {
  const h = headers.map(x => x.toLowerCase().replace(/"/g, '').trim());

  // Detect bank-provided category column (Chase, Capital One, Mint, etc.)
  const categoryIdx = h.findIndex(x =>
    x === 'category' || x === 'transaction category' || x === 'merchant category'
  );

  // Capital One: has both 'debit' and 'credit' columns
  if (h.some(x => x === 'debit') && h.some(x => x === 'credit')) {
    return {
      type: 'capital_one',
      dateIdx: h.findIndex(x => x.includes('transaction date') || x === 'date'),
      descIdx: h.findIndex(x => x.includes('description') || x.includes('merchant')),
      debitIdx:  h.findIndex(x => x === 'debit'),
      creditIdx: h.findIndex(x => x === 'credit'),
      categoryIdx,
    };
  }

  // Chase: transaction date + post date + description + amount
  if (h.some(x => x.includes('post date')) && h.some(x => x === 'amount')) {
    return {
      type: 'signed',
      dateIdx: h.findIndex(x => x.includes('transaction date') || x.includes('date')),
      descIdx: h.findIndex(x => x.includes('description')),
      amtIdx:  h.findIndex(x => x === 'amount'),
      categoryIdx,
    };
  }

  // Generic with date + description + amount columns
  const dateIdx = h.findIndex(x => x.includes('date'));
  const descIdx = h.findIndex(x =>
    x.includes('desc') || x.includes('payee') || x.includes('merchant') ||
    x.includes('name') || x.includes('narration') || x.includes('memo')
  );
  const amtIdx = h.findIndex(x => x === 'amount' || x === 'transaction amount' || x.includes('amount'));

  if (dateIdx >= 0 && descIdx >= 0 && amtIdx >= 0) {
    return { type: 'signed', dateIdx, descIdx, amtIdx, categoryIdx };
  }

  return { type: 'unknown', dateIdx, descIdx, amtIdx, categoryIdx };
}

function parseCSV(rawText) {
  const lines = rawText.trim().split(/\r?\n/).filter(l => l.trim());
  if (lines.length < 2) throw new Error('File is empty or too short.');

  const firstFields = parseCSVLine(lines[0]);
  const hasHeaders = !looksLikeDate(firstFields[0]);

  let format, dataStart;

  if (hasHeaders) {
    format = detectFormat(firstFields);
    dataStart = 1;
  } else {
    // Wells Fargo: Date, Amount, *, *, Description (no headers)
    format = { type: 'wells_fargo', dateIdx: 0, amtIdx: 1, descIdx: 4 };
    dataStart = 0;
  }

  const transactions = [];

  for (let i = dataStart; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cols = parseCSVLine(line);
    let date = null, description = '', amount = null;

    try {
      if (format.type === 'capital_one') {
        date = parseDate(cols[format.dateIdx]);
        description = (cols[format.descIdx] || '').replace(/"/g, '').trim();
        const debit = parseAmount(cols[format.debitIdx]);
        if (!debit || debit <= 0) continue; // skip credits/income
        amount = debit;

      } else if (format.type === 'wells_fargo') {
        date = parseDate(cols[0]);
        description = (cols[4] || cols[3] || cols[2] || '').replace(/"/g, '').trim();
        const raw = parseAmount(cols[1]);
        if (raw === null) continue;
        if (raw > 0) continue; // positive = income/deposit in WF
        amount = Math.abs(raw);

      } else {
        // 'signed' or 'unknown' — treat negative as expense
        const dIdx = format.dateIdx >= 0 ? format.dateIdx : 0;
        const desIdx = format.descIdx >= 0 ? format.descIdx : 1;
        const aIdx  = format.amtIdx  >= 0 ? format.amtIdx  : cols.length - 1;

        date = parseDate(cols[dIdx]);
        description = (cols[desIdx] || '').replace(/"/g, '').trim();
        const raw = parseAmount(cols[aIdx]);
        if (raw === null) continue;
        // expenses are negative in Chase/BoA; positive = income — skip
        if (raw > 0) continue;
        amount = Math.abs(raw);
      }
    } catch (_) {
      continue;
    }

    if (!date || !description || !amount || amount < 0.01) continue;
    if (shouldSkip(description)) continue;

    // Priority: bank's own category column → keyword match → word-token fallback
    let cat;
    const catIdx = format.categoryIdx ?? -1;
    if (catIdx >= 0 && cols[catIdx]) {
      const bankCat = cols[catIdx].replace(/"/g, '').trim().toLowerCase();
      const mapped  = BANK_CATEGORY_MAP[bankCat];
      cat = mapped
        ? (CATEGORIES.find(c => c.name === mapped) ?? categorize(description))
        : categorize(description);
    } else {
      cat = categorize(description);
    }

    transactions.push({
      date: date.toISOString(),
      description: description.toUpperCase(),
      amount,
      category: cat.name,
      emoji: cat.emoji,
      icon: cat.icon,
    });
  }

  return transactions;
}

// ─── VENDOR NORMALIZATION ────────────────────────────────
// Payment processors (Square, Toast, Shopify, PayPal, etc.) prefix merchant
// names with "SQ *", "TST*", "SP *", etc. Splitting on * would give "SQ" for
// every single Square merchant — instead we strip the prefix and read what follows.
const PROCESSOR_PREFIX = /^(SQ|TST|SP|PP|APL|PAYPAL|AMZN MKTP|WHOLEFDS|VZWRLSS|STRIPE|CLOVER)\s*\*\s*/i;

function normalizeVendor(desc) {
  let name = desc.trim();

  if (PROCESSOR_PREFIX.test(name)) {
    // Strip the processor tag and use what comes after the *
    name = name.replace(PROCESSOR_PREFIX, '');
  } else {
    // No processor prefix — stop at the first *, #, or /
    name = name.split(/[*#\/]/)[0];
  }

  // Take the first 1–2 meaningful words; drop pure-digit tokens and
  // trailing location words (city/state that banks append)
  const words = name
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0 && !/^\d+$/.test(w) && !/^[?!]+$/.test(w));

  return words.slice(0, 2).join(' ').trim() || desc.slice(0, 14);
}

// ─── STATS ────────────────────────────────────────────────

function detectMonthLabel(transactions) {
  const counts = {};
  for (const tx of transactions) {
    const d = new Date(tx.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    counts[key] = (counts[key] || 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}

function calcStats(transactions) {
  const total = transactions.reduce((s, t) => s + t.amount, 0);
  const count = transactions.length;
  const uniqueDays = new Set(transactions.map(t => t.date.slice(0, 10))).size;
  const avg = uniqueDays ? total / uniqueDays : 0;  // per-day average
  const max = transactions.reduce((m, t) => t.amount > m.amount ? t : m, transactions[0] || { amount: 0, date: new Date().toISOString(), description: '' });

  // Category breakdown (txCount tracked here so guilty pleasure can reuse it)
  const byCategory = {};
  for (const tx of transactions) {
    if (!byCategory[tx.category]) {
      byCategory[tx.category] = { name: tx.category, emoji: tx.emoji, icon: tx.icon, total: 0, txCount: 0 };
    }
    byCategory[tx.category].total   += tx.amount;
    byCategory[tx.category].txCount += 1;
  }

  const breakdown = Object.values(byCategory)
    .sort((a, b) => b.total - a.total)
    .map(c => ({ ...c, pct: total > 0 ? Math.round((c.total / total) * 100) : 0 }));

  const topCategory = breakdown[0] ?? { name: 'Misc', emoji: '💸', icon: 'category-icons/icon-misc.svg' };
  const personality = PERSONALITIES[topCategory.name] ?? PERSONALITIES['Misc'];

  // Guilty pleasure — category with the highest average spend per transaction
  // (min 2 txns so a single big one-off doesn't dominate)
  // This is intentionally different from topCategory (total $) and mostVisited (count)
  const guiltyEntry = Object.values(byCategory)
    .filter(c => c.txCount >= 2)
    .map(c => ({ ...c, avgTx: c.total / c.txCount }))
    .sort((a, b) => b.avgTx - a.avgTx)[0];
  const guiltyCat = guiltyEntry
    ? (CATEGORIES.find(c => c.name === guiltyEntry.name) ?? CATEGORIES[CATEGORIES.length - 1])
    : CATEGORIES[CATEGORIES.length - 1];
  const guiltyPleasure = {
    cat:   guiltyCat,
    avg:   guiltyEntry?.avgTx   ?? 0,
    count: guiltyEntry?.txCount ?? 0,
  };

  // Most visited merchant
  const vendorCounts = {};
  for (const tx of transactions) {
    const vendor = normalizeVendor(tx.description);
    if (vendor) vendorCounts[vendor] = (vendorCounts[vendor] || 0) + 1;
  }
  const mostVisited = Object.entries(vendorCounts)
    .sort((a, b) => b[1] - a[1])[0] ?? ['—', 0];

  // Daily totals for the spending heatmap — keyed by YYYY-MM-DD
  const dailyTotals = {};
  for (const tx of transactions) {
    const day = tx.date.slice(0, 10);
    dailyTotals[day] = (dailyTotals[day] || 0) + tx.amount;
  }

  return { total, count, avg, max, breakdown, topCategory, personality, guiltyPleasure, mostVisited, dailyTotals };
}

// ─── RENDERING ────────────────────────────────────────────

// ─── HEATMAP ──────────────────────────────────────────────

// Sharp star path from user-supplied SVG (24×24 viewBox)
const STAR_PATH = 'M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z';

function starSVG(size, stroke) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${STAR_PATH}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function renderHeatmap(dailyTotals, monthKey) {
  const grid = document.getElementById('heatmap-grid');
  const monthLabelEl = document.getElementById('heatmap-month-label');
  if (!grid) return;
  grid.innerHTML = '';
  if (!monthKey) return;

  const [year, month] = monthKey.split('-').map(Number);

  if (monthLabelEl) {
    monthLabelEl.textContent = new Date(year, month - 1, 1)
      .toLocaleString('en-US', { month: 'long', year: 'numeric' })
      .toUpperCase();
  }

  // Day-of-week header row
  for (const d of ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']) {
    const el = document.createElement('div');
    el.className = 'heatmap-dow';
    el.textContent = d;
    grid.appendChild(el);
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDow    = new Date(year, month - 1, 1).getDay(); // 0 = Sun

  // Max daily spend for color scaling (power curve so low values still pop)
  const vals     = Object.values(dailyTotals).filter(v => v > 0);
  const maxSpend = vals.length ? Math.max(...vals) : 1;

  // Empty spacers before the 1st
  for (let i = 0; i < firstDow; i++) {
    const empty = document.createElement('div');
    empty.className = 'heatmap-cell heatmap-empty';
    grid.appendChild(empty);
  }

  let noSpendCount = 0;

  // One cell per calendar day
  for (let day = 1; day <= daysInMonth; day++) {
    const key    = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const amount = dailyTotals[key] || 0;

    const cell = document.createElement('div');
    cell.className = 'heatmap-cell';

    if (amount === 0) {
      cell.classList.add('heatmap-zero');
      // Centered star marking a no-spend day
      const star = document.createElement('span');
      star.className = 'heatmap-star';
      star.innerHTML = starSVG(13, '#999');
      cell.appendChild(star);
      noSpendCount++;
    } else {
      // Interpolate warm cream → near-black
      const t = Math.pow(amount / maxSpend, 0.6);
      const r = Math.round(218 + (26 - 218) * t);
      const g = Math.round(210 + (26 - 210) * t);
      const b = Math.round(196 + (26 - 196) * t);
      cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    }

    // Tiny day number tucked in the top-left corner
    const num = document.createElement('span');
    num.className = 'heatmap-day-num';
    num.textContent = day;
    cell.appendChild(num);

    grid.appendChild(cell);
  }

  // No-spend note below the grid — remove stale one on re-render
  const oldNote = document.getElementById('heatmap-no-spend-note');
  if (oldNote) oldNote.remove();

  const note = document.createElement('div');
  note.id = 'heatmap-no-spend-note';
  note.className = 'heatmap-no-spend-note';
  note.innerHTML =
    `<span class="heatmap-note-star">${starSVG(9, '#777')}</span>` +
    `YOU HAD <strong>${noSpendCount}</strong> ZERO-SPEND DAY${noSpendCount !== 1 ? 'S' : ''}!`;
  grid.parentNode.appendChild(note);
}

function catIconHTML(cat, size) {
  if (cat.icon) {
    return `<img src="${cat.icon}" class="cat-icon" width="${size}" height="${size}" alt="">`;
  }
  return `<span class="cat-emoji">${cat.emoji}</span>`;
}

function fmt(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Compact format for large projected figures — drops cents, uses K/M above thresholds
function fmtK(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 100000)  return '$' + Math.round(n / 1000) + 'K';
  return '$' + Math.round(n).toLocaleString('en-US');
}

function renderBarcode(container, seed) {
  container.innerHTML = '';
  let rng = Math.abs((seed | 0) || 54321);
  const next = () => {
    rng = (rng * 1664525 + 1013904223) & 0x7fffffff;
    return rng / 0x7fffffff;
  };

  let used = 0;
  const maxW = 260;
  while (used < maxW) {
    const w = Math.min(maxW - used, Math.max(1, Math.floor(next() * 5)));
    const isBar = next() > 0.38;
    const h = isBar ? Math.floor(22 + next() * 20) : 0;

    const bar = document.createElement('div');
    bar.style.cssText = [
      `width:${w}px`,
      `height:${h}px`,
      `background:${isBar ? '#1a1a1a' : 'transparent'}`,
      'flex-shrink:0',
      'align-self:flex-end',
    ].join(';');
    container.appendChild(bar);
    used += w;
  }
}

function renderReceipt(transactions, monthKey) {
  const stats = calcStats(transactions);

  // Header meta
  const monthDate = monthKey ? new Date(monthKey + '-15') : new Date();
  const monthName = monthDate.toLocaleString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
  const orderNum = monthKey ? monthKey.replace('-', '') : '000000';
  const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
  const today = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase();

  document.getElementById('receipt-meta').innerHTML =
    `${monthName}<br>ORDER #${orderNum} &nbsp;·&nbsp; ${dayOfWeek}, ${today}`;

  // Personality
  document.getElementById('personality-title').textContent = stats.personality.title;
  document.getElementById('personality-quote').textContent = stats.personality.quote;

  // Stats grid
  document.getElementById('stat-count').textContent = stats.count;
  document.getElementById('stat-avg').textContent = fmt(stats.avg);
  document.getElementById('stat-top-cat').innerHTML =
    `${catIconHTML(stats.topCategory, 18)} ${stats.topCategory.name.toUpperCase()}`;
  document.getElementById('stat-top-cat-pct').textContent =
    `${stats.topCategory.pct ?? 0}% OF SPENDING`;
  document.getElementById('stat-max').textContent = fmt(stats.max.amount);

  // Most visited merchant
  const [mvName, mvCount] = stats.mostVisited;
  document.getElementById('stat-most-visited').textContent = mvName.slice(0, 13);
  document.getElementById('stat-most-visited-count').textContent =
    `${mvCount}x THIS MONTH`;

  // Guilty pleasure — highest avg spend per visit
  const { cat: guiltyCat, avg: guiltyAvg, count: guiltyCount } = stats.guiltyPleasure;
  document.getElementById('stat-guilty').innerHTML =
    `${catIconHTML(guiltyCat, 18)} ${guiltyCat.name.toUpperCase()}`;
  document.getElementById('stat-guilty-sub').textContent =
    `${fmt(guiltyAvg)} PER VISIT`;

  // Projected annual spend
  const annual = stats.total * 12;
  document.getElementById('stat-annual').textContent = fmtK(annual);
  document.getElementById('stat-annual-sub').textContent = 'AT THIS RATE';

  // Biggest splurge detail — "YOUR BIGGEST SPLURGE WAS ON MAY 3 FOR STARBUCKS"
  const maxDate = new Date(stats.max.date)
    .toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase();
  const maxDesc = (stats.max.description || '').slice(0, 22);
  document.getElementById('stat-max-detail').textContent =
    `ON ${maxDate} FOR ${maxDesc}`;

  // Spending breakdown
  const list = document.getElementById('breakdown-list');
  list.innerHTML = '';
  for (const cat of stats.breakdown) {
    const item = document.createElement('div');
    item.className = 'breakdown-item';
    item.innerHTML = `
      <div class="breakdown-row">
        <span class="breakdown-name">${catIconHTML(cat, 13)} ${cat.name.toUpperCase()}</span>
        <span class="breakdown-amt">${fmt(cat.total)}</span>
      </div>
      <div class="breakdown-bar-row">
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width:${cat.pct}%"></div>
        </div>
        <span class="breakdown-pct">${cat.pct}%</span>
      </div>
    `;
    list.appendChild(item);
  }

  // Heatmap
  renderHeatmap(stats.dailyTotals, monthKey);

  // Totals
  document.getElementById('total-subtotal').textContent = fmt(stats.total);
  document.getElementById('total-count').textContent = stats.count;
  document.getElementById('total-avg').textContent = fmt(stats.avg) + '/DAY';
document.getElementById('grand-total').textContent = fmt(stats.total);

  // Card info (fun fake data derived from stats)
  const cardYear = monthDate.getFullYear();
  const authCode = String(Math.floor(stats.total * 100) % 999999).padStart(6, '0');
  document.getElementById('card-number').textContent = `PAID WITH CARD **** **** **** ${cardYear}`;
  document.getElementById('card-auth').textContent = `AUTH CODE: ${authCode}`;

  // Barcode seeded by total
  renderBarcode(document.getElementById('barcode'), Math.floor(stats.total * 100));
}

// ─── SCREEN MANAGEMENT ───────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showError(msg) {
  const toast = document.getElementById('error-toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 4000);
}

function handleFile(file) {
  if (!file || !file.name.endsWith('.csv')) {
    showError('Please upload a CSV file from your bank.');
    return;
  }

  showScreen('screen-processing');

  const reader = new FileReader();
  reader.onload = (e) => {
    // Small delay so the animation is visible
    setTimeout(() => {
      try {
        const transactions = parseCSV(e.target.result);

        if (transactions.length === 0) {
          showScreen('screen-upload');
          showError('No valid transactions found. Check your CSV format.');
          return;
        }

        const monthKey = detectMonthLabel(transactions);

        chrome.storage.local.set({
          statemonth_data: { transactions, monthKey, savedAt: Date.now() },
        });

        renderReceipt(transactions, monthKey);
        showScreen('screen-receipt');
        // Scroll to top of receipt
        document.getElementById('receipt-scroll').scrollTop = 0;

      } catch (err) {
        showScreen('screen-upload');
        showError(err.message || 'Could not parse CSV. Try a different export.');
      }
    }, 1200);
  };
  reader.onerror = () => {
    showScreen('screen-upload');
    showError('Could not read file.');
  };
  reader.readAsText(file);
}

// ─── INIT ─────────────────────────────────────────────────

function init() {
  // ── Print-tab mode ────────────────────────────────────────
  // When the PDF button opens popup.html?print=1 as a full tab,
  // we load stored data, render the receipt, then auto-trigger print.
  if (new URLSearchParams(window.location.search).get('print') === '1') {
    document.body.classList.add('print-mode');
    chrome.storage.local.get('statemonth_data', (result) => {
      const data = result.statemonth_data;
      if (data?.transactions?.length) {
        renderReceipt(data.transactions, data.monthKey);
        showScreen('screen-receipt');
        // Wait for Google Fonts to finish loading before printing
        document.fonts.ready.then(() => setTimeout(() => window.print(), 400));
      }
    });
    return; // skip normal popup init
  }

  // ── Normal popup mode ─────────────────────────────────────
  // Load saved data
  chrome.storage.local.get('statemonth_data', (result) => {
    const data = result.statemonth_data;
    if (data && data.transactions && data.transactions.length > 0) {
      renderReceipt(data.transactions, data.monthKey);
      showScreen('screen-receipt');
    } else {
      showScreen('screen-upload');
    }
  });

  // ── Drop zone ──
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');

  dropZone.addEventListener('click', () => fileInput.click());
  document.getElementById('browse-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) handleFile(fileInput.files[0]);
    fileInput.value = '';
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
  });

  // ── How-to tooltip ──
  const howLink = document.getElementById('how-link');
  const howTip  = document.getElementById('how-tooltip');
  howLink.addEventListener('click', () => {
    howTip.classList.toggle('hidden');
    howLink.textContent = howTip.classList.contains('hidden')
      ? 'How do I get my CSV? ↗'
      : 'How do I get my CSV? ↙';
  });

  // ── Action bar buttons ──
  document.getElementById('btn-upload-new').addEventListener('click', () => {
    chrome.storage.local.remove('statemonth_data');
    showScreen('screen-upload');
  });

  document.getElementById('btn-save-pdf').addEventListener('click', () => {
    // window.print() is silently blocked in extension popups.
    // Open the receipt as a full tab instead — print dialog fires automatically.
    chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') + '?print=1' });
  });
}

init();
