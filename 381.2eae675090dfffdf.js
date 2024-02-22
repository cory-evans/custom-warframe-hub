"use strict";(self.webpackChunkwarframe_hub=self.webpackChunkwarframe_hub||[]).push([[381],{5381:(N,l,r)=>{r.r(l),r.d(l,{HubModule:()=>I});var o=r(6895),p=r(864),e=r(1571),d=r(5963),g=r(4351),h=r(529);let T=(()=>{class s{constructor(t){this.http=t}get(t){for(;t.startsWith("/");)t=t.slice(1);return this.http.get(`https://api.warframestat.us/${t}`)}worldState(t=60){return(0,d.H)(0,1e3*t).pipe((0,g.b)(n=>this.get("pc/")))}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(h.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var x=r(1660),v=r(9062),b=r(4795);let m=(()=>{class s{constructor(){this.text="",this.class="",this.secondsRemaining=0}calcSecondsRemaining(){if(this.expires&&!this.expiresAsDate&&(this.expiresAsDate=new Date(this.expires)),!this.expiresAsDate)return 0;const t=new Date;return this.secondsRemaining=Math.floor(this.expiresAsDate.getTime()/1e3)-Math.floor(t.getTime()/1e3),this.secondsRemaining}ngOnInit(){this.subscription=(0,d.H)(0,1e3).subscribe(()=>{const t=this.calcSecondsRemaining();if(t<0)return this.text="expired",void(this.class="bg-blue-600");this.calcText(),this.class=t<300?"bg-red-600":t<1500?"bg-yellow-600":"bg-green-700"})}ngOnDestroy(){this.subscription?.unsubscribe()}calcText(){const t=Math.floor(this.secondsRemaining%60),n=Math.floor(this.secondsRemaining/60%60),a=Math.floor(this.secondsRemaining/3600%24),f=Math.floor(this.secondsRemaining/86400);var u=`${this.padNumber(t)}s`;(n||a)&&(u=`${this.padNumber(n)}m ${u}`),a&&(u=`${a}h ${u}`),f&&(u=`${f}d ${u}`),this.text=u}padNumber(t){return String(t).padStart(2,"0")}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-countdown-timer"]],inputs:{expires:"expires"},decls:2,vars:2,consts:[[1,"text-white","rounded-sm","px-1","bg-opacity-80","backdrop-blur-sm",3,"ngClass"]],template:function(t,n){1&t&&(e.TgZ(0,"span",0),e._uU(1),e.qZA()),2&t&&(e.Q6J("ngClass",n.class),e.xp6(1),e.Oqu(n.text))},dependencies:[o.mk],encapsulation:2}),s})();const Z=function(s,i){return{"bg-blue-500/10":s,"border-blue-500":i}};function _(s,i){if(1&s&&(e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e._uU(7),e.qZA(),e.TgZ(8,"div",6),e._uU(9),e.qZA()(),e.TgZ(10,"div",7)(11,"div"),e._uU(12),e.qZA(),e._UZ(13,"app-countdown-timer",8),e.qZA()()()(),e.BQk()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(8,Z,t.missionTypes.indexOf(t.fissure.missionType)>=0,t.missionTypes.indexOf(t.fissure.missionType)>=0)),e.xp6(2),e.Q6J("src","https://raw.githubusercontent.com/WFCD/genesis-assets/master/svg/fissures/"+t.fissure.tier.toLowerCase()+".svg",e.LSH)("alt",t.fissure.tier),e.xp6(4),e.AsE("",t.fissure.tier," - ",t.fissure.missionType,""),e.xp6(2),e.Oqu(t.fissure.node),e.xp6(3),e.Oqu(t.fissure.enemy),e.xp6(1),e.Q6J("expires",t.fissure.expiry)}}let w=(()=>{class s{constructor(t){this.settingsService=t}ngOnInit(){}get missionTypes(){return this.settingsService.settings.highlightedFissures}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(b.g))},s.\u0275cmp=e.Xpm({type:s,selectors:[["fissure-card"]],inputs:{fissure:"fissure"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-slate-200/25","p-2","backdrop-blur","border","rounded","shadow-sm",3,"ngClass"],[1,"flex","items-center"],[1,"h-12","w-12",3,"src","alt"],[1,"pl-2","flex-1","overflow-hidden"],[1,"flex","justify-between","space-x-4"],[1,"whitespace-nowrap","overflow-hidden"],[1,"flex","justify-between"],[3,"expires"]],template:function(t,n){1&t&&e.YNc(0,_,14,11,"ng-container",0),2&t&&e.Q6J("ngIf",n.fissure)},dependencies:[o.mk,o.O5,m],encapsulation:2}),s})();function C(s,i){if(1&s&&(e.TgZ(0,"li"),e._UZ(1,"fissure-card",6),e.qZA()),2&s){const t=i.$implicit;e.xp6(1),e.Q6J("fissure",t)}}function y(s,i){if(1&s&&(e.TgZ(0,"ul",4),e.YNc(1,C,2,1,"li",5),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.fissuresFiltered)}}let A=(()=>{class s{constructor(){this.tab=localStorage.getItem("fissureView")||"all"}get fissuresFiltered(){if(!this.fissures)return[];switch(this.fissures.sort((t,n)=>t.tierNum-n.tierNum),this.tab){case"normal":return this.fissures.filter(t=>0==t.isHard&&0==t.isStorm);case"steelpath":return this.fissures.filter(t=>1==t.isHard);case"voidstorm":return this.fissures.filter(t=>1==t.isStorm);default:return this.fissures}}ngOnInit(){}selectTab(t){localStorage.setItem("fissureView",t),this.tab=t}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["hub-fissures"]],inputs:{fissures:"fissures"},decls:12,vars:5,consts:[[1,"text-center","text-lg","font-semibold"],[1,"mt-2","flex","justify-center","items-center","space-x-1"],["appButton","primary-outline","size","sm",3,"active","click"],["class","mt-2 max-h-[420px] overflow-y-auto grid gap-2 sm:grid-cols-2 grid-cols-1",4,"ngIf"],[1,"mt-2","max-h-[420px]","overflow-y-auto","grid","gap-2","sm:grid-cols-2","grid-cols-1"],[4,"ngFor","ngForOf"],[3,"fissure"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Fissures"),e.qZA(),e.TgZ(2,"div",1)(3,"button",2),e.NdJ("click",function(){return n.selectTab("normal")}),e._uU(4," Fissures "),e.qZA(),e.TgZ(5,"button",2),e.NdJ("click",function(){return n.selectTab("voidstorm")}),e._uU(6," Void Storm "),e.qZA(),e.TgZ(7,"button",2),e.NdJ("click",function(){return n.selectTab("steelpath")}),e._uU(8," Steel Path "),e.qZA(),e.TgZ(9,"button",2),e.NdJ("click",function(){return n.selectTab("all")}),e._uU(10," All "),e.qZA()(),e.YNc(11,y,2,1,"ul",3)),2&t&&(e.xp6(3),e.Q6J("active","normal"==n.tab),e.xp6(2),e.Q6J("active","voidstorm"==n.tab),e.xp6(2),e.Q6J("active","steelpath"==n.tab),e.xp6(2),e.Q6J("active","all"==n.tab),e.xp6(2),e.Q6J("ngIf",n.fissures))},dependencies:[o.sg,o.O5,v.H,w],encapsulation:2}),s})();function F(s,i){if(1&s&&(e.TgZ(0,"span"),e._uU(1,"Arrives at "),e.TgZ(2,"strong"),e._uU(3),e.qZA()()),2&s){const t=e.oxw(2);e.xp6(3),e.Oqu(t.voidTrader.location)}}function S(s,i){if(1&s&&(e.TgZ(0,"span"),e._uU(1,"Departs "),e.TgZ(2,"strong"),e._uU(3),e.qZA()()),2&s){const t=e.oxw(2);e.xp6(3),e.Oqu(t.voidTrader.location)}}function U(s,i){if(1&s&&(e.TgZ(0,"tr",10)(1,"td",10),e._uU(2),e.qZA(),e.TgZ(3,"td",11),e._uU(4),e.qZA(),e.TgZ(5,"td",11),e._uU(6),e.qZA()()),2&s){const t=i.$implicit;e.xp6(2),e.Oqu(t.item),e.xp6(2),e.Oqu(t.ducats),e.xp6(2),e.Oqu(t.credits.toLocaleString())}}function J(s,i){if(1&s&&(e.ynx(0),e.TgZ(1,"div",2),e.YNc(2,F,4,1,"span",1),e.YNc(3,S,4,1,"span",1),e._UZ(4,"app-countdown-timer",3),e.qZA(),e.TgZ(5,"table",4)(6,"thead",5)(7,"tr")(8,"th",6),e._uU(9,"Item"),e.qZA(),e.TgZ(10,"th",7),e._uU(11,"Ducats"),e.qZA(),e.TgZ(12,"th",7),e._uU(13,"Credits"),e.qZA()()(),e.TgZ(14,"tbody",8),e.YNc(15,U,7,3,"tr",9),e.qZA()(),e.BQk()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",!t.voidTrader.active),e.xp6(1),e.Q6J("ngIf",t.voidTrader.active),e.xp6(1),e.Q6J("expires",t.voidTrader.active?t.voidTrader.expiry:t.voidTrader.activation),e.xp6(11),e.Q6J("ngForOf",t.voidTrader.inventory)}}let O=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["hub-void-trader"]],inputs:{voidTrader:"voidTrader"},decls:3,vars:1,consts:[[1,"text-center","text-lg","font-semibold"],[4,"ngIf"],[1,"flex","justify-between"],[3,"expires"],[1,"border-collapse","table-auto","w-full","mt-2"],[1,"border-b"],[1,"text-left"],[1,"text-center"],[1,"max-h-[80px]","overflow-y-scroll"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"text-right"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Void Trader"),e.qZA(),e.YNc(2,J,16,4,"ng-container",1)),2&t&&(e.xp6(2),e.Q6J("ngIf",n.voidTrader))},dependencies:[o.sg,o.O5,m],encapsulation:2}),s})();const q=[{path:"",component:(()=>{class s{constructor(t){this.warframeApi=t}ngOnInit(){this.worldStateSubscription=this.warframeApi.worldState().subscribe(t=>{this.worldState=t})}ngOnDestroy(){this.worldStateSubscription?.unsubscribe()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(T))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-hub"]],decls:5,vars:2,consts:[[1,"p-4","grid","grid-cols-3","gap-4"],[1,"col-span-2"],["appCard","",3,"fissures"],["appCard","",3,"voidTrader"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"hub-fissures",2),e.qZA(),e.TgZ(3,"div"),e._UZ(4,"hub-void-trader",3),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("fissures",null==n.worldState?null:n.worldState.fissures),e.xp6(2),e.Q6J("voidTrader",null==n.worldState?null:n.worldState.voidTrader))},dependencies:[x.H,A,O],encapsulation:2}),s})()}];let Q=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.Bz.forChild(q),p.Bz]}),s})();var H=r(4466);let I=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[o.ez,Q,H.m]}),s})()}}]);