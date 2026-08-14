# A framework for assessing the ethics, social impact and environmental impact of online ecosystems

**Version 4.0 — foundation document**

This is the foundation document for the framework. It sets out the method, the criteria and the scoring logic. It is written to be adopted by anyone: a third party should be able to build a conforming scorecard for a domain this framework's authors have never covered, using only this document and the requirements in section 6. Tools built from it must state which version of the framework they conform to.

> **What changed in version 4.** This version restructures the framework as a publishable, adoptable standard. Six groups of changes, decided and approved item by item in July 2026.
>
> **Applicability becomes one vocabulary.** Five declared states — scored, inherited, upstream, not applicable and not disclosed — replace the several overlapping mechanisms that had grown up in the tools. Every criterion and entity-type pairing in a conforming tool must resolve to exactly one state, declared in that tool's methodology document. A new rule distinguishes a **quantity** from a **duty**: attribution to an upstream provider is valid for a quantity physically consumed or embodied elsewhere, and never for a duty that rests on the entity being assessed. The method for building an applicability matrix is written down, centred on the zero-variance test: a criterion returning the same value for every entity in a class is a default, not a finding. "Nothing found after a competent search" is treated as not disclosed, and the search standard itself must be published per criterion so that conclusion is auditable.
>
> **Criteria declare their level.** Each criterion is now company-level, product-level or deployment-level. Company-level criteria must agree wherever the same company appears across a publisher's tools. A **mitigation flag** is added as the counterpart to the risk flag, so a product-specific advantage no longer has to be buried in a note.
>
> **The claim changes.** Results follow a fixed hierarchy: red flags first, then pillar scores with evidence coverage and assurance, then the weak-pillar flag. The composite figure becomes a secondary output — shown by default for readability since 14 August 2026, always dismissible — never published without pillar scores and coverage beside it. Comparability across entity types and across domains is declared an explicit non-goal; composing a stack is the supported way different kinds of thing interact.
>
> **The boundary is drawn.** Everything domain-specific — entity taxonomies, applicability matrix content, carbon-model constants and band thresholds, layer tables — moves out of the framework into scorecard methodology documents. Every conforming tool must publish a methodology document with a defined minimum contents, and a conformance statement declaring which framework rules it implements and where it deviates, with reasons.
>
> **Worked examples are added** spanning four entity types, including one hypothetical domain the authors have never assessed, so an adopter has a pattern rather than only permission.
>
> **The version history now describes the framework only.** Notes about specific tools have moved to those tools' own change logs. The full original notes remain in each archived version as published — nothing has been rewritten retrospectively.

## Version history (framework changes only)

- **4.0 (2026)** — as above. *Amended 14 August 2026: the composite's default in section 4's results hierarchy changed from "off by default and shown on request" to "shown by default, always dismissible" — a readability decision; the hierarchy itself and the never-publish-alone rule are unchanged.*
- **3.5 (2026)** — criterion 5 corrected: buying hardware or compute rather than making it does not remove the due-diligence duty. The OECD guidance places duties on downstream buyers; buying from a provider that does due diligence is not doing due diligence. This correction is the origin of version 4's quantity-versus-duty rule.
- **3.4 (2026)** — recorded a gap: the framework could flag a product-specific risk but had no equivalent for a product-specific mitigation. Addressed in version 4.
- **3.2 – 3.2.1 (2026)** — the tools moved to a single declared applicability table (each criterion and category resolving to one state), replacing three inconsistent treatments of inapplicable criteria; version 4 generalises that concept into framework vocabulary. A documented tool-level divergence from a published model's rating bands in this release is the worked example behind version 4's conformance statement.
- **3.1 – 3.1.2 (2026)** — added the corporate-steward rule and the company-agreement rule, and corrected stack scoring to the weighted geometric mean used everywhere else.
- **3.0 (2026)** — licence changed from CC0 1.0 to CC BY 4.0 (framework text) and Apache 2.0 (tool code). Earlier versions remain available under CC0 as published.
- **2.2 (2026)** — added the criterion-exclusion robustness test, the double-scoring reliability protocol, the rule that an irrelevant citation counts as no citation, and the requirement that any tool states the carbon model version and constant it uses.
- **2.1 (2026)** — normative zero-guard definition; limits on marginal-emissions accounting; functional-unit rule for AI queries; verification through fully open artefacts accepted for criterion 9.
- **2.0 (2026)** — the structural release: performance and evidence separated into two axes (the evidence multiplier removed permanently); pillar scores combined by weighted geometric mean with zero-guard and weak-pillar flag; "not applicable" separated from "not disclosed"; equal pillar weights as the default with any custom weighting reported against them; red flags reported separately and taking precedence.
- **1.1 – 1.3 (2026)** — added criterion 13 (per-prompt efficiency), the managed-services rule, the criterion 9 verification cap, red-flag standards of proof and the 12-month review window.

Full original release notes for every version remain in the archived documents as published.

---


### The detailed record

The summary above is the shape of each change; the entries below are what was actually
changed and why, as published at the time. They are collapsed by default. **Kept because
losing the reasoning is how work gets done twice** — this project has done exactly that.

> **Correction to version 3.5 (4 August 2026).** Version 3.5's changelog below states that the large cloud providers "contract to manufacture and their minerals reporting genuinely covers data-centre hardware rather than only consumer devices". Checking the filings shows the second half of that is wrong — and the "earlier note" that v3.5 believed it was correcting had it right. SEC staff guidance treats equipment used to provide a service as outside Form SD's "product" scope, and all three hyperscalers' filings accordingly define their in-scope products as consumer device lines by name, never mentioning servers, data-centre hardware or the cloud businesses. Their server supply chains are covered, where they are covered at all, by voluntary supplier-responsibility policies rather than by the filed minerals reporting. The criterion 5 guidance has been corrected in place; the changelog below is left as v3.5 published it.

> **What changed in version 3.5.** Criterion 5 (responsible sourcing) rescored on a corrected reading. Buying hardware rather than manufacturing it does not remove the duty: US Form SD binds manufacturers, but the OECD guidance places due-diligence duties on downstream buyers too, and the criterion now says so explicitly. Two consequences. Platform providers that buy compute from a hyperscaler rather than procuring hardware score 1, not 2 — their own duty is supplier selection and enquiry, and buying from a provider that does due diligence is not the same as doing it. And a correction to the previous release: the large cloud providers design their own servers and have them built by ODM partners, so they do contract to manufacture and their minerals reporting genuinely covers data-centre hardware rather than only consumer devices, as an earlier note implied. OVHcloud is now credited for designing its own hardware. Reuse and refurbishment are recorded as mitigations that reduce mineral demand rather than as due diligence, which is a different question.

> **What changed in version 3.4.** Five open-weight AI providers added as dated family snapshots rather than version-pinned rows, since these lines ship every few weeks: GLM (Z.ai), Kimi (Moonshot AI), MiniMax, NVIDIA Nemotron and OpenAI gpt-oss. NVIDIA Nemotron scores 4 on transparency — it publishes weights, training datasets, training recipes and technical reports, which is the fully-open-artefacts route to verification that OLMo already scores 4 on, so consistency required the same score. The three Chinese labs are capped at 2: open weights, closed training corpus. Environmental criteria for those labs are Estimated with the reason stated — no corporate carbon or water disclosure could be found — rather than scored from assumption. Two unresolved allegations are recorded as allegations and do not move any score: the February 2026 distillation claim against Moonshot, DeepSeek and MiniMax, and a July 2026 US export-control claim against Moonshot. MiniMax ships under a non-commercial licence, which rules it out for client work whatever it scores.
>
> Applying the company-agreement rule to gpt-oss exposed a gap in the framework worth recording: criteria 7, 10, 11 and 12 must follow OpenAI, but the material fact about self-hosted weights is that no data reaches OpenAI at all. The framework can raise a flag for product-specific RISK and has no equivalent for product-specific MITIGATION, so that advantage sits in the note rather than the score. Worth addressing in a later version.

> **What changed in version 3.2.1.** Two of the nine stewards left unassessed at v3.1.2 are now researched and sourced: Shopify (steward of Remix / React Router v7) and Automattic (steward of WordPress and WooCommerce). Neither triggers a flag — no company-level score below the threshold on the criteria that matter for the steward mechanism. Seven stewards remain unassessed, disclosed as such. No score changed.

> **What changed in version 3.2.** Two changes that both move published figures, released together so they move once.
>
> **The applicability matrix.** 181 cells — 15% of the tech-stack scorecard — were scored on a criterion that the cell's own note said did not apply at that layer, in three different wrong ways: penalising inapplicability (every database scored 1 on accessibility beside a note saying accessibility is an application concern), confusing “cannot apply” with “applies but undisclosed” (71 cells scored 0 “not disclosed” beside a note saying “no own hardware”), and host-dependent criteria that were never added to the inheritance list (criterion 13, 44 cells at a flat 2 beside notes saying the footprint depends on the host). These are replaced by one declared table in which every criterion and category resolves to exactly one of four states: scored, inherited, not applicable, or not disclosed. 242 of 1,209 cells are reclassified. Criteria 10 and 12 also become not applicable to foundation-governed and community projects, where they were a constant 3 across all 29 such entries — a fixed offset rather than a measurement. Criterion 11 is unaffected, because it genuinely varies.
>
> **The segmented carbon model.** The calculator multiplied the entire 0.30 kWh/GB by the host's grid intensity. Under SWD v4 the host owns only the data-centre segment: 0.067 kWh/GB, 22% of the total. The remaining 78% is network and device energy, consumed where the visitor is, and now uses an audience-weighted intensity set by UK and EU share sliders with the remainder at the world average. Page weight, not hosting choice, is therefore the dominant lever. All three grid figures now come from one Ember release (Yearly Electricity Data 2025): UK 217.33, EU 209.64, World 458.54 g CO₂e/kWh, replacing a stale 494 that was Ember's World figure for roughly 2020–21. Because SWD v4's published rating bands were calibrated against 494, both are rescaled by 458.54/494 to 0.111 and 0.334 g — a deliberate, documented divergence from SWD's own thresholds, since keeping them unchanged against a lower world intensity would flatter every site. The Carbon Reduction Plan data block uses the identical calculation and states the audience mix, grid source and band rescaling. Methodology document to v1.4. **Carbon figures published on any earlier version are overstated for a low-carbon host and require restating.**

> **What changed in version 3.1.2.** The corporate-steward rule is now implemented, not just documented. Every one of the sixteen corporate-stewarded open-source entries names its steward, and where that steward has been assessed and scores 1 or lower on a company-level criterion, a flag is raised beside the result — so a project that is (correctly) not scored on criteria 10 to 12 no longer hides its steward's record. Six stewards are assessed: Meta, Microsoft, Netlify and Vercel reuse the scores already recorded against their own entries elsewhere in the toolsuite, and Oracle and IBM/Red Hat were researched and sourced for this release. The remaining nine are recorded as **not yet assessed**, with a stated reason, and deliberately carry no invented score: most are small companies with no public record on military supply, political spending or labour disputes, and scoring absence of evidence would present a research gap as a finding. The release check now fails if a stewarded entry has no steward record, and warns while any steward remains unassessed. No score changed.

> **What changed in version 3.1.1.** Closed the release-check gaps left open at v3.1: Amazon's AI-scorecard entry aligned to Verified assurance on military use (Project Nimbus), vendor display strings normalised to one spelling per company across all tools so the company-agreement check cannot be defeated by a typo, and the vendor-variant check changed from a warning to a release-blocking failure. Independent third-party citations added for the three cells that were Verified with no source: OLMo (Ai2's own transparency disclosure), Kubernetes (the CNCF/NCC Group security audit) and Node.js (the OpenJS/Ada Logics security audit). No scores changed as a result of the citation additions; the two assurance and spelling fixes do not change any score value either.

> **What changed in version 3.1.** The corporate-steward rule: criteria 10, 11 and 12 are no longer scored against an open-source project that a company merely stewards. They are marked not applicable, and the steward is named with its own scores and flagged where those are weak. Company-level criteria were brought into agreement everywhere the same company appears in more than one tool. Stack scoring was corrected to combine pillar scores by a weighted geometric mean with the zero-guard and weak-pillar flag, matching the single-technology path and the rule in section 4; it had been using a flat arithmetic mean across all thirteen criteria, which allowed a weak pillar to be masked. No criteria, weights or pillar definitions changed.

> **What changed in version 3.0.** Licence changed from CC0 1.0 to CC BY 4.0 (framework text) and the Apache License 2.0 (scorecard code). Earlier versions remain available under CC0 as originally published and cannot be retroactively relicensed. No scores, criteria, weights or aggregation rules changed in this version.

> **What changed in version 2.2.** This version responds to an audit of the tools built from the framework, and updates the framework's external references. It adds: a robustness subsection in section 4 requiring a criterion-exclusion test alongside the existing equal-weight sensitivity check; a double-scoring and agreement-reporting protocol in section 6, so that a judgement-based instrument reports how much its scorers agree; a requirement in section 6 that every citation must support the specific criterion it is attached to, and that irrelevant citations are treated as no citation at all; the explicit energy-intensity constants for Sustainable Web Design model versions 3 and 4 in criterion 1 and the glossary, with a requirement that any implementation states the constant it uses; the Software Carbon Intensity for AI extension and ITU-T L.1801 in criterion 13; and new entries in section 8 for ITU-T L.1801, ISO/IEC TR 20226:2025, the Foundation Model Transparency Index, and UK Procurement Policy Note 006, together with a note that the Corporate Sustainability Reporting Directive was substantially narrowed in 2026. No scores, criteria, weights or aggregation rules changed in this version.

> **What changed in version 2.1.** This version responds to a peer review of version 2. It adds: a normative definition of the zero-guard in section 4 (a fixed floor of 0.01, with a rationale and sensitivity figures); a note in criterion 1 on the physical limits of Locational Marginal Emissions (narrow validity ranges and signal noise), confining LMEs to a practice signal rather than an accounting method; a functional-unit rule in criterion 13 for reasoning, multi-modal and agentic queries (one user turn, end to end, with distributions rather than single averages); a rebound-effects note in criterion 1 covering Jevons effects and the attribution of derivative-model fine-tuning; and an operational standard in criterion 9 for verification through fully open artefacts and peer-reviewed proxies, with a matching note in criterion 12 accepting community-verifiable security practices — so the verification threshold cannot penalise resource-constrained open-source developers. One review recommendation was not adopted: assigning downstream derivative-model footprints to base-model providers, which would break the count-once attribution rule — responsibility for fine-tuning stays with whoever runs it.

