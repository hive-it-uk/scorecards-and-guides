# Tech-stack scorecard — scoring methodology

**Version 1.0 — approved 13 August 2026.** Companion to the
[Online Ecosystem Ethics Framework v4](guide-framework.html) and to the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html) v1.6,
which covers the carbon and water **calculator** and is unchanged by this document. This
document covers the **scoring**: what kinds of thing the scorecard assesses, which criteria
apply to them and in which state, what a competent search checks, and how a stack result is
composed.

The calculator reference is to **v1.6 specifically**, which restated the water bands at scores
1 and 0 to 2.3 L/kWh; version 1.5 moved the embodied-energy grid attribution so that all
0.106 kWh/GB takes the world figure rather than a local one. Figures produced under v1.4 or
earlier must be restated rather than carried forward.

Every statement below was checked against the published scorecard — the
[public build](stack.html) and its internal twin — and the data behind it, most recently on
13 August 2026.

---

## 1. Scope and conformance

**Domain.** Technologies used to build and run websites and web applications: frameworks,
libraries, runtimes, database engines, content management systems, hosting and infrastructure
providers, and hosted third-party services integrated into a stack. 92 entries at the time of
writing (verified against `build/data/stack-data.json`, 13 August 2026).

**Framework version.** This tool conforms to the Online Ecosystem Ethics Framework
**version 4** (drafted July 2026).

**Conformance statement.**

*Implemented in full:* the 0–4 scale and assurance levels; performance and evidence as
separate axes; the applicability matrix in section 3 below (three of the framework's five
states are in use as values — see the declared non-conformance at the end of this statement);
criterion levels at the framework defaults; the quantity-versus-duty rule; the weighted
geometric mean with zero-guard and weak-pillar flag; equal pillar weights as default with the equal-weight
sensitivity line; the criterion 9 transparency cap; red flags and mitigation flags reported
separately; the company-agreement and corporate-steward rules; the results hierarchy with the
composite shown by default and dismissible (framework rule C1); evidence-coverage reporting;
the not-disclosed rule with the search standards in section 7.

*Declared deviation — criterion 12 not applicable for open-source entries.* Of the 92 entries,
**42 are not scored on criterion 12 at all**: the 16 corporate-stewarded, 13 foundation and 13
community entries. The exclusion is made by the governance rule in `GOVERNANCE_NA`, which lists
criterion 12 for all three open-source governance classes, and `applicabilityOf()` resolves
governance ahead of entity type — so for those entries the criterion returns **not applicable**,
is excluded from the total and is never penalised. The scored population is **50**. The reason is
structural: self-hosted software transmits no user data to its maintainers, so no data
controller, no jurisdiction and no transfer exposure arises for the project to be judged on.

Two things follow that a reader must not be left to infer. First, **there is no near-uniform
score of 3 recording this** — an earlier version of this statement said there was, and it was
wrong. Those 42 entries carry no criterion 12 score in the result at all; the exclusion is the
record. Second, criterion 12 also covers **security practice**, where these entries genuinely
differ: some run a formal security team, a published security policy and a CVE disclosure
process, and others have none of these. Excluding the criterion excludes that limb with it, so
the variation is **not assessed anywhere in this tool** — not narrowed into a lower score, not
carried by a flag. That is a real gap, declared here rather than carried quietly. Assessing the
security limb would need per-project evidence and its own applicable criterion; it is recorded
as available future work, not a defect to be silently carried.

*Declared deviation:* the calculator rescales the Sustainable Web Design model's published
rating bands by the ratio of the current Ember world grid intensity to the intensity the
bands were calibrated against (458.54 / 494 g CO₂e/kWh, giving thresholds of 0.111 g and
0.334 g per page view). Keeping the published bands against a lower world intensity would
flatter every site assessed. Full arithmetic in the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html) v1.6.

*Declared domain binding — the criterion 7 (workers and labour) scale.* Framework v4's
criterion levels are adopted without departure, but they do not say where the boundaries fall
for a software company that publishes nothing, which is most of this tool's population. The
calibrated scale in section 4.1 fixes those boundaries for this domain: an explicit denial of
representation scores 1, silence or boilerplate scores 2, functioning representation scores 3.
It narrows the framework's levels rather than replacing them, and it is declared here because
a reader comparing two tools' criterion 7 scores needs to know the boundary rule that produced
them.

