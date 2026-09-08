# AI ethics scorecard — methodology

**Version 1.0 — approved 13 August 2026.** Companion to the
[Online Ecosystem Ethics Framework v4](guide-framework.html). This document covers the
**scoring** of AI model providers and model families: what kinds of thing the scorecard
assesses, which criteria apply to them and in which state, what a competent search checks,
and how an entry composes into a stack.

Section 10 lists the decisions this document raises but does not settle.

Every statement below was checked against the published
[AI ethics scorecard](ai.html) and the data behind it, most recently on 13 August 2026.
Where the code and the framework disagree, the disagreement is recorded rather than resolved
silently.

---

## 1. Scope and conformance

**Domain.** AI model providers and model families used in or alongside web products:
frontier hosted models, open-weight model families, and fully open research models.
**20 entries** at the time of writing.

**Framework version.** This tool conforms to the Online Ecosystem Ethics Framework
**version 4**.

### Conformance statement

**Implemented in full.** The 0–4 scale and the four assurance levels; performance and
evidence as separate axes, with no evidence multiplier; the weighted geometric mean with the
fixed 0.01 zero-guard and the weak-pillar flag; equal pillar weights as the default with the
equal-weight sensitivity line; red flags reported separately from the number; evidence-coverage
reporting; the source-priority rule (independent evidence outranks self-disclosure).

The scoring engine (`effective()` / `pillarScore()` / `geoOverall()`) is the canonical
engine core, byte-identical across the toolsuite and generated from
`build/engine/engine-core.js`.

**Declared deviations.**

1. **Pillar band labels.** Pillar scores are described using thresholds of 3.0 / 2.0 / 1.0
   (Leading / Good / OK / Limited), and composite percentages using 80 / 60 / 40. The
   Sustainable Web Design-derived bands used before v3.2 were 3.5 / 2.5 / 1.5, which made the
   same pillar score read as "Leading" in one tool and "Good" in another. Aligning the bands
   across the toolsuite is a deliberate, documented divergence from the earlier published
   thresholds.
2. **Family snapshots, not version-pinned models.** Five entries — GLM, Kimi, MiniMax,
   NVIDIA Nemotron and OpenAI gpt-oss — are assessed as dated rows describing a family at a
   point in time, not as pinned model versions. A model family that ships a new flagship
   every few months cannot be held to a version-pinned row without the row being wrong
   within weeks. Each snapshot carries its assessment date and falls under the framework's
   12-month maximum assessment life; for these entries a shorter review window is
   appropriate.

**Known non-conformance.** One remains, and it is declared here rather than fixed.