> **What changed in version 2.** This version implements twelve recommendations from a methodological review of the framework against composite-indicator best practice (OECD and JRC, 2008) and the research on why ESG-style ratings disagree (Berg, Kölbel and Rigobon, 2022). The main changes: (1) performance and evidence are now separate axes — the evidence-quality multiplier is removed, and every score carries an assurance level that is never multiplied into it; (2) pillar scores are combined with a weighted geometric mean, with a worked example, a zero-guard and a weak-pillar flag, so a weak pillar cannot be hidden by strong ones; (3) “not applicable” is clearly separated from “not disclosed”, so a gap is never penalised twice; (4) group summaries must report medians and ranges alongside averages; (5) weighting is restated as an explicit value judgement — equal pillar weights are the default, and any custom weighting must be reported next to the equally-weighted result as a sensitivity check; (6) criterion 1 carries a standing statement on carbon-model uncertainty; (7) section 3 adds an explicit system-boundary rule with a count-once check for stack substitution and CDN splitting; (8) the criterion 9 transparency cap is kept and its special status documented, and independent benchmarks or fully open artefacts now count as verification; (9) citations are corrected — Li et al. is cited as a 2025 *Communications of the ACM* article and the Locational Marginal Emissions work (Cote and Sun) is labelled a 2025 preprint; (10) new sources are added on composite indicators, rating divergence and the science behind the carbon model; (11) vendor per-prompt figures are treated as self-reported at best, with boundary and market-versus-location caveats; (12) criterion 11 lists jurisdiction-appropriate lobbying registers. Red flags are now reported separately alongside every view of the result, rather than described as a numeric cap — they take precedence over the number in any decision. The provider scores built on this framework were last reviewed in July 2026 in a full evidence audit.

> **What changed in version 1.3.** This version incorporates selected recommendations from an external implementation guide. It adds: a dual-track carbon accounting note in criterion 1 covering Locational Marginal Emissions (LME) as a more precise method for operational carbon decisions alongside standard grid-average accounting; an ISO 14046 dual-scope water footprinting framework in criterion 2 distinguishing direct on-site and indirect off-site water use; stronger language in Section 4 on the primacy of independent, adversarial sources over corporate self-disclosures; a targeted verification threshold in criterion 9 capping raw scores at 2 where no independent checking exists (scores of 3 or 4 require third-party verification); temporal and spatial workload optimisation as a scoring signal in criterion 13; and three new sources (ISO 14046, Sun et al. 2025 on LMEs, Li et al. 2023 on AI water use). Two recommendations from the guide were not adopted: integrating specific commercial products (Cyrux AI and Mashinii) into the framework method, which would create product dependencies and endorsements incompatible with a tool-neutral framework; and replacing the evidence-quality multiplier system with framework-wide hard caps on self-reported scores — instead, a targeted cap is applied to criterion 9 only, where transparency is both the subject of the criterion and the foundation for all other scores.

> **What changed in version 1.2.** This version reflects changes developed and tested in the AI provider scorecard. It adds: a thirteenth criterion (criterion 13, per-prompt efficiency, covering the ongoing carbon and water cost of each user query); updated score band labels (2 = OK, 3 = Good) for clearer plain-English meaning; renaming "confidence discount" to "evidence-quality adjustment" throughout; a new consideration for user location and grid-based carbon accounting; materiality notes for criteria 4 and 5 when assessing AI providers; and three new glossary entries. A Creative Commons Zero v1.0 Universal licence is applied — no rights reserved.

> **What changed in version 1.1.** This version responds to a peer review. It adds: a rule for managed services (SaaS) where inherited impacts become direct; an evidence-quality adjustment for adding up scores; clearer standards of proof for red flags; a default review window; and several criterion-level additions (training versus inference carbon for AI, software-driven hardware obsolescence, algorithmic management of workers, language and socio-economic equity for AI, and a split between user-query privacy and training-data provenance). One point — the exact threshold for the military red flag — is left open for you to set, and is marked in the text.

---

## Contents