*Declared non-conformance — two applicability states are declared but unused.* Framework v4
declares five applicability states. This tool uses **three** as values: `scored`, `inherited`
and `not_applicable`. `upstream` and `not_disclosed` are declared in the vocabulary of
`APPLICABILITY` and handled by the resolution point, but **no entry carries either as a
value** — verified 13 August 2026 across the shipped HTML and `build/data/stack-data.json`.
Where sections 3.2 and 3.3 record a row as *upstream* or *not disclosed*, that is a **target
state, not an implemented one**: the cell is at present `scored`, at the upstream provider's
value, with the attribution stated in the note. The scores are correct; what is missing is
machine-readable state, which v4 asks for so that a consumer of the export can tell the two
apart without reading prose.

This is a **deliberate declaration, ruled on 13 August 2026**, not an outstanding defect.
Re-engineering the applicability layer would move no score and would risk several, so the
state is declared here and in the published export instead. Two related points, both verified
the same day: **no cell in this tool carries a per-cell `na` flag** (the mechanism v4 forbids —
the count is zero, down from 51), and `APPLICABILITY_EXCEPTIONS` holds **exactly one entry**,
`cloudflare` criterion 8 kept scored, with its reason recorded beside it in the code.

## 2. Entity taxonomy

### 2.1 Entity types

| Type | Definition | Examples |
|---|---|---|
| **Frontend framework or library** | Software that runs in, or renders for, the visitor's browser. Ships no service and owns no infrastructure. | React, Vue, Svelte, Astro, MUI |
| **Full-stack framework** | Server-side framework that ships user-facing surfaces of its own — templating defaults, admin interfaces, form rendering. | Django, Rails, Laravel, Symfony, ASP.NET Core |
| **Server-side runtime or engine** | Server software with no user interface of its own: micro-frameworks, runtimes, web servers, orchestrators, search and database engines, ORMs. | Express, Node.js, Nginx, Kubernetes, PostgreSQL, Prisma |
| **CMS (self-hosted)** | Content management software the deployer hosts. Editor interfaces are user-facing surfaces. | WordPress, Drupal, Craft, Umbraco, Payload |
| **Infrastructure provider** | A company that runs (or resells) the physical or edge infrastructure workloads execute on. | Hetzner, OVHcloud, AWS, Vercel, Fastly, Cloudflare |
| **Hosted service (SaaS)** | A third-party service integrated into a stack and operated entirely by its vendor, including headless CMS SaaS and managed cloud services. | Stripe, Auth0, Plausible, Contentful, GA4, DynamoDB, Lambda |

This is a **behavioural** taxonomy: the type is decided by what the thing is and does, not by
the menu it appears under in the tool. The current data model's seven display categories
(`frontend` / `backend` / `database` / `cms` / `hosting` / `saas` / `cloud`) map onto these
six types imperfectly in five places — see decisions 10.1 to 10.3.

### 2.2 Governance classes

| Class | Definition | Effect |
|---|---|---|
| **Corporate product** | Built, sold and controlled outright by a company. | Company-level criteria bind: the product takes the company's scores. |
| **Corporate-stewarded open source** | Open licence, outside contributors, forkable — but one company controls repository, roadmap or trademark. | Criteria 10, 11 and 12 not applicable; steward named and disclosed beside the result, with a flag where the steward scores 0–1 on a company-level criterion. Criterion 7 scored against the project's own contributors. |
| **Foundation-governed** | Governed by an independent foundation. | Criteria 10 and 12 not applicable (nothing at those criteria varies for a neutral foundation); criterion 11 stays scored, because political conduct genuinely varies between foundations. |
| **Community project** | No controlling company or foundation. | As foundation-governed. |

## 3. The applicability matrix

One state per criterion and entity type, with the reason. Everything not listed is **scored**.
Levels are the framework defaults (company: 4, 5, 7, 10, 11, 12; product: 3, 8, 9;
deployment: 1, 2, 6, 13).

**Read the *upstream* and *not disclosed* rows in 3.2 and 3.3 as target states.** Neither is
carried as a value by any entry; those cells are scored at the upstream provider's value with
the attribution in the note. The declared non-conformance in section 1 sets out why.

### 3.1 Software the deployer hosts

Applies to: frontend, full-stack framework, server-side runtime or engine, CMS (self-hosted).

