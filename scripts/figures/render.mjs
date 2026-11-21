/**
 * RedKross course figure renderer: structured figure specs -> designed SVG.
 *
 * Replaces the library's ASCII-art figures (monospace text in an SVG) with real
 * diagrams in one consistent visual style. Spec types:
 *
 *   flow    { dir: 'LR'|'TB', steps: [{ label, details?: [] }], loop?: { label }, note? }
 *   rows    { header?: [left, right], rows: [{ label, items: [] }], arrow?: bool, note? }
 *   graph   { dir, nodes: [{ id, label, sub?, tone? }], edges: [{ from, to, label?, dashed? }], note? }
 *   compare { columns: [{ title, tone?, items: [] }], note? }
 *   layers  { layers: [{ label, sub?, tone? }], note? }
 *   cycle   { steps: [{ label, sub? }], center?, note? }
 *   scale   { ticks: [{ label, sub? }], bands?: [{ from, to, label, tone? }], note? }
 *
 * Text is measured with Helvetica/Arial metrics, so the SVG font stack is
 * Helvetica/Arial to keep wrapping exact.
 */
import ELK from 'elkjs/lib/elk.bundled.js';

const W = 1000; // canvas width
const PAD = 36;
const FONT = "Helvetica, Arial, 'Liberation Sans', sans-serif";

export const TONES = {
  orange: { fill: '#FFF4E8', stroke: '#F59E4B', text: '#7A3A06', accent: '#EA6A0A' },
  slate: { fill: '#F1F5F9', stroke: '#94A3B8', text: '#1E293B', accent: '#475569' },
  blue: { fill: '#EFF6FF', stroke: '#7FB0EE', text: '#123E73', accent: '#2563EB' },
  green: { fill: '#ECFDF3', stroke: '#6CCB95', text: '#14532D', accent: '#16A34A' },
  red: { fill: '#FEF2F2', stroke: '#F19A9A', text: '#7F1D1D', accent: '#DC2626' },
  violet: { fill: '#F5F3FF', stroke: '#B3A2F0', text: '#3B2A7A', accent: '#7C3AED' },
  dark: { fill: '#1F2937', stroke: '#111827', text: '#FFFFFF', accent: '#F59E4B' },
};
const ROTATION = ['orange', 'blue', 'green', 'violet', 'slate', 'red'];
const INK = '#0F172A';
const MUTED = '#475569';
const LINE = '#64748B';

// ---------------------------------------------------------------- text metrics
// Helvetica advance widths (1/1000 em) for printable ASCII 32..126
const HELV = [
  278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556,
  556, 556, 278, 278, 584, 584, 584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778,
  667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278, 278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556,
  556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500, 500, 334, 260, 334, 584,
];
export function textWidth(s, size, bold = false) {
  let w = 0;
  for (const ch of String(s)) {
    const c = ch.codePointAt(0);
    w += c >= 32 && c <= 126 ? HELV[c - 32] : 600;
  }
  return (w / 1000) * size * (bold ? 1.06 : 1);
}

export function wrap(text, maxWidth, size, bold = false) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const word of words) {
    const next = cur ? `${cur} ${word}` : word;
    if (textWidth(next, size, bold) <= maxWidth || !cur) cur = next;
    else {
      lines.push(cur);
      cur = word;
    }
  }
  if (cur) lines.push(cur);
  // hard-break a single word that is still too long
  return lines.flatMap((l) => {
    if (textWidth(l, size, bold) <= maxWidth) return [l];
    const out = [];
    let part = '';
    for (const ch of l) {
      if (textWidth(part + ch, size, bold) > maxWidth && part) {
        out.push(part);
        part = ch;
      } else part += ch;
    }
    if (part) out.push(part);
    return out;
  });
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function textBlock(lines, x, y, { size = 15, bold = false, fill = INK, anchor = 'middle', lh = 1.3 } = {}) {
  return lines
    .map(
      (l, i) =>
        `<text x="${x.toFixed(1)}" y="${(y + i * size * lh).toFixed(1)}" font-family="${FONT}" font-size="${size}"${bold ? ' font-weight="700"' : ''} fill="${fill}" text-anchor="${anchor}">${esc(l)}</text>`
    )
    .join('');
}

/** A rounded box with a wrapped title and optional wrapped subtitle; returns { svg, h }. */
function boxContent(label, sub, width, tone, { titleSize = 15, subSize = 12.5 } = {}) {
  const t = TONES[tone] || TONES.orange;
  const inner = width - 24;
  const tl = wrap(label, inner, titleSize, true);
  const sl = sub ? wrap(sub, inner, subSize) : [];
  const h = 16 + tl.length * titleSize * 1.25 + (sl.length ? 6 + sl.length * subSize * 1.3 : 0) + 12;
  return { tl, sl, h, t, titleSize, subSize };
}
function drawBox(x, y, width, c, h = c.h) {
  const { tl, sl, t, titleSize, subSize } = c;
  const contentH = tl.length * titleSize * 1.25 + (sl.length ? 6 + sl.length * subSize * 1.3 : 0);
  const top = y + (h - contentH) / 2 + titleSize * 0.95;
  return (
    `<rect x="${x}" y="${y}" width="${width}" height="${h}" rx="10" fill="${t.fill}" stroke="${t.stroke}" stroke-width="1.5"/>` +
    textBlock(tl, x + width / 2, top, { size: titleSize, bold: true, fill: t.text, lh: 1.25 }) +
    (sl.length ? textBlock(sl, x + width / 2, top + tl.length * titleSize * 1.25 + 6, { size: subSize, fill: t === TONES.dark ? '#CBD5E1' : MUTED }) : '')
  );
}

