"use client";

import { useState } from "react";
import type { PracticeQuestion } from "@/content/schema";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function PracticeSession({ questions }: { questions: PracticeQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const question = questions[index % questions.length];

  function submit() {
    if (selected === null || checked) return;
    setChecked(true);
    if (selected === question.answerIndex) setCorrect((value) => value + 1);
  }

  function next() {
    setIndex((value) => (value + 1) % questions.length);
    setSelected(null);
    setChecked(false);
  }

  return (
    <section className="practice-layout">
      <article className="question-panel panel">
        <div className="question-top"><span>Question {index + 1} of {questions.length}</span>{question.safetyCritical ? <StatusBadge tone="warning">Safety-critical</StatusBadge> : <StatusBadge>Knowledge</StatusBadge>}</div>
        <div className="question-progress"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
        <h2>{question.prompt}</h2>
        <div className="answers" role="radiogroup" aria-label="Answer options">
          {question.options.map((option, optionIndex) => {
            const correctAnswer = checked && optionIndex === question.answerIndex;
            const incorrectAnswer = checked && optionIndex === selected && optionIndex !== question.answerIndex;
            return <button type="button" role="radio" aria-checked={selected === optionIndex} className={`${selected === optionIndex ? "selected" : ""}${correctAnswer ? " correct" : ""}${incorrectAnswer ? " incorrect" : ""}`} key={option} onClick={() => !checked && setSelected(optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span><strong>{option}</strong>{correctAnswer ? <em>Correct answer</em> : null}</button>;
          })}
        </div>
        {checked ? <div className={`answer-feedback ${selected === question.answerIndex ? "success" : "warning"}`} role="status"><strong>{selected === question.answerIndex ? "Correct reasoning." : "Review the misconception."}</strong><p>{question.explanation}</p><small>Misconception tracked: {question.misconception}</small></div> : null}
        <div className="question-actions"><button className="button secondary" type="button">Flag for review</button>{checked ? <button className="button primary" type="button" onClick={next}>Next question →</button> : <button className="button primary" type="button" disabled={selected === null} onClick={submit}>Check answer</button>}</div>
      </article>
      <aside className="practice-summary panel"><span className="eyebrow">Session evidence</span><strong>{correct}/{index + (checked ? 1 : 0)}</strong><p>Correct answers</p><hr /><p>Questions are original draft content. Safety-critical items require technical review before production publication.</p></aside>
    </section>
  );
}