| Criterion | State | Reason |
|---|---|---|
| 1 Carbon, 2 Water, 6 Communities, 13 Per-unit | **inherited** | Deployment-level quantities. The software's footprint is whatever host the deployer picks; the entity is judged on whether it makes responsible choices possible (framework section 3). |
| 4 Repairability | **not applicable** | A company-level practice of hardware owners. These entities own no hardware, so there is no practice to assess. Software-driven obsolescence, where relevant, is assessed under criterion 3 signals instead. |
| 5 Responsible sourcing | **not applicable** | The company-level duty attaches to buying or making hardware. A software project procures none, so — unlike a compute buyer — it has no supplier to select or question. |
| 8 Accessibility (server-side runtime or engine only) | **not applicable** | No user interface of its own; accessibility belongs to whatever front end is built on top. For frontend, full-stack frameworks and CMSs, criterion 8 stays **scored**: rendered output, templating defaults and editor interfaces are user-facing surfaces. |
| 7 Workers | **scored** | Against the project's own contributors and employer, per the steward rule. |
| 3 Efficiency, 9 Transparency, 12 Privacy* | **scored** | Product and company properties of the artefact and its governing body. *12 becomes not applicable where the governance class says so (section 2.2). |

### 3.2 Infrastructure providers

| Criterion | State | Reason |
|---|---|---|
| 1, 2, 13 (owns data centres) | **scored** | The quantities arise in the entity's own facilities. Raw metrics (grid intensity, WUE, PUE) recorded per provider with source and assurance. |
| 1, 2, 13 (platform on a **named** upstream) | **upstream** | The quantity is physically consumed in the named provider's infrastructure; its figure and assurance carry across unchanged. Where the upstream is **unnamed**, there is nothing to attribute to: **not disclosed**. |
| 4 Repairability | **scored** where the entity owns or designs hardware; **not disclosed** where it runs on colocation or a platform and publishes nothing. It is never inherited: hardware stewardship is this entity's own practice or its own gap. |
| 5 Responsible sourcing | **scored — always.** Owners and designers are scored on their own due diligence; buyers and resellers on supplier selection and enquiry. Never satisfied upstream (quantity-versus-duty rule). |
| 6 Communities | **scored** for entities that site facilities; **upstream** for platforms locked to a named provider, whose siting it is. |
| 8 Accessibility | **scored** | Not applicable only where the entity ships no human-facing interface at all. A control panel, dashboard or developer console is a user-facing surface, whoever its users are — an inaccessible one excludes disabled administrators and developers from using the provider, a real digital-inclusion harm even though it never reaches the provider’s *customers’* site visitors. The narrower reading conflates two audiences: the provider’s customers’ visitors (correctly out of scope) and the provider’s own users (in scope). All 19 infrastructure-provider cells (`entity_type: infra`) are scored and sourced, and the column reads 70 scored cells at 70/70 sourced. |
| 3, 7, 9, 10, 11, 12 | **scored** | The provider's own product properties and company duties. |

### 3.3 Hosted services (SaaS)

| Criterion | State | Reason |
|---|---|---|
| 1, 2, 13 | **upstream** where the compute provider is named; **not disclosed** where it is not. Same rule as platforms in 3.2 — a hosted service is a locked-in deployment on its vendor's chosen infrastructure. |
| 4 Repairability | **not applicable** | No hardware of the entity's own; an absent supply chain is not an undisclosed one. (Cloudflare, the one entry owning edge hardware, is typed as an infrastructure provider and scored there.) |
| 5 Responsible sourcing | **scored** | The company-level duty of any compute buyer: supplier selection and enquiry, the same treatment platforms receive in 3.2. All 27 hosted-service entries are scored and sourced on criterion 5 (verified 13 August 2026; 22 sit at 1, three at 2, two at 3). |
| 6 Communities | **scored** | Vendor conduct and locked-in siting; low scores where nothing is found follow the not-disclosed rule. |
| 8 Accessibility | **scored** | The embedded widget, checkout, dashboard or API console is a user-facing surface. What counts is the component that reaches the client's visitors. |
| 3, 7, 9, 10, 11, 12 | **scored** | Product properties and company duties, with the company-agreement rule binding entries of the same vendor across the toolsuite. |

### 3.4 Zero-variance record

Run at each release. **It is a blocker**; it was a warning only in the releases
before that date.
Constants found and resolved to date: accessibility scored a flat 1 across all database
engines (reclassified not applicable, v3.2 — these ship no interface and are unaffected by
the A2/A11 correction, which concerns infrastructure providers' control panels, not database
engines); criteria 10 and 12 flat 3 across all 29 foundation and community projects
(reclassified via governance class, v3.2); criterion 13 flat 2 across 44 host-dependent
entries (reclassified inherited, v3.2); criteria 4 and 5 scored 0 across 71 "no own hardware"
cells (split between not applicable and genuine not-disclosed, v3.2–3.5). **Reopened this
session:** accessibility scored a near-constant 2 across the 18 hosting entries with zero
sources — this was the same failure the earlier reclassifications caught, wearing the
opposite disguise: a flag marking the row not applicable, rather than a repeated default
value, was suppressing the finding. Corrected by A2/A11; restated once A12 reports.