const arrowDefs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${LINE}"/></marker></defs>`;
const line = (x1, y1, x2, y2, { dashed = false, head = true } = {}) =>
  `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${LINE}" stroke-width="1.8"${dashed ? ' stroke-dasharray="6 5"' : ''}${head ? ' marker-end="url(#ah)"' : ''}/>`;

function noteBlock(note, y) {
  if (!note) return { svg: '', h: 0 };
  const lines = wrap(note, W - 2 * PAD - 40, 13.5);
  const h = 18 + lines.length * 13.5 * 1.35;
  const svg =
    `<rect x="${PAD}" y="${y}" width="${W - 2 * PAD}" height="${h}" rx="8" fill="#F8FAFC" stroke="#E2E8F0"/>` +
    `<rect x="${PAD}" y="${y}" width="4" height="${h}" rx="2" fill="${TONES.orange.accent}"/>` +
    textBlock(lines, PAD + 20, y + 13.5 + 7, { size: 13.5, fill: MUTED, anchor: 'start', lh: 1.35 });
  return { svg, h: h + 8 };
}

function frame(code, title, bodySvg, bodyH, alt) {
  const titleLines = wrap(title, W - 2 * PAD - 150, 21, true);
  const headH = 28 + titleLines.length * 26 + 14;
  const H = Math.ceil(headH + bodyH + PAD);
  const chipW = textWidth(code, 12, true) + 22;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(alt || title)}">` +
    `<title>${esc(title)}</title>` +
    arrowDefs +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="14" fill="#FFFFFF" stroke="#E2E8F0"/>` +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="5" rx="2" fill="${TONES.orange.accent}"/>` +
    `<rect x="${PAD}" y="24" width="${chipW}" height="22" rx="11" fill="#FFF4E8" stroke="#F59E4B"/>` +
    `<text x="${PAD + chipW / 2}" y="39.5" font-family="${FONT}" font-size="12" font-weight="700" fill="#B45309" text-anchor="middle">${esc(code)}</text>` +
    textBlock(titleLines, PAD + chipW + 14, 42, { size: 21, bold: true, fill: INK, anchor: 'start', lh: 1.24 }) +
    `<g transform="translate(0,${headH})">${bodySvg}</g>` +
    `<text x="${W - PAD}" y="${H - 12}" font-family="${FONT}" font-size="10" fill="#94A3B8" text-anchor="end">RedKross Academy</text>` +
    `</svg>`
  );
}

// ---------------------------------------------------------------- layouts

