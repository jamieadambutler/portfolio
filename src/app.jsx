/* Jamie Butler — portfolio app */
const { useState, useEffect, useMemo, useRef } = React;

/* ---------- Icons ---------- */
const Icon = {
  arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>
  ),
  mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.35 1.84.6 2.8.72A2 2 0 0122 16.92z" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 18V10H5.67v8h2.67zM7 8.86A1.55 1.55 0 105.46 7.31 1.55 1.55 0 007 8.86zM18.34 18v-4.39c0-2.35-1.26-3.45-2.94-3.45a2.54 2.54 0 00-2.31 1.27V10h-2.6c.03.78 0 8 0 8h2.6v-4.47a1.78 1.78 0 011.78-1.9c.94 0 1.59.71 1.59 1.9V18h2.88z" />
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5a11.5 11.5 0 00-3.63 22.42c.58.1.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.66.8.55A11.5 11.5 0 0012 .5z" />
    </svg>
  ),
  link: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  location: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  ),
  star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
    </svg>
  ),
};

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already visible on mount, reveal immediately (covers above-the-fold).
    const checkInitial = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh && r.bottom > 0) {
        el.classList.add("in");
        return true;
      }
      return false;
    };
    if (checkInitial()) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety: if IO somehow never fires, reveal after a beat.
    const fallback = setTimeout(() => {
      if (!el.classList.contains("in")) el.classList.add("in");
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  const dCls = delay ? ` delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal${dCls} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#timeline", label: "Timeline" },
    { href: "#ecosystem", label: "Stack" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="Home">
          <div className="nav-avatar">
            <img src="public/headshot.png" alt="Jamie Butler" />
          </div>
          <div className="nav-brand-text">
            <div className="name">Jamie Butler</div>
            <div className="role">Technology Leader</div>
          </div>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-cta-group">
          <a className="nav-cta nav-cta-primary" href={PROFILE.links.calendly} target="_blank" rel="noopener noreferrer">
            <Icon.calendar /> Schedule
          </a>
          <a className="nav-cta" href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume <Icon.download />
          </a>
        </div>
        <button
          className="nav-mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icon.close /> : <Icon.menu />}
        </button>
      </div>
      <div className="nav-mobile-menu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={PROFILE.links.calendly} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Schedule a Meeting</a>
        <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>View Resume</a>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="hero container">
      <Reveal>
        <span className="hero-badge">
          <span className="dot" />
          AVAILABLE FOR FULL-TIME ROLES · PARTNERSHIP · ADVISORY · ENGAGEMENTS
        </span>
      </Reveal>
      <Reveal delay={1}>
        <h1 className="h-display">
          Digital transformation<br />
          that <span className="accent">actually lands.</span>
        </h1>
      </Reveal>
      <Reveal delay={2}>
        <p className="hero-sub">{PROFILE.subtitle}</p>
      </Reveal>
      <Reveal delay={3}>
        <div className="hero-meta">
          <div className="item">
            <span className="k">Currently</span>
            <span className="v">VP, End-User Computing · Applied Systems</span>
          </div>
          <div className="item">
            <span className="k">Based</span>
            <span className="v">{PROFILE.location}</span>
          </div>
          <div className="item">
            <span className="k">Open to</span>
            <span className="v">Full-time · Partnership · Advisory · Fractional</span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={4}>
        <div className="hero-cta-row">
          <a href={PROFILE.links.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Schedule a Meeting <Icon.calendar />
          </a>
          <a href="#projects" className="btn btn-ghost">
            View Projects <Icon.arrow />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch <Icon.mail />
          </a>
        </div>
      </Reveal>

      <Reveal delay={4}>
        <div className="metrics">
          {METRICS.map((m, i) => (
            <div key={i} className="m">
              <div className="v">{m.value}</div>
              <div className="l">{m.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">01 / About</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">The foundation is the transformation.</h2></Reveal>
          <Reveal delay={2}>
            <p>
              Companies bring me in when managing technology stopped being enough — the systems are fragmented, the processes run on manual effort, and leadership can't see the business clearly. I fix all three at once.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-prose">
          <Reveal>
            <p>
              I work where executive strategy and technical architecture meet. In one conversation I translate a business problem into a technology plan; in the next I'm in the build making sure it ships right. The plan and the build are the same thing — <strong>architecture, not administration.</strong>
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p>
              For more than twenty years I've worked the same problem across legal services, healthcare staffing, financial services, manufacturing, and retail: consolidating fragmented systems onto one connected platform, integrating acquisitions cleanly, taking out redundant vendor and license spend, and standing up the security and governance that holds up under scrutiny.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              What I leave behind isn't a modernized stack — it's an operation that runs differently. I own enterprise technology budgets, vendor portfolios, and security posture end to end, and lead distributed <strong>in-house, nearshore, and offshore</strong> teams across CRM, ATS, ERP, HRIS, CLM, cloud, and AI.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="competencies">
              {COMPETENCIES.map((c) => (
                <div key={c} className="comp">{c}</div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="about-side" delay={2}>
          <div className="portrait">
            <img src="public/headshot.png" alt="Jamie Butler portrait" />
          </div>
          <div className="portrait-meta">
            <span className="k">Role</span><span className="v">VP, End-User Computing</span>
            <span className="k">Org</span><span className="v">Applied Systems</span>
            <span className="k">Tenure</span><span className="v">20+ years</span>
            <span className="k">Base</span><span className="v">Houston, TX</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  return (
    <section id="experience" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">02 / Experience</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Two decades of technology leadership.</h2></Reveal>
          <Reveal delay={2}>
            <p>Each role compounded the last — from network admin to senior leader owning enterprise budget and architecture.</p>
          </Reveal>
        </div>
        <div className="right">
          <Reveal>2003 → Present</Reveal>
        </div>
      </div>

      <div className="exp-list">
        {ROLES.map((r) => (
          <Reveal key={r.id}>
            <div className="exp-row">
              <div className="when">{r.period}</div>
              <div className="main">
                <h3>
                  {r.title}
                  <span className="company"> · {r.company}</span>
                </h3>
                <p>{r.summary}</p>
                <div className="badges">
                  {r.team && <span className="badge">{r.team}</span>}
                  {r.savings && <span className="badge save">{r.savings}</span>}
                  {r.note && <span className="badge accent">{r.note}</span>}
                </div>
              </div>
              <div className="side">
                <div className="label">Projects on file</div>
                <div className="val">
                  {PROJECTS.filter((p) => p.companyId === r.id).length}{" "}
                  initiative{PROJECTS.filter((p) => p.companyId === r.id).length === 1 ? "" : "s"}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects (filterable grid) ---------- */
function Projects() {
  const [filter, setFilter] = useState("all");

  const counts = useMemo(() => {
    const c = { all: PROJECTS.length };
    for (const cat of CATEGORIES) if (cat.id !== "all") c[cat.id] = 0;
    for (const p of PROJECTS) for (const cat of p.categories) c[cat] = (c[cat] || 0) + 1;
    return c;
  }, []);

  const visible = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">03 / Projects</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Enterprise initiatives, end to end.</h2></Reveal>
          <Reveal delay={2}>
            <p>
              {PROJECTS.length} documented initiatives across CRM, ATS, ERP, HRIS, CLM, AI, cloud, security, and BI — filter by capability to focus the lens.
            </p>
          </Reveal>
        </div>
        <div className="right">
          <Reveal>{visible.length} of {PROJECTS.length} shown</Reveal>
        </div>
      </div>

      <Reveal>
        <div className="proj-controls">
          <div className="proj-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`filter${filter === c.id ? " on" : ""}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
                <span className="count">{counts[c.id] || 0}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="proj-grid">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={Math.min(4, (i % 3) + 1)}>
            <article className={`proj-card${p.featured ? " featured" : ""}`}>
              {p.featured && (
                <div className="featured-tag">
                  <Icon.star /> Featured Project
                </div>
              )}
              <div className="meta">
                <span>{p.company}</span>
                <span className="yr">{p.year}</span>
              </div>
              <h3>{p.title}</h3>
              <div className="summary">{p.summary}</div>
              <div className="stack">
                {p.stack && p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Timeline ---------- */
function Timeline() {
  const grouped = useMemo(() => {
    const m = new Map();
    for (const p of PROJECTS) {
      if (!m.has(p.year)) m.set(p.year, []);
      m.get(p.year).push(p);
    }
    const years = Array.from(m.keys()).sort((a, b) => b - a);
    return years.map((y) => ({ year: y, items: m.get(y) }));
  }, []);
  const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;

  return (
    <section id="timeline" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">04 / Timeline</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Initiative timeline.</h2></Reveal>
          <Reveal delay={2}>
            <p>A chronological view across every employer, every major initiative. Click a row for the project context.</p>
          </Reveal>
        </div>
        <div className="right">
          <Reveal>{grouped.length} years · {PROJECTS.length} initiatives</Reveal>
        </div>
      </div>

      <div className="timeline">
        {grouped.map((g) => (
          <Reveal key={g.year} className="tl-year">
            <div className="year">{g.year}</div>
            <div className="tl-items">
              {g.items.map((p) => (
                <a key={p.id} href="#projects" className="tl-item">
                  <div className="company">{p.company}</div>
                  <div className="ti">{p.title}</div>
                  <div className="cats">
                    {p.categories.slice(0, 2).map((c) => (
                      <span key={c} className="cat-tag">{catLabel(c)}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Ecosystem ---------- */
function Ecosystem() {
  return (
    <section id="ecosystem" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">05 / Stack</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Technology ecosystem.</h2></Reveal>
          <Reveal delay={2}>
            <p>Platforms, cloud, automation, data, and security I've architected, deployed, integrated, or governed in production.</p>
          </Reveal>
        </div>
      </div>

      <div className="eco-groups">
        {ECOSYSTEM.map((g, gi) => (
          <Reveal key={g.group} className="eco-group" delay={Math.min(3, gi + 1)}>
            <div className="eyebrow">{g.group}</div>
            <div className="eco-items">
              {g.items.map((it) => (
                <span key={it} className="eco-item">{it}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Certifications + Education ---------- */
function Credentials() {
  return (
    <section id="credentials" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">06 / Credentials</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Education & certifications.</h2></Reveal>
        </div>
      </div>

      <Reveal>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Education</div>
      </Reveal>
      <div className="edu-list">
        {EDUCATION.map((e, i) => (
          <Reveal key={i}>
            <div className="edu-row">
              <div className="yr">{e.year}</div>
              <div className="deg">{e.degree}</div>
              <div className="sch">{e.school}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="eyebrow" style={{ marginTop: 64, marginBottom: 20 }}>Certifications</div>
      </Reveal>
      <Reveal>
        <div className="certs">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="cert">
              <div className="short">{c.short}</div>
              <div className="name">{c.name}</div>
              <div className="issuer">{c.issuer}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section id="testimonials" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">07 / Testimonials</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">What people I've worked with say.</h2></Reveal>
          <Reveal delay={2}>
            <p>Direct recommendations from leaders, peers, and partners across two decades — surfaced here in their own words.</p>
          </Reveal>
        </div>
        <div className="right">
          <Reveal>{TESTIMONIALS.length} recommendations</Reveal>
        </div>
      </div>

      <div className="testi-grid">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={Math.min(3, (i % 2) + 1)}>
            <figure className="testi-card">
              <div className="testi-mark" aria-hidden="true">"</div>
              <blockquote className="testi-quote">{t.quote}</blockquote>
              <figcaption className="testi-foot">
                <div className="testi-id">
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-title">{t.title}</div>
                  <div className="testi-rel">{t.relationship}</div>
                </div>
                <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="testi-link" aria-label={`${t.name} on LinkedIn`}>
                  <Icon.linkedin />
                </a>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Writings ---------- */
function Writings() {
  return (
    <section id="writings" className="container">
      <div className="section-head">
        <div className="left">
          <Reveal><span className="eyebrow">08 / Writings</span></Reveal>
          <Reveal delay={1}><h2 className="h-section">Selected writing.</h2></Reveal>
          <Reveal delay={2}>
            <p>Field notes from the work — transformation, AI adoption, enterprise architecture, and leadership. Originally published on LinkedIn.</p>
          </Reveal>
        </div>
        <div className="right">
          <Reveal>
            <a className="external-link" href="https://www.linkedin.com/in/jamieadambutler/recent-activity/all/" target="_blank" rel="noopener noreferrer">
              View all on LinkedIn <Icon.arrow />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="writ-grid">
        {WRITINGS.map((w, i) => (
          <Reveal key={i} delay={Math.min(3, (i % 2) + 1)}>
            <a className="writ-card" href={w.href} target="_blank" rel="noopener noreferrer">
              <div className="writ-meta">
                <span className="writ-topic">{w.topic}</span>
                <span className="writ-when">{w.when}</span>
              </div>
              <h3 className="writ-title">{w.title}</h3>
              <p className="writ-excerpt">{w.excerpt}</p>
              <div className="writ-pull">{w.pullquote}</div>
              <div className="writ-cta">
                <span>Read full post on LinkedIn</span>
                <Icon.arrow />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const cards = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: <Icon.mail /> },
    { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`, icon: <Icon.phone /> },
    { label: "LinkedIn", value: "linkedin.com/in/jamieadambutler", href: PROFILE.links.linkedin, icon: <Icon.linkedin /> },
    { label: "GitHub", value: "github.com/jamieadambutler", href: PROFILE.links.github, icon: <Icon.github /> },
    { label: "Schedule", value: "cal.com/jamiebutler", href: PROFILE.links.calendly, icon: <Icon.calendar /> },
  ];
  return (
    <section id="contact" className="container contact">
      <Reveal><span className="eyebrow">08 / Contact</span></Reveal>
      <Reveal delay={1}>
        <h2>Contact information.</h2>
      </Reveal>
      <Reveal delay={2}>
        <p style={{ marginTop: 28, maxWidth: 620, color: "var(--fg-2)", fontSize: 17 }}>
          Full-time role, advisory, project, or discussion — start a conversation.
        </p>
      </Reveal>

      <div className="contact-grid">
        {cards.map((c, i) => (
          <Reveal key={c.label} delay={Math.min(4, (i % 3) + 1)}>
            <a className="contact-card" href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <div className="left">
                <div className="icon">{c.icon}</div>
                <div>
                  <div className="label">{c.label}</div>
                  <div className="val">{c.value}</div>
                </div>
              </div>
              <div className="arrow"><Icon.arrow /></div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={2}>
        <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={PROFILE.links.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Schedule a Meeting <Icon.calendar />
          </a>
          <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            View Resume <Icon.download />
          </a>
          <a href={PROFILE.portfolioUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Project Portfolio PDF <Icon.download />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Jamie Butler — All rights reserved.</div>
        <div>Houston, TX · Designed & deployed via Vercel</div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  return (
    <React.Fragment>
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Timeline />
        <Ecosystem />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