**Both constants that were outstanding here are now resolved, and this paragraph is kept
because the resolutions differ instructively.** It previously read that criterion 7 at 2 across
volunteer-maintained projects and criterion 12 at 3 across self-hosted software were "plausibly
genuine but due a recorded justification at the next release", and that criterion 7 was
unsourced. Both statements are out of date:

- **Criterion 7 no longer sits on a labour-law assumption.** Rulings 71–120 sourced it to
  **84 of 92 cells** (verified 13 August 2026) and
  replaced the assumption with the calibrated scale in section 4.1. The
  volunteer-project cluster was ruled on evidence, not waved through: criterion 7 is scored
  against the project's own contributors, which is a different question from the steward's
  employment record. The eight cells still unsourced are private companies with no reachable
  instrument, and each now says so in its own note rather than asserting a legal frame.
- **Criterion 12's cluster cleared as sourcing improved**, and the suite's only surviving
  zero-variance report is **cloud** criterion 12, carried as a recorded structural exception
  with its justification recorded, and reported at every release rather than hidden.

The detector that raised both is a **blocker**, and
negative-tested. Nothing here is outstanding.

## 4. Criterion levels

Framework v4 defaults adopted without departure — no criterion is moved between the company,
product and deployment levels. Section 4.1 below is not a departure but a **domain binding**:
it fixes where the boundaries of criterion 7's levels fall in this domain, and it is declared
as such in the conformance statement in section 1.

### 4.1 Criterion 7 (labour): the calibrated scale

The framework's levels state what the criterion measures; they do not say where the boundaries
fall for a **software company that publishes nothing**, which is most of this tool's population.
Six rulings settled that, and the scale is recorded here so it is not re-derived from scratch:

| Score | What earns it | Set by |
|---|---|---|
| **1** | An explicit denial of representation anywhere in the workforce, or a mass layoff at the scale the column has treated as material | Ruling 71 (DigitalOcean, Hetzner: "no employee anywhere is represented"); rulings 82–83, 97 (the layoff bar) |
| **2** | Silence, boilerplate, or a **register-confirmed non-exercise** of a statutory right | Rulings 71, 103 (Brønnøysund), 104, 112 |
| **3** | Functioning representation — a body that exists and operates | Ruling 115 (Algolia's separately registered, **operating** CSE) |

Three rules govern its application, each learned by getting it wrong first:

1. **Silence in a filing is not a denial.** Only an explicit statement that no employee is
   represented reads as 1. Ruling 71 established this after finding that not one of seven annual
   reports repeated DigitalOcean's explicit formula; most are simply silent.
2. **Do not carry the absence-equals-3 habit into this criterion.** On criteria 10 and 11 a
   verified absence of military or political involvement earns a 3. Here an absence of worker
   representation is not a virtue.
3. **Boilerplate is not disclosure.** Ruling 112 found New Relic's apparently distinctive
   mixed disclosure — a US denial alongside non-US collective bargaining — reproduced word for
   word in Twilio's 10-K. Check whether a sentence is the company's or its lawyers' before
   scoring on it.

Instruments that work, and their limits, are in section 7 under C7; the ones that produce false
nils are recorded in the rulings files rather than here, because that list grows.

## 5. Constants and models

All calculator constants are defined in the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html) **v1.6** and
referenced here rather than repeated. Framework v4 requirement 4 asks for a **source and a
date** against every constant, so both are given below; where a date cannot be established from
the source itself, that is said rather than guessed.

| Constant | Value | Source | Date |
|---|---|---|---|
| SWD v4 energy intensity | 0.30 kWh/GB — operational 0.194 (data centre 0.055, network 0.059, device 0.080), embodied 0.106 (data centre 0.012, network 0.013, device 0.081) | Sustainable Web Design Model version 4, `sustainablewebdesign.org/estimating-digital-emissions/` | **The page carries no publication date we have recorded.** Model version 4 identifies it; the figures were transcribed from the built tool on 29 July 2026 and re-verified against it on 13 August 2026 |
| Grid intensities | UK 217.33, EU 209.64, World 458.54 g CO₂e/kWh | Ember, Yearly Electricity Data, "Total generation" (lifecycle CO₂e) | 2025 release. **The retrieval date is not recorded** in the calculator methodology; the figures were re-verified in the built tool on 13 August 2026 |
| Rescaled rating bands | 0.111 g and 0.334 g per page view (SWD's published 0.12 / 0.36 × 458.54 / 494) | SWD v4 Digital Carbon Ratings thresholds, rescaled — a declared deviation, section 1 | Rescaling introduced in calculator methodology v1.4, July 2026 |
| Score-0 water fallback | 2.30 L/kWh — a deliberate penalty equal to the worst published figure, so non-disclosure can never score better than disclosed-poor | Microsoft's published first-generation water-cooling figure, 24 June 2026; restated from Shehabi et al. 2016's 1.80 (a superseded modelling assumption) | Calculator methodology v1.6, 13 August 2026 |
| Segment attribution | Host grid intensity to 0.055 kWh/GB; audience-weighted intensity to 0.139; world figure to all 0.106 embodied | Calculator methodology v1.6, section 5.3 below | v1.5, July 2026; verified in the shipped tool 13 August 2026 |

The carbon fallback bands in 5.2 are the one set of constants with no single citable source.
Their derivation is reconstructed in the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html) under
Step 1; see section 10 for what that reconstruction can and cannot establish.

