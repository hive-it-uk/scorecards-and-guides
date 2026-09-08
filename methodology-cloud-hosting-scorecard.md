# Cloud and hosting scorecard — methodology

**Version 1.0 — approved 13 August 2026.** Companion to the
[Online Ecosystem Ethics Framework v4](guide-framework.html) and to the
[stack impact calculator methodology](guide-stack-impact-calculator-methodology.html) v1.6,
which holds the carbon and water model this tool refers to but does not implement. This
document covers the **scoring** of hosting and cloud infrastructure providers: what kinds of
thing the scorecard assesses, which criteria apply to them and in which state, what a
competent search checks, and how a provider composes into a stack.

Every statement below was checked against the published
[cloud and hosting scorecard](hosting.html) and the data behind it, most recently on
13 August 2026.

---

## 1. Scope and conformance

**Domain.** Companies that run, rent or resell the infrastructure a website or web application
executes on: hyperscale cloud platforms, independent European and UK hosts, and hosting
companies built on someone else's cloud. **14 entries** at the time of writing. Fastly, Vercel, Heroku, Kinsta and Cloudways are
**not** in this tool; they are assessed as
[tech-stack scorecard](guide-methodology-tech-stack-scoring.html) entries. The taxonomy in
section 2 is built from this tool's actual contents.

**Framework version.** This tool conforms to the Online Ecosystem Ethics Framework
**version 4** (on its release; drafted July 2026).

### Conformance statement

