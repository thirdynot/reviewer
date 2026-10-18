/* Each question: [topic, question, [correct answer, wrong, wrong, wrong], explanation]
   The options are shuffled every round and labelled A–D automatically. */
const DATA = [
 ["Formulation basics","Which statement best describes product formulation?",["A data-driven process of choosing ingredients, levels and processing conditions to reach target qualities","A list of cooking steps for one product","A plan for advertising a new food","A safety audit done after production"],"A recipe only says how to make one product. Formulation decides the amounts and conditions that give target qualities and then verifies them (Slides 2–3)."],
 ["Formulation basics","Which of these is NOT one of the five challenges every formulator faces?",["Brand advertising","Safety","Product cost","Environmental footprint"],"The five challenges are safety, sensory appeal, cost, consumer acceptance and environmental footprint (Slides 8–12)."],
 ["Formulation basics","Why is optimization needed in formulation?",["Because the goals (cost, safety, taste, sustainability) often clash","Because recipes are always wrong","Because regulations forbid changing ingredients","Because consumers only care about price"],"Improving one goal often hurts another, so a method is needed to find the best trade-off, not just intuition (Slides 13–14)."],
 ["Formulation basics","In the sausage example, what helps reduced-fat sausages keep water and stay juicy?",["Adding milk proteins and hydrocolloids such as carrageenan","Cooking them longer","Adding more water only","Removing all protein"],"Removing fat weakens the protein matrix, so ingredients like milk proteins and carrageenan are added to restore water binding. One ingredient alone will not do it (Slide 16)."],
 ["Safety","Which condition lets microbes grow most easily?",["High water activity and near-neutral pH","Low water activity and low pH","Low water activity and high salt","Frozen storage"],"High water activity and near-neutral pH favour microbial growth. Lowering aw or pH slows it (Slide 18)."],
 ["Safety","Preservatives in formulation must be:",["Approved types used within legal limits","Used in any amount that keeps the food longer","Avoided completely","Added only after packaging"],"Slide 19: use approved preservatives within legal limits for safety and quality."],
 ["Safety","Phytates in plant ingredients are mainly a concern because they:",["Can reduce absorption of minerals such as iron, zinc and calcium","Increase water activity","Cause fat oxidation","Make food too sweet"],"Phytates are antinutrients that can bind minerals and reduce absorption (Slides 21, 187)."],
 ["Safety","Which is a way to lower antinutrients in raw plant materials?",["Soaking, germination or heat treatment","Adding more salt","Freezing only","Increasing batch size"],"Slide 187: treat ingredients (soaking, germination, heat) and use processing such as cooking, extrusion or fermentation."],
 ["Safety","How is microbial stability over shelf life validated?",["Test for relevant microbes while storing under intended conditions, e.g., at 4, 8 and 12 weeks","Taste the product once","Test only on the first day","Rely on the ingredient list"],"Slide 188: test relevant microorganisms, store under intended conditions and confirm stability across the whole shelf life."],
 ["Nutrition","Reformulation to support healthy blood pressure mainly involves:",["Reducing added salt","Adding more sugar","Adding more saturated fat","Removing all fibre"],"Slide 25: reduce added sugar for better health, added fat for lower calories and heart health, and added salt for healthy blood pressure."],
 ["Nutrition","A product that “fortifies” rather than “fills”:",["Provides protein, fibre or essential micronutrients and improves nutrient density","Mainly adds energy with few nutrients","Is always low in cost","Has no sensory appeal"],"Slide 190: fortify = nutrient-dense; fill = high in energy (sugar, refined carbohydrate or fat) with few essential nutrients."],
 ["Sustainability","Turning apple peels into apple peel fibre is an example of:",["By-product utilization","Plant-forward replacement","Preservative use","Mixture design"],"Slides 27–28: by-product utilization turns processing waste into ingredients, giving less food waste and more nutritional value."],
 ["Sustainability","Replacing a beef patty with a plant-based patty is an example of:",["Plant-forward ingredients","Fewer inputs","By-product utilization","Fortification"],"Slide 29: plant-forward means replacing animal-derived components, lowering environmental impact and giving alternative protein sources."],
 ["Consumers","Food neophobia is best defined as:",["Fear or reluctance to try new foods","Dislike of salty foods","A food allergy","Preference for expensive foods"],"Slide 32 defines food neophobia as fear or reluctance to try new foods. Unfamiliarity and poor knowledge contribute."],
 ["Consumers","Which is described as one of the most efficient means to reduce food neophobia?",["Tasting the food","Raising the price","Using longer ingredient names","Hiding the ingredients"],"Siddiqui et al. (2022): tasting is among the most efficient ways. Education, income, taste, exposure and traceability also help (Slide 37)."],
 ["Consumers","According to Hoehnel et al. (2022), which factors rank above health and sustainability in food choice?",["Affordability, availability and tastiness","Brand and packaging","Calories and protein","Origin and colour"],"Slide 36: affordability, availability and tastiness still rank above health and sustainability."],
 ["Consumers","Which barriers to plant-based meat alternatives were listed by Jahn et al. (2021)?",["Food neophobia, social norms and rituals, and conflicting eating goals","Price, colour and smell only","Fat content and fibre","Packaging and advertising"],"Slide 39 lists these three motivational barriers."],
 ["Consumers","A plant-based burger is well accepted in a university canteen but rejected at a family gathering. What does this show?",["Acceptance depends on context, not only on the formulation","The formulation changed","Canteen food is always better","Family members dislike plant protein"],"Slide 40: same formulation, different acceptance. Meat can carry cultural or ceremonial meaning in some settings."],
 ["Consumers","In the mince study (101 consumers, six products), what was found?",["Meat substitutes could be liked as much as, or more than, beef","Beef was always disliked","Consumers could not tell the products apart","Substitutes were rejected by everyone"],"Slide 41: meat substitutes that are not necessarily novel may be accepted as well as beef."],
 ["Consumers","What relationship was found between cooking ability and food neophobia (N = 389)?",["A negative relationship: higher cooking ability, lower neophobia","A positive relationship","No relationship at all","It only applied to beef"],"Slide 42: people with higher cooking ability tended to be less afraid of new foods."],
 ["Consumers","Valoppi et al. (2021) found that for meat substitutes the decisive factor was:",["Sensory properties","Environmental concerns","Brand name","Packaging"],"Slide 46: you cannot sell a sustainable product that tastes wrong. Sensory quality is crucial."],
 ["Multi-criteria","When reading a radar chart comparing two formulations, you should look for:",["The best trade-off across all criteria","The single highest score","The formulation with the most colour","The lowest cost only"],"Slide 51: the best formulation balances multiple criteria based on your goals, not just one high score."],
 ["RSM basics","Response Surface Methodology (RSM) is:",["A set of statistical and mathematical tools to model and optimize a response affected by several factors","A method for packaging food","A sensory panel technique","A way to count microbes"],"Slide 52: RSM builds, improves and optimizes a process by studying how multiple factors affect a response."],
 ["RSM basics","Why is one-factor-at-a-time (OFAT) testing risky?",["It cannot detect interactions between ingredients","It uses too many runs","It requires a CCD","It ignores the response"],"Slide 55: OFAT cannot detect interactions and may give misleading or irreproducible results."],
 ["RSM basics","Fixed conditions in an experiment are:",["Conditions held constant (e.g., pH, batch size, equipment)","Factors that are varied the most","The responses","The coded levels"],"Slide 61: fixed conditions are held constant so the effects of the variable factors can be isolated."],
 ["RSM basics","What is special about mixture designs?",["The components are proportions that must add up to 100%","They use only one factor","They never use replicates","They are used only for processing"],"Slide 62: components are proportions of a whole, so raising one lowers another."],
 ["RSM Steps 1–2","In biscuit development, hardness (where softer is better) should be classified as:",["Minimize","Maximize","Target","Fixed"],"Slides 68 and 70: lower hardness is better, so the goal is Minimize."],
 ["RSM Steps 1–2","For oat flour with low = 10%, centre = 20% and high = 30%, what coded level is 20%?",["0","+1","−1","2"],"Slide 78: coded levels are −1 (low), 0 (centre) and +1 (high)."],
 ["RSM Steps 1–2","How many factors should normally be kept in the RSM stage?",["Two to five","One","Ten to twenty","As many as possible"],"Slide 81: beyond two to five, the experimental burden grows rapidly."],
 ["RSM Step 3","A 2⁶⁻² fractional factorial with six factors needs how many runs?",["16","6","32","64"],"Slides 86 and 89: it needs only 16 runs, compared with a full factorial design."],
 ["RSM Step 3","What type of model is fitted to screening data?",["First-order (linear) model","Second-order (quadratic) model","Cubic model","No model"],"Slide 85: Y = β₀ + Σβᵢxᵢ is fitted to select significant factors."],
 ["RSM Step 4","In the path of steepest ascent, a positive coefficient means you should:",["Increase the factor level","Decrease the factor level","Remove the factor","Keep the factor fixed"],"Slide 94: positive coefficient, increase the level; negative coefficient, decrease it."],
 ["RSM Step 4","In the mayonnaise example the path stopped after Run 4 because:",["The response fell from 7.2 to 7.1","The response reached 10","The factors ran out","The coefficients became positive"],"Slide 95: run until the response no longer improves. 7.1 is lower than 7.2."],
 ["RSM Step 5","A response surface design can do something the linear screening model cannot. What?",["Estimate curvature and interactions","Test more factors than any design","Avoid replicates","Remove the need for measurement"],"Slides 97 and 102: response surface designs estimate curvature and interactions."],
 ["RSM Step 5","A Central Composite Design (CCD) is made of:",["Factorial points, axial (star) points and centre points","Only edge midpoints","Only corner points","Random points"],"Slide 99: factorial + axial + centre points, typically at five coded levels. It is the most widely used RSM design."],
 ["RSM Step 5","Which design avoids extreme corner combinations?",["Box–Behnken","CCD","Three-level full factorial","Plackett–Burman"],"Slide 100: Box–Behnken uses midpoints of edges and faces plus centre points."],
 ["Experiments","Why is the run order randomized?",["To avoid systematic bias from day, operator or equipment","To save time","To reduce replicates","To make the design smaller"],"Slide 109: random order protects against systematic bias."],
 ["Experiments","How many replicates are standard in RSM food studies?",["Three (triplicate)","One","Two","Ten"],"Slide 110: triplicate execution is standard."],
 ["Model fitting","In the second-order model, what does βᵢⱼ represent?",["The interaction between two factors","The intercept","The error term","The curvature of one factor"],"Slide 115: βᵢⱼ is the interaction coefficient. βᵢᵢ is curvature and ε is error."],
 ["Model fitting","A negative quadratic coefficient (βᵢᵢ < 0) means the response:",["First increases then decreases, giving a maximum","Always increases","Is unaffected by the factor","Is random"],"Slide 140: the quadratic term shows curvature and an optimum. Negative means concave."],
 ["Model fitting","Which diagnostic result is desirable?",["Model p < 0.05 and lack-of-fit p > 0.05","Model p > 0.05 and lack-of-fit p < 0.05","Both p-values below 0.05","Both p-values above 0.05"],"Slides 124–125: the model should be significant, but lack of fit should not be significant."],
 ["Model fitting","Adjusted R² differs from R² because it:",["Is penalized for model size","Is always larger","Ignores the data","Measures only residuals"],"Slide 127: adjusted R² is penalized for model size and should track closely with R²."],
 ["Model fitting","According to the slides, predicted R² should:",["Exceed 0.90","Be below 0.10","Equal zero","Be negative"],"Slide 128: predicted R² shows predictive ability on unseen data and should exceed 0.90 (per the slide)."],
 ["Interpretation","On a perturbation plot, a curved line indicates:",["A quadratic effect (curvature)","No effect","A strong linear effect only","An error"],"Slide 143: steep = strong effect, curved = quadratic effect, nearly flat = little or no effect."],
 ["Interpretation","Closed, concentric contours around the optimum suggest:",["The surface is adequately mapped","The optimum is outside the design space","The model has no fit","The design needs fewer runs"],"Slide 145: closed concentric contours indicate a well-defined optimum. Open or elongated contours suggest the optimum may be outside the region."],
 ["Desirability","Overall desirability D = 0 means:",["At least one response is unacceptable","All responses are ideal","The model is validated","The design is a CCD"],"Slide 157: D is a weighted geometric mean, so one unacceptable response makes D = 0. D = 1 means all responses are ideal."],
 ["Confirmation","If observed results agree with the predicted optimum, the next step is to:",["Treat the model as validated and proceed to scale-up","Delete the data","Run the screening again","Change the factors"],"Slide 168: agreement means the model is validated and the formulation can go to scale-up."],
 ["Confirmation","Which is a common RSM pitfall?",["Skipping confirmation runs","Running replicates","Checking diagnostics","Defining objectives clearly"],"Slides 169–174: pitfalls include unclear objectives, poor design or range, no replicates, ignoring diagnostics, over-interpreting and skipping confirmation."],
 ["Design pillars","In the sausage study, how were the product targets defined?",["From a commercial reference sausage (e.g., 20 g/100 g fat)","From personal preference only","From the cheapest sausage","From advertising claims"],"Slide 184: define targets from an existing reference product. Concrete targets beat vague goals."],
 ["Design pillars","Which approach improves affordability and access in formulation?",["Use locally available ingredients and simplify the formulation","Add many rare ingredients","Avoid by-products","Use complex processes"],"Slide 197: local ingredients, fewer ingredients, by-products and scalable processes can lower cost and improve access."],
];

