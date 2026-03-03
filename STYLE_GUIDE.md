# KeepYourSeed (Web Landing Page) — Style & Tone Guidelines

> **Role of this document**: Centralized reference for the design, visual identity, and user experience of the KeepYourSeed web landing page. AI assistants should read this file to ensure any newly generated content or code perfectly matches the project's specific aesthetic and tone.

## 1. 🧬 Project DNA & Vision
**KeepYourSeed** is a voice-only diary app. Users plant a "seed" (a voice recording) every day to cultivate a garden of memories.
- **Core Philosophy**: Voice only. Radical simplicity. Benevolent (no punitive streaks). Positive nostalgia.
- **Metaphor**: The "Seed" and the "Garden". Grounded, organic, but subtle (not childish).
- **Target Audience**: Young adults (18-28 years old). Digital natives.
- **Tone of Voice**: Direct, simple, warm, and inviting. Never aggressive or guilt-tripping. Use "vous" (or "tu" in the app context, but keep landing page professional yet accessible).

### Core Features & Deep Intent
The application is built around two foundational pillars that dictate its style and technical approach:

1. **Seamless Capture & Local-First Philosophy**
   - **Feature**: Real-time voice recording on both Mobile and Web. The recording is saved *locally* first (allowing immediate consultation) before being synchronized to a Supabase database.
   - **Technical & UX Intent**: This was the most complex phase of the project, requiring deep research into web audio recording and file formatting. The design must reflect this robustness and speed. The interface must feel instantaneous and reliable, bridging the gap between local storage and cloud sync without friction.

2. **"Pensée du Passé" (Past Thought) — Cultivating Gratitude**
   - **Feature**: A daily memory from the past, surfaced on the home screen and accessible via a specific user interaction (long press/hold).
   - **Psychological Intent**: This is the emotional core of the app. It aims to put the user back in the exact state of mind they were in when they recorded the message. It fosters gratitude, helping users realize they have lived meaningful moments despite the blur of daily life. It provides a mirror to view personal evolution—showing the journey traversed and offering direct feedback on how their mentality has changed over time. The design here must be intimate, rewarding, and slightly mysterious to encourage interaction.

## 2. 🎨 Visual Identity: "Bloc-Notes Brut" (Raw Notepad)
The aesthetic is inspired by minimalist note-taking apps (iOS Notes, Notion in simple mode). It must feel **square, simple, and earthy**. It's raw and sincere, like opening a kraft paper notebook.

### 🚫 Strict Anti-Patterns (NEVER DO THIS)
- ❌ **No drop shadows**: Do not use `shadow-*` utility classes. Use borders to separate elements (`border border-seed-border`).
- ❌ **No gradients**: Use solid, flat colors only.
- ❌ **No heavy rounded corners**: Avoid `rounded-xl`, `rounded-full` (except for specific buttons or floating icons). Use the custom `rounded-seed` token.

### ✅ Core Principles
- **Flat Design**: Elevations are created by borders, not shadows.
- **Generous Spacing**: Keep the layout airy and breathable.
- **Outline Icons**: Use `lucide-react` icons with a thin/outline style.

## 3. 📐 Design Tokens (Tailwind CSS)

### Typography
- **Primary Font**: `Outfit` (used for everything: headings, body, buttons).
- **Usage**: Variable weights (Light for subtle data, Regular for body, SemiBold/ExtraBold for headings).

### Color Palette (`seed-*` namespace)
The colors are anchored in earthy, organic tones (brown, beige, sand) to reflect the "Seed/Nature" metaphor.

| Token | Hex | Usage |
|-------|-----|-------|
| `seed-primary` | `#78350F` | Main Brown. Call-to-actions, active elements, primary icons. |
| `seed-primary-light` | `#A16207` | Soft Brown. Hover states for primary buttons. |
| `seed-secondary` | `#D4A574` | Sand Beige. Accents, secondary labels. |
| `seed-bg` | `#FAF7F2` | Off-White. Main application/website background. |
| `seed-card` | `#F5F0E8` | Pale Beige. Background for cards and secondary zones. |
| `seed-text` | `#292524` | Very Dark Brown (almost black). Main text color. |
| `seed-text-muted` | `#78716C` | Grey-Brown. Secondary text, descriptions, inactive states. |
| `seed-accent` | `#D97706` | Golden Amber. Special highlights, "Pensée du Passé" moments. |
| `seed-border` | `#E7E0D3` | Light Beige/Grey. Borders for cards and dividers. |

*Note: These are defined as CSS variables in `globals.css` and extended in `tailwind.config.ts` (or `@theme` inline).*

### Border Radius
- `rounded-seed`: **6px**. Used for cards, buttons, and input fields to maintain the slightly angular "notepad" look.

## 4. 🧩 Component Implementation Guidelines

### Buttons (CTAs)
- **Primary**: `bg-seed-primary text-seed-bg rounded-seed hover:bg-seed-primary-light transition-colors`
- **Secondary (Outline)**: `border-2 border-seed-border bg-seed-bg text-seed-text rounded-seed hover:border-seed-primary hover:bg-seed-card transition-colors`

### Cards & Containers
- Must use `bg-seed-card border border-seed-border rounded-seed`. Never use shadows.

### Icons
- Import from `lucide-react`. Color them using text utilities (e.g., `text-seed-primary`). Use standard sizes (`w-6 h-6`, etc.).
- For the app logo, use the custom `<SeedLogo />` component rather than standard icons.

## 5. 💡 Context for Future AI Generation
When asked to add a new section, component, or page:
1. **Check colors**: Ensure you are ONLY using the `seed-*` palette.
2. **Check borders/shadows**: Ensure zero shadows (`shadow-md`, etc.) are added. Use borders.
3. **Tone check**: Ensure the copy is concise, warm, and highlights the local-first, privacy-focused, and voice-only nature of the app.
