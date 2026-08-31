import { useEffect, useRef, useState } from "react";
import { CONSTRUCTION_COLORS } from "../../config/theme";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const WORDS = [
  { text: "BUILD FAST" },
  { text: "BUILD SMART" },
  { text: "BUILD WITH ", highlight: "KREEDUM" },
];

const WORD_DURATION_MS = 1500;
const FINAL_WORD_HOLD_MS = 2200;
const SESSION_KEY = "kc-intro-shown";

/**
 * Full-screen brand statement shown once per browser session, the first time
 * someone lands on the Construction homepage. The main site is already
 * mounted underneath (see ConstructionHomePage) so the exit is a continuous
 * slide-up reveal rather than a hard swap.
 *
 * onDone() fires once the overlay has fully exited (or is skipped/repeated),
 * so the parent can stop rendering it.
 *
 * Note: `alreadyShown` is captured once via a lazy useState initializer
 * (not re-read inside the effect) and the sessionStorage flag is only
 * written on actual completion — this keeps the sequence correct even
 * under React 18 Strict Mode's dev-only mount→cleanup→mount cycle, which
 * would otherwise cancel the first timer batch and, if the flag had
 * already been written, cause the second pass to see "already shown" and
 * skip the intro instantly.
 */
export default function IntroSequence({ onDone }) {
  const reducedMotion = usePrefersReducedMotion();
  const [alreadyShown] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1"
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timers = useRef([]);
  const finished = useRef(false);

  useEffect(() => {
    if (alreadyShown) {
      finish();
      return;
    }

    if (reducedMotion) {
      timers.current.push(setTimeout(() => setExiting(true), 350));
      timers.current.push(setTimeout(() => finish(), 350 + 550));
      return () => timers.current.forEach(clearTimeout);
    }

    WORDS.forEach((_, i) => {
      const t = setTimeout(() => setWordIndex(i), i * WORD_DURATION_MS);
      timers.current.push(t);
    });
    const exitDelay = (WORDS.length - 1) * WORD_DURATION_MS + FINAL_WORD_HOLD_MS;
    timers.current.push(setTimeout(() => setExiting(true), exitDelay));
    timers.current.push(setTimeout(() => finish(), exitDelay + 750));

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    if (finished.current) return;
    finished.current = true;
    if (typeof window !== "undefined") sessionStorage.setItem(SESSION_KEY, "1");
    onDone();
  }

  function handleSkip() {
    if (finished.current || exiting) return;
    timers.current.forEach(clearTimeout);
    setExiting(true);
    setTimeout(finish, reducedMotion ? 0 : 550);
  }

  if (alreadyShown) return null;

  const word = WORDS[wordIndex];

  return (
    <div
      className={`kc-intro ${exiting ? "kc-intro-exit" : ""}`}
      style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}
      role="presentation"
    >
      <div className="kc-intro-inner">
        {reducedMotion ? (
          <span className="kc-intro-word font-display" style={{ color: CONSTRUCTION_COLORS.ink }}>
            BUILD WITH <span style={{ color: CONSTRUCTION_COLORS.orange }}>KREEDUM</span>
          </span>
        ) : (
          <span
            key={wordIndex}
            className="kc-intro-word kc-intro-word-in font-display"
            style={{ color: CONSTRUCTION_COLORS.ink }}
          >
            {word.text}
            {word.highlight && (
              <span style={{ color: CONSTRUCTION_COLORS.orange }}>{word.highlight}</span>
            )}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={handleSkip}
        className="kc-intro-hint kc-plate kc-focus"
        style={{ color: CONSTRUCTION_COLORS.steel }}
      >
        Skip intro
      </button>
    </div>
  );
}