### 5.1 Raw provider metrics

Providers that disclose them carry `grid_ci` (g CO₂e/kWh), `wue` (L/kWh) and `pue`, each with
a named source and an assurance level. The calculator prefers a raw `grid_ci` or `wue` over any
score-derived value.

**`pue` is recorded but never read.** It is stored for documentation and is not an input to any
calculation. Efficiency enters the model through the Sustainable Web Design constants, not
through a per-provider PUE. Stating otherwise would overclaim the precision of the result.

Six providers carry raw metrics. **Re-transcribed from `build/data/stack-data.json` on
13 August 2026**, replacing the 29 July 2026 transcription, which four register corrections had
overtaken — the changes are named in the last column:

| Provider | `grid_ci` | `wue` | `pue` | Assurance | Source and date |
|---|---|---|---|---|---|
| Hetzner | 60 | not disclosed | 1.13 | Self-reported | Hetzner sustainability FAQ, 2024 — PUE self-reported; 100% renewable EACs; German grid |
| OVHcloud | 55 | 0.20 | 1.18 | Verified | French core-facility scope. WUE 0.20 is the worst case of the Apave-audited 0.17–0.20 water-loop `WUE_REF`, attestation C23061463M0004, **validated 18 October 2023**; PUE 1.18 is the FY23 fleet average, Apave-audited; grid CI 55 is the French national grid average |
| Scaleway | 53 | 0.0001 | 1.37 | Verified | Scaleway Annual Impact Report and Scaleway's own environmental page — **PUE is the published 1.37**, not the 1.02 an earlier draft carried; patented adiabatic cooling gives the near-zero WUE; EcoVadis Gold; SBTi-validated parent |
| AWS | 180 | 0.12 | 1.14 | Self-reported | AWS Sustainability Report, 2023 — PUE and WUE published; intensity adjusted for imperfect renewable matching |
| Microsoft Azure | 175 | 0.49 | 1.12 | Self-reported | Microsoft Sustainability Report — PUE published; **WUE is the global-fleet 0.49**; a narrower 0.125 figure is not fleet-wide and is not used here; intensity adjusted for renewable matching |
| Google Cloud | 150 | not disclosed | 1.09 | Self-reported | Google Environmental Report — PUE published; **no fleet-wide WUE is published, so no figure is carried** (a 0.15 once recorded here was very likely a mix-up with AWS's published figure); 24/7 carbon-free energy partially achieved |

Each source's own date is given where the artefact carries one. Three do not state a report
year in the record (Scaleway, Microsoft, Google), and rather than infer one this document says
so; the transcription date above is what can be vouched for.

Hetzner and Google Cloud disclose no water figure, so their water calculation falls back to the
band in 5.2 even though their carbon calculation uses a raw metric. A result can therefore be
raw on carbon and score-derived on water, and the tool's method badges must continue to say so
per metric rather than per provider.

**A scope caveat.** OVHcloud's figures are its French core facilities, while the hyperscalers'
are global-fleet, so the comparison flatters OVHcloud.
The tool records this beside the entry rather than adjusting the number.

### 5.2 Score-derived fallback bands

Where the selected host has no raw metric, the calculator derives one from that host's
criterion score. Transcribed from the tool on 29 July 2026 and **re-verified against
`stack-internal.html` on 13 August 2026** (identical in the internal and
public builds).

**Carbon intensity, from the criterion 1 score** (g CO₂e/kWh):

| Criterion 1 score | Intensity |
|---|---|
| 4 | 50 |
| 3 | 175 |
| 2 | 320 |
| 1 | 442 |
| 0, or no host selected | 458.54 (the world average, `SWD_V4.globalCI`) |

The 0 point is deliberate and is documented in the code: an undisclosed host is treated as
grid-average, **not** better than average. Note that 0 is therefore worse than 1 — which is the
correct direction, because a host that discloses nothing has earned no credit against the world
figure.

**Water use effectiveness, from the criterion 2 score** (L/kWh):

| Criterion 2 score | WUE |
|---|---|
| 4 | 0.003 |
| 3 | 0.12 |
| 2 | 0.5 |
| 1 | 1.5 |
| 0, or no host selected | 1.8 |

**The water bands must not invert at the bottom.** An earlier version of the calculator
returned a *better* water use effectiveness for a host scoring 0, and for "no host selected",
than for a host scoring 1 — so non-disclosure was rewarded over minimal disclosure. That is
the opposite of the rule the carbon bands implement one line above, and a breach of the
framework's not-disclosed principle. The band is monotonic across its whole range now, and the
0 point rests on a published figure rather than on a modelling assumption.

**The band values themselves are defined by the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html), which is
authoritative for them; cite its current version.** Water figures produced under calculator
v1.5 or earlier understate use for a host scoring 0 or 1 and must be restated rather than
carried forward.

