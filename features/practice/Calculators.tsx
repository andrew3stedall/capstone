"use client";

import { useState } from "react";

export function Calculators() {
  const [voltage, setVoltage] = useState(230);
  const [current, setCurrent] = useState(10);
  const [lineVoltage, setLineVoltage] = useState(400);
  const [lineCurrent, setLineCurrent] = useState(16);
  const [powerFactor, setPowerFactor] = useState(0.85);
  const resistance = current ? voltage / current : 0;
  const power = voltage * current;
  const threePhasePower = Math.sqrt(3) * lineVoltage * lineCurrent * powerFactor / 1000;

  return (
    <div className="calculator-grid">
      <section className="panel calculator-card"><span className="eyebrow">DC and single-phase basics</span><h2>Ohm&apos;s law and power</h2><p>Enter the known quantities, then compare the result with your written method.</p><div className="field-grid"><label>Voltage <span>V</span><input type="number" value={voltage} onChange={(event) => setVoltage(Number(event.target.value))} /></label><label>Current <span>A</span><input type="number" value={current} onChange={(event) => setCurrent(Number(event.target.value))} /></label></div><div className="calculation-result"><span>Resistance <strong>{resistance.toFixed(2)} Ω</strong></span><span>Power <strong>{power.toFixed(0)} W</strong></span></div></section>
      <section className="panel calculator-card"><span className="eyebrow">Balanced load</span><h2>Three-phase real power</h2><p>P = √3 × V<sub>L</sub> × I<sub>L</sub> × cos φ</p><div className="field-grid"><label>Line voltage <span>V</span><input type="number" value={lineVoltage} onChange={(event) => setLineVoltage(Number(event.target.value))} /></label><label>Line current <span>A</span><input type="number" value={lineCurrent} onChange={(event) => setLineCurrent(Number(event.target.value))} /></label><label>Power factor <span>cos φ</span><input type="number" step="0.01" min="0" max="1" value={powerFactor} onChange={(event) => setPowerFactor(Number(event.target.value))} /></label></div><div className="calculation-result"><span>Real power <strong>{threePhasePower.toFixed(2)} kW</strong></span></div></section>
    </div>
  );
}
