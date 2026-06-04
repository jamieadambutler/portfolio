// Portfolio data — Jamie Butler
window.PROFILE = {
  name: "Jamie Butler",
  title: "Digital Transformation Leader",
  positioning: "Leading the teams and the architecture that make digital transformation actually land.",
  subtitle:
    "Two decades leading technology teams through transformations that don't stall in the gap between strategy and execution — replacing fragmented systems with unified platforms across CRM, ATS, ERP, HRIS, CLM, cloud, and AI, and building the governance, integration, and human change architecture that lets the work hold.",
  location: "Houston, Texas",
  email: "jamieadambutler@icloud.com",
  phone: "(951) 768-4008",
  links: {
    linkedin: "https://linkedin.com/in/jamieadambutler",
    github: "https://github.com/jamieadambutler",
    linktree: "https://linktr.ee/jamieadambutler",
    calendly: "https://scheduler.zoom.us/jamiebutler/30m",
  },
  resumeUrl: "public/Jamie-Butler-Resume.docx",
  portfolioUrl: "public/Jamie-Butler-Portfolio.pdf",
};

window.METRICS = [
  { value: "20+", label: "Years leading enterprise technology" },
  { value: "$160K+", label: "Annual savings delivered across last two roles" },
  { value: "500", label: "Users supported in current org (peak)" },
  { value: "40+", label: "Distributed engineers led across onshore, near, off" },
];

window.CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "crm-ats", label: "CRM & ATS" },
  { id: "erp", label: "ERP & Finance" },
  { id: "ai", label: "AI & Automation" },
  { id: "cloud", label: "Cloud & Productivity" },
  { id: "security", label: "Cybersecurity" },
  { id: "comms", label: "Communications" },
  { id: "bi", label: "Reporting & BI" },
  { id: "hris", label: "HRIS & Compliance" },
  { id: "infra", label: "Infrastructure" },
  { id: "itsm", label: "ITSM" },
  { id: "ops", label: "Operations" },
];

window.ROLES = [
  {
    id: "latitude",
    company: "Latitude Legal",
    title: "Senior Director of Technology",
    period: "Apr 2024 — Present",
    yearStart: 2024,
    yearEnd: null,
    summary:
      "Leading enterprise technology strategy for a national legal talent organization — modernizing infrastructure, deploying AI, and building the operational foundation for scale across 150–500 users.",
    team: "~10 in-house engineers · ~10 nearshore · ~20 offshore",
    savings: "≈ $100K annual savings via consolidation & tool utilization",
  },
  {
    id: "alliedup",
    company: "AlliedUP Cooperative Inc.",
    title: "Vice President of Technology",
    period: "Apr 2022 — Apr 2024",
    yearStart: 2022,
    yearEnd: 2024,
    summary:
      "Full-stack technology transformation at the nation's first worker-owned healthcare staffing cooperative — owned a $1M+ technology budget, board and grant reporting, and clinical-hiring compliance integrations.",
    team: "8 internal · ~5 nearshore · 10–20 offshore",
    savings: "≈ $60K annual technology cost reduction",
  },
  {
    id: "eosg",
    company: "EOSG Resources, LLC",
    title: "Director of Information Services",
    period: "Oct 2014 — Apr 2022",
    yearStart: 2014,
    yearEnd: 2022,
    summary:
      "Built and sustained an integrated enterprise technology ecosystem through eight years of substantial headcount and client growth — aligning investment at every stage to enable the business to scale.",
    team: "10 field admins & engineers · ~900 active clients served",
  },
  {
    id: "oreq",
    company: "Oreq Corporation",
    title: "Interim Director of Technology",
    period: "Feb 2013 — Apr 2014",
    yearStart: 2013,
    yearEnd: 2014,
    summary:
      "Macola ERP migration connecting manufacturing, procurement, and logistics; custom Crystal Reports and leadership dashboards; scaled a remote business development department.",
  },
  {
    id: "cannon",
    company: "Cannon Fabrication, Inc.",
    title: "Engineering & IT Manager",
    period: "Jan 2006 — Feb 2013",
    yearStart: 2006,
    yearEnd: 2013,
    summary:
      "Full ERP implementation from a legacy DOS-based accounting system to Sage MAS 300 across a manufacturing and distribution operation; migrated engineering from AutoCAD to SolidWorks; built integrated KPI dashboards.",
  },
  {
    id: "casablanca",
    company: "Casablanca Fan Company",
    title: "Senior Data Analyst & IT Manager",
    period: "Jul 2005 — Nov 2006",
    yearStart: 2005,
    yearEnd: 2006,
    summary:
      "Cross-functional sales and operational dashboards presented to leadership; managed cybersecurity, compliance, data integrity, VOIP, and full IT infrastructure including Active Directory.",
    note: "Acquired by Hunter Fan",
  },
  {
    id: "anchorblue",
    company: "Anchor Blue Retail Group",
    title: "Business Analyst",
    period: "Mar 2005 — Jul 2005",
    yearStart: 2005,
    yearEnd: 2005,
    summary:
      "Contributed to $1M inventory management system implementation across all retail locations; developed internal POS database and IT support ticketing system.",
  },
  {
    id: "itt",
    company: "ITT Technical Institute",
    title: "Network & Systems Administrator",
    period: "Dec 2003 — Mar 2005",
    yearStart: 2003,
    yearEnd: 2005,
    summary:
      "Built proprietary student grade tracking database replacing a manual process; managed Active Directory, Cisco routing, VPN, SolidWorks administration, and campus network migration.",
  },
];