One citation trap is worth keeping: **1.80 L/kWh is not a citation for this band.** The figure
is widely repeated, but the Green Grid's 2011 value of the same number is a source-side
grid-water intensity (EWIF) — a different metric that coincidentally shares the value.

**What these bands are, and are not.** They are a judgement mapping from a qualitative score to
a physical quantity, not a measured relationship. The values sit close to the raw metrics
recorded for providers at the same score — band 3 for carbon (175) is Azure's raw figure, band 4
(50) is near the three European independents' 53 to 60, and band 3 for water (0.12) is AWS's
published WUE — which is how they were calibrated. The derivation of the carbon bands is
reconstructed in the calculator methodology; what that reconstruction can and cannot establish
is set out in section 10, and the honest position is that bands 2 and 1 are calibrated in shape
but not in magnitude. The water bands carry published figures at both ends.

Any output resting on a band rather than a raw metric is labelled as score-derived, and the
distinction is carried into the Carbon Reduction Plan data block. A band is an estimate about a
provider that has not published, and it is never presented as a measurement.

### 5.3 Where the host intensity applies

**Confirmed against `stack-internal.html` on 13 August 2026.** The split is by
**operational versus embodied energy**, not by place, and there are three destinations:

| Share | Value | Takes the intensity of |
|---|---|---|
| `OP_DC_SHARE` | 0.055 kWh/GB | The **host's** grid |
| `OP_NONDC_SHARE` | 0.139 kWh/GB (network 0.059 + device 0.080) | The **audience-weighted** regional grid |
| `EMBODIED_SHARE` | 0.106 kWh/GB, 35% of the total | The **world** figure, 458.54 g CO₂e/kWh, regardless of host or audience |

Water uses operational data-centre energy alone (0.055 kWh/GB) against WUE.

**This supersedes the v1.4 description this section previously carried**, which had the host's
intensity applied to a combined data-centre segment of `DC_SHARE` 0.067 kWh/GB (operational
0.055 **plus embodied 0.012**) and the audience-weighted figure to `NONDC_SHARE` 0.233 kWh/GB
(operational 0.139 **plus embodied 0.094**). Grouping by place gave all 0.106 kWh/GB of
embodied energy a local grid figure. Embodied energy is hardware manufacture, which happens
across a worldwide supply chain: SWD says explicitly that it must not be varied, and the Green
Web Foundation's co2.js enforces it — `embodiedEmissions()` accepts no grid-intensity argument
at all. Calculator methodology v1.5 made the change, and `carbon_crosscheck.cjs` asserts
agreement with co2.js v0.18.0 per segment on every release.

**Figures produced under the v1.4 attribution are too low** — by up to 54% for a low-carbon host
serving a UK or EU audience, and by under 5% for a worldwide audience — and must be restated
rather than carried forward.

## 6. Stack composition rules

1. **System boundary first.** Name the layers in scope and the functional unit before
   composing anything (framework section 6, step 1).
2. **Host substitution.** For every criterion a technology holds in the *inherited* state,
   the selected host's scored value substitutes in. The impact then belongs to the host: it is
   not also counted against the technology (count-once).
3. **Upstream pass-through.** *Upstream* values are already the named provider's figures; if
   that provider is also separately in the stack, count the impact once and record where it
   was assigned.
4. **CDN attribution.** Page weight served by a CDN is split from origin-served weight by
   byte share; each byte is assigned to exactly one party and the split must reconcile to the
   total (calculator methodology v1.5).