function layoutFlow(spec) {
  const steps = spec.steps;
  const n = steps.length;
  const dir = spec.dir || (n > 5 ? 'TB' : 'LR');
  let svg = '';
  let y = 8;
  if (dir === 'LR') {
    const gap = 34;
    const bw = (W - 2 * PAD - gap * (n - 1)) / n;
    const boxes = steps.map((s, i) => boxContent(s.label, s.sub, bw, s.tone || spec.tone || (i === n - 1 && spec.highlightLast ? 'dark' : 'orange')));
    const bh = Math.max(...boxes.map((b) => b.h));
    steps.forEach((s, i) => {
      const x = PAD + i * (bw + gap);
      svg += drawBox(x, y, bw, boxes[i], bh);
      if (i < n - 1) svg += line(x + bw + 3, y + bh / 2, x + bw + gap - 3, y + bh / 2);
    });
    let dy = y + bh;
    // details under each step
    const detailLines = steps.map((s) => (s.details || []).flatMap((d) => wrap(d, bw - 8, 12.5)));
    const maxD = Math.max(0, ...detailLines.map((d) => d.length));
    if (maxD) {
      steps.forEach((s, i) => {
        const x = PAD + i * (bw + gap);
        if (detailLines[i].length) {
          svg += `<line x1="${x + bw / 2}" y1="${dy + 2}" x2="${x + bw / 2}" y2="${dy + 12}" stroke="#CBD5E1" stroke-width="1.5"/>`;
          svg += textBlock(detailLines[i], x + bw / 2, dy + 28, { size: 12.5, fill: MUTED, lh: 1.32 });
        }
      });
      dy += 20 + maxD * 12.5 * 1.32 + 6;
    }
    if (spec.loop) {
      const ly = dy + 18;
      const x1 = PAD + (n - 1) * (bw + gap) + bw / 2;
      const target = Math.min(Math.max(Number(spec.loop.to) || 0, 0), n - 1); // optional loop.to step index
      const x0 = PAD + target * (bw + gap) + bw / 2;
      svg += `<path d="M${x1},${y + bh} L${x1},${ly} L${x0},${ly} L${x0},${y + bh + 4}" fill="none" stroke="${LINE}" stroke-width="1.8" stroke-dasharray="6 5" marker-end="url(#ah)"/>`;
      if (spec.loop.label) {
        const lw = textWidth(spec.loop.label, 12.5) + 16;
        svg += `<rect x="${(x0 + x1) / 2 - lw / 2}" y="${ly - 11}" width="${lw}" height="22" rx="11" fill="#FFFFFF" stroke="#CBD5E1"/>`;
        svg += textBlock([spec.loop.label], (x0 + x1) / 2, ly + 4.5, { size: 12.5, fill: MUTED });
      }
      dy = ly + 18;
    }
    y = dy + 14;
  } else {
    const bw = Math.min(560, W - 2 * PAD);
    const x = (W - bw) / 2;
    const gap = 30;
    const tops = [];
    const heights = [];
    steps.forEach((s, i) => {
      const detail = (s.details || []).join(' · ');
      const b = boxContent(s.label, [s.sub, detail].filter(Boolean).join(' — '), bw, s.tone || spec.tone || 'orange');
      tops.push(y);
      heights.push(b.h);
      svg += drawBox(x, y, bw, b);
      if (s.side) {
        const sw = (W - 2 * PAD - bw) / 2 - 24;
        const sl = wrap(s.side, sw, 12.5);
        svg += line(x + bw + 4, y + b.h / 2, x + bw + 20, y + b.h / 2);
        svg += textBlock(sl, x + bw + 26, y + b.h / 2 - ((sl.length - 1) * 12.5 * 1.3) / 2 + 4, { size: 12.5, fill: MUTED, anchor: 'start' });
      }
      y += b.h;
      if (i < steps.length - 1) {
        svg += line(W / 2, y + 3, W / 2, y + gap - 3);
        y += gap;
      }
    });
    if (spec.loop) {
      // feedback: from the last box's right edge, up the right margin, back into the first box
      // (or into steps[loop.to] when given). Side notes share the right margin, so the loop
      // runs just outside the boxes.
      const target = Math.min(Math.max(Number(spec.loop.to) || 0, 0), n - 1);
      const lx = x + bw + 30;
      // attach a quarter of the way down the box edges so side notes (at mid-height) stay clear
      const yFrom = tops[n - 1] + heights[n - 1] / 4;
      const yTo = tops[target] + heights[target] / 4;
      svg += `<path d="M${x + bw + 3},${yFrom} L${lx},${yFrom} L${lx},${yTo} L${x + bw + 7},${yTo}" fill="none" stroke="${LINE}" stroke-width="1.8" stroke-dasharray="6 5" marker-end="url(#ah)"/>`;
      if (spec.loop.label) {
        const lines = wrap(spec.loop.label, W - PAD - lx - 12, 12.5);
        svg += textBlock(lines, lx + 10, (yFrom + yTo) / 2 - ((lines.length - 1) * 12.5 * 1.3) / 2 + 4, { size: 12.5, fill: MUTED, anchor: 'start' });
      }
    }
    y += 18;
  }
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

function layoutRows(spec) {
  let svg = '';
  let y = 4;
  const labelW = Math.min(260, Math.max(130, ...spec.rows.map((r) => textWidth(r.label, 14.5, true) + 34)));
  const arrowW = spec.arrow ? 46 : 18;
  const itemsX = PAD + labelW + arrowW;
  const itemsW = W - PAD - itemsX;
  if (spec.header) {
    svg += textBlock([spec.header[0].toUpperCase()], PAD + labelW / 2, y + 12, { size: 11.5, bold: true, fill: '#94A3B8' });
    svg += textBlock([spec.header[1].toUpperCase()], itemsX + 4, y + 12, { size: 11.5, bold: true, fill: '#94A3B8', anchor: 'start' });
    y += 24;
  }
  spec.rows.forEach((r, i) => {
    const tone = TONES[r.tone || spec.tone || ROTATION[i % ROTATION.length]];
    // chips: lay out items left to right, wrapping
    const chips = [];
    let cx = 0;
    let cy = 0;
    const chipH = 30;
    for (const item of r.items) {
      const lines = wrap(item, itemsW - 24, 13.5);
      const w = Math.min(itemsW, Math.max(...lines.map((l) => textWidth(l, 13.5))) + 24);
      const h = lines.length > 1 ? 12 + lines.length * 13.5 * 1.3 : chipH;
      if (cx + w > itemsW && cx > 0) {
        cx = 0;
        cy += Math.max(chipH, chips.filter((c) => c.y === cy).reduce((m, c) => Math.max(m, c.h), 0)) + 8;
      }
      chips.push({ x: cx, y: cy, w, h, lines });
      cx += w + 8;
    }
    const lastRowH = chips.length ? Math.max(...chips.filter((c) => c.y === cy).map((c) => c.h)) : chipH;
    const contentH = cy + lastRowH;
    const labelLines = wrap(r.label, labelW - 24, 14.5, true);
    const rowH = Math.max(contentH, 14 + labelLines.length * 14.5 * 1.25) + 16;
    svg += `<rect x="${PAD}" y="${y}" width="${W - 2 * PAD}" height="${rowH}" rx="10" fill="${i % 2 ? '#FFFFFF' : '#F8FAFC'}" stroke="#E2E8F0"/>`;
    svg += `<rect x="${PAD + 8}" y="${y + 8}" width="${labelW - 8}" height="${rowH - 16}" rx="8" fill="${tone.fill}" stroke="${tone.stroke}"/>`;
    svg += textBlock(labelLines, PAD + 4 + labelW / 2, y + rowH / 2 - ((labelLines.length - 1) * 14.5 * 1.25) / 2 + 5, { size: 14.5, bold: true, fill: tone.text, lh: 1.25 });
    if (spec.arrow) svg += line(PAD + labelW + 8, y + rowH / 2, PAD + labelW + arrowW - 8, y + rowH / 2);
    const top = y + (rowH - contentH) / 2;
    for (const c of chips) {
      svg += `<rect x="${itemsX + c.x}" y="${top + c.y}" width="${c.w}" height="${c.h}" rx="${c.lines.length > 1 ? 8 : 15}" fill="#FFFFFF" stroke="${tone.stroke}"/>`;
      svg += textBlock(c.lines, itemsX + c.x + c.w / 2, top + c.y + (c.lines.length > 1 ? 6 + 13.5 : c.h / 2 + 5), { size: 13.5, fill: INK, lh: 1.3 });
    }
    y += rowH + 8;
  });
  y += 10;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

function layoutCompare(spec) {
  const n = spec.columns.length;
  const gap = 22;
  const cw = (W - 2 * PAD - gap * (n - 1)) / n;
  let svg = '';
  const y = 4;
  const cols = spec.columns.map((c, i) => {
    const tone = TONES[c.tone || ROTATION[i % ROTATION.length]];
    const titleLines = wrap(c.title, cw - 28, 16, true);
    const items = c.items.map((it) => wrap(it, cw - 46, 13.5));
    const h = 22 + titleLines.length * 20 + 14 + items.reduce((s, l) => s + l.length * 13.5 * 1.35 + 10, 0) + 10;
    return { tone, titleLines, items, h };
  });
  const H = Math.max(...cols.map((c) => c.h));
  cols.forEach((c, i) => {
    const x = PAD + i * (cw + gap);
    svg += `<rect x="${x}" y="${y}" width="${cw}" height="${H}" rx="12" fill="${c.tone.fill}" stroke="${c.tone.stroke}" stroke-width="1.5"/>`;
    svg += textBlock(c.titleLines, x + cw / 2, y + 30, { size: 16, bold: true, fill: c.tone.text, lh: 1.25 });
    let iy = y + 30 + c.titleLines.length * 20 + 10;
    for (const lines of c.items) {
      svg += `<circle cx="${x + 20}" cy="${iy + 6}" r="3.5" fill="${c.tone.accent}"/>`;
      svg += textBlock(lines, x + 32, iy + 10, { size: 13.5, fill: c.tone === TONES.dark ? '#E5E7EB' : INK, anchor: 'start', lh: 1.35 });
      iy += lines.length * 13.5 * 1.35 + 10;
    }
  });
  if (spec.vs && n === 2) {
    const cx = PAD + cw + gap / 2;
    svg += `<circle cx="${cx}" cy="${y + H / 2}" r="16" fill="#FFFFFF" stroke="#CBD5E1"/>`;
    svg += textBlock(['vs'], cx, y + H / 2 + 4.5, { size: 12, bold: true, fill: MUTED });
  }
  const yy = y + H + 18;
  const nb = noteBlock(spec.note, yy);
  return { svg: svg + nb.svg, h: yy + nb.h };
}

function layoutLayers(spec) {
  let svg = '';
  let y = 4;
  const n = spec.layers.length;
  spec.layers.forEach((l, i) => {
    const inset = spec.pyramid ? (((n - 1 - i) * (W - 2 * PAD) * 0.45) / Math.max(1, n - 1)) / 2 : 0; // narrow at the top
    const bw = W - 2 * PAD - inset * 2;
    const b = boxContent(l.label, l.sub, bw, l.tone || (i === 0 && spec.darkTop ? 'dark' : ROTATION[i % ROTATION.length]));
    svg += drawBox(PAD + inset, y, bw, b);
    y += b.h + (spec.arrows ? 26 : 8);
    if (spec.arrows && i < n - 1) svg += line(W / 2, y - 23, W / 2, y - 3);
  });
  y += 10;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

function layoutCycle(spec) {
  const n = spec.steps.length;
  const cx = W / 2;
  const R = n <= 4 ? 150 : n <= 6 ? 175 : 200;
  const bw = n <= 4 ? 220 : n <= 6 ? 190 : 165;
  const cy = R + 40;
  let svg = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#E2E8F0" stroke-width="10"/>`;
  const pts = spec.steps.map((s, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), a };
  });
  // arrows along the circle
  pts.forEach((p, i) => {
    const a1 = p.a + Math.PI / n - 0.12;
    const a0 = p.a + Math.PI / n - 0.32;
    svg += `<path d="M${cx + R * Math.cos(a0)},${cy + R * Math.sin(a0)} A${R},${R} 0 0 1 ${cx + R * Math.cos(a1)},${cy + R * Math.sin(a1)}" fill="none" stroke="${LINE}" stroke-width="2" marker-end="url(#ah)"/>`;
  });
  spec.steps.forEach((s, i) => {
    const b = boxContent(s.label, s.sub, bw, s.tone || ROTATION[i % ROTATION.length], { titleSize: 14, subSize: 12 });
    svg += drawBox(pts[i].x - bw / 2, pts[i].y - b.h / 2, bw, b);
  });
  if (spec.center) {
    const lines = wrap(spec.center, R * 1.1, 16, true);
    svg += textBlock(lines, cx, cy - ((lines.length - 1) * 20) / 2 + 5, { size: 16, bold: true, fill: INK, lh: 1.25 });
  }
  const y = cy + R + 70;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

function layoutScale(spec) {
  const n = spec.ticks.length;
  const x0 = PAD + 40;
  const x1 = W - PAD - 40;
  const y = 70;
  let svg = '';
  // bands under the axis
  (spec.bands || []).forEach((b, i) => {
    const bx0 = x0 + ((x1 - x0) * b.from) / (n - 1);
    const bx1 = x0 + ((x1 - x0) * b.to) / (n - 1);
    const t = TONES[b.tone || ['green', 'orange', 'red', 'blue'][i % 4]];
    svg += `<rect x="${bx0}" y="${y + 70}" width="${bx1 - bx0}" height="34" rx="8" fill="${t.fill}" stroke="${t.stroke}"/>`;
    svg += textBlock(wrap(b.label, bx1 - bx0 - 12, 12.5), (bx0 + bx1) / 2, y + 91, { size: 12.5, bold: true, fill: t.text });
  });
  svg += `<rect x="${x0}" y="${y - 4}" width="${x1 - x0}" height="8" rx="4" fill="url(#sg)"/>`;
  svg = `<defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stop-color="#FCA5A5"/><stop offset="0.5" stop-color="#FCD34D"/><stop offset="1" stop-color="#86EFAC"/></linearGradient></defs>` + svg;
  if (spec.reverse) svg = svg.replace('stop-color="#FCA5A5"', 'stop-color="#TMP"').replace('stop-color="#86EFAC"', 'stop-color="#FCA5A5"').replace('#TMP', '#86EFAC');
  spec.ticks.forEach((t, i) => {
    const x = x0 + ((x1 - x0) * i) / (n - 1);
    svg += `<circle cx="${x}" cy="${y}" r="9" fill="#FFFFFF" stroke="${TONES.orange.accent}" stroke-width="3"/>`;
    const lw = Math.min(170, (x1 - x0) / Math.max(1, n - 1) + 20);
    svg += textBlock(wrap(t.label, lw, 14, true), x, y - 22, { size: 14, bold: true, fill: INK });
    if (t.sub) svg += textBlock(wrap(t.sub, lw, 12.5), x, y + 30, { size: 12.5, fill: MUTED });
  });
  const yy = y + ((spec.bands || []).length ? 124 : 70);
  const nb = noteBlock(spec.note, yy);
  return { svg: svg + nb.svg, h: yy + nb.h };
}

async function layoutGraph(spec) {
  // Try the requested direction; if it would have to shrink a lot to fit the
  // canvas, try the other one and keep whichever stays more readable.
  if (!spec.__tried) {
    const first = await layoutGraph({ ...spec, __tried: true });
    if (first.scale >= 0.85 || spec.fixedDir) return first;
    const other = await layoutGraph({ ...spec, dir: spec.dir === 'TB' ? 'LR' : 'TB', __tried: true });
    return other.scale > first.scale && other.h < 900 ? other : first;
  }
  const dir = spec.dir === 'TB' ? 'DOWN' : 'RIGHT';
  const maxW = spec.dir === 'TB' ? 300 : 210;
  const nodes = spec.nodes.map((nd, i) => {
    const longest = Math.max(textWidth(nd.label, 15, true), nd.sub ? Math.min(textWidth(nd.sub, 12.5), maxW) : 0);
    const width = Math.max(120, Math.min(maxW, longest + 30));
    const c = boxContent(nd.label, nd.sub, width, nd.tone || (nd.kind === 'decision' ? 'violet' : 'orange'));
    return { id: nd.id, width, height: c.h, c, kind: nd.kind };
  });
  const graph = {
    id: 'root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': dir,
      'elk.spacing.nodeNode': '34',
      'elk.layered.spacing.nodeNodeBetweenLayers': '56',
      'elk.spacing.edgeLabel': '6',
      'elk.edgeRouting': 'ORTHOGONAL',
      'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
      'elk.layered.considerModelOrder.strategy': 'NODES_AND_EDGES',
      'elk.layered.cycleBreaking.strategy': 'MODEL_ORDER',
    },
    children: nodes.map((n) => ({ id: n.id, width: n.width, height: n.height })),
    edges: spec.edges.map((e, i) => ({
      id: `e${i}`,
      sources: [e.from],
      targets: [e.to],
      labels: e.label ? [{ text: e.label, width: textWidth(e.label, 12) + 14, height: 20 }] : [],
    })),
  };
  const out = await new ELK().layout(graph);
  const gw = out.width;
  const gh = out.height;
  const scale = Math.min(1, (W - 2 * PAD) / gw);
  const ox = (W - gw * scale) / 2;
  let svg = `<g transform="translate(${ox.toFixed(1)},4) scale(${scale.toFixed(3)})">`;
  out.edges.forEach((e, i) => {
    const spec_e = spec.edges[i];
    for (const s of e.sections || []) {
      const pts = [s.startPoint, ...(s.bendPoints || []), s.endPoint];
      svg += `<path d="M${pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L')}" fill="none" stroke="${LINE}" stroke-width="1.8"${spec_e.dashed ? ' stroke-dasharray="6 5"' : ''} marker-end="url(#ah)"/>`;
    }
    for (const l of e.labels || []) {
      svg += `<rect x="${l.x}" y="${l.y}" width="${l.width}" height="${l.height}" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/>`;
      svg += textBlock([l.text], l.x + l.width / 2, l.y + 14, { size: 12, fill: MUTED });
    }
  });
  out.children.forEach((c) => {
    const n = nodes.find((x) => x.id === c.id);
    svg += drawBox(c.x, c.y, n.width, n.c, n.height);
  });
  svg += '</g>';
  const y = gh * scale + 24;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h, scale };
}

