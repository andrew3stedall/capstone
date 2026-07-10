"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type View = "overview" | "learn" | "practice" | "mock" | "tools" | "progress";

type Topic = {
  title: string;
  range: string;
  description: string;
  progress: number;
  lessons: number;
  critical?: boolean;
  accent: string;
};

type Question = {
  topic: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  critical?: boolean;
};

const navItems: { id: View; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "⌂" },
  { id: "learn", label: "Learn", icon: "▤" },
  { id: "practice", label: "Practice", icon: "✎" },
  { id: "mock", label: "Mock exam", icon: "✓" },
  { id: "tools", label: "Calculators", icon: "∑" },
  { id: "progress", label: "Progress", icon: "↗" },
];

const topics: Topic[] = [
  {
    title: "Safety & electrical risk",
    range: "EPC 1–4",
    description: "WHS duties, risk controls, electrical rescue, safe tools and work practices.",
    progress: 88,
    lessons: 9,
    critical: true,
    accent: "#ef5a24",
  },
  {
    title: "Electrical fundamentals",
    range: "EPC 5–10",
    description: "DC and AC theory, Ohm’s law, reactance, impedance and three-phase quantities.",
    progress: 76,
    lessons: 12,
    critical: true,
    accent: "#1f7762",
  },
  {
    title: "Wiring rules & design",
    range: "EPC 11–15",
    description: "Fundamental safety principles, diagrams, controls, maximum demand and cable selection.",
    progress: 61,
    lessons: 14,
    critical: true,
    accent: "#ef5a24",
  },
  {
    title: "Energy systems",
    range: "EPC 16–20",
    description: "Electromagnetism, three-phase systems, power factor, renewables, storage and EV charging.",
    progress: 52,
    lessons: 11,
    critical: true,
    accent: "#517f72",
  },
  {
    title: "Conductors & circuits",
    range: "EPC 21–23",
    description: "Aerial and underground wiring, conductor construction, current capacity and protection.",
    progress: 69,
    lessons: 8,
    critical: true,
    accent: "#d9912b",
  },
  {
    title: "Switchgear & control gear",
    range: "EPC 24–27",
    description: "Protection, discrimination, RCDs, overcurrent devices, control and switching equipment.",
    progress: 64,
    lessons: 10,
    critical: true,
    accent: "#ef5a24",
  },
  {
    title: "Accessories & equipment",
    range: "EPC 28–31",
    description: "Selection, installation, IP ratings, lighting equipment and appliance requirements.",
    progress: 81,
    lessons: 8,
    accent: "#6d8f7e",
  },
  {
    title: "Earthing & MEN",
    range: "EPC 32–33",
    description: "Earthing systems, MEN arrangements, fault paths, loop impedance and verification.",
    progress: 58,
    lessons: 9,
    critical: true,
    accent: "#ef5a24",
  },
  {
    title: "Motors & transformers",
    range: "EPC 34–38",
    description: "Motor principles, starters, protection, diagnostics and transformer safety.",
    progress: 74,
    lessons: 13,
    critical: true,
    accent: "#527c6c",
  },
  {
    title: "Isolation, testing & faults",
    range: "EPC 39–42",
    description: "Safe isolation, mandatory verification, fault finding and commissioning.",
    progress: 42,
    lessons: 15,
    critical: true,
    accent: "#ef5a24",
  },
  {
    title: "Specialist areas & HV awareness",
    range: "EPC 43–48",
    description: "Hazardous and special installations, wet areas, construction sites and HV risks.",
    progress: 47,
    lessons: 12,
    critical: true,
    accent: "#d9912b",
  },
];

