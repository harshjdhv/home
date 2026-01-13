# Engineer's Notebook: Design System & Philosophy

## 1. Conceptual Approach

**"The Calm Technician"**

The site is not a performance; it is a reference. It treats the visitor not as a lead to be converted, but as a peer to be informed. The core metric is **Information Density without Cognitive Load**.

* **Metaphor**: A well-maintained lab notebook. Clean, dated, structured, legible.
* **Vibe**: archival, precise, monochrome, thoughtful.
* **Anti-patterns**: Hero images, scroll-triggered animations (unless explaining a technical concept), "Let's connect!" buttons, gradient text.

## 2. Reading Flow & Structure

The site mimics a linear document (like an RFC or a technical spec).

### **I. Header (The Meta-data)**

Top-left aligned. Minimal.

* `Harsh Jadhav` (H1, Serif)
* `Software Engineer` (Mono, smaller)
* `Human-readable status` (e.g., "Focus: Scalable Systems. Location: Bangalore. Status: Building X.")

### **II. The "Abstract" (Introduction)**

A single paragraph. Serif. High readability.

* Who you are (factual).
* What you solve.
* What you believe (one sentence).

### **III. Engineering Logs (Selected Work)**

Instead of "Case Studies", we use "Logs".

* List layout.
* Clicking expands details inline or navigates to a text-heavy sub-page.
* **Format**:
  * `2024` (Mono, gray)
  * `Project Name` (Medium weight)
  * `Problem & Solution` (One tight sentence)
  * `Stack` (Small mono tags, plain text)

### **IV. Thinking (Writing/Notes)**

Titles of technical articles.

* "On Managing State in Large Distributed Systems"
* "Why I Chose Rust for X"
* *Date aligned right.*

### **V. Index (Footer)**

A footer that acts as a directory.

* Plain text links: `Email`, `GitHub`, `Read.cv` (maybe).
* No icons if possible, or very minimal SVG outlines.

## 3. Layout Decisions

* **Grid**: Single column text column, max-width `65ch` (optimal for reading). Centered or left-aligned with ample white space on the left.
* **Alignment**: Strong left alignment. No centered text blocks.
* **Navigation**: No sticky navbar. No hamburger menu. Simple in-page links if needed, or just browser back button. The site is shallow.

## 4. Design Language

### **Typography**

The hierarchy relies on *typeface* rather than *size* or *color*.

* **Primary (Body & Headings)**: `Geist` or `Inter` (Sans). Clean, neutral.
* **Secondary (Meta-data, Code, Dates)**: `JetBrains Mono` or `Geist Mono`.
* **Accent (Name/Title - Optional)**: `Instrument Serif` (Italic) for a touch of "editorial" or "classic" feel, strictly used for the Title or special emphasis.

### **Spacing Rules (Tailwind)**

* **Base Unit**: 4px (`p-1`).
* **Section Gap**: `gap-16` or `gap-24`. Large breathing room.
* **Line Height**: Loose. `leading-relaxed` for body.
* **Paragraph Spacing**: `mb-6`.

### **Colors (Theme)**

* **Background**: `#FAFAFA` (zinc-50) or a very subtle warm gray (paper).
* **Text**: `#171717` (neutral-900) - avoiding pure black usually, but for high contrast docs, near-black is good.
* **Muted**: `#737373` (neutral-500) for meta-data.
* **Accent**: No color accent. Use *weight* (bold) or *style* (italic) as the accent.
* **Links**: Underlined, same color as text, or subtle dark blue/gray interaction state. No raw blue links.

## 5. Implementation Strategy (Tailwind)

* Remove all `flex-col items-center`.
* Use `max-w-2xl mx-auto` or `ml-[10vw] max-w-2xl`.
* Replace standard `gray-100` backgrounds with specific warm tones if aiming for "Paper".
* **Classes to abuse**: `prose`, `prose-neutral`, `font-mono`, `text-sm`, `tracking-tight`.

---
*Created by Antigravity*