5. **Aggregation.** Pillar scores are the arithmetic mean of applicable criteria after
   substitution; pillars combine by the weighted geometric mean with the 0.01 zero-guard and
   weak-pillar flag. Equal weights default; any custom weighting is reported beside the
   equal-weight figure.
6. **Presentation.** The results hierarchy applies: flags, then pillar scores with coverage
   and assurance mix, then the weak-pillar flag; the composite shown by default, always
   dismissible, never alone.

## 7. Authoritative sources and search standards

For each criterion: the sources treated as authoritative in this domain, and the **search
standard** — what a competent search checks before a cell is concluded *not disclosed*. An
assessment records the search date and any deviation; it does not repeat this list.
Independent and adversarial sources take precedence over self-disclosure throughout
(framework section 4).

**C1 Carbon.** Provider sustainability or environmental report and any CSRD filing; the
Science Based Targets initiative dashboard for target validation; the Green Web Foundation
directory; CDP where the provider participates. Search: the provider's sustainability pages,
SBTi dashboard by company name, GWF directory, and one news search for enforcement or
greenwashing findings.

**C2 Water.** Provider WUE or water disclosures (per-site where available); sustainability
report water sections. Search: sustainability report and FAQ pages for "water", "WUE",
"cooling"; where the entity runs on a named upstream, the upstream's water disclosure is the
figure (upstream state), not a finding about this entity.

**C3 Efficiency.** Published PUE; technical documentation and engineering blogs for
architecture-level efficiency; independent benchmarks where they exist. Search: provider
technical docs and sustainability FAQ; for software, the project's own documentation and
credible independent benchmarks.

**C4 Repairability and e-waste.** Circularity programme pages, refurbishment and
server-auction schemes, e-waste and recycling rates in the sustainability report. Search:
sustainability report and dedicated circularity pages; for software, support-lifecycle and
backward-compatibility policy (assessed under criterion 3 signals).

**C5 Responsible sourcing.** SEC Form SD and conflict-minerals report where the company
files; OECD-aligned due-diligence reporting; Responsible Minerals Initiative participation;
supplier-responsibility pages; for buyers, any published supplier requirements or enquiry.
Search: SEC EDGAR for Form SD; the company's supplier-responsibility and ESG pages; RMI
member list. Reuse and refurbishment found here are recorded as mitigation, never as
diligence.

**C6 Local communities.** Investigative and local reporting on data-centre siting, water
stress and grid impacts; company community programmes; documented disputes. Search: news
search for the company plus "data centre" with siting, water and community terms; company
community pages second.

**C7 Workers and labour.** Regulator and court records (in the US, the NLRB docket); reports
from established labour watchdogs (for example the Economic Policy Institute, the Business &
Human Rights Resource Centre); credible investigative journalism; layoff and dispute
reporting. Search: NLRB docket or home-jurisdiction equivalent by company name; BHRRC company
page; one news search for disputes, layoffs and union activity. For open-source projects, the
project's own contributor arrangements, not the steward's record (which the steward
disclosure carries). Score against the scale in section 4.1.

Three limits on those instruments are load-bearing, because a nil from the wrong one is not a
nil:

- **The NLRB docket is currently unreachable** — nlrb.gov refuses connections on every
  transport tried, confirmed five times to 13 August 2026 with a working control on another
  federal host. Archived captures serve a docket you can already name, so the docket
  evidences a **known** case and cannot test for an unknown one. A site-restricted web search
  over it is **presence-only**: it returns the right docket for a real employer and answers a
  nonsense company name with ten plausible near-name dockets.
- **BHRRC is presence-citable, absence-citable only where a profile exists.** A
  profile recording zero allegations is an independent monitor's nil and supports a 2, as it
  does for Netlify and Webflow. **No profile at all is not that** — it is nothing to cite.
- **Statutory registers vary by country and most cannot answer this question.** Norway's
  Brønnøysund can (board roles, free JSON) and France's register can, through separately
  registered CSE entities. Germany's free routes cannot: `bundesanzeiger.de` and
  `unternehmensregister.de` are client-rendered and fail a positive control, so
  German annual accounts are a browser task. Italy's are paid.

Where none of these reaches a company, record the cell as searched and gapped, in the note, in
those words. Eight cells stand that way deliberately: bitly, datocms, fly, intercom, railway,
render, sentry and vercel — all private US or US-incorporated companies with no reachable
instrument, which is why criterion 7 stands at 84 of 92 rather than 92 of 92. An honest gap
that says so is
worth more than a cell that asserts "US labour law" and leaves a reader unable to tell.

