import type { SimpleIcon } from 'simple-icons'
import { useState } from 'react'
import {
  siFastapi,
  siGit,
  siGithub,
  siGithubactions,
  siGraphql,
  siN8n,
  siNodedotjs,
  siPrisma,
  siPython,
  siReact,
  siShopify,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVercel,
} from 'simple-icons/icons'

const projects = [
  {
    title: 'Shopify Rider Profile & Booking Coordination App',
    summary: 'Shopify workflow for rider profiles, booking context, and admin coordination.',
    problem:
      'Rider details, customer context, and booking notes can become scattered across separate tools.',
    built:
      'A Shopify app workflow for rider profiles, booking coordination, and admin handoffs.',
    stack: 'React, TypeScript, Node.js, GraphQL, Shopify Admin API, Customer Account UI Extensions',
    learning:
      'Customer-facing UX and admin workflows need to be designed together.',
  },
  {
    title: 'AI-Assisted SLR Screening Workflow',
    summary: 'Structured AI workflow for PDF parsing, extraction, validation, and review.',
    problem:
      'Screening slows down when papers must be parsed, classified, and checked manually.',
    built:
      'A structured workflow for parsing PDFs, extracting fields, and validating outputs.',
    stack: 'Python, FastAPI, OpenAI Structured Outputs, JSON Schema, PDF parsing, validation',
    learning:
      'AI output is more useful when constrained, validated, and review-ready.',
  },
  {
    title: 'AI Agent Workflow System',
    summary: 'Agent workflow design for structured context, artifacts, and validation.',
    problem:
      'Agent workflows break down when context, artifacts, and validation are unclear.',
    built:
      'A workflow for decomposing tasks, passing context, producing artifacts, and checking results.',
    stack: 'Agent workflow design, OpenAI, Claude, JSON Schema, validation, artifacts',
    learning:
      'Reliable agentic systems need explicit handoffs and deterministic checks.',
  },
  {
    title: 'Internal Business Systems',
    summary: 'Full-stack internal tools for API-connected business operations.',
    problem:
      'Teams lose time when operations depend on spreadsheets and disconnected tools.',
    built:
      'Internal tools for organizing data, connecting APIs, and automating repeatable steps.',
    stack: 'React, TypeScript, Node.js, REST APIs, Prisma, SQLite, GitHub Actions',
    learning:
      'Useful internal tools match the workflow first, then add automation.',
  },
]

const buildSteps = [
  {
    number: '01',
    title: 'Workflow discovery',
    description:
      'Understand how the work actually gets done, where time is lost, and what should or should not be automated.',
  },
  {
    number: '02',
    title: 'System design',
    description:
      'Translate messy processes into clear data models, APIs, structured outputs, and validation logic.',
  },
  {
    number: '03',
    title: 'Build and integrate',
    description:
      'Build practical tools using React, TypeScript, Node.js, Python, GraphQL, Shopify APIs, and AI-assisted workflows.',
  },
  {
    number: '04',
    title: 'Test and improve',
    description:
      'Focus on reliability, debugging, documentation, and feedback from real users.',
  },
]

const proofItems = [
  { label: 'GitHub projects', href: 'https://github.com/ebaloo13' },
  { label: 'Shopify embedded app architecture' },
  { label: 'AI-assisted PDF parsing workflow' },
  { label: 'Agent workflow design with validation and artifacts' },
  { label: 'Internal business operations systems' },
]

type Technology =
  | {
      name: string
      icon: SimpleIcon
      type: 'logo'
      category: string
    }
  | {
      name: string
      initials: string
      type: 'badge'
      category: string
    }

const technologies: Technology[] = [
  { name: 'React', icon: siReact, type: 'logo', category: 'Frontend' },
  { name: 'TypeScript', icon: siTypescript, type: 'logo', category: 'Language' },
  { name: 'Node.js', icon: siNodedotjs, type: 'logo', category: 'Backend' },
  { name: 'GraphQL', icon: siGraphql, type: 'logo', category: 'API' },
  { name: 'REST APIs', initials: 'API', type: 'badge', category: 'API' },
  { name: 'Python', icon: siPython, type: 'logo', category: 'Language' },
  { name: 'FastAPI', icon: siFastapi, type: 'logo', category: 'Backend' },
  { name: 'OpenAI', initials: 'AI', type: 'badge', category: 'AI' },
  { name: 'Claude', initials: 'CL', type: 'badge', category: 'AI' },
  { name: 'OpenAI Structured Outputs', initials: 'SO', type: 'badge', category: 'AI' },
  { name: 'JSON Schema', initials: '{}', type: 'badge', category: 'Validation' },
  { name: 'Shopify', icon: siShopify, type: 'logo', category: 'Commerce' },
  { name: 'Shopify Admin API', initials: 'ADM', type: 'badge', category: 'Commerce' },
  { name: 'Customer Account UI Extensions', initials: 'UI', type: 'badge', category: 'Commerce' },
  { name: 'Prisma', icon: siPrisma, type: 'logo', category: 'Database' },
  { name: 'SQLite', icon: siSqlite, type: 'logo', category: 'Database' },
  { name: 'Git', icon: siGit, type: 'logo', category: 'Workflow' },
  { name: 'GitHub', icon: siGithub, type: 'logo', category: 'Workflow' },
  { name: 'GitHub Actions', icon: siGithubactions, type: 'logo', category: 'CI/CD' },
  { name: 'Cursor', initials: 'CU', type: 'badge', category: 'Development' },
  { name: 'n8n', icon: siN8n, type: 'logo', category: 'Automation' },
  { name: 'Vercel', icon: siVercel, type: 'logo', category: 'Deployment' },
  { name: 'Tailwind', icon: siTailwindcss, type: 'logo', category: 'Styling' },
]

