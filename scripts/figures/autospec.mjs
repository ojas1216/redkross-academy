/**
 * Converts a library ASCII figure into a structured spec for render.mjs when the
 * diagram follows one of the common shapes. Returns null when unsure; those
 * figures get a hand-written spec in scripts/figures/specs/.
 */
const ARROW = /\s*(?:-+>|=+>|→)\s*/;
const ARROW_G = /\s*(?:-+>|=+>|→)\s*/g;
// backward arrows and drawn loop lines mark a diagram line, never prose
const DRAWN = /<-+|<=+|[+^]-{3,}|-{3,}\+/;

export function cleanDiagram(text) {
  const lines = String(text || '')
    .split('\n')
    .filter((l) => !/\[(BEGIN|END) DIAGRAM\]/.test(l))
    .map((l) => l.replace(/\s+$/, ''));
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indent = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^ */)[0].length));
  return lines.map((l) => l.slice(indent));
}

const cap = (s) => {
  const t = String(s).trim();
  return t ? t[0].toUpperCase() + t.slice(1) : t;
};

/** "installation(persistence)" -> { label: 'Installation', sub: 'persistence' } */
function labelSub(raw) {
  const m = /^(.*?)\s*\(([^()]*)\)\s*$/.exec(raw.trim());
  if (m && m[1].trim()) return { label: cap(m[1]), sub: m[2].trim() };
  return { label: cap(raw) };
}

function isConnectorOnly(l) {
  return /^[\s|v^\\/+\-<>.]*$/.test(l) && /[|v^\\/]/.test(l);
}

/** Trailing explanatory sentences become the note. */
function splitNotes(lines) {
  const body = [...lines];
  const notes = [];
  for (;;) {
    const last = body[body.length - 1];
    if (last === undefined) break;
    const t = last.trim();
    const words = t.split(/\s+/).length;
    const labelled = /^(note|rule|key|tip|remember|analysis|result|goal|principle|takeaway|why|test|outcome)\s*:/i.test(t);
    const sentence = words >= 6 && !ARROW.test(t) && !DRAWN.test(t) && !/\s{2,}/.test(t) && !/\|/.test(t) && !/^[A-Z0-9 _/&-]{3,}\s*:/.test(t);
    if (labelled || (sentence && body.length > 2)) {
      notes.unshift(cap(t.replace(/^note\s*:\s*/i, '')));
      body.pop();
    } else break;
  }
  return { body, note: notes.join(' ') || undefined };
}

function splitItems(s) {
  let parts = s.split(/\s*[|;]\s*/).map((x) => x.trim()).filter(Boolean);
  if (parts.length === 1 && (s.match(/,/g) || []).length >= 2 && s.length < 140) parts = s.split(/\s*,\s*/).filter(Boolean);
  return parts.map((p) => cap(p.replace(/\s+/g, ' ')));
}