**Implemented in full.** The 0–4 scale and the four assurance levels; performance and evidence
as separate axes, with no evidence multiplier; the weighted geometric mean with the fixed 0.01
zero-guard and the weak-pillar flag; equal pillar weights as the default with the equal-weight
sensitivity line; red flags reported separately; evidence-coverage reporting; the
source-priority rule; location overrides confined to the criteria where location genuinely
changes the meaning (section 9 — this tool is the toolsuite's cleanest case).

The scoring engine (`effective()` / `pillarScore()` / `geoOverall()`) is the canonical engine
core, byte-identical across the toolsuite and generated from `build/engine/engine-core.js`.

**Plain-language measure.** The tool carries a glossary overlay of **50 definitions in seven
sections**, of which the "Acronyms and abbreviations" section holds **exactly 25** — from
B Corp and CSRD through PUE, REGO, RMAP, SBTi and the three emissions scopes to WUE. The other
25 explain the scoring scale (5), the overall bands (4), the assurance levels (4), the provider
type badges (3), the filters and controls (4) and per-unit efficiency (5). This is how the tool
meets the framework's plain-English commitment in a domain that cannot avoid technical
vocabulary.

*Count verified 13 August 2026* by enumerating the `<dt>` elements inside `#gloss-overlay`,
section by section: the structure is `<dl class="gloss-list">` under each
`<h3 class="gloss-section">`.

**Declared deviation.** **Pillar band labels.** Pillar scores are described using thresholds of
3.0 / 2.0 / 1.0 and composite percentages using 80 / 60 / 40, aligned across the toolsuite.
The earlier thresholds of 3.5 / 2.5 / 1.5 made the same pillar score read as "Leading" in one
tool and "Good" in another. A deliberate, documented divergence.

**Known non-conformance.** One remains, and it is declared here rather than fixed.

**The applicability layer carries no declared states in this tool.** `APPLICABILITY` and
`GOVERNANCE_NA` are both empty, all 14 entries are governed as `corporate_product`, and no cell
carries a per-cell `na` flag — so **every criterion resolves to `scored` for every provider**.
The scores are correct; what is missing is the machine-readable state framework v4 section 3
requires, which no note text or code convention may stand in for. The matrix in section 3 is
the data a declared applicability layer would use.

**The two tools agree on criterion 8.** Verified against the built files: the tech-stack
scorecard's `infra` applicability row is empty, so **all 19 of its infrastructure entries are
scored on criterion 8 and all 19 carry sources**, and `APPLICABILITY_EXCEPTIONS` holds
**exactly one entry suite-wide** — Cloudflare's criterion 8, kept scored, and redundant rather
than load-bearing. Both tools score criterion 8 for infrastructure providers under the same
rule, so two conforming tools do not give opposite answers about the same kind of company.

---

## 2. Entity taxonomy

Two axes. The **infrastructure relationship** decides the applicability states, because it
decides who physically causes each impact. **Market position** is the governance dimension and
drives the filter controls, but changes no state.

### 2.1 Infrastructure relationship

| Type | Definition | Entries |
|---|---|---|
| **Owns and operates data centres** | Runs its own facilities: it holds the power contracts, designs or specifies the cooling, and owns the buildings or long leases on them. | Google Cloud, AWS, Microsoft Azure, Infomaniak, OVHcloud, Hetzner, Scaleway (7) |
| **Colocation tenant** | Owns and operates its own servers inside data centres it rents space in. It buys the power and chooses the facility, but the building, cooling plant and water belong to the landlord. | DigitalOcean, Katapult, Freethought, Kualo, Mythic Beasts, BlackBox Hosting (6) |
| **Reseller on a named upstream** | Sells hosting that runs on another provider's cloud platform. It owns no servers. | SiteGround (on Google Cloud) (1) |

**Why the middle type needs to exist.** A colocation tenant is neither an infrastructure owner
nor a reseller, and treating it as either produces a wrong answer. Its electricity contract,
server fleet, refurbishment policy and utilisation are genuinely its own — so carbon,
repairability and per-unit efficiency are scored against it. Its cooling water and building
efficiency are genuinely not — those belong to the facility operator. Five of the fourteen
entries sit here, so the distinction is load-bearing rather than theoretical.

**A note on BlackBox Hosting.** Its own marketing describes two sovereign UK data centres in
London Docklands, which would make it an owner-operator. **It is classified here as a
colocation tenant, on its filed accounts rather than its marketing.** The FY2025 accounts
(Companies House 08728513, filed 23 April 2026) carry **£249,317 of tangible fixed assets whose
only class is "Computer equipment — 33% on cost"** — no buildings, no leasehold improvements,
no plant. A company operating two Tier 3+ facilities with N+3 power redundancy does not have
that balance sheet. The classification decides its criterion 2 and 6 states. The factual check
took four fetches of a public register; the marketing would never have answered it.

### 2.2 Market position

| Position | Definition | Entries | Displayed as |
|---|---|---|---|
| **Hyperscaler** | Global platform operating at a scale that sets the market's terms. | Google Cloud, AWS, Microsoft Azure (3) | Hyperscaler |
| **Independent** | Not owned by, or structurally dependent on, a hyperscaler or large corporate group. | Infomaniak, OVHcloud, Hetzner, Scaleway, Katapult, Freethought, Kualo, Mythic Beasts, BlackBox Hosting, SiteGround (10) | Independent |
| **Corporate, non-independent** | Large corporate provider that is not a hyperscaler. | DigitalOcean (1) | Non-independent |

These drive the filter controls and are reported beside results. They set no applicability
state and carry no score adjustment: a provider is not scored better or worse for being
independent. Where scores and market position correlate — and in this tool they do on some
criteria — that is a finding, not a rule.

### 2.3 Governance classes

All 14 entries are `corporate_product`: each is a company that can be assessed directly. This
domain therefore has **no `corporate_oss`, `foundation` or `community` bindings**, and the
corporate-steward rule has nothing to attach to. That positive declaration is what makes the
inert governance and steward code safe to retire.

---

## 3. The applicability matrix

One state per criterion and infrastructure relationship, with the reason. Everything not listed
is **scored**. Levels are the framework v4 defaults (company: 4, 5, 7, 10, 11, 12; product: 3,
8, 9; deployment: 1, 2, 6, 13).

### 3.1 Criterion 1 — Carbon emissions

| Type | State | Reason |
|---|---|---|
| Owner-operator | **scored** | It holds the power contracts and chooses the grid, the tariff and the siting. |
| Colocation tenant | **scored** | The electricity is bought by the tenant for its own servers. Choosing a facility on a clean grid, and buying a renewable tariff, are the tenant's own acts — several UK independents evidence exactly this. Building efficiency (PUE) is an input from the landlord, recorded as such. |
| Reseller | **upstream** to the named provider | The electricity is consumed in Google Cloud's data centres. Google's figure and its assurance level carry across unchanged; a reseller's own per-visit efficiency claim is not a substitute for it. |

### 3.2 Criterion 2 — Water use

| Type | State | Reason |
|---|---|---|
| Owner-operator | **scored** | Cooling design and water draw are the operator's. |
| Colocation tenant | **upstream** to the named facility operator where that operator publishes a water figure; **not disclosed** where it does not | Cooling water belongs to the building, not the tenant. Where the landlord publishes nothing, the honest state is not disclosed — 0 with assurance Unknown, kept in the total and flagged. |
| Reseller | **upstream** to the named provider | Google's published water figure and assurance, carried across. |

**Current state.** The same absence of evidence must not be scored two ways in the same tool.
All colocation-tenant cells with no operator water figure read **0 (Unknown)** — Katapult,
Mythic Beasts, Freethought, Kualo and BlackBox Hosting — each after checking the named
operator's own publications first: Netwise's sustainability page is a soft 404 on both
transports, and Telehouse publishes PUE and carbon language but no water figure. SiteGround,
the reseller, takes Google Cloud's figure and assurance **upstream**.

### 3.3 Criterion 13 — Per-unit efficiency

**The criterion's name is "Per-unit efficiency"** throughout the framework and the toolsuite
(Martin's ruling on conformance-audit item A1, 13 August 2026). This tool renders it as
**"Per-unit infrastructure efficiency"** — the domain descriptor, not a second name; what a
unit means here is a virtual machine, a compute hour, a request or a visit. The AI scorecard's
"Per-prompt efficiency" is the only name that changes, since per-prompt is what a unit means in
that domain rather than a different criterion.

**Scored** for owner-operators and colocation tenants: server utilisation, hardware generation
and workload density are the entity's own. **Upstream** for the reseller. Where a colocation
tenant relies on its landlord's PUE, that input is recorded with its own source and assurance
rather than absorbed into the score silently.

### 3.4 Criterion 4 — Repairability, hardware lifespan and e-waste

**Scored — for owner-operators and colocation tenants alike; upstream for the reseller.**

Hardware stewardship follows server ownership, not building ownership. A colocation tenant
buys, runs, refurbishes and disposes of its own servers, so it has the same practice to
disclose as an owner-operator — refresh cycles, resale or auction schemes, component reuse,
e-waste routes. It is **never inherited**: this is a duty, not a quantity, so a landlord's
circularity programme does not discharge it. Where nothing is published, the state is
**not disclosed**.

The reseller owns no servers, so there is nothing of its own to assess and the state is
upstream to the named provider.

### 3.5 Criterion 5 — Responsible sourcing and conflict minerals

**Scored — always, for all 14.** Every provider in this domain buys hardware. Owners and
designers are scored on their own due diligence; buyers and tenants on supplier selection and
enquiry — what they require of suppliers, what they ask, and what they publish about either.
Never satisfied upstream: this is the quantity-versus-duty rule's central case.

Where nothing shows the provider does either, the not-disclosed rule applies: **0 with
assurance Unknown**. **Coverage is 14 of 14** (verified 13 August 2026); the not-disclosed rule
was applied, and five cells sit at 0 with assurance Unknown, each citing the search that found
nothing. No cell is Estimated on this criterion.

### 3.6 Criterion 6 — Impact on local communities

| Type | State | Reason |
|---|---|---|
| Owner-operator | **scored** | It chooses the sites and bears the consequences: grid load, water draw, planning, local employment. |
| Colocation tenant | **upstream** to the named facility operator where that operator publishes; **not disclosed** where it does not | Siting is the landlord's decision. A tenant that picks a facility is choosing among sites, not creating one. |
| Reseller | **upstream** to the named provider | Google's siting, Google's impacts. |

### 3.7 Criterion 8 — Accessibility and digital inclusion

**Scored across all 14 providers.** Criterion 8 resolves to *not applicable* only where the
entity ships **no human-facing interface at all**. A control panel, dashboard or developer
console is such an interface, whoever its users are; an engine, runtime or library with no
shipped interface is not. Every provider in this domain ships a control panel, so every one is
scored. The same rule is applied across all three tools.

**Why the narrower reading fails.** It is tempting to argue that an infrastructure provider does
not determine the accessibility of what reaches a website's visitors — that is decided by the
front end built on top, which the framework assesses elsewhere. That answers the wrong
question. The control panel *is* a user-facing interface, just not one used by the deployer's
site visitors: its users are the provider's own customers — developers, administrators and site
owners, a population that includes disabled people. An inaccessible dashboard, billing console
or documentation site excludes them from using the provider at all, which is a digital-inclusion
harm in its own right. The narrower reading conflates two audiences, "does this reach the site's
visitors" (correctly out of scope) with "does this reach the provider's own users" (in scope).

**What searching the column found.** Before the accessibility evidence pass, ten of 14 cells sat
at exactly 2, none of the 14 carried a source, and ten were Estimated on notes saying, in
near-identical words, that no accessibility programme could be found. That is a default wearing
a finding's clothes — the pattern the zero-variance test exists to catch (section 3.9), and one
easily mistaken for evidence that the criterion does not apply when it is evidence that nobody
had looked.

**Current state, verified 13 August 2026: coverage is 14/14 and the column spreads across all
five scores** — 0 (×5), 1 (×3), 2 (×2), 3 (×3), 4 (×1). The uniform 2 did not survive contact
with a search: five providers publish nothing at all and sit at 0 with assurance Unknown, while
Scaleway and OVHcloud publish audited statutory declarations covering their control panels and
score 3. The three hyperscaler cells rest on published conformance material — AWS 2 under the
gated-report rule, Azure 4, Google Cloud 3 — and would have been discarded outright had the
criterion been declared out of scope for the domain.

### 3.8 Criteria 3, 7, 9, 10, 11, 12

**Scored for every entry.** Efficiency (3) is a property of the platform. Workers (7),
military use (10), political involvement (11) and privacy and data governance (12) are
company-level duties assessed against the provider itself.

Criterion 9 carries the transparency cap: without independent verification the score cannot
exceed 2, however detailed the self-reporting. In this domain the routes past the cap are an
independent rating or audit (EcoVadis and equivalents), a third-party certification with a
public register entry, or listing in an independent register such as the Green Web Foundation
directory where that listing is itself evidence-based. A detailed sustainability page is not
one of them.

Criterion 12 is company-level because jurisdiction is its stable core — which legal regimes
can compel access to data held on the platform. This is what makes the location overrides in
section 9 legitimate, and it is why the same provider scores differently for a UK deployer than
for a US one without any company-level fact changing.

### 3.9 Zero-variance record

Run at each release. **The zero-variance detector is a blocker**, not a warning: a column that
returns the same value for every entry fails the release check. A column excused under `ZV_STRUCTURAL_EXCEPTIONS` is demoted to a
warning and labelled as a recorded structural exception, never hidden.

Distributions and coverage below re-read from `build/data/cloud-data.json` on **13 August
2026**, n = 14. The 29 July readings the earlier draft carried are given underneath each row
where they have moved, because the movement is the point.

| Criterion | Distribution | Sourced | Reading |
|---|---|---|---|
| 8 Accessibility | 0 (×5), 1 (×3), 2 (×2), 3 (×3), 4 (×1) | **14/14** | **Cleared.** Was 2 (×10), 3 (×3), 4 (×1) at 0/14 — "constant in substance". A real search produced the widest spread in the tool: all five scores used. |
| 5 Sourcing | 0 (×5), 1 (×2), 2 (×5), 3 (×2) | **14/14** | **Cleared.** Was 1 (×5), 2 (×9) at 2/14. The not-disclosed rule was applied; no cell is Estimated now. |
| 12 Privacy | only 2 (×4) and 3 (×10) | **14/14** | **Near-constant, and a recorded structural exception** — the suite's only one. See below. |
| 10 Military | 1 (×3), 2 (×3), 3 (×8) | **14/14** | **Cleared.** Modal share 57% against full coverage. Was 3/14 sourced with 11 Estimated. |
| 11 Political | 1 (×3), 2 (×2), 3 (×9) | **14/14** | **Cleared.** Register nils are cited as the evidence they are. |
| 6 Communities | 1 (×2), 2 (×4), 3 (×7), 4 (×1) | **14/14** | Clears. |
| 1 Carbon | 1 (×1), 2 (×2), 3 (×9), 4 (×2) | **14/14** | Fully sourced throughout. |
| 9 Transparency | 1 (×1), 2 (×6), 3 (×7) | **14/14** | Fully sourced throughout. |

**The whole tool is sourced 14/14 on all thirteen criteria**, not only the eight the detector
reports on. Criteria 1 and 9 set that standard; the rest of the tool reached it between 4 and
13 August 2026.

**Criterion 12 is the one column that stays near-constant, and it has a recorded
justification.** Ruling 5 settled it: the fourteen providers face the same legal regimes and
the same obligations, so the distribution (2 ×4, 3 ×10) is the finding rather than a hole in
it. It is carried in `check_release.py` as the single entry in `ZV_STRUCTURAL_EXCEPTIONS`, with
its justification recorded, and is **reported at every release and labelled `[recorded
structural exception]`** rather than suppressed. Do not manufacture variation to quiet it — and
do not read "structural" as settled in general: a structural verdict elsewhere in this project
turned out to be an artefact of the sourcing convention rather than of the data, so test which
before recording another.

---

## 4. Criterion levels

Framework v4 defaults adopted without departure. Company: 4, 5, 7, 10, 11, 12. Product: 3, 8,
9. Deployment: 1, 2, 6, 13.

**Company-agreement position.** Four companies here also appear in other tools. Checked on
29 July 2026, Google Cloud, AWS, Microsoft Azure and DigitalOcean agree **exactly** with the
same companies' tech-stack entries on all six company-level criteria. Two disagreements exist
against the AI scorecard, both on criterion 4: Google is 3 here and 2 there, Microsoft 3 here
and 2 there. In both cases the value here is the reference — it is scored against the company's
actual hardware and facilities practice — and the AI scorecard's value is the artefact of a
criterion being scored there with inheritance reasoning. The fix belongs in the AI
methodology's decision list, not this one.

---

## 5. Constants and models

**This tool performs no carbon or water calculation.** It is a scoring tool. The carbon and
water model — the segmented Sustainable Web Design v4 model at 0.30 kWh/GB total with a
0.067 kWh/GB data-centre segment, the Ember Yearly Electricity Data 2025 grid intensities
(UK 217.33, EU 209.64, world 458.54 g CO₂e/kWh), the rescaled rating bands (0.111 g and
0.334 g per page view) and the audience-weighting rule — lives in
the [stack impact calculator methodology](guide-stack-impact-calculator-methodology.html)
**v1.6** and is implemented in the tech-stack scorecard. Version 1.5 moved the embodied-energy grid attribution and corrected the score-0
water band; version 1.6 (13 August 2026) restated the water bands at scores 1 and 0 to
2.3 L/kWh, and its changelog says water figures published on v1.5 or earlier understate use for
hosts at those bands and must be restated. So cite v1.6, and treat any figure in this domain
carried over from an earlier calculation as superseded.

**Where raw provider metrics live.** Grid carbon intensity, water use effectiveness and power
usage effectiveness are held per provider in the **tech-stack** scorecard, which carries them
for six providers: Hetzner, OVHcloud, Scaleway, AWS, Microsoft Azure and Google Cloud. The
other eight providers in this tool have no raw metrics anywhere in the toolsuite, and a stack
calculation involving them falls back to the score-derived bands documented in the calculator
methodology. Those bands are a fallback, not a measurement, and any published figure resting on
them says so.

**Constants this tool does use.** Framework v4 requirement 4 asks for a **source and a date**
against every constant, so both are given. A "read" date is the date the cited artefact was
last opened and the value confirmed against it.

| Constant | Value | Source | Date |
|---|---|---|---|
| Geometric-mean zero-guard | 0.01 | Online Ecosystem Ethics Framework v4, normative — fixed, not tunable | framework v4, drafted July 2026 |
| Pillar bands | 3.0 / 2.0 / 1.0 | Toolsuite alignment; a declared deviation from the framework's 3.5 / 2.5 / 1.5 (section 1) | adopted July 2026 |
| Composite bands | 80 / 60 / 40 per cent | As above | adopted July 2026 |
| Build-footprint basis | 0.24 Wh · 0.26 mL · 0.03 g CO₂e per median text prompt | Google Cloud, *Measuring the environmental impact of AI inference*, with its research paper at arXiv 2508.15734 | published August 2025; read 29 July 2026 |
| Build-footprint range | 100–600 Wh · 100–900 mL · 12–70 g CO₂e | Mistral AI with ADEME and Carbone 4, ISO 14040/44 lifecycle assessment: 1.14 g CO₂e and 45 mL per response | published 2025; read 29 July 2026 |
| Build-footprint workload | ~55 substantial generations, each ~30× a median text prompt | this project's own build record for the 14 providers | 29 July 2026 |

**What the footprint panel is, and is not.** The header panel headed "Footprint of making this
scorecard (estimate)" reports **400 Wh, 430 mL and 50 g CO₂e** for the research and build of
this scorecard. That is a disclosure about *our own* work, of the kind the framework asks any
publisher to make, and it is legitimate here: the per-prompt basis in the table above is used
to estimate what building this cost, not to describe a hosting account. It shows its arithmetic
and both bases — the narrow operational figure and the wider lifecycle range — rather than a
single median.

**There is no per-unit or per-prompt estimator in this tool.** The modal panel that renders
criterion 13 displays fleet PUE and carbon-free-energy matching, and is headed
**"Per-unit infrastructure efficiency"**; the glossary section explaining the dots on each card
reads "Per-unit efficiency". The panel once carried a label copied from the AI tool
("Per-prompt efficiency"), which described Google's PUE 1.09 as a per-prompt measure — a
labelling fault, not an arithmetic one, and corrected by relabelling rather than by deleting a
criterion sourced 14/14.

---

## 6. Composition rules

A provider from this tool enters a stack as the host layer (framework section 3, layer 2), and
this is where most of its effect on a stack result comes from.

1. **State the system boundary and functional unit first** — which layers are in scope, and
   per what (for example, 1,000 page views a month with a stated device and audience mix).
2. **Host substitution.** For every criterion a technology in the stack holds in the
   *inherited* state, this provider's scored value substitutes in. The impact then belongs to
   the host and is not also counted against the technology.
3. **Count once.** Where a reseller and its named upstream both appear in a stack, the impact
   is counted once and the assignment recorded. SiteGround plus Google Cloud is one Google
   Cloud impact.
4. **Content delivery networks split by byte share.** Page weight served by a CDN is separated
   from origin-served weight, each byte assigned to exactly one party, and the split reconciled
   to the total.
5. **Presentation.** Flags first, then pillar scores with coverage and assurance mix, then the
   weak-pillar flag, then the composite — shown by default, always dismissible, never alone.

---

## 7. Authoritative sources and search standards

For each criterion: the sources treated as authoritative in this domain, and the **search
standard** — what a competent search checks before a cell is concluded *not disclosed*. An
assessment records the search date and any deviation; it does not repeat this list.
Independent and adversarial sources take precedence over self-disclosure throughout.

**C1 Carbon.** Provider sustainability or environmental reports and CSRD filings; the Science
Based Targets initiative dashboard for target validation — and for **removals**, since a
withdrawn commitment is as much a finding as a validated one; the Green Web Foundation
directory as an independent register of green hosting; independent carbon-intensity databases;
Ember for the grid the provider actually runs on. *Search:* the provider's sustainability or
environmental page; the SBTi dashboard by company name, checking status and history; the Green
Web Foundation directory; one news search for emissions growth, greenwashing findings or
enforcement. **Distinguish renewable matching from 24/7 carbon-free energy** wherever a note
relies on a renewable claim: annual matching with certificates and hour-by-hour carbon-free
supply are different achievements, and a note that blurs them overstates the provider.

**C2 Water.** Provider water disclosures, per site where available, and water use effectiveness
figures; the facility operator's disclosure where the provider is a colocation tenant;
investigative and local reporting on data-centre water draw in water-stressed regions.
*Search:* sustainability report and FAQ pages for water, WUE and cooling; the named facility
operator's own reporting; one news search for the provider or its named sites plus water. A
note stating that free-air or adiabatic cooling reduces water is a design fact, not a figure,
and does not on its own lift a cell out of not disclosed.

**C3 Efficiency.** Published power usage effectiveness with its measurement boundary and
period; hardware generation and refresh policy; technical documentation and engineering blogs
on cooling, density and workload placement; independent efficiency benchmarks where they exist.
*Search:* the provider's technical and sustainability documentation for a PUE figure and its
basis; the data-centre pages for cooling design; one independent source.

**C4 Repairability and e-waste.** Circularity and refurbishment programme pages; server reuse,
resale and auction schemes; component-level repair policy; e-waste and recycling rates in the
sustainability report; ISO 14001 certification and its scope. *Search:* the sustainability
report and any dedicated circularity page; the provider's own hardware or server-generation
pages for refresh and reuse policy; certification registers for the scope of any ISO claim.

**C5 Responsible sourcing.** SEC Form SD and the conflict-minerals report where the company
files; OECD-aligned due-diligence reporting; Responsible Minerals Assurance Process
participation; supplier codes of conduct and published supplier requirements; modern-slavery
statements where the jurisdiction requires one. *Search:* SEC EDGAR for Form SD; the company's
supplier-responsibility, procurement and ESG pages; the RMAP and Responsible Minerals
Initiative member lists; the UK modern-slavery register for UK entities. Reuse and
refurbishment found here are recorded as mitigation, never as diligence.

**C6 Local communities.** Investigative and local reporting on siting, water stress, grid
impact, planning disputes and air quality; planning and regulator records for named sites;
community investment and local employment programmes second; the facility operator's record
where the provider is a tenant. *Search:* news search for the provider plus "data centre" with
siting, water, grid and community terms; local planning records for named sites; the
provider's community pages last.

**C7 Workers and labour.** Regulator and court records — in the United States the National
Labor Relations Board docket, elsewhere the equivalent labour tribunal or inspectorate;
established watchdogs (Business & Human Rights Resource Centre, Economic Policy Institute);
credible investigative journalism; reporting on warehouse, data-centre and contractor
conditions, which is where this domain's risk concentrates. *Search:* NLRB docket or
home-jurisdiction equivalent by company name; BHRRC company page; one news search for
disputes, union activity and layoffs. For small providers with no public record, absence is
recorded as not disclosed rather than read as good practice.

**C8 Accessibility.** **Scored for every provider** (section 3.7), so a *not disclosed*
conclusion is possible here and has to be auditable. The authoritative artefacts, in order: a
published accessibility statement naming a standard and its version; a conformance report —
VPAT or Accessibility Conformance Report against WCAG, Section 508 or EN 301 549, or a
statutory national declaration where one is owed (the French RGAA declaration is this domain's
recurring case, and OVHcloud and Scaleway both publish one covering the control panel itself);
assistive-technology and keyboard documentation in the product help centre; and, for providers
sold through the UK Digital Marketplace, the supplier's structured G-Cloud accessibility answer.

**The scored surface is the control panel, console and documentation**, not the marketing site.
A statement or report scoped to the public website only is recorded as scoped, and does not
carry the cell.

*Search — four checks, all four recorded with what was looked at:*

1. The provider's accessibility page reached **from the site footer**, and its trust,
   compliance or legal centre. **Never by guessing a bare path**: `/accessibility` returned a
   genuine 404 on all nine domains tried in the August 2026 pass, three of which publish
   accessibility material elsewhere. The footer link and the sitemap are the instruments; the
   guessed path is a false-nil generator.
2. Company or product name plus "VPAT", and separately plus "Accessibility Conformance
   Report".
3. The product documentation and help centre for "accessibility", "WCAG", "keyboard", "screen
   reader" and "assistive".
4. One unrestricted web search naming the provider and WCAG or accessibility, in the
   provider's own operating languages as well as English — Infomaniak's search was run in
   French and Hetzner's in German, and a nil recorded in English alone is not a nil.

Where the site publishes a sitemap, **sweep it** and record the corpus size and the patterns
matched (`accessib|wcag|vpat|a11y|508`), with a positive control showing the sweep finds
content that does exist. That is what makes a 0 citable: the recorded nils here rest on sweeps
of 20,000 URLs (Infomaniak), 1,587 (Kualo), 459 (the Krystal parent corpus for Katapult) and
389 (Hetzner), each with a control. Where no sitemap is published, say so — Freethought's nil
does.

**A report behind a sign-in is disclosure, but gated.** Ruling 132 settled the treatment: a
report that demonstrably exists but cannot be read without an account **scores 2** — disclosure
beats absence, but cannot equal a report a reader can check. AWS's ACRs behind AWS Artifact and
Datadog's trust-centre VPAT are both this shape. Record the gate and the channel; **never
request access**, and never score a gated report as though it were published. A request-only
channel that does not answer is not publication at all.

Two further cautions carried from the evidence pass. **G-Cloud listings are filed by resellers
and contradict each other** for the same product, so attribute them to the filer; a
first-person practice description inside one is still the vendor's own voice and supports a 1,
but names no standard and is not a conformance claim. And **a self-evaluated ACR is
Self-reported, never Verified** — only a third-party report reaches Verified.

If a future entry is a hosting company whose product is itself an end-user website builder,
that is a wider scored surface, not a different rule: the builder's output is assessed as well
as its console.

**C9 Transparency.** Independent ratings and audits (EcoVadis and equivalents); certification
registers, with the scope of each certificate checked rather than the logo taken at face value
— ISO 14001, ISO 14068-1, ISO 27001, B Corp; the Green Web Foundation listing; the provider's
own reporting index, assessed for whether anyone independent has checked it. *Search:* the
provider's reporting or trust page; the certification body's public register for each claimed
certificate; the B Corp directory; the EcoVadis or equivalent rating if published. The cap
applies: detailed self-reporting alone cannot exceed 2.

**C10 Military and weapons use.** Procurement records and contract announcements; the
provider's own defence and intelligence product pages; documented investigative reporting on
military supply and on contractual limits or their absence; company statements withdrawing or
narrowing previous commitments. *Search:* government procurement databases and contract
announcements by company name; news and investigative search for the company plus defence,
military, intelligence and surveillance terms; the company's own solutions pages for a defence
sector line — active defence marketing is itself a finding. Reporting on named contracts
(Project Nimbus is the pattern case in this domain) is treated as Verified where it rests on
primary documents.

**C11 Political involvement.** OpenSecrets for United States federal lobbying and spending;
the UK and EU transparency registers for companies active there; the company's own
political-activity report where one exists; reporting on trade-association and
sector-level lobbying, which in this domain runs heavily through energy, planning and
data-centre policy. *Search:* OpenSecrets by company name; home-jurisdiction register; one news
search for political spending or controversy. For small providers with no register entry,
absence of lobbying is a genuine finding and is recorded as such with its source — a nil return
from a register is evidence, not a gap.

**C12 Privacy, security and data governance.** Jurisdiction first — which regimes can compel
access, including extraterritorial reach such as the United States CLOUD Act for
American-owned providers wherever the data physically sits. Then: data-protection regulator
enforcement records in the EU and UK; the privacy policy and data-processing agreement, and
whether a DPA is actually available; data-residency and sovereignty options and whether they
are contractual or best-efforts; ISO 27001 scope; documented breach history. *Search:* the
provider's privacy policy, DPA and trust centre; the ownership structure, to establish which
jurisdictions reach it; DPA enforcement databases by company name; a search for breach
reporting.

**C13 Per-unit efficiency.** Published per-request, per-visit, per-virtual-machine or
per-compute-hour figures with a stated methodology and boundary; PUE and WUE as inputs; the
named upstream's figures where the state is upstream. *Search:* sustainability and engineering
documentation for a per-unit figure and the basis behind it; the named upstream's published
figures. A per-visit efficiency claim with no stated boundary is recorded as disclosed but not
comparable, and does not displace the upstream provider's figure for a reseller.

---

## 8. Output formats

The scorecard HTML is the only output. There is currently **no machine-readable export** for
this tool, unlike the tech-stack scorecard's JSON; if one is added it must carry the framework
version, the assessment dates and the applicability state per cell.

Every rendered result follows the results hierarchy: flags first, then pillar scores with
evidence coverage and assurance mix, then the weak-pillar flag, then the composite (shown by default since 14 Aug 2026, always dismissible).

**Filter controls.** The market-position filter (All / Hyperscaler / Independent /
Non-independent) subsets the table and recalculates nothing. A filtered view is a subset of the
same assessments, not a re-scoring, and any summary of a filtered group reports the median and
range alongside the average — with three hyperscalers and one non-independent provider, an
average over either group is a single-outlier figure and must not be presented as a
characteristic of the class.

---

## 9. Location overrides

**The rule.** A UK, EU or US deployment context overrides a cell only where the criterion's
meaning genuinely changes with the deployer's location:

- **Criterion 12**, where the materiality of a foreign jurisdiction's legal reach depends on
  where the deployer and its users are. A US-owned provider presents a different sovereignty
  position to a UK or EU deployer than to a US one, and an EU provider a different one again.
- **Criterion 1**, where a provider's renewable profile meets a different local grid.

Overrides never touch company-level conduct criteria (4, 5, 7, 10, 11), which do not vary with
the deployer, and never touch product-level criteria (3, 8, 9), which describe the platform
wherever it runs. Each override carries its own dated note and inherits the base cell's
sources.

**Current state — conforming.** Overrides exist for UK (5 entries), EU (12 entries) and US
(9 entries). Every one touches criterion 12, except a single Google Cloud override that also
touches criterion 1. No override touches a company-level or product-level criterion. This tool
is the toolsuite's clean implementation of the rule, and is the pattern the AI scorecard's
overrides should be brought back to.

---

## 10. Decisions raised, not made

**None outstanding.** Every decision this document raised has since been taken and applied: the
criterion 8 applicability rule (section 3.7), the criterion 2 restatement for providers with no
water disclosure (section 3.2), SiteGround's upstream attribution to Google Cloud, the
criterion 9 transparency cap, the near-constant justifications behind section 3.9, the
criterion 13 panel label (section 5) and BlackBox Hosting's infrastructure classification
(section 2.1). Each is described in the section it affects; the decision trail itself is in the
OEEF decision register rather than repeated here.

Anything later found to need a decision is raised here, not settled silently.

---

*British English, GOV.UK plain English. Prepared 29 July 2026 against the built tool as
delivered; sourcing figures and the criterion 8 search standard restated 13 August 2026 against
the tool’s own data and the built page. If this document and the framework disagree, the
framework wins.*
