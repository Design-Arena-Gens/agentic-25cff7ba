"use client";

import { useMemo, useState } from "react";

function Led({ on }: { on: boolean }) {
  return <span className={`led ${on ? "on" : "off"}`} aria-label={on ? "on" : "off"} />;
}

export default function HomePage() {
  const [inputA, setInputA] = useState<boolean>(false);
  const [inputB, setInputB] = useState<boolean>(false);

  const andOutput = useMemo(() => inputA && inputB, [inputA, inputB]);
  const orOutput = useMemo(() => inputA || inputB, [inputA, inputB]);

  return (
    <section className="stack-lg">
      <h1 className="title">AND / OR Gate Simulator</h1>
      <p className="muted">Toggle the inputs to see live outputs and truth tables.</p>

      <div className="grid-2">
        <div className="card">
          <h2>Inputs</h2>
          <div className="controls">
            <label className="toggle">
              <input type="checkbox" checked={inputA} onChange={(e) => setInputA(e.target.checked)} />
              <span>A</span>
            </label>
            <label className="toggle">
              <input type="checkbox" checked={inputB} onChange={(e) => setInputB(e.target.checked)} />
              <span>B</span>
            </label>
          </div>

          <div className="outputs">
            <div className="output-row">
              <span>AND (A ? B)</span>
              <Led on={andOutput} />
            </div>
            <div className="output-row">
              <span>OR (A + B)</span>
              <Led on={orOutput} />
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Truth Tables</h2>
          <div className="tables">
            <div>
              <h3>AND</h3>
              <table className="truth">
                <thead>
                  <tr><th>A</th><th>B</th><th>Y</th></tr>
                </thead>
                <tbody>
                  <tr className={inputA===false&&inputB===false?"hl":""}><td>0</td><td>0</td><td>0</td></tr>
                  <tr className={inputA===false&&inputB===true?"hl":""}><td>0</td><td>1</td><td>0</td></tr>
                  <tr className={inputA===true&&inputB===false?"hl":""}><td>1</td><td>0</td><td>0</td></tr>
                  <tr className={inputA===true&&inputB===true?"hl":""}><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3>OR</h3>
              <table className="truth">
                <thead>
                  <tr><th>A</th><th>B</th><th>Y</th></tr>
                </thead>
                <tbody>
                  <tr className={inputA===false&&inputB===false?"hl":""}><td>0</td><td>0</td><td>0</td></tr>
                  <tr className={inputA===false&&inputB===true?"hl":""}><td>0</td><td>1</td><td>1</td></tr>
                  <tr className={inputA===true&&inputB===false?"hl":""}><td>1</td><td>0</td><td>1</td></tr>
                  <tr className={inputA===true&&inputB===true?"hl":""}><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Notes</h2>
        <ul className="notes">
          <li>AND gate outputs 1 only when both inputs are 1.</li>
          <li>OR gate outputs 1 if at least one input is 1.</li>
          <li>Visit the <a href="/proteus">Proteus 8 Guide</a> to wire this in Proteus.</li>
        </ul>
      </div>
    </section>
  );
}