**C8 Accessibility.** A published accessibility statement or conformance report — VPAT /
Accessibility Conformance Report against WCAG, Section 508 or EN 301 549. Search: the
provider's accessibility page and trust centre; the ITI VPAT registry pattern
("[product] VPAT"); for component libraries, the project's accessibility documentation.
A report available only on request through a gated channel is disclosure, but gated —
recorded as such; a request-only channel that does not answer is not publication.

**C9 Transparency.** What is published at all, and whether anyone independent can check it:
third-party audits, EcoVadis or equivalent ratings, security audits of open artefacts,
certification registers. The cap applies: without independent verification (including the
fully-open-artefacts route), the score cannot exceed 2, however detailed the self-reporting.
Search: the provider's reporting index; certification and rating registers; for open source,
the licence, governance documents and any published third-party audit.

**C10 Military use.** Procurement records and contract announcements; the company's own
defence product pages; documented investigative reporting on military supply. Search: news
and procurement search for the company plus defence, military and contract terms; the
company's own solutions pages for a defence or intelligence product line — active
defence-sector marketing is itself a finding.

**C11 Political involvement.** OpenSecrets (US federal lobbying and spending);
jurisdiction-appropriate lobbying registers (the UK and EU registers for companies active
there); the company's own political-activity report where one exists. Search: OpenSecrets by
company name; home-jurisdiction register; one news search for political controversy.

**C12 Privacy and data governance.** Jurisdiction first (which legal regimes can reach the
data — the company-level core); then regulator enforcement records (EU and UK data-protection
authorities), the privacy policy and DPA availability, residency options, and documented
breach or default-insecurity history. Search: DPA enforcement databases by company name;
privacy policy and trust centre; breach reporting. Product-specific exposure beyond the
company baseline is carried by a red flag, not the score.

**C13 Per-unit efficiency.** Published per-unit figures with methodology; PUE and WUE as
inputs; for providers on a named upstream, the upstream's figures (upstream state). Search:
sustainability and engineering documentation for per-request, per-compute-hour or
per-workload figures.

## 8. Output formats

The scorecard HTML (internal build with client presets; public build without), the
machine-readable JSON export, and the Carbon Reduction Plan data block. Every rendered result
follows the results hierarchy; every view states evidence coverage and the assurance mix; the
composite is shown by default and dismissible. The CRP data block states the model version, constants, audience
mix, grid source and band rescaling in its own output.

## 9. Location overrides

The rule, not just the values: a UK, EU or US deployment context overrides a cell only where
the criterion's meaning genuinely changes with the deployer's location — criterion 12, where
the materiality of a foreign jurisdiction's legal reach depends on where the client and its
users are; and criterion 1, where a provider's renewable profile meets a different local
grid. Overrides never touch company-level conduct criteria (7, 10, 11), which do not vary
with the deployer. Each override carries its own note and inherits the base cell's sources.

## 10. Decisions raised, not made

**One outstanding.** The release check does not enforce source-and-date on calculator
constants, so a constant can still be added or changed carrying neither. Recorded as open
rather than settled.

Every other decision this document raised has been taken and applied, and each is described in
the section it affects: the `fullstack`/`engine` split and the dissolution of the `cloud`
category (section 3), the removal of the per-cell `na` flags — the count in this tool is now
**zero**, down from 51, with `APPLICABILITY_EXCEPTIONS` holding one entry (Cloudflare's
criterion 8, scored) — hosted-service criterion 5 becoming scored (section 3.3), the
near-constant clusters resolved by sourcing rather than by justification (section 3.4), and
both fallback band corrections (section 5.2). The decision trail itself is in the OEEF decision
register rather than repeated here.

**A limitation that no approval can close, so it is stated rather than raised.** The carbon
fallback bands at scores 2 and 1 are judgement values whose original derivation was never
written down. Bands 4 and 3 are calibrated against the published provider metrics in
section 5.1 — the renewable European cluster at 53–60 and the market-based hyperscaler range at
150–180 — and band 0 is the Ember world figure. For bands 2 and 1 the calculator methodology's
account is a **reconstruction, not a record**: 320 matches the band-3/world midpoint to two
significant figures, and 442's attribution to IEA 2022 could not be confirmed against IEA's
published series (≈460 for 2022; 445 for 2024). The bands are monotonic and defensible in
shape, and calibrated in magnitude only at the ends. A reader relying on a band rather than a
raw metric should treat the middle of the range accordingly — which is why any output resting
on a band is labelled score-derived.

---

*British English, GOV.UK plain English. Prepared 29 July 2026; section 5 constants
transcribed from the built tool and re-verified against it on 13 August 2026. Approved as
version 1.0 on 13 August 2026. If this document and the framework disagree, the framework
wins.*