function tryRows(body) {
  const content = body.filter((l) => l.trim() && !isConnectorOnly(l));
  const re = /^\s*([A-Za-z0-9][\w /&().'+-]{0,30}?)\s*:\s+(\S.*)$/;
  const hits = content.map((l) => re.exec(l)).filter(Boolean);
  if (hits.length < 2 || hits.length < content.length * 0.8) return null;
  if (hits.some((h) => ARROW.test(h[2]) && (h[2].match(ARROW_G) || []).length > 1)) return null;
  if (hits.some((h) => /\s{2,}[A-Za-z][\w /-]{0,20}:\s/.test(h[2]))) return null; // second column of labels
  if (body.some((l) => DRAWN.test(l))) return null;
  return {
    type: 'rows',
    rows: hits.map((h) => ({ label: cap(h[1]), items: splitItems(h[2]) })),
  };
}

function tryMapping(body) {
  const content = body.filter((l) => l.trim() && !isConnectorOnly(l));
  let header;
  let rows = content;
  if (content.length > 2 && !ARROW.test(content[0]) && /^\S+(?: \S+)?\s{3,}\S+(?: \S+){0,3}$/.test(content[0].trim())) {
    header = content[0].trim().split(/\s{3,}/).map(cap);
    rows = content.slice(1);
  }
  if (content.some((l) => DRAWN.test(l))) return null;
  const arrows = rows.map((l) => (l.match(ARROW_G) || []).length);
  if (rows.length < 2 || arrows.some((a) => a !== 1)) return null;
  if (rows.some((l) => !l.split(ARROW)[0].trim())) return null; // continuation lines of a chain, not a mapping
  return {
    type: 'rows',
    arrow: true,
    header,
    rows: rows.map((l) => {
      const [a, b] = l.split(ARROW);
      return { label: cap(a), items: splitItems(b) };
    }),
  };
}

function tryChain(body) {
  const lines = body.filter((l) => l.trim());
  if (lines.some((l) => DRAWN.test(l))) return null;
  const chainIdx = lines.findIndex((l) => (l.match(ARROW_G) || []).length >= 2);
  if (chainIdx !== 0) return null;
  const chain = lines[0];
  const parts = chain.split(ARROW);
  if (parts.length < 3 || parts.length > 7 || parts.some((p) => !p.trim() || p.trim().length > 42)) return null;
  // column where each step starts
  const starts = [];
  let pos = 0;
  for (const p of parts) {
    const at = chain.indexOf(p.trim(), pos);
    starts.push(at);
    pos = at + p.trim().length;
  }
  const steps = parts.map((p) => ({ ...labelSub(p), details: [] }));
  for (const l of lines.slice(1)) {
    if (isConnectorOnly(l)) continue;
    if (ARROW.test(l)) return null; // a second arrow row: not a simple chain
    if (/(^|\s)[|^+\\/](\s|$)/.test(l)) return null; // drawn connectors, not plain detail text
    const segs = [...l.matchAll(/\S+(?: \S+)*/g)];
    if (segs.length < 2 && parts.length > 2) return null; // a full-width line is a sentence, not a detail row
    for (const s of segs) {
      let best = 0;
      for (let i = 0; i < starts.length; i++) if (s.index >= starts[i] - 3) best = i;
      steps[best].details.push(s[0]);
    }
  }
  steps.forEach((s) => {
    if (!s.details.length) delete s.details;
  });
  return { type: 'flow', steps };
}

function tryVertical(body) {
  const lines = body.filter((l) => l.trim());
  if (lines.length < 3) return null;
  // side-by-side columns or labelled arrows ("v  text") are not a simple pipeline
  if (lines.some((l) => /Ss{4,}S/.test(l.trim()))) return null;
  if (lines.some((l) => /^s*vs+S/.test(l) || /^s*|s+S/.test(l))) return null;
  const steps = [];
  let sawConnector = false;
  for (const l of lines) {
    if (isConnectorOnly(l)) {
      sawConnector = true;
      continue;
    }
    if (steps.length && !sawConnector) {
      // continuation line belongs to the previous step
      const prev = steps[steps.length - 1];
      prev.sub = [prev.sub, l.trim().replace(/^\(|\)$/g, '')].filter(Boolean).join(' · ');
      continue;
    }
    sawConnector = false;
    const arrowParts = l.split(ARROW).map((x) => x.trim()).filter(Boolean);
    if (arrowParts.length > 2) return null;
    const s = labelSub(arrowParts[0]);
    if (arrowParts[1]) s.side = arrowParts[1];
    steps.push(s);
  }
  if (steps.length < 2 || steps.length > 7) return null;
  if (!lines.some(isConnectorOnly)) return null;
  return { type: 'flow', dir: 'TB', steps };
}

export function autoSpec(fig) {
  const { body, note } = splitNotes(cleanDiagram(fig.diagram));
  const spec = tryRows(body) || tryMapping(body) || tryChain(body) || tryVertical(body);
  if (!spec) return null;
  if (note) spec.note = note;
  return spec;
}
