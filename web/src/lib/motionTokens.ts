/**
 * Emil Kowalski & Material 3 / SwiftUI Calibrated Motion Tokens
 * Grounded in `emilkowalski-motion` and `craft/animation-discipline.md`.
 * Rule: Never animate layout properties (width, height, top, left).
 * Rule: Use curves for opacity/color; use springs for physical position/scale.
 */

export const motionTokens = {
  duration: {
    instant: 0.1,      // 100ms - Instant tactile press / hover
    fast: 0.16,        // 160ms - Default state confirmation / exit
    normal: 0.24,      // 240ms - Entering drawers, modals, swatch panels
    slow: 0.42,        // 420ms - Cross-surface morphs, architectural reveals
  },
  easing: {
    // Front-loaded Material 3 / Emil Kowalski standard curve
    out: [0.2, 0, 0, 1] as [number, number, number, number],
    // Smooth architectural entrance curve
    smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
    // Crisp exit curve (faster, quieter than enter)
    exit: [0.4, 0, 1, 1] as [number, number, number, number],
  },
  spring: {
    // Tactile button / swatch response
    snappy: { type: "spring" as const, stiffness: 420, damping: 32, mass: 0.8 },
    // Physical drawer & comparison curtain physics
    workbench: { type: "spring" as const, stiffness: 280, damping: 28, mass: 1 },
  },
  distance: {
    xs: 4,
    sm: 8,
    md: 14,
    lg: 22,
  },
};
