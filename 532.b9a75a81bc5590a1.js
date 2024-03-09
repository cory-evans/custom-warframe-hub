"use strict";(self.webpackChunkwarframe_hub=self.webpackChunkwarframe_hub||[]).push([[532],{9532:(V,d,r)=>{r.r(d),r.d(d,{HubModule:()=>M});var c=r(1368),m=r(192),h=r(5657),g=r(3616),t=r(4496),p=r(4548),y=r(6020),v=r(7048);let C=(()=>{class e{constructor(s){this.http=s}get(s){for(;s.startsWith("/");)s=s.slice(1);return this.http.get(`https://api.warframestat.us/${s}`)}worldState(s=60){return(0,p.k)(0,1e3*s).pipe((0,y.m)(i=>this.get("pc/")))}static#t=this.\u0275fac=function(i){return new(i||e)(t.CoB(v.KK))};static#e=this.\u0275prov=t.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var b=r(1888),T=r(2840),I=r(2496);let f=(()=>{class e{calcSecondsRemaining(){if(this.expires&&!this.expiresAsDate&&(this.expiresAsDate=new Date(this.expires)),!this.expiresAsDate)return 0;const s=new Date;return this.secondsRemaining=Math.floor(this.expiresAsDate.getTime()/1e3)-Math.floor(s.getTime()/1e3),this.secondsRemaining}constructor(){this.text="",this.class="",this.secondsRemaining=0}ngOnInit(){this.subscription=(0,p.k)(0,1e3).subscribe(()=>{const s=this.calcSecondsRemaining();if(s<0)return this.text="expired",void(this.class="bg-blue-600");this.calcText(),this.class=s<300?"bg-red-600":s<1500?"bg-yellow-600":"bg-green-700"})}ngOnDestroy(){this.subscription?.unsubscribe()}calcText(){const s=Math.floor(this.secondsRemaining%60),i=Math.floor(this.secondsRemaining/60%60),n=Math.floor(this.secondsRemaining/3600%24),a=Math.floor(this.secondsRemaining/86400);var l=`${this.padNumber(s)}s`;(i||n)&&(l=`${this.padNumber(i)}m ${l}`),n&&(l=`${n}h ${l}`),a&&(l=`${a}d ${l}`),this.text=l}padNumber(s){return String(s).padStart(2,"0")}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-countdown-timer"]],inputs:{expires:"expires"},decls:2,vars:2,consts:[[1,"text-white","rounded-sm","px-1","bg-opacity-80","backdrop-blur-sm",3,"ngClass"]],template:function(i,n){1&i&&(t.I0R(0,"span",0),t.OEk(1),t.C$Y()),2&i&&(t.E7m("ngClass",n.class),t.yG2(),t.cNF(n.text))},dependencies:[c.QF],encapsulation:2})}return e})();const w=(e,o)=>({"bg-blue-500/10":e,"border-blue-500":o});function x(e,o){if(1&e&&(t.SAx(0),t.I0R(1,"div",1)(2,"div",2),t.wR5(3,"img",3),t.I0R(4,"div",4)(5,"div",5)(6,"div",6),t.OEk(7),t.C$Y(),t.I0R(8,"div",6),t.OEk(9),t.C$Y()(),t.I0R(10,"div",7)(11,"div"),t.OEk(12),t.C$Y(),t.wR5(13,"app-countdown-timer",8),t.C$Y()()()(),t.k70()),2&e){const s=t.GaO();t.yG2(),t.E7m("ngClass",t.IBC(8,w,s.missionTypes.indexOf(s.fissure.missionType)>=0,s.missionTypes.indexOf(s.fissure.missionType)>=0)),t.yG2(2),t.E7m("src","https://raw.githubusercontent.com/WFCD/genesis-assets/master/svg/fissures/"+s.fissure.tier.toLowerCase()+".svg",t.K6U)("alt",s.fissure.tier),t.yG2(4),t.CAO("",s.fissure.tier," - ",s.fissure.missionType,""),t.yG2(2),t.cNF(s.fissure.node),t.yG2(3),t.cNF(s.fissure.enemy),t.yG2(),t.E7m("expires",s.fissure.expiry)}}let R=(()=>{class e{constructor(s){this.settingsService=s}ngOnInit(){}get missionTypes(){return this.settingsService.settings.highlightedFissures}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(I.Y))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["fissure-card"]],inputs:{fissure:"fissure"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-slate-200/25","p-2","backdrop-blur","border","rounded","shadow-sm",3,"ngClass"],[1,"flex","items-center"],[1,"h-12","w-12",3,"src","alt"],[1,"pl-2","flex-1","overflow-hidden"],[1,"flex","justify-between","space-x-4"],[1,"whitespace-nowrap","overflow-hidden"],[1,"flex","justify-between"],[3,"expires"]],template:function(i,n){1&i&&t.yuY(0,x,14,11,"ng-container",0),2&i&&t.E7m("ngIf",n.fissure)},dependencies:[c.QF,c.u_,f],encapsulation:2})}return e})();function F(e,o){if(1&e&&(t.I0R(0,"li"),t.wR5(1,"fissure-card",6),t.C$Y()),2&e){const s=o.$implicit;t.yG2(),t.E7m("fissure",s)}}function $(e,o){if(1&e&&(t.I0R(0,"ul",4),t.yuY(1,F,2,1,"li",5),t.C$Y()),2&e){const s=t.GaO();t.yG2(),t.E7m("ngForOf",s.fissuresFiltered())}}let E=(()=>{class e{constructor(){this.fissures=t.YhN.required(),this.tab=(0,t.OCB)("all"),this.fissuresFiltered=(0,t.S6b)(()=>{const i=this.fissures();switch(i.sort((n,a)=>n.tierNum-a.tierNum),this.tab()){case"normal":return i.filter(n=>0==n.isHard&&0==n.isStorm);case"steelpath":return i.filter(n=>1==n.isHard);case"voidstorm":return i.filter(n=>1==n.isStorm);default:return i}});const s=localStorage.getItem("fissureView");this.tab.set(s||"all")}selectTab(s){localStorage.setItem("fissureView",s),this.tab.set(s)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["hub-fissures"]],inputs:{fissures:[t.Wk5.SignalBased,"fissures"]},decls:12,vars:5,consts:[[1,"text-center","text-lg","font-semibold"],[1,"mt-2","flex","justify-center","items-center","space-x-1"],["appButton","primary-outline","size","sm",3,"active","click"],["class","mt-2 max-h-[420px] overflow-y-auto grid gap-2 sm:grid-cols-2 grid-cols-1",4,"ngIf"],[1,"mt-2","max-h-[420px]","overflow-y-auto","grid","gap-2","sm:grid-cols-2","grid-cols-1"],[4,"ngFor","ngForOf"],[3,"fissure"]],template:function(i,n){1&i&&(t.I0R(0,"h1",0),t.OEk(1,"Fissures"),t.C$Y(),t.I0R(2,"div",1)(3,"button",2),t.qCj("click",function(){return n.selectTab("normal")}),t.OEk(4," Fissures "),t.C$Y(),t.I0R(5,"button",2),t.qCj("click",function(){return n.selectTab("voidstorm")}),t.OEk(6," Void Storm "),t.C$Y(),t.I0R(7,"button",2),t.qCj("click",function(){return n.selectTab("steelpath")}),t.OEk(8," Steel Path "),t.C$Y(),t.I0R(9,"button",2),t.qCj("click",function(){return n.selectTab("all")}),t.OEk(10," All "),t.C$Y()(),t.yuY(11,$,2,1,"ul",3)),2&i&&(t.yG2(3),t.E7m("active","normal"==n.tab()),t.yG2(2),t.E7m("active","voidstorm"==n.tab()),t.yG2(2),t.E7m("active","steelpath"==n.tab()),t.yG2(2),t.E7m("active","all"==n.tab()),t.yG2(2),t.E7m("ngIf",n.fissures))},dependencies:[c.ay,c.u_,T.A,R],encapsulation:2})}return e})();function Y(e,o){if(1&e&&(t.I0R(0,"span"),t.OEk(1,"Arrives at "),t.I0R(2,"strong"),t.OEk(3),t.C$Y()()),2&e){const s=t.GaO();t.yG2(3),t.cNF(s.voidTrader().location)}}function O(e,o){if(1&e&&(t.I0R(0,"span"),t.OEk(1,"Departs "),t.I0R(2,"strong"),t.OEk(3),t.C$Y()()),2&e){const s=t.GaO();t.yG2(3),t.cNF(s.voidTrader().location)}}function G(e,o){if(1&e&&(t.I0R(0,"tr",10)(1,"td",10),t.OEk(2),t.C$Y(),t.I0R(3,"td",11),t.OEk(4),t.C$Y(),t.I0R(5,"td",11),t.OEk(6),t.wVc(7,"number"),t.C$Y()()),2&e){const s=o.$implicit;t.yG2(2),t.cNF(s.item),t.yG2(2),t.cNF(s.ducats),t.yG2(2),t.cNF(t.kDX(7,3,s.credits))}}let k=(()=>{class e{constructor(){this.voidTrader=t.YhN.required(),this.inventory=(0,t.S6b)(()=>this.voidTrader().inventory.sort((i,n)=>i.item.localeCompare(n.item)))}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["hub-void-trader"]],inputs:{voidTrader:[t.Wk5.SignalBased,"voidTrader"]},decls:17,vars:4,consts:[[1,"text-center","text-lg","font-semibold"],[1,"flex","justify-between"],[4,"ngIf"],[3,"expires"],[1,"border-collapse","table-auto","w-full","mt-2"],[1,"border-b"],[1,"text-left"],[1,"text-center"],[1,"max-h-[80px]","overflow-y-scroll"],["class","",4,"ngFor","ngForOf"],[1,""],[1,"text-right"]],template:function(i,n){1&i&&(t.I0R(0,"h1",0),t.OEk(1,"Void Trader"),t.C$Y(),t.I0R(2,"div",1),t.yuY(3,Y,4,1,"span",2)(4,O,4,1,"span",2),t.wR5(5,"app-countdown-timer",3),t.C$Y(),t.I0R(6,"table",4)(7,"thead",5)(8,"tr")(9,"th",6),t.OEk(10,"Item"),t.C$Y(),t.I0R(11,"th",7),t.OEk(12,"Ducats"),t.C$Y(),t.I0R(13,"th",7),t.OEk(14,"Credits"),t.C$Y()()(),t.I0R(15,"tbody",8),t.yuY(16,G,8,5,"tr",9),t.C$Y()()),2&i&&(t.yG2(3),t.E7m("ngIf",!n.voidTrader().active),t.yG2(),t.E7m("ngIf",n.voidTrader().active),t.yG2(),t.E7m("expires",n.voidTrader().active?n.voidTrader().expiry:n.voidTrader().activation),t.yG2(11),t.E7m("ngForOf",n.inventory()))},dependencies:[c.ay,c.u_,f,c.hl],encapsulation:2})}return e})();function S(e,o){1&e&&(t.I0R(0,"div",1)(1,"div",2),t.wR5(2,"hub-fissures",3),t.C$Y(),t.I0R(3,"div"),t.wR5(4,"hub-void-trader",4),t.C$Y()()),2&e&&(t.yG2(2),t.E7m("fissures",o.fissures),t.yG2(2),t.E7m("voidTrader",o.voidTrader))}function _(e,o){}function N(e,o){1&e&&t.yuY(0,_,0,0,"ng-template",null,5,t.gJz)}const D=[{path:"",component:(()=>{class e{constructor(s){this.warframeApi=s,this._destroyed$=new h.E,this.worldState$=this.warframeApi.worldState().pipe((0,g.a)(this._destroyed$))}ngOnDestroy(){this._destroyed$.next(),this._destroyed$.complete()}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(C))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-hub"]],decls:3,vars:3,consts:[["class","p-4 grid grid-cols-3 gap-4"],[1,"p-4","grid","grid-cols-3","gap-4"],[1,"col-span-2"],["appCard","",3,"fissures"],["appCard","",3,"voidTrader"],["loading",""]],template:function(i,n){if(1&i&&(t.yuY(0,S,5,2,"div",0),t.wVc(1,"async"),t.yuY(2,N,2,0)),2&i){let a;t.C0Y(0,(a=t.kDX(1,1,n.worldState$))?0:2,a)}},dependencies:[b.K,E,k,c.a],encapsulation:2})}return e})()}];let A=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.a4G({type:e});static#s=this.\u0275inj=t.s3X({imports:[m.qQ.forChild(D),m.qQ]})}return e})();var H=r(1455);let M=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.a4G({type:e});static#s=this.\u0275inj=t.s3X({imports:[c.MD,A,H.k]})}return e})()}}]);