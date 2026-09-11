# Stack Environmental Impact Calculator — Methodology

**Tool:** Hive IT [Tech Stack Ethics Scorecard](stack.html)  
**Version:** 1.7 (9 September 2026)  
**Licence:** Text and methodology CC BY 4.0; code Apache License 2.0. © Hive IT 2026  
**Produced by:** Hive IT, Sheffield — [hiveit.co.uk](https://hiveit.co.uk)

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| 1.7 | 9 September 2026 | **All three grid constants re-based to one dated Ember retrieval, and carbon figures are restated upward for UK and EU audiences.** UK **217.33 → 222.18**, EU **209.64 → 210.13**, World **458.54 → 459.03**, from a single Ember *Yearly Electricity Data* pull of **9 September 2026** — and the retrieval date is now recorded, in this document and in the code comment, because it is part of the citation. **This is not a correction of an error.** The old constants match no single calendar year of Ember's current data: fitting all three gives an RMS error of 1.27% against 2025 and 1.75% against 2024, and the outlier moves between the two. Version 1.4 recorded the source but never the retrieval date, so the vintage cannot be established from the artefacts and the honest remedy is a fresh dated one rather than a guess at the old one. **The rating bands go to four decimal places, 0.111 → 0.1115 and 0.334 → 0.3345.** The exact rescaled values are 0.111505 and 0.334516, which sit almost exactly on a three-decimal rounding boundary: at 3dp a 0.11% change in the world figure becomes a 0.9% change in `bandGood`, so the extra digit removes an amplification that has nothing to do with the data. **Effect: carbon figures rise about 0.8% for a UK audience, 0.15% for an EU audience and 0.10% for a worldwide audience.** The UK moves most because its constant moved most (+2.23%) and because the rating thresholds rescale off the *world* figure, not the UK one, so there is no cancelling. **No rating band changes in any tested configuration.** Water figures are untouched. Full before/after in "Restatement: what version 1.7 changed", below. **Figures published on version 1.6 or earlier understate carbon for any stack with a UK or EU audience share, and must be restated.** Also in this version: **E16**, a release blocker asserting that the two rating bands are still the SWD published 0.12 / 0.36 rescaled by the page's own `globalCI`, because they are hand-typed literals and nothing checked them — `carbon_crosscheck.cjs` derives its own rescale factor at runtime so it adapts rather than catching a stale band. |
| 1.6 | 13 August 2026 | **The water bands at scores 1 and 0 both move to 2.3 L/kWh, and published water figures are restated upward.** Also in this version, added the same day (documentation only, no constant moved): the carbon band derivation is reconstructed and recorded under Step 1 — bands 4 and 3 calibrated to published provider figures, band 0 Ember-sourced, bands 2 and 1 recorded honestly as judgement values whose original derivation was never written down. Band 1's 1.50 had no citable source at all — version 1.5 recorded that finding and left the value standing — and it sat **below** the 1.80 used for non-disclosure, so a host admitting to poor cooling scored *better* on water than a host disclosing nothing. That is the same inversion at the bottom of the band that was corrected one version earlier, surviving one rung higher up. Band 0's 1.80 was also weaker than it looked: Shehabi et al. 2016 says on-site water consumption "**is estimated at** 1.8 litres per kWh", a modelling assumption whose own footnotes are a 2009 trade article and a 2015 newspaper piece, denominated on total site energy, and superseded by the same authors' 2024 report at **0.36 L/kWh**. Both bands now take **2.3 L/kWh** — [Microsoft's published figure for its first-generation water-cooled designs](https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/) (24 June 2026), since reduced to 0.27 L/kWh — which is the only published figure anywhere for the poor end of the range this document has ever found. **Band 0 is now explicitly a deliberate penalty, not an empirical average**, and is labelled as one: an average cannot do band 0's job, because LBNL's own 0.36 would *reward* non-disclosure. **Effect: water figures rise +53% for the two hosts scoring 1, and +28% for the four scoring 0.** Bands 4, 3 and 2 are unchanged, and the four providers that publish their own WUE are unaffected, because a published figure overrides the band entirely. **Figures published on version 1.5 or earlier understate water use for any host scoring 0 or 1, and must be restated.** Full before/after in "Restatement: what version 1.6 changed", below. What this change does **not** fix: the denominator is still unsettled — LBNL's site WUE is denominated on total facility electricity while the Green Grid definition uses IT load (0.375 against ≈0.52 on the same data), and this document still does not say which it means. |
| 1.5 | July 2026 | **Grid intensity is now applied per operational/embodied split, not per location — and figures are restated upward.** Version 1.4 correctly stopped applying the host's intensity to the whole 0.30 kWh/GB, but it still grouped energy by *place*: the host's figure went to the entire data-centre segment (operational 0.055 **plus embodied 0.012**) and the audience-weighted figure to everything else (operational 0.139 **plus embodied 0.094**). So all **0.106 kWh/GB of embodied energy** took a local grid figure. The SWD methodology says explicitly not to do this — embodied energy is hardware manufacture, which happens across a worldwide supply chain, not on the host's grid — and the Green Web Foundation's co2.js reference implementation enforces it: its `embodiedEmissions()` function accepts no grid-intensity argument at all. Choosing a green host does not change where the servers were built. All embodied energy now takes the world figure (**458.54 g CO₂e/kWh**); the host's figure applies only to operational data-centre energy (0.055) and the audience-weighted figure only to operational network and device energy (0.139). **Effect: published figures rise by up to 54% for a low-carbon host serving a UK or EU audience, and by under 5% for a worldwide audience.** A green host with a UK audience at 2 MB moves from "well below global average" to "below global average" — the only rating-band change. Full before/after comparison in "Restatement: what version 1.5 changed", below. Also in this version: the rating thresholds and baseline intensity in this document are corrected to the rescaled values the tool has actually used since 1.4 (0.111 / 0.334 g and 458.54, not 0.12 / 0.36 and 494); worked example A's rating was wrong (0.1085 g is *below* 0.111, so it rated "well below", not "below"); and a stale limitation still describing 1.3 behaviour as a pending change is removed. Agreement with co2.js v0.18.0 is now asserted on every release by `carbon_crosscheck.cjs`, per segment, to within floating-point rounding. **Also in this version: the water fallback band at score 0 is corrected from 1.00 to 1.80 L/kWh**, cited to Shehabi et al. 2016 (LBNL) rather than the commonly miscited Green Grid EWIF figure. It had been *lower* than score 1's 1.50, so the band inverted at the bottom and non-disclosure scored better than admitted poor cooling; the no-host default moves with it. Water figures for a host scoring 0, or where no host is selected, rise by 80%. **Figures published on version 1.4 or earlier understate a low-carbon host's carbon emissions, and understate water use wherever the host scores 0 or none is selected. Both must be restated.** |
| 1.4 | July 2026 | **Segmented the host's grid intensity, and moved to a single current grid dataset.** Versions 1.0–1.3 multiplied the *entire* 0.30 kWh/GB by the host's carbon intensity. Under SWD v4 the host owns only the data-centre segment: operational 0.055 + embodied 0.012 = **0.067 kWh/GB, 22% of the total**. The remaining **0.233 kWh/GB (78%)** is network and device energy, consumed where the *visitor* is, so it now uses an audience-weighted grid intensity set by UK and EU share sliders with the remainder at the world average. The practical effect is that page weight, not hosting choice, is the dominant lever, and a low-carbon host's advantage is much smaller than previously shown. All three grid figures now come from one Ember release (Yearly Electricity Data 2025, "Total generation"): **UK 217.33, EU 209.64, World 458.54 g CO₂e/kWh** — replacing the stale 494, which was Ember's World figure for roughly 2020–21. Because SWD v4's published rating bands (0.12 / 0.36 g) were calibrated *against* 494, both are rescaled by 458.54/494 to **0.111 / 0.334 g**; keeping the published bands with a lower world intensity would have flattered every site against an unchanged threshold. This rescaling is a deliberate, documented divergence from SWD's own Digital Carbon Ratings thresholds. The CRP data block uses the identical segmented calculation and states the audience mix, the grid source and the band rescaling in its methodology section. **Figures published on any earlier version of this document are overstated for a low-carbon host and must be restated.** |
| 1.3 | July 2026 | **Corrected the energy-intensity constant.** Versions 1.0–1.2 documented and used **0.81 kWh/GB** while labelling it Sustainable Web Design Model v4. 0.81 is the **v3** figure (Andrae "expected 2020" scenario, four segments including a separate ~19% production segment). The v4 figure is **0.30 kWh/GB** (0.194 operational + 0.106 embodied, with embodied energy distributed across data centres, networks and devices). Consequently: carbon estimates fall by about 2.7×; the water basis moves from 15% of whole-system energy to the v4 operational data-centre intensity of 0.055 kWh/GB (water falls about 2.2×); the baseline grid intensity moves from 480 to the v4 default of 494 g CO₂e/kWh; and the rating thresholds are rebased to the v4 global-average page of 0.36 g CO₂e. Per framework v3.1 criterion 1, the calculator now states both the model version and the constant in its own output. |
| 1.2 | June 2026 | Implemented peer-review recommendations: (1B) raw metrics (grid CI, WUE, PUE) added to six hosting providers; calculator uses provider-specific figures where available with score-band fallback and a precision badge. (3a) CDN split calculation: page weight is now attributed proportionally across third-party CDN services using typical payload estimates; user-adjustable override slider added. (3b) Clarified that device embodied carbon is already included in the SWD v4 0.81 kWh/GB figure. (3c) "Monthly page impressions" renamed to "Monthly page impressions" throughout for accuracy. |
| 1.1 | June 2026 | Scorecard expanded to 86 technologies (+9). Scoring engine updated to equal criterion weights within pillars. Stack score algorithm corrected: inherited criteria now substitute the hosting provider's value rather than counting as zero. Band thresholds updated: Leading ≥80%, Good ≥60%, OK ≥40%, Limited <40% (was 75/55/35). Governance type (`weights`) and infrastructure description (`infra`) fields added to all technology records in the machine-readable export. |
| 1.0 | May 2026 | Initial release. 77 technologies. Per-criterion integer weights. CDN attribution guidance added. |

