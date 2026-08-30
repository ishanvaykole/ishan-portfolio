/* ============================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   ----------------------------------------------------------------------------
   Everything on the website is generated from the object below. Change the text
   here, save the file, refresh the browser. That's it. No build step, no npm.

   Rules of thumb:
   - Keep the quotes "" around text.
   - Keep the commas at the end of each line.
   - To delete an item from a list, delete everything from its { to its },
   - To add an item, copy an existing one and change the text.
   - If the page ever goes blank, you deleted a bracket or a comma. Undo (Cmd+Z)
     until it comes back.

   Fields marked  // TODO  are things I couldn't confirm — check them.
   ========================================================================== */

const PORTFOLIO = {

  /* ---------------------------------------------------------------- BASICS */
  meta: {
    name:      "Ishan Vaykole",
    shortName: "Ishan",
    tagline:   "Biochemistry · Clinical research · Data analysis",
    email:     "ishanvaykole@gmail.com",
    location:  "Melbourne, Australia",
    // Set any of these to "" to hide that link.
    links: {
      linkedin: "https://www.linkedin.com/in/ishan-atul-vaykole-987a522b0",
      github:   "",              // optional
      orcid:    "",              // optional
      resume:   "",              // put a resume.pdf in this folder, then write "resume.pdf"
    },
  },

  /* ------------------------------------------------------------------ HERO */
  hero: {
    // The small pill above your name. Leave as "" to hide it completely.
    eyebrow: "",
    // The words that cycle in the animated line. Add or remove freely.
    rotating: [
      "clinical research",
      "biochemistry",
      "molecular biology",
    ],
    intro:
      "I'm a Bachelor of Science student at the University of Melbourne, majoring " +
      "in Biochemistry and Molecular Biology. Before Melbourne I spent six months " +
      "as a research assistant in the endocrinology department at Nair Hospital, " +
      "Mumbai, studying " +
      "how socioeconomic background and healthcare setting shape the emotional " +
      "burden of living with type 2 diabetes.",
    ctaPrimary:   { label: "See my research", href: "#research" },
    ctaSecondary: { label: "Get in touch",    href: "#contact" },
  },

  /* ----------------------------------------------------------- STAT STRIP */
  // The numbers that count up as you scroll past them.
  stats: [
    { value: 6, suffix: "mo", label: "As research assistant on an approved clinical study" },
    { value: 6, suffix: "",   label: "Languages spoken, two of them natively" },
    { value: 6, suffix: "",   label: "Research projects across clinic and lab" },
    { value: 5, suffix: "",   label: "Academic honours and awards" },
  ],

  /* ----------------------------------------------------------------- ABOUT */
  about: {
    heading: "About",

    // What I want to do. Keep this short — it's the whole point of the section.
    // Each string is its own paragraph.
    paragraphs: [
      "I want to understand life deeply enough to one day improve it.",

      "My aim is to contribute meaningfully to medicine and healthcare — through " +
      "biochemistry, through research, or through innovations that don't exist " +
      "yet. Titles matter far less to me than the impact they create.",

      "I also want to build something of my own. Research discovers " +
      "possibilities; entrepreneurship brings them into the world. I've never " +
      "seen the two as opposites, and I'd like to work somewhere between them.",
    ],

    // Anything in here appears behind a "Continue reading" button.
    // Leave it empty and the button doesn't show at all.
    more: [],

    // Short factual rows shown beside the text.
    facts: [
      { k: "Studying",  v: "BSc Biochemistry & Molecular Biology, University of Melbourne" },
      { k: "Graduating", v: "December 2028" },
      { k: "Focus",     v: "Clinical research, biochemistry, molecular biology" },
      { k: "Based in",  v: "Melbourne, Australia" },
    ],
    // Optional headshot: save a photo as "photo.jpg" here and write "photo.jpg".
    // Left blank, the site shows your initials — which also looks fine.
  },

  /* ----------------------------------------------- CLINICAL RESEARCH ----- */
  // The filterable cards in the "Clinical research" section.
  // "tags" build the filter buttons automatically.
  // "status" pill options: "Ongoing", "Approved", "Complete", "Draft", "Independent".
  research: [
    {
      title: "Diabetes-related distress across socioeconomic strata",
      status: "Complete",
      year: "Sep 2025 — Feb 2026",
      tags: ["Clinical", "Endocrinology", "Biostatistics"],
      role: "Research Assistant",
      venue: "TNMC & BYL Nair Hospital, Mumbai",
      // The formal title, shown in italics under the heading. Set to "" to hide.
      fullTitle:
        "To assess and compare the prevalence of diabetes-related distress using " +
        "the Diabetes Distress Scale-17 (DDS-17) among patients with type 2 " +
        "diabetes from low socioeconomic backgrounds attending government " +
        "hospitals versus high socioeconomic patients using private healthcare " +
        "facilities, and to examine the relationship between healthcare access " +
        "patterns and emotional burden of diabetes management.",
      summary:
        "My main research project. A six-month observational study of how " +
        "socioeconomic background and healthcare setting shape the emotional " +
        "burden of living with type 2 diabetes — and what that says about the link " +
        "between healthcare access and psychological wellbeing.",
      detail: [
        "Worked under Principal Investigator Dr Nikhil Bhagwat and Co-Investigator Dr Jugal Gada in the Department of Endocrinology.",
        "Scientifically approved at the Department Review Board, T.N. Medical College, 25 September 2025, and submitted for ethical approval to ECARP.",
        "Administered the validated DDS-17 scale in structured patient interviews and managed demographic and clinical data capture.",
        "Analysed total and domain-level scores — emotional burden, physician-related, regimen-related and interpersonal distress.",
        "Comparisons adjusted for socioeconomic status using the Modified Kuppuswamy scale (2025).",
        "Learned how a clinical study actually runs end to end: framing a question that can be measured, getting it through review, and holding data quality together across six months of recruitment.",
      ],
      link: "",
      linkLabel: "",
    },
    {
      title: "Clinical research observership — Department of Pharmacology",
      status: "Complete",
      year: "Jun 2024",
      tags: ["Clinical", "Pharmacology"],
      role: "Observer",
      venue: "Lokmanya Tilak Municipal Medical College, Sion, Mumbai",
      summary:
        "A month inside a working clinical trials unit under Dr Sudhir Pawar and " +
        "his team — sitting with the mechanics of how trials are actually run: " +
        "screening, protocols, sample handling, pharmacokinetics and the paperwork " +
        "that holds it all together.",
      detail: [
        "Patient screening: how inclusion and exclusion criteria are applied in practice, worked through on an inflammatory bowel disease (ulcerative colitis) trial.",
        "Clinical study protocol and study schematic — read through the full design of a 58-week trial.",
        "Blood sampling: collection technique, why tubes carry different additives (clot activators versus anticoagulants), and cold storage at −20 °C and −70 °C.",
        "Centrifugation, careful serum separation and aliquoting for long-term storage.",
        "Pharmacokinetic sampling at 0, 2, 4 and 8-hour intervals — the design used in oncology trials — observed on a hepatitis B patient visit alongside dosing.",
        "Screening, stool, urine and hepatitis test kits, and how each is handled.",
        "Documentation: Test Requisition Forms, tube barcoding and portal registration, case record form design, PI form updates and dossier review.",
        "Studied a SARS-CoV-2 booster study comparing a single heterologous booster dose of Relcovax against Corbevax for reactogenicity and immunogenicity.",
        "Built a working vocabulary of clinical research acronyms and terminology.",
      ],
      link: "",
      linkLabel: "",
    },
  ],

  /* ------------------------------------- LABORATORY & INDEPENDENT WORK --- */
  // Shown in their own section below Clinical research. Same fields as above.
  // Use status: "Independent" for work done outside the IB curriculum.
  labResearch: [
    {
      title: "Protease inhibition in fruit enzymes",
      status: "Complete",
      year: "May 2025",
      tags: ["Biochemistry", "Enzymology"],
      role: "Extended Essay — Biology HL",
      venue: "IB Diploma Programme · 3,979 words",
      fullTitle:
        "How do different concentrations of inhibitors — copper sulphate and " +
        "ethylenediaminetetraacetic acid (0.05 M and 0.10 M) — affect the activity " +
        "of protease extracted from kiwi (actinidin), pineapple (bromelain) and " +
        "papaya (papain), at constant volume (60 mL) and reaction time (30 minutes " +
        "at 50 °C), measured by inhibition on a gelatin substrate using a colorimeter?",
      summary:
        "My IB Extended Essay. A comparative study of how two chemically distinct " +
        "inhibitors — a heavy-metal salt and a chelating agent — suppress the " +
        "proteolytic activity of three plant proteases, using gelatin digestion " +
        "measured colorimetrically as the readout.",
      detail: [
        "Extracted and standardised protease from three fruit sources: kiwi, pineapple and papaya.",
        "Controlled volume, temperature and reaction time so inhibitor identity and concentration were the only variables.",
        "Quantified proteolysis by colorimetric measurement of gelatin substrate breakdown.",
        "Compared the mechanisms behind the two inhibitors — direct metal-ion interference versus metal-ion chelation.",
        "Full hypothesis and null hypothesis framing, with uncertainty and error analysis throughout.",
      ],
      link: "",
      linkLabel: "",
    },
    {
      title: "Antibacterial activity of honey brands",
      status: "Complete",
      year: "May 2025",
      tags: ["Microbiology", "Biology"],
      role: "Internal Assessment — Biology HL",
      venue: "IB Diploma Programme · 2,982 words",
      fullTitle:
        "To what extent do different honey brands differ in their antibacterial " +
        "activity, as a function of their hydrogen peroxide content?",
      summary:
        "Set against the problem of antibiotic resistance, this investigation " +
        "compared commercial honey brands on antibacterial performance and traced " +
        "the difference back to hydrogen peroxide content — testing whether a " +
        "traditional remedy holds up under measurement.",
      detail: [
        "Compared multiple commercial honey brands under identical culture conditions.",
        "Linked antibacterial performance to hydrogen peroxide content as the proposed mechanism.",
        "Sterile technique, culture preparation and controlled treatment application.",
        "Quantified inhibition and compared brands statistically.",
      ],
      link: "",
      linkLabel: "",
    },
    {
      title: "Photocatalytic degradation of organic dyes",
      status: "Complete",
      year: "May 2025",
      tags: ["Chemistry", "Environmental"],
      role: "Internal Assessment — Chemistry",
      venue: "IB Diploma Programme · 2,979 words",
      fullTitle:
        "Investigating the photocatalytic degradation efficiency of a photocatalyst " +
        "under UV light, and how it varies across dyes of differing organic structure.",
      summary:
        "Textile dyes resist conventional wastewater treatment and accumulate in " +
        "aquatic ecosystems. This investigation tested how efficiently a " +
        "photocatalyst breaks them down under UV light, and how much that " +
        "efficiency depends on the dye's own molecular structure.",
      detail: [
        "Designed the experimental protocol and controls independently.",
        "Tracked dye concentration over time by absorbance using spectrophotometry.",
        "Compared degradation efficiency across dyes of differing organic complexity.",
        "Analysed rate data with error bars and full uncertainty treatment.",
      ],
      link: "",
      linkLabel: "",
    },
    {
      title: "The oligodynamic effect of metals on bacterial growth",
      status: "Independent",
      year: "2024", // TODO confirm year
      tags: ["Microbiology", "Independent"],
      role: "Independent research",
      venue: "Self-directed — not submitted for IB",
      fullTitle:
        "To what extent do copper, zinc, aluminium and silver affect the growth of " +
        "bacteria isolated from air, a spoon, water and cloth, determined by the " +
        "zone of inhibition around the metal using a digital Vernier caliper, " +
        "keeping temperature, volume and metal size constant?",
      summary:
        "A self-directed study of the oligodynamic effect, started after noticing " +
        "that water from a copper bottle tasted different. Four metals, four " +
        "environmental bacterial sources, measured by zone of inhibition — testing " +
        "the traditional Indian use of copper utensils against actual data.",
      detail: [
        "Isolated bacterial cultures from four everyday environmental sources: air, a spoon, water and cloth.",
        "Tested copper, zinc, aluminium and silver under controlled temperature, volume and metal size.",
        "Measured zones of inhibition with a digital Vernier caliper for precision.",
        "Carried out independently, outside the IB curriculum, purely out of curiosity about a household observation.",
      ],
      link: "",
      linkLabel: "",
    },
  ],

  /* ------------------------------------------------------------ EXPERIENCE */
  // The timeline is split into groups. Each group has a "group" heading and an
  // "items" list. Newest first within each group.
  // Set current: true on an item for the glowing dot.
  experience: [
    {
      group: "Research & clinical",
      items: [
        {
          role: "Research Assistant — Endocrinology",
          org: "TNMC & BYL Nair Hospital, Mumbai",
          period: "Sep 2025 — Feb 2026",
          points: [
            "Assisted a Department Review Board–approved study comparing diabetes-related distress across socioeconomic groups.",
            "Administered the validated DDS-17 scale and conducted structured patient interviews.",
            "Collected, cleaned and analysed data to identify patterns linking healthcare access to emotional burden.",
            "Contributed to study documentation: protocol, case record forms and patient information sheets across three languages.",
          ],
        },
        {
          role: "Observership — Department of Pharmacology",
          org: "Lokmanya Tilak Municipal Medical College, Sion, Mumbai",
          period: "Jun 2024 — Jul 2024",
          points: [
            "Observership under Dr Sudhir Pawar and his clinical trials team.",
            "Followed live trials through screening, protocol, dosing, sampling and documentation.",
            "Hands-on exposure to blood sampling, centrifugation, serum separation, aliquoting and cold-chain storage.",
            "Learned pharmacokinetic sampling design and the trial paperwork chain — TRFs, barcoding, case record forms.",
          ],
        },
      ],
    },
    {
      group: "IB Diploma Programme — leadership & activities",
      items: [
        {
          role: "Technical Head — Annual Musical",
          org: "Garodia International Centre for Learning, Mumbai",
          period: "2023 — 2025",
          points: [
            "Ran the technical backbone of the school's annual musical for three consecutive years.",
            "Operated stage lighting, mixed live sound, and produced the show graphics.",
            "Rose to Technical Head, leading the technical support crew across productions.",
            "Five productions: Cinderella, Encanto, The Addams Family, The Little Mermaid and Wicked.",
          ],
        },
        {
          role: "Head of Logistics, Model United Nations",
          org: "Garodia International Centre for Learning, Mumbai",
          period: "2024 — 2025", // TODO confirm
          points: [
            "Led logistics for a multi-day conference: scheduling, resourcing and on-the-day coordination.",
            "Managed a team and resolved live operational problems under time pressure.",
          ],
        },
        {
          role: "House Captain — Vayu House",
          org: "Garodia International Centre for Learning, Mumbai",
          period: "2023 — 2024",
          points: [
            "Led Vayu House to win the annual House Shield competition.",
            "Coordinated team activities across the year and built a strong house culture.",
            "Recognised with the Student Leadership Award.",
          ],
        },
        {
          role: "Co-Founder — Financial Literacy Club",
          org: "Garodia International Centre for Learning, Mumbai",
          period: "2023 — 2024",
          points: [
            "Founded a peer-to-peer club teaching saving, investing and personal financial planning.",
            "Ran workshops and helped students open demo investment accounts and track portfolios.",
          ],
        },
        {
          role: "Workshop Coordinator — Jashn-e-Judaav",
          org: "Community digital-literacy initiative",
          period: "2024", // TODO confirm
          points: [
            "Designed and taught sessions helping elderly participants use everyday digital tools including Google Pay and Uber.",
            "Translated technical steps into plain, patient instruction for a non-technical audience.",
          ],
        },
      ],
    },
  ],

  /* ------------------------------------------------------------- EDUCATION */
  education: [
    {
      school: "University of Melbourne",
      qualification: "Bachelor of Science — Biochemistry & Molecular Biology",
      period: "Feb 2026 — Dec 2028",
      current: true,
      note: "Melbourne, Victoria, Australia",
    },
    {
      school: "Garodia International Centre for Learning",
      qualification: "International Baccalaureate Diploma Programme",
      period: "2023 — 2025",
      note: "Mumbai, India · Sciences focus",
    },
    {
      school: "P.G. Garodia School (ICSE)",
      qualification: "ICSE, to Grade 10",
      period: "2010 — 2023",
      note: "Mumbai, India",
    },
  ],

  /* ---------------------------------------------------- HONOURS & CERTS -- */
  awards: [
    { title: "Biogenesis Biomedicine Olympiad — Gold",
      note:  "Anatomy & Physiology" },
    { title: "Biogenesis Biomedicine Olympiad — Silver",
      note:  "Pharmacology & Toxicology" },
    { title: "Biogenesis Biomedicine Olympiad — Bronze",
      note:  "Cellular & Molecular Biology" },
    { title: "Student Leadership Award",
      note:  "Garodia International Centre for Learning · Jun 2024" },
    { title: "Creativity, Activity and Service (CAS) Award",
      note:  "IB Diploma Programme · May 2025" },
  ],

  // "file" opens your own copy of the certificate (they live in the
  // certificates/ folder next to this file). "verify" is the issuer's public
  // verification page. Set either to "" to hide that link.
  certifications: [
    {
      title:  "Good Clinical Practice (GCP)",
      issuer: "NIDA Clinical Trials Network — National Institute on Drug Abuse",
      issued: "Sep 2025",
      expires: "Sep 2028",
      credentialId: "",
      note:   "Six-hour course, 11 modules — informed consent, IRBs, participant safety, research protocol, documentation and research misconduct.",
      file:   "certificates/good-clinical-practice-nida.pdf",
      verify: "",
    },
    {
      title:  "AI Tools Workshop",
      issuer: "Be10x",
      issued: "Aug 2025",
      expires: "",
      credentialId: "46",
      note:   "AI tools and ChatGPT workshop.",
      file:   "certificates/ai-tools-workshop-be10x.pdf",
      verify: "",
    },
    {
      title:  "Semantic Segmentation with Amazon SageMaker",
      issuer: "Coursera Project Network",
      issued: "Jul 2025",
      expires: "",
      credentialId: "7FC8I2DDQVGE",
      note:   "",
      file:   "certificates/semantic-segmentation-sagemaker.pdf",
      verify: "https://www.coursera.org/account/accomplishments/verify/7FC8I2DDQVGE",
    },
    {
      title:  "Build a Computer Vision App with Azure Cognitive Services",
      issuer: "Microsoft",
      issued: "Jul 2025",
      expires: "",
      credentialId: "EDBMMRU6TYOL",
      note:   "",
      file:   "certificates/azure-computer-vision.pdf",
      verify: "https://www.coursera.org/account/accomplishments/verify/EDBMMRU6TYOL",
    },
    {
      title:  "Getting Started in Google Analytics",
      issuer: "Coursera Project Network",
      issued: "Jul 2025",
      expires: "",
      credentialId: "1K2LF0F65RY1",
      note:   "",
      file:   "certificates/google-analytics.pdf",
      verify: "https://www.coursera.org/account/accomplishments/verify/1K2LF0F65RY1",
    },
    {
      title:  "Global Youth Entrepreneurship Challenge 2024 — Preliminary Session",
      issuer: "GYEC 2024 Organizing Committee · Center for Entrepreneurship Development",
      issued: "Apr 2024",
      expires: "",
      credentialId: "",
      note:   "Competed with team GARODIANS, India, on an inclusive-design brief: " +
              "propose educational toys that let 4–5 year-old children with visual " +
              "or hearing impairments play and learn alongside peers without those " +
              "disabilities.",
      file:   "certificates/gyec-2024.jpeg",
      verify: "",
    },
  ],

  /* ---------------------------------------------------------------- SKILLS */
  skills: [
    {
      group: "Clinical research",
      items: ["Clinical research", "Good Clinical Practice (GCP)", "Clinical trial protocols",
              "Case Report Forms (CRF)", "Patient screening & recruitment",
              "Patient interviewing", "Ethics & regulatory submissions"],
    },
    {
      group: "Data & analysis",
      items: ["Statistical data analysis", "Regression analysis", "Data collection & cleaning",
              "Excel / Google Sheets", "Google Analytics", "Computer vision (Azure AI)",
              "Amazon SageMaker"],
    },
    {
      group: "Laboratory",
      items: ["Experimental design", "Spectrophotometry", "Sterile technique",
              "Sample processing & handling"],
    },
    {
      group: "Communication & leadership",
      items: ["Interpersonal communication", "Scientific writing", "Team leadership",
              "Teaching & mentoring", "Presentation design", "Video editing",
              "Graphic design"],
    },
  ],

  /* ------------------------------------------------------------- LANGUAGES */
  // level must be one of: "Native", "Full professional", "Professional working",
  // "Limited working", "Elementary" — these set the length of the bar.
  languages: [
    { name: "Gujarati", level: "Native" },
    { name: "Marathi",  level: "Native" },
    { name: "English",  level: "Full professional" },
    { name: "Hindi",    level: "Professional working" },
    { name: "French",   level: "Elementary" },
    { name: "Spanish",  level: "Elementary" },
  ],

  /* -------------------------------------------------------------- CONTACT */
  contact: {
    heading: "Let's talk",
    blurb:
      "I'm looking for research internships and opportunities in clinical " +
      "research, biochemistry and health data — in Melbourne or remotely. If " +
      "you're working on something adjacent, or just want to compare notes, " +
      "I'd like to hear from you.",
  },

  /* --------------------------------------------------------------- FOOTER */
  footer: {
    note: "Melbourne, Australia.",
  },
};
