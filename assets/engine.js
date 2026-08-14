/* OEEF engine core — the canonical scoring functions, shared by all four
   scorecards (ruling 149, 14 Aug 2026; canonical text from build_engine.py,
   Stage 2). Each page calls OEEF_ENGINE with its own closure-bound
   accessors and destructures the three functions back. Change scoring
   behaviour HERE (via build_assets.py, which owns this text) — hand-editing
   one page's copy is exactly how the four copies drifted apart before.
   Apache License 2.0. (c) Hive IT 2026. */
window.OEEF_ENGINE = function(d){
function effective(prov,c){
  const cell=d.getCell(prov,c.id);
  const inherited=d.isInheritedFor(prov,c.id);
  const na=inherited||d.isNA(cell)||d.isNotApplicable(prov,c.id);
  return {raw:cell.s, eff:cell.s, na:na, conf:cell.conf, note:cell.note, refs:cell.refs};
}
function pillarScore(prov,pill){ // arithmetic mean (0..4) within pillar; NA excluded; null if none
  const cs=d.CRITS.filter(c=>c.pillar===pill);
  let s=0,n=0; cs.forEach(c=>{const e=effective(prov,c); if(e.na) return; s+=e.raw; n++;});
  return n? s/n : null;
}
function geoOverall(prov,weights){
  const parts=[];
  ["env","social","gov"].forEach(pk=>{
    const w=weights[pk]; if(w<=0) return;
    const ps=pillarScore(prov,pk); if(ps===null) return;
    parts.push({ps,w});
  });
  if(!parts.length) return {val:0,floored:false};
  const sumW=parts.reduce((a,b)=>a+b.w,0);
  let logsum=0,floored=false;
  parts.forEach(({ps,w})=>{let v=ps; if(v<=0){v=d.GEO_FLOOR; floored=true;} logsum+=w*Math.log(v);});
  return {val:Math.exp(logsum/sumW), floored};
}
return {effective:effective, pillarScore:pillarScore, geoOverall:geoOverall};
};
