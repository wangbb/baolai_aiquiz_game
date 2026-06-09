const QUESTIONS = [{"id": "Q01", "category": "吃", "title": "土窯胖的手作線索", "image": "assets/p01_1.png", "type": "choice", "intro": "觀察照片中的麵包展示櫃，再閱讀場域說明：寶來土窯胖的每顆麵包，都是社區婦女與青年親手揉捏，並加入天然食材製作。", "question": "這項產品最想傳達哪一種地方精神？", "options": ["大量工廠生產與快速包裝", "社區共同手作與天然食材", "只強調進口原料的高級感", "完全不需要人力參與的自動化烘焙"], "answer": "B", "hint": "注意『社區婦女和青年們親手揉捏』與『天然食材』兩個關鍵。", "explain": "土窯胖不只是麵包，而是把社區參與、青年返鄉與天然食材結合成地方風味。"}, {"id": "Q02", "category": "吃", "title": "陶 × 山茶藏寶藏禮盒", "image": "assets/p02_1.png", "type": "input", "intro": "照片中的禮盒結合寶來陶、六龜野放山茶與地方點心，呈現六龜職人的土地風味。", "question": "禮盒中的哪一種餅，以『福氣歸來』的意象命名？請輸入名稱。", "answer": ["福龜餅", "山茶福龜餅"], "placeholder": "例如：○○餅", "hint": "名稱中有一種長壽吉祥的動物。", "explain": "『山茶福龜餅』將地方茶香與吉祥寓意結合，是禮盒中的重要點心。"}, {"id": "Q03", "category": "吃", "title": "窯炊料理的核心理念", "image": "assets/p03_1.png", "type": "choice", "intro": "窯炊料理運用傳統大灶烹調，呈現六龜樸實風味，也呼應環保節能與支持在地農產。", "question": "這套料理最核心的飲食理念是什麼？", "options": ["食在地、食當季", "食進口、食精緻", "食快速、食大量", "食油炸、食重鹹"], "answer": "A", "hint": "場域說明的第一句就是關鍵。", "explain": "『食在地、食當季』能讓料理與地方農產、季節循環及環境永續產生連結。"}, {"id": "Q04", "category": "吃", "title": "TERRA 禮盒的風味地圖", "image": "assets/p04_1.png", "type": "choice", "intro": "TERRA 禮盒集結臺灣各地社區好物，與友善農法或永續作法的在地夥伴合作。", "question": "這款禮盒讓訪客一次收藏幾種臺灣社區特色好茶？", "options": ["2 種", "3 種", "4 種", "6 種"], "answer": "C", "hint": "說明最後提到『一次收錄南臺灣與東臺灣……』。", "explain": "TERRA 禮盒主打四大臺灣社區特色好茶，展現不同地方風味。"}, {"id": "Q05", "category": "人文", "title": "檨仔腳的重生記憶", "image": "assets/p05_1.png", "type": "choice", "intro": "照片呈現一處承載地方記憶與社區情感的文化空間。說明指出這裡在災後成立，成為居民重新凝聚與分享生活的重要據點。", "question": "這個空間是在下列哪一場災後凝聚地方力量而成立？", "options": ["九二一大地震", "莫拉克風災", "八仙塵爆", "梅姬颱風"], "answer": "B", "hint": "寶來地區重建脈絡常與八八水災相關。", "explain": "檨仔腳文化共享空間承接莫拉克風災後的社區重建與地方文化延續。"}, {"id": "Q06", "category": "人文", "title": "寶來陶：把自然留下來", "image": "assets/p06_1.png", "type": "choice", "intro": "寶來陶借用大自然的肌理形樣，在土坯上留住印記，再透過瓦斯窯、鹽釉燒與柴燒等窯燒方式完成作品。", "question": "依據說明，寶來陶最重視陶藝品與什麼之間的緊密關係？", "options": ["大自然", "都市交通", "電子科技", "金屬機械"], "answer": "A", "hint": "說明裡反覆出現土、火焰、大地與自然。", "explain": "寶來陶以自然肌理、土坯與火焰轉化，表現地方樸實與大地溫厚。"}, {"id": "Q07", "category": "人文", "title": "日作染的天然色彩", "image": "assets/p07_1.png", "type": "choice", "intro": "日作染使用在地植物的根、莖、葉、花、果實和樹皮等，萃取天然色素，再經多重沁染形成布匹。", "question": "日作染主要從哪裡取得染布用的色彩？", "options": ["化學螢光粉", "塑膠顏料", "在地植物", "金屬鏽粉"], "answer": "C", "hint": "看說明中的『根、莖、葉、花、果實和樹皮』。", "explain": "日作染的特色是從植物萃取天然色素，讓布料保留自然紋理與地方色澤。"}, {"id": "Q08", "category": "人文", "title": "七位陶藝家的柴窯", "image": "assets/p08_1.png", "type": "choice", "intro": "寶來柴窯由合掌窯團隊七位陶藝家合力完成，並帶領社區鄉親挺過災後重建。", "question": "寶來柴窯的社區意義，主要與哪一場災後重建有關？", "options": ["八八風災", "九二一大地震", "高雄氣爆", "小林村遷村前"], "answer": "A", "hint": "說明直接提到『挺過……』。", "explain": "寶來柴窯不只是窯體設施，也促成社區陶瓷手工藝發展的契機。"}, {"id": "Q09", "category": "人文", "title": "水洗：染布的最後判斷", "image": "assets/p09_1.png", "type": "input", "intro": "染布定色完成後，必須以大量清水沖洗，直到清洗狀態符合標準。", "question": "請輸入判斷水洗完成的關鍵句：直到水不再＿＿為止。", "answer": ["變色", "水不再變色", "不再變色"], "placeholder": "請填入缺漏詞語", "hint": "完成水洗的線索不是時間，而是水的顏色變化。", "explain": "大量清水沖洗到水不再變色，代表多餘浮色已被洗去，是天然染工藝的重要收尾。"}, {"id": "Q10", "category": "人文", "title": "寶來水果的招牌組合", "image": "assets/p10_1.png", "type": "choice", "intro": "寶來因山坡地、河川地、河濱農田與日夜溫差等條件，孕育多樣農特產品。", "question": "依據說明，寶來最富盛名的兩種水果是哪一組？", "options": ["蓮霧、芒果", "鳳梨、香蕉", "釋迦、葡萄", "西瓜、荔枝"], "answer": "A", "hint": "說明末尾提到『黑鑽石』與『金煌』。", "explain": "黑鑽石蓮霧與金煌芒果是寶來相當具代表性的農特產。"}, {"id": "Q11", "category": "推理", "title": "窯烤爐的熱能秘密", "image": "assets/p11_1.png", "type": "choice", "intro": "窯體內部可能包含玻璃瓶層以保留熱能，牆壁溫度可達 600 多度。", "question": "從這段說明判斷，窯烤爐結構最關鍵的功能是什麼？", "options": ["讓麵包完全不受熱", "保留並累積高溫熱能", "只用來裝飾外觀", "降低爐內溫度到室溫"], "answer": "B", "hint": "玻璃瓶層與 600 多度都指向『熱』。", "explain": "窯烤爐靠厚實結構與蓄熱設計維持高溫，形成窯烤食物特有的口感與香氣。"}, {"id": "Q12", "category": "推理", "title": "柴燒灶的農村生活記憶", "image": "assets/p11_2.png", "type": "choice", "intro": "照片中的灶台是裝飾馬賽克磁磚的傳統雙口紅磚柴燒灶，常見於農村古厝與文創空間。", "question": "這個設施最適合代表哪一種地方生活記憶？", "options": ["傳統農村柴火烹調", "高科技無人商店", "工業機械加工", "現代冷凍物流"], "answer": "A", "hint": "紅磚、雙口、柴燒灶都是舊式烹調線索。", "explain": "柴燒灶連結農村古厝、柴火料理與社區共食活動，是生活文化的場域記憶。"}, {"id": "Q13", "category": "人文", "title": "文化活動海報的任務提示", "image": "assets/p12_1.png", "type": "choice", "intro": "海報說明結合『食農、陶、染』文化體驗，引導遊客透過學習技能與物資兌換協助家園重建。", "question": "這張海報主要強調哪三種文化體驗？", "options": ["食農、陶、染", "科技、金融、交通", "漁業、航運、鋼鐵", "醫療、法律、會計"], "answer": "A", "hint": "題目說明中已出現三個並列關鍵詞。", "explain": "食農、陶、染構成檨仔腳文化體驗的主要軸線，也讓遊客理解地方重建與產業特色。"}, {"id": "Q14", "category": "推理", "title": "木造櫃檯：這裡不是普通商店", "image": "assets/p12_2.png", "type": "choice", "intro": "這是一個融合老屋風情的復古木造文化空間，提供在地工藝與農產展售，也設有輕食餐飲供訪客休憩。", "question": "根據照片與說明，這個木造櫃檯最可能服務哪一種空間？", "options": ["結合文化展示、展售與餐飲休憩的共享空間", "只提供貨運包裹集散的倉庫", "不能進入的私人住宅", "專門維修汽車的修車廠"], "answer": "A", "hint": "展售、輕食、休憩、文化空間是關鍵。", "explain": "木造櫃檯讓訪客能購買地方產品、休息用餐，也能接觸文化展示與體驗活動。"}, {"id": "Q15", "category": "推理", "title": "銅製雨鏈的雨天任務", "image": "assets/p13_1.png", "type": "choice", "intro": "銅製雨鏈於雨天引導雨水順流而下，搭配生態排水設計，展現園區與自然共生的環保理念。", "question": "這個裝置最主要的功能是什麼？", "options": ["引導雨水排放", "測量空氣溫度", "播放園區音樂", "標示商品價格"], "answer": "A", "hint": "名字裡的『雨』與說明中的『順流而下』是關鍵。", "explain": "雨鏈具有美感，但核心功能是將屋簷雨水導向排水區，並連結生態排水概念。"}, {"id": "Q16", "category": "園區秘密", "title": "檨仔腳的地名密碼", "image": "assets/p05_1.png", "type": "choice", "intro": "『檨仔腳』是以台語地名保存地方記憶，指向早期居民對環境與植物的命名方式。", "question": "『檨仔腳』在中文意義上，最接近哪一種水果樹的下面？", "options": ["荔枝樹", "龍眼樹", "芒果樹", "芭樂樹"], "answer": "C", "hint": "『檨仔』是台語中的一種常見南方水果。", "explain": "『檨仔』指芒果，『腳』有下方、旁邊之意，因此檨仔腳可理解為芒果樹下。"}];
const LS_KEY = 'baolai_aiquiz_v2_progress';
let progress = Number(localStorage.getItem(LS_KEY) || 0);
let current = Math.min(progress, QUESTIONS.length-1);
let selected = null;
let answered = false;
const $ = id => document.getElementById(id);
function show(id){['start','game','complete'].forEach(x=>$(x).classList.add('hidden')); $(id).classList.remove('hidden'); window.scrollTo({top:0,behavior:'smooth'});}
function normalize(s){return String(s||'').trim().replace(/\s+/g,'').replace(/[，,、。．.]/g,'').toLowerCase();}
function isCorrect(q,val){
  if(q.type==='choice') return val === q.answer;
  const v=normalize(val); return q.answer.map(normalize).some(a=>v===a || (a.length>=3 && v.includes(a)));
}
function renderMap(){
  const grid=$('levelGrid'); grid.innerHTML='';
  QUESTIONS.forEach((q,i)=>{ const b=document.createElement('button'); b.className='dot '+(i<progress?'done ':i===current?'current ':'')+(i>progress?'locked':''); b.textContent=i+1; b.title=q.title; b.onclick=()=>{if(i<=progress){current=i; renderQuestion();}}; grid.appendChild(b); });
  $('progressText').textContent = `已破解 ${Math.min(progress,QUESTIONS.length)} / ${QUESTIONS.length}`;
}
function renderQuestion(){
  if(progress>=QUESTIONS.length){renderComplete(); show('complete'); return;}
  answered=false; selected=null; const q=QUESTIONS[current]; renderMap();
  $('qImage').src=q.image; $('qId').textContent=q.id; $('qCat').textContent=q.category; $('qTitle').textContent=q.title; $('qIntro').textContent=q.intro; $('qQuestion').textContent=q.question; $('hint').textContent=''; $('result').innerHTML=''; $('result').className=''; $('nextBtn').disabled=true; $('checkBtn').disabled=false;
  const area=$('answerArea'); area.innerHTML='';
  if(q.type==='choice'){
    const opts=document.createElement('div'); opts.className='options';
    q.options.forEach((txt,idx)=>{const label=String.fromCharCode(65+idx); const btn=document.createElement('button'); btn.className='opt'; btn.innerHTML=`<b>${label}.</b> ${txt}`; btn.onclick=()=>{selected=label; document.querySelectorAll('.opt').forEach(o=>o.classList.remove('selected')); btn.classList.add('selected');}; opts.appendChild(btn);}); area.appendChild(opts);
  }else{
    const input=document.createElement('input'); input.className='inputAnswer'; input.id='textAnswer'; input.placeholder=q.placeholder||'請輸入答案'; input.addEventListener('keydown',e=>{if(e.key==='Enter')checkAnswer();}); area.appendChild(input);
  }
}
function checkAnswer(){
  const q=QUESTIONS[current]; const val=q.type==='choice'?selected:($('textAnswer')?.value||'');
  if(!val){$('result').className='result bad'; $('result').textContent=q.type==='choice'?'請先選擇一個答案。':'請先輸入答案。'; return;}
  if(isCorrect(q,val)){
    answered=true; $('result').className='result good'; $('result').innerHTML=`<b>破解成功！</b><br>${q.explain}`; $('checkBtn').disabled=true; $('nextBtn').disabled=false;
    if(current===progress){ progress++; localStorage.setItem(LS_KEY, progress); }
    renderMap();
    if(progress>=QUESTIONS.length) $('nextBtn').textContent='查看結局'; else $('nextBtn').textContent='下一關';
  }else{
    $('result').className='result bad'; $('result').innerHTML='<b>答案還不對。</b><br>請再觀察照片與說明，或點選提示。';
  }
}
function next(){ if(!answered && current>=progress) return; if(progress>=QUESTIONS.length){renderComplete(); show('complete'); return;} current=Math.min(progress, QUESTIONS.length-1); renderQuestion(); }
function reset(){ localStorage.removeItem(LS_KEY); progress=0; current=0; renderQuestion(); show('game'); }
function renderComplete(){
  $('record').innerHTML=QUESTIONS.map((q,i)=>`<div class="rec"><b>${String(i+1).padStart(2,'0')} ${q.title}</b><span>${q.category}｜${q.explain}</span></div>`).join('');
}
$('startBtn').onclick=()=>{current=0; renderQuestion(); show('game');};
$('continueBtn').onclick=()=>{current=Math.min(progress,QUESTIONS.length-1); if(progress>=QUESTIONS.length){renderComplete(); show('complete')} else {renderQuestion(); show('game')}};
$('resetBtn1').onclick=reset; $('resetBtn2').onclick=reset; $('againBtn').onclick=reset; $('reviewBtn').onclick=()=>{current=0; renderQuestion(); show('game')}; $('homeBtn').onclick=()=>show('start');
$('hintBtn').onclick=()=>{$('hint').textContent='提示：'+QUESTIONS[current].hint;}; $('checkBtn').onclick=checkAnswer; $('nextBtn').onclick=next;
$('continueBtn').disabled = progress===0;