const Q = DATA.map(([topic, q, opts, e]) => ({topic, q, opts, e}));
if (Q.length !== 50) console.warn("Expected 50 questions, found " + Q.length);

const LETTERS = ["A","B","C","D"];
const app = document.getElementById("app");
let i = 0, score = 0, results = [], picked = null, order = [];

const esc = s => s.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
function shuffle(a){ a = a.slice(); for (let k=a.length-1;k>0;k--){ const j=Math.floor(Math.random()*(k+1)); [a[k],a[j]]=[a[j],a[k]]; } return a; }

function start(){ i=0; score=0; results=[]; picked=null; order=Q.map(()=>shuffle([0,1,2,3])); render(); }

function render(){
  if (i >= Q.length) return finish();
  const q = Q[i], pct = (i / Q.length) * 100;
  app.innerHTML = `<div class="bar"><i style="width:${pct}%"></i></div>
    <div class="meta"><span>Question ${i+1} of ${Q.length}</span><span>Score: ${score}</span></div>
    <span class="tag">${esc(q.topic)}</span><p class="q">${esc(q.q)}</p>
    <div class="opts">${order[i].map((idx,pos)=>`<button class="opt${picked===pos?" sel":""}" data-p="${pos}" type="button"><span class="letter">${LETTERS[pos]}</span><span>${esc(q.opts[idx])}</span></button>`).join("")}</div>
    <button class="btn" id="check" type="button" ${picked===null?"disabled":""}>Check answer</button><div id="fb"></div>`;
  app.querySelectorAll(".opt").forEach(b => b.onclick = () => { picked = +b.dataset.p; render(); });
  document.getElementById("check").onclick = check;
}