const questions: Question[] = [
  {
    topic: "Isolation & testing",
    critical: true,
    prompt: "Before working on a final subcircuit, what is the best description of effective isolation?",
    options: [
      "Switch it off at the nearest wall switch and begin work",
      "Identify every source, isolate, secure against reconnection and prove de-energised with a verified tester",
      "Remove the active conductor and leave the neutral connected",
      "Ask another worker whether the circuit is off",
    ],
    answer: 1,
    explanation:
      "Effective isolation is a controlled process: identify all possible sources, isolate them, lock and tag where required, and confirm the conductors are de-energised using suitable test equipment that is verified before and after the test.",
  },
  {
    topic: "Verification",
    critical: true,
    prompt: "Why are de-energised tests normally completed before energised verification tests?",
    options: [
      "They make the installation consume less power",
      "They establish fundamental safety and connection integrity before voltage is introduced",
      "They remove the need for a visual inspection",
      "They are only required for three-phase installations",
    ],
    answer: 1,
    explanation:
      "Visual inspection and appropriate de-energised tests help establish continuity, insulation, polarity and connection integrity before the risks associated with energisation are introduced.",
  },
  {
    topic: "Three-phase theory",
    prompt: "Which expression represents real power in a balanced three-phase load?",
    options: ["P = V × I", "P = √3 × VL × IL × cos φ", "P = I² ÷ R", "P = VL ÷ IL"],
    answer: 1,
    explanation:
      "For a balanced three-phase load, real power is √3 multiplied by line voltage, line current and power factor.",
  },
  {
    topic: "Earthing & MEN",
    critical: true,
    prompt: "What is the safety role of the MEN connection in a typical Australian low-voltage installation?",
    options: [
      "It limits normal load current",
      "It provides a low-impedance fault-current path so protective devices can operate",
      "It replaces the main switch",
      "It prevents every form of electric shock without other protection",
    ],
    answer: 1,
    explanation:
      "The MEN arrangement links the installation earthing system to neutral at the required point, supporting a fault path that enables automatic disconnection. It does not remove the need for correct design, bonding, protection and verification.",
  },
  {
    topic: "Motors",
    prompt: "A single-phase capacitor-start motor hums but does not accelerate. Which is the most plausible first area to investigate?",
    options: [
      "Starting circuit, capacitor or centrifugal switch",
      "Lighting circuit polarity",
      "The premises earth electrode only",
      "Power factor correction at the supply transformer",
    ],
    answer: 0,
    explanation:
      "A failed starting component can leave a single-phase motor without adequate starting torque. Isolation and a systematic test plan are required before testing or replacing components.",
  },
  {
    topic: "Protection",
    critical: true,
    prompt: "Which statement about an RCD is most accurate?",
    options: [
      "It provides overload protection in every installation",
      "It detects imbalance between active conductors and can disconnect when residual current exceeds its operating threshold",
      "It makes live work safe",
      "It eliminates the need for protective earthing",
    ],
    answer: 1,
    explanation:
      "An RCD detects residual current by comparing currents in the relevant live conductors. Its presence does not authorise live work or replace earthing and overcurrent protection requirements.",
  },
  {
    topic: "Transformers",
    prompt: "An ideal transformer has 1000 primary turns and 100 secondary turns. With 230 V applied to the primary, the secondary voltage is approximately:",
    options: ["2.3 V", "23 V", "230 V", "2300 V"],
    answer: 1,
    explanation:
      "For an ideal transformer, Vs/Vp = Ns/Np. The turns ratio is 0.1, so 230 V × 0.1 = 23 V.",
  },
  {
    topic: "Renewables & storage",
    critical: true,
    prompt: "Why must isolation planning for a modern installation consider PV, batteries and generators?",
    options: [
      "They can create alternate or stored sources of supply after the grid main switch is opened",
      "They always operate at extra-low voltage",
      "They remove the need for lock-out procedures",
      "They are mechanically isolated by an RCD",
    ],
    answer: 0,
    explanation:
      "Opening one main switch may not remove every source. Alternate supplies, stored energy and automatic or delayed starting must be identified and controlled as part of the isolation plan.",
  },
  {
    topic: "Risk management",
    critical: true,
    prompt: "When controlling a workplace hazard, which option is generally the most effective?",
    options: ["PPE", "Administrative instruction", "Elimination", "Warning signage"],
    answer: 2,
    explanation:
      "The hierarchy of controls gives preference to eliminating the hazard. Lower-order controls can still be required when elimination is not reasonably practicable.",
  },
  {
    topic: "Cable design",
    critical: true,
    prompt: "A compliant cable-selection process should consider which combination?",
    options: [
      "Colour and purchase price only",
      "Current-carrying capacity, voltage drop, fault-loop impedance, short-circuit performance and external influences",
      "Load current only",
      "Conductor material only",
    ],
    answer: 1,
    explanation:
      "Cable selection is coordinated across load, protection, installation method, environmental factors, voltage drop and fault performance. Current editions of the applicable standards and manufacturer data must be used.",
  },
  {
    topic: "Wet areas",
    critical: true,
    prompt: "What should drive equipment selection for a classified wet-area zone?",
    options: [
      "The homeowner’s preferred position",
      "Zone limitations, required protection, equipment suitability and maintained IP rating",
      "Whether the circuit is single phase",
      "The age of the building alone",
    ],
    answer: 1,
    explanation:
      "Selection and location depend on the classified zone and the protection and equipment requirements that apply. Always check the current standard and local regulatory requirements.",
  },
  {
    topic: "Commissioning",
    critical: true,
    prompt: "What is the strongest commissioning approach before an installation is placed into service?",
    options: [
      "Energise everything at once and wait for a fault",
      "Complete required inspection and testing, then load and prove function systematically while recording results",
      "Rely on visual inspection only",
      "Ask the customer to test each circuit",
    ],
    answer: 1,
    explanation:
      "Commissioning should follow documented inspection, mandatory testing, controlled energisation and functional checks, with the required records or certification completed.",
  },
];

