"use client";

import { motion } from "framer-motion";

const reframes = [
  {
    title: (
      <>
        Effort <span className="italic font-light text-accent">≠</span> Outcome
      </>
    ),
    body: (
      <>
        <p>It looks like a performance problem. The team is active. Work is happening. Effort is there.</p>
        <p className="mt-4 border-l-2 border-accent-light pl-4 italic text-ink">
          But it is not really performance. It is how the system is shaping what that effort turns into.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        Pipeline <span className="italic font-light text-accent">≠</span> Signal
      </>
    ),
    body: (
      <>
        <p>It looks like a pipeline problem. Numbers are moving, but confidence is low.</p>
        <p className="mt-4 border-l-2 border-accent-light pl-4 italic text-ink">
          But it is not just pipeline. It is how signals, decisions, and timing are interacting underneath it.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        Decisions <span className="italic font-light text-accent">≠</span> Clarity
      </>
    ),
    body: (
      <>
        <p>It looks like a decision problem. Conversations are happening, but clarity is missing.</p>
        <p className="mt-4 border-l-2 border-accent-light pl-4 italic text-ink">
          But it is not really decision-making. It is a clarity gap inside the system those decisions depend on.
        </p>
      </>
    ),
  },
  {
    title: (
      <>
        Execution <span className="italic font-light text-accent">≠</span> Structure
      </>
    ),
    body: (
      <>
        <p>It looks like an execution gap. Work is being done, but it is not flowing or compounding.</p>
        <p className="mt-4 border-l-2 border-accent-light pl-4 italic text-ink">
          But it is not just execution. It is how the work is structured, connected, and supported.
        </p>
      </>
    ),
  },
];

export default function WorkReframes() {
  return (
    <section className="relative overflow-hidden py-32 border-t border-rule bg-background transition-colors duration-500">
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-[720px] mb-20 lg:mb-24">
          {/* <div className="mb-10 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-foreground/40">
            03 — Reframes
          </div> */}
          <h2 className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-normal text-foreground/50 tracking-wide">
            The visible problem is rarely the real one.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-rule border border-rule overflow-hidden">
          {reframes.map((reframe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background p-10 lg:p-14 hover:bg-paper-warm transition-colors duration-300"
            >
              {/* <div className="mb-6 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary/60"> */}
                {/* <div className="h-px w-5 bg-primary/40" />
                Reframe 0{index + 1}
              </div> */}
              <h3 className="mb-6 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-medium leading-[1.15] text-foreground">
                {reframe.title}
              </h3>
              <div className="text-[0.92rem] font-light leading-relaxed text-foreground/60">
                <div className="space-y-4">
                  {reframe.body}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