**The applicability layer carries no declared states in this tool.** `APPLICABILITY` and
`GOVERNANCE_NA` are both empty, and all 20 entries are governed as `corporate_product`, so no
binding can fire: every criterion resolves to `scored` for every entry, with three exceptions
noted below. Criterion 5, and criterion 4 for the seventeen entries without an exception, are
therefore scored with their inheritance reasoning carried in note prose ("inherited from cloud
hosts", "inherited from chip/hardware supply chain") rather than as a machine-readable state —
the pattern framework v4 exists to end.

The three exceptions are `hermes`, `cohere` and `falcon`, all on criterion 4, each scored 0
with assurance Unknown and excluded by a **per-cell `na` flag**. That is the mechanism
framework v4 section 3 forbids: applicability must be a declared machine-readable state, never
implied by a per-cell exception. It is the only route by which any cell in this tool is
excluded, and it is the wrong route. The cloud and tech-stack tools carry no such flags. The
matrix in section 3 below is the data a declared applicability layer would use.

---

## 2. Entity taxonomy

Two axes decide scoring in this domain. Openness decides the criterion 9 verification route
and the mitigation flag. The compute arrangement decides the deployment-level states.

### 2.1 Openness classes

| Class | Definition | Entries |
|---|---|---|
| **Closed** | Weights not released. Available only as the provider's hosted service. | Claude, ChatGPT / GPT, Gemini, Copilot, Grok, Nova / Titan (6) |
| **Open weights** | Weights published under some licence; training data not published. Licences vary from permissive (Apache 2.0) to non-commercial. | Llama, Mistral, Qwen, DeepSeek, Hermes, Falcon, Granite, GLM, Kimi, MiniMax, gpt-oss (11) |
| **Research-licensed** | Weights available for research or non-production use only. | Command (Cohere) (1) |
| **Fully open** | Weights, training data and training recipes all published. | OLMo, Nemotron (2) |

**Why the distinction matters.** Only the **fully open** class has a route to a criterion 9
score above 2 through the artefacts themselves: anyone can inspect the weights, the data and
the recipe, which is independent verification in substance even where no auditor was engaged.
Open weights alone do not qualify — a published model with unpublished training data is still
asking to be taken at its word about what went into it. Licence permissiveness is recorded
because a non-commercial licence changes what a deployer can do, but it does not change the
verification route.

### 2.2 Compute arrangements

| Arrangement | Definition | Entries |
|---|---|---|
| **Own or group facilities** | The provider trains and serves in data centres it, or its corporate parent, owns or operates. | Gemini, Copilot, Llama, Grok, Qwen, Granite, Nova, Nemotron, DeepSeek, GLM, Kimi, MiniMax (12) |
| **Named third-party compute** | The provider buys compute from one or more **named** external providers. | Claude (AWS, Google Cloud), ChatGPT / GPT (Microsoft Azure, Oracle, CoreWeave), Command (Oracle Cloud) (3) |
| **Unnamed or deployer-chosen compute** | Either the provider runs a hosted service without naming its compute provider, or there is no first-party hosted service at all. | Mistral, OLMo, Hermes, Falcon (unnamed, 4); gpt-oss (deployer-chosen, 1) |

**Why "or group".** Where the compute provider and the model provider are the same corporate
group — Gemini on Google's data centres, Nova on AWS, Copilot on Azure, Granite on IBM Cloud,
Qwen on Alibaba Cloud — there is no upstream to attribute to. The quantity arises inside the
company being assessed, so the state is *scored*, and the company-agreement rule (framework
section 6) ties the figure to the same company's entry in the cloud scorecard.

**Why gpt-oss sits alone.** It is released as weights with no first-party hosted service. Its
deployment-level quantities are therefore whatever host the deployer picks — the same
situation as self-hosted software in the tech-stack domain, and the only entry in this tool
where *inherited* is the correct state.

### 2.3 Governance classes

All 20 entries are currently mapped `corporate_product`, and this document declares that
correct for the domain as it stands: every entry is built and controlled by a company or
institute that can be assessed directly. **This domain therefore has no `corporate_oss`,
`foundation` or `community` bindings**, and the corporate-steward rule has nothing to attach
to here. That is a positive declaration, not an omission — and it is why the inert
`GOVERNANCE_NA` table and the steward code that could never fire here were safe to retire.

Two entries are arguably a different kind of body: OLMo (Allen Institute for AI, a
non-profit research institute) and Falcon (Technology Innovation Institute, a
state-backed research institute). Whether they warrant their own class is raised as
decision 10.2, because reclassifying them would mark criteria 10 and 12 not applicable and
move their governance pillar.

---

## 3. The applicability matrix

One state per criterion and arrangement, with the reason. Everything not listed is **scored**.
Levels are the framework v4 defaults (company: 4, 5, 7, 10, 11, 12; product: 3, 8, 9;
deployment: 1, 2, 6, 13).

### 3.1 Deployment-level criteria — 1 Carbon, 2 Water, 13 Per-unit efficiency

| Arrangement | State | Reason |
|---|---|---|
| Own or group facilities | **scored** | The energy, water and per-prompt cost arise in facilities the company or its group operates. There is no other party to attribute them to. Where the same company appears in the cloud scorecard, the figures are the same figures. |
| Named third-party compute | **upstream** | The quantity is physically consumed in the named provider's data centres. Its published figure and assurance level carry across unchanged. The model provider is judged on disclosure and choice, not charged twice for its supplier's grid. |
| Unnamed compute | **not disclosed** | A hosted service exists, so the quantity is real, but no provider is named — there is nothing to attribute to. Scored 0 with assurance Unknown, kept in the total, flagged. Not naming your compute provider is itself the finding. |
| Deployer-chosen (gpt-oss) | **inherited** | The deployer picks the host, so the footprint is the host's. The entry is judged only on whether it makes responsible choices possible — which, being openly licensed and self-hostable, it does. |

**Criterion 13's name.** The criterion is **Per-unit efficiency** throughout the framework and
the toolsuite, with the unit defined per domain; **for AI the unit is one prompt**, which is
what the tool's own per-prompt figures measure. This tool therefore displays it as
**"Per-prompt efficiency"** — a declared domain descriptor, not a second name and not a pending
rename (Martin's ruling, 13 August 2026). It is the same move the cloud scorecard makes when it
displays **"Per-unit infrastructure efficiency"**: each tool may name the unit its own domain
measures, provided the criterion's canonical name is stated, which it is here. No score, no data
and no scale differs from the criterion as the framework defines it.

**Multiple named providers.** Claude names two compute providers and ChatGPT names three, with
no published split between them. This document does not invent a split. See decision 10.3 for
the proposed rule.

### 3.2 Criterion 4 — Repairability, hardware lifespan and e-waste

| Arrangement | State | Reason |
|---|---|---|
| Designs or owns the hardware | **scored** | A company-level circularity practice of hardware owners. Google (TPUs), Meta, NVIDIA, xAI, Alibaba, Microsoft, Amazon and IBM all design or own accelerators and data-centre hardware, so there is a real practice to assess — and it is the same practice their cloud entries are assessed on. |
| Owns no hardware | **not applicable** | A company that rents compute has no hardware fleet to refurbish, no lifespan policy to publish and no e-waste stream of its own. There is nothing to assess, so the criterion is excluded from the total and never penalised. Its supplier's practice is not its own practice, and inheriting one would breach the quantity-versus-duty rule: repairability is a duty, not a quantity. |

This row is currently **implemented only in part, and by the wrong mechanism**. Three entries
that own no hardware — Hermes, Command (Cohere) and Falcon — are excluded by a per-cell `na`
flag rather than by a declared applicability state (known non-conformance 1). The other
seventeen are scored. Evidence is no longer the constraint: **all 20 cells carry a source**
(13 August 2026). See decision 10.1.

### 3.3 Criterion 5 — Responsible sourcing and conflict minerals

**Scored — always, for every entry.** This is the July 2026 correction, and framework v4's
quantity-versus-duty rule makes it general. Due diligence is a **duty** of the entity being
assessed. A company that buys accelerators or rents compute discharges that duty through
supplier selection and enquiry: what it requires of its suppliers, what it asks, and what it
publishes about either. Buying from a company that does due diligence is not doing due
diligence, so the state is never *upstream* and never *inherited*.

Where nothing shows the entity does either, the not-disclosed rule applies: **0 with assurance
Unknown**, kept in the total and flagged. The tool now applies that rule in part: three entries
sit at 0 / Unknown, and the spread runs 0 to 3. **All 20 cells carry a source** (13 August
2026). What remains from decision 10.1 is the inheritance reasoning still carried in some
notes rather than an evidence gap.

### 3.4 Criterion 6 — Impact on local communities

| Arrangement | State | Reason |
|---|---|---|
| Own or group facilities | **scored** | The company chooses where to site facilities and bears the consequences: grid load, water draw, local air quality, planning disputes. |
| Named third-party compute | **upstream** | The siting decisions are the named provider's. The impacts are real and attributable, but not to this entity. |
| Unnamed or deployer-chosen | **not disclosed** for unnamed compute; **inherited** for gpt-oss | Same reasoning as section 3.1. |

### 3.5 Criterion 8 — Accessibility and digital inclusion

**Scored for every entry.** A chat interface, mobile app, developer console or documentation
site is a user-facing surface that reaches real people, so accessibility is owned here and
cannot be passed to anyone else. **A control panel is a user interface, and the people who use
it are users** — so an operator-facing surface counts too, and the criterion is scored on the
same reasoning in this domain as in the infrastructure domain. There is no AI-specific
exception to state.

Evidence coverage is now **20 of 20 cells sourced** (13 August 2026). No cell is Estimated:
nine are Self-reported and eleven are 0 with assurance Unknown under the not-disclosed rule,
which is what a searched and genuinely absent accessibility disclosure looks like.

### 3.6 Criterion 9 — Transparency and accountability

**Scored for every entry, with the cap.** Without independent verification the score cannot
exceed 2, however detailed the self-reporting. Two routes clear the cap in this domain:

1. **An independent index or audit.** The Stanford Foundation Model Transparency Index is the
   established instrument. Granite (95/100, first place, December 2025) and Claude (46/100,
   highest of the frontier labs) are scored on it.
2. **Fully open artefacts.** Where weights, training data and recipes are all published,
   anyone can inspect the artefacts directly. This is verification in substance, and it is the
   basis on which OLMo and Nemotron score 4. It is available only to the **fully open** class
   in section 2.1 — open weights with unpublished data do not qualify.

Neither route is satisfied by the provider's own model card, technical report or blog post,
however thorough. **No cell breaches the cap** (13 August 2026): the only scores above 2
are OLMo, Nemotron and Granite at 4, all Verified and all on one of the two routes above.

### 3.7 Criteria 3, 7, 10, 11, 12

**Scored for every entry.** Efficiency (3) is a property of the artefact. Workers (7),
military use (10), political involvement (11) and privacy and data governance (12) are
company-level duties assessed against the provider itself, and must agree wherever the same
company appears elsewhere in the toolsuite.

Two notes on criterion 12:

- **Jurisdiction is the stable core.** Which legal regimes can reach the data is what the
  score records. This is what makes the location overrides in section 9 legitimate.
- **Product-specific exposure is carried by flags, not the score.** A consumer service that
  trains on chat logs by default, or a hosted API a government has banned, is a red flag
  beside the number. A self-hostable open-weight variant that sends no data to its maker is a
  **mitigation flag**, stated with its condition ("when self-hosted") — the case the framework
  added mitigation flags for, and the reason gpt-oss cannot simply take OpenAI's privacy score
  unqualified.

### 3.8 Zero-variance record

Run at each release. The zero-variance detector (release-check constant
`E2_ZERO_VARIANCE_IS_BLOCKER`) has been a **blocker since 12 August 2026**, not a warning: a
zero-variance or near-constant column with thin sourcing fails the release check outright, and
the only permitted escape is a recorded structural exception, labelled as such in the release
output. This tool holds no such exception. Results as at
13 August 2026, n = 20 (criterion 4: 17 scored, 3 excluded per section 3.2):

| Criterion | Distribution | Sourced | Reading |
|---|---|---|---|
| 4 Repairability | 1 (×7), 2 (×8), 3 (×2) | 17/17 scored; all 20 cells sourced | Three values across the scored population, every cell sourced. Clears. |
| 5 Sourcing | 0 (×3), 1 (×9), 2 (×6), 3 (×2) | 20/20 | Four values, every cell sourced. The 0s are the not-disclosed rule applied, not a gap. Clears. |
| 7 Workers | 1 (×10), 2 (×8), 3 (×2) | 20/20 | Three values, every cell sourced; nine Verified. The variation is now evidenced rather than plausible. |
| 8 Accessibility | 0 (×11), 2 (×3), 3 (×6) | 20/20 | Three values, every cell sourced. The 0s are searched absences at Unknown assurance. |
| 3 Efficiency | 2 (×4), 3 (×12), 4 (×4) | 20/20 | Clustered but sourced and reasoned. Acceptable. |
| 9 Transparency | 0 (×1), 1 (×5), 2 (×11), 4 (×3) | 20/20 | Widest spread in the tool. No cell breaches the section 3.6 cap. |

**The tool is sourced 20/20 on all thirteen criteria** (13 August 2026). Every earlier
statement in this document that a criterion's evidence was thin described a state that no
longer holds, and the figures above replace them.

No exact zero-variance constant remains. Prior constants resolved: criteria 10 and 12 at a flat
3 across foundation and community entries (reclassified by governance class at v3.2 — a
tech-stack finding that does not arise here, since this domain has no such entries).

---

## 4. Criterion levels

Framework v4 defaults adopted without departure. Company: 4, 5, 7, 10, 11, 12. Product: 3, 8,
9. Deployment: 1, 2, 6, 13.

**Company-agreement position.** Six companies hold entries in more than one tool. As at
13 August 2026 the company-level criteria agree everywhere: on criterion 4, Google is 3 in all
three tools, Microsoft is 3 in all three, and OpenAI is 1 for both ChatGPT and gpt-oss;
criteria 7, 10 and 11 agree across every tool. What decision 1 in section 10 asks for is the
applicability **state** for criterion 4, not the agreement, which already holds.

---

## 5. Constants and models

**Build-footprint disclosure.** The tool has no interactive usage estimator. What it publishes
is a fixed disclosure of this project's own build footprint, from a per-prompt basis multiplied
by an assumed prompt count, and from **two bases** rather than one: a narrow operational basis
and a wider lifecycle basis, shown as a range. The gap between the two published bases is
itself the finding, which is why one number is not shown alone.

Every constant carries its source and the date of that source. Where a constant has no source,
the table says so.

| Constant | Value | Source | Date |
|---|---|---|---|
| Energy per prompt (operational basis) | 0.24 Wh | Google's published median text-prompt figure — Google Cloud blog, "Measuring the environmental impact of AI inference", with its research paper | Published August 2025 (arXiv 2508.15734); in the built tool as at 13 Aug 2026 |
| Water per prompt (operational basis) | 0.26 mL | Google, same disclosure | As above |
| Carbon per prompt (operational basis) | 0.03 g CO₂e | Google, same disclosure | As above |
| Per-response lifecycle basis | 1.14 g CO₂e · 45 mL per 400-token response | Mistral's peer-reviewed lifecycle assessment of Large 2 (ADEME and Carbone 4, ISO 14040/44) | **Publication date not recorded in the source table** — to be added at the next check; figure verified in the built tool 13 Aug 2026 |
| Published plausible range | 100–600 Wh · 100–900 mL · 12–70 g CO₂e | The range the two bases give across this project's build (~60 generations); shown as the tool's "Plausible range" row | Verified in the built tool, 13 August 2026 |
| Prompt equivalence | 30 prompts per response set | **None.** An undocumented tool assumption with no external basis, published as such. It is not a measurement and nothing rests on it beyond the build-footprint disclosure | — |
| Geometric-mean floor | 0.01 | Framework-fixed, normative | Framework v4.0 (2026) |
| Pillar bands | 3.0 / 2.0 / 1.0 | Aligned across the toolsuite (deviation 1) | Adopted at framework v3.2 (2026), carried into v4 |
| Composite bands | 80 / 60 / 40 per cent | As above | As above |

**Both bases are live in the tool**: the [AI scorecard](ai.html) carries the per-prompt basis
and the plausible range as separate rows, and the
[cloud and hosting scorecard](hosting.html) carries the same pair.

**Two things this basis is not.** It is one provider's median figure for one prompt type, and
it is applied to every provider. Google's disclosure is the most detailed available, but
independent commentary (notably on omitted indirect water) argues it is not comparable with a
full lifecycle figure — Mistral's peer-reviewed lifecycle assessment of Large 2 reaches
roughly 1.14 g CO₂e and 45 mL per response on a wider boundary, some 38 times the carbon and
170 times the water. The two figures are not in conflict so much as measuring different
things.

**Framework v4** requires the functional unit to be **one user turn, end to end** — every model
call, tool call, retrieval and generation step that turn triggers — reported as a distribution
rather than a single average, with at least a median and a high percentile, and with reasoning
or extended-thinking modes reported separately. The build-footprint disclosure meets none of
those three: it uses one provider's median text-prompt figure as a universal point value, makes
no distinction by mode, and reports a two-basis range in place of a measured distribution. This
is a declared simplification, not a measurement. Decision 6 closed the choice of bases; the
distribution and reasoning-mode requirements remain unimplemented and are recorded here as
such.

**Reference models and standards.** Software Carbon Intensity for AI (Green Software
Foundation) and ITU-T L.1801 are the applicable measurement frameworks; neither is
implemented as a calculation in this tool. Where a stack-level carbon figure is needed, the
segmented Sustainable Web Design v4 model in `stack-impact-calculator-methodology.md` v1.6 is
the tool of record, not this one.

---

## 6. Composition rules

An AI entry enters a stack as a hosted service on a layer of its own (framework section 3,
layer 3). Four rules:

1. **State the functional unit first.** One user turn, end to end. A per-token or per-request
   figure is not comparable with a per-turn figure and must not be mixed into one total.
2. **Count once.** Where an entry's deployment quantities are *upstream* to a named compute
   provider that is also separately in the stack, the impact is counted once and the
   assignment recorded. Claude on AWS in a stack that also names AWS as its host is one AWS
   impact, not two.
3. **Host substitution for the inherited case.** For a self-hosted open-weight model, the
   selected host's scored values substitute in, and the impact then belongs to the host.
4. **Presentation.** Flags first, then pillar scores with coverage and assurance mix, then the
   weak-pillar flag, then the composite — shown by default, always dismissible, never alone.

---

## 7. Authoritative sources and search standards

For each criterion: the sources treated as authoritative in this domain, and the **search
standard** — what a competent search checks before a cell is concluded *not disclosed*. An
assessment records the search date and any deviation; it does not repeat this list.
Independent and adversarial sources take precedence over self-disclosure throughout.

**C1 Carbon.** Provider environmental or sustainability reports; the Science Based Targets
initiative dashboard for target validation and removals; peer-reviewed or preprint lifecycle
assessments (Google's inference measurement paper, Mistral's Large 2 assessment); the compute
provider's own report where the state is upstream. *Search:* the provider's sustainability
pages; SBTi dashboard by company name; a scholarly search for a lifecycle assessment of the
model family; the named compute provider's current report; one news search for enforcement or
greenwashing findings.

**C2 Water.** Provider water disclosures, per site where available; the compute provider's
water use effectiveness figure where the state is upstream; independent commentary on
boundary choices, since on-site and indirect water differ by an order of magnitude.
*Search:* sustainability report and FAQ pages for water, WUE and cooling; the named upstream's
water disclosure; investigative reporting on data-centre water draw for the named sites.

**C3 Efficiency.** Model cards and technical reports for architecture-level efficiency
(sparse activation, mixture-of-experts routing, distillation, quantised releases); published
inference-efficiency work; credible independent benchmarks. *Search:* the model card and
technical report; the provider's engineering blog; one independent benchmark source.

**C4 Repairability.** Applies only where the entity designs or owns hardware. Circularity and
refurbishment programme pages; server reuse and resale schemes; e-waste and recycling rates in
the sustainability report. *Search:* sustainability report and dedicated circularity pages of
the hardware-owning company. Where the entity owns no hardware, the state is not applicable
and no search is required.

**C5 Responsible sourcing.** For hardware owners and designers: SEC Form SD and the
conflict-minerals report where the company files; OECD-aligned due-diligence reporting;
Responsible Minerals Initiative participation. For compute buyers: any published supplier
requirement, code of conduct, or evidence of enquiry. *Search:* SEC EDGAR for Form SD; the
company's supplier-responsibility and ESG pages; the RMI member list; the company's own
procurement or supplier standards page. Reuse and refurbishment found here are recorded as
mitigation, never as diligence.

**C6 Local communities.** Investigative and local reporting on siting, water stress, grid
impact and air quality; litigation and regulator records (the xAI Memphis turbine litigation
is the pattern case); company community programmes second. *Search:* news search for the
company plus "data centre" with siting, water, turbine and community terms; court and
regulator dockets for the named sites; the company's community pages last.

**C7 Workers and labour.** Regulator and court records (in the United States, the National
Labor Relations Board docket); established labour watchdogs (Business & Human Rights Resource
Centre, Economic Policy Institute); credible investigative journalism, including on data
annotation and content moderation contractors, which is where this domain's labour risk
concentrates; layoff and dispute reporting. *Search:* NLRB docket or home-jurisdiction
equivalent by company name; BHRRC company page; one news search for disputes, layoffs and
union activity; one search for annotation or moderation contracting.

**C8 Accessibility.** A published accessibility statement or conformance report — a VPAT or
Accessibility Conformance Report against WCAG, Section 508 or EN 301 549 — covering the chat
interface, mobile app and developer console. *Search:* the provider's accessibility page and
trust centre; a search for "[product] VPAT"; the product's own help documentation for
keyboard, screen-reader and captioning support. A report available only through a gated
request channel is disclosure but gated, and is recorded as such; a request channel that does
not answer is not publication.

**C9 Transparency.** The Foundation Model Transparency Index is the primary independent
instrument. Otherwise: published model cards, technical reports, evaluation results, system
cards, weights, training datasets and training recipes as inspectable artefacts; licence
terms; third-party security or safety audits. *Search:* the current Transparency Index for the
model family; the model card and technical report; the licence and any dataset release; the
weights host (for example the model's page on a public model hub) for what is actually
downloadable. Absence from the index is not a finding where the index excludes the developer
type — academic and non-company developers are outside its scope, and OLMo's absence is
recorded on that basis.

**C10 Military use.** Contract announcements and procurement records; the provider's own usage
policy and any change to it, including deletions; defence-sector product pages and
partnerships; documented investigative reporting on military supply. *Search:* the current
usage or acceptable-use policy, and its archived earlier versions — a removed prohibition is
itself a finding; news and procurement search for the company plus defence, intelligence and
national-security terms; the company's own solutions pages for a defence product line.

**C11 Political involvement.** OpenSecrets for United States federal lobbying and spending;
jurisdiction-appropriate lobbying registers for companies active in the United Kingdom and
European Union; the company's own political-activity report where one exists; reporting on
sector-level lobbying, which in this domain increasingly runs through energy and data-centre
siting rather than technology policy. *Search:* OpenSecrets by company name; home-jurisdiction
register; one news search for political controversy or campaign spending.

**C12 Privacy, security and data governance.** Jurisdiction first — which legal regimes can
compel access to the data. Then: data-protection regulator enforcement records in the European
Union and United Kingdom; government and public-sector usage bans or restrictions; the privacy
policy and terms, including any default to training on user content and whether opt-out is
available; data-processing agreement availability and residency options; documented breach
history; litigation over training data or data retention. *Search:* the current privacy policy
and terms, with attention to defaults and the date of the last change; DPA enforcement
databases by company name; a search for government or regulator bans and restrictions; the
trust centre for residency and DPA terms.

**C13 Per-unit efficiency.** The criterion is named **Per-unit efficiency** across the
toolsuite; **in this domain the unit is one prompt**, so what follows is the per-prompt form of
the same test. Published per-prompt or per-token energy, carbon and water
figures with a stated methodology and boundary; the named compute provider's PUE and WUE
where the state is upstream; independent lifecycle assessments. *Search:* the provider's
environmental and engineering documentation for a per-prompt figure; the paper or blog post
behind any headline number, to establish its boundary; the named upstream's figures. A
per-prompt figure whose boundary is not stated is recorded as disclosed but not comparable.

### Unresolved allegations

Two allegations affecting current entries are recorded as allegations and **move no score**:
the February 2026 claim that one provider used irregular accounts to distil a competitor's
model, and the July 2026 claim concerning export controls and training hardware. Neither has
reached the framework's proof bar for a red flag — no regulator finding, court ruling, United
Nations or official mechanism finding, established-watchdog report, or independent human-rights
assessment. They are noted in the entry's summary with their status, dated, and revisited at
each review. A single contested allegation, however widely reported, is not enough on its own.

---

## 8. Output formats

The scorecard HTML is the only output. There is currently **no machine-readable export** for
this tool, unlike the tech-stack scorecard's JSON; if one is added it must carry the framework
version, the assessment dates and the applicability state per cell.

Every rendered result follows the results hierarchy: flags first, then pillar scores with
evidence coverage and assurance mix, then the weak-pillar flag, then the composite (shown by default, always dismissible).
The tool states its framework version and its per-prompt constants in its own output.

---

## 9. Location overrides

**The rule.** A UK, EU or US deployment context overrides a cell only where the criterion's
meaning genuinely changes with the deployer's location:

- **Criterion 12**, where the materiality of a foreign jurisdiction's legal reach depends on
  where the deployer and its users are. This is the main and least contestable case: a Chinese
  or United States hosted service presents a different data-sovereignty position to a UK
  deployer than to a domestic one.
- **Criteria 1, 2 and 13**, where a hosted service's inference runs on a different regional
  grid, or where routing sends a UK user's queries to a distant region. These are
  deployment-level quantities, and location is precisely what they depend on.

Overrides never touch company-level conduct criteria (4, 5, 7, 10, 11), which do not vary with
the deployer, and never touch product-level criteria (3, 8, 9), which describe the artefact
wherever it runs. Each override carries its own dated note and inherits the base cell's
sources.

**Open-weights limit.** For an entry whose model
ships as downloadable weights, the environmental criteria (1, 2 and 13) take **no location
override at all**: inference runs wherever the deployer runs it, so the deployer's grid is the
deployer's footprint and does not belong in the model vendor's column. Falcon's UK/EU
criterion 1 cells take no override on exactly this ground: scoring the UAE grid against a
model trained on AWS and deployable anywhere would attribute the wrong footprint to the wrong
party. **One exception:** where the vendor
itself operates a hosted service in a named region (Mistral's Le Chat, DeepSeek's app), that
service's location facts may enter the cell **as evidence about the hosted service's own
footprint** — dated, sourced, in the note — never as a location override.

**Current state.** Overrides exist for UK, EU and US across 6, 6 and 5 entries respectively,
and they touch criteria 1, 2, 12 and 13 only. **Every override in the data conforms to the rule
above**: no company-level conduct criterion (4, 5, 7, 10, 11) and no product-level criterion
(3, 8, 9) is overridden anywhere. Where an open-weight entry's self-hosting advantage is real,
it is carried as a **mitigation flag** rather than as a location override, which is what
mitigation flags are for.

---

## 10. Decisions raised, not made

Each would change scores or published structure, so each needs approval before
implementation. None is implemented by this document. Decisions since taken and applied are
recorded in the OEEF decision register rather than repeated here.

1. **Implement the criterion 4 and 5 rows in sections 3.2 and 3.3.** Criterion 4 becomes
   *not applicable* for entries owning no hardware, and *scored at the company value* for
   those that do — which resolves all three company-agreement failures on criterion 4
   (Google, Microsoft, OpenAI). Criterion 5 stays scored for all, with unevidenced cells
   restated as 0 / Unknown under the not-disclosed rule rather than the current 1 or 2 with
   inheritance reasoning. **This moves scores for most of the 20 entries**, in both
   directions: removing an inapplicable criterion 4 raises some environmental pillars, while
   restating criterion 5 lowers most social pillars. Delivered as a per-entry diff.
2. **Whether OLMo and Falcon warrant a research-institute governance class.** Both are
   research institutes rather than commercial product companies. Creating the class would make
   criteria 10 and 12 not applicable to them under the same reasoning applied to foundations,
   leaving their governance pillar resting on criterion 9 alone. *Recommendation: do not
   create it.* Both institutes have assessable positions on military use and data governance —
   a state-backed institute especially so — and the foundation reasoning (that a neutral body
   has no such footprint to assess) does not transfer. Keep them scored and record the reason.
3. **The rule for multiple named compute providers.** Claude names two and ChatGPT names three,
   with no published split. *Recommendation:* state the range across the named providers, take
   the worst-performing named provider's figure as the point value, and set the assurance to
   the weakest of the named providers'. The conservative choice avoids rewarding an
   undisclosed split, and the range keeps the uncertainty visible. The alternative — treating
   an unpublished split as *not disclosed* — would score two well-documented providers as if
   nothing were known, which is worse.

---

*British English, GOV.UK plain English. Drafted 29 July 2026 against the built tool as
delivered; approved as version 1.0 on 13 August 2026, with the figures re-verified against the
tool’s own data on that date. If this document and the framework disagree, the
framework wins.*