const scoreBars = [
  { label: "Safety & risk", value: 88 },
  { label: "Theory & calculations", value: 73 },
  { label: "Wiring & protection", value: 65 },
  { label: "Earthing & MEN", value: 58 },
  { label: "Motors & equipment", value: 74 },
  { label: "Testing & verification", value: 42 },
  { label: "Special installations", value: 47 },
];

const recentSessions = [
  { title: "Isolation & proving", detail: "12 questions", score: 82, when: "Yesterday" },
  { title: "Maximum demand", detail: "15 questions", score: 58, when: "2 days ago" },
  { title: "Motors — DOL starters", detail: "10 questions", score: 70, when: "4 days ago" },
];

function Ring({ value, size = 176 }: { value: number; size?: number }) {
  return (
    <div
      className="readiness-ring"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(var(--orange) ${value * 3.6}deg, var(--sage) ${value * 3.6}deg 360deg)`,
      }}
      role="img"
      aria-label={`${value}% readiness`}
    >
      <div className="ring-centre">
        <strong>{value}%</strong>
        <span>ready</span>
      </div>
    </div>
  );
}

function MiniBar({ value, tone = "orange" }: { value: number; tone?: "orange" | "green" }) {
  return (
    <div className="mini-bar" aria-hidden="true">
      <span className={tone === "green" ? "green" : ""} style={{ width: `${value}%` }} />
    </div>
  );
}

function PageHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <header className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </header>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("overview");
  const [jurisdiction, setJurisdiction] = useState("NSW");
  const [completedPlan, setCompletedPlan] = useState<number[]>([0]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [topicFilter, setTopicFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [mockRunning, setMockRunning] = useState(false);
  const [mockSeconds, setMockSeconds] = useState(30 * 60);

  useEffect(() => {
    window.localStorage.setItem("capstone-ready-jurisdiction", jurisdiction);
  }, [jurisdiction]);

  useEffect(() => {
    if (!mockRunning || mockSeconds <= 0) return;
    const timer = window.setInterval(() => setMockSeconds((seconds) => seconds - 1), 1000);
    return () => window.clearInterval(timer);
  }, [mockRunning, mockSeconds]);

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesFilter = topicFilter === "All" || (topicFilter === "Critical" ? topic.critical : topic.progress < 60);
      const haystack = `${topic.title} ${topic.range} ${topic.description}`.toLowerCase();
      return matchesFilter && haystack.includes(search.toLowerCase());
    });
  }, [search, topicFilter]);

  const question = questions[questionIndex % questions.length];
  const minutes = Math.floor(mockSeconds / 60).toString().padStart(2, "0");
  const seconds = (mockSeconds % 60).toString().padStart(2, "0");

  const goTo = (nextView: View) => {
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const togglePlan = (index: number) => {
    setCompletedPlan((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || checked) return;
    setChecked(true);
    setAnswered((value) => value + 1);
    if (selectedAnswer === question.answer) setCorrect((value) => value + 1);
  };

  const nextQuestion = () => {
    setQuestionIndex((value) => (value + 1) % questions.length);
    setSelectedAnswer(null);
    setChecked(false);
  };

  const startMock = (duration: number) => {
    setMockSeconds(duration * 60);
    setMockRunning(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setChecked(false);
  };

  return (
    <div className="app-shell">
      {toast && <div className="toast" role="status">{toast}</div>}

      <aside className="sidebar">
        <button className="brand" onClick={() => goTo("overview")} aria-label="Capstone Ready overview">
          <span className="brand-mark">ϟ</span>
          <span>Capstone <b>Ready</b></span>
        </button>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => goTo(item.id)}>
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="streak-card">
          <div className="streak-top"><span className="flame">●</span><strong>7</strong><span>day<br />streak</span></div>
          <div className="streak-dots" aria-label="Six of seven study days completed">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => <i className={day < 7 ? "done" : ""} key={day} />)}
          </div>
          <small>Keep the circuit closed.</small>
        </div>
      </aside>

      <div className="content-shell">
        <header className="topbar">
          <div className="exam-chip"><span aria-hidden="true">□</span><b>12 weeks</b> to exam</div>
          <div className="today-time"><span aria-hidden="true">◷</span>36 min today</div>
          <div className="topbar-spacer" />
          <label className="jurisdiction-picker">
            <span>Jurisdiction</span>
            <select value={jurisdiction} onChange={(event) => setJurisdiction(event.target.value)}>
              {['ACT', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'].map((state) => <option key={state}>{state}</option>)}
            </select>
          </label>
          <button className="avatar" onClick={() => notify("Profile settings are ready for account integration.")} aria-label="Open profile">JK</button>
        </header>

        <main>
          {view === "overview" && (
            <div className="dashboard page-enter">
              <section className="hero-grid">
                <div className="hero-copy">
                  <span className="eyebrow">Friday · your study plan</span>
                  <h1>Morning, Jack.<br />Let’s close the gaps.</h1>
                  <div className="circuit-sketch" aria-hidden="true">
                    <span>L1</span><i /><i /><em>M<br />3~</em>
                    <span>N</span><i /><i />
                    <span>PE</span><i /><i />
                  </div>
                </div>
                <div className="readiness-panel">
                  <Ring value={68} size={218} />
                  <div><b>Capstone readiness</b><span>Up 6% this fortnight</span></div>
                </div>
              </section>

              <section className="dashboard-grid">
                <article className="card plan-card">
                  <div className="card-title"><span className="round-icon">✓</span><div><h2>Today’s practical plan</h2><p>36 minutes · focused on your weakest evidence</p></div></div>
                  <div className="plan-list">
                    {[
                      ["Isolation & proving de-energised", "8 min", "Critical evidence"],
                      ["Maximum demand drill", "16 min", "5 worked examples"],
                      ["10-question checkpoint", "12 min", "Adaptive mix"],
                    ].map((item, index) => (
                      <button key={item[0]} className={completedPlan.includes(index) ? "completed" : ""} onClick={() => togglePlan(index)}>
                        <span className="step-number">{completedPlan.includes(index) ? "✓" : index + 1}</span>
                        <span className="plan-name"><b>{item[0]}</b><small>{item[2]}</small></span>
                        <span className="plan-time">{item[1]}</span>
                      </button>
                    ))}
                  </div>
                  <button className="primary full" onClick={() => goTo("practice")}>Continue today’s plan <span>→</span></button>
                </article>

                <article className="card strengthen-card">
                  <div className="card-title"><span className="round-icon target">◎</span><div><h2>Areas to strengthen</h2><p>Based on your last 84 answers</p></div></div>
                  <div className="weak-list">
                    {[['Testing & verification', 42], ['Special installations', 47], ['Earthing & MEN', 58], ['Maximum demand', 61]].map(([label, value], index) => (
                      <button key={label} onClick={() => { setSearch(String(label)); goTo("learn"); }}>
                        <span><b>{label}</b><em>{value}% mastery</em></span>
                        <MiniBar value={Number(value)} tone={index > 1 ? "green" : "orange"} />
                      </button>
                    ))}
                  </div>
                  <button className="text-link" onClick={() => goTo("progress")}>View full skill matrix <span>→</span></button>
                </article>
              </section>

              <section className="card recent-card">
                <div className="section-row"><div className="card-title"><span className="round-icon pulse">∿</span><div><h2>Recent practice</h2><p>Every answer tunes the next session</p></div></div><button className="text-link" onClick={() => goTo("progress")}>View all →</button></div>
                <div className="recent-grid">
                  {recentSessions.map((session, index) => (
                    <button key={session.title} onClick={() => goTo("practice")}>
                      <span className={`session-icon s${index}`}>{index === 0 ? "◇" : index === 1 ? "▥" : "M"}</span>
                      <span><b>{session.title}</b><small>{session.detail} · {session.when}</small></span>
                      <strong className={session.score < 60 ? "low" : ""}>{session.score}%</strong>
                    </button>
                  ))}
                </div>
              </section>

              <section className="source-note">
                <span className="source-icon">i</span>
                <div><b>Coverage built around all 48 ERAC capability areas</b><p>Mapped to the 2024 Essential Performance Capabilities for unrestricted electricians, with jurisdiction-aware reminders for {jurisdiction}. This is an independent study aid, not an official assessment or a substitute for current standards, your RTO or regulator guidance.</p></div>
                <a href="https://www.erac.gov.au/licensing/essential-performance-capabilities-for-electricians/" target="_blank" rel="noreferrer">View framework ↗</a>
              </section>
            </div>
          )}

          {view === "learn" && (
            <div className="learn-page page-enter">
              <PageHeading eyebrow="48 capabilities · 11 learning paths" title="Build the knowledge behind the work." copy="Short lessons, worked examples and practical checks organised around Australia’s current essential performance capabilities." />
              <div className="filter-row">
                <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search topics or capabilities" /></label>
                <div className="filter-pills" aria-label="Filter learning paths">
                  {["All", "Critical", "Needs work"].map((filter) => <button className={topicFilter === filter ? "active" : ""} onClick={() => setTopicFilter(filter)} key={filter}>{filter}</button>)}
                </div>
              </div>
              <div className="topic-grid">
                {filteredTopics.map((topic, index) => (
                  <article className="topic-card" key={topic.title}>
                    <div className="topic-top"><span className="topic-number">{String(index + 1).padStart(2, '0')}</span><span className="range">{topic.range}</span>{topic.critical && <span className="critical-badge">Critical evidence</span>}</div>
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
                    <div className="topic-progress"><span><b>{topic.progress}%</b> mastery</span><MiniBar value={topic.progress} tone={topic.progress > 65 ? "green" : "orange"} /></div>
                    <div className="topic-footer"><span>{topic.lessons} lessons</span><button onClick={() => { setQuestionIndex(index % questions.length); goTo("practice"); }}>Open path →</button></div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {view === "practice" && (
            <div className="practice-page page-enter">
              <div className="practice-header">
                <PageHeading eyebrow="Adaptive practice" title="Explain it. Calculate it. Apply it." copy="Questions mix core knowledge with job scenarios. Each answer includes reasoning so you can correct the mental model, not memorise a letter." />
                <div className="session-score"><span>Session accuracy</span><strong>{answered ? Math.round((correct / answered) * 100) : 0}%</strong><small>{correct} correct from {answered}</small></div>
              </div>
              <section className="quiz-layout">
                <article className="quiz-card card">
                  <div className="quiz-meta"><span>Question {(questionIndex % questions.length) + 1} of {questions.length}</span><span>{question.topic}</span>{question.critical && <b>Critical evidence</b>}</div>
                  <div className="question-progress"><span style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} /></div>
                  <h2>{question.prompt}</h2>
                  <div className="answers" role="radiogroup" aria-label="Answer options">
                    {question.options.map((option, index) => {
                      const state = checked ? index === question.answer ? "correct" : index === selectedAnswer ? "incorrect" : "" : selectedAnswer === index ? "selected" : "";
                      return <button key={option} className={state} onClick={() => !checked && setSelectedAnswer(index)} role="radio" aria-checked={selectedAnswer === index}><span>{String.fromCharCode(65 + index)}</span><b>{option}</b>{checked && index === question.answer && <em>Correct</em>}</button>;
                    })}
                  </div>
                  {checked && <div className={`explanation ${selectedAnswer === question.answer ? "right" : "review"}`}><strong>{selectedAnswer === question.answer ? "Good call." : "Review this one."}</strong><p>{question.explanation}</p></div>}
                  <div className="quiz-actions">
                    <button className="secondary" onClick={() => notify("Question flagged for your review queue.")}>⚑ Flag for review</button>
                    {!checked ? <button className="primary" disabled={selectedAnswer === null} onClick={submitAnswer}>Check answer</button> : <button className="primary" onClick={nextQuestion}>Next question →</button>}
                  </div>
                </article>
                <aside className="practice-aside">
                  <article className="card"><span className="eyebrow">Today’s focus</span><h3>Testing & verification</h3><Ring value={42} size={132} /><p>Complete 8 more correct answers to lift this topic out of your high-priority queue.</p></article>
                  <article className="tip-card"><b>Exam habit</b><p>Write the principle or formula before reaching for a table. It prevents a familiar-looking option from pulling you off course.</p></article>
                  <p className="standards-reminder">Use current authorised standards and your RTO’s approved procedures for clause- or table-specific answers.</p>
                </aside>
              </section>
            </div>
          )}

          {view === "mock" && (
            <div className="mock-page page-enter">
              <PageHeading eyebrow="Timed assessment practice" title="Make exam day feel familiar." copy="Build pace, practise mixed recall and review your reasoning under time pressure. Mock results are diagnostic—not a prediction of regulator or RTO outcomes." />
              {!mockRunning ? (
                <>
                  <div className="mock-options">
                    {[
                      { title: "Quick circuit", duration: 30, count: 20, label: "Best for a weeknight", featured: false },
                      { title: "Full theory mock", duration: 90, count: 60, label: "Closest to exam conditions", featured: true },
                      { title: "Critical evidence check", duration: 45, count: 30, label: "Safety-weighted revision", featured: false },
                    ].map((mock) => (
                      <article className={`mock-card ${mock.featured ? "featured" : ""}`} key={mock.title}>
                        {mock.featured && <span className="recommended">Recommended</span>}<span className="mock-icon">{mock.featured ? "▤" : "◷"}</span><h2>{mock.title}</h2><p>{mock.label}</p><div><strong>{mock.duration}</strong><span>minutes</span><strong>{mock.count}</strong><span>questions</span></div><ul><li>Mixed EPC coverage</li><li>Flag and review questions</li><li>Reasoning report at finish</li></ul><button className={mock.featured ? "primary full" : "secondary full"} onClick={() => startMock(mock.duration)}>Start mock</button>
                      </article>
                    ))}
                  </div>
                  <section className="practical-checklist card"><div><span className="eyebrow">Practical preparation</span><h2>Five workflows to rehearse aloud</h2><p>Your hands should follow a sequence your words can explain.</p></div><ol><li><span>01</span>Risk assessment and work plan</li><li><span>02</span>Safe isolation with multiple supplies</li><li><span>03</span>Mandatory inspection and test sequence</li><li><span>04</span>Fault diagnosis and compliant rectification</li><li><span>05</span>Commissioning, results and certification</li></ol></section>
                </>
              ) : (
                <section className="mock-running card">
                  <div className="mock-running-top"><div><span className="eyebrow">Mock in progress</span><h2>Question {questionIndex + 1} of {questions.length}</h2></div><time>{minutes}:{seconds}</time></div>
                  <div className="question-progress"><span style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} /></div>
                  <h3>{question.prompt}</h3>
                  <div className="answers compact">{question.options.map((option, index) => <button key={option} className={selectedAnswer === index ? "selected" : ""} onClick={() => setSelectedAnswer(index)}><span>{String.fromCharCode(65 + index)}</span><b>{option}</b></button>)}</div>
                  <div className="quiz-actions"><button className="secondary" onClick={() => setMockRunning(false)}>Save & exit</button><button className="primary" disabled={selectedAnswer === null} onClick={nextQuestion}>Save & next →</button></div>
                </section>
              )}
            </div>
          )}

          {view === "tools" && <Calculators notify={notify} />}

          {view === "progress" && (
            <div className="progress-page page-enter">
              <PageHeading eyebrow="Your readiness evidence" title="Know exactly where to spend the next hour." copy="Mastery combines question accuracy, recency and coverage. A score can rise or decay as the evidence behind it changes." />
              <section className="progress-summary">
                <article className="card readiness-summary"><Ring value={68} size={192} /><div><span className="eyebrow">Overall readiness</span><h2>On track, with two clear priorities.</h2><p>Your safety knowledge is strong. Testing sequence and special installations are holding back the overall score.</p><button className="primary" onClick={() => goTo("practice")}>Practise weak areas →</button></div></article>
                <article className="card stat-stack"><div><span>Questions answered</span><strong>284</strong><small>+46 this week</small></div><div><span>Study time</span><strong>9h 24m</strong><small>Across 21 sessions</small></div><div><span>Current streak</span><strong>7 days</strong><small>Personal best: 11</small></div></article>
              </section>
              <section className="progress-grid">
                <article className="card skill-matrix"><div className="section-row"><div><span className="eyebrow">Capability groups</span><h2>Mastery matrix</h2></div><span className="updated">Updated today</span></div>{scoreBars.map((bar) => <div className="matrix-row" key={bar.label}><span>{bar.label}</span><MiniBar value={bar.value} tone={bar.value > 65 ? "green" : "orange"} /><strong>{bar.value}%</strong></div>)}</article>
                <article className="card weekly-chart"><span className="eyebrow">Last 8 weeks</span><h2>Accuracy trend</h2><div className="chart-area" aria-label="Accuracy improved from 54% to 76% over eight weeks">{[54, 59, 57, 63, 66, 69, 72, 76].map((value, index) => <div key={index}><span style={{ height: `${value}%` }} /><small>W{index + 1}</small></div>)}</div><p><b>+22 points</b> since your diagnostic. Keep mixed practice in the plan so earlier topics stay retrievable.</p></article>
              </section>
              <section className="card coverage-table"><div className="section-row"><div><span className="eyebrow">Evidence map</span><h2>Learning path coverage</h2></div><button className="secondary" onClick={() => goTo("learn")}>Review all topics</button></div><div className="table-head"><span>Path</span><span>Mastery</span><span>Last practised</span><span>Next action</span></div>{topics.slice(0, 6).map((topic, index) => <div className="table-row" key={topic.title}><span><b>{topic.title}</b><small>{topic.range}</small></span><span><MiniBar value={topic.progress} tone={topic.progress > 65 ? "green" : "orange"} /><b>{topic.progress}%</b></span><span>{index === 0 ? "Today" : `${index + 1} days ago`}</span><button onClick={() => goTo("practice")}>{topic.progress < 60 ? "Prioritise" : "Maintain"} →</button></div>)}</section>
            </div>
          )}
        </main>

        <footer><p>Capstone Ready is an independent learning prototype. Verify all work against current standards, legislation, regulator guidance and your RTO’s procedures.</p><div><a href="https://www.erac.gov.au/licensing/essential-performance-capabilities-for-electricians/" target="_blank" rel="noreferrer">ERAC EPC 2024</a><a href="https://www.safeworkaustralia.gov.au/doc/model-code-practice-managing-electrical-risks-workplace" target="_blank" rel="noreferrer">Electrical risk guidance</a></div></footer>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.slice(0, 5).map((item) => <button className={view === item.id ? "active" : ""} onClick={() => goTo(item.id)} key={item.id}><span>{item.icon}</span>{item.label.replace(" exam", "")}</button>)}</nav>
    </div>
  );
}

function Calculators({ notify }: { notify: (message: string) => void }) {
  const [voltage, setVoltage] = useState("230");
  const [current, setCurrent] = useState("10");
  const [resistance, setResistance] = useState("");
  const [lineVoltage, setLineVoltage] = useState("400");
  const [lineCurrent, setLineCurrent] = useState("16");
  const [powerFactor, setPowerFactor] = useState("0.85");
  const [results, setResults] = useState<{ ohms?: number; power?: number; threePhase?: number }>({});

  const calculate = (event: FormEvent) => {
    event.preventDefault();
    const v = Number(voltage);
    const i = Number(current);
    const r = Number(resistance);
    const vl = Number(lineVoltage);
    const il = Number(lineCurrent);
    const pf = Number(powerFactor);
    setResults({
      ohms: r || (i ? v / i : 0),
      power: v && i ? v * i : r && i ? i * i * r : 0,
      threePhase: Math.sqrt(3) * vl * il * pf / 1000,
    });
    notify("Calculations updated.");
  };

  return (
    <div className="tools-page page-enter">
      <PageHeading eyebrow="Calculation bench" title="Check the method, not just the number." copy="Use quick calculators to rehearse common relationships. Write down the formula, units and assumptions before checking your result." />
      <form onSubmit={calculate}>
        <div className="calculator-grid">
          <article className="card calculator-card"><span className="calc-symbol">V<br /><i>I × R</i></span><div><span className="eyebrow">DC & single-phase basics</span><h2>Ohm’s law and power</h2><p>Enter voltage and current. Add resistance if it is already known.</p></div><label>Voltage <span>V</span><input inputMode="decimal" value={voltage} onChange={(event) => setVoltage(event.target.value)} /></label><label>Current <span>A</span><input inputMode="decimal" value={current} onChange={(event) => setCurrent(event.target.value)} /></label><label>Resistance <span>Ω</span><input inputMode="decimal" placeholder="Calculate me" value={resistance} onChange={(event) => setResistance(event.target.value)} /></label><div className="result-box"><span>Calculated resistance<strong>{results.ohms !== undefined ? `${results.ohms.toFixed(2)} Ω` : "—"}</strong></span><span>Real power<strong>{results.power !== undefined ? `${results.power.toFixed(0)} W` : "—"}</strong></span></div></article>
          <article className="card calculator-card"><span className="calc-symbol three">3~</span><div><span className="eyebrow">Balanced load</span><h2>Three-phase real power</h2><p>P = √3 × V<sub>L</sub> × I<sub>L</sub> × power factor</p></div><label>Line voltage <span>V</span><input inputMode="decimal" value={lineVoltage} onChange={(event) => setLineVoltage(event.target.value)} /></label><label>Line current <span>A</span><input inputMode="decimal" value={lineCurrent} onChange={(event) => setLineCurrent(event.target.value)} /></label><label>Power factor <span>cos φ</span><input inputMode="decimal" value={powerFactor} onChange={(event) => setPowerFactor(event.target.value)} /></label><div className="result-box single"><span>Three-phase real power<strong>{results.threePhase !== undefined ? `${results.threePhase.toFixed(2)} kW` : "—"}</strong></span></div></article>
        </div>
        <button className="primary calculate-button" type="submit">Calculate both →</button>
      </form>
      <section className="formula-sheet card"><div><span className="eyebrow">Formula sheet</span><h2>Relationships worth knowing cold</h2><p>Selecting the correct relationship is often more important than arithmetic speed.</p></div><div className="formula-grid"><span><b>Ohm’s law</b><em>V = I × R</em></span><span><b>Electrical power</b><em>P = V × I</em></span><span><b>Resistive power</b><em>P = I² × R</em></span><span><b>Three-phase power</b><em>P = √3 V<sub>L</sub>I<sub>L</sub> cos φ</em></span><span><b>Transformer ratio</b><em>V<sub>p</sub>/V<sub>s</sub> = N<sub>p</sub>/N<sub>s</sub></em></span><span><b>Energy</b><em>E = P × t</em></span></div></section>
      <div className="calculator-warning"><b>Design reminder</b><p>These simple calculations do not perform cable selection, maximum-demand assessment or compliance checks. Use the current applicable standards, manufacturer data and local requirements.</p></div>
    </div>
  );
}