---

## Purpose

The Stack Builder includes an environmental impact calculator that estimates the monthly carbon emissions and water consumption of a website or application based on two user inputs — monthly page impression count and average page weight — combined with the ethics and sustainability scores already assigned to the technologies in the stack.

The calculator produces indicative estimates, not audited measurements. Its purpose is to help teams understand the order of magnitude of their stack's environmental footprint, to show which choices (particularly the hosting provider) have the most influence on that footprint, and to give a basis for comparison between stacks.

---

## Inputs

| Input | Range | Default | Notes |
|---|---|---|---|
| Monthly page impressions | 100 – 1,000,000 | 10,000 | Log scale slider |
| Average page weight | 0.1 – 10 MB | 2.0 MB | Refers to total transferred bytes per page load, including HTML, CSS, JS, images and fonts |

Page weight refers to the total bytes transferred per page load, not the uncompressed asset size. A figure of 2 MB is a reasonable default for a typical content-led website; data-heavy single-page applications may be 4–8 MB; a lightweight GOV.UK-style page may be under 1 MB.

---

## Base energy model

The calculator uses the **Sustainable Web Design (SWD) Model version 4**, published at [sustainablewebdesign.org](https://sustainablewebdesign.org/estimating-digital-emissions/).

The SWD model attributes a total system energy cost to each gigabyte of data transferred. Version 4 uses **three system segments**, each carrying both operational and embodied energy. (Version 3 used four segments, with production separated out; v4 distributes embodied energy into the three segments instead.)

| Segment | Operational (kWh/GB) | Embodied (kWh/GB) | Segment total |
|---|---|---|---|
| Data centres | 0.055 | 0.012 | 0.067 |
| Transmission networks | 0.059 | 0.013 | 0.072 |
| End-user devices | 0.080 | 0.081 | 0.161 |
| **Total** | **0.194** | **0.106** | **0.300** |

**Total system energy intensity: 0.30 kWh per GB transferred.**

> **Which grid intensity applies to which cell.** The split that matters for carbon is
> **operational versus embodied**, not data centre versus elsewhere. Read the table by column,
> not by row:
>
> | Energy | kWh/GB | Grid intensity applied | Why |
> |---|---|---|---|
> | Operational, data centres | 0.055 | The **host's** figure | Drawn from the grid where the servers run. |
> | Operational, networks + devices | 0.139 | The **audience-weighted** figure | Drawn where the visitor is, not where the server is. |
> | Embodied, all three segments | 0.106 | The **world** figure, always | Hardware manufacture happens across a worldwide supply chain. Choosing a green host does not change where the servers were built. |
>
> SWD states explicitly that the embodied figure must not be varied per host, and co2.js
> enforces it — `embodiedEmissions()` takes no grid-intensity argument. Versions 1.4 and
> earlier applied local figures to embodied energy; see the changelog and the restatement
> section.

> **A note on the constant.** Version 3 of the model used 0.81 kWh/GB. Version 4 uses 0.30 — a reduction of roughly two thirds, driven by better data and a lower measured total energy use of the internet. Framework v3.2 (criterion 1) requires any tool to state **both** the model version and the constant it uses, because the two can drift apart: versions 1.0 to 1.2 of this document named v4 while using v3's number. The calculator now prints the version and the constant in its own output.

This single figure is the starting point before applying stack-specific modifiers.

```
energy_per_page_kWh = (page_weight_MB / 1000) × 0.30
```

For a 2 MB page: `(2 / 1000) × 0.30 = 0.00060 kWh per page impression`

---

## Provider-specific raw metrics

Where a hosting provider has published verified or self-reported raw environmental figures, the calculator uses them directly rather than the score-derived band estimate. A precision badge labels which approach is in use.

| Provider | Grid CI (g CO₂e/kWh) | WUE (L/kWh) | PUE | Confidence | Source |
|---|---|---|---|---|---|
| Scaleway | 53 | 0.0001 | 1.02 | Verified | Scaleway Impact Report 2024, EcoVadis Gold, SBTi-validated |
| Hetzner | 60 | — | 1.13 | Self-reported | Hetzner sustainability FAQ 2024 |
| OVHcloud | 55 | — | 1.18 | Self-reported | OVHcloud CSRD report 2023 |
| AWS | 180 | 0.12 | 1.14 | Self-reported | AWS Sustainability Report 2023 |
| Azure | 175 | 0.125 | 1.12 | Self-reported | Microsoft Sustainability Report 2023 |
| GCP | 150 | 0.15 | 1.09 | Self-reported | Google Environmental Report 2024 |

**Grid CI** values for renewable-matched providers (AWS, Azure, GCP) are adjusted upward from pure-grid figures to reflect the gap between market-based renewable certificates and 24/7 carbon-free energy matching. A provider with 100% annual renewable certificates still draws fossil-generation power at certain hours; the figures above account for that imperfection conservatively.

**PUE** is used as a reference metric and is not currently factored into the energy calculation. Including PUE would require adjusting the SWD model's 15% data-centre energy fraction, which introduces additional uncertainty about the model's assumed average PUE. This is a known limitation.

For providers without published figures, the calculator falls back to the score-derived carbon intensity band (see Carbon calculation below). The output badge shows `≈ Score-band estimate` in those cases.

---

## Carbon calculation

### Step 1 — Establish carbon intensity

Carbon intensity (CI) is the grams of CO₂ equivalent emitted per kilowatt-hour of electricity consumed. It varies significantly by energy source and grid. The calculator derives CI from the **hosting provider's Criterion 1 (carbon) score** in the scorecard.

| C1 score | Band | Effective CI (g CO₂e/kWh) | Rationale |
|---|---|---|---|
| 4 | Leading | 50 | Renewable or nuclear-dominant grid; near-zero operational carbon (e.g. Scaleway, Hetzner) |
| 3 | Good | 175 | Strong renewable matching or low-carbon grid (e.g. OVHcloud, AWS post-2023, GCP 24/7 CFE) |
| 2 | OK | 320 | Some renewable action; mixed grid (e.g. DigitalOcean, Kinsta) |
| 1 | Minimal | 442 | Little or no action; close to global average (IEA 2022: 442 g CO₂e/kWh) |
| 0 | Unknown | 459.03 | No information; the world average grid intensity (Ember, retrieved 9 Sep 2026) |
| No host in stack | — | 459.03 | World average assumed (Ember, retrieved 9 Sep 2026); a warning is shown |

These are **effective carbon intensities** — they are not raw grid figures but represent the net result of a provider's renewable purchasing, physical grid mix, and carbon accounting approach. A score-3 provider operating on 100% market-based renewable certificates does not achieve 50 g/kWh in operational reality; 175 g/kWh reflects that the certificates reduce but do not eliminate effective emissions.

### Where the five carbon band values come from

Reconstructed and documented 13 August 2026, on Martin's instruction, so a third party can see
what each value rests on. **The reconstruction is honest about its confidence: two bands are
calibrated against published provider figures, one is fully sourced, and two are judgement
values whose original derivation was never recorded.** As with the water band, a provider's
own published figure (`rawMetrics.grid_ci`) always overrides the band, so the band binds only
hosts *without* a published figure.

| Score | Value | Basis | Confidence |
|---|---|---|---|
| 4 | 50 | Calibrated to the published effective intensities of the fully-renewable European operators in this suite: Scaleway 53 (Apave-verified), OVHcloud 55 (verified), Hetzner 60 (self-reported) — rounded to one significant figure just below the cluster | Calibrated to published figures, all three in `rawMetrics` |
| 3 | 175 | Calibrated to the market-based hyperscaler range in this suite: GCP 150, AWS 180 (both score 3 and publish) — 175 sits between them. It deliberately does **not** represent low-carbon-grid score-3 operators like OVHcloud (55), whose published figures override it anyway | Calibrated to published figures; conservative for European grids |
| 2 | 320 | **Judgement value, original derivation unrecorded.** Numerically it is the midpoint of band 3 and the Ember world average (175 + 459.03)/2 = 317.0, rounded to two significant figures — a plausible reconstruction, not a record. The one published score-2 figure (Azure, 175, market-based) sits well below it; Azure's own figure overrides | Reconstruction only |
| 1 | 442 | "Close to the global average grid." The Step 1 table has attributed this to "IEA 2022", which cannot be confirmed: IEA's published world series reads ≈460 for 2022 and 445 for 2024 (IEA *Electricity 2025*), so 442 is an IEA-family world-average snapshot whose exact edition was never recorded. It sits just below band 0, preserving monotonicity: minimal action scores marginally better than no information | Approximately anchored; edition unrecorded |
| 0 | 459.03 | Ember Yearly Electricity Data, "World" 2025, retrieved 9 Sep 2026 — the same figure used as the baseline CI and for all embodied energy, sourced and dated throughout this document | Fully sourced |

**Calibration test against our own data** (the same test the water band got): for the six
providers with published figures, the band the score would give versus what they publish —
Hetzner (4): 50 vs 60; Scaleway (3): 175 vs 53; OVHcloud (3): 175 vs 55; AWS (3): 175 vs 180;
GCP (3): 175 vs 150; Azure (2): 320 vs 175. The band is calibrated to the **market-based
hyperscaler end** of each score and overstates low-carbon-grid European operators by up to
3×; every such operator publishes, so the overstatement never binds today. **Like the water
band, it is monotonic and defensible in shape and not calibrated in magnitude at bands 2 and
1**, where no provider in the suite publishes a figure to calibrate against.

**What remains open.** The derivation is documented — this section is that documentation.
What is *not* in place is enforcement: no release check requires a constant to carry a source
and a date, so one can still be added or changed carrying neither. Recorded here rather than
silently dropped.

Where a location override is active (UK/EU deployment adjusts scores for US-jurisdiction providers), the calculator uses the overridden C1 score automatically.

### Step 2 — Apply efficiency multiplier

The SWD model uses a global average figure for data-centre and network efficiency. Individual stacks vary: a well-optimised Next.js application served from a modern edge CDN uses less compute per request than a plugin-heavy PHP installation on shared hosting.

The calculator derives an efficiency multiplier from the **average Criterion 3 (energy and resource efficiency) score** across all technologies in the stack, excluding inherited criteria (where a software framework has no direct influence on the host's efficiency).

| Average C3 score | Efficiency multiplier | Interpretation |
|---|---|---|
| ≥ 3.5 | 0.75 | 25% below model average — highly optimised infrastructure |
| ≥ 2.5 | 0.87 | 13% below average — good efficiency |
| ≥ 1.5 | 1.00 | At model average |
| ≥ 0.5 | 1.18 | 18% above average — below-average efficiency |
| < 0.5  | 1.35 | 35% above average — poor or unknown efficiency |

### Step 3 — Calculate carbon

```
CO₂_per_page_g  = ( op_datacentre_kWh × host_CI
                  + op_network_device_kWh × audience_CI
                  + embodied_kWh × world_CI ) × efficiency_multiplier

  where  op_datacentre_kWh      = (page_weight_MB / 1000) × 0.055
         op_network_device_kWh  = (page_weight_MB / 1000) × 0.139
         embodied_kWh           = (page_weight_MB / 1000) × 0.106
         world_CI               = 459.03 g CO₂e/kWh

CO₂_monthly_kg  = CO₂_per_page_g × monthly_impressions / 1000
```

The three terms are computed by a single function in the tool (`carbonPerViewG`), called by
both the live calculator and the CRP data block. Before version 1.5 the arithmetic existed in
two separate copies, which is how one error came to affect two outputs.

#### Worked example A — Hetzner hosting, 2 MB page, 10,000 visitors/month

- Hosting: Hetzner, C1 score 3 → CI = 175 g/kWh (operational data-centre energy only)  
- Audience: 100% UK → regional CI = 222.18 g/kWh (operational network + device)  
- Embodied energy: world CI = 459.03 g/kWh (never varied by host or audience)  
- Stack efficiency: average C3 ≈ 3 → multiplier = 0.87  
- Operational data-centre: (2/1000) × 0.055 = 0.000110 kWh × 175 = 0.01925 g  
- Operational network + device: (2/1000) × 0.139 = 0.000278 kWh × 222.18 = 0.06177 g  
- Embodied: (2/1000) × 0.106 = 0.000212 kWh × 459.03 = 0.09731 g  
- CO₂ per page: (0.01925 + 0.06177 + 0.09731) × 0.87 = **0.155 g**  
- Monthly CO₂: 0.155 × 10,000 / 1,000 = **1.55 kg**  
- Rating: above 0.1115 g, below 0.3345 g → **below global average**  

> Under version 1.4 this same stack returned 0.109 g and, contrary to what that version's text
> claimed, a "well below global average" rating — 0.1085 g is below the 0.111 g threshold then in
> force, so
> the rating stated there was wrong as well as the figure. Correcting the embodied attribution
> raises it 42% to 0.155 g and moves it into "below global average", which is where version 1.4
> had mistakenly placed it anyway. **Embodied energy is now the largest single term** — 0.097 g
> of the 0.178 g before the efficiency multiplier, or 0.085 g of the final 0.155 g, 55% of the
> result. That is the honest picture: most of a page view's carbon is the manufacture of the
> devices and infrastructure carrying it, and no hosting choice changes that. With a worldwide
> audience instead of a UK one the result would be 0.212 g.

#### Worked example B — Vercel hosting, 1 MB page, 50,000 visitors/month

- Hosting: Vercel, C1 score 2 → CI = 320 g/kWh (operational data-centre energy only)  
- Audience: 100% UK → regional CI = 222.18 g/kWh (operational network + device)  
- Stack efficiency: average C3 ≈ 3.5 → multiplier = 0.75  
- Operational data-centre: (1/1000) × 0.055 = 0.000055 kWh × 320 = 0.01760 g  
- Operational network + device: (1/1000) × 0.139 = 0.000139 kWh × 222.18 = 0.03088 g  
- Embodied: (1/1000) × 0.106 = 0.000106 kWh × 459.03 = 0.04866 g  
- CO₂ per page: (0.01760 + 0.03088 + 0.04866) × 0.75 = **0.073 g**  
- Monthly CO₂: 0.073 × 50,000 / 1,000 = **3.64 kg**  
- Rating: below 0.1115 g → **well below global average**  

> This rises 34% from version 1.4's 0.054 g but keeps its rating. Note what happens to the
> hosting lever: Vercel's assumed 320 g/kWh is worse than the UK grid, yet it now governs only
> 0.055 of the 0.30 kWh/GB, so the penalty for a higher-carbon host is smaller than in any
> earlier version — while the floor set by embodied energy is higher. **Page weight, not
> hosting choice, is overwhelmingly the dominant lever**, and version 1.5 makes that starker
> than 1.4 did.

---

## Water calculation

Water consumption is calculated for the **operational data centre energy only** — 0.055 kWh/GB under SWD model v4 — using the hosting provider's **Criterion 2 (water use) score** to determine an effective Water Usage Effectiveness (WUE) figure. Operational data-centre energy is the correct basis because WUE is defined as litres per kilowatt-hour of data-centre energy; applying it to whole-system energy would attribute cooling water to networks and user devices, which do not use the data centre's cooling.

WUE measures litres of water consumed per kilowatt-hour of IT load. Lower is better.

| C2 score | Effective WUE (L/kWh) | Rationale |
|---|---|---|
| 4 | 0.003 | Near-zero water use (e.g. Scaleway adiabatic cooling: measured WUE 0.00002–0.00009 L/kWh) |
| 3 | 0.12 | Good — AWS 2023 published WUE 0.12 L/kWh; Azure similar |
| 2 | 0.50 | Average site WUE across US data centres (LBNL 2024: 0.36 L/kWh through 2023, rising to 0.45–0.48) |
| 1 | 2.30 | Poor — first-generation water cooling, at **Microsoft's own published figure for it** (24 Jun 2026; Microsoft has since reduced its fleet average to 0.27) |
| 0 | 2.30 | Not disclosed. **A deliberate penalty, not an average** — set equal to the worst published figure, so that disclosing nothing can never score better than disclosing the worst |
| No host | 2.30 | Moved with band 0 on 13 August 2026, closing the last inversion: a stack with no host selected can no longer read better on water than one whose host disclosed poor cooling |

> **Restated in version 1.6.** Band 1's 1.50 had no source, and it was **lower** than the 1.80
> then used for non-disclosure — so the inversion version 1.5 fixed at the bottom of the band
> had simply moved one rung up: a host admitting to poor cooling scored better than a host
> saying nothing. Both bands now return **2.30 L/kWh**, the only published figure for
> first-generation water cooling: [Microsoft's own](https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/),
> 24 June 2026, from which its average has since fallen to 0.27 L/kWh.
> **Water figures rise 53% for a host scoring 1 and 28% for a host scoring 0.**
>
> **Why band 0 is a penalty and not an average.** Band 0 has a job no measured average can do:
> it must not make non-disclosure the cheapest option. The best current empirical figure —
> LBNL's own 2024 site-WUE average of **0.36 L/kWh** — would put non-disclosure *below* bands 2
> and 1, rewarding a host for publishing nothing. So band 0 is set deliberately at the worst
> published figure and declared as a penalty. It is not an estimate of what an undisclosed
> host's WUE actually is, and it must not be read as one.
>
> **Fixed 13 Aug 2026:** the "no host" default moved with band 0 and now returns 2.30. The tool's fallback where no
> host is selected was not moved with band 0, so a stack with no host now reports *less* water
> than a stack with a host that discloses nothing — the same shape of inversion this change
> removes one row above it. Recorded here rather than quietly carried; moving it would move
> published figures again and needs its own decision.
>
> **A citation trap worth recording.** 1.8 L/kWh is widely repeated, and is usually attributed
> to the Green Grid's 2011 White Paper #35. That attribution is wrong: the Green Grid figure is
> a *source-based* grid-water intensity (EWIF) — water consumed generating the electricity —
> which is a different metric that coincidentally shares the same number. The correct source for
> a **direct/site** WUE average is LBNL's own work — Shehabi et al. 2016 for the 1.8 this table
> used until version 1.6, and the same authors' 2024 report for the 0.36–0.48 range behind
> band 2. The bands in this table are site WUE figures, so LBNL is the family of citations that
> fits and the Green Grid's EWIF is not.

### How the effective WUE is actually resolved

The table above is the **fallback**, not the whole rule. In the tool the resolution runs in this
order, and the first hit wins:

1. **The host's own published WUE**, where it carries one (`rawMetrics.wue`). This overrides the
   band entirely, whatever the criterion 2 score.
2. **The band value for the host's criterion 2 score**, from the table above.
3. **2.30 L/kWh** where no host is selected, or where the score is missing — moved with band 0 on 13 Aug 2026, so choosing no host cannot score better than choosing a host that discloses nothing.

**Only four entries in the whole toolsuite publish a WUE** — OVHcloud, Scaleway, AWS and Azure.
For every other host the band governs, so the derivation of those five numbers is doing most of
the work in every water figure this calculator has ever produced.

### Where the five band values come from

Recorded because it had never been written down, and because two of the five turned out to rest
on nothing citable. Both of those two — bands 1 and 0 — were restated in version 1.6, which is
what the bottom two rows now describe:

| Band | Value | Provenance | Independent? |
|---|---|---|---|
| 4 | 0.003 | **Sourced 13 August 2026; value unchanged on the evidence.** LBNL's *2024 United States Data Center Energy Usage Report* (the same source as band 2) puts site WUE "near zero" for **air-cooled** systems — and the only host that consults this band, Hetzner, is exactly that: a direct-free-cooling, air-cooled operator with no published WUE. Scaleway's published adiabatic measurements (PAR-DC3 0.00009, PAR-DC4 0.00002 L/kWh) corroborate the order of magnitude. **The apparent 60× conflict with OVHcloud's Apave-audited 0.17–0.20 is a definitional mismatch, not a miscalibration**: that figure is a water-cooling-loop reference metric (WUE_REF) of a water-cooled design, not a site WUE of an air-cooled one — and OVHcloud publishes, so the band never binds it. A recalibration to the audited range was considered and rejected on this evidence: it would have raised Hetzner-hosted stacks' water figures ~50× against LBNL's near-zero for their actual cooling type | LBNL peer-reviewed for the air-cooled basis; the specific 0.003 remains a judgement within LBNL's "near zero" |
| 3 | 0.12 | AWS's published WUE (2023 report; the 2025 report repeats 0.12 after a stated 20% improvement, implying ≈0.15 for 2024). "Azure similar" | **No** — self-reported |
| 2 | 0.50 | **Sourced 13 Aug 2026.** Shehabi, Smith, Hubbard et al., *2024 United States Data Center Energy Usage Report*, LBNL-2001637, DOI 10.71468/P1WC7Q, 20 Dec 2024: annual average **site** WUE across all US data centres "stays just over **0.36 L/kWh** through 2023… After 2023, the average WUE rises slightly, reaching between **0.45 and 0.48 L/kWh**" (p.48, from over a million simulations across 965 weather stations). 0.50 sits just above the 2028 projection. **The old rationale — "midpoint of a 0.3–0.8 range" — was not what any source says and is withdrawn.** | Peer-reviewed national laboratory |
| 1 | 2.30 | **Restated 13 Aug 2026 (v1.6).** Was 1.50, for which no citable source exists — and which was *below* the 1.80 then used for non-disclosure, so the band inverted at the bottom exactly as it had one rung lower before v1.5. The value is now [Microsoft's published first-generation figure](https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/), **2.3 L/kWh** (24 Jun 2026), the only published figure for the poor end of the range; Microsoft's average has since fallen to 0.27, which is what makes 2.3 the historic worst case rather than a current one | Self-reported, but published and specific |
| 0 / no host | 2.30 (both) | **Restated 13 Aug 2026 (v1.6): a deliberate penalty, not an average.** Was 1.80, cited to Shehabi et al. 2016 — real, but a modelling assumption ("is estimated at"), footnoted to trade and newspaper pieces, and superseded by the same authors at 0.36. No empirical average can hold this band: at 0.36, non-disclosure would score better than bands 1 and 2 and the model would reward silence. Band 0 is therefore set equal to the worst published figure, and **the no-host fallback moved with it the same day** — an earlier draft of this table left it at 1.80, reproducing one row down the exact inversion this restatement exists to close | Not applicable — a policy value, declared as one |

**The band is monotonic and defensible in shape; it is not calibrated in magnitude.** The
sharpest test available in our own data says so. OVHcloud's water-cooling-loop WUE_REF is
**0.17–0.20 L/kWh, Apave-audited** (attestation C23061463M0004, validated 18 October 2023) — the
only independently audited WUE anywhere in the suite. OVHcloud scores **4** on criterion 2, and
band 4 returns **0.003**, roughly sixty times lower than the audited measurement. Scaleway also
scores 4, measuring 0.00002–0.00009. So the two audited providers in the same band sit three to
four orders of magnitude apart.

That is not an error in either score. **Criterion 2 scores disclosure and cooling design, not
litres**, so a score is not a proxy for WUE and should never be read as one. Today the
discrepancy is masked for both providers, because each carries a published figure that overrides
the band. The exposure is a host that scores 4 and publishes nothing — today that is **Hetzner
alone**, and that exposure was resolved on the evidence rather than by moving the value:
Hetzner is an air-cooled direct-free-cooling operator, and LBNL 2024 puts
site WUE "near zero" for air-cooled systems, so 0.003 is the right order for the one host the
band binds. The OVHcloud comparison is a definitional mismatch (loop WUE_REF versus site WUE),
recorded in the band 4 row above. The same logic applies at band 3,
where AWS's self-reported figure stands in for every undisclosed host in the class.

**Two findings from the 13 August sourcing pass that a reader needs, and that this table cannot absorb.**

First, **the denominator is unsettled**. LBNL's "site WUE" is denominated on *total facility* electricity, not on IT load: their own totals (66 bn litres against 176 TWh) give 0.375, while the same data on the Green Grid's IT-load definition give **≈0.52 L/kWh**. Both bracket the 0.50 this table uses, which is reassuring, but the two definitions are not interchangeable and this document has never said which one it means.

Second, and more serious: **band 0's 1.80 was weaker than it looked**, which is why version 1.6 moved it. Shehabi et al. 2016 says on-site water consumption "**is estimated at** 1.8 litres per kWh of **total data centre site energy use**" — a modelling assumption whose own footnotes are a 2009 trade article and a 2015 newspaper piece, not a measurement, and again denominated on total site energy. **LBNL's own successor report supersedes it at 0.36.** The citation is real and was fetched; what it supports is thinner than "peer-reviewed source" suggests. Recorded here rather than quietly carried: the whole point of documenting these bands was that nobody could otherwise tell where the numbers came from.

The Green Grid trap was confirmed exactly as this document warned: White Paper #35's 1.8 is an **EWIF**, a source-side grid-water intensity, and the trade-press "industry average 1.8 L/kWh" traces back to a secondary citation rather than a study.

**Recording it was not enough, and version 1.6 acted on it.** Moving a band moves published water
figures, so it took a decision and a restatement, exactly as C1's correction did — it was never a
documentation edit, and it is written up as a restatement below. What the reader needs to know
about the uncertainty that remains: at the top of the scale the bands are **optimistic against
the only audited comparator we have**, bands 4 and 3 each rest on a single company's figure
generalised to a whole class, and the two bands at the bottom are now anchored to a published
worst case chosen as a **policy floor** rather than measured across the population they stand for.

```
dc_energy_per_page_kWh  = (page_weight_MB / 1000) × 0.055

water_per_page_L        = dc_energy_per_page_kWh × WUE

water_monthly_L         = water_per_page_L × monthly_impressions
```

#### Worked example — Hetzner hosting, 2 MB page, 10,000 visitors/month

- C2 score 3 → WUE = 0.12 L/kWh  
- DC energy per page: (2 / 1000) × 0.055 = 0.000110 kWh  
- Water per page: 0.000110 × 0.12 = 0.0000132 L (0.013 mL)  
- Monthly water: 0.0000132 × 10,000 = **0.13 L**

**Important limitation:** the water figure covers data centre consumption only. It excludes network infrastructure water use and the water embedded in device manufacture and electricity generation (hydroelectric and thermoelectric power generation are significant water consumers but are not quantified here due to absence of reliable per-stack data). The true water footprint of a website is likely 3–10× the figure shown.

---

## Baseline comparison

The "stack vs global average" bar compares the stack's estimated carbon per page impression against a **no-action baseline**: the same page weight delivered entirely at the world average carbon intensity (**459.03 g CO₂e/kWh** — Ember Yearly Electricity Data, "World" 2025, retrieved 9 Sep 2026) and no efficiency modification (multiplier = 1.0).

```
baseline_CO₂_per_page_g = energy_per_page_kWh × 459.03

savings_pct = round((1 − stack_CO₂_per_page_g / baseline_CO₂_per_page_g) × 100)
```

A positive figure means the stack emits less than the world average. A negative figure means it emits more (unusual unless efficiency scores are very low and the host uses a high-carbon grid).

The baseline is coherent by construction: a stack whose host *and* audience both sit at the world figure returns exactly the baseline, because all three terms then use the same intensity.

> **Savings figures fall substantially in version 1.5.** Embodied energy — 35% of the total —
> can no longer be discounted by choosing a clean host or serving a clean-grid audience, so the
> maximum achievable saving is much lower than earlier versions implied. A green host with a UK
> audience at 2 MB previously showed a 61% saving; it now shows 41%. See the restatement table
> below for the full set. This is a correction, not a penalty: the earlier figures credited
> hosting and audience choices with reducing emissions they cannot reduce.

---

## Restatement: what version 1.7 changed

Version 1.7 changes **carbon only**. No water figure, WUE band or energy constant moves, and the
efficiency multiplier is unchanged. The three grid constants were re-based together to a single
dated Ember retrieval, and the rating thresholds moved with the world figure as they must.

| constant | 1.6 | 1.7 | change |
|---|---|---|---|
| UK grid intensity | 217.33 | **222.18** | +2.23% |
| EU grid intensity | 209.64 | **210.13** | +0.23% |
| World grid intensity | 458.54 | **459.03** | +0.11% |
| `bandGood` threshold | 0.111 | **0.1115** | +0.45% |
| `globalAvgPage` threshold | 0.334 | **0.3345** | +0.15% |

**Why the UK moves most.** Its constant moved most, and unlike the world figure it does **not**
self-cancel: the rating thresholds are rescaled by the *world* intensity, not the UK one, so a
UK-audience figure rises while its threshold barely moves. This is the one that matters for a UK
audience, and it is the constant nobody had checked.

Per page impression at 2 MB with the efficiency multiplier at 1.0, so the arithmetic is legible:

| host band | audience | 1.6 | 1.7 | change |
|---|---|---|---|---|
| Green (band 4, 50) | 100% UK | 0.16313 g | 0.16458 g | +0.89% |
| Green (band 4, 50) | 100% EU | 0.16099 g | 0.16123 g | +0.15% |
| Green (band 4, 50) | 50% UK / 25% EU | 0.17936 g | 0.18020 g | +0.47% |
| Green (band 4, 50) | worldwide | 0.23018 g | 0.23042 g | +0.10% |
| Mid (band 2, 320) | 100% UK | 0.19283 g | 0.19428 g | +0.75% |
| Mid (band 2, 320) | worldwide | 0.25988 g | 0.26012 g | +0.09% |
| Undisclosed (band 0) | 100% UK | 0.20807 g | 0.20957 g | +0.72% |
| Undisclosed (band 0) | worldwide | 0.27512 g | 0.27542 g | +0.11% |

**No rating band changes in any tested configuration.** Both worked examples above keep their
rating: A stays "below global average" at 0.155 g (was 0.154 g), B stays "well below" at 0.073 g
(was 0.072 g).

**Figures published on version 1.6 or earlier understate carbon for any stack with a UK or EU
audience share, and must be restated.** A stack served entirely to a worldwide audience moves by a
tenth of a percent and is not worth restating on its own; a UK-audience stack moves by up to 0.9%.

### What this change does not fix

**The old vintage is still unknown, and that is the point of dating the new one.** The 1.6
constants match no single calendar year of Ember's current data — fitting all three gives an RMS
error of 1.27% against 2025 and 1.75% against 2024, with the outlier moving between them. Version
1.4 recorded the source and the release but never the retrieval date, and Ember revises history, so
the two cannot be told apart after the fact. **A dataset citation without a retrieval date is not
reproducible**, which is why 1.7 records one and why the constants must in future be re-based
together rather than one at a time.

**Ember will revise again.** These figures will drift from the published dataset the same way, and
that is expected rather than a defect. What matters is that the drift is now measurable: the
retrieval date says exactly which numbers were taken, so a future reader can reproduce the
difference instead of guessing at it.


## Restatement: what version 1.6 changed

Version 1.6 changes **water only**. No carbon figure, rating band, threshold or constant moves,
and the carbon cross-check is untouched. Every figure below is a 2 MB page at 10,000 monthly
impressions — the same basis as the water worked example above — computed from the shipped
calculator before and after the change. Water is not modified by the efficiency multiplier, so
these ratios hold at every page weight and impression count.

| Host band | WUE before (L/kWh) | WUE after (L/kWh) | Monthly water before (L) | After (L) | Change | Entries governed by the band |
|---|---|---|---|---|---|---|
| 4 | 0.003 | 0.003 | 0.033 | 0.033 | — | 1 |
| 3 | 0.12 | 0.12 | 0.132 | 0.132 | — | 31 |
| 2 | 0.50 | 0.50 | 0.55 | 0.55 | — | 1 |
| 1 | 1.50 | **2.30** | 1.65 | **2.53** | **+53%** | **2** |
| 0 | 1.80 | **2.30** | 1.98 | **2.53** | **+28%** | **4** |
| No host selected | 1.80 | **2.30** | 1.98 | **2.53** | **+28%** | — |

**Who is affected.** The calculator reads this band from the **selected host's** criterion 2
score — hosts are the 19 hosting-category entries, not all 92 (an earlier draft of this
paragraph counted every criterion 2 cell in the scorecard, including 46 that are not applicable,
and claimed 55 affected entries; that was the display-category-versus-applicability confusion
this project's own hazard list warns about). Of the 19 selectable hosts, **2 score 1 on
criterion 2 (water) — Linode and Cloudways — and 4 score 0 — DigitalOcean, Deno Deploy, Fly.io
and Fastly** — so any stack hosted on one of those six returns a higher water figure than it did
on version 1.5, as does any stack with **no host selected**. The **four hosts that publish their
own WUE** — OVHcloud, Scaleway, AWS and Azure — are **unaffected**, because a published figure
overrides the band before the band is ever consulted. Nothing at bands 4, 3 or 2 moves.

**Water figures published on version 1.5 or earlier understate water use for any host scoring 0
or 1, and must be restated.** A figure carried on a slide, in a report or in a client deliverable
should be multiplied by 1.53 (band 1) or 1.28 (band 0), or better, regenerated.

**Reading the pattern.** The largest movement is at band 1, not band 0, and that is the point of
the change. Band 1 was the anomaly: it had no source, and at 1.50 it sat below the 1.80 used for
non-disclosure, so the model paid a host to admit poor cooling rather than say nothing. That is
the identical inversion corrected at the very bottom of the band in version 1.5 — fixing it
there had left it alive one rung up. **A monotonic band is not the same
as a correctly ordered incentive**, and the second is what needs checking after any band moves.

**Band 0 is now a declared penalty.** It no longer claims to estimate what an undisclosed host's
WUE is. The only defensible empirical candidate — LBNL's 2024 average of 0.36 L/kWh — would have
placed non-disclosure below bands 2 *and* 1, making silence the cheapest option in the model. A
band whose job is to price the absence of information cannot be set from a measurement of the
hosts that do publish. It is set at the worst published figure, and this document says so rather
than dressing it as an average.

**One thing this change does not fix.** The denominator is still unsettled: LBNL's site WUE is
denominated on total facility electricity, while the Green Grid's definition uses IT load —
0.375 against ≈0.52 on LBNL's own totals. Every band in this table inherits that ambiguity, and
raising two of them does not resolve it.

---

## Restatement: what version 1.5 changed

Every figure below is a 2 MB page at efficiency multiplier 1.0, computed from the shipped
calculator before and after the change. "Before" is version 1.4, which applied the host's grid
intensity to embodied data-centre energy and the audience-weighted intensity to embodied network
and device energy. "After" is version 1.5, which applies the world figure to all embodied energy.

| Audience | Host | Before (g) | After (g) | Change | Rating |
|---|---|---|---|---|---|
| UK | Green host, band 4 | 0.1080 | 0.1631 | +51.1% | **well below → below** |
| UK | Band 3 | 0.1247 | 0.1769 | +41.8% | below (unchanged) |
| UK | Mid host, band 2 | 0.1442 | 0.1928 | +33.8% | below (unchanged) |
| UK | Band 1 | 0.1605 | 0.2062 | +28.5% | below (unchanged) |
| UK | Undisclosed, band 0 | 0.1627 | 0.2081 | +27.9% | below (unchanged) |
| EU | Green host, band 4 | 0.1044 | 0.1610 | +54.2% | **well below → below** |
| EU | Band 3 | 0.1211 | 0.1747 | +44.2% | below (unchanged) |
| EU | Mid host, band 2 | 0.1406 | 0.1907 | +35.7% | below (unchanged) |
| EU | Band 1 | 0.1569 | 0.2041 | +30.1% | below (unchanged) |
| EU | Undisclosed, band 0 | 0.1591 | 0.2059 | +29.4% | below (unchanged) |
| World | Green host, band 4 | 0.2204 | 0.2302 | +4.4% | below (unchanged) |
| World | Band 3 | 0.2371 | 0.2439 | +2.9% | below (unchanged) |
| World | Mid host, band 2 | 0.2566 | 0.2599 | +1.3% | below (unchanged) |
| World | Band 1 | 0.2729 | 0.2733 | +0.1% | below (unchanged) |
| World | Undisclosed, band 0 | 0.2751 | 0.2751 | 0.0% | below (unchanged) |

**Reading the pattern.** The change is largest where the gap between the local grid and the
world average is largest — a green host serving a UK or EU audience — and vanishes entirely for
an undisclosed host serving a worldwide audience, where every intensity was already the world
figure. That is the signature of the defect: it only ever mattered when someone had made a
low-carbon choice, and it credited that choice with reducing emissions it could not reduce.

**Savings against the world-average baseline**, which is the figure the tool displays most
prominently:

| Audience | Host | Before | After |
|---|---|---|---|
| UK | Green host, band 4 | 61% | 41% |
| UK | Mid host, band 2 | 48% | 30% |
| UK | Undisclosed, band 0 | 41% | 24% |
| EU | Green host, band 4 | 62% | 41% |
| EU | Mid host, band 2 | 49% | 31% |
| World | Green host, band 4 | 20% | 16% |
| World | Mid host, band 2 | 7% | 6% |

**One rating band moves.** A green host with a UK or EU audience at 2 MB is no longer "well
below global average". The page weight at which that configuration still earns the top band
falls from roughly 2.06 MB to roughly 1.36 MB.

**How this was found and how it is now prevented.** The defect was identified by building a
cross-check against the Green Web Foundation's own co2.js implementation of the same model,
comparing all six operational and embodied components separately rather than only the totals.
Operational components already agreed to within floating-point rounding; every embodied
component disagreed. That check — `carbon_crosscheck.cjs` — now runs on every release against a
pinned co2.js version, and a divergence fails the build. The comparison is made twice: once
against SWD's published 494 g/kWh default, to test the arithmetic, and once against this
document's rescaled constants, to test the rescaling.

---

## Rating thresholds

| CO₂ per page impression | Rating | Colour |
|---|---|---|
| < 0.1115 g | Well below global average | Green |
| 0.1115 – 0.3345 g | Below global average | Amber |
| > 0.3345 g | Above global average | Red |

These bands are rebased to version 4 of the model, then **rescaled**. SWD v4 publishes them as **0.12 g and 0.36 g**, where 0.36 g is the global average page under v4 and also the pass/fail line in the Sustainable Web Design Digital Carbon Ratings system. But those published bands were calibrated against a world grid intensity of **494 g CO₂e/kWh**, and this calculator uses Ember's world figure of **459.03**. Keeping the published thresholds against a lower world intensity would have flattered every site by roughly 7% without anything actually improving, so both bands are rescaled by 459.03 / 494 = 0.9292, giving **0.1115 g and 0.3345 g**. They are carried to four decimal places from v1.7: the exact values are 0.111505 and 0.334516, which sit almost exactly on a three-decimal rounding boundary, and rounding there would turn a 0.11% change in the world figure into a 0.9% change in the threshold.

This is a deliberate, documented divergence from SWD's own Digital Carbon Ratings thresholds, and the tool states it in its own methodology output. It also means a figure from this calculator is *not* directly comparable to a Digital Carbon Rating band without applying the same rescaling.

> Versions 1.4 and earlier of this document printed 0.12 / 0.36 in this table while the tool
> applied the rescaled bands (0.111 / 0.334 at the time; 0.1115 / 0.3345 since v1.7) — the
> rescaling was described in the 1.4 changelog but this section was
> never updated to match. Corrected in 1.5. The tool's behaviour did not change; only this
> table was wrong. The previous v3-era bands (0.3 g and 0.8 g) would have marked almost every
> stack green once the energy constant was corrected.

---

## Equivalences

Two contextual equivalences are shown where the monthly figure is meaningful:

**Driving distance**  
UK average car fleet emissions: 150 g CO₂e/km (Department for Transport, 2023 average across petrol, diesel and hybrid).

```
car_km = round(CO₂_monthly_kg × 1000 / 150)  # where CO₂_monthly_kg uses monthly_impressions
```

**Tree absorption**  
A mature broadleaved tree absorbs approximately 21 kg CO₂ per year (Woodland Trust estimate), equivalent to 1.75 kg per month.

```
tree_months = CO₂_monthly_kg / (21 / 12)
```

This figure is shown only when below 500 (above that threshold it becomes misleading without additional context about reforestation rates and timescales).

---

## CDN content and blended carbon intensity

When third-party CDN services are present in the stack, the calculator automatically splits the estimated page weight between the primary host and the CDN services, computes a weighted average carbon intensity, and applies it to the whole page.

### How the split works

Each CDN service in the scorecard carries a `typical_kb` payload estimate and, where known, a carbon intensity figure:

| Service | Typical payload | CI used (g CO₂e/kWh) | Basis |
|---|---|---|---|
| Google Analytics | 17 KB | 50 | Google published infrastructure CI |
| Google Maps | 325 KB | 50 | Google published infrastructure CI |
| Mapbox | 500 KB | 350 | No disclosure — precautionary |
| Cloudinary | 400 KB | 350 | No disclosure — precautionary |
| Algolia | 40 KB | 350 | No disclosure — precautionary |
| Intercom | 60 KB | 350 | No disclosure — precautionary |
| HubSpot | 60 KB | 350 | No disclosure — precautionary |
| Sentry | 30 KB | 350 | No disclosure — precautionary |
| Datadog | 25 KB | 350 | No disclosure — precautionary |
| New Relic | 25 KB | 350 | No disclosure — precautionary |
| Ably | 50 KB | 350 | No disclosure — precautionary |

The 350 g CO₂e/kWh figure for undisclosed services is a precautionary estimate above the global average (494 g is used for completely unknown providers; 350 reflects that these services likely run on commercial cloud infrastructure with partial renewable coverage, even without disclosing it).

**Blended CI formula:**
```
cdnFrac        = sum(typical_kb for CDN services) / (page_weight_MB × 1000)   [capped at 0.85]
cdnCIavg       = weighted average CI of CDN services by payload size
blendedCI      = (1 − cdnFrac) × hostCI  +  cdnFrac × cdnCIavg
CO₂_per_imp_g  = energy_per_impression_kWh × blendedCI × efficiency_multiplier
```

The CDN fraction is capped at 85% to prevent a degenerate result where the host contributes nothing.

### User override (C fallback)

A slider in the calculator lets you manually set the CDN fraction when you have measured the actual split from browser DevTools. The auto-estimated fraction is shown as the default. Set the slider to your measured value to get a more accurate blended CI for your specific pages.

**Practical note:** Mapbox tile weight varies significantly by map complexity and zoom level. A simple static map might serve 150 KB; an interactive data visualisation might load 2 MB of tiles. The 500 KB default is a reasonable median but worth overriding if maps are a major part of your application.

### Direction of error

Without CDN splitting (original model):
- A Mapbox-heavy page on DigitalOcean (CI 320) where 40% of bytes are Mapbox tiles (CI 350) would be very slightly overestimated — the two CIs are close. The main case where this matters is when the host is significantly greener or dirtier than the CDN.
- A Google-heavy stack (Maps + Analytics) on a high-carbon host benefits from the split: Google's CI 50 significantly reduces the blended figure.

---

## Embodied carbon

The SWD v4 figure of 0.30 kWh/GB includes **0.106 kWh/GB of embodied energy**, distributed across all three segments: data centres (0.012), networks (0.013) and user devices (0.081). Device manufacture is therefore included and so — unlike under version 3 — is a share of data-centre and network hardware. This addresses a common concern that lifecycle emissions are excluded.

**Embodied energy always takes the world grid intensity.** It represents hardware manufacture, which occurs across a worldwide supply chain over years, not electricity drawn on the host's grid during a page view. Choosing a green host does not change where the servers were built, and serving a UK audience does not change where their phones were assembled. SWD states explicitly that this figure must not be varied per host, and co2.js implements it that way — `embodiedEmissions()` accepts no grid-intensity argument at all.

This has a consequence worth stating plainly: **embodied energy is 35% of the total and is entirely outside the deployer's control** through hosting or audience choices. At a UK audience it is typically the single largest term in the result. The only lever against it is transferring fewer bytes.

What remains coarse is that these embodied figures are global averages per gigabyte rather than anything specific to the stack in question. Quantifying them per-stack is not currently feasible with available public data — no provider publishes per-kWh infrastructure embodied carbon. This is a documented limitation rather than a correctable one at this time.

---

## Stack score methodology

The environmental impact calculator uses scores from the full technology stack, not just the hosting provider. Two aspects of the stack scoring are relevant to the calculator.

### Equal criterion weights

All 13 criteria are weighted equally within each pillar. The pillar weights (Environmental 40%, Social 30%, Ethics 30%) remain, but within each pillar no individual criterion is amplified. This replaced an earlier system that applied integer multipliers (1–3) to individual criteria. The change produces more consistent scores and matches the approach used in the companion hosting provider scorecard.

### Inherited criteria substitution

Open-source frameworks, databases and CMSs have no environmental infrastructure of their own. Their carbon (c1), water (c2), repairability (c4), conflict minerals (c5) and community (c6) criteria are marked as "inherited" — they depend entirely on the chosen hosting provider.

When computing a stack score, the calculator substitutes the hosting provider's score for each inherited criterion rather than counting inherited zeros.

**Why this matters for the environmental impact calculator:**

The efficiency multiplier (step 2 of the carbon calculation) is derived from average c3 scores across the stack. C3 is not an inherited criterion — frameworks have genuine efficiency characteristics — so this substitution does not affect the multiplier.

However, the pillar sub-scores shown in the stack summary (and the radar chart) do benefit from the correction. Without it, a stack of React + Hetzner would show a near-zero Environmental pillar score because React's inherited c1/c2/c4/c5/c6 zeros would dilute Hetzner's strong environmental scores. With substitution, the Environmental pillar correctly reflects Hetzner's credentials, which React inherits.

If no hosting provider is in the stack, inherited criteria are excluded from the calculation entirely rather than counted as zero. The environmental pillar then reflects only the criteria the software directly controls (c3 efficiency and c13 per-unit efficiency).

---

## Limitations

This calculator produces **indicative estimates**, not audited measurements. The following limitations apply:

**What the model does not capture:**

- Third-party CDN assets — scripts, tiles and images served directly to browsers from services like Mapbox, Google Maps, Cloudinary, Intercom etc. (see CDN content section above)
- Embodied carbon in data centre buildings and networking hardware (user-device manufacture is included in the SWD v4 figure; see Embodied carbon section above)
- Carbon from video or streaming (higher data rates than page loads)
- API calls and background data transfer not reflected in page weight
- Water consumed at power stations to generate the electricity used
- The environmental cost of software development itself

**Sources of uncertainty:**

- The SWD model's 0.30 kWh/GB figure is a global average. Real values vary by geography, device mix and network type. Mobile networks, for example, use 3–4× more energy per GB than fixed-line connections.
- Carbon intensity figures for each score band are approximations. A score-3 provider achieving 100% renewable energy by market-based certificates may have a real-time grid carbon intensity considerably higher than 175 g CO₂e/kWh in periods of low renewable generation.
- The efficiency multiplier applies a single modifier to the entire system energy, including embodied energy. In practice a stack's C3 score can only plausibly affect operational data-centre energy (0.055 of 0.30 kWh/GB, about 18%); it has no bearing on the manufacture of devices and network hardware, nor on the energy a visitor's device draws. This is the last remaining place where a stack-level modifier is applied more broadly than it can be justified, and it is a known overstatement of the efficiency lever in both directions.
- The audience model has three buckets — UK, EU and rest-of-world at the world average. A site whose visitors are concentrated in a single high- or low-carbon country outside the UK and EU is estimated against the world figure rather than that country's. Moving to country-level intensities is a recorded future change, not a defect in the current model.
- Page weight is a coarse proxy. A 2 MB page with a large image and no JavaScript uses energy differently to a 2 MB single-page application with client-side rendering.
- Returning visitors and caching are not accounted for. Cached resources reduce real data transfer significantly on subsequent visits.

**What this calculator is good for:**

- Understanding the order of magnitude of a website's carbon footprint
- Comparing the effect of choosing different hosting providers
- Showing clients why hosting choice matters as much as code efficiency
- Identifying stacks where the environmental footprint is surprisingly high

---

## Model inputs summary

| Variable | Value | Source | Date |
|---|---|---|---|
| System energy intensity | 0.30 kWh/GB (0.194 operational + 0.106 embodied) | Sustainable Web Design Model v4, `sustainablewebdesign.org/estimating-digital-emissions/` | **The page carries no publication date.** Model version 4 identifies it. Transcribed 29 July 2026; re-verified 13 August 2026 |
| Operational segment split | Data centre 0.055, network 0.059, device 0.080 kWh/GB | Sustainable Web Design Model v4 | As above |
| Embodied segment split | Data centre 0.012, network 0.013, device 0.081 kWh/GB | Sustainable Web Design Model v4 | As above |
| Grid intensity — world | 459.03 g CO₂e/kWh. Used as the baseline CI, the embodied grid intensity and carbon band 0 | Ember, *Yearly Electricity Data*, "Total generation", "World" 2025 | **Retrieved 9 September 2026** |
| Grid intensity — UK and EU | UK 222.18, EU 210.13 g CO₂e/kWh | Ember, *Yearly Electricity Data*, "Total generation", United Kingdom and EU 2025 | **Retrieved 9 September 2026**, the same pull as the world figure |
| Carbon fallback bands | 50 / 175 / 320 / 442 / 459.03 g CO₂e/kWh by criterion 1 score | Bands 4 and 3 calibrated to published provider figures in section 5.1. Band 0 is Ember's world figure. **Bands 2 and 1 are judgement values with no citable source** — the derivation is reconstructed under Step 1, not recorded | Reconstruction recorded 13 August 2026 (v1.6). Values unchanged since v1.0 |
| Water fallback bands (WUE) | 0.003 / 0.12 / 0.5 / 2.3 / 2.3 L/kWh by criterion 2 score; 2.3 where no host is selected | Band 4 and band 2 from LBNL-2001637; band 3 from AWS's published WUE; bands 1 and 0 from Microsoft's published first-generation figure. Band 0 is **a declared policy value, not an average** | Bands 4 and 2 sourced 13 August 2026. Bands 1 and 0 restated 13 August 2026 (v1.6) from a Microsoft page of 24 June 2026 |
| Rating bands | 0.1115 g and 0.3345 g per page view | SWD v4's published 0.12 and 0.36, rescaled by `globalCI / 494`. A declared deviation from SWD's Digital Carbon Ratings | Rescaling introduced v1.4, July 2026. Values moved to four decimal places 9 September 2026 (v1.7). Enforced by E16 |
| Rating-band rescale base | 494 g CO₂e/kWh | The world intensity SWD v4 calibrated its published bands against | Fixed by SWD v4. Not a figure this project chooses |
| Efficiency multiplier | 0.75 / 0.87 / 1.00 / 1.18 / 1.35 by average criterion 3 score | **A judgement mapping from a qualitative score to a multiplier. No citable source.** It is declared as one rather than given a fabricated citation | Present since v1.0. Unchanged |
| CDN payload and intensity estimates | Per service `typical_kb` and `ci`; see the CDN split section for the per-service basis | Published provider infrastructure figures where a provider discloses one; typical payload estimates otherwise | Introduced v1.2, June 2026 |
| Car emissions | 150 g CO₂e/km | Department for Transport, vehicle emissions statistics, fleet average | 2023 |
| Tree absorption | 21 kg CO₂/year | Woodland Trust estimate for a mature broadleaved tree | **No date established from the source.** Stated rather than guessed |

**Framework v4 requirement 4 asks for a source and a date against every constant.** Both are given
above. Where a constant is a judgement value, that is declared rather than dressed in a citation.
Where a date cannot be established from the source, that is said. **E17 enforces this table**: it
fails the release check if a governed constant has no row, or if a row's source or date cell is
empty.

---

## References

- Sustainable Web Design Model v4 — [sustainablewebdesign.org/estimating-digital-emissions](https://sustainablewebdesign.org/estimating-digital-emissions/)
- IEA Global CO₂ Emissions from Electricity (2022) — [iea.org](https://www.iea.org/data-and-statistics/charts/global-co2-emissions-from-electricity-2022)
- Ember — *Yearly Electricity Data*: grid emissions intensity by country and for the world, revised annually. The source for the 459.03 g CO₂e/kWh world average used as the baseline CI, the embodied-energy grid intensity and carbon band 0 — [ember-energy.org](https://ember-energy.org/data/yearly-electricity-data/)
- Green Software Foundation Software Carbon Intensity (SCI, ISO/IEC 21031:2024) — [greensoftware.foundation](https://greensoftware.foundation/projects/software-carbon-intensity)
- AWS Water Stewardship Report (2023) — [sustainability.aboutamazon.com](https://sustainability.aboutamazon.com)
- Shehabi, A., Smith, S. J., Hubbard, A. et al. (2024). *2024 United States Data Center Energy Usage Report*, LBNL-2001637, 20 December 2024 — the source for band 2's 0.50 L/kWh (annual average site WUE, p.48) and band 4's air-cooled "near zero" — [escholarship.org](https://escholarship.org/uc/item/32d6m0d1) ([DOI 10.71468/P1WC7Q](https://doi.org/10.71468/P1WC7Q))
- Microsoft — *Inside Microsoft's two-decade push to cut water intensity while scaling for growth* (24 June 2026), the source for the 2.3 L/kWh first-generation figure at bands 1 and 0 — [blogs.microsoft.com](https://blogs.microsoft.com/blog/2026/06/24/inside-microsofts-two-decade-push-to-cut-water-intensity-while-scaling-for-growth/)
- Scaleway Environmental Metrics (2024 Impact Report) — [scaleway.com](https://www.scaleway.com/en/environmental-leadership/)
- Department for Transport — Vehicle Emissions Statistics (2023) — [gov.uk/government/collections/vehicle-licensing-statistics](https://www.gov.uk/government/collections/vehicle-licensing-statistics)
- Woodland Trust — Carbon capture by trees — [woodlandtrust.org.uk](https://www.woodlandtrust.org.uk)

---

*© Hive IT 2026. Text and methodology licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); accompanying code under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0). Built by Hive IT as part of the Online Ecosystem Ethics Framework (OEEF) v3.2.*
