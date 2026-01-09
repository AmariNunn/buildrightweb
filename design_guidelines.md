# Build Right Web - Design Guidelines

## Design Approach: Tech Futuristic Agency

**Reference Inspiration**: Linear (modern tech aesthetic) + Stripe (refined minimalism) + Vercel (futuristic polish)

**Core Principle**: Create a cutting-edge, visually striking experience that demonstrates technical excellence through design. Bold typography, strategic animations, and clean geometric layouts convey innovation and capability.

---

## Typography System

**Primary Font**: Inter or Space Grotesk (via Google Fonts CDN)
- Hero Headlines: 4xl-7xl, font-bold, tracking-tight, leading-none
- Section Headers: 3xl-5xl, font-bold
- Subheadings: xl-2xl, font-semibold
- Body Text: base-lg, font-normal, leading-relaxed
- Captions/Labels: sm-base, font-medium, uppercase tracking-wide for tech aesthetic

**Accent Font**: JetBrains Mono for technical elements, code snippets, stats

---

## Layout & Spacing System

**Tailwind Spacing Units**: 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-8 to p-12
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Element gaps: gap-6 to gap-12
- Container: max-w-7xl with px-6 to px-8

**Grid Strategy**:
- Portfolio showcase: Masonry/bento-box layout (mixed sizes)
- Services: 3-column grid on desktop, stack on mobile
- Testimonials/Stats: 2-4 column responsive grid

---

## Page Structure

### 1. Hero Section (80vh)
Full-bleed geometric background with subtle grid pattern overlay. Large hero image showing futuristic workspace/tech aesthetic (abstract/conceptual, not stock photography).

**Layout**: 
- Left-aligned headline + subheadline
- Dual CTA buttons with glass-morphism effect (blurred backgrounds)
- Floating stats cards (projects completed, clients served)
- Animated grid/particle effects in background (subtle)

### 2. Services Showcase (2 sections)
**Web Development Section**: 
- 3-column card grid featuring website types (E-commerce, SaaS, Corporate, Portfolio)
- Each card: icon, title, brief description, "Learn More" link
- Staggered reveal on scroll

**Social Media Management Section**:
- Split layout: Left side features list with checkmarks, right side mockup of social dashboard
- Highlight platforms supported (Instagram, LinkedIn, Twitter, etc.)

### 3. Portfolio/Example Sites
**Bento Box Layout**: 
- Asymmetric grid showcasing 6-8 example projects
- Mix of full-width, half-width, and quarter-width cards
- Each card: project thumbnail, client name, project type tag
- Hover reveals brief description + "View Case Study" link
- Use varied aspect ratios for visual interest

### 4. Process Section
**Timeline/Steps Layout**:
- Horizontal process flow (4-5 steps)
- Connected with animated line/path
- Each step: number, title, description
- Diagonal background treatment

### 5. Testimonials
- 2-column grid, 4 total testimonials
- Each includes: quote, client name, company, headshot placeholder
- Floating card design with subtle shadow

### 6. CTA Section
- Full-width with gradient overlay on background image
- Centered headline "Ready to Build Right?"
- Newsletter signup OR consultation booking form (email + message)
- Social proof badges (partnerships, certifications)

### 7. Footer
**Rich Footer Layout**:
- 4-column grid: Company Info | Services | Resources | Connect
- Newsletter subscription box
- Social media icons (LinkedIn, Twitter, Instagram, Dribbble, GitHub)
- Trust badges (payment methods, security certifications if applicable)
- Copyright + legal links

---

## Component Library

**Navigation**: 
- Sticky header with blur effect on scroll
- Logo left, nav links center, "Get Started" CTA button right
- Mobile: Hamburger menu with full-screen overlay

**Cards**: 
- Elevated cards with border accent (1px subtle glow effect)
- Hover state: slight lift (translate-y) + shadow increase
- Padding: p-8 standard

**Buttons**:
- Primary: Solid with subtle gradient
- Secondary: Outlined/ghost style
- Glass-morphism buttons on images: backdrop-blur with semi-transparent background

**Form Inputs**:
- Borderless with bottom border accent
- Focus state: border color shift + subtle glow
- Placeholder text in lighter weight

**Stats/Metrics Cards**:
- Large number display (JetBrains Mono)
- Label below in uppercase
- Floating/elevated appearance

---

## Animation Strategy

**Hero Animations** (Budget Focus):
- Typewriter effect on headline OR fade-in with stagger
- Geometric shapes subtle float/rotation
- Grid background subtle pulsing glow

**Scroll Animations** (Minimal):
- Section headers: Fade up on enter viewport
- Cards/Grid items: Stagger fade-in (0.1s delay between items)
- Process timeline: Draw line animation as user scrolls

**Interaction Animations**:
- Card hover: Smooth transform + shadow
- Button hover: Scale 1.02 + brightness increase
- NO complex page transitions or excessive motion

---

## Images Section

**Hero Image**: 
- Abstract tech/futuristic workspace or digital interface visualization
- Full-bleed background with gradient overlay (dark to transparent)
- Placement: Background of hero section, anchored right or center

**Portfolio Thumbnails**: 
- 6-8 website mockup screenshots in bento grid
- Varied sizes (some landscape, some portrait, some square)
- High-quality, professional captures of example work

**Social Media Section**: 
- Dashboard mockup or analytics screenshot showing social media management interface
- Placement: Right side of split layout

**Process Section Icons**: 
- Use Heroicons for step illustrations (consistent style)

**Testimonial Headshots**: 
- Circular avatars, 60x60px
- Professional placeholder or client photos

**Footer Background** (Optional): 
- Subtle geometric pattern or gradient

---

## Icons
**Library**: Heroicons (via CDN)
- Consistent outline style throughout
- Size: 24px (w-6 h-6) standard, 32px (w-8 h-8) for feature highlights

---

**Design Philosophy**: Every element should reinforce technical expertise and modern innovation. Clean, bold, futuristic—demonstrating "we build right" through exceptional design execution.