function SimpleIconMark({ icon, label }: { icon: SimpleIcon; label: string }) {
  return (
    <svg
      aria-label={label}
      className="tech-card__svg"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{label}</title>
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  )
}

const links = [
  { label: 'GitHub', href: 'https://github.com/ebaloo13' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ebocchieriv/' },
  { label: 'Email', href: 'mailto:ebocchieriv@gmail.com' },
]

function App() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setOpenProjectIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b10] text-slate-200">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white">
          Enzo Bocchieri
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#how">
            How I Build
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-[5.5rem] lg:pt-[4.5rem]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-200">
            AI Automation & Full-Stack Developer
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Enzo Bocchieri.
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-white sm:text-3xl">
            I build practical AI workflows, Shopify apps, and internal business systems for teams that want to reduce
            manual work and operate more efficiently.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I like working close to the workflow: understanding the process, finding where structure is missing, and
            building tools that are reliable enough for day-to-day use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:ebocchieriv@gmail.com"
              className="rounded-md border border-cyan-300/40 bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:border-cyan-200 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Contact Enzo
            </a>
            <a
              href="#projects"
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/5"
            >
              View projects
            </a>
          </div>
        </div>

        <aside className="self-center border-l border-white/10 pl-6 lg:pl-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Positioning</p>
          <p className="mt-4 text-2xl font-medium leading-snug text-white">
            Practical software for real business workflows. AI where it adds value.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-slate-400">
            <div className="border-t border-white/10 pt-4">
              <span className="block text-slate-500">Approach</span>
              Start with how the work happens now.
            </div>
            <div className="border-t border-white/10 pt-4">
              <span className="block text-slate-500">Output</span>
              Build systems people can understand, test, and maintain.
            </div>
          </div>
        </aside>
      </section>

      <section id="how" className="border-y border-white/10 bg-slate-950/55">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">How I Build</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">How I turn messy workflows into usable systems.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {buildSteps.map((step) => (
              <article key={step.number} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <span className="text-sm font-semibold text-cyan-300">{step.number}</span>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Selected projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Mini case studies from practical builds.</h2>
        </div>
        <div className="mt-10 grid gap-4">
          {projects.map((project, index) => {
            const isOpen = openProjectIndex === index
            const detailsId = `project-details-${index}`

            return (
            <article
              key={project.title}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={detailsId}
              onClick={() => toggleProject(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  toggleProject(index)
                }
              }}
              className={`group cursor-pointer rounded-lg border bg-white/[0.03] p-6 text-left outline-none transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                isOpen
                  ? 'border-cyan-300/35 shadow-[0_0_32px_rgba(34,211,238,0.08)]'
                  : 'border-white/10 hover:border-sky-300/35 hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{project.summary}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2 pt-1 text-sm font-semibold text-cyan-200">
                  <span className="hidden sm:inline">{isOpen ? 'Close details' : 'View details'}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-lg leading-none transition duration-300 ${
                      isOpen ? 'rotate-45 border-cyan-300/40 bg-cyan-300/15' : 'group-hover:border-cyan-300/35'
                    }`}
                  >
                    +
                  </span>
                </div>
              </div>

              <div
                id={detailsId}
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'mt-6 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <dl className="grid gap-5 border-t border-white/10 pt-6 text-sm leading-6 md:grid-cols-2">
                    <div>
                      <dt className="font-semibold text-sky-200">Problem</dt>
                      <dd className="mt-1 text-slate-400">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-200">Built</dt>
                      <dd className="mt-1 text-slate-400">{project.built}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-200">Stack</dt>
                      <dd className="mt-1 text-slate-400">{project.stack}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-sky-200">Key learning</dt>
                      <dd className="mt-1 text-slate-400">{project.learning}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
            )
          })}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-slate-950/55">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Developer with a workflow-first mindset.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I build full-stack applications and AI-enabled systems for practical business use cases. I am most
              interested in the places where teams are slowed down by manual coordination, scattered data, or tools that
              do not match how the work actually happens.
            </p>
            <p>
              My work combines product judgment, implementation detail, and a bias toward simple systems that are easy
              to explain, maintain, and improve.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Proof of Work</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Work signals that show how I think and build.</h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {proofItems.map((item) => (
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-300 transition hover:border-cyan-300/25 hover:bg-white/[0.05]"
              >
                {item.label}
              </div>
            )
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Stack</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Technologies &amp; Tools</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              A focused stack for AI automation, Shopify apps, API integrations, and internal workflow systems.
            </p>
          </div>
          <div className="tech-marquee mt-10" aria-label="Technologies and tools carousel">
            <div className="tech-marquee__track">
              {[...technologies, ...technologies].map((technology, index) => (
                <article className="tech-card" key={`${technology.name}-${index}`} aria-hidden={index >= technologies.length}>
                  <div className="tech-card__icon">
                    {technology.type === 'logo' ? (
                      <SimpleIconMark icon={technology.icon} label={technology.name} />
                    ) : (
                      <span aria-hidden="true">{technology.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3>{technology.name}</h3>
                    <p>{technology.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Have a workflow worth improving?</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              I'm open to roles and projects involving AI automation, agentic workflows, Shopify apps, API integrations,
              and internal business systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
