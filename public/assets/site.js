window.AFFILIATE_CONFIG={amazon:{label:"Amazon",url:"#",enabled:false},hosting:{label:"Hosting",url:"#",enabled:false},domains:{label:"Domain registrar",url:"#",enabled:false}};
window.AFFILIATE_DISCLOSURE="Some links on Toolivo may be affiliate links. If you buy through one, we may earn a commission at no additional cost to you.";

window.TOOLIVO_SHOP={shop:"https://ko-fi.com/toolivo",fba:"https://ko-fi.com/s/ffb1c37a6e",domain:"https://ko-fi.com/s/9c2eac9842",email:"https://ko-fi.com/s/bcb2344ec5",bundle:"https://ko-fi.com/s/2ce2b40013"};
document.addEventListener("DOMContentLoaded",function(){
 const path=window.location.pathname.replace(/\/$/,""),main=document.querySelector("main"); if(!main)return;
 const cards={
 "/tools/amazon-fba-profit-calculator":{eyebrow:"GO FURTHER WITH PRO",title:"Turn the estimate into a complete FBA planning system",text:"The Toolivo FBA Seller Kit PRO adds landed-cost modeling, projections, sensitivity analysis, inventory planning, supplier comparison, launch budgeting, decision gates, checklists, and a guide.",cta:"Get the FBA Seller Kit PRO",url:window.TOOLIVO_SHOP.fba},
 "/tools/domain-name-generator":{eyebrow:"FROM IDEA TO LAUNCH",title:"Take your domain shortlist further",text:"The Toolivo Domain Launch Kit PRO helps you score candidates, document availability checks, research conflicts, compare registrars, prepare launch steps, and track renewals.",cta:"Get the Domain Launch Kit PRO",url:window.TOOLIVO_SHOP.domain},
 "/tools/domain-availability-checker":{eyebrow:"FROM CHECK TO REGISTRATION",title:"Organize the domain launch process",text:"The Toolivo Domain Launch Kit PRO gives you a structured workflow for naming, availability records, conflict research, registrar comparison, launch, and renewal.",cta:"Get the Domain Launch Kit PRO",url:window.TOOLIVO_SHOP.domain},
 "/tools/email-subject-analyzer":{eyebrow:"FROM ANALYSIS TO EXPERIMENTS",title:"Turn subject-line checks into a testing workflow",text:"The Toolivo Email Subject Toolkit PRO helps you build variants, plan A/B tests, track campaigns, compare results, and document what you learn.",cta:"Get the Email Subject Toolkit PRO",url:window.TOOLIVO_SHOP.email},
 "/":{eyebrow:"TOOLIVO PRO",title:"Ready for more than a quick tool?",text:"Explore Toolivo's PRO planning systems for FBA research, email subject-line experiments, and domain launches — or get all three in one bundle.",cta:"Explore the Toolivo PRO Suite",url:window.TOOLIVO_SHOP.bundle}
 };
 const item=cards[path]; if(!item||main.querySelector(".toolivo-pro-cta"))return;
 const s=document.createElement("section"); s.className="card toolivo-pro-cta";
 s.innerHTML='<p class="eyebrow">'+item.eyebrow+'</p><h2>'+item.title+'</h2><p>'+item.text+'</p><p><a class="button" href="'+item.url+'" target="_blank" rel="noopener noreferrer">'+item.cta+'</a> <a class="button secondary" href="'+window.TOOLIVO_SHOP.shop+'" target="_blank" rel="noopener noreferrer">View all products</a></p>';
 const footer=document.querySelector("footer"); if(footer)main.insertBefore(s,footer);else main.appendChild(s);
});