window.PROJECTS = [
  // ---- Latitude Legal ----
  {
    id: "lat-sf-platform",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2025,
    title: "Bullhorn → Salesforce Enterprise Platform Transformation",
    categories: ["crm-ats", "ai", "bi", "ops"],
    featured: true,
    summary:
      "Led the largest technology transformation in Latitude Legal's history — a full enterprise migration from Bullhorn to Salesforce consolidating recruiting, business development, contract lifecycle, marketing, and candidate experience into a single unified ecosystem across a 150–500 user environment.",
    detail:
      "Architected the Salesforce platform from the ground up — custom objects, schema, profiles, role hierarchy, sharing rules, and governance. Re-mapped every recruiting and BD workflow against future state instead of replicating legacy dysfunction. Owned end-to-end data migration with full integrity validation, built the Experience Cloud candidate portal, integrated Ironclad CLM, HubSpot marketing, Jira, and Slack natively into Salesforce, and engineered AI-powered candidate matching with custom GPT agents. Built RevOps reporting infrastructure, designed change management and adoption programs across every department, and led onshore + nearshore + offshore delivery teams (~40 engineers total) end to end. Apr 2025 – Dec 2025.",
    stack: ["Salesforce", "Experience Cloud", "Ironclad CLM", "HubSpot", "GPT Agents", "Salesforce Flow", "Jira", "Slack"],
  },
  {
    id: "lat-crm",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "CRM & ATS Foundation",
    categories: ["crm-ats", "ai"],
    summary:
      "Initial Bullhorn-to-Salesforce migration phase — designing custom objects, recruiting workflows, and Asymbl ATS integration to unify CRM and recruiting on a single platform.",
    detail:
      "Deployed Experience Cloud candidate portal, job board integrations, AI-powered GPT agents, and an E-mail sync tool for complete client and candidate outreach visibility in Salesforce.",
    stack: ["Salesforce", "Asymbl", "Experience Cloud", "GPT Agents"],
  },
  {
    id: "lat-m365",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "M365 Tenant Migration",
    categories: ["cloud", "security"],
    summary:
      "Architected and executed company-wide migration from hosted Exchange to Microsoft 365 — designing tenant structure, permissions, security policies, and governance from the ground up for a 150–500 user organization.",
    stack: ["Microsoft 365", "Entra ID", "Exchange Online"],
  },
  {
    id: "lat-sharepoint",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "SharePoint Intranet",
    categories: ["cloud"],
    summary:
      "Migrated the organization from Dropbox to SharePoint — built department-level intranet sites organizing all documents, resources, and workflows by team.",
    stack: ["SharePoint", "Microsoft 365"],
  },
  {
    id: "lat-clm",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2025,
    title: "Contract Workflow Automation",
    categories: ["crm-ats", "ai"],
    summary:
      "Consolidated DocuSign to Adobe Sign, then led full migration to Ironclad with Salesforce integration — automating contract signature workflows that were a major manual slowpoint for talent and business development.",
    stack: ["Ironclad", "Salesforce", "Adobe Sign"],
  },
  {
    id: "lat-ai",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2025,
    title: "AI Productivity Platform",
    categories: ["ai"],
    summary:
      "Deployed AI meeting transcription, internal AI chat tools, custom knowledge assistants, and AI-powered GPT agents across teams — reducing administrative overhead and accelerating institutional knowledge access.",
    stack: ["GPT Agents", "LLM Integration", "Knowledge Assistants"],
  },
  {
    id: "lat-onboarding",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "Power Automate Onboarding",
    categories: ["ai", "hris", "ops"],
    summary:
      "Built a complex multi-path Microsoft Forms and Power Automate onboarding system — routing hire information by type to the correct teams, adding tasks to a shared HR Planner board, and solving a critical bottleneck during rapid hiring scale-up.",
    stack: ["Power Automate", "Microsoft Forms", "Planner"],
  },
  {
    id: "lat-zoom",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "Zoom Phone AI IVR",
    categories: ["comms", "ai"],
    summary:
      "Replaced Dialpad and an expensive third-party answering service with Zoom Phone and a fully automated AI IVR — reducing telecom costs significantly while improving communication quality, uptime, and client routing.",
    stack: ["Zoom Phone", "AI IVR"],
  },
  {
    id: "lat-mssp",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2024,
    title: "Cybersecurity & MSSP",
    categories: ["security"],
    summary:
      "Researched, vetted, and deployed a dedicated MSSP with endpoint protection and VPN rollout — establishing formal cybersecurity governance policies and significantly strengthening security posture.",
    stack: ["MSSP", "SentinelOne", "VPN"],
  },
  {
    id: "lat-jira",
    company: "Latitude Legal",
    companyId: "latitude",
    year: 2025,
    title: "Jira Cloud & JSM",
    categories: ["itsm"],
    summary:
      "Implemented Jira Cloud and Jira Service Management — establishing a structured technology support framework with request tracking, SLA management, automated workflows, and full operational visibility.",
    stack: ["Jira Cloud", "JSM"],
  },

  // ---- AlliedUP ----
  {
    id: "au-bullhorn",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2022,
    title: "ATS & CRM Consolidation",
    categories: ["crm-ats"],
    summary:
      "Consolidated BlueSky ATS and Salesforce CRM into a unified Bullhorn platform — eliminating data silos, moving recruiters off spreadsheets into a managed end-to-end ATS, and giving BD a dedicated CRM for the first time.",
    stack: ["Bullhorn", "Salesforce", "BlueSky"],
  },
  {
    id: "au-canvas",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2023,
    title: "Canvas Reporting Platform",
    categories: ["bi"],
    summary:
      "Built complex Bullhorn Canvas reporting dashboards with detailed operational analytics — improving hiring visibility, pipeline performance measurement, and leadership decision-making.",
    stack: ["Bullhorn Canvas", "SQL"],
  },
  {
    id: "au-adp",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2022,
    title: "HRIS & Payroll Transformation",
    categories: ["hris"],
    summary:
      "Implemented ADP Workforce Now with integrated benefits administration — improving HR, payroll, and employee data accuracy and compliance across a distributed workforce.",
    stack: ["ADP Workforce Now"],
  },
  {
    id: "au-accusource",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2023,
    title: "Compliance Vendor Integration",
    categories: ["hris", "crm-ats"],
    summary:
      "Integrated AccuSource background screening directly into Bullhorn recruiting workflows with automated pass-through to ADP Workforce Now for PEO onboarding — eliminating manual handoffs.",
    stack: ["AccuSource", "Bullhorn", "ADP"],
  },
  {
    id: "au-exec",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2023,
    title: "Leadership & Board Reporting",
    categories: ["bi"],
    summary:
      "Built automated KPI reporting pipelines for leadership, board members, and external grant stakeholders — replacing manual data extraction with real-time operational visibility.",
    stack: ["Canvas", "Power BI"],
  },
  {
    id: "au-zoom",
    company: "AlliedUP Cooperative Inc.",
    companyId: "alliedup",
    year: 2023,
    title: "VoIP Infrastructure Migration",
    categories: ["comms"],
    summary:
      "Migrated telephony from a legacy platform to Zoom Phone — reducing telecom operating costs while improving call quality, reliability, and scalability across the distributed workforce.",
    stack: ["Zoom Phone"],
  },

  // ---- EOSG ----
  {
    id: "eo-oracle",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2018,
    title: "ERP Migration — Oracle to Dynamics",
    categories: ["erp"],
    summary:
      "Led Oracle E-Business to Microsoft Dynamics migration — the organization's most complex technology initiative, encompassing payroll integrations, financial reporting improvements, and cross-department data alignment.",
    stack: ["MS Dynamics", "Oracle E-Business"],
  },
  {
    id: "eo-netsuite",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2020,
    title: "ERP Migration — NetSuite to Intacct",
    categories: ["erp", "bi"],
    summary:
      "Directed NetSuite to Sage Intacct migration — implementing automated financial reporting, improving accounting operations, and delivering leadership-level dashboards that reduced month-end close complexity.",
    stack: ["Sage Intacct", "NetSuite"],
  },
  {
    id: "eo-ats",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2017,
    title: "ATS Modernization",
    categories: ["crm-ats"],
    summary:
      "Replaced Avionté ATS with Bullhorn — improving recruiting workflows, pipeline visibility, and KPI reporting for leadership and operations teams.",
    stack: ["Bullhorn", "Avionté"],
  },
  {
    id: "eo-prism",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2019,
    title: "HRIS & Payroll Migration",
    categories: ["hris"],
    summary:
      "Migrated HR and payroll systems to PrismHR — improving operational data sharing between recruiting, HR, and finance and reducing processing errors.",
    stack: ["PrismHR"],
  },
  {
    id: "eo-arch",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2019,
    title: "Systems Integration Architecture",
    categories: ["erp", "ops"],
    summary:
      "Designed end-to-end integrations between ATS, payroll, and ERP systems — creating a continuous automated data pipeline from recruiting through financial reporting, eliminating manual data transfer between departments.",
    stack: ["iPaaS", "REST APIs"],
  },
  {
    id: "eo-sops",
    company: "EOSG Resources, LLC",
    companyId: "eosg",
    year: 2016,
    title: "Process Mapping & SOPs",
    categories: ["ops"],
    summary:
      "Conducted company-wide workflow analysis and built standardized operational frameworks across recruiting, sales, and finance — establishing the process infrastructure that supported sustained headcount and client growth over eight years.",
    stack: ["Visio", "Confluence"],
  },

  // ---- Earlier ----
  {
    id: "or-macola",
    company: "Oreq Corporation",
    companyId: "oreq",
    year: 2013,
    title: "ERP Implementation — Macola",
    categories: ["erp"],
    summary:
      "Led full Macola ERP migration — connected manufacturing, procurement, and logistics into a unified reporting system with leadership dashboards built from the ground up.",
    stack: ["Macola", "Crystal Reports"],
  },
  {
    id: "or-remote",
    company: "Oreq Corporation",
    companyId: "oreq",
    year: 2013,
    title: "Remote Department Deployment",
    categories: ["infra", "ops"],
    summary:
      "Scaled and deployed a remote business development department — built the technical infrastructure supporting distributed sales operations that contributed directly to company growth.",
    stack: ["VPN", "VoIP", "CRM"],
  },
  {
    id: "or-time",
    company: "Oreq Corporation",
    companyId: "oreq",
    year: 2014,
    title: "Manufacturing Time-Tracking",
    categories: ["ops"],
    summary:
      "Partnered with operations and production leadership to implement a floor time-tracking system — addressing turnover-driven bottlenecks and improving production process consistency.",
    stack: ["Custom"],
  },
  {
    id: "cf-mas300",
    company: "Cannon Fabrication, Inc.",
    companyId: "cannon",
    year: 2008,
    title: "ERP Implementation — Sage MAS 300",
    categories: ["erp"],
    summary:
      "Led full ERP implementation from a legacy DOS-based accounting system to Sage MAS 300 — owned vetting, requirements gathering, implementation, data migration, and post-migration cleanup across manufacturing and distribution.",
    stack: ["Sage MAS 300"],
  },
  {
    id: "cf-kpi",
    company: "Cannon Fabrication, Inc.",
    companyId: "cannon",
    year: 2011,
    title: "KPI Dashboard Platform",
    categories: ["bi"],
    summary:
      "Built integrated KPI dashboards combining ERP, CRM, and production data — giving leadership cross-functional real-time visibility into business performance across manufacturing, distribution, and financial operations.",
    stack: ["Crystal Reports", "SQL Server"],
  },
  {
    id: "cb-exec",
    company: "Casablanca Fan Company",
    companyId: "casablanca",
    year: 2006,
    title: "Leadership Reporting Platform",
    categories: ["bi"],
    summary:
      "Developed complex cross-functional dashboards and custom reports surfacing sales performance, operational data, and business KPIs — presented directly to leadership in regular performance review meetings.",
    stack: ["Cognos", "SQL"],
  },
  {
    id: "cb-sec",
    company: "Casablanca Fan Company",
    companyId: "casablanca",
    year: 2006,
    title: "Cybersecurity & Compliance",
    categories: ["security"],
    summary:
      "Managed cybersecurity configuration, software auditing, data integrity, and compliance across the technology environment — reducing technology expenses while increasing productivity organization-wide.",
    stack: ["AD", "Endpoint Security"],
  },
  {
    id: "ab-inv",
    company: "Anchor Blue Retail Group",
    companyId: "anchorblue",
    year: 2005,
    title: "Inventory Management System",
    categories: ["ops", "infra"],
    summary:
      "Contributed to implementation of a $1M inventory management and tracking system across all retail locations — supporting multi-location retail operations at enterprise scale.",
    stack: ["Retail Systems"],
  },
  {
    id: "ab-pos",
    company: "Anchor Blue Retail Group",
    companyId: "anchorblue",
    year: 2005,
    title: "POS & Ticketing Systems",
    categories: ["itsm", "infra"],
    summary:
      "Developed internal store database POS system and built the organization's internal IT support ticketing system from the ground up.",
    stack: ["SQL", "Custom POS"],
  },
  {
    id: "itt-grade",
    company: "ITT Technical Institute",
    companyId: "itt",
    year: 2004,
    title: "Proprietary Grade Database",
    categories: ["bi", "infra"],
    summary:
      "Designed and built a custom proprietary database for student grade tracking and administration — replacing a fully manual process with a structured internal system used across the campus.",
    stack: ["SQL Server"],
  },
  {
    id: "itt-net",
    company: "ITT Technical Institute",
    companyId: "itt",
    year: 2004,
    title: "Campus Network Migration",
    categories: ["infra", "security"],
    summary:
      "Led network hardware migration to new infrastructure and location — maintaining continuity across student and faculty environments while managing Active Directory, Cisco routing, VPN, and Linux storage administration.",
    stack: ["Cisco", "Active Directory", "Linux"],
  },
];

