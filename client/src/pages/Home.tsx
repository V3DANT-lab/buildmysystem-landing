/* Design direction: Field Manual Modernism — a cinematic systems cover flows into an asymmetric, paper-toned technical field guide. */
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  CornerDownRight,
  MoveUpRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does BuildMySystem help a team do?",
    answer:
      "We help teams see their operating model as one connected system—then shape the tools, workflows, and decision paths that make it easier to run and improve.",
  },
  {
    question: "Where do we begin if our work feels fragmented?",
    answer:
      "Start with the friction you already know. We map the handoffs, information gaps, and recurring workarounds first, then turn that view into a focused build plan.",
  },
  {
    question: "Do you only work with a particular platform?",
    answer:
      "No. The system comes before the software. We work from your current operating context and recommend a practical combination of processes, integrations, and tools.",
  },
  {
    question: "How involved does our internal team need to be?",
    answer:
      "Your team brings the operational knowledge; we bring the structure and momentum. We use focused working sessions so decisions stay close to the people who use the system every day.",
  },
];

export default function Home() {
  const moveToFaq = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="overflow-hidden bg-[#f2f2ec] text-[#0e1411]">
      <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#050707] px-5 py-6 text-white sm:px-8 lg:px-12">
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-50 grayscale-[18%]"
          autoPlay
          loop
          muted
          playsInline
          poster="/manus-storage/buildmysystem-hero-poster_38a218ba.jpg"
          aria-label="Abstract systems visualization"
        >
          <source src="/manus-storage/buildmysystem-hero-video_ddc0ffd6.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[#020505]/58" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,5,5,0.98)_0%,rgba(2,5,5,0.84)_42%,rgba(2,5,5,0.38)_78%,rgba(2,5,5,0.66)_100%)]" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-96 w-96 rounded-full border border-[#d5ff53]/20" />
        <div className="pointer-events-none absolute -bottom-16 -left-8 -z-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-[10%] top-[18%] -z-10 hidden h-[28rem] w-[28rem] rounded-full border border-[#d5ff53]/15 lg:block" />
        <div className="pointer-events-none absolute right-[17%] top-[26%] -z-10 hidden h-[16rem] w-[16rem] rounded-full border border-white/10 lg:block" />
        <div className="pointer-events-none absolute right-[18%] top-[27%] -z-10 hidden h-[8rem] w-[8rem] rounded-full border border-[#d5ff53]/35 lg:block" />

        <div className="mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-[1440px] flex-col">
          <header className="hero-reveal relative flex items-center justify-between gap-5 py-3 [animation-delay:60ms]">
            <a href="#top" className="group flex items-center gap-3" aria-label="BuildMySystem home">
              <span className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] bg-[#d5ff53] p-2 shadow-[0_0_40px_rgba(213,255,83,0.13)] transition-transform duration-300 ease-out group-hover:-rotate-6">
                <img
                  src="/manus-storage/buildmysystem-mark_79a02e76.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-[Space_Grotesk] text-[0.7rem] font-semibold tracking-[0.18em] text-white sm:text-xs">
                BUILDMYSYSTEM
              </span>
            </a>
            <a
              href="#faq"
              className="group hidden items-center gap-2 font-[DM_Mono] text-[0.62rem] tracking-[0.16em] text-white/70 transition-colors hover:text-[#d5ff53] sm:flex"
            >
              FIELD NOTES <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </header>

          <div id="top" className="relative flex flex-1 items-center py-16 sm:py-20 lg:py-24">
            <div className="max-w-[62rem]">
              <div className="hero-reveal mb-7 flex items-center gap-3 font-[DM_Mono] text-[0.62rem] font-medium tracking-[0.19em] text-[#d5ff53] [animation-delay:120ms] sm:text-[0.68rem]">
                <span className="h-px w-9 bg-[#d5ff53]" />
                OPERATIONS, MADE COHERENT
              </div>
              <h1 className="hero-reveal max-w-[1050px] font-[Space_Grotesk] text-[clamp(2.2rem,10vw,3.7rem)] font-semibold leading-[0.82] tracking-[-0.075em] [animation-delay:190ms] sm:text-[clamp(4.2rem,10vw,9.8rem)]">
                WELCOME TO
                <span className="block">BUILDMYSYSTEM</span>
              </h1>
              <div className="hero-reveal mt-9 flex flex-col items-start gap-8 [animation-delay:270ms] sm:mt-11 sm:flex-row sm:items-center">
                <div className="flex flex-col items-start gap-5">
                  <p className="max-w-[21rem] border-l border-[#d5ff53] pl-4 font-[Space_Grotesk] text-base leading-relaxed text-white/83 sm:text-lg">
                    Bring the moving parts into <span className="text-[#d5ff53]">view.</span>
                  </p>
                  <button
                    type="button"
                    onClick={moveToFaq}
                    className="group relative inline-block cursor-pointer rounded-xl bg-zinc-800 p-px font-semibold leading-6 text-white shadow-2xl shadow-black/40 transition-transform duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ff53]"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative z-10 block rounded-xl bg-[#080b0a] px-5 py-3.5 sm:px-6">
                      <span className="relative z-10 flex items-center gap-2 font-[Space_Grotesk] text-[0.95rem]">
                        <span className="transition-transform duration-500 group-hover:translate-x-1">Let&apos;s get started</span>
                        <svg
                          className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-reveal flex items-end justify-between gap-6 pb-1 [animation-delay:350ms]">
            <div className="hidden max-w-[15rem] gap-3 lg:flex">
              <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#d5ff53]" />
              <p className="font-[DM_Mono] text-[0.62rem] leading-relaxed tracking-[0.08em] text-white/52">
                MAP THE MOVING PARTS. BUILD THE OPERATING LAYER.
              </p>
            </div>
            <a
              href="#faq"
              className="ml-auto flex items-center gap-3 font-[DM_Mono] text-[0.61rem] tracking-[0.16em] text-white/65 transition-colors hover:text-white"
            >
              SCROLL TO EXPLORE
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/22">
                <ArrowDown className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="relative isolate overflow-hidden bg-[#f2f2ec] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <img
          src="/manus-storage/buildmysystem-faq-texture_977e0a0e.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.13] mix-blend-multiply"
        />
        <div className="pointer-events-none absolute -right-40 top-28 -z-10 h-[34rem] w-[34rem] rounded-full border border-[#0e1411]/[0.11]" />
        <div className="pointer-events-none absolute -right-12 top-52 -z-10 h-80 w-80 rounded-full border border-[#0e1411]/[0.07]" />

        <div className="mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[minmax(19rem,0.78fr)_minmax(31rem,1.22fr)] lg:gap-24">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="flex items-center gap-3 font-[DM_Mono] text-[0.64rem] font-medium tracking-[0.18em] text-[#315543]">
              <span className="h-px w-9 bg-[#315543]" />
              FAQ / 01—04
            </div>
            <h2 className="mt-7 max-w-[28rem] font-[Space_Grotesk] text-[clamp(3rem,5vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#101611]">
              CLEAR PATHS<br />
              FOR <span className="text-[#447255]">COMPLEX</span><br />
              WORK.
            </h2>
            <p className="mt-7 max-w-sm font-[Space_Grotesk] text-base leading-relaxed text-[#425048]">
              A few practical answers before we begin mapping the work together.
            </p>
            <div className="relative mt-12 max-w-[20rem] overflow-hidden rounded-[1.45rem] bg-[#dce3d8] shadow-[0_24px_55px_rgba(18,32,23,0.12)]">
              <img
                src="/manus-storage/buildmysystem-faq-sculpture_445b9413.jpg"
                alt="Abstract connected modular forms"
                className="block w-full mix-blend-multiply"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#101611]/10 bg-[#f5f6f0]/76 px-4 py-3 backdrop-blur-sm">
                <span className="font-[DM_Mono] text-[0.56rem] tracking-[0.14em] text-[#315543]">SYSTEM SPECIMEN / 01</span>
                <MoveUpRight className="h-3.5 w-3.5 text-[#315543]" />
              </div>
            </div>
          </div>

          <div className="self-start border-t border-[#101611]/20">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={faq.question} className="border-[#101611]/20 py-1 data-[state=open]:border-[#315543]">
                  <AccordionTrigger className="group gap-6 py-6 text-left font-[Space_Grotesk] text-xl font-medium leading-snug tracking-[-0.035em] text-[#101611] hover:no-underline data-[state=open]:text-[#315543] sm:py-8 sm:text-[1.62rem]">
                    <span className="flex min-w-0 items-start gap-4 sm:gap-6">
                      <span className="mt-1.5 shrink-0 font-[DM_Mono] text-[0.61rem] font-medium tracking-[0.12em] text-[#4d765c]">
                        0{index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-[2.6rem] pr-8 font-[Space_Grotesk] text-[0.97rem] leading-relaxed text-[#48564e] sm:pb-9 sm:pl-[3.4rem] sm:text-lg">
                    <span className="flex gap-3">
                      <CornerDownRight className="mt-1 h-4 w-4 shrink-0 text-[#4d765c]" />
                      <span>{faq.answer}</span>
                    </span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 flex flex-col justify-between gap-7 border-t border-[#101611]/20 pt-8 sm:flex-row sm:items-end">
              <p className="max-w-sm font-[DM_Mono] text-[0.64rem] leading-relaxed tracking-[0.08em] text-[#54715f]">
                HAVE A DIFFERENT QUESTION? START WITH THE PART OF THE WORK THAT ISN&apos;T MOVING YET.
              </p>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group inline-flex items-center gap-3 font-[Space_Grotesk] text-sm font-semibold text-[#101611] transition-colors hover:text-[#315543]"
              >
                Back to the brief
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d5ff53] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
