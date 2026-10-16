const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const EMAIL="muxtasarkadirova174@gmail.com";
const certs=[
{t:"System Administration and IT Infrastructure Services",s:"Google · Coursera",d:"10.02.2025",x:"Google tomonidan ishlab chiqilgan va Coursera orqali taqdim etilgan “System Administration and IT Infrastructure Services” onlayn kursini muvaffaqiyatli tugatgani uchun sertifikat.",tags:["Google","Coursera","IT Infrastructure"],img:"cert-google"},
{t:"Gemini Certified Student (K12)",s:"Google for Education",d:"28.08.2026",x:"Google for Education tomonidan berilgan Gemini Certified Student (K12) sertifikati. Baho: 94. Amal qilish muddati: 28.08.2029.",tags:["Google AI","Education","K12"],img:"cert-gemini"},
{t:"Madinabonu o‘quv markazi sertifikati",s:"Front-end dasturlash kursi",d:"15.05.2026",x:"Madinabonu o‘quv markazida Front-end dasturlash kursini muvaffaqiyatli tugatgani uchun taqdirlangan.",tags:["Front-end","Sertifikat"],img:"cert-madinabonu"},
{t:"Server Study IT Academy diplomi",s:"Kompyuter savodxonligi va web dasturlash",d:"11.05.2026",x:"72 soatlik “Kompyuter savodxonligi va web dasturlash” kursini muvaffaqiyatli tamomlagani uchun diplom (№ 35).",tags:["Web","72 soat","Diplom"],img:"cert-serverstudy"},
{t:"Diplom (muqova)",s:"Server Study IT Academy",d:"2026",x:"Server Study IT Academy diplomining muqovasi.",tags:["Diplom"],img:"cert-diplom-cover"}];
const T={
uz:{nav_about:"Men haqimda",nav_services:"Yo‘nalishlar",nav_projects:"Loyihalar",nav_certs:"Sertifikatlar",nav_contact:"Aloqa",hero_p:"“O‘z ishiga mas’uliyat bilan yondashgan inson, har bir ishida o‘zining kimligini ko‘rsatadi. Chunki haqiqiy mas’uliyat — nazorat ostida ishlash emas, hech kim kuzatmayotganda ham vazifangni vijdonan bajarishdir.” ✨",btn_projects:"Sertifikatlarim",who_name:"Ma’murjon qizi Kadirova Muxtasar",who_loc:"Sirdaryo viloyati, Guliston shahar",btn_contact:"Bog‘lanish",btn_copy:"Emailni nusxalash",st1:"tayyor loyiha",st2:"sertifikat",st3:"yo‘nalish",h_about:"Men haqimda",about_p:"Men ijodkor, mas’uliyatli va yangi texnologiyalarni o‘rganishga qiziqadigan insonman. Frontend va Backend yo‘nalishlarini tugatganman. Web sayt, ta’lim, marketing va kreativ loyihalar bilan ishlashni yaxshi ko‘raman.",teach:"O‘qituvchilik",h_services:"Nima ish qila olaman?",h_projects:"Sayt va loyihalarim",h_certs:"Sertifikatlar",h_reviews:"Mijozlar fikri",h_contact:"Birga chiroyli loyiha yaratamiz",contact_p:"Xabar qoldiring, men tez orada javob beraman.",f_name:"Ismingiz",f_msg:"Xabar",f_send:"Xabar yuborish",all:"Hammasi",web:"Web",design:"Dizayn",edu:"Ta’lim",copied:"Email nusxalandi",err:"Barcha maydonlarni to‘g‘ri to‘ldiring.",dev_on:"Dasturlash rejimi yoqildi",dev_off:"Oddiy rejim"},
ru:{nav_about:"Обо мне",nav_services:"Услуги",nav_projects:"Проекты",nav_certs:"Сертификаты",nav_contact:"Контакты",hero_p:"“Человек, ответственно относящийся к своему делу, показывает в каждой работе, кто он есть. Ведь настоящая ответственность — это не работа под контролем, а добросовестное выполнение своих задач, даже когда никто не смотрит.” ✨",btn_projects:"Мои сертификаты",who_name:"Кадирова Мухтасар Мамуржон кизи",who_loc:"Сырдарьинская область, город Гулистан",btn_contact:"Связаться",btn_copy:"Копировать email",st1:"готовых проектов",st2:"сертификатов",st3:"направлений",h_about:"Обо мне",about_p:"Я творческий, ответственный человек, которому интересно осваивать новые технологии. Окончила направления Frontend и Backend. Люблю работать над сайтами, обучением, маркетингом и креативными проектами.",teach:"Преподавание",h_services:"Что я умею?",h_projects:"Сайты и проекты",h_certs:"Сертификаты",h_reviews:"Отзывы клиентов",h_contact:"Создадим что-то красивое вместе",contact_p:"Оставьте сообщение, я скоро отвечу.",f_name:"Ваше имя",f_msg:"Сообщение",f_send:"Отправить",all:"Все",web:"Веб",design:"Дизайн",edu:"Обучение",copied:"Email скопирован",err:"Заполните все поля правильно.",dev_on:"Режим разработчика включён",dev_off:"Обычный режим"},
en:{nav_about:"About",nav_services:"Services",nav_projects:"Projects",nav_certs:"Certificates",nav_contact:"Contact",hero_p:"“A person who takes their work seriously shows who they are in everything they do. True responsibility isn’t working under supervision — it’s doing your duty with a clear conscience even when no one is watching.” ✨",btn_projects:"My certificates",who_name:"Kadirova Muxtasar Ma’murjon qizi",who_loc:"Sirdarya Region, Gulistan city",btn_contact:"Get in touch",btn_copy:"Copy email",st1:"projects done",st2:"certificates",st3:"fields",h_about:"About me",about_p:"I'm a creative, responsible person who loves learning new technologies. I completed Frontend and Backend studies, and enjoy working on websites, education, marketing and creative projects.",teach:"Teaching",h_services:"What can I do?",h_projects:"Websites and projects",h_certs:"Certificates",h_reviews:"Client reviews",h_contact:"Let's build something great",contact_p:"Leave a message and I'll reply soon.",f_name:"Your name",f_msg:"Message",f_send:"Send message",all:"All",web:"Web",design:"Design",edu:"Education",copied:"Email copied",err:"Please fill in all fields correctly.",dev_on:"Developer mode on",dev_off:"Normal mode"}};
let lang=store.get("lang")||"uz",items=[],cur=0;
const t=k=>T[lang][k]||T.uz[k];
const toast=m=>{const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(toast.id);toast.id=setTimeout(()=>e.classList.remove("show"),2200)};
function renderProjects(){
 $("#certGrid").innerHTML=certs.map((c,i)=>`<button class="cert" data-c="${i}"><img src="assets/${c.img}.jpg" alt="${c.t}" loading="lazy"><i class="shine"></i><em>${c.d}</em><b class="no">0${i+1}</b><span>${c.t}</span><small>${c.s}</small></button>`).join("");
}
function setLang(l){
 lang=l;store.set("lang",l);document.documentElement.lang=l;
 $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
 $$(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));
 renderProjects();
}
function show(list,i){
 items=list;cur=(i+list.length)%list.length;const x=list[cur];
 $("#mTitle").textContent=x.title;$("#mText").textContent=x.text;
 $("#mTags").innerHTML=x.tags.map(s=>`<span>${s}</span>`).join("");
 const im=$("#mImg"),i2=$("#mImg2");im.hidden=!x.img;im.classList.toggle("doc",!!x.doc);if(x.img){im.src=x.img;im.alt=x.title}
 i2.hidden=!x.img2;if(x.img2){i2.src=x.img2;i2.alt=x.title}
 $("#modal").classList.add("show");$("#mClose").focus();
}
const closeM=()=>$("#modal").classList.remove("show");
const certList=()=>certs.map(c=>({title:c.t,text:c.x,tags:c.tags,img:`assets/${c.img}.jpg`,doc:1}));
document.addEventListener("click",e=>{
 const b=e.target.closest("button,a");if(!b)return;
 if(b.dataset.lang)setLang(b.dataset.lang);
 else if(b.dataset.c)show(certList(),+b.dataset.c);
 else if(b.id==="mClose")closeM();
 else if(b.id==="mPrev")show(items,cur-1);
 else if(b.id==="mNext")show(items,cur+1);
 else if(b.id==="toTop")scrollTo({top:0,behavior:"smooth"});
 else if(b.id==="burger"){const o=$("#nav").classList.toggle("open");b.setAttribute("aria-expanded",o)}
 else if(b.closest("#nav"))$("#nav").classList.remove("open");
 else if(b.id==="copyMail"){(navigator.clipboard?navigator.clipboard.writeText(EMAIL):Promise.reject()).catch(()=>{}).finally(()=>toast(t("copied")))}
});
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeM()});
document.addEventListener("keydown",e=>{if(!$("#modal").classList.contains("show"))return;
 if(e.key==="Escape")closeM();if(e.key==="ArrowLeft")show(items,cur-1);if(e.key==="ArrowRight")show(items,cur+1)});