function check(){
  const q = Q[i], correctPos = order[i].indexOf(0), ok = picked === correctPos;
  app.querySelectorAll(".opt").forEach((b,pos)=>{ b.disabled = true; b.classList.remove("sel"); if (pos===correctPos) b.classList.add("ok"); else if (pos===picked) b.classList.add("no"); });
  document.getElementById("check").remove();
  const verdict = ok ? "Correct!" : `Not quite. The correct answer is ${LETTERS[correctPos]}.`;
  document.getElementById("fb").innerHTML = `<div class="exp ${ok?"ok":"no"}"><b>${verdict}</b><p><b style="display:inline">Explanation: </b>${esc(q.e)}</p></div>
    <button class="btn" id="next" type="button">${i===Q.length-1?"See results":"Next question"}</button>`;
  const n = document.getElementById("next"); n.onclick = () => { if (ok) score++; results.push(ok); picked = null; i++; render(); window.scrollTo({top:0}); }; n.focus();
}

function finish(){
  const pct = Math.round(score / Q.length * 100);
  const msg = pct >= 90 ? "Excellent work. You know this lesson well." : pct >= 70 ? "Good job. Review the questions you missed below." : "Keep going. Re-read the reviewer for the topics you missed, then try again.";
  app.innerHTML = `<div class="bar"><i style="width:100%"></i></div>
    <span class="tag">Results</span><div class="big">${score} / ${Q.length}</div>
    <p style="margin:0 0 4px"><b>${pct}%</b> – ${msg}</p>
    <div class="rev">${Q.map((q,k)=>`<div class="${results[k]?"g":"b"}"><span>${results[k]?"✔":"✘"}</span><span>${k+1}. ${esc(q.q)}</span></div>`).join("")}</div>
    <button class="btn" id="again" type="button">Try again</button>`;
  document.getElementById("again").onclick = start;
}

const themeBtn = document.getElementById("theme"), root = document.documentElement;
function isDark(){ const t = root.getAttribute("data-theme"); return t ? t==="dark" : matchMedia("(prefers-color-scheme:dark)").matches; }
function label(){ themeBtn.textContent = isDark() ? "Light mode" : "Dark mode"; }
themeBtn.onclick = () => { root.setAttribute("data-theme", isDark() ? "light" : "dark"); label(); };
label();
start();