window.COMPETENCIES = [
  "Digital Transformation",
  "Enterprise Architecture",
  "AI & Automation Strategy",
  "CRM / ATS / ERP / HRIS",
  "Contract Lifecycle (CLM)",
  "Cybersecurity & Governance",
  "Cloud Infrastructure",
  "Vendor & MSSP Management",
  "Platform Migrations",
  "M&A Systems Integration",
  "Distributed Team Leadership",
  "Leadership Reporting & BI",
];

window.ECOSYSTEM = [
  {
    group: "Platforms — CRM / ATS / ERP / HRIS / CLM",
    items: ["Salesforce", "Bullhorn", "Avionté", "Asymbl", "Ironclad", "NetSuite", "Sage Intacct", "MS Dynamics", "PrismHR", "ADP Workforce Now", "Workday"],
  },
  {
    group: "Cloud, AI & Automation",
    items: ["Microsoft 365", "Azure", "Entra ID", "AWS", "Google Workspace", "Zoom Workplace", "GPT Agents", "LLM Integration", "Power Automate", "Zapier", "AI IVR"],
  },
  {
    group: "Data, BI, ITSM & Security",
    items: ["Power BI", "Tableau", "SQL Server", "Crystal Reports", "Canvas", "IBM Cognos", "Jira Cloud", "JSM", "NinjaOne", "ServiceNow", "SharePoint", "Slack", "Sophos", "SentinelOne", "Teams", "MSSP / VPN", "GDPR", "PCI DSS"],
  },
];