1. [About this framework](#1-about-this-framework)
2. [How the framework is organised](#2-how-the-framework-is-organised)
3. [The layered nature of online ecosystems](#3-the-layered-nature-of-online-ecosystems)
4. [How scoring works](#4-how-scoring-works)
5. [The thirteen criteria](#5-the-thirteen-criteria)
6. [How to run an assessment](#6-how-to-run-an-assessment)
7. [Accessibility and plain-language commitments](#7-accessibility-and-plain-language-commitments)
8. [Sources and standards](#8-sources-and-standards)
9. [Glossary](#9-glossary)

---

## 1. About this framework

### What it is for

This framework helps you judge how responsible an online ecosystem is. It looks at three things together:

- **the environment** — for example, carbon emissions and water use
- **society** — for example, the effect on local communities and on workers
- **ethics and governance** — for example, transparency, military use and political influence

You can use it to analyse a single product, compare several options, audit something you already use, or report your findings to others.

### What it covers

The framework is built to work across the different kinds of things that make up the online world, including:

- **AI models** — for example, a large language model or an image model
- **hosting providers** — for example, a cloud platform or a data-centre operator
- **development frameworks** — for example, the software libraries used to build applications
- **content management systems (CMSs)** — for example, the software used to run a website

It also works for other parts of the online world, such as network providers, software libraries and end-user devices. The same method applies to all of them.

**Adopting the framework.** The framework holds only what is universal: the criteria, the scoring rules, the applicability vocabulary and the publication requirements. Everything specific to a domain — which criteria apply to which kinds of thing, which constants and sources to use — belongs in a scorecard methodology document, which every conforming tool must publish (see section 6). This means you can build a conforming scorecard for a domain nobody has covered before, and two conforming scorecards in different domains will legitimately differ.

### The idea behind it

Most things in the online world depend on other things underneath them. A website runs on a CMS. The CMS runs on a hosting provider. The hosting provider runs in data centres. The data centres run on hardware made from mined materials and powered by electricity and cooled with water. Harm and benefit travel up and down this chain.

So the framework does two things at once. It scores the thing in front of you, and it asks you to look at what that thing depends on. Section 3 explains this in more detail.

### How to read the scores

A high score does not mean something is "good" in an absolute sense. It means the provider is open about its impacts and is managing them well against current best practice. A low score often means there is no information — which is itself a finding. Openness is treated as a strength throughout.

---

## 2. How the framework is organised

The framework has **three pillars** and **thirteen criteria**. Each criterion sits in one pillar but several criteria affect each other.

**Transparency runs through everything.** It is both its own criterion (criterion 9) and the basis for every other score. You can only judge water use, or military use, or labour conditions, if the provider tells you about them or an independent party checks. Where there is no information, you record a low assurance level (see [section 4](#4-how-scoring-works)).

| Pillar | Criteria |
|---|---|
| **A. Environmental** | 1. Carbon emissions · 2. Water use · 3. Energy and resource efficiency · 4. Repairability, hardware lifespan and e-waste · 13. Per-unit efficiency |
| **B. Social and supply chain** | 5. Responsible sourcing and conflict minerals · 6. Impact on local communities · 7. Workers and labour conditions · 8. Accessibility and digital inclusion |
| **C. Ethics and governance** | 9. Transparency and accountability · 10. Military and weapons use · 11. Political involvement and influence · 12. Privacy, security and data governance |

These thirteen criteria cover every area the framework pays particular attention to: carbon emissions, water use, per-prompt efficiency, transparency, conflict minerals, impact on local communities, military use and limits on military use, political involvement, efficiency, and repairability. The remaining criteria (labour, accessibility, and privacy) are close companions that round out a fair picture.

### Each criterion has a level

As well as a pillar, every criterion declares a **level** — the kind of object it describes. This matters because the levels behave differently: company-level findings follow the company everywhere, product-level findings belong to the artefact, and deployment-level findings depend on where and how the thing runs.

| Level | Criteria | Behaviour |
|---|---|---|
| **Company** | 4. Repairability · 5. Responsible sourcing · 7. Workers and labour · 10. Military use · 11. Political involvement · 12. Privacy and data governance | Describes the organisation. Must agree wherever the same organisation appears across a publisher's tools (section 6). Duties at this level are never satisfied by an upstream provider (section 3). |
| **Product** | 3. Efficiency · 8. Accessibility · 9. Transparency | Describes the artefact itself, whoever runs it. |
| **Deployment** | 1. Carbon · 2. Water · 6. Local communities · 13. Per-unit efficiency | Depends on where and how the thing runs. Quantities at this level may be inherited from, or attributed to, the infrastructure underneath (section 3). |

Two criteria carry a note. Criterion 4 is a company practice of hardware owners; an entity with no hardware resolves to not applicable or inherited through the applicability matrix rather than being scored on a practice it cannot have. Criterion 12 is company-level because jurisdiction is its stable core; product-specific data practices are carried by flags beside the score, not blended into it.

---

## 3. The layered nature of online ecosystems

Online ecosystems are stacked in layers. Each layer sits on the ones below it.

```
Layer 5  End-user application or website
Layer 4  Content management system / development framework
Layer 3  AI model or platform service
Layer 2  Hosting provider / cloud platform
Layer 1  Data centres, networks, electricity and water
Layer 0  Hardware and the mined materials inside it
```

This matters for scoring because, for any criterion applied to any kind of thing, the assessment must land in exactly one of **five applicability states**:

| State | Meaning | When it is correct |
|---|---|---|
| **Scored** | The criterion applies and is assessed against this entity directly. | The entity causes or controls the impact, or owes the duty, itself. |
| **Inherited** | The impact belongs to whichever layer beneath the deployer chooses. | Deployment-level quantities for software the deployer hosts: the entity's own footprint here is whatever host you pick. Judge the entity only on whether it makes responsible choices possible. |
| **Upstream** | The value is attributed to a **named** provider the entity runs on, with the assurance level carried across unchanged. | Deployment-level quantities where the entity has locked in its provider — the impact is real, measurable and happens in the named provider's infrastructure. Never valid where the provider is unnamed: with nothing to attribute to, the state is not disclosed. |
| **Not applicable** | The criterion cannot apply to this kind of thing. | There is nothing to assess — a database engine has no user interface for accessibility to describe. Excluded from all totals and never penalised. Record why. |
| **Not disclosed** | The criterion applies, but a competent search found nothing. | Scored 0 with assurance Unknown, kept in the total and flagged. The silence is a finding. See section 4 for the search standard this conclusion requires. |

Every criterion and entity-type pairing in a conforming tool must resolve to exactly one of these states, declared in the tool's methodology document (section 6) — not implied by note text, per-cell exceptions or conventions in code.

**Three rules keep this fair:**

1. **Attribute, do not double count.** When you assess a CMS, score its direct impacts in full, and score its inherited impacts by looking at the choices it gives you (for example, can you choose a low-carbon region or a green host?). Do not blame the CMS for emissions that belong to the data centre — but do credit or mark it on whether it makes responsible choices possible.
2. **Follow the chain as far as it is material.** You do not need to trace every screw. Trace the layers that carry most of the impact for the criterion in question. Section 5 says, for each criterion, which layer usually matters most.
3. **State your system boundary, and count each impact once.** Before you score, write down which layers are inside your assessment and which are outside. When a stack score substitutes the hosting provider's value for a criterion a technology inherits, that impact now belongs to the host — do not also count it against the technology. The same rule applies when page weight is split between an origin server and content delivery networks (CDNs): assign each byte to one party and reconcile the split so the parts add back up to the whole. If an impact seems to belong to two layers at once, decide where it sits, record the decision, and check the total once at the end.

**The quantity-versus-duty rule.** The upstream state exists because some impacts physically happen elsewhere. That logic has a hard limit, and crossing it produces wrong answers that look reasonable:

- A **quantity** — carbon emitted, water consumed, energy embodied — is consumed in the upstream provider's infrastructure. Attributing it there is simply accurate. Upstream attribution is valid.
- A **duty** — supply-chain due diligence, treatment of workers, ownership of accessibility — rests on the entity being assessed. Buying from a company that does due diligence is not doing due diligence. Upstream attribution is never valid for a duty; the entity is scored on how it discharges the duty itself, which for a buyer means supplier selection and enquiry.

**Worked example.** A platform provider runs entirely on a large cloud provider's infrastructure. For **criterion 2 (water)**, the water serving its workloads is physically consumed in the cloud provider's data centres: take the cloud provider's published figure, state upstream, assurance carried across unchanged. For **criterion 5 (responsible sourcing)**, the same move is wrong. The criterion asks whether *this entity* exercises due diligence. Its duty as a buyer is supplier selection and enquiry; if nothing shows it does either, it scores low on its own duty — however thorough its provider's diligence is. Same mechanism, same entity, opposite correct answers. The level declared for each criterion in section 2 encodes this: upstream and inherited are available only to deployment-level criteria.

---

## 4. How scoring works

### The 0 to 4 scale

Every criterion is scored on the same five-point scale.

| Score | Label | What it means |
|---|---|---|
| **0** | No information | Nothing is disclosed and nothing can be found. The provider does not address this at all. |
| **1** | Minimal | The topic is acknowledged but there is little detail, no targets and no checking. |
| **2** | OK | There is real action and some data, but gaps remain or progress is early. |
| **3** | Good | Good practice is in place, backed by data, targets and regular reporting. |
| **4** | Leading | Best practice, independently verified, with strong results and full openness. |

### Assurance level

A score on its own can mislead, because providers differ hugely in how much they reveal. So every score also carries an **assurance level** that records how good the evidence is.

| Assurance level | Meaning |
|---|---|
| **Verified** | Checked by an independent third party — an audit, certification, court or regulatory record, peer-reviewed study, established watchdog documentation, or an independent benchmark. |
| **Self-reported** | Stated by the provider but not independently checked. Provider claims can never rate higher than this. |
| **Estimated** | Worked out by you or a third party from indirect evidence. |
| **Unknown** | No reliable evidence. Pair this with a score of 0 and flag it. |

Always show the score and the assurance level together, for example **“3 (Self-reported)”**.

### Performance and evidence are separate axes

Earlier versions of this framework multiplied each score by an evidence-quality factor (Verified ×1.0, Self-reported ×0.75, Estimated ×0.5, Unknown ×0.0) before adding scores up. **Version 2 removes that multiplier, and it must not be reintroduced.** Mixing “how well does it perform?” and “how good is the evidence?” into one number hides both answers: a 3 (Verified) and a 4 (Self-reported) collapsed to the same 3.0, so a reader could no longer tell strong performance on weak evidence from weaker performance on strong evidence.

In version 2 the two questions stay separate. The score records performance against the rubric; the assurance level sits beside it as a visible flag. Weak evidence is handled in three ways instead:

- the **source-priority rule** below — independent evidence can lower a self-reported score
- the **criterion 9 cap** — self-reporting alone cannot score above 2 on transparency
- **evidence coverage** — report the share of applicable criteria whose assurance level is not Unknown alongside any total, so thin evidence is visible

**Prioritising adversarial and independent sources.** When scoring, you will often have two types of evidence in front of you: what the provider says about itself (sustainability reports, press releases, self-submitted survey responses) and what independent parties say (court filings, regulatory penalty notices, enforcement actions, audited watchdog reports, investigative journalism, peer-reviewed studies). Where these conflict, the independent source takes precedence. Corporate sustainability reports and voluntary self-disclosures are a starting point, not an end point. A high score based only on the provider's own materials should carry a Self-reported or Estimated assurance level, never Verified. A regulatory enforcement action, a court finding, or a documented report from an established watchdog can lower a self-reported score — and should. A careful estimate from an independent watchdog can be more trustworthy than a cherry-picked self-report; where that is the case, record your reason and base the score on the independent evidence, marked Verified. Record which sources you used and flag any significant conflicts between them.

### Weighting: an explicit value judgement

Weights are value judgements, not measurements. There is no scientific way to prove that carbon matters exactly twice as much as privacy — any weighting encodes a view about what matters. Version 2 makes that explicit with three rules.

- **Within each pillar, all criteria carry equal weight.** The criteria in a pillar are different lenses on the same concern; ranking them against each other adds false precision.
- **Across pillars, equal weights are the default.** Earlier versions of the tools built from this framework used a 40/30/30 split, which implied a precision the evidence cannot support. If your decision genuinely warrants different pillar weights — for example, a deployment in a water-stressed region that weights the environmental pillar higher — you may set them, but record the weights and the reason, so the result can be understood and repeated.
- **Always report the equally-weighted result alongside any custom weighting.** This is the framework's standing sensitivity check. If the two figures differ a lot, the result depends heavily on the weighting choice, and the pillar profile is the more honest guide.

### Testing whether the result is robust

The equal-weight comparison above tests one choice — the weights. Research on why ESG-style ratings disagree (Berg, Kölbel and Rigobon, 2022) found that weighting explains only a small part of the disagreement between raters: most of it comes from **measurement** (how each thing is scored) and **scope** (which things are included at all). So a weighting check on its own is not enough.

Where an assessment is used to compare options, or to support a public claim, also run a **criterion-exclusion test**: recalculate the result thirteen times, leaving out one criterion each time, and check whether the ranking of the options changes.

- If the ranking holds throughout, say so. The result does not depend on any single criterion.
- If leaving out one criterion changes the ranking, report which one. That criterion is doing the deciding, and the reader is entitled to know.

This matters most where scores are close. Two options within a few percentage points of each other should not be presented as ranked at all unless the ranking survives this test. Record the outcome next to the result, in the same place as the equally-weighted figure.

### Combining scores: the weighted geometric mean

Combine scores in two stages.

1. **Pillar score.** Each pillar's score is the plain average (arithmetic mean) of its applicable criteria, on the 0–4 scale. Criteria marked not applicable — or inherited, where no host is in scope — are left out. A pillar with no applicable criteria returns no score and is excluded from the overall, with the remaining pillar weights scaled up.
2. **Overall score.** Combine the pillar scores with a **weighted geometric mean** — multiply them together, each raised to the power of its weight share, instead of averaging them — then express the result as a percentage of the maximum 4.

A worked example, with equal weights. A provider scores Environmental 3.2, Social 2.5, Governance 1.0.

- Arithmetic mean: (3.2 + 2.5 + 1.0) ÷ 3 = 2.23, or 56%.
- Geometric mean: (3.2 × 2.5 × 1.0) to the power of one third = 8.0 to the power of one third = 2.0, or 50%.

The geometric mean is lower because the weak governance pillar pulls the result down — which is the point. Under an arithmetic mean, a provider can buy back a serious governance weakness with a strong environmental score. Under a geometric mean, it cannot be fully hidden.

**The zero-guard and the weak-pillar flag.** A true zero would make any geometric mean zero, wiping out all other information. So a pillar score of 0 is floored at 0.01 before the calculation, and the result is flagged as having a **weak pillar**. The overall score degrades sharply but stays readable, and the flag makes the cause visible. Tools built from this framework must show the flag wherever they show the score.

The zero-guard is a **floor, not a shift**: only a pillar scoring exactly 0 is raised to 0.01, and non-zero pillars are never adjusted. The value 0.01 is **fixed and normative** — every tool built from this framework must use it, or results stop being comparable. Why 0.01: on the 0–4 scale it is severe without being absurd. With equal weights, a provider scoring 3, 3 and 0 across the three pillars gets a geometric mean of 0.45, which is 11% of the maximum — a heavy, non-compensatory penalty — where an arithmetic mean would award 50%. A larger floor of 0.1 would soften that to 24%; a smaller floor of 0.001 would harshen it to 5%. Because every zero pillar is also flagged, the exact constant affects how far the number falls, never whether the problem is visible: the flag, not the decimal, is what a decision should turn on.

### Applicability: building the matrix

Which criteria apply to which kinds of thing is a **domain question**, so the answer — the applicability matrix — lives in each tool's methodology document, not here (earlier versions carried a layer-by-layer table at this point; it has moved to the methodologies of the tools that use it). What the framework fixes is the method for building one:

1. **Start from the levels and states.** For each criterion and each entity type in your domain, ask: does this kind of thing cause or control this impact, or owe this duty, itself (scored)? Does the impact follow the deployer's choice of infrastructure (inherited), or a named locked-in provider (upstream)? Or is there simply nothing of this kind to assess (not applicable)?
2. **Managed services convert inherited to direct.** A self-hosted tool leaves infrastructure choices to you, so its deployment-level quantities are inherited. A managed service locks you into the vendor's own infrastructure and replacement cycles, so the same criteria are scored against the vendor's locked-in choices. The delivery model, not the software category, decides.
3. **Apply the zero-variance test.** If a criterion returns the same value for every entity in a class, it is a default wearing a finding's clothes — a fixed offset, not a measurement. Check whether the criterion applies to that class at all, and either find the evidence that separates the entities or change the state. Where a tool has an automated release process, this test must run in it.
4. **Record the reason for every row.** A matrix without reasons cannot be reviewed, and cannot be adopted by anyone else.

**Not applicable is not the same as not disclosed — and a gap is never penalised twice.** When a criterion genuinely does not apply to what you are assessing, mark it **“Not applicable”** and leave it out of the total entirely; record why. When a criterion does apply but the provider discloses nothing, score it **0 with an assurance level of Unknown**, keep it in the total, and flag it — the silence is a finding. Each gap is treated one way or the other, never both: it either reduces the score (not disclosed) or is excluded from the calculation (not applicable).

**"Nothing found" must be earned.** Concluding *not disclosed* asserts that a competent search found nothing — so the search itself must be defined and auditable. Each tool's methodology document states, per criterion, what a competent search checks (which registers, reports, databases and independent sources). An individual assessment then records only the date of the search and any deviation from that standard. Without a published search standard, "we could not find it" is an assertion; with one, it is a finding.

### Red flags: when a high average is not enough

An overall average can hide a serious problem. So the framework uses **red flags**. A red flag is a finding so serious that it must take precedence over the numerical result in any decision, no matter how strong the other scores are. It is reported separately and prominently, alongside every view of the result — never blended into the number, so a single number can never hide it. You should set your own red-flag list before you start. Common examples:

- credible evidence of complicity in serious human rights abuses
- directly enabling weapons to select or attack human targets without meaningful human control, or systems knowingly used to target civilians
- knowingly using forced or child labour in the supply chain
- deliberately hiding or falsifying impact data

If a red flag is triggered, report it openly and do not let strong scores elsewhere paper over it.

**What counts as enough proof.** "Credible evidence" needs a clear bar, or assessments stall in argument. Treat a red flag as triggered when at least one of these exists:

- a formal investigation or finding by a United Nations body or an official human-rights mechanism
- a regulatory sanction, court ruling or enforcement action by a competent authority
- a documented, evidence-based report from an established international watchdog or recognised investigative journalism
- an independent human-rights impact assessment that finds serious harm

A single unverified allegation is not enough on its own. Record which standard was met, and give the provider a fair chance to respond before you finalise the finding.

### Mitigation flags: when a specific advantage must not be averaged away

Red flags carry product-specific risk outside the number. The framework provides the same route for product-specific **benefit**. A **mitigation flag** records a specific, evidenced advantage of one product or deployment mode that the company-level score cannot express — for example, an open-weight model that, self-hosted, sends no data to its maker; or a reseller offering whose disclosed backend gives it a documented environmental profile its siblings lack.

A mitigation flag is reported beside the result, in the same place as red flags, and is **never averaged into a score** — for the same reason a risk is not: blending it in would hide both the number's meaning and the mitigation's condition. Every mitigation flag states the condition under which it holds ("when self-hosted", "when the named backend is selected") — a conditional advantage presented unconditionally is a marketing claim, not a finding.

### Putting a result together: the results hierarchy

Every published view of a result presents its parts in this order, because this is the order in which they should influence a decision:

1. **Red flags and mitigation flags** — always first, taking precedence over any number.
2. **Pillar scores**, each shown with its **evidence coverage** (the share of applicable criteria whose assurance level is not Unknown) and its assurance mix. This is the primary result.
3. **The weak-pillar flag**, wherever any pillar scored 0.
4. **The composite** (the weighted geometric mean across pillars) — a **secondary output, shown by default for at-a-glance readability but always dismissible** *(amended 14 August 2026; originally "off by default and shown on request")*. Its position in this hierarchy is unchanged: it must never be published without the pillar scores and coverage beside it, never presented as the headline in place of red flags and pillar scores, and never without the equally-weighted figure where custom weights were used.

The composite is demoted deliberately. A single number invites comparisons the evidence cannot support and hides exactly the structure — a weak pillar, thin coverage, a flag — that a decision should turn on. The pillar profile with its coverage is the honest headline.

For each assessment you still produce the full record: a score and assurance level per criterion, a short dated note per score, all flags, and the coverage figures. When you summarise a group, report the median and the range as well as the average — an average alone can be dragged by a single outlier.

### What results can and cannot be compared

**Comparability across entity types, and across domains, is an explicit non-goal of this framework.** A frontend library and a hosting company assessed under the same criteria do not become comparable on one number: they are different kinds of object, assessed on partly different applicable criteria, with different evidence bases. The same is true of two conforming scorecards in different domains. Presenting such numbers as a ranking would be the same false precision the fixed pillar weighting was removed for.

What **is** supported is **composition**: different entity types sitting together in one stack, combined under the stack rules — the system boundary and count-once checks in section 3, host substitution for inherited criteria, and the weighted geometric mean across the composed pillars. A stack result compares with another stack result for the same functional unit. A library does not compare with a host.


---

## 5. The thirteen criteria

Each criterion below follows the same shape: what it means, its level (company, product or deployment — see section 2), why it matters, what to look at, the evidence and standards to use, how it varies by layer, and the signals of a high or low score.

Domain-specific guidance that earlier versions carried in this section — for example, notes on assessing AI providers against the hardware criteria — now lives in the methodology document of the tool that needs it (section 6).

---

### Criterion 1: Carbon emissions

**Level: deployment.** The emissions follow where and how the thing runs. For software the deployer hosts, this is inherited from — or attributed upstream to — the infrastructure underneath (section 3).

**What it means.** The greenhouse gases released because the thing exists and runs — measured as carbon dioxide equivalent (CO2e).

**Why it matters.** Computing is a fast-growing source of emissions. Training and running AI models, and powering data centres, use large and rising amounts of electricity.

**A standing note on uncertainty.** Every carbon figure in this framework is an estimate built on a chain of models, and the honest uncertainty is large. Digital carbon models are **attributional**: they allocate a share of past, measured emissions to an activity. They do not predict how total emissions would change if you acted differently — that is a consequential question these models cannot answer. Published estimates for the same digital activity can differ by several orders of magnitude, depending on system boundaries and assumptions. As one marker of how far settled-looking numbers can move: when the Sustainable Web Design model moved from version 3 to version 4, its headline energy-per-byte figure fell by roughly two-thirds — from **0.81 kWh per gigabyte** (version 3, derived from the Andrae "expected 2020" scenario, with hardware production as a separate segment) to **0.30 kWh per gigabyte** (version 4, being 0.194 operational plus 0.106 embodied, with embodied energy distributed across data centres, networks and devices). **Any tool built from this framework must state the model version *and* the energy-intensity constant it actually uses, in its own output.** Naming a version without naming the constant is not enough: the two can drift apart, and a tool that cites one version while calculating with another will be wrong by the whole size of the revision. Treat all carbon figures as indicative, state the model and version used, and never present a single figure without its assumptions.

**What to look at.**

- Whether the provider reports emissions across all three "scopes": direct (Scope 1), bought energy (Scope 2), and the wider supply chain and use (Scope 3). For most online services, Scope 3 — including the making of hardware and, for AI, the running of the model by users — is the largest part.
- Whether emissions from making the hardware (embodied carbon) are included, not just the electricity to run it.
- The carbon intensity of the electricity used, and whether clean energy is matched hour by hour rather than only over a year.
- Real reductions versus offsets. Cutting emissions counts for more than buying offsets.
- Clear, dated targets and progress against them, ideally validated by the Science Based Targets initiative.
- For software and AI, a per-use measure such as the Software Carbon Intensity score.

**Evidence and standards.**

- [GHG Protocol](https://ghgprotocol.org/) — the main standard for measuring corporate and supply-chain (Scope 3) emissions.
- [Software Carbon Intensity (SCI) — ISO/IEC 21031:2024](https://greensoftware.foundation/standards/sci/) — a per-use carbon measure for software, from the Green Software Foundation.
- [Science Based Targets initiative](https://sciencebasedtargets.org/) — checks whether targets match climate science.
- [CDP](https://www.cdp.net/) — a widely used environmental disclosure platform.
- [IFRS S2 Climate-related Disclosures](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/) — the global baseline for climate reporting, building on the earlier TCFD recommendations.

**How it varies by layer.** AI models and hosting providers cause emissions directly. A CMS or development framework mostly inherits them — so judge it on whether it lets you choose a low-carbon host or region, and on its own efficiency (criterion 3).

**A note on user location and grid intensity.** Where an AI provider processes your queries matters. A provider hosted in China routes inference through a coal-heavy grid (~550 g CO₂/kWh); a provider using EU data centres may run on a grid nearer to 60–230 g CO₂/kWh depending on country. Some providers use market-based carbon accounting (buying renewable energy certificates globally) which can understate the location-based impact for users in high-carbon grid areas, or overstate it for users on clean-grid infrastructure. When scoring, note which accounting method the provider uses, and consider the grid intensity of where your queries will actually be processed. For open-weight models, self-hosting on low-carbon infrastructure is a genuine option that can transform this score.

**A note on Locational Marginal Emissions (LMEs).** Annual average grid intensity figures are adequate for compliance reporting, but they can misrepresent the real carbon consequence of adding computational load to the grid at a specific time and place. Locational Marginal Emissions (LMEs) measure the carbon cost of the *next unit* of electricity at a specific point on the grid, accounting for which generators are actually dispatched and the physical constraints of transmission. LME values vary by hour, day, season, and grid node — a data centre that looks clean by annual average may be drawing on coal capacity at peak demand, while a facility in a region with abundant wind or hydro may be genuinely low-carbon in real time.

For scoring purposes, the distinction matters most when assessing providers who claim real-time or near-real-time carbon optimisation — routing workloads to lower-LME regions or shifting non-latency-sensitive tasks to off-peak hours. A provider who uses LME signals for operational decisions is doing something substantively different and more rigorous than one who simply purchases annual renewable energy certificates. If a provider can demonstrate LME-aware workload scheduling, treat this as evidence of stronger practice under criterion 3 (efficiency) as well as criterion 1. For a more technical treatment, see: Cote and Sun (2025), *Locational Marginal Emissions for Carbon-Aware Data Center Operations in Large-Scale Power Grids*, arXiv:2512.18819 — a preprint, not yet peer reviewed.

**The physical limits of marginal accounting.** LME factors are derived for small changes in load and are highly localised: under grid congestion their validity window can narrow to a few megawatts, and a large workload shift changes the grid's dispatch order, invalidating the pre-calculated factor. LME signals are also far noisier than prices. For these reasons the framework uses LMEs as a **practice signal, not an accounting method**: verified LME-aware scheduling is evidence of operational rigour under criteria 1, 3 and 13, but a vendor's LME-derived *carbon numbers* carry the same self-reported scepticism as any other unverified figure, and totals must still be reported against standard attributional methods (GHG Protocol location-based and market-based).

**A note for AI models.** Separate the **training footprint** (the large, one-off cost of building the model) from the **inference footprint** (the ongoing cost of running it for users). A model can look clean on a per-query basis while hiding a very large training footprint that has not yet been "earned back" through use. Ask for both figures, and ask how the training footprint is spread across expected use. A small, efficient model reused widely may be far better than a giant model trained at great cost and used little.

**Rebound effects and derivative models.** Efficiency gains can increase total consumption by making use cheaper and easier — the Jevons effect — so falling per-query figures do not by themselves mean falling total impact; judge totals as well as intensities. Open-weight models also spawn large ecosystems of fine-tuned derivatives whose cumulative training cost can rival the original. The framework's count-once rule still applies: fine-tuning compute belongs to whoever runs it, on the infrastructure they chose. An assessor scoring a fine-tuned model counts the fine-tuning as that model's direct training footprint, plus the base model's amortised share where the provider discloses it. Responsibility for downstream derivatives is not assigned to the base-model provider.

**Scoring signals.** A high score (3–4) means full three-scope reporting including embodied carbon, both training and inference footprints disclosed for AI, science-based targets, real cuts and hour-by-hour clean energy, independently verified. A low score (0–1) means no emissions data, or vague claims resting mainly on offsets.

---

### Criterion 2: Water use

**Level: deployment.** Water is consumed where the workload physically runs, so the states inherited and upstream are available here under the quantity rule in section 3.

**What it means.** The fresh water consumed to run and cool the infrastructure, and the water used to generate its electricity — assessed across both direct on-site use and indirect off-site use, in line with ISO 14046.

**Why it matters.** Data centres use water to cool equipment, and the power stations that supply them use more. Water stress is a **local** problem: the same litre matters far more in a drought-hit region than in a wet one. Crucially, research suggests roughly two-thirds of a data centre's total water footprint occurs *off-site* — at the power stations that generate its electricity — not in the cooling towers visible on-site. Generative AI models generate significant heat that requires water to dissipate: estimates suggest roughly 0.5 litres of freshwater per 20 to 50 typical queries, though this varies significantly by model, data-centre design, and local climate. Figures are often incomplete and contested, so treat single numbers with care.

**Understanding the two scopes of water use.** ISO 14046 defines a life-cycle approach to water footprinting that distinguishes:

- **Direct water footprint (on-site, Scope 1):** Water evaporated in cooling towers, used in humidification systems, or otherwise consumed on-site and not returned to the local watershed. This is what most data-centre water metrics (such as WUE) measure.
- **Indirect water footprint (off-site, Scope 2 and 3):** Water consumed at the electricity generation layer (thermoelectric plants use cooling water; hydroelectric dams lose water to evaporation from reservoirs) and embedded in hardware manufacturing (semiconductor fabrication is highly water-intensive). These off-site volumes often exceed on-site consumption significantly.

When reviewing a provider's water data, check whether they are reporting both scopes, not just the more visible on-site figure. A provider reporting only WUE may be hiding the majority of its water impact.

**Assessing local water stress.** Volume alone does not indicate impact. One litre consumed from a water-abundant watershed is categorically different from one litre consumed in a region already under water stress. The AWARE (Available WAter REmaining) methodology provides a water-stress weighting factor for different regions, allowing consumption figures to be adjusted for local scarcity. A provider operating in a water-stressed region should face higher scrutiny even if its raw consumption is modest.

**What to look at.**

- Whether the provider reports **both** water withdrawal (total taken) and water consumption (permanently lost). Reporting only one can make the footprint look smaller than it is.
- Whether figures are given **per site**, not just as a single company-wide total. A national total tells a local community nothing about its own aquifer.
- Whether the provider reports water at sites in water-stressed areas using a recognised stress-weighting tool (such as AWARE), and what it is doing there.
- Whether indirect water use (electricity generation, hardware manufacturing) is estimated and reported alongside direct on-site use.
- Use of recycled or non-drinking water, closed-loop cooling, and "water-positive" commitments that replenish the same watershed.
- The Water Usage Effectiveness (WUE) metric, measured to a recognised standard.

**Evidence and standards.**

- [ISO 14046:2014 — Environmental Management: Water Footprint](https://www.iso.org/standard/43263.html) — the international standard for life-cycle water footprinting, covering both direct and indirect scopes, impact categories beyond volume (including scarcity and eutrophication), and the principles for regional weighting.
- [ISO/IEC 30134-9:2022 — Water Usage Effectiveness (WUE)](https://www.iso.org/standard/79342.html) — the standard data-centre water metric for on-site direct use.
- [EU data-centre reporting scheme — Delegated Regulation (EU) 2024/1364](https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj) — requires larger EU data centres to report water and energy data, under the [Energy Efficiency Directive (EU) 2023/1791](https://eur-lex.europa.eu/eli/dir/2023/1791/oj).
- Li, P., Yang, J., Islam, M. A. and Ren, S. (2025). *Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models*. Communications of the ACM, 68(7). Originally arXiv:2304.03271 (2023). — estimates per-query water consumption across AI providers.
- For background on local and indirect water impacts, see the [World Economic Forum on data-centre water circularity](https://www.weforum.org/stories/2025/11/data-centres-and-water-circularity/) and the [Lincoln Institute analysis of land and water impacts](https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/).

**How it varies by layer.** Hosting providers and data centres are where water use is direct. AI models, CMSs and frameworks inherit it — judge them on the hosts and regions they let you choose. For AI models specifically, per-query water estimates are now available from some providers (see criterion 13) and should be used alongside site-level figures.

**Scoring signals.** A high score (3–4) means per-site reporting of both direct and indirect water use, ISO 14046-aligned assessment, low or recycled water use, AWARE-weighted assessment at water-stressed sites, and verified replenishment. A low score (0–1) means no water data, only a single global on-site figure with no indirect scope, or no attention to local water stress.

---

### Criterion 3: Energy and resource efficiency

**Level: product.** Efficiency is a property of the artefact itself — its code, architecture and defaults — whoever runs it.

**What it means.** How much useful work the thing does for the energy and hardware it uses.

**Why it matters.** Efficiency reduces every other environmental impact at once — less energy means less carbon, less water and less hardware. It is often the single most practical lever.

**What to look at.**

- For data centres: Power Usage Effectiveness (PUE) — how much total energy is used for every unit that reaches the computing equipment. Lower is better.
- For hardware: how fully servers are used rather than sitting idle, and the energy efficiency of the equipment.
- For software, frameworks and CMSs: efficient code, sensible default settings, caching, and not loading more than is needed.
- For AI models: the energy per query or per task, the use of smaller or distilled models where they do the job, and "carbon-aware" running that shifts work to cleaner times or places.
- Reuse of waste heat (for example, heating nearby buildings).

**Evidence and standards.**

- [ISO/IEC 30134-2 — Power Usage Effectiveness (PUE)](https://www.iso.org/standard/63451.html) and the wider [ISO/IEC 30134 series](https://www.iso.org/publication/PUB200301.html), which also covers Renewable Energy Factor and Energy Reuse Factor.
- [Software Carbon Intensity (SCI) — ISO/IEC 21031:2024](https://greensoftware.foundation/standards/sci/) — links efficiency directly to carbon per use.
- [EU data-centre reporting scheme — Delegated Regulation (EU) 2024/1364](https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj) — reports energy performance and waste-heat reuse.

**How it varies by layer.** This is one of the few criteria that is **direct at every layer** — every layer can be efficient or wasteful in its own right. So score it for the thing itself, then again for what it inherits.

**Scoring signals.** A high score (3–4) means measured, published efficiency metrics, strong results, waste-heat reuse and carbon-aware operation. A low score (0–1) means no efficiency data and obvious waste (for example, oversized default models or idle servers).

---

### Criterion 4: Repairability, hardware lifespan and e-waste

**Level: company.** A circularity practice of organisations that own hardware. An entity with no hardware resolves to not applicable or inherited through the applicability matrix; it is not scored on a practice it cannot have.

**What it means.** How long the underlying hardware lasts, whether it can be repaired and upgraded, and what happens to it at the end of its life.

**Why it matters.** Making hardware carries a large environmental cost, so using it for longer spreads that cost over more useful work. Electronic waste (e-waste) is one of the fastest-growing waste streams in the world, and much of it is not collected or recycled properly.

**What to look at.**

- How long equipment is kept in service before replacement, and whether the provider extends life through repair, refurbishment and reuse.
- Whether spare parts, repair information and tools are available.
- Designing for repair and upgrade rather than disposal.
- Responsible recycling and take-back at end of life, and reporting of e-waste volumes.
- Use of refurbished or second-life hardware.
- **Software-driven obsolescence.** Whether software choices force hardware to be thrown away early. If a framework, CMS or AI tool drops support for older operating systems, processors or devices faster than it needs to, it pushes usable hardware into the bin. Long support periods and backward compatibility reduce e-waste; aggressive deprecation increases it.

**Evidence and standards.**

- [EU Ecodesign for Sustainable Products Regulation (EU) 2024/1781](https://eur-lex.europa.eu/eli/reg/2024/1781/oj) — sets durability, repairability and "digital product passport" requirements.
- [EU Right to Repair Directive (EU) 2024/1799](https://eur-lex.europa.eu/eli/dir/2024/1799/oj) — strengthens consumers' right to have products repaired.
- [Waste Electrical and Electronic Equipment (WEEE) Directive 2012/19/EU](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012L0019) — rules on e-waste collection and recycling.
- [The Global E-waste Monitor (UNITAR/ITU)](https://ewastemonitor.info/) — data on e-waste volumes and recycling rates.

**How it varies by layer.** Repairability is direct for hardware makers and hosting providers. AI models inherit it through the servers they run on. For a CMS or framework, the physical side is a minor factor — but software-driven obsolescence is a **direct** impact: a software layer should be marked down if it forces premature hardware replacement, and credited if it offers long support and backward compatibility.

**Scoring signals.** A high score (3–4) means long hardware life, repair and reuse programmes, published e-waste recycling rates, use of refurbished kit, and (for software) long support periods that do not force early hardware replacement. A low score (0–1) means short replacement cycles, no repair support, no end-of-life reporting, or software that drops support for usable hardware to push upgrades.

---

### Criterion 5: Responsible sourcing and conflict minerals

**Level: company.** A duty of the entity being assessed. Under the quantity-versus-duty rule in section 3, it is never satisfied by an upstream provider’s diligence — a buyer is scored on its own supplier selection and enquiry.

**What it means.** Whether the materials in the hardware — especially tin, tantalum, tungsten and gold (together called "3TG"), plus cobalt and other critical minerals — are sourced without fuelling conflict or abuse.

**Why it matters.** Some minerals used in electronics come from areas where mining funds armed groups or relies on dangerous and exploitative labour, including child labour. Responsible sourcing aims to break that link.

**What to look at.**

- Whether the provider carries out supply-chain due diligence following the recognised five-step OECD method.
- **Whether the provider buys hardware rather than making it does not reduce the duty.** US Form SD obligations bind companies that manufacture or contract to manufacture, so a provider that purchases commodity servers may file nothing and still be expected to act: the OECD guidance places due-diligence duties on downstream buyers too. Ask what the provider requires of its suppliers, not only what it is legally obliged to publish. Note also that the large cloud providers design their own servers and have them built by ODM partners, so they do contract to manufacture and their minerals reporting does cover data-centre hardware.
- **Reuse is a mitigation, not due diligence.** Refurbishment, server auctions and extended hardware life genuinely reduce demand for newly mined minerals and deserve credit, but they answer a different question from whether the supply chain has been investigated. Score them as what they are and say so.
- Whether it identifies the smelters and refiners in its supply chain and uses audited, conflict-free sources.
- Coverage beyond 3TG — for example, cobalt, which is central to batteries and has its own serious risks.
- Public reporting of findings and of action taken when problems are found.
- Independent assurance, for example through the Responsible Minerals Assurance Process.

**Evidence and standards.**

- [OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas](https://www.oecd.org/en/topics/sub-issues/due-diligence-guidance-for-responsible-business-conduct/responsible-mineral-supply-chains.html) — the international standard.
- [EU Conflict Minerals Regulation (EU) 2017/821](https://eur-lex.europa.eu/eli/reg/2017/821/oj) — due-diligence duties for EU importers of 3TG.
- [Responsible Minerals Initiative](https://www.responsiblemineralsinitiative.org/) — runs the assurance process the EU formally recognised in 2025.
- [UN Guiding Principles on Business and Human Rights](https://www.ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights) — the wider human-rights basis.
- [EU Corporate Sustainability Due Diligence Directive (EU) 2024/1760](https://eur-lex.europa.eu/eli/dir/2024/1760/oj) — broader supply-chain due diligence duties.
- The United States [Dodd-Frank Act, Section 1502](https://www.sec.gov/rules-regulations/2012/08/conflict-minerals) — conflict-minerals disclosure for listed companies.

**How it varies by layer.** This impact lives in the hardware, so it is inherited by every software layer above. Score hosting providers and hardware-heavy services directly; for a CMS or framework, note that the impact exists but sits with the infrastructure beneath.

**Scoring signals.** A high score (3–4) means full OECD-aligned due diligence, named audited smelters, cobalt covered, independent assurance and public reporting. A low score (0–1) means no due diligence and no disclosure.

---

### Criterion 6: Impact on local communities

**Level: deployment.** Community impacts follow siting — where data centres draw water, land and grid capacity. Company conduct that harms communities is carried by flags, which take precedence over the number.

**What it means.** The effect on the people who live near the physical infrastructure — mainly data centres, but also cabling and manufacturing.

**Why it matters.** Data centres compete with local people for water, electricity, land and grid capacity. They can bring jobs and investment, but they can also raise costs, strain scarce water, and be built without real consultation. Several projects have been paused or cancelled after local opposition or environmental rulings.

**What to look at.**

- Genuine consultation with local communities before building, not just after.
- Honest assessment of effects on local water, electricity prices and grid capacity.
- Whether benefits (jobs, investment, infrastructure, waste-heat for local use) are shared locally.
- Land use and effects on housing and the local environment.
- Human-rights impact assessment, and a way for affected people to raise concerns and get a response.

**Evidence and standards.**

- [UN Guiding Principles on Business and Human Rights](https://www.ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights).
- [IFC Performance Standards on Environmental and Social Sustainability](https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards) — widely used for community impact and consultation.
- [OECD Guidelines for Multinational Enterprises on Responsible Business Conduct](https://www.oecd.org/en/topics/responsible-business-conduct.html).

**How it varies by layer.** This is direct for hosting providers and data-centre operators because they choose where to build. Software layers inherit it through their choice of provider and region.

**Scoring signals.** A high score (3–4) means early, real consultation, honest local impact assessment, shared local benefit and a working complaints route. A low score (0–1) means building with little consultation, no local impact assessment, or clear local harm.

---

### Criterion 7: Workers and labour conditions

**Level: company.** Describes how the organisation treats the people who do its work, and must agree wherever the same organisation appears (section 6). For open-source projects, the corporate-steward rule in section 6 decides whose workforce is in scope.

**What it means.** The treatment of people who do the work behind the ecosystem — in mines and factories, in data centres, and in the digital work that supports AI, such as data labelling and content moderation.

**Why it matters.** The online world depends on a great deal of human labour that is often hidden. This includes workers who label training data or review harmful content, often for low pay and with little protection, sometimes facing distressing material.

**What to look at.**

- Pay, working hours, safety and security of employment across the supply chain.
- Conditions for data-labelling and content-moderation workers, including mental-health support for those exposed to harmful content.
- Freedom to join a union and bargain collectively.
- Action against forced labour and child labour, backed by audits.
- Whether labour standards apply to contractors and outsourced workers, not just direct employees.
- **Algorithmic management.** Whether automated systems that track, score, schedule or discipline workers respect their dignity. For data-centre staff, logistics workers and crowd-sourced annotators, check whether productivity tracking sets unsafe work paces, removes human judgement from decisions like dismissal, or causes documented stress and harm. Workers should be able to see, question and appeal automated decisions about them.

**Evidence and standards.**

- [ILO Declaration on Fundamental Principles and Rights at Work](https://www.ilo.org/resource/ilo-declaration-fundamental-principles-and-rights-work) and the ILO core conventions.
- [UN Guiding Principles on Business and Human Rights](https://www.ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights).
- [EU Corporate Sustainability Due Diligence Directive (EU) 2024/1760](https://eur-lex.europa.eu/eli/dir/2024/1760/oj).

**How it varies by layer.** Labour issues appear at every layer, but the form changes: mining and manufacturing at the bottom, data-centre staff in the middle, and data and moderation work around AI models. Score the most relevant form for the layer you are assessing.

**Scoring signals.** A high score (3–4) means fair pay and conditions throughout the chain, support for moderation workers, humane and appealable algorithmic management, respected union rights and audited freedom from forced and child labour. A low score (0–1) means no labour standards beyond direct staff, intrusive automated management with no appeal, and no checking.

---

### Criterion 8: Accessibility and digital inclusion

**Level: product.** Accessibility belongs to the artefact that reaches people. Layers with no user interface resolve to not applicable through the matrix. **A control panel, dashboard, developer console or administrative interface is a user interface for this purpose** — the people it reaches are the entity's own customers, developers or administrators, and excluding disabled people from that population is not applicable's escape route. Not applicable is reserved for layers that ship no interface of any kind, to anyone.

**What it means.** Whether the thing can be used by people with disabilities, and whether it widens or narrows access for people generally.

**Why it matters.** A large share of people have a disability. If a tool or service is not accessible, it shuts people out — including from public services. Accessibility is also a legal duty for many organisations.

**What to look at.**

- Conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA, the recognised standard.
- A published accessibility statement that is honest about what does and does not yet meet the standard.
- Testing with assistive technology and with disabled users, not just automated checks.
- For AI: whether outputs are usable by assistive technology and whether the model treats users fairly across groups.
- **For AI, language and socio-economic equity.** Whether the model works as well, and is as safe, in low-resource and regional languages as it is in English, or whether quality and safety guardrails are tuned mainly for wealthy English-speaking markets. Unequal performance shuts whole populations out and can expose them to less-safe outputs.
- Wider inclusion — for example, support for low-bandwidth use, multiple languages, and older devices.

**Evidence and standards.**

- [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) — the W3C standard, now also published as ISO/IEC 40500:2025.
- [EN 301 549](https://www.etsi.org/standards) — the European accessibility standard for ICT, which references WCAG and underpins the European Accessibility Act.
- [GOV.UK accessibility guidance in the Service Manual](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction).

**How it varies by layer.** Accessibility is direct for anything people use directly — AI interfaces, CMSs, frameworks and applications. It matters less for back-end hosting, except in the management tools that operators use.

**Scoring signals.** A high score (3–4) means tested WCAG 2.2 AA conformance, an honest accessibility statement, testing with disabled users, and (for AI) measured, comparable quality and safety across languages and regions. A low score (0–1) means no accessibility work, no statement, or AI that works well only for a narrow, wealthy, English-speaking group.

---

### Criterion 9: Transparency and accountability

**Level: product.** Transparency is assessed against the artefact and the body that publishes it — what is disclosed, and whether anyone independent can check it.

**What it means.** How open the provider is about how the thing works and what it costs the world — and whether anyone can hold it to account.

**Why it matters.** Every other criterion depends on this one. If a provider tells you nothing, you cannot judge its water use, its emissions, its labour practices or its military links. Openness also makes good behaviour checkable rather than just claimed.

**What to look at.**

- Clear, regular public reporting on environmental, social and governance impacts.
- For AI: documentation such as model cards or system cards that explain what a model is, how it was trained, its limits and its risks; and a published summary of training data where required.
- For software: open-source licensing, open governance, and a clear record of who controls the project.
- Independent audits and certifications, rather than self-claims alone.
- Honesty about problems and limits, not only successes.
- A clear owner accountable for impacts, and a way to raise concerns.

**Evidence and standards.**

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — structured around Govern, Map, Measure and Manage; widely used for trustworthy AI.
- [EU AI Act — Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) — includes transparency and documentation duties, especially for general-purpose AI.
- [ISO/IEC 42001](https://www.iso.org/standard/81230.html) — the management-system standard for AI.
- [OECD AI Principles](https://oecd.ai/en/ai-principles) — include transparency and accountability.
- [Global Reporting Initiative (GRI)](https://www.globalreporting.org/) and the [EU Corporate Sustainability Reporting Directive (EU) 2022/2464](https://eur-lex.europa.eu/eli/dir/2022/2464/oj) — sustainability reporting standards.
- [Open Source Initiative](https://opensource.org/osd) — defines what counts as open source.

**How it varies by layer.** Transparency is direct and central at every layer. Always score it for the thing itself.

**Note on the scoring threshold for this criterion.** Because transparency is both a criterion in its own right and the foundation for every other score, it carries a stronger verification requirement than the other criteria. This is the only hard cap in the framework, and it is deliberate. A raw score of 3 or 4 on criterion 9 requires independent verification. What counts as verification: an audit by a credible third party; a regulatory finding; documentation from an established watchdog; an independent transparency benchmark (for example, the Stanford Foundation Model Transparency Index); or fully open artefacts — weights, training data and code all released — that independent parties can inspect directly. A provider with detailed, consistent self-reporting but no independent checking of any kind scores no higher than 2 on this criterion, however thorough its disclosures appear. The cap exists because self-described transparency is exactly the claim that most needs outside confirmation: rewarding it on the provider's word alone would let confident marketing stand in for openness — the failure this criterion exists to catch.

**Verification without audits.** Independent verification does not require money. The framework accepts three routes that cost a developer nothing beyond openness itself:

1. **Fully open artefacts** — an OSI-approved or equivalent licence; the weights, the training data or a complete data statement, and the training and evaluation code, all public; with documentation sufficient for an independent party to reproduce or meaningfully inspect the claims. Open weights alone do not qualify.
2. **An independent benchmark or index** that has assessed the provider — for example, the Stanford Foundation Model Transparency Index.
3. **A published peer-reviewed evaluation, or a documented third-party reproduction,** of the provider's claims.

These routes exist so the cap rewards openness rather than audit budgets: a small open project that publishes everything can reach 3 or 4, while a well-funded lab that publishes only marketing cannot.

**Scoring signals.** 4 = full, regular reporting independently audited or certified; clear and honest AI or software documentation; open governance; proactive disclosure of problems and limits. 3 = substantive reporting with some independent verification (for example, a single third-party audit or a recognised certification, even if not covering all areas). 2 = detailed self-reporting without independent verification — the ceiling where no third-party checking exists. 1 = limited or patchy disclosure with no checking. 0 = no meaningful disclosure.

---

### Criterion 10: Military and weapons use, and limits on it

**Level: company.** Military involvement is a property of the organisation, and must agree wherever the same organisation appears (section 6). The corporate-steward rule decides whether it binds an open-source project.

**What it means.** Two related things: whether the thing is actually used by militaries or in weapons, and how strong the provider's rules are for limiting harmful military and weapons use.

**Why it matters.** Online infrastructure and AI are increasingly used in defence and warfare. Some uses may be lawful and defensible; others — such as autonomous systems that select and attack targets without meaningful human control, or systems used to target civilians — raise grave concerns. Clear limits, and meaningful human control, are central to current international debate.

**What to look at.**

- **Actual use:** known military or defence contracts, and any use in weapons or targeting systems. (Note: not all defence work is harmful, so judge the use, not just the label.)
- **Limits:** a clear, public acceptable-use policy that restricts harmful uses — for example, ruling out use in weapons that operate without meaningful human control, or use to harm civilians.
- Whether those limits are enforced, with monitoring and consequences, rather than stated and ignored.
- Compliance with export controls on dual-use technology (things with both civilian and military uses).
- Openness about the provider's overall stance and any government or defence relationships.

**Evidence and standards.**

- [UN work on lethal autonomous weapons systems (CCW Group of Governmental Experts)](https://disarmament.unoda.org/the-convention-on-certain-conventional-weapons/background-on-laws-in-the-ccw/) — the main international forum.
- [ICRC position on autonomous weapon systems](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems) — the humanitarian view, stressing human control.
- [EU Dual-Use Regulation (EU) 2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj) and the [Wassenaar Arrangement](https://www.wassenaar.org/) — export controls on dual-use technology.
- The provider's own published acceptable-use or usage policy.

**How it varies by layer.** This is direct for AI models and hosting and platform providers, whose products can be put to military use and who can set limits. It is usually a minor factor for a pure CMS, though its licence and acceptable-use terms can still matter.

**The military red flag — a threshold for you to set.** The peer review recommended an automatic, un-bypassable red flag for any product that gives "real-time telemetry, target selection or operational support to autonomous weapon systems or kinetic combat operations", regardless of how the vendor words its policy. The principle is sound, but the exact line is a values choice your team should own, because "operational support" can stretch from clearly grave (helping a weapon pick and strike targets without meaningful human control) to clearly ordinary (general-purpose cloud, email or payroll for a defence ministry). The framework's recommended default red flag is narrower and harder to dispute:

> A product triggers an un-bypassable red flag if it directly enables the selection of, or attack on, human targets without meaningful human control, or is knowingly used to target civilians — whatever the vendor's policy says, and whatever "national security" exception it claims.

Broader support (logistics, communications, intelligence analysis, general cloud) is **scored**, not auto-flagged, and judged on the strength of limits and human control. **Decide before you assess where your line sits** — for example, whether real-time targeting telemetry alone should trigger the flag. This is the open question noted at the top of the document.

**Scoring signals.** A high score (3–4) means clear, enforced limits on harmful military and weapons use, no loopholes dressed up as "national security" exceptions, meaningful human control where defence uses exist, full export-control compliance and openness about relationships. A low score (0–1) means no limits, no transparency, or evidence of use in systems that harm civilians or lack human control (which also triggers the red flag above).

---

### Criterion 11: Political involvement and influence

**Level: company.** Political conduct is a property of the organisation, subject to the same agreement and steward rules as criterion 10.

**What it means.** How the provider tries to shape law, policy and politics — through lobbying, donations, and its relationships with governments.

**Why it matters.** Large technology firms spend heavily to influence the rules that govern them. This is lawful, but it can work against the public interest, and it should at least be open to view. Hidden influence is the concern, not engagement itself.

**What to look at.**

- Lobbying activity, declared on official registers.
- Political donations and the funding of trade groups and think tanks.
- Whether public positions match private lobbying.
- Government contracts and any "revolving door" between the firm and regulators.
- Whether the provider takes responsibility for how its platforms affect elections and public debate.

**Evidence and standards.**

- [EU Transparency Register](https://transparency-register.europa.eu/) — record of organisations seeking to influence EU policy.
- [UK: Office of the Registrar of Consultant Lobbyists](https://registrarofconsultantlobbyists.org.uk/) — the statutory UK register — together with the parliamentary registers of members' interests.
- [US: Lobbying Disclosure Act filings](https://lda.senate.gov/) — the statutory federal register — with [OpenSecrets](https://www.opensecrets.org/) for analysis of US lobbying and political spending.
- [Canada: Registry of Lobbyists](https://lobbycanada.gc.ca/) — the federal register maintained by the Office of the Commissioner of Lobbying.
- [OECD Principles for Transparency and Integrity in Lobbying](https://www.oecd.org/en/topics/lobbying.html) — the international reference where no national register exists.

Use the register for the jurisdiction whose influence you are assessing. A provider active in several markets should be checked in each.

**How it varies by layer.** This sits with the **organisation** behind a product, so it applies most to the large firms that own AI models and hosting platforms. A small open-source CMS or framework usually has little political footprint — but check who funds and controls it.

**Scoring signals.** A high score (3–4) means full disclosure of lobbying, donations and government ties, public positions that match private ones, and responsibility for platform effects on democracy. A low score (0–1) means hidden influence, or public claims that contradict private lobbying.

---

### Criterion 12: Privacy, security and data governance

**Level: company.** Jurisdiction — which legal regime can reach the data — is the stable, company-level core of this criterion and follows the company everywhere. Product-specific data practices are carried by flags beside the score.

**What it means.** How the thing collects, uses, protects and shares people's data.

**Why it matters.** Online ecosystems run on data. Poor privacy and weak security expose people to surveillance, profiling, breaches and harm. AI adds new questions about training data and the personal information that models may hold or reveal.

**What to look at.**

- A lawful basis for collecting and using personal data, and only collecting what is needed.
- Clear, honest privacy information and real user control (access, correction, deletion, portability).
- Strong security, ideally to a recognised standard, and prompt, honest breach reporting.
- Where data is stored and who can access it, including governments.
- Not selling or sharing data in ways people would not expect.

**For AI, score two separate things.** A model can be excellent at one and poor at the other, so do not let a strong score on one hide a weak score on the other:

1. **User-query privacy** — how well the model protects what users type in and get back. For example: is your input used to train future models without consent? Is it stored, and for how long? Can it leak to other users?
2. **Training-data provenance** — where the data used to *build* the model came from, and whether it was used fairly. For example: was personal data, copyrighted work or creative content taken without consent, licence or compensation? Is there a published summary of training data? A model can guard user queries perfectly while having been built on data scraped without permission. Record these as two line items under this criterion.

**Evidence and standards.**

- [General Data Protection Regulation (EU) 2016/679 (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj) and, in the United Kingdom, the [Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/contents).
- [ISO/IEC 27001](https://www.iso.org/standard/27001) — the standard for information security management.

Where formal certification is disproportionate — for small open-source projects and non-profits — recognised community-verifiable practices count as evidence: a published security policy and disclosure process, reproducible builds, public issue tracking, and dependency audits using open tooling.
- [EU AI Act — Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) — includes data-governance duties for higher-risk and general-purpose AI.

**How it varies by layer.** Privacy and data governance are direct at every layer that touches personal data — which is most of them. Always assess it.

**Scoring signals.** A high score (3–4) means strong lawful data practices, real user control, certified security, honest breach handling, and — for AI — strong scores on *both* user-query privacy and training-data provenance. A low score (0–1) means unclear or excessive data collection, weak security, no transparency about training data, or strong query privacy paired with a model built on data taken without consent.

---

### Criterion 13: Per-unit efficiency

**Level: deployment.** The per-unit footprint depends on the infrastructure the work runs on, so inherited and upstream are available here under the quantity rule.

**What it means.** The carbon and water cost of a single query — the ongoing environmental impact of tool use, as opposed to the provider's total corporate footprint or its infrastructure efficiency in the abstract.

**Why it matters.** Criteria 1 and 2 measure corporate-level commitments and aggregate reporting. Criterion 3 measures infrastructure efficiency. None of those tells you what it actually costs, in carbon and water, every time a user sends a message. At scale — a team using an AI tool hundreds of times a day — per-prompt figures become the primary variable in operational environmental impact. They also reveal something important about transparency: a provider willing to publish granular per-query data is taking accountability more seriously than one hiding behind annual totals.

**What to look at.**

- Whether the provider publishes a per-query (or per-token) energy, carbon and water figure, with a clear methodology.
- Whether the figure covers both direct energy and carbon, and operational water use.
- Whether the methodology is independently reviewed or peer-reviewed, not just self-asserted.
- Whether the figure is given for a defined, reproducible prompt type (for example, a median text prompt) rather than a best-case scenario.
- For reasoning or extended-thinking modes: whether these are disclosed separately, since they carry significantly higher per-query costs.
- Whether the provider distinguishes between market-based carbon accounting (using renewable energy certificates) and location-based accounting (reflecting the actual grid where inference runs).

**Evidence and standards.**

- [Green Software Foundation — Software Carbon Intensity (SCI), ISO/IEC 21031:2024](https://greensoftware.foundation/standards/sci/) — a per-use carbon measure that can be applied at query level. This criterion is deliberately aligned with it: both express impact as a **rate per unit of useful work**, not as an annual total. The Green Software Foundation's **SCI for AI** extension (ratified December 2025) applies the same method to generative and agentic AI, and separates the provider's training cost from the consumer's inference cost — the same split this framework draws between criteria 1 and 13. Where a provider publishes an SCI-conformant figure, prefer it, and say so.
- [ITU-T L.1801 — Guidelines for assessing the environmental impact of artificial intelligence systems](https://www.itu.int/rec/R-REC-L) (February 2026) — a life-cycle standard requiring energy, energy mix, hardware, data-centre PUE and WUE, water, raw materials and e-waste to be reported, with training reported separately from inference. A provider following it should be able to answer every question in this criterion.
- Google's published per-prompt environmental data and methodology (the most detailed publicly available set, using median text prompt as the functional unit) — see [Google Cloud blog](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/) and the associated [research paper](https://arxiv.org/abs/2508.15734).
- Mistral's peer-reviewed lifecycle assessment (ADEME and Carbone 4, ISO 14040/44) — publishes 1.14 g CO₂e and 45 mL per 400-token response for Large 2, the most independently verified per-inference figures available as of 2026.
- Sam Altman's June 2025 blog post citing ~0.34 Wh and ~0.32 mL per average ChatGPT query — the only published figures from OpenAI, with no peer review, no carbon figure and no defined prompt type.

**Treat vendor per-prompt figures as self-reported at best.** Published per-prompt numbers are not comparable at face value. Check the boundary: most exclude training, networking beyond the data centre, and end-user devices. Check the accounting: a market-based carbon figure (backed by purchased certificates) can be several times lower than the location-based figure for the same prompt on the same grid — Google's own 2025 paper shows roughly a threefold gap. Check the functional unit: a “median text prompt” is not an “average query” and neither is a 400-token response. A vendor figure with a clear methodology is still self-reported unless that methodology has been independently or peer reviewed; only a peer-reviewed lifecycle assessment reaches Verified.

**The functional unit for reasoning, multi-modal and agentic queries.** A single “average query” figure loses its meaning when one user request triggers many model calls behind the interface. The functional unit for this criterion is **one user turn, end to end**: every model call, tool call, retrieval and generation step triggered by that turn, however many sub-queries the system runs. Figures measured per single completion should be labelled as such and treated as a lower bound for reasoning, multi-modal and agentic products. Because turn costs are highly skewed, providers should disclose the distribution — at least the median and a high percentile (for example the 95th) — rather than a single mean, and should report reasoning or extended-thinking modes separately.

**How it varies by layer.** This criterion is direct for AI models and the providers who run inference. It is lower materiality for CMSs and frameworks (which do not run inference), though they should still consider the per-query cost of any AI features they embed.

**A note on user location.** Per-prompt carbon depends on where inference runs. A provider using EU data centres (lower-carbon grids) will have a lower location-based per-query carbon figure than one using US data centres, even if both publish the same market-based figure. When scoring, note which accounting method is used and consider the grid intensity of the user's likely inference location.

**Workload optimisation as a higher-order signal.** Beyond publishing per-prompt figures, a small number of providers are beginning to shift computational workloads in response to real-time grid conditions. This can take two forms:

- *Temporal shifting:* scheduling non-urgent workloads (such as large training runs or batch inference) during hours when the grid is cleaner — often at night in summer when solar generation has ended, or during periods of high wind. This reduces both carbon intensity and cooling-water evaporation (cooler ambient temperatures reduce the water needed for heat dissipation).
- *Spatial shifting:* routing non-latency-sensitive queries to data centre regions where the Locational Marginal Emissions (LME) value is lower at that moment — for example, prioritising a facility drawing on hydropower over one on a gas-heavy grid.

When evidence of active, LME-aware or carbon-aware workload scheduling exists and can be verified, this should be treated as a significant positive indicator under this criterion and under criterion 3 (efficiency). Providers who claim carbon-aware operation should be asked for specifics: what data source drives the decision, how shifts are verified, and what the measured impact has been. Vague claims of "carbon-aware compute" without operational evidence should be treated as self-reported at best.

**Scoring signals.** 4 = peer-reviewed figures published for both carbon and water per prompt, with a clear reproducible methodology. 3 = independently verified or detailed self-reported figures for both carbon and water. 2 = partial figures (e.g. energy only, or water only) or well-evidenced estimates from a credible third party. 1 = no per-query data; impact is assumed to be typical for a frontier model. 0 = no per-query data and the provider is known to use high-carbon energy sources for inference (for example, unmitigated fossil generation at the data centre). Demonstrated and verifiable LME-aware or temporal workload shifting may justify raising a score by one level where the core data is already present.

---

## 6. How to run an assessment

Work through these steps. The later tools will follow the same order.

1. **Define the scope.** Name exactly what you are assessing and why. Choose a "functional unit" so comparisons are fair — for example, "per 1,000 users a month" or "per AI query."
2. **Map the layers.** List what the thing depends on (see [section 3](#3-the-layered-nature-of-online-ecosystems)). Decide how far down to trace each criterion.
3. **Set weights and materiality.** Equal pillar weights are the default. If your decision genuinely warrants different weights, record them and the reason — and plan to report the equally-weighted result alongside as a sensitivity check. Resolve every criterion to one of the five applicability states using your methodology document's declared matrix (sections 3 and 4), and record the reason for anything unusual.
4. **Agree red flags.** Write down, before you start, the findings that would cap the result no matter what.
5. **Gather evidence.** Collect reports, standards, audits and independent sources. Note the source and date for every fact. **A citation must support the specific criterion it is attached to.** A source that is about the right company but the wrong subject — an emissions report cited against a lobbying score, say — is not evidence for that criterion, and should be treated as no citation at all. When checking a completed assessment, read each source against the claim it is attached to, not just the list of sources as a whole.
6. **Score and rate confidence.** Give each criterion a 0–4 score and an assurance level (Verified, Self-reported, Estimated or Unknown). Write a short note for each. Where more than one person is available to score, follow the reliability check described below.
7. **Apply red flags.** Check whether any were triggered. If so, report them prominently.
8. **Summarise.** Produce the profile across the three pillars and the weighted geometric mean, shown under your chosen weights and under equal weights. When summarising a group of providers, report the median and range as well as the average. Keep important detail visible rather than hidden in one number.
9. **Record and date it.** Save your sources and set a review date — standards and providers change, so an assessment goes stale. **Treat 12 months as the maximum life of an assessment**, after which it should be redone. Use a shorter window for fast-moving things (for example, an AI model that updates often or a data centre whose energy mix is changing), and only a longer one with a clear, recorded reason.

A short worked summary for one criterion might read:

> **Water use — Score 2 (Self-reported).** The provider publishes a single global water figure but no per-site data and no split between water withdrawn and water consumed. It mentions recycled water at some sites. Source: provider sustainability report 2025, page 14. Review by: 2026.

### Checking the scoring is reliable

Every score in this framework is a judgement made by a person reading evidence. Two careful people can read the same evidence and score it differently. That is not a flaw to hide — it is a measurable property of the instrument, and the honest thing is to measure it and publish the result.

**The double-scoring rule.** Where more than one assessor is available, a **sample of at least one in five scored criteria** should be scored independently by a second assessor who has not seen the first assessor's score or note. Choose the sample to include the criteria that most often require judgement rather than a lookup — in practice criteria 6, 7, 10 and 11 — rather than sampling at random.

Then:

1. **Compare.** Record how often the two assessors gave the same score, and how often they were within one point.
2. **Reconcile.** Where they differ, the assessors agree a final score together and record *why* it moved. If they cannot agree, the lower score and the lower assurance level stand, and the disagreement is recorded in the note.
3. **Report.** Publish the agreement rate alongside the evidence coverage figure, in the same place. For example: "Evidence coverage 72%. Double-scored sample 20% of criteria; assessors agreed exactly on 68% and within one point on 91%."
4. **Act on patterns.** If one criterion produces repeated disagreement, the problem is usually the scoring signals for that criterion, not the assessors. Sharpen the wording in section 5 and note the change.

**Where only one assessor is available**, say so plainly rather than implying a reliability check that did not happen. A single-assessor assessment is still usable; it simply carries an unmeasured source of variation, and the reader should be told.

**The company-agreement rule.** Every **company-level** criterion (section 2) must agree wherever the same company appears across a publisher's conforming tools — the criteria describe the company, not the thing being assessed, and a cloud function cannot hold a different view of its maker's labour record than the analytics platform next to it. **Deployment-level** criteria may legitimately differ between a service and the host it runs on: that is the inheritance rule in section 3 working as intended, not an error to be forced into agreement. **Product-level** criteria belong to each artefact separately. Because each tool may now legitimately declare its own applicable criteria, this rule is the main thing holding a publisher's tool family together — so where a release process exists, agreement is checked automatically and a mismatch blocks release. The corporate-steward rule below qualifies what "the same company" means for open-source projects.

### The corporate-steward rule

The agreement rule above needs one qualification, because "the same company" is not always the
same kind of thing. Three cases have to be told apart.

1. **A wholly owned commercial product** — a hosted service the company builds, sells and
   controls outright. The company-level criteria **bind**: the product takes the company's score,
   because the product is the company. A cloud function, a managed database and an analytics
   platform sold by the same firm cannot each hold a different view of that firm's labour
   practices or military involvement.
2. **An open-source project a company stewards** — published under an open licence, with
   outside contributors and the practical option to fork, but with the company controlling the
   repository, the roadmap or the trademark. Here the company-level criteria do **not** bind.
   Criteria 10, 11 and 12 are marked **not applicable** and excluded from the total under the
   rule in section 4; they are not scored against the project, and no score is carried across
   from the steward. Criterion 7 stays scored, because a project has its own contributors and
   its own way of treating them.
3. **A project with no corporate steward** — governed by an independent foundation, or by a
   community with no controlling company. **Criteria 10 (military use) and 12 (privacy, security
   and data governance) resolve to not applicable**: an independent foundation sells nothing to a
   defence buyer and operates no product that collects a user's data, so neither criterion has
   anything to measure and scoring one would produce a default, not a finding. **Criterion 11
   (political involvement) stays scored**, because political conduct genuinely varies between
   foundations — several are registered lobbyists. Criteria 4, 5 and 7 are scored against the
   body in the ordinary way.

**Why the second case is treated differently.** Scoring a front-end library at 1 for labour
because its corporate steward faces content-moderation litigation on another continent tells the
reader something true about the company and something misleading about the library. The number
would carry a judgement the evidence does not support at that layer.

**What replaces the score, so the fact is not lost.** Marking a criterion not applicable must not
become a way for a company's record to disappear from view. So for every stewarded project the
assessment must also:

- **name the steward** and record its own company-level scores, with sources, next to the
  project's result — not buried in a note; and
- **raise a flag** where the steward scores 0 or 1 on any company-level criterion. The flag is
  reported separately and takes precedence over the number, in the same way as a red flag under
  section 4. A reader choosing the project sees the steward's record at the point of decision.

The effect is that the number describes the thing you are assessing, while the flag carries the
governance fact about who controls it. Neither is hidden inside the other.

**A consequence to be stated plainly.** For a stewarded project the Ethics and Governance pillar
rests on criterion 9 (transparency) alone, since 10, 11 and 12 are not applicable. That is a thin
basis for a pillar. It is accepted deliberately: criterion 9 is the best-evidenced criterion for
open-source projects, and a pillar built on one well-sourced criterion is more honest than one
padded out with three that describe a different entity.

> **This rule is contested, and we would like to hear from you.** There is a reasonable case
> against it. A company can gain real reputational benefit from stewarding a popular open-source
> project, and this rule stops that project's score reflecting the company's conduct — which
> could be read as letting corporate stewards off lightly. There is an equally reasonable case
> that the alternative rule, binding a library to its steward's score, moves a number that
> procurement decisions depend on using evidence drawn from a different layer of the stack.
> We have chosen to keep the number close to the thing being assessed and to carry the company
> fact in a flag instead. We are not certain this is right. If you have evidence or a worked
> example that bears on it, please tell us — see the contact route in section 1. Any change
> will be recorded in the version history rather than made silently.

**Precedent.** The distinction is not unusual. S&P Global's ESG Scores methodology sets out
explicit conditions under which a subsidiary may inherit its parent's score, and lists entities
of type "Assets/Products" as never inheriting; inheritance also breaks where the parent and the
subsidiary would be assessed under different industry questionnaires, on the grounds that
applying the wrong instrument to an entity is methodologically unsound. The reasoning here is
the same: the instrument that assesses a company is not the instrument that assesses a library.
That methodology also redistributes the weight of a criterion marked not applicable across the
remaining criteria in the same dimension, and handles controversies as a separate overlay
assessed for materiality rather than as an adjustment blended into the base score — both of
which correspond to the treatment above.


### Publishing a methodology document

Every conforming tool publishes a methodology document. The framework holds what is universal; the methodology holds the domain bindings — and without it, an adopter or a reader cannot tell where the tool's judgements came from. The minimum contents:

1. **The entity taxonomy** — the kinds of thing the tool assesses, with one-line definitions, and the governance classes used.
2. **The applicability matrix** — every criterion and entity-type pairing resolved to one of the five states, **with the reason for each row**, built by the method in section 4.
3. **The criterion levels as adopted**, if the tool departs from the defaults in section 2 (departures also belong in the conformance statement).
4. **Constants and models** — every constant used in a calculation, with its source and date. Naming a model version without naming the constant is not enough; the two can drift apart.
5. **Authoritative sources per criterion**, including the **search standard**: what a competent search checks before a cell is concluded not disclosed (section 4).
6. **Output formats**, including how the results hierarchy is presented and any machine-readable exports.
7. **Any location or context overrides** and the rule that generates them.

### The conformance statement

Each tool also publishes a short conformance statement: which framework rules it implements, and where it deviates, with reasons. Deviation is permitted — a domain can have good cause — but silent deviation is not.

**A worked example of a legitimate deviation.** A web-carbon tool found that a published model's rating bands had been calibrated against a world grid-intensity figure that was several years stale. Keeping the bands unchanged against the current, lower intensity would have flattered every site assessed. The tool rescaled the bands by the ratio of the two intensities, documented the divergence and the arithmetic, and stated it in its output. That is the pattern: deviate, say so, show why, and make the reader able to undo it.

### When a criterion is out of scope for a whole domain

A methodology may declare a criterion out of scope for its **entire domain**, not just for an entity type — a payments scorecard may have no meaningful water criterion at all. The declaration carries the same duties as any other applicability decision: a recorded reason, an entry in the conformance statement, and the pillar arithmetic in section 4 (a pillar with no applicable criteria returns no score and its weight is redistributed). What a methodology must not do is quietly score a domain-wide inapplicable criterion at a constant value — that is precisely what the zero-variance test exists to catch.

### Worked examples across entity types

Four short walkthroughs of the states and levels. The first three are drawn from real assessments; the fourth is **hypothetical and illustrative** — a domain the framework's authors have never assessed — included so an adopter in new territory has a pattern to follow.

**1. A community-governed software library** (frontend, no corporate steward). Deployment-level quantities (1, 2, 13) are **inherited** — the library's footprint is whatever host its deployer picks, so it is judged only on whether it makes responsible choices possible. Company-level duties: criterion 7 is **scored** against the project's own contributors; 10 and 12 resolve to **not applicable** under the corporate-steward rule, with the governance facts carried by steward disclosure where a steward exists. Product level: 3, 8 and 9 are **scored** — the bundle it ships, the accessibility of what it renders, and its open, auditable governance (a route to Verified under criterion 9). Nothing here is upstream: the library has locked in no provider.

**2. A hosting company that owns its data centres.** Almost everything is **scored** directly: it causes the deployment-level quantities (1, 2, 13) in its own facilities, owes the company-level duties (4, 5, 7, 10, 11, 12) itself, and its efficiency (3) and transparency (9) are its own. Criterion 8 is also **scored**: its control panel, dashboard and documentation are the user interface its own customers use, and an inaccessible one excludes disabled administrators and developers from using the provider at all. What criterion 8 does *not* reach is the deployer's own site visitors — that population's experience is scored against whatever front end the deployer builds, assessed elsewhere. The zero-variance test still matters here, but points the other way: a run of identical, unsourced accessibility scores across every provider in a class is evidence that nobody has looked, not evidence that the criterion does not apply — declaring it not applicable to explain away the pattern would have discarded the genuine findings sitting alongside it.

**3. An AI model behind a hosted API.** Deployment-level quantities (1, 2, 13) are **upstream** where the compute provider is named, with the provider's figures and assurance carried across unchanged; where no provider is named, there is nothing to attribute to and the state is **not disclosed**. Criterion 5 stays **scored** at company level: the model provider's duty is supplier selection and enquiry, and its provider's diligence does not discharge it (the quantity-versus-duty rule). Product level: 3, 8 and 9 are **scored**, with the criterion 9 cap applying unless verification comes through fully open artefacts. A self-hosted open-weight variant that sends no data to its maker is exactly what the **mitigation flag** exists for: the advantage is conditional on deployment mode, so it is flagged with its condition rather than blended into the company-level privacy score.

**4. Hypothetical: a payment service provider** (a domain not assessed by the framework's authors). The adopter's methodology might declare criterion 2 (water) out of scope for the whole domain — payment providers run thin software layers on named clouds, and a domain-wide water criterion would fail the zero-variance test immediately. Carbon (1) and per-unit efficiency (13) would be **upstream** to the named cloud; criterion 5 **scored** as the provider's own buyer duty; the remaining company-level criteria (7, 10, 11, 12) **scored** against each provider, with jurisdiction doing heavy work in criterion 12 for a service handling financial data; accessibility (8) **scored**, because a checkout is a user interface that reaches everyone. The methodology would record all of this with reasons, and the conformance statement would declare the domain-wide exclusion. None of these choices needs the framework's authors' permission — that is the point of the boundary.

---

## 7. Accessibility and plain-language commitments

All outputs from this framework, including the tools built from it, will meet the [Web Content Accessibility Guidelines (WCAG) 2.2 at level AA](https://www.w3.org/TR/WCAG22/). In practice this means:

- a logical heading order, with no levels skipped
- text alternatives for any images, charts or icons
- tables with proper header rows so screen readers can read them
- meaning never carried by colour alone, and clear colour contrast
- link text that makes sense on its own
- content that works with a keyboard and with assistive technology

The writing follows [GOV.UK style guidance](https://www.gov.uk/guidance/style-guide): short sentences, everyday words, the active voice, and technical terms explained when first used or in the [glossary](#9-glossary).

---

## 8. Sources and standards

All links were checked against official or recognised sources. Standards are updated over time, so check for the current version before you rely on one.

**Carbon and climate**

- [GHG Protocol](https://ghgprotocol.org/)
- [Software Carbon Intensity (SCI) — ISO/IEC 21031:2024](https://greensoftware.foundation/standards/sci/) — with the [SCI for AI](https://github.com/Green-Software-Foundation/sci-ai) extension (ratified December 2025) for generative and agentic AI.
- [Science Based Targets initiative](https://sciencebasedtargets.org/)
- [CDP](https://www.cdp.net/)
- [IFRS Sustainability Standards (S1 and S2)](https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/)

**Energy, water and data centres**

- [ISO/IEC 30134-2 — Power Usage Effectiveness (PUE)](https://www.iso.org/standard/63451.html)
- [ISO/IEC 30134 series (PUE, REF, WUE, ERF)](https://www.iso.org/publication/PUB200301.html)
- [ISO/IEC 30134-9:2022 — Water Usage Effectiveness (WUE)](https://www.iso.org/standard/79342.html)
- [ISO 14046:2014 — Environmental Management: Water Footprint](https://www.iso.org/standard/43263.html) — life-cycle water footprinting standard covering direct and indirect scopes, impact categories (scarcity, eutrophication), and regional stress weighting.
- [Energy Efficiency Directive (EU) 2023/1791](https://eur-lex.europa.eu/eli/dir/2023/1791/oj)
- [Data-centre rating scheme — Delegated Regulation (EU) 2024/1364](https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj)
- [ITU-T L.1801 — Assessing the environmental impact of AI systems](https://www.itu.int/rec/R-REC-L) (February 2026) — life-cycle reporting for AI, covering energy, water, materials and e-waste, with training separated from inference.
- [ISO/IEC TR 20226:2025 — Environmental sustainability aspects of AI systems](https://www.iso.org/standard/86177.html) — a technical report covering resource use, carbon, water and waste across the AI life cycle.
- [World Economic Forum — data-centre water circularity](https://www.weforum.org/stories/2025/11/data-centres-and-water-circularity/)
- [Lincoln Institute — land and water impacts of data centres](https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/)

**Per-unit efficiency and AI environmental impact**

- Li, P., Yang, J., Islam, M. A. and Ren, S. (2025). *Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models*. Communications of the ACM, 68(7). Originally arXiv:2304.03271 (2023). [https://arxiv.org/abs/2304.03271](https://arxiv.org/abs/2304.03271) — estimates per-query water consumption across AI providers and distinguishes direct and indirect water scopes.
- Cote, N. and Sun, X. (2025). *Locational Marginal Emissions for Carbon-Aware Data Center Operations in Large-Scale Power Grids*. arXiv:2512.18819. [https://arxiv.org/abs/2512.18819](https://arxiv.org/abs/2512.18819) — a preprint, not yet peer reviewed; presents LME methodology for data-centre carbon accounting at grid-node level, with accuracy comparisons against annual grid averages.
- Google (2025). *Measuring the environmental impact of delivering AI at Google Scale*. arXiv:2508.15734. [https://arxiv.org/abs/2508.15734](https://arxiv.org/abs/2508.15734) — Google's per-prompt methodology; self-reported (not independently verified) and market-based, with a stated boundary that excludes training, external networking and end-user devices.
- Mistral AI, ADEME and Carbone 4 (2025). *Our contribution to a global environmental standard for AI*. [https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai/](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai/) — the peer-reviewed lifecycle assessment (ISO 14040/44) behind the most independently verified per-inference figures available.

**Composite indicators and rating divergence**

- OECD and European Commission Joint Research Centre (2008). *Handbook on Constructing Composite Indicators: Methodology and User Guide*. OECD Publishing. [https://www.oecd.org/en/publications/handbook-on-constructing-composite-indicators-methodology-and-user-guide_9789264043466-en.html](https://www.oecd.org/en/publications/handbook-on-constructing-composite-indicators-methodology-and-user-guide_9789264043466-en.html) — the standard reference for weighting, aggregation and sensitivity analysis in composite scores; the basis for the geometric-mean and sensitivity rules in section 4.
- Berg, F., Kölbel, J. F. and Rigobon, R. (2022). *Aggregate Confusion: The Divergence of ESG Ratings*. Review of Finance, 26(6). [https://doi.org/10.1093/rof/rfac033](https://doi.org/10.1093/rof/rfac033) — shows that ESG-style ratings disagree mainly because of measurement and scope choices; the reason this framework keeps its scoring rules explicit and repeatable.

**The science behind the carbon model**

- Masanet, E., Shehabi, A., Lei, N., Smith, S. and Koomey, J. (2020). *Recalibrating global data center energy-use estimates*. Science, 367(6481). — the benchmark bottom-up estimate of global data-centre energy use.
- Freitag, C., Berners-Lee, M., Widdicks, K., Knowles, B., Blair, G. and Friday, A. (2021). *The real climate and transformative impact of ICT: A critique of estimates, trends, and regulations*. Patterns, 2(9). — why ICT carbon estimates diverge and how to read them.
- Mytton, D. and Ashtine, M. (2022). *Sources of data center energy estimates: A comprehensive review*. Joule, 6(9). — reviews 258 estimates and finds only two credible global models.
- *Network energy use not directly proportional to data volume: the power model approach for more reliable network energy consumption calculations* (2024). Journal of Industrial Ecology. Co-authored by D. Mytton. — why per-byte network energy models overstate marginal use; directly relevant to page-weight carbon models.
- Malmodin, J., Lövehagen, N., Bergmark, P. and Lundén, D. (2024). *ICT sector electricity consumption and greenhouse gas emissions — 2020 outcome*. Telecommunications Policy, 48(2). — the measured (rather than modelled) sector footprint.
- Aslan, J., Mayers, K., Koomey, J. G. and France, C. (2018). *Electricity intensity of Internet data transmission: Untangling the estimates*. Journal of Industrial Ecology, 22(4). — the halving-every-two-years finding for network energy intensity.
- Coroama, V. C. and Hilty, L. M. (2014). *Assessing Internet energy intensity: A review of methods and results*. Environmental Impact Assessment Review, 45. — foundational review of why internet energy estimates differ by orders of magnitude.
- Sustainable Web Design model, version 4 (2024). [https://sustainablewebdesign.org/](https://sustainablewebdesign.org/) — the per-byte web-carbon model used by Hive IT's calculators; note the large downward revision from version 3 described in criterion 1.

**Hardware, repair and e-waste**

- [Ecodesign for Sustainable Products Regulation (EU) 2024/1781](https://eur-lex.europa.eu/eli/reg/2024/1781/oj)
- [Right to Repair Directive (EU) 2024/1799](https://eur-lex.europa.eu/eli/dir/2024/1799/oj)
- [WEEE Directive 2012/19/EU](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012L0019)
- [The Global E-waste Monitor](https://ewastemonitor.info/)

**Responsible sourcing and human rights**

- [OECD Due Diligence Guidance for Responsible Mineral Supply Chains](https://www.oecd.org/en/topics/sub-issues/due-diligence-guidance-for-responsible-business-conduct/responsible-mineral-supply-chains.html)
- [EU Conflict Minerals Regulation (EU) 2017/821](https://eur-lex.europa.eu/eli/reg/2017/821/oj)
- [Responsible Minerals Initiative](https://www.responsiblemineralsinitiative.org/)
- [US Dodd-Frank Act, Section 1502 (conflict minerals)](https://www.sec.gov/rules-regulations/2012/08/conflict-minerals)
- [UN Guiding Principles on Business and Human Rights](https://www.ohchr.org/en/publications/reference-publications/guiding-principles-business-and-human-rights)
- [Corporate Sustainability Due Diligence Directive (EU) 2024/1760](https://eur-lex.europa.eu/eli/dir/2024/1760/oj)
- [OECD Guidelines for Multinational Enterprises](https://www.oecd.org/en/topics/responsible-business-conduct.html)
- [IFC Performance Standards](https://www.ifc.org/en/insights-reports/2012/ifc-performance-standards)

**Procurement and public reporting**

- [UK Procurement Policy Note 006 — Taking account of carbon reduction plans](https://www.gov.uk/government/publications/procurement-policy-note-006-taking-account-of-carbon-reduction-plans) — formerly PPN 06/21, renumbered for the Procurement Act 2023 and applying to procurements started on or after 24 February 2025. Requires a published Carbon Reduction Plan for in-scope central-government contracts above £5 million a year (including VAT), covering Scope 1, Scope 2 and five named Scope 3 categories, refreshed every 12 months.
- [B Lab — B Corp certification standards](https://www.bcorporation.net/en-us/standards/) — the standards were replaced in April 2025: the former 80-point assessment is gone, and certification now requires meeting minimum requirements across seven impact topics, with third-party verification.

**Labour**

- [ILO Declaration on Fundamental Principles and Rights at Work](https://www.ilo.org/resource/ilo-declaration-fundamental-principles-and-rights-work)

**Accessibility**

- [WCAG 2.2 (W3C)](https://www.w3.org/TR/WCAG22/)
- [GOV.UK Service Manual — making your service accessible](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction)
- [GOV.UK style guide](https://www.gov.uk/guidance/style-guide)

**AI governance and transparency**

- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [EU AI Act — Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [ISO/IEC 42001 (AI management system)](https://www.iso.org/standard/81230.html)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)
- [Global Reporting Initiative (GRI)](https://www.globalreporting.org/)
- [Corporate Sustainability Reporting Directive (EU) 2022/2464](https://eur-lex.europa.eu/eli/dir/2022/2464/oj) — note that its scope was substantially narrowed in 2026 by the "Omnibus I" amending directive, and the power to adopt sector-specific standards was removed. Check current scope before relying on it: most small and medium organisations are now outside it.
- [Foundation Model Transparency Index (Stanford CRFM)](https://crfm.stanford.edu/fmti/) — an independent, repeated, indicator-based assessment of how transparent foundation-model developers are. Under criterion 9 this counts as independent verification for the developers it covers; it does not cover every provider, and absence from the index is not a finding.
- [Open Source Initiative](https://opensource.org/osd)

**Military, weapons and dual use**

- [UN — lethal autonomous weapons (CCW)](https://disarmament.unoda.org/the-convention-on-certain-conventional-weapons/background-on-laws-in-the-ccw/)
- [ICRC position on autonomous weapon systems](https://www.icrc.org/en/document/icrc-position-autonomous-weapon-systems)
- [EU Dual-Use Regulation (EU) 2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj)
- [Wassenaar Arrangement](https://www.wassenaar.org/)

**Political influence**

- [EU Transparency Register](https://transparency-register.europa.eu/)
- [UK Consultant Lobbying Register](https://www.gov.uk/guidance/consultant-lobbying-register)
- [OpenSecrets](https://www.opensecrets.org/)

**Privacy and security**

- [GDPR — Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [UK Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/contents)
- [ISO/IEC 27001](https://www.iso.org/standard/27001)

---

## 9. Glossary

**AWARE (Available WAter REmaining)** — a regional water-stress weighting tool used in life-cycle assessments to convert water-consumption volumes into impact scores adjusted for local scarcity. One litre consumed in a water-stressed region carries a higher AWARE weight than one litre consumed in an abundant region. Used in ISO 14046-compliant water footprinting.

**Algorithmic management** — the use of automated systems to track, score, schedule, direct or discipline workers. It raises concerns when it sets unsafe work paces, removes human judgement, or harms workers' wellbeing without a way to appeal.

**Applicability state** — the declared answer, for each criterion and each kind of thing, to "does this apply here, and how?": scored, inherited, upstream, not applicable or not disclosed. Defined in section 3; every conforming tool declares its matrix in its methodology document.

**Conformance statement** — a short published declaration by a tool of which framework rules it implements and where it deviates, with reasons. See section 6.

**Criterion level** — whether a criterion describes the company, the product or the deployment. Company-level criteria follow the organisation everywhere and must agree across a publisher's tools; deployment-level criteria may be inherited or attributed upstream. See section 2.

**CAHRA (conflict-affected and high-risk areas)** — places where conflict or weak rule of law makes responsible mineral sourcing especially hard.

**Carbon dioxide equivalent (CO2e)** — a common unit that adds up different greenhouse gases by their warming effect.

**CMS (content management system)** — software used to create and run websites and digital content.

**Assurance level** — a rating shown next to every score recording how good the evidence is: Verified, Self-reported, Estimated or Unknown. It is a visible flag on the evidence and is never multiplied into the score. (Versions 1.1 to 1.3 used an “evidence-quality adjustment” that multiplied scores by 1.0, 0.75, 0.5 or 0.0; version 2 removes it — see section 4.)

**Dual-use technology** — technology with both civilian and military uses.

**Embodied carbon** — the emissions from making something (such as hardware), as opposed to running it.

**Functional unit** — the unit you measure impact against, so comparisons are fair (for example, per user or per query).

**Geometric mean (weighted)** — a way of combining pillar scores by multiplying them together, each raised to its weight share, instead of averaging them. A weak pillar pulls the result down and cannot be fully offset by strong pillars. Used for the overall score from version 2. See section 4 for a worked example.

**GPAI (general-purpose AI)** — an AI model that can be used for many different tasks, such as a large language model.

**Greenhouse gases** — gases that trap heat in the atmosphere, such as carbon dioxide.

**Inference footprint** — the ongoing carbon cost of running an AI model for users, as opposed to the one-off cost of training it.

**Location-based vs market-based carbon accounting** — two ways of measuring the carbon intensity of electricity use. Market-based accounting uses the carbon certificates a provider has purchased (which may claim zero carbon regardless of where generation happens). Location-based accounting uses the actual carbon intensity of the grid where electricity is consumed. For AI inference, these can diverge significantly: a provider claiming zero carbon via certificates may still route queries through a coal-heavy grid. Both figures are useful; location-based accounting better reflects the actual physical impact on the electricity system.

**Methodology document** — the published companion every conforming tool must have, holding its domain bindings: entity taxonomy, applicability matrix with reasons, criterion levels, constants and sources, per-criterion search standards, and output formats. See section 6.

**Mitigation flag** — the counterpart to a red flag: a specific, evidenced, conditional advantage of one product or deployment mode, reported beside the result and never averaged into a score. Always states the condition under which it holds. See section 4.

**LME (Locational Marginal Emissions)** — the marginal carbon cost of the next unit of electricity at a specific point on the electricity grid, accounting for which generators are actually dispatched and how transmission constraints affect the grid at that moment. LME values change by the hour and vary significantly across a grid. They are more precise than annual average grid intensity figures for operational carbon decisions — such as choosing when and where to run heavy AI workloads. See criterion 1 for how this applies to scoring.

**Per-unit efficiency** — the environmental cost of one unit of the thing being delivered, as opposed to an annual corporate total. What a unit is depends on the domain: for an AI model it is a single query (the per-prompt form); for infrastructure it is a unit of compute delivered. Named per-unit rather than per-prompt so that one criterion covers all three domains this framework is applied to. Measured as grams of CO₂ equivalent and millilitres of water per query (or per token). The most useful unit for comparing the ongoing operational environmental impact of different AI tools. See criterion 13.

**PUE (power usage effectiveness)** — how much total energy a data centre uses for every unit that reaches the computing equipment. Lower is better.

**Sensitivity check (equal weights)** — reporting the equally-weighted overall score alongside any custom weighting. A large gap between the two shows the result depends heavily on the weighting choice, and the pillar profile is then the more honest guide.

**SWD (Sustainable Web Design model)** — a published model for estimating the carbon of loading web pages from the data transferred. Version 4 (2024) revised the model's energy-per-byte figure down by roughly two-thirds compared with version 3: from 0.81 to **0.30 kWh per gigabyte** (0.194 operational plus 0.106 embodied). A marker of how uncertain digital carbon figures are — and a reason any tool must state the constant it uses, not just the version number.

**SaaS infrastructure locking** — when a managed service (software as a service) ties you to the vendor's own data centres, hardware and replacement cycles, so you cannot choose greener or more ethical infrastructure yourself. This is why such services are judged on the vendor's choices directly.

**Scope 1, 2 and 3 emissions** — direct emissions (1), emissions from bought energy (2), and all other supply-chain and use emissions (3).

**Software-driven planned obsolescence** — when software choices (such as dropping support for older systems or devices) force usable hardware to be replaced early, creating extra electronic waste.

**3TG** — tin, tantalum, tungsten and gold; minerals commonly used in electronics and most associated with conflict-financing risk.

**Training data provenance** — where the data used to build an AI model came from, and whether it was obtained and used fairly — for example, with consent, a licence or compensation for personal or copyrighted material.

**Training footprint** — the large, one-off carbon cost of building (training) an AI model, as opposed to the ongoing cost of running it.

**Weak-pillar flag** — a warning shown whenever any pillar scores 0. The zero is floored at 0.01 in the geometric mean, so the overall score degrades sharply rather than collapsing to nothing, and the flag makes the cause visible.

**WCAG (Web Content Accessibility Guidelines)** — the international standard for making digital content usable by people with disabilities.

**WUE (water usage effectiveness)** — a standard measure of how much water a data centre uses for its computing work.

**e-waste (electronic waste)** — discarded electronic equipment.

---

*End of foundation document, version 4.0. Tools built from this document each publish their own methodology document and conformance statement, as section 6 requires, and state the framework version they conform to.*

*© Hive IT 2026. Licensed under [Creative Commons Attribution 4.0 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) — you may copy, adapt and use this work, including commercially, provided you credit Hive IT and the Online Ecosystem Ethics Framework (OEEF).*