/** table { columns: [..], rows: [[..], ..], firstColTone?, rowTones?: [] } */
function layoutTable(spec) {
  const cols = spec.columns.length;
  const tw = W - 2 * PAD;
  // column widths proportional to the longest text in each column (bounded)
  const want = spec.columns.map((c, i) =>
    Math.max(textWidth(c, 12.5, true), ...spec.rows.map((r) => Math.min(textWidth(r[i] || '', 13.5, i === 0), 330))) + 28
  );
  const sum = want.reduce((a, b) => a + b, 0);
  const widths = want.map((w) => (w / sum) * tw);
  let svg = '';
  let y = 4;
  const headH = 34;
  svg += `<rect x="${PAD}" y="${y}" width="${tw}" height="${headH}" rx="8" fill="#1F2937"/>`;
  let x = PAD;
  spec.columns.forEach((c, i) => {
    svg += textBlock([c.toUpperCase()], x + 14, y + 22, { size: 12, bold: true, fill: '#F8FAFC', anchor: 'start' });
    x += widths[i];
  });
  y += headH + 4;
  spec.rows.forEach((r, ri) => {
    const cells = r.map((cell, i) => wrap(cell, widths[i] - 28, 13.5, i === 0));
    const h = Math.max(...cells.map((c) => c.length)) * 13.5 * 1.35 + 18;
    const tone = TONES[(spec.rowTones && spec.rowTones[ri]) || spec.firstColTone || ROTATION[ri % ROTATION.length]];
    svg += `<rect x="${PAD}" y="${y}" width="${tw}" height="${h}" rx="6" fill="${ri % 2 ? '#FFFFFF' : '#F8FAFC'}" stroke="#E2E8F0"/>`;
    svg += `<rect x="${PAD}" y="${y}" width="4" height="${h}" rx="2" fill="${tone.accent}"/>`;
    let cx = PAD;
    cells.forEach((lines, i) => {
      // rows are light, so the dark tone (white text) uses near-black for its label
      svg += textBlock(lines, cx + 14, y + 9 + 13.5, { size: 13.5, bold: i === 0, fill: i === 0 ? (tone === TONES.dark ? '#111827' : tone.text) : INK, anchor: 'start', lh: 1.35 });
      cx += widths[i];
    });
    y += h + 4;
  });
  y += 12;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** code { panels: [{ title, tone?, lines: [] }], note? }: side-by-side code/request panels */
function layoutCode(spec) {
  const n = spec.panels.length;
  const gap = 18;
  const pw = (W - 2 * PAD - gap * (n - 1)) / n;
  const size = 12.5;
  const charW = size * 0.6;
  const maxChars = Math.floor((pw - 28) / charW);
  const panels = spec.panels.map((p) => ({
    ...p,
    wrapped: p.lines.flatMap((l) => {
      const out = [];
      let s = l;
      while (s.length > maxChars) {
        out.push(s.slice(0, maxChars));
        s = '  ' + s.slice(maxChars);
      }
      out.push(s);
      return out;
    }),
  }));
  const H = Math.max(...panels.map((p) => 44 + p.wrapped.length * size * 1.5 + 14));
  let svg = '';
  panels.forEach((p, i) => {
    const x = PAD + i * (pw + gap);
    const t = TONES[p.tone || ROTATION[i % ROTATION.length]];
    svg += `<rect x="${x}" y="4" width="${pw}" height="${H}" rx="10" fill="#0F172A" stroke="${t.stroke}" stroke-width="1.5"/>`;
    svg += `<rect x="${x}" y="4" width="${pw}" height="32" rx="10" fill="${t.fill}"/><rect x="${x}" y="26" width="${pw}" height="10" fill="${t.fill}"/>`;
    svg += textBlock([p.title], x + 14, 25, { size: 13, bold: true, fill: t.text, anchor: 'start' });
    p.wrapped.forEach((l, li) => {
      const hl = p.highlight && p.highlight.some((h) => l.includes(h));
      svg += `<text x="${x + 14}" y="${(56 + li * size * 1.5).toFixed(1)}" font-family="Consolas, 'Courier New', monospace" font-size="${size}" fill="${hl ? '#FDBA74' : '#E2E8F0'}" xml:space="preserve">${esc(l)}</text>`;
    });
  });
  const y = H + 22;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** bars { bars: [{ label, value, display?, tone? }], caption?, note? }: horizontal bar chart */
function layoutBars(spec) {
  const labelW = Math.max(...spec.bars.map((b) => textWidth(b.label, 14, true))) + 24;
  const x0 = PAD + labelW;
  const maxW = W - PAD - x0 - 110;
  const max = Math.max(...spec.bars.map((b) => b.value));
  let svg = '';
  let y = 8;
  if (spec.caption) {
    svg += textBlock(wrap(spec.caption, W - 2 * PAD, 13.5), PAD, y + 12, { size: 13.5, fill: MUTED, anchor: 'start' });
    y += 30;
  }
  spec.bars.forEach((b, i) => {
    const t = TONES[b.tone || ROTATION[i % ROTATION.length]];
    const w = Math.max(6, spec.log ? (Math.log10(b.value + 1) / Math.log10(max + 1)) * maxW : (b.value / max) * maxW);
    svg += textBlock([b.label], x0 - 14, y + 23, { size: 14, bold: true, fill: INK, anchor: 'end' });
    svg += `<rect x="${x0}" y="${y + 6}" width="${maxW}" height="26" rx="6" fill="#F1F5F9"/>`;
    svg += `<rect x="${x0}" y="${y + 6}" width="${w}" height="26" rx="6" fill="${t.stroke}"/>`;
    const label = b.display ?? String(b.value);
    const lw = textWidth(label, 14, true);
    if (x0 + w + 10 + lw <= W - PAD) {
      svg += textBlock([label], x0 + w + 10, y + 24, { size: 14, bold: true, fill: t.text, anchor: 'start' });
    } else if (lw + 20 <= w) {
      svg += textBlock([label], x0 + w - 10, y + 24, { size: 14, bold: true, fill: '#FFFFFF', anchor: 'end' });
    } else {
      // too long for either side: put it on its own line under the bar
      svg += textBlock(wrap(label, W - PAD - x0, 13), x0, y + 50, { size: 13, bold: true, fill: t.text, anchor: 'start' });
      y += 20;
    }
    y += 42;
  });
  y += 12;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** ticks { series: [{ label, times: [0..1 positions], sub?, tone? }], axis?, note? }: event timing strips */
function layoutTicks(spec) {
  const labelW = Math.min(280, Math.max(...spec.series.map((s) => textWidth(s.label, 13.5, true))) + 24);
  const x0 = PAD + labelW;
  const x1 = W - PAD;
  let svg = '';
  let y = 8;
  spec.series.forEach((s, i) => {
    const t = TONES[s.tone || ROTATION[i % ROTATION.length]];
    svg += textBlock(wrap(s.label, labelW - 16, 13.5, true), PAD, y + 22, { size: 13.5, bold: true, fill: INK, anchor: 'start' });
    svg += `<line x1="${x0}" y1="${y + 30}" x2="${x1}" y2="${y + 30}" stroke="#CBD5E1" stroke-width="2"/>`;
    for (const p of s.times) {
      const x = x0 + p * (x1 - x0);
      svg += `<rect x="${(x - 2.5).toFixed(1)}" y="${y + 14}" width="5" height="32" rx="2" fill="${t.accent}"/>`;
    }
    if (s.sub) svg += textBlock([s.sub], x0, y + 66, { size: 12.5, fill: t.text, anchor: 'start' });
    y += 82;
  });
  if (spec.axis) {
    svg += textBlock([spec.axis], x1, y + 4, { size: 12, fill: MUTED, anchor: 'end' });
    y += 14;
  }
  y += 10;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** segments { segments: [{ label, sub?, top?, w?, tone? }], note? }: a horizontal layout bar (disk, packet, memory) */
function layoutSegments(spec) {
  const tw = W - 2 * PAD;
  const totalW = spec.segments.reduce((s, x) => s + (x.w || 1), 0);
  let svg = '';
  let x = PAD;
  const y = 30;
  const h = 96;
  spec.segments.forEach((sg, i) => {
    const w = (tw * (sg.w || 1)) / totalW;
    const t = TONES[sg.tone || ROTATION[i % ROTATION.length]];
    svg += `<rect x="${x + 1}" y="${y}" width="${w - 2}" height="${h}" rx="6" fill="${t.fill}" stroke="${t.stroke}" stroke-width="1.5"/>`;
    const tl = wrap(sg.label, w - 12, 13.5, true);
    const sl = sg.sub ? wrap(sg.sub, w - 12, 11.5) : [];
    const block = tl.length * 17 + (sl.length ? 4 + sl.length * 14 : 0);
    const top = y + (h - block) / 2 + 12;
    svg += textBlock(tl, x + w / 2, top, { size: 13.5, bold: true, fill: t.text, lh: 1.25 });
    if (sl.length) svg += textBlock(sl, x + w / 2, top + tl.length * 17 + 4, { size: 11.5, fill: MUTED, lh: 1.2 });
    if (sg.top) svg += textBlock(wrap(sg.top, w, 11.5), x + w / 2, y - 10, { size: 11.5, bold: true, fill: '#94A3B8' });
    x += w;
  });
  const yy = y + h + 22;
  const nb = noteBlock(spec.note, yy);
  return { svg: svg + nb.svg, h: yy + nb.h };
}

/**
 * tree { root: {label, sub?, tone?}, children: [{label, sub?, tone?}], into?: bool, edgeLabel?, note? }
 * One node fanning out to children in a row (or, with into: true, children feeding into the root).
 */
function layoutTree(spec) {
  const kids = spec.children;
  const perRow = Math.min(kids.length, spec.perRow || (kids.length <= 5 ? kids.length : Math.ceil(kids.length / 2)));
  const gap = 16;
  const cw = (W - 2 * PAD - gap * (perRow - 1)) / perRow;
  const rows = [];
  for (let i = 0; i < kids.length; i += perRow) rows.push(kids.slice(i, i + perRow));
  const rootW = Math.min(520, W - 2 * PAD);
  const rootC = boxContent(spec.root.label, spec.root.sub, rootW, spec.root.tone || 'dark');
  const kidC = kids.map((k, i) => boxContent(k.label, k.sub, cw, k.tone || ROTATION[i % ROTATION.length], { titleSize: 14, subSize: 12 }));
  let svg = '';
  let y = 6;
  const busGap = 46;
  const drawRoot = (yy) => drawBox((W - rootW) / 2, yy, rootW, rootC);
  const rowHeights = rows.map((r, ri) => Math.max(...r.map((_, ci) => kidC[ri * perRow + ci].h)));
  const placeRow = (ri, yy) => {
    const r = rows[ri];
    const total = r.length * cw + (r.length - 1) * gap;
    const x0 = (W - total) / 2;
    const xs = [];
    r.forEach((_, ci) => {
      const x = x0 + ci * (cw + gap);
      svg += drawBox(x, yy, cw, kidC[ri * perRow + ci], rowHeights[ri]);
      xs.push(x + cw / 2);
    });
    return xs;
  };
  if (!spec.into) {
    svg += drawRoot(y);
    const rootBottom = y + rootC.h;
    y = rootBottom + busGap;
    let prevBus = rootBottom;
    rows.forEach((r, ri) => {
      const xs = placeRow(ri, y);
      const busY = y - busGap / 2;
      // one unbroken trunk from the root (or the previous bus) so later rows read as siblings, not
      // grandchildren; only possible when the row above has an even count (a gap at the centre)
      const throughGap = ri === 0 || rows[ri - 1].length % 2 === 0;
      const top = throughGap ? prevBus : busY - busGap / 2;
      svg += `<line x1="${W / 2}" y1="${top}" x2="${W / 2}" y2="${busY}" stroke="${LINE}" stroke-width="1.8"/>`;
      prevBus = busY;
      svg += `<line x1="${Math.min(...xs, W / 2)}" y1="${busY}" x2="${Math.max(...xs, W / 2)}" y2="${busY}" stroke="${LINE}" stroke-width="1.8"/>`;
      xs.forEach((x) => (svg += line(x, busY, x, y - 3)));
      y += rowHeights[ri] + busGap;
    });
    y -= busGap - 16;
  } else {
    let ys = [];
    rows.forEach((r, ri) => {
      ys.push(y);
      placeRow(ri, y);
      y += rowHeights[ri] + (ri < rows.length - 1 ? 16 : 0);
    });
    const lastXs = (() => {
      const r = rows[rows.length - 1];
      const total = r.length * cw + (r.length - 1) * gap;
      const x0 = (W - total) / 2;
      return r.map((_, ci) => x0 + ci * (cw + gap) + cw / 2);
    })();
    const busY = y + busGap / 2;
    lastXs.forEach((x) => (svg += `<line x1="${x}" y1="${y}" x2="${x}" y2="${busY}" stroke="${LINE}" stroke-width="1.8"/>`));
    svg += `<line x1="${Math.min(...lastXs)}" y1="${busY}" x2="${Math.max(...lastXs)}" y2="${busY}" stroke="${LINE}" stroke-width="1.8"/>`;
    y += busGap;
    svg += line(W / 2, busY, W / 2, y - 3);
    if (spec.edgeLabel) {
      const lw = textWidth(spec.edgeLabel, 12) + 16;
      svg += `<rect x="${W / 2 + 8}" y="${busY + 2}" width="${lw}" height="20" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/>`;
      svg += textBlock([spec.edgeLabel], W / 2 + 8 + lw / 2, busY + 16, { size: 12, fill: MUTED });
    }
    svg += drawRoot(y);
    y += rootC.h + 16;
  }
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** grid { tiles: [{ label, sub?, tone?, tag? }], cols?, note? }: equal tiles in a grid */
function layoutGrid(spec) {
  const cols = spec.cols || Math.min(4, spec.tiles.length);
  const gap = 16;
  const tw = (W - 2 * PAD - gap * (cols - 1)) / cols;
  const hasTags = spec.tiles.some((t) => t.tag);
  const cs = spec.tiles.map((t, i) => boxContent(t.label, t.sub, tw, t.tone || ROTATION[i % ROTATION.length], { titleSize: 16, subSize: 13 }));
  let svg = '';
  let y = 6;
  for (let r = 0; r * cols < spec.tiles.length; r++) {
    const row = cs.slice(r * cols, r * cols + cols);
    const h = Math.max(...row.map((c) => c.h)) + 8;
    const tagH = hasTags ? 26 : 0;
    row.forEach((c, i) => {
      const x = PAD + i * (tw + gap);
      const tag = spec.tiles[r * cols + i].tag;
      if (tag) {
        // badge sits above the tile so it never overlaps the title
        svg += `<rect x="${x}" y="${y}" width="${textWidth(tag, 12, true) + 18}" height="20" rx="6" fill="${c.t.accent}"/>`;
        svg += textBlock([tag], x + 9, y + 14.5, { size: 12, bold: true, fill: '#FFFFFF', anchor: 'start' });
      }
      svg += drawBox(x, y + tagH, tw, c, h);
    });
    y += tagH + h + gap;
  }
  y += 4;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

/** sequence { actors: [{ id, label, sub?, tone? }], messages: [{ from, to, label, dashed? }], note? } */
function layoutSequence(spec) {
  const n = spec.actors.length;
  const colW = (W - 2 * PAD) / n;
  const xs = spec.actors.map((_, i) => PAD + colW * (i + 0.5));
  const aw = Math.min(220, colW - 20);
  const heads = spec.actors.map((a, i) => boxContent(a.label, a.sub, aw, a.tone || ['blue', 'dark', 'orange', 'violet'][i % 4]));
  const hh = Math.max(...heads.map((h) => h.h));
  let svg = '';
  const y0 = 6;
  const step = 54;
  const yEnd = y0 + hh + 24 + spec.messages.length * step;
  spec.actors.forEach((a, i) => {
    svg += `<line x1="${xs[i]}" y1="${y0 + hh}" x2="${xs[i]}" y2="${yEnd}" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4"/>`;
    svg += drawBox(xs[i] - aw / 2, y0, aw, heads[i], hh);
  });
  spec.messages.forEach((m, i) => {
    const fi = spec.actors.findIndex((a) => a.id === m.from);
    const ti = spec.actors.findIndex((a) => a.id === m.to);
    const y = y0 + hh + 34 + i * step;
    const dir = ti > fi ? 1 : -1;
    svg += line(xs[fi] + dir * 4, y, xs[ti] - dir * 6, y, { dashed: m.dashed });
    const mid = (xs[fi] + xs[ti]) / 2;
    const lab = wrap(m.label, Math.abs(xs[ti] - xs[fi]) - 20, 12.5);
    svg += textBlock(lab, mid, y - 8 - (lab.length - 1) * 15, { size: 12.5, fill: INK, lh: 1.2 });
    svg += `<circle cx="${xs[fi]}" cy="${y}" r="9" fill="${TONES.orange.accent}"/>` + textBlock([String(i + 1)], xs[fi], y + 4, { size: 11, bold: true, fill: '#FFFFFF' });
  });
  const y = yEnd + 18;
  const nb = noteBlock(spec.note, y);
  return { svg: svg + nb.svg, h: y + nb.h };
}

export async function renderFigure(fig, spec) {
  const layouts = { sequence: layoutSequence, grid: layoutGrid, tree: layoutTree, segments: layoutSegments, bars: layoutBars, ticks: layoutTicks, table: layoutTable, code: layoutCode, flow: layoutFlow, rows: layoutRows, compare: layoutCompare, layers: layoutLayers, cycle: layoutCycle, scale: layoutScale, graph: layoutGraph };
  const fn = layouts[spec.type];
  if (!fn) throw new Error(`${fig.code}: unknown spec type ${spec.type}`);
  const body = await fn(spec);
  return frame(fig.code, spec.title || fig.title, body.svg, body.h, fig.alt);
}
