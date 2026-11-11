/**
 * Emil Kowalski & Motion Architect Calibrated Motion System
 * Grounded in `motion-architect` (`references/motion-principles.md`, `craft/standards.md`)
 * and `emilkowalski-motion`.
 *
 * Rules:
 * - Never animate layout properties (width, height, top, left) or use `transition: all`.
 * - Never scale from 0; start from 0.94–0.97 with opacity + subtle translateY + blur.
 * - Exits are ~70% of enter duration.
 * - Use tabular-nums on all animated counters and telemetry.
 */

export const motionTokens = {
  duration: {
    instant: 0.12,     // 120ms - Instant tactile press / micro chip
    fast: 0.18,        // 180ms - Fast UI exit / dropdown / tooltip
    normal: 0.26,      // 260ms - Standard UI enter (under 300ms ceiling)
    slow: 0.48,        // 480ms - Cross-surface morphs, architectural reveals
    editorial: 0.65,   // 650ms - Hero & storyboard stage transitions
  },
  easing: {
    // Motion Architect strong ease-out for responsive entrances
    out: [0.23, 1, 0.32, 1] as [number, number, number, number],
    // Emil Kowalski smooth architectural curve
    smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
    // On-screen morphing & camera movement
    inOut: [0.77, 0, 0.175, 1] as [number, number, number, number],
    // iOS / Vaul drawer curve
    drawer: [0.32, 0.72, 0, 1] as [number, number, number, number],
    // Crisp exit curve (faster, quieter than enter)
    exit: [0.4, 0, 1, 1] as [number, number, number, number],
  },
  spring: {
    // Smooth spring without bounce (default for serious architectural UI)
    smooth: { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.9 },
    // Snappy spring for cards, shared-layout tabs, and tactile buttons (minimal bounce)
    snappy: { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.8 },
    // Physical drawer & comparison curtain physics
    workbench: { type: "spring" as const, stiffness: 280, damping: 28, mass: 1 },
  },
  distance: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  presets: {
    enterStyle: {
      initial: { opacity: 0, y: 18, scale: 0.96, filter: "blur(4px)" },
      animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      exit: { opacity: 0, y: -10, scale: 0.98, filter: "blur(2px)" },
    },
    cardHover: {
      y: -3,
      scale: 1.005,
    },
  },
};
