export default function ProteusGuidePage() {
  return (
    <article className="stack-lg">
      <h1 className="title">Proteus 8 Guide: AND & OR Circuits</h1>
      <p className="muted">How to build simple logic gate circuits in Proteus 8 Professional.</p>

      <section className="card">
        <h2>Option 1: Use Discrete Logic Gates</h2>
        <ol className="steps">
          <li>Open Proteus 8 and create a new schematic.</li>
          <li>Press <strong>P</strong> to open the <em>Pick Devices</em> dialog.</li>
          <li>Search and place: <code>AND</code> gate and <code>OR</code> gate (from <em>Active</em> library) or ICs <code>7408</code> (quad AND) and <code>7432</code> (quad OR).</li>
          <li>Add two <strong>logic toggle switches</strong> or <strong>digital interactive inputs</strong> labeled <strong>A</strong> and <strong>B</strong>.</li>
          <li>Add <strong>logic probes</strong> or <strong>LEDs</strong> on outputs to visualize results.</li>
          <li>Wire A and B to the gate inputs; connect output to a probe/LED with ground/reference as required.</li>
          <li>Run simulation (play ?). Toggle inputs and observe outputs.</li>
        </ol>
      </section>

      <section className="card">
        <h2>Option 2: Using ICs 7408 / 7432</h2>
        <ol className="steps">
          <li>Place <code>7408</code> and/or <code>7432</code> ICs.</li>
          <li>Power pins: connect <strong>VCC</strong> to +5V and <strong>GND</strong> to ground (use power ports).</li>
          <li>Choose one gate inside the package (e.g., 1A, 1B ? 1Y).</li>
          <li>Connect inputs A, B to toggle switches; 1Y to a probe/LED with resistor if needed.</li>
          <li>Simulate and verify the truth tables.</li>
        </ol>
      </section>

      <section className="card">
        <h2>Expected Truth Tables</h2>
        <div className="tables">
          <div>
            <h3>AND</h3>
            <table className="truth">
              <thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>0</td></tr>
                <tr><td>1</td><td>0</td><td>0</td></tr>
                <tr><td>1</td><td>1</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>OR</h3>
            <table className="truth">
              <thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead>
              <tbody>
                <tr><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>1</td></tr>
                <tr><td>1</td><td>0</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Troubleshooting</h2>
        <ul className="notes">
          <li>If outputs don?t change, ensure simulation is running.</li>
          <li>Verify power rails for IC packages (VCC/GND).</li>
          <li>Use logic probes for clean digital readings.</li>
          <li>Check wiring and pin numbers against the device datasheet.</li>
        </ul>
      </section>

      <p className="muted">
        Tip: Try the simulator on the <a href="/">home page</a> for intuition before wiring in Proteus.
      </p>
    </article>
  );
}