window.CERTIFICATIONS = [
  { name: "Project Management Professional", short: "PMP", issuer: "PMI" },
  { name: "Artificial Intelligence", short: "AI", issuer: "Google" },
  { name: "Responsible AI", short: "Resp. AI", issuer: "Google" },
  { name: "Agile with Jira", short: "Agile", issuer: "Coursera" },
  { name: "Cybersecurity", short: "CySec", issuer: "EL" },
  { name: "Data Privacy & Protection", short: "GDPR", issuer: "EL" },
  { name: "PCI DSS Compliance", short: "PCI-DSS", issuer: "EL" },
  { name: "Strategic Leadership", short: "SL", issuer: "EL" },
  { name: "Leading Change Management", short: "LCM", issuer: "EL" },
  { name: "Technical Project Management", short: "TPM", issuer: "ITT" },
  { name: "MS Active Directory Admin", short: "ADA", issuer: "ITT" },
];

window.TESTIMONIALS = [
  {
    name: "Carey Carpineta",
    title: "People Matter · Mentor · Business Strategist · National Workforce Management",
    relationship: "Carey managed Jamie directly",
    linkedin: "https://www.linkedin.com/in/careycarpineta",
    quote:
      "Jamie began at AlliedUP as an IT Generalist with a focus on project management and implementation. Jamie quickly demonstrated his technical knowledge, created and documented the IT Department processes and work flows and earned everyone's trust. Jamie is both an excellent individual contributor, a loyal company advocate and an excellent member of our Leadership Team. Jamie was promoted to Director of IT just a few months after he began employment with AlliedUP. He brings as much enthusiasm as he does integrity to his work and provides support to his colleagues at all levels within the organization. Jamie's follow through is exceptional and he strives to make the right next decision consistently.",
  },
  {
    name: "Tracey Donaldson Kea",
    title: "Recruitment Partner at MUFG · Compliance, Risk, Legal, HR and IT",
    relationship: "Tracey worked with Jamie on the same team",
    linkedin: "https://www.linkedin.com/in/traceydkea",
    quote:
      "I had the pleasure of working with Jamie daily and I was impressed by his technical and project management expertise and dedication to optimizing business operations. Jamie possesses a deep understanding of technologies and how to apply those technologies to business solutions across many functions, which was instrumental in several system upgrades and process improvement projects. He consistently demonstrated a strong work ethic and an ability to find solutions to complex challenges. Moreover, Jamie is a true team player and a pleasure to work with. He always brought a positive attitude to the table and was willing to go above and beyond to ensure team success. I have no doubt that Jamie would be a valuable asset to any organization, and I wholeheartedly recommend him for leadership roles in technology, project management and operations.",
  },
  {
    name: "Dawn Urbach",
    title: "Financial Leader",
    relationship: "Dawn managed Jamie directly and later at the same level",
    linkedin: "https://www.linkedin.com/in/dawn-urbach-2b3b7764",
    quote:
      "Jamie is knowledgeable, articulate, and a pleasure to work with. He is a seasoned technology expert who has recommended and implemented many systems successfully. He brings integrity and intelligence to his work, and I believe his overall presence has a positive impact on the company and my experience working with him.",
  },
  {
    name: "Betel Tesfaye",
    title: "Healthcare Leadership, Management and Operations · Life Coach",
    relationship: "Jamie was senior to Betel but didn't manage Betel directly",
    linkedin: "https://www.linkedin.com/in/betel-tesfaye-3460934a",
    quote:
      "Jamie is a well-versed leader who can navigate between complex IT systems and management solutions. While working with Jamie, I was impressed how quickly he understood programmatic vision and create roadmaps towards success. He's exceptionally professional and his ability to bridge cross-functional areas within an organization makes him a valuable asset. I'd highly recommend Jamie!",
  },
  {
    name: "Matt Gallagher",
    title: "Practice Manager / Account Manager",
    relationship: "Matt worked with Jamie but on different teams",
    linkedin: "https://www.linkedin.com/in/matt-gallagher-b8b82050",
    quote:
      "I highly recommend Jamie, as I had the privilege of working with him for many years at Cannon Fabrication. He is knowledgeable, Intelligent and adept at solving difficult problems. As the IT Manager, he demonstrated his experience in developing, managing and troubleshooting Cannon Fabrication's IT environment. In addition, he developed Cannon Fabrication's website and oversaw the seamless migration of their database. As a manager of people, he is equally skilled, as he oversaw a team of engineers that was the core to Cannon Fabrications success.",
  },
  {
    name: "Linda Hartman",
    title: "MSB Docs · Product and Client Solutions Lead",
    relationship: "Linda worked with Jamie but they were at different companies",
    linkedin: "https://www.linkedin.com/in/lindaghartman",
    quote:
      "I've had the privilege of working with Jamie over the course of many years. I've observed that Jamie is very intelligent and proactive in his work. He pays great attention to detail and is very thorough. Jamie has a broad skill-set, making him a highly versatile and valuable team member. He is an asset to any organization. I highly recommend Jamie.",
  },
];