function setDev(on,say){document.documentElement.dataset.dev=on?"on":"off";$("#devToggle").setAttribute("aria-pressed",on);store.set("dev",on?"1":"0");if(say)toast(t(on?"dev_on":"dev_off"))}
$("#devToggle").onclick=()=>setDev(document.documentElement.dataset.dev!=="on",true);
$("#form").addEventListener("submit",e=>{
 e.preventDefault();const f=e.target,n=f.name.value.trim(),m=f.email.value.trim(),g=f.msg.value.trim();
 if(!n||!g||!/^\S+@\S+\.\S+$/.test(m)){$("#formErr").textContent=t("err");return}
 $("#formErr").textContent="";
 location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio: "+n)}&body=${encodeURIComponent(g+"\n\n"+n+" <"+m+">")}`;f.reset();
});
// typing effect
const roles=["Frontend Developer","Backend Developer","Web Designer","Teacher"];let ri=0,ci=0,del=false;
(function type(){const w=roles[ri],el=$("#typed");el.textContent=w.slice(0,ci);
 if(!del&&ci===w.length){del=true;return setTimeout(type,1400)}
 if(del&&ci===0){del=false;ri=(ri+1)%roles.length}
 ci+=del?-1:1;setTimeout(type,del?40:90)})();
// scroll: progress, active link, counters, meters
addEventListener("scroll",()=>{const h=document.documentElement;$("#progress").style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;
 $$("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(s=>io.observe(s));
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io2.unobserve(e.target);
 if(e.target.id==="meters")$$("i",e.target).forEach(i=>i.style.width=i.dataset.w+"%");
 else $$("[data-count]",e.target).forEach(c=>{const n=+c.dataset.count;let v=0;const s=setInterval(()=>{c.textContent=++v+"+";if(v>=n)clearInterval(s)},80)})}));
io2.observe($("#meters"));io2.observe($(".stats"));
setDev(store.get("dev")==="1");setLang(lang);
