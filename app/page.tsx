export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI Cost Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Wasting Tokens.<br />
          <span className="text-[#58a6ff]">Cut AI Costs by 30–50%.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AI Prompt Token Waste Alerter analyzes your prompt logs to surface redundant instructions,
          bloated context, and formatting inefficiencies — then gives you actionable fixes with
          projected dollar savings.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[
            { value: "30–50%", label: "Average cost reduction" },
            { value: "<2 min", label: "Setup via API or file upload" },
            { value: "100+", label: "Waste patterns detected" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-extrabold text-[#58a6ff]">{s.value}</div>
              <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited prompt log analysis",
              "API ingestion + file upload",
              "100+ waste pattern detectors",
              "Cost savings projections",
              "Team dashboard & exports",
              "Priority email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it detect token waste?",
              a: "We run your prompt logs through 100+ pattern-matching rules that flag issues like repeated system instructions, over-stuffed context windows, verbose formatting directives, and duplicate few-shot examples — each mapped to an estimated token cost.",
            },
            {
              q: "How do I get my prompts into the system?",
              a: "Two ways: POST logs directly to our REST API from your backend, or upload JSON/CSV files from your dashboard. We support OpenAI, Anthropic, and any provider that logs prompt text.",
            },
            {
              q: "Will this work with my existing AI provider?",
              a: "Yes. The alerter is provider-agnostic — it analyzes raw prompt text and token counts regardless of whether you use GPT-4, Claude, Gemini, or any other model.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="border border-[#30363d] rounded-lg bg-[#161b22] p-5 group"
            >
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} AI Prompt Token Waste Alerter. All rights reserved.
      </footer>
    </main>
  );
}