window.WRITINGS = [
  {
    title: "Most digital transformations don't fail during implementation.",
    when: "2 days ago",
    topic: "Digital Transformation",
    excerpt:
      "Transformation isn't a platform decision. It's a process decision that a platform enables. When organizations skip that step — when they go straight from \"we have a problem\" to \"let's buy something\" without stopping to understand what's actually broken and why — they don't fix the problem. They automate it. And automated dysfunction is just faster dysfunction.",
    pullquote: "The technology part of digital transformation is honestly the easy part.",
    href: "https://www.linkedin.com/in/jamieadambutler/recent-activity/all/",
  },
  {
    title: "AI is a practice, not a purchase.",
    when: "1 week ago",
    topic: "AI Adoption",
    excerpt:
      "Organizations don't fail at AI because they lack the tools. They fail because they treat AI like a purchase instead of a practice. The leaders who actually get value from AI start with the problem, not the product. They don't ask \"what can this AI tool do?\" They ask \"where are we losing time, making errors, or making slow decisions — and is AI the right answer to that specific problem?\"",
    pullquote: "AI doesn't fix bad data. It amplifies it.",
    href: "https://www.linkedin.com/in/jamieadambutler/recent-activity/all/",
  },
  {
    title: "Managing a modern technology portfolio is the most underestimated leadership challenge in business today.",
    when: "2 weeks ago",
    topic: "Enterprise Architecture",
    excerpt:
      "When systems are chosen in isolation — without a governance framework, a data flow strategy, or a clear owner — you don't get a portfolio. You get a museum of good intentions. The organizations that actually scale without drowning in complexity treat integration as a first-class decision, govern vendors like they govern people, and invest in architecture before they invest in applications.",
    pullquote: "Nobody puts \"prevented software sprawl\" on a press release.",
    href: "https://www.linkedin.com/in/jamieadambutler/recent-activity/all/",
  },
  {
    title: "Introspective leadership.",
    when: "2 years ago",
    topic: "Leadership",
    excerpt:
      "A genuine leader operates within a framework of empowerment, inspiring their team towards collective excellence. The success of a truly impactful team lies in its ability to function seamlessly in the absence of its leader. A leader's efficacy hinges upon their profound understanding of individual team members' strengths and areas for development, coupled with an unwavering commitment to mentorship.",
    pullquote: "What type of leader do we aspire to be?",
    href: "https://www.linkedin.com/in/jamieadambutler/recent-activity/all/",
  },
];

window.EDUCATION = [
  { degree: "MBA, Business Information Systems", year: "2010", school: "ITT Technical Institute" },
  { degree: "B.S., Computer Science — Information Systems Security", year: "2008", school: "ITT Technical Institute" },
  { degree: "A.S., Computer Science — Computer Network Systems", year: "2005", school: "ITT Technical Institute" },
];
