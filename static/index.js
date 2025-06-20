"use strict";(()=>{var kl=Object.defineProperty;var Uu=Object.getOwnPropertyDescriptor;var Hu=(t,e)=>{for(var r in e)kl(t,r,{get:e[r],enumerable:!0})};var k=(t,e,r,i)=>{for(var o=i>1?void 0:i?Uu(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(o=(i?s(e,r,o):s(o))||o);return i&&o&&kl(e,r,o),o};function c(t,e,r,i){var o=arguments.length,n=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(o<3?s(n):o>3?s(e,r,n):s(e,r))||n);return o>3&&n&&Object.defineProperty(e,r,n),n}var R=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var uo=globalThis,po=uo.ShadowRoot&&(uo.ShadyCSS===void 0||uo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ss=Symbol(),Sl=new WeakMap,hi=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(po&&e===void 0){let i=r!==void 0&&r.length===1;i&&(e=Sl.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Sl.set(r,e))}return e}toString(){return this.cssText}},Tl=t=>new hi(typeof t=="string"?t:t+"",void 0,ss),T=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1],t[0]);return new hi(r,t,ss)},Al=(t,e)=>{if(po)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let i=document.createElement("style"),o=uo.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}},as=po?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let i of e.cssRules)r+=i.cssText;return Tl(r)})(t):t;var{is:Bu,defineProperty:ju,getOwnPropertyDescriptor:Wu,getOwnPropertyNames:qu,getOwnPropertySymbols:Ku,getPrototypeOf:Gu}=Object,ho=globalThis,Nl=ho.trustedTypes,Yu=Nl?Nl.emptyScript:"",Xu=ho.reactiveElementPolyfillSupport,fi=(t,e)=>t,mi={toAttribute(t,e){switch(e){case Boolean:t=t?Yu:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},fo=(t,e)=>!Bu(t,e),Ol={attribute:!0,type:String,converter:mi,reflect:!1,useDefault:!1,hasChanged:fo};Symbol.metadata??=Symbol("metadata"),ho.litPropertyMetadata??=new WeakMap;var Dt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ol){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,r);o!==void 0&&ju(this.prototype,e,o)}}static getPropertyDescriptor(e,r,i){let{get:o,set:n}=Wu(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){let a=o?.call(this);n?.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ol}static _$Ei(){if(this.hasOwnProperty(fi("elementProperties")))return;let e=Gu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fi("properties"))){let r=this.properties,i=[...qu(r),...Ku(r)];for(let o of i)this.createProperty(o,r[o])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let o of i)r.unshift(as(o))}else e!==void 0&&r.push(as(e));return r}static _$Eu(e,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Al(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:mi).toAttribute(r,i.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,r){let i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let n=i.getPropertyOptions(o),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:mi;this._$Em=o,this[o]=s.fromAttribute(r,n.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){let o=this.constructor,n=this[e];if(i??=o.getPropertyOptions(e),!((i.hasChanged??fo)(n,r)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:o,wrapped:n},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??r??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,n]of i){let{wrapped:s}=n,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Dt.elementStyles=[],Dt.shadowRootOptions={mode:"open"},Dt[fi("elementProperties")]=new Map,Dt[fi("finalized")]=new Map,Xu?.({ReactiveElement:Dt}),(ho.reactiveElementVersions??=[]).push("2.1.0");var Ju={attribute:!0,type:String,converter:mi,reflect:!1,hasChanged:fo},Zu=(t=Ju,e,r)=>{let{kind:i,metadata:o}=r,n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(r.name,t),i==="accessor"){let{name:s}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(i==="setter"){let{name:s}=r;return function(a){let l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,r)=>typeof r=="object"?Zu(t,e,r):((i,o,n)=>{let s=o.hasOwnProperty(n);return o.constructor.createProperty(n,i),s?Object.getOwnPropertyDescriptor(o,n):void 0})(t,e,r)}function J(t){return p({...t,state:!0,attribute:!1})}var pt=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function M(t,e){return(r,i,o)=>{let n=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof i=="object"?r:o??(()=>{let l=Symbol();return{get(){return this[l]},set(h){this[l]=h}}})();return pt(r,i,{get(){let l=s.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return pt(r,i,{get(){return n(this)}})}}var Qu;function Qt(t){return(e,r)=>pt(e,r,{get(){return(this.renderRoot??(Qu??=document.createDocumentFragment())).querySelectorAll(t)}})}function ls(t){return(e,r)=>pt(e,r,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function Ne(t){return(e,r)=>{let{slot:i,selector:o}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return pt(e,r,{get(){let s=this.renderRoot?.querySelector(n),a=s?.assignedElements(t)??[];return o===void 0?a:a.filter(l=>l.matches(o))}})}}function mo(t){return(e,r)=>{let{slot:i}=t??{},o="slot"+(i?`[name=${i}]`:":not([name])");return pt(e,r,{get(){return this.renderRoot?.querySelector(o)?.assignedNodes(t)??[]}})}}var ds=globalThis,vo=ds.trustedTypes,Il=vo?vo.createPolicy("lit-html",{createHTML:t=>t}):void 0,us="$lit$",Lt=`lit$${Math.random().toFixed(9).slice(2)}$`,ps="?"+Lt,ep=`<${ps}>`,br=document,gi=()=>br.createComment(""),bi=t=>t===null||typeof t!="object"&&typeof t!="function",hs=Array.isArray,Ml=t=>hs(t)||typeof t?.[Symbol.iterator]=="function",cs=`[ 	
\f\r]`,vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$l=/-->/g,Rl=/>/g,vr=RegExp(`>|${cs}(?:([^\\s"'>=/]+)(${cs}*=${cs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dl=/'/g,Ll=/"/g,Pl=/^(?:script|style|textarea|title)$/i,fs=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),v=fs(1),wo=fs(2),Fl=fs(3),Me=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Vl=new WeakMap,gr=br.createTreeWalker(br,129);function zl(t,e){if(!hs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Il!==void 0?Il.createHTML(e):e}var Ul=(t,e)=>{let r=t.length-1,i=[],o,n=e===2?"<svg>":e===3?"<math>":"",s=vi;for(let a=0;a<r;a++){let l=t[a],h,u,f=-1,b=0;for(;b<l.length&&(s.lastIndex=b,u=s.exec(l),u!==null);)b=s.lastIndex,s===vi?u[1]==="!--"?s=$l:u[1]!==void 0?s=Rl:u[2]!==void 0?(Pl.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=vr):u[3]!==void 0&&(s=vr):s===vr?u[0]===">"?(s=o??vi,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?vr:u[3]==='"'?Ll:Dl):s===Ll||s===Dl?s=vr:s===$l||s===Rl?s=vi:(s=vr,o=void 0);let y=s===vr&&t[a+1].startsWith("/>")?" ":"";n+=s===vi?l+ep:f>=0?(i.push(h),l.slice(0,f)+us+l.slice(f)+Lt+y):l+Lt+(f===-2?a:y)}return[zl(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},yi=class t{constructor({strings:e,_$litType$:r},i){let o;this.parts=[];let n=0,s=0,a=e.length-1,l=this.parts,[h,u]=Ul(e,r);if(this.el=t.createElement(h,i),gr.currentNode=this.el.content,r===2||r===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=gr.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let f of o.getAttributeNames())if(f.endsWith(us)){let b=u[s++],y=o.getAttribute(f).split(Lt),D=/([.?@])?(.*)/.exec(b);l.push({type:1,index:n,name:D[2],strings:y,ctor:D[1]==="."?bo:D[1]==="?"?yo:D[1]==="@"?xo:xr}),o.removeAttribute(f)}else f.startsWith(Lt)&&(l.push({type:6,index:n}),o.removeAttribute(f));if(Pl.test(o.tagName)){let f=o.textContent.split(Lt),b=f.length-1;if(b>0){o.textContent=vo?vo.emptyScript:"";for(let y=0;y<b;y++)o.append(f[y],gi()),gr.nextNode(),l.push({type:2,index:++n});o.append(f[b],gi())}}}else if(o.nodeType===8)if(o.data===ps)l.push({type:2,index:n});else{let f=-1;for(;(f=o.data.indexOf(Lt,f+1))!==-1;)l.push({type:7,index:n}),f+=Lt.length-1}n++}}static createElement(e,r){let i=br.createElement("template");return i.innerHTML=e,i}};function yr(t,e,r=t,i){if(e===Me)return e;let o=i!==void 0?r._$Co?.[i]:r._$Cl,n=bi(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(t),o._$AT(t,r,i)),i!==void 0?(r._$Co??=[])[i]=o:r._$Cl=o),o!==void 0&&(e=yr(t,o._$AS(t,e.values),o,i)),e}var go=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:i}=this._$AD,o=(e?.creationScope??br).importNode(r,!0);gr.currentNode=o;let n=gr.nextNode(),s=0,a=0,l=i[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Pr(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new _o(n,this,e)),this._$AV.push(h),l=i[++a]}s!==l?.index&&(n=gr.nextNode(),s++)}return gr.currentNode=br,o}p(e){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}},Pr=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,i,o){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=yr(this,e,r),bi(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ml(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&bi(this._$AH)?this._$AA.nextSibling.data=e:this.T(br.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yi.createElement(zl(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(r);else{let n=new go(o,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Vl.get(e.strings);return r===void 0&&Vl.set(e.strings,r=new yi(e)),r}k(e){hs(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,o=0;for(let n of e)o===r.length?r.push(i=new t(this.O(gi()),this.O(gi()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,o,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(e,r=this,i,o){let n=this.strings,s=!1;if(n===void 0)e=yr(this,e,r,0),s=!bi(e)||e!==this._$AH&&e!==Me,s&&(this._$AH=e);else{let a=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=yr(this,a[i+l],r,l),h===Me&&(h=this._$AH[l]),s||=!bi(h)||h!==this._$AH[l],h===x?e=x:e!==x&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}s&&!o&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bo=class extends xr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},yo=class extends xr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},xo=class extends xr{constructor(e,r,i,o,n){super(e,r,i,o,n),this.type=5}_$AI(e,r=this){if((e=yr(this,e,r,0)??x)===Me)return;let i=this._$AH,o=e===x&&i!==x||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==x&&(i===x||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_o=class{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yr(this,e)}},Hl={M:us,P:Lt,A:ps,C:1,L:Ul,R:go,D:Ml,V:yr,I:Pr,H:xr,N:yo,U:xo,B:bo,F:_o},tp=ds.litHtmlPolyfillSupport;tp?.(yi,Pr),(ds.litHtmlVersions??=[]).push("3.3.0");var Fr=(t,e,r)=>{let i=r?.renderBefore??e,o=i._$litPart$;if(o===void 0){let n=r?.renderBefore??null;i._$litPart$=o=new Pr(e.insertBefore(gi(),n),n,void 0,r??{})}return o._$AI(t),o};var ms=globalThis,O=class extends Dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Me}};O._$litElement$=!0,O.finalized=!0,ms.litElementHydrateSupport?.({LitElement:O});var rp=ms.litElementPolyfillSupport;rp?.({LitElement:O});(ms.litElementVersions??=[]).push("4.2.0");var Qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=t=>(...e)=>({_$litDirective$:t,values:e}),bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var ne=Vt(class extends bt{constructor(t){if(super(t),t.type!==Qe.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let r=t.element.classList;for(let i of this.st)i in e||(r.remove(i),this.st.delete(i));for(let i in e){let o=!!e[i];o===this.st.has(i)||this.nt?.has(i)||(o?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Me}});var vs=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],ip=vs.map(gs);function Eo(t){return ip.includes(t)}function gs(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}var Co=Symbol("privateIgnoreAttributeChangesFor");function we(t){var e;if(!1)return t;class r extends t{constructor(){super(...arguments),this[e]=new Set}attributeChangedCallback(o,n,s){if(!Eo(o)){super.attributeChangedCallback(o,n,s);return}if(this[Co].has(o))return;this[Co].add(o),this.removeAttribute(o),this[Co].delete(o);let a=ys(o);s===null?delete this.dataset[a]:this.dataset[a]=s,this.requestUpdate(ys(o),n)}getAttribute(o){return Eo(o)?super.getAttribute(bs(o)):super.getAttribute(o)}removeAttribute(o){super.removeAttribute(o),Eo(o)&&(super.removeAttribute(bs(o)),this.requestUpdate())}}return e=Co,op(r),r}function op(t){for(let e of vs){let r=gs(e),i=bs(r),o=ys(r);t.createProperty(e,{attribute:r,noAccessor:!0}),t.createProperty(Symbol(i),{attribute:i,noAccessor:!0}),Object.defineProperty(t.prototype,e,{configurable:!0,enumerable:!0,get(){return this.dataset[o]??null},set(n){let s=this.dataset[o]??null;n!==s&&(n===null?delete this.dataset[o]:this.dataset[o]=n,this.requestUpdate(e,s))}})}}function bs(t){return`data-${t}`}function ys(t){return t.replace(/-\w/,e=>e[1].toUpperCase())}var np=we(O),er=class extends np{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:e}=this;return v`
      <div
        class="progress ${ne(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||x}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?x:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}};c([p({type:Number})],er.prototype,"value",void 0);c([p({type:Number})],er.prototype,"max",void 0);c([p({type:Boolean})],er.prototype,"indeterminate",void 0);c([p({type:Boolean,attribute:"four-color"})],er.prototype,"fourColor",void 0);var ko=class extends er{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){let e=(1-this.value/this.max)*100;return v`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${e}></circle>
      </svg>
    `}renderIndeterminateContainer(){return v` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}};var Bl=T`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;var xs=class extends ko{};xs.styles=[Bl];xs=c([R("md-circular-progress")],xs);var jl="/run-macro",Wl={aiConfig:"smart",checkedLanguages:[],enableEarcons:!1,expandAtOrigin:!1,initialPhrases:[],persona:"",sentenceSmallMargin:!1,ttsVoice:"",voicePitch:0,voiceSpeakingRate:0},ql=4;function sp(t){return t=t.replaceAll(`\\
`,""),t.split(`
`).map(e=>e.trim()).filter(e=>e.match(/^[0-9]+\./)).map(e=>e.replace(/^\d+\.\s?/,""))}var So=class t{constructor(){this.fetchAbortController=null}abortFetch(){this.fetchAbortController?.abort()}async fetchSuggestions(e,r,i,o){this.fetchAbortController?.abort(),this.fetchAbortController=new AbortController;let n=this.fetchAbortController.signal,s=o.wordMacroId,l={language:r,num:"5",text:e,persona:o.persona},h=t.fetchSuggestion(l,n,s,i),u=o.sentenceMacroId,f=t.fetchSuggestion(l,n,u,i);return Promise.all([f,h]).catch(y=>(y instanceof DOMException?console.log("Request was aborted by user:",l):alert(`Failed to access Gemini server or ${y||"something"}.`),null))}static async fetchSuggestion(e,r,i,o,n=0){let s=await t.fetchMacro(e,r,i,o,n);return sp(s)}static async fetchMacro(e,r,i,o,n){console.log(`macroId: ${i}, model: ${o}`);let s=new FormData;s.append("id",i),s.append("userInputs",JSON.stringify(e)),s.append("temperature",`${n}`),s.append("model_id",o),s.append("_csrf_token",document.body.dataset.csrfToken||"");let a=h=>{if(!(h instanceof Object&&"messages"in h))throw new Error("API response doesn't have messages");return!Array.isArray(h.messages)||h.messages.length===0?"":h.messages[0].text};return fetch(jl,{method:"POST",body:s,signal:r}).then(h=>h.json()).then(a)}};var _r=class extends O{constructor(){super(...arguments);this.label="";this.active=!1}render(){return v`<button>${this.label}</button>`}};_r.styles=T`
    :host {
      display: inline-block;
    }

    :host([active]) button,
    button:focus,
    button:hover {
      background: var(--color-primary, yellow);
    }

    :host([rounded]) button {
      border-color: #f28b82;
      border-radius: 5vh;
    }

    :host([emotion]) button {
      border-color: #f98ec9;
    }

    button {
      background: var(--color-surface, white);
      border-radius: 0.5vh;
      border: solid 3px #8ab4f8;
      color: var(--color-on-surface);
      cursor: pointer;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      font-size: min(5vh, 3rem);
      padding: 0 1rem;
    }
  `,k([p({type:String})],_r.prototype,"label",2),k([p({type:Boolean})],_r.prototype,"active",2),_r=k([R("pv-button")],_r);var ap=Object.defineProperty,lp=(t,e,r)=>e in t?ap(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_s=(t,e,r)=>(lp(t,typeof e!="symbol"?e+"":e,r),r),cp=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},ws=(t,e)=>{if(Object(e)!==e)throw TypeError('Cannot use the "in" operator on this value');return t.has(e)},To=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Kl=(t,e,r)=>(cp(t,e,"access private method"),r);function Gl(t,e){return Object.is(t,e)}var Ee=null,xi=!1,Ao=1,No=Symbol("SIGNAL");function zr(t){let e=Ee;return Ee=t,e}function dp(){return Ee}function up(){return xi}var Ts={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Oo(t){if(xi)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Ee===null)return;Ee.consumerOnSignalRead(t);let e=Ee.nextProducerIndex++;if(Ur(Ee),e<Ee.producerNode.length&&Ee.producerNode[e]!==t&&ks(Ee)){let r=Ee.producerNode[e];Io(r,Ee.producerIndexOfThis[e])}Ee.producerNode[e]!==t&&(Ee.producerNode[e]=t,Ee.producerIndexOfThis[e]=ks(Ee)?Jl(t,Ee,e):0),Ee.producerLastReadVersion[e]=t.version}function pp(){Ao++}function Yl(t){if(!(!t.dirty&&t.lastCleanEpoch===Ao)){if(!t.producerMustRecompute(t)&&!gp(t)){t.dirty=!1,t.lastCleanEpoch=Ao;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Ao}}function Xl(t){if(t.liveConsumerNode===void 0)return;let e=xi;xi=!0;try{for(let r of t.liveConsumerNode)r.dirty||fp(r)}finally{xi=e}}function hp(){return Ee?.consumerAllowSignalWrites!==!1}function fp(t){var e;t.dirty=!0,Xl(t),(e=t.consumerMarkedDirty)==null||e.call(t.wrapper??t)}function mp(t){return t&&(t.nextProducerIndex=0),zr(t)}function vp(t,e){if(zr(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(ks(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)Io(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function gp(t){Ur(t);for(let e=0;e<t.producerNode.length;e++){let r=t.producerNode[e],i=t.producerLastReadVersion[e];if(i!==r.version||(Yl(r),i!==r.version))return!0}return!1}function Jl(t,e,r){var i;if(As(t),Ur(t),t.liveConsumerNode.length===0){(i=t.watched)==null||i.call(t.wrapper);for(let o=0;o<t.producerNode.length;o++)t.producerIndexOfThis[o]=Jl(t.producerNode[o],t,o)}return t.liveConsumerIndexOfThis.push(r),t.liveConsumerNode.push(e)-1}function Io(t,e){var r;if(As(t),Ur(t),typeof ngDevMode<"u"&&ngDevMode&&e>=t.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${e} is out of bounds of ${t.liveConsumerNode.length} consumers)`);if(t.liveConsumerNode.length===1){(r=t.unwatched)==null||r.call(t.wrapper);for(let o=0;o<t.producerNode.length;o++)Io(t.producerNode[o],t.producerIndexOfThis[o])}let i=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[i],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[i],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let o=t.liveConsumerIndexOfThis[e],n=t.liveConsumerNode[e];Ur(n),n.producerIndexOfThis[o]=e}}function ks(t){var e;return t.consumerIsAlwaysLive||(((e=t?.liveConsumerNode)==null?void 0:e.length)??0)>0}function Ur(t){t.producerNode??(t.producerNode=[]),t.producerIndexOfThis??(t.producerIndexOfThis=[]),t.producerLastReadVersion??(t.producerLastReadVersion=[])}function As(t){t.liveConsumerNode??(t.liveConsumerNode=[]),t.liveConsumerIndexOfThis??(t.liveConsumerIndexOfThis=[])}function Zl(t){if(Yl(t),Oo(t),t.value===Ss)throw t.error;return t.value}function bp(t){let e=Object.create(yp);e.computation=t;let r=()=>Zl(e);return r[No]=e,r}var Es=Symbol("UNSET"),Cs=Symbol("COMPUTING"),Ss=Symbol("ERRORED"),yp={...Ts,value:Es,dirty:!0,error:null,equal:Gl,producerMustRecompute(t){return t.value===Es||t.value===Cs},producerRecomputeValue(t){if(t.value===Cs)throw new Error("Detected cycle in computations.");let e=t.value;t.value=Cs;let r=mp(t),i,o=!1;try{i=t.computation.call(t.wrapper),o=e!==Es&&e!==Ss&&t.equal.call(t.wrapper,e,i)}catch(n){i=Ss,t.error=n}finally{vp(t,r)}if(o){t.value=e;return}t.value=i,t.version++}};function xp(){throw new Error}var _p=xp;function wp(){_p()}function Ep(t){let e=Object.create(Sp);e.value=t;let r=()=>(Oo(e),e.value);return r[No]=e,r}function Cp(){return Oo(this),this.value}function kp(t,e){hp()||wp(),t.equal.call(t.wrapper,t.value,e)||(t.value=e,Tp(t))}var Sp={...Ts,equal:Gl,value:void 0};function Tp(t){t.version++,pp(),Xl(t)}var $e=Symbol("node"),ke;(t=>{var e,r,i,o,n,s;class a{constructor(u,f={}){To(this,r),_s(this,e);let y=Ep(u)[No];if(this[$e]=y,y.wrapper=this,f){let D=f.equals;D&&(y.equal=D),y.watched=f[t.subtle.watched],y.unwatched=f[t.subtle.unwatched]}}get(){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Cp.call(this[$e])}set(u){if(!(0,t.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(up())throw new Error("Writes to signals not permitted during Watcher callback");let f=this[$e];kp(f,u)}}e=$e,r=new WeakSet,i=function(){},t.isState=h=>typeof h=="object"&&ws(r,h),t.State=a;class l{constructor(u,f){To(this,n),_s(this,o);let y=bp(u)[No];if(y.consumerAllowSignalWrites=!0,this[$e]=y,y.wrapper=this,f){let D=f.equals;D&&(y.equal=D),y.watched=f[t.subtle.watched],y.unwatched=f[t.subtle.unwatched]}}get(){if(!(0,t.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Zl(this[$e])}}o=$e,n=new WeakSet,s=function(){},t.isComputed=h=>typeof h=="object"&&ws(n,h),t.Computed=l,(h=>{var u,f,b,y,D;function L(H){let K,F=null;try{F=zr(null),K=H()}finally{zr(F)}return K}h.untrack=L;function W(H){var K;if(!(0,t.isComputed)(H)&&!(0,t.isWatcher)(H))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((K=H[$e].producerNode)==null?void 0:K.map(F=>F.wrapper))??[]}h.introspectSources=W;function j(H){var K;if(!(0,t.isComputed)(H)&&!(0,t.isState)(H))throw new TypeError("Called introspectSinks without a Signal argument");return((K=H[$e].liveConsumerNode)==null?void 0:K.map(F=>F.wrapper))??[]}h.introspectSinks=j;function U(H){if(!(0,t.isComputed)(H)&&!(0,t.isState)(H))throw new TypeError("Called hasSinks without a Signal argument");let K=H[$e].liveConsumerNode;return K?K.length>0:!1}h.hasSinks=U;function q(H){if(!(0,t.isComputed)(H)&&!(0,t.isWatcher)(H))throw new TypeError("Called hasSources without a Computed or Watcher argument");let K=H[$e].producerNode;return K?K.length>0:!1}h.hasSources=q;class P{constructor(K){To(this,f),To(this,y),_s(this,u);let F=Object.create(Ts);F.wrapper=this,F.consumerMarkedDirty=K,F.consumerIsAlwaysLive=!0,F.consumerAllowSignalWrites=!1,F.producerNode=[],this[$e]=F}watch(...K){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Kl(this,y,D).call(this,K);let F=this[$e];F.dirty=!1;let ae=zr(F);for(let Te of K)Oo(Te[$e]);zr(ae)}unwatch(...K){if(!(0,t.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Kl(this,y,D).call(this,K);let F=this[$e];Ur(F);for(let ae=F.producerNode.length-1;ae>=0;ae--)if(K.includes(F.producerNode[ae].wrapper)){Io(F.producerNode[ae],F.producerIndexOfThis[ae]);let Te=F.producerNode.length-1;if(F.producerNode[ae]=F.producerNode[Te],F.producerIndexOfThis[ae]=F.producerIndexOfThis[Te],F.producerNode.length--,F.producerIndexOfThis.length--,F.nextProducerIndex--,ae<F.producerNode.length){let _e=F.producerIndexOfThis[ae],lt=F.producerNode[ae];As(lt),lt.liveConsumerIndexOfThis[_e]=ae}}}getPending(){if(!(0,t.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[$e].producerNode.filter(F=>F.dirty).map(F=>F.wrapper)}}u=$e,f=new WeakSet,b=function(){},y=new WeakSet,D=function(H){for(let K of H)if(!(0,t.isComputed)(K)&&!(0,t.isState)(K))throw new TypeError("Called watch/unwatch without a Computed or State argument")},t.isWatcher=H=>ws(f,H),h.Watcher=P;function S(){var H;return(H=dp())==null?void 0:H.wrapper}h.currentComputed=S,h.watched=Symbol("watched"),h.unwatched=Symbol("unwatched")})(t.subtle||(t.subtle={}))})(ke||(ke={}));var Ap=Symbol("SignalWatcherBrand"),Np=new FinalizationRegistry(({watcher:t,signal:e})=>{t.unwatch(e)}),Ql=new WeakMap;function Mt(t){return t[Ap]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),t):class extends t{constructor(){super(...arguments),this._$St=new ke.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new ke.Computed(()=>{this._$St.get(),super.performUpdate()});let e=this._$Su=new ke.subtle.Watcher(function(){let r=Ql.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())});Ql.set(e,this),Np.register(this,{watcher:e,signal:this._$Sv}),e.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(e){try{this._$So?(this._$So=!1,super.update(e)):this._$Sh.forEach(r=>r.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(e,r,i){this._$So=!0,super.requestUpdate(e,r,i)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(e){this._$Sh.add(e);let r=this._$So;this.requestUpdate(),this._$So=r}m(e){this._$Sh.delete(e)}}}var{I:Ig}=Hl;var $o=t=>t.strings===void 0;var Op={},ec=(t,e=Op)=>t._$AH=e;var _i=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let i of r)i._$AO?.(e,!1),_i(i,e);return!0},Ro=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},tc=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Rp(e)}};function Ip(t){this._$AN!==void 0?(Ro(this),this._$AM=t,tc(this)):this._$AM=t}function $p(t,e=!1,r=0){let i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)_i(i[n],!1),Ro(i[n]);else i!=null&&(_i(i,!1),Ro(i));else _i(this,t)}var Rp=t=>{t.type==Qe.CHILD&&(t._$AP??=$p,t._$AQ??=Ip)},Do=class extends bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),tc(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(_i(this,e),Ro(this))}setValue(e){if($o(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var Lo=class extends Do{_$Sl(){if(this._$Su!==void 0)return;this._$SW=new ke.Computed(()=>{var r;return(r=this._$Sj)===null||r===void 0?void 0:r.get()});let e=this._$Su=new ke.subtle.Watcher(()=>{var r;(r=this._$SO)===null||r===void 0||r._(this),e.watch()});e.watch(this._$SW)}_$Sp(){var e;this._$Su!==void 0&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,(e=this._$SO)===null||e===void 0||e.m(this))}commit(){this.setValue(ke.subtle.untrack(()=>{var e;return(e=this._$SW)===null||e===void 0?void 0:e.get()}))}render(e){return ke.subtle.untrack(()=>e.get())}update(e,[r]){var i,o;return(i=this._$SO)!==null&&i!==void 0||(this._$SO=(o=e.options)===null||o===void 0?void 0:o.host),r!==this._$Sj&&this._$Sj!==void 0&&this._$Sp(),this._$Sj=r,this._$Sl(),ke.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}},Ns=Vt(Lo);var Os=t=>(e,...r)=>t(e,...r.map(i=>i instanceof ke.State||i instanceof ke.Computed?Ns(i):i)),Dp=Os(v),Lp=Os(wo);var Xg=ke.State,Jg=ke.Computed,tr=(t,e)=>new ke.State(t,e);var ic=Symbol.for(""),Vp=t=>{if(t?.r===ic)return t?._$litStatic$};var qe=(t,...e)=>({_$litStatic$:e.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:ic}),rc=new Map,Is=t=>(e,...r)=>{let i=r.length,o,n,s=[],a=[],l,h=0,u=!1;for(;h<i;){for(l=e[h];h<i&&(n=r[h],(o=Vp(n))!==void 0);)l+=o+e[++h],u=!0;h!==i&&a.push(n),s.push(l),h++}if(h===i&&s.push(e[i]),u){let f=s.join("$$lit$$");(e=rc.get(f))===void 0&&(s.raw=s,rc.set(f,e=s)),r=a}return t(e,...r)},rr=Is(v),ob=Is(wo),nb=Is(Fl);var wi=class extends Mt(O){render(){return rr`<pv-alphanumeric-nine-key-keyboard></pv-alphanumeric-nine-key-keyboard>`}};k([p({type:Object})],wi.prototype,"state",2),wi=k([R("pv-character-input")],wi);var Vo=class extends O{render(){return v`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};var oc=T`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;var $s=class extends Vo{};$s.styles=[oc];$s=c([R("md-icon")],$s);var nc=Symbol("attachableController"),sc;sc=new MutationObserver(t=>{for(let e of t)e.target[nc]?.hostConnected()});var Hr=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,r){this.host=e,this.onControlChange=r,this.currentControl=null,e.addController(this),e[nc]=this,sc?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}};var Mp=["focusin","focusout","pointerdown"],Br=class extends O{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Hr(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[ac]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[ac]=!0}}onControlChange(e,r){if(!!1)for(let i of Mp)e?.removeEventListener(i,this),r?.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}};c([p({type:Boolean,reflect:!0})],Br.prototype,"visible",void 0);c([p({type:Boolean,reflect:!0})],Br.prototype,"inward",void 0);var ac=Symbol("handledByFocusRing");var lc=T`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;var Rs=class extends Br{};Rs.styles=[lc];Rs=c([R("md-focus-ring")],Rs);var Pe={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};function cc(){let t=null;return{start(){return t?.abort(),t=new AbortController,t.signal},finish(){t=null}}}var Pp=450,dc=225,Fp=.2,zp=10,Up=75,Hp=.35,Bp="::after",jp="forwards",ze;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ze||(ze={}));var Wp=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],qp=150,Kp=window.matchMedia("(forced-colors: active)"),ir=class extends O{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ze.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Hr(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let e={hovered:this.hovered,pressed:this.pressed};return v`<div class="surface ${ne(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==ze.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===ze.HOLDING){this.state=ze.WAITING_FOR_CLICK;return}if(this.state===ze.TOUCH_DELAY){this.state=ze.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=ze.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=ze.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,qp)}),this.state===ze.TOUCH_DELAY&&(this.state=ze.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===ze.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===ze.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:e,width:r}=this.getBoundingClientRect(),i=Math.max(e,r),o=Math.max(Hp*i,Up),n=Math.floor(i*Fp),a=Math.sqrt(r**2+e**2)+zp;this.initialSize=n,this.rippleScale=`${(a+o)/n}`,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(e){let{scrollX:r,scrollY:i}=window,{left:o,top:n}=this.getBoundingClientRect(),s=r+o,a=i+n,{pageX:l,pageY:h}=e;return{x:l-s,y:h-a}}getTranslationCoordinates(e){let{height:r,width:i}=this.getBoundingClientRect(),o={x:(i-this.initialSize)/2,y:(r-this.initialSize)/2},n;return e instanceof PointerEvent?n=this.getNormalizedPointerEventCoords(e):n={x:i/2,y:r/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:o}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:r,endPoint:i}=this.getTranslationCoordinates(e),o=`${r.x}px, ${r.y}px`,n=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${o}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:Bp,duration:Pp,easing:Pe.STANDARD,fill:jp})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ze.INACTIVE;let e=this.growAnimation,r=1/0;if(typeof e?.currentTime=="number"?r=e.currentTime:e?.currentTime&&(r=e.currentTime.to("ms").value),r>=dc){this.pressed=!1;return}await new Promise(i=>{setTimeout(i,dc-r)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);let r=e.buttons===1;return this.isTouch(e)||r}inBounds({x:e,y:r}){let{top:i,left:o,bottom:n,right:s}=this.getBoundingClientRect();return e>=o&&e<=s&&r>=i&&r<=n}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){if(!Kp?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break;default:break}}onControlChange(e,r){if(!!1)for(let i of Wp)e?.removeEventListener(i,this),r?.addEventListener(i,this)}};c([p({type:Boolean,reflect:!0})],ir.prototype,"disabled",void 0);c([J()],ir.prototype,"hovered",void 0);c([J()],ir.prototype,"pressed",void 0);c([M(".surface")],ir.prototype,"mdRoot",void 0);var uc=T`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;var Ds=class extends ir{};Ds.styles=[uc];Ds=c([R("md-ripple")],Ds);var ye=Symbol("internals"),Ls=Symbol("privateInternals");function Ke(t){class e extends t{get[ye](){return this[Ls]||(this[Ls]=this.attachInternals()),this[Ls]}}return e}function Mo(t){t.addInitializer(e=>{let r=e;r.addEventListener("click",async i=>{let{type:o,[ye]:n}=r,{form:s}=n;if(!(!s||o==="button")&&(await new Promise(a=>{setTimeout(a)}),!i.defaultPrevented)){if(o==="reset"){s.reset();return}s.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),n.setFormValue(r.value),s.requestSubmit()}})})}function Vs(t,e=!0){return e&&getComputedStyle(t).getPropertyValue("direction").trim()==="rtl"}var Gp=we(Ke(O)),Se=class extends Gp{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ye].form}get labels(){return this[ye].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Vs(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let e=this.href?qe`div`:qe`button`,{ariaLabel:r,ariaHasPopup:i,ariaExpanded:o}=this,n=r&&this.ariaLabelSelected,s=this.toggle?this.selected:x,a=x;return this.href||(a=n&&this.selected?this.ariaLabelSelected:r),rr`<${e}
        class="icon-button ${ne(this.getRenderClasses())}"
        id="button"
        aria-label="${a||x}"
        aria-haspopup="${!this.href&&i||x}"
        aria-expanded="${!this.href&&o||x}"
        aria-pressed="${s}"
        aria-disabled=${!this.href&&this.softDisabled||x}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?x:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():x}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return v`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||x}"
        target="${this.target||x}"
        aria-label="${e||x}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return v`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return v`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return v`<span class="touch"></span>`}renderFocusRing(){return v`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){let e=!this.href&&(this.disabled||this.softDisabled);return v`<md-ripple
      for=${this.href?"link":x}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=Vs(this,this.flipIconInRtl),super.connectedCallback()}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}}async handleClickOnChild(e){await 0,!(!this.toggle||this.disabled||this.softDisabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};Mo(Se);Se.formAssociated=!0;Se.shadowRootOptions={mode:"open",delegatesFocus:!0};c([p({type:Boolean,reflect:!0})],Se.prototype,"disabled",void 0);c([p({type:Boolean,attribute:"soft-disabled",reflect:!0})],Se.prototype,"softDisabled",void 0);c([p({type:Boolean,attribute:"flip-icon-in-rtl"})],Se.prototype,"flipIconInRtl",void 0);c([p()],Se.prototype,"href",void 0);c([p()],Se.prototype,"download",void 0);c([p()],Se.prototype,"target",void 0);c([p({attribute:"aria-label-selected"})],Se.prototype,"ariaLabelSelected",void 0);c([p({type:Boolean})],Se.prototype,"toggle",void 0);c([p({type:Boolean,reflect:!0})],Se.prototype,"selected",void 0);c([p()],Se.prototype,"type",void 0);c([p({reflect:!0})],Se.prototype,"value",void 0);c([J()],Se.prototype,"flipIcon",void 0);var pc=T`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;var hc=T`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;var Ms=class extends Se{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};Ms.styles=[pc,hc];Ms=c([R("md-icon-button")],Ms);function or(t){let e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function nr(t){return t.currentTarget!==t.target||t.composedPath()[0]!==t.target||t.target.disabled?!1:!Yp(t)}function Yp(t){let e=Ps;return e&&(t.preventDefault(),t.stopImmediatePropagation()),Xp(),e}var Ps=!1;async function Xp(){Ps=!0,await null,Ps=!1}function et(t,e){e.bubbles&&(!t.shadowRoot||e.composed)&&e.stopPropagation();let r=Reflect.construct(e.constructor,[e.type,e]),i=t.dispatchEvent(r);return i||e.preventDefault(),i}var yt=Symbol("createValidator"),xt=Symbol("getValidityAnchor"),Fs=Symbol("privateValidator"),Pt=Symbol("privateSyncValidity"),Po=Symbol("privateCustomValidationMessage");function sr(t){var e;class r extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[Pt](),this[ye].validity}get validationMessage(){return this[Pt](),this[ye].validationMessage}get willValidate(){return this[Pt](),this[ye].willValidate}checkValidity(){return this[Pt](),this[ye].checkValidity()}reportValidity(){return this[Pt](),this[ye].reportValidity()}setCustomValidity(o){this[Po]=o,this[Pt]()}requestUpdate(o,n,s){super.requestUpdate(o,n,s),this[Pt]()}firstUpdated(o){super.firstUpdated(o),this[Pt]()}[(e=Po,Pt)](){if(!1)return;this[Fs]||(this[Fs]=this[yt]());let{validity:o,validationMessage:n}=this[Fs].getValidity(),s=!!this[Po],a=this[Po]||n;this[ye].setValidity({...o,customError:s},a,this[xt]()??void 0)}[yt](){throw new Error("Implement [createValidator]")}[xt](){throw new Error("Implement [getValidityAnchor]")}}return r}var tt=Symbol("getFormValue"),jr=Symbol("getFormState");function _t(t){class e extends t{get form(){return this[ye].form}get labels(){return this[ye].labels}get name(){return this.getAttribute("name")??""}set name(i){this.setAttribute("name",i)}get disabled(){return this.hasAttribute("disabled")}set disabled(i){this.toggleAttribute("disabled",i)}attributeChangedCallback(i,o,n){if(i==="name"||i==="disabled"){let s=i==="disabled"?o!==null:o;this.requestUpdate(i,s);return}super.attributeChangedCallback(i,o,n)}requestUpdate(i,o,n){super.requestUpdate(i,o,n),this[ye].setFormValue(this[tt](),this[jr]())}[tt](){throw new Error("Implement [getFormValue]")}[jr](){return this[tt]()}formDisabledCallback(i){this.disabled=i}}return e.formAssociated=!0,c([p({noAccessor:!0})],e.prototype,"name",null),c([p({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}var ar=class{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){let e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;let{validity:i,validationMessage:o}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:o,validity:{badInput:i.badInput,customError:i.customError,patternMismatch:i.patternMismatch,rangeOverflow:i.rangeOverflow,rangeUnderflow:i.rangeUnderflow,stepMismatch:i.stepMismatch,tooLong:i.tooLong,tooShort:i.tooShort,typeMismatch:i.typeMismatch,valueMissing:i.valueMissing}},this.currentValidity}};var Wr=class extends ar{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,r){return e.checked===r.checked&&e.required===r.required}copy({checked:e,required:r}){return{checked:e,required:r}}};var Jp=we(sr(_t(Ke(O)))),rt=class extends Jp{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.addEventListener("click",e=>{!nr(e)||!this.input||(this.focus(),or(this.input))})}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate),super.update(e)}render(){let e=!this.prevChecked&&!this.prevIndeterminate,r=this.prevChecked&&!this.prevIndeterminate,i=this.prevIndeterminate,o=this.checked&&!this.indeterminate,n=this.indeterminate,s=ne({disabled:this.disabled,selected:o||n,unselected:!o&&!n,checked:o,indeterminate:n,"prev-unselected":e,"prev-checked":r,"prev-indeterminate":i,"prev-disabled":this.prevDisabled}),{ariaLabel:a,ariaInvalid:l}=this;return v`
      <div class="container ${s}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${n?"mixed":x}
          aria-label=${a||x}
          aria-invalid=${l||x}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}handleInput(e){let r=e.target;this.checked=r.checked,this.indeterminate=r.indeterminate}handleChange(e){et(this,e)}[tt](){return!this.checked||this.indeterminate?null:this.value}[jr](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked=e==="true"}[yt](){return new Wr(()=>this)}[xt](){return this.input}};rt.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};c([p({type:Boolean})],rt.prototype,"checked",void 0);c([p({type:Boolean})],rt.prototype,"indeterminate",void 0);c([p({type:Boolean})],rt.prototype,"required",void 0);c([p()],rt.prototype,"value",void 0);c([J()],rt.prototype,"prevChecked",void 0);c([J()],rt.prototype,"prevDisabled",void 0);c([J()],rt.prototype,"prevIndeterminate",void 0);c([M("input")],rt.prototype,"input",void 0);var fc=T`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`;var zs=class extends rt{};zs.styles=[fc];zs=c([R("md-checkbox")],zs);var mc=T`:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;var qr=class extends O{constructor(){super(...arguments),this.multiline=!1}render(){return v`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let e=!1,r=0;for(let i of this.textSlots)if(Zp(i)&&(r+=1),r>1){e=!0;break}this.multiline=e}};c([p({type:Boolean,reflect:!0})],qr.prototype,"multiline",void 0);c([Qt(".text slot")],qr.prototype,"textSlots",void 0);function Zp(t){for(let e of t.assignedNodes({flatten:!0})){let r=e.nodeType===Node.ELEMENT_NODE,i=e.nodeType===Node.TEXT_NODE&&e.textContent?.match(/\S/);if(r||i)return!0}return!1}var vc=T`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;var Us=class extends qr{};Us.styles=[vc];Us=c([R("md-item")],Us);function Qp(t,e){return new CustomEvent("close-menu",{bubbles:!0,composed:!0,detail:{initiator:t,reason:e,itemPath:[t]}})}var Bs=Qp;var Hs={SPACE:"Space",ENTER:"Enter"},Fo={CLICK_SELECTION:"click-selection",KEYDOWN:"keydown"},eh={ESCAPE:"Escape",SPACE:Hs.SPACE,ENTER:Hs.ENTER};function zo(t){return Object.values(eh).some(e=>e===t)}function gc(t){return Object.values(Hs).some(e=>e===t)}function Ei(t,e){let r=new Event("md-contains",{bubbles:!0,composed:!0}),i=[],o=s=>{i=s.composedPath()};return e.addEventListener("md-contains",o),t.dispatchEvent(r),e.removeEventListener("md-contains",o),i.length>0}var Ge={NONE:"none",LIST_ROOT:"list-root",FIRST_ITEM:"first-item",LAST_ITEM:"last-item"};var Uo=class{constructor(e,r){this.host=e,this.internalTypeaheadText=null,this.onClick=()=>{this.host.keepOpen||this.host.dispatchEvent(Bs(this.host,{kind:Fo.CLICK_SELECTION}))},this.onKeydown=i=>{if(this.host.href&&i.code==="Enter"){let n=this.getInteractiveElement();n instanceof HTMLAnchorElement&&n.click()}if(i.defaultPrevented)return;let o=i.code;this.host.keepOpen&&o!=="Escape"||zo(o)&&(i.preventDefault(),this.host.dispatchEvent(Bs(this.host,{kind:Fo.KEYDOWN,key:o})))},this.getHeadlineElements=r.getHeadlineElements,this.getSupportingTextElements=r.getSupportingTextElements,this.getDefaultElements=r.getDefaultElements,this.getInteractiveElement=r.getInteractiveElement,this.host.addController(this)}get typeaheadText(){if(this.internalTypeaheadText!==null)return this.internalTypeaheadText;let e=this.getHeadlineElements(),r=[];return e.forEach(i=>{i.textContent&&i.textContent.trim()&&r.push(i.textContent.trim())}),r.length===0&&this.getDefaultElements().forEach(i=>{i.textContent&&i.textContent.trim()&&r.push(i.textContent.trim())}),r.length===0&&this.getSupportingTextElements().forEach(i=>{i.textContent&&i.textContent.trim()&&r.push(i.textContent.trim())}),r.join(" ")}get tagName(){switch(this.host.type){case"link":return"a";case"button":return"button";default:case"menuitem":case"option":return"li"}}get role(){return this.host.type==="option"?"option":"menuitem"}hostConnected(){this.host.toggleAttribute("md-menu-item",!0)}hostUpdate(){this.host.href&&(this.host.type="link")}setTypeaheadText(e){this.internalTypeaheadText=e}};function th(){return new Event("request-selection",{bubbles:!0,composed:!0})}function rh(){return new Event("request-deselection",{bubbles:!0,composed:!0})}var Ho=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return this.internalDisplayText!==null?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(e){this.internalDisplayText=e}constructor(e,r){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=i=>{this.menuItemController.onKeydown(i)},this.lastSelected=this.host.selected,this.menuItemController=new Uo(e,r),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(th()):this.host.dispatchEvent(rh())),this.lastSelected=this.host.selected,this.firstUpdate=!1}};var ih=we(O),Ue=class extends ih{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new Ho(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(v`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return v`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||x}
        aria-selected=${this.ariaSelected||x}
        aria-checked=${this.ariaChecked||x}
        aria-expanded=${this.ariaExpanded||x}
        aria-haspopup=${this.ariaHasPopup||x}
        class="list-item ${ne(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return v` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return v` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return v`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}};Ue.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};c([p({type:Boolean,reflect:!0})],Ue.prototype,"disabled",void 0);c([p({type:Boolean,attribute:"md-menu-item",reflect:!0})],Ue.prototype,"isMenuItem",void 0);c([p({type:Boolean})],Ue.prototype,"selected",void 0);c([p()],Ue.prototype,"value",void 0);c([M(".list-item")],Ue.prototype,"listItemRoot",void 0);c([Ne({slot:"headline"})],Ue.prototype,"headlineElements",void 0);c([Ne({slot:"supporting-text"})],Ue.prototype,"supportingTextElements",void 0);c([mo({slot:""})],Ue.prototype,"defaultElements",void 0);c([p({attribute:"typeahead-text"})],Ue.prototype,"typeaheadText",null);c([p({attribute:"display-text"})],Ue.prototype,"displayText",null);var js=class extends Ue{};js.styles=[mc];js=c([R("md-select-option")],js);var bc=T`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;var oh=we(Ke(O)),Oe=class extends oh{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[ye].form}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.href="",this.download="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.addEventListener("click",this.handleClick.bind(this))}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){let e=!this.href&&(this.disabled||this.softDisabled),r=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return v`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${i}
        ?disabled="${e}"></md-ripple>
      ${r}
    `}renderButton(){let{ariaLabel:e,ariaHasPopup:r,ariaExpanded:i}=this;return v`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled||x}
      aria-label="${e||x}"
      aria-haspopup="${r||x}"
      aria-expanded="${i||x}">
      ${this.renderContent()}
    </button>`}renderLink(){let{ariaLabel:e,ariaHasPopup:r,ariaExpanded:i}=this;return v`<a
      id="link"
      class="button"
      aria-label="${e||x}"
      aria-haspopup="${r||x}"
      aria-expanded="${i||x}"
      href=${this.href}
      download=${this.download||x}
      target=${this.target||x}
      >${this.renderContent()}
    </a>`}renderContent(){let e=v`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return v`
      <span class="touch"></span>
      ${this.trailingIcon?x:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:x}
    `}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}!nr(e)||!this.buttonElement||(this.focus(),or(this.buttonElement))}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}};Mo(Oe);Oe.formAssociated=!0;Oe.shadowRootOptions={mode:"open",delegatesFocus:!0};c([p({type:Boolean,reflect:!0})],Oe.prototype,"disabled",void 0);c([p({type:Boolean,attribute:"soft-disabled",reflect:!0})],Oe.prototype,"softDisabled",void 0);c([p()],Oe.prototype,"href",void 0);c([p()],Oe.prototype,"download",void 0);c([p()],Oe.prototype,"target",void 0);c([p({type:Boolean,attribute:"trailing-icon",reflect:!0})],Oe.prototype,"trailingIcon",void 0);c([p({type:Boolean,attribute:"has-icon",reflect:!0})],Oe.prototype,"hasIcon",void 0);c([p()],Oe.prototype,"type",void 0);c([p({reflect:!0})],Oe.prototype,"value",void 0);c([M(".button")],Oe.prototype,"buttonElement",void 0);c([Ne({slot:"icon",flatten:!0})],Oe.prototype,"assignedIcons",void 0);var Bo=class extends Oe{};var yc=T`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;var Ws=class extends Bo{};Ws.styles=[bc,yc];Ws=c([R("md-text-button")],Ws);var _c=Symbol("dispatchHooks");function wc(t,e){let r=t[_c];if(!r)throw new Error(`'${t.type}' event needs setupDispatchHooks().`);r.addEventListener("after",e)}var xc=new WeakMap;function Ec(t,...e){let r=xc.get(t);r||(r=new Set,xc.set(t,r));for(let i of e){if(r.has(i))continue;let o=!1;t.addEventListener(i,n=>{if(o)return;n.stopImmediatePropagation();let s=Reflect.construct(n.constructor,[n.type,n]),a=new EventTarget;s[_c]=a,o=!0;let l=t.dispatchEvent(s);o=!1,l||n.preventDefault(),a.dispatchEvent(new Event("after"))},{capture:!0}),r.add(i)}}var nh=we(sr(_t(Ke(O)))),ht=class extends nh{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",!!1&&(this.addEventListener("click",e=>{!nr(e)||!this.input||(this.focus(),or(this.input))}),Ec(this,"keydown"),this.addEventListener("keydown",e=>{wc(e,()=>{e.defaultPrevented||e.key!=="Enter"||this.disabled||!this.input||this.input.click()})}))}render(){return v`
      <div class="switch ${ne(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||x}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){let e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return v`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${ne(e)}">
          ${this.shouldShowIcons()?this.renderIcons():v``}
        </span>
      </span>
    `}renderIcons(){return v`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?v``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return v`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return v`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return v`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){let r=e.target;this.selected=r.checked}handleChange(e){et(this,e)}[tt](){return this.selected?this.value:null}[jr](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}[yt](){return new Wr(()=>({checked:this.selected,required:this.required}))}[xt](){return this.input}};ht.shadowRootOptions={mode:"open",delegatesFocus:!0};c([p({type:Boolean})],ht.prototype,"selected",void 0);c([p({type:Boolean})],ht.prototype,"icons",void 0);c([p({type:Boolean,attribute:"show-only-selected-icon"})],ht.prototype,"showOnlySelectedIcon",void 0);c([p({type:Boolean})],ht.prototype,"required",void 0);c([p()],ht.prototype,"value",void 0);c([M("input")],ht.prototype,"input",void 0);var Cc=T`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;var qs=class extends ht{};qs.styles=[Cc];qs=c([R("md-switch")],qs);var jo=class extends O{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return v`<span class="shadow"></span>`}};var kc=T`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;var Ks=class extends jo{};Ks.styles=[kc];Ks=c([R("md-elevation")],Ks);var Wo=Symbol("isFocusable"),Gs=Symbol("privateIsFocusable"),qo=Symbol("externalTabIndex"),Ko=Symbol("isUpdatingTabIndex"),Go=Symbol("updateTabIndex");function Sc(t){var e,r,i;class o extends t{constructor(){super(...arguments),this[e]=!0,this[r]=null,this[i]=!1}get[Wo](){return this[Gs]}set[Wo](s){this[Wo]!==s&&(this[Gs]=s,this[Go]())}connectedCallback(){super.connectedCallback(),this[Go]()}attributeChangedCallback(s,a,l){if(s!=="tabindex"){super.attributeChangedCallback(s,a,l);return}if(this.requestUpdate("tabIndex",Number(a??-1)),!this[Ko]){if(!this.hasAttribute("tabindex")){this[qo]=null,this[Go]();return}this[qo]=this.tabIndex}}[(e=Gs,r=qo,i=Ko,Go)](){let s=this[Wo]?0:-1,a=this[qo]??s;this[Ko]=!0,this.tabIndex=a,this[Ko]=!1}}return c([p({noAccessor:!0})],o.prototype,"tabIndex",void 0),o}var Tc,Kr=Symbol("indicator"),Ys=Symbol("animateIndicator"),sh=Sc(O),it=class extends sh{get selected(){return this.active}set selected(e){this.active=e}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){let e=v`<div class="indicator"></div>`;return v`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${ne(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?x:e}
      </div>
      ${this.fullWidthIndicator?e:x}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(e){await 0,!e.defaultPrevented&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.click())}handleContentClick(e){e.stopPropagation(),this.click()}[(Tc=Kr,Ys)](e){if(!this[Kr])return;this[Kr].getAnimations().forEach(i=>{i.cancel()});let r=this.getKeyframes(e);r!==null&&this[Kr].animate(r,{duration:250,easing:Pe.EMPHASIZED})}getKeyframes(e){let r=ah();if(!this.active)return r?[{opacity:1},{transform:"none"}]:null;let i={},o=e[Kr]?.getBoundingClientRect()??{},n=o.left,s=o.width,a=this[Kr].getBoundingClientRect(),l=a.left,h=a.width,u=s/h;return!r&&n!==void 0&&l!==void 0&&!isNaN(u)?i.transform=`translateX(${(n-l).toFixed(4)}px) scaleX(${u.toFixed(4)})`:i.opacity=0,[i,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(let e of this.assignedDefaultNodes){let r=e.nodeType===Node.TEXT_NODE&&!!e.wholeText.match(/\S/);if(e.nodeType===Node.ELEMENT_NODE||r)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}};c([p({type:Boolean,reflect:!0,attribute:"md-tab"})],it.prototype,"isTab",void 0);c([p({type:Boolean,reflect:!0})],it.prototype,"active",void 0);c([p({type:Boolean})],it.prototype,"selected",null);c([p({type:Boolean,attribute:"has-icon"})],it.prototype,"hasIcon",void 0);c([p({type:Boolean,attribute:"icon-only"})],it.prototype,"iconOnly",void 0);c([M(".indicator")],it.prototype,Tc,void 0);c([J()],it.prototype,"fullWidthIndicator",void 0);c([mo({flatten:!0})],it.prototype,"assignedDefaultNodes",void 0);c([Ne({slot:"icon",flatten:!0})],it.prototype,"assignedIcons",void 0);function ah(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}var Ci=class extends it{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}};c([p({type:Boolean,attribute:"inline-icon"})],Ci.prototype,"inlineIcon",void 0);var Ac=T`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`;var Nc=T`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;var Xs=class extends Ci{};Xs.styles=[Nc,Ac];Xs=c([R("md-primary-tab")],Xs);var wr=class extends O{constructor(){super(...arguments),this.inset=!1,this.insetStart=!1,this.insetEnd=!1}};c([p({type:Boolean,reflect:!0})],wr.prototype,"inset",void 0);c([p({type:Boolean,reflect:!0,attribute:"inset-start"})],wr.prototype,"insetStart",void 0);c([p({type:Boolean,reflect:!0,attribute:"inset-end"})],wr.prototype,"insetEnd",void 0);var Oc=T`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;var Js=class extends wr{};Js.styles=[Oc];Js=c([R("md-divider")],Js);var Ft=class extends O{get activeTab(){return this.tabs.find(e=>e.active)??null}set activeTab(e){e&&this.activateTab(e)}get activeTabIndex(){return this.tabs.findIndex(e=>e.active)}set activeTabIndex(e){let r=()=>{let i=this.tabs[e];i&&this.activateTab(i)};if(!this.slotElement){this.updateComplete.then(r);return}r()}get focusedTab(){return this.tabs.find(e=>e.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(e){await this.updateComplete;let{tabs:r}=this;if(e??=this.activeTab,!e||!r.includes(e)||!this.tabsScrollerElement)return;for(let b of this.tabs)await b.updateComplete;let i=e.offsetLeft,o=e.offsetWidth,n=this.scrollLeft,s=this.offsetWidth,a=48,l=i-a,h=i+o-s+a,u=Math.min(l,Math.max(h,n)),f=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:f,top:0,left:u})}render(){return v`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(e){let r=e.target;await 0,!(e.defaultPrevented||!lh(r)||r.active)&&this.activateTab(r)}activateTab(e){let{tabs:r}=this,i=this.activeTab;if(!(!r.includes(e)||i===e)){for(let o of r)o.active=o===e;if(i){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(let n of r)n.active=n===i;return}e[Ys](i)}this.updateFocusableTab(e),this.scrollToTab(e)}}updateFocusableTab(e){for(let r of this.tabs)r.tabIndex=r===e?0:-1}async handleKeydown(e){await 0;let r=e.key==="ArrowLeft",i=e.key==="ArrowRight",o=e.key==="Home",n=e.key==="End";if(e.defaultPrevented||!r&&!i&&!o&&!n)return;let{tabs:s}=this;if(s.length<2)return;e.preventDefault();let a;if(o||n)a=o?0:s.length-1;else{let u=getComputedStyle(this).direction==="rtl"?r:i,{focusedTab:f}=this;if(!f)a=u?0:s.length-1;else{let b=this.tabs.indexOf(f);a=u?b+1:b-1,a>=s.length?a=0:a<0&&(a=s.length-1)}}let l=s[a];l.focus(),this.autoActivate?this.activateTab(l):this.updateFocusableTab(l)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;let{activeTab:e}=this;e&&this.updateFocusableTab(e)}handleSlotChange(){let e=this.tabs[0];!this.activeTab&&e&&this.activateTab(e),this.scrollToTab(this.activeTab)}};c([Ne({flatten:!0,selector:"[md-tab]"})],Ft.prototype,"tabs",void 0);c([p({type:Number,attribute:"active-tab-index"})],Ft.prototype,"activeTabIndex",null);c([p({type:Boolean,attribute:"auto-activate"})],Ft.prototype,"autoActivate",void 0);c([M(".tabs")],Ft.prototype,"tabsScrollerElement",void 0);c([M("slot")],Ft.prototype,"slotElement",void 0);function lh(t){return t instanceof HTMLElement&&t.hasAttribute("md-tab")}var Ic=T`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;var ki=class extends Ft{};ki.styles=[Ic];ki=c([R("md-tabs")],ki);var pe=class extends O{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.noAsterisk=!1,this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){let e=this.count??-1,r=this.max??-1;return e<0||r<=0?"":`${e} / ${r}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&e.get("disabled")!==void 0&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){let e=this.renderLabel(!0),r=this.renderLabel(!1),i=this.renderOutline?.(e),o={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return v`
      <div class="field ${ne(o)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${r} ${i?x:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame(()=>{this.refreshErrorAlert=!1}),this.disableTransitions&&requestAnimationFrame(()=>{this.disableTransitions=!1})}renderSupportingText(){let{supportingOrErrorText:e,counterText:r}=this;if(!e&&!r)return x;let i=v`<span>${e}</span>`,o=r?v`<span class="counter">${r}</span>`:x,s=this.error&&this.errorText&&!this.refreshErrorAlert?"alert":x;return v`
      <div class="supporting-text" role=${s}>${i}${o}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(let e of this.slottedAriaDescribedBy)Fr(v`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return x;let r;e?r=this.focused||this.populated||this.isAnimating:r=!this.focused&&!this.populated&&!this.isAnimating;let i={hidden:!r,floating:e,resting:!e},o=`${this.label}${this.required&&!this.noAsterisk?"*":""}`;return v`
      <span class="label ${ne(i)}" aria-hidden=${!r}
        >${o}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:r}){if(!this.label)return;e??=this.focused,r??=this.populated;let i=e||r,o=this.focused||this.populated;i!==o&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Pe.STANDARD}),this.labelAnimation?.addEventListener("finish",()=>{this.isAnimating=!1}))}getLabelKeyframes(){let{floatingLabelEl:e,restingLabelEl:r}=this;if(!e||!r)return[];let{x:i,y:o,height:n}=e.getBoundingClientRect(),{x:s,y:a,height:l}=r.getBoundingClientRect(),h=e.scrollWidth,u=r.scrollWidth,f=u/h,b=s-i,y=a-o+Math.round((l-n*f)/2),D=`translateX(${b}px) translateY(${y}px) scale(${f})`,L="translateX(0) translateY(0) scale(1)",W=r.clientWidth,U=u>W?`${W/f}px`:"";return this.focused||this.populated?[{transform:D,width:U},{transform:L,width:U}]:[{transform:L,width:U},{transform:D,width:U}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}};c([p({type:Boolean})],pe.prototype,"disabled",void 0);c([p({type:Boolean})],pe.prototype,"error",void 0);c([p({type:Boolean})],pe.prototype,"focused",void 0);c([p()],pe.prototype,"label",void 0);c([p({type:Boolean,attribute:"no-asterisk"})],pe.prototype,"noAsterisk",void 0);c([p({type:Boolean})],pe.prototype,"populated",void 0);c([p({type:Boolean})],pe.prototype,"required",void 0);c([p({type:Boolean})],pe.prototype,"resizable",void 0);c([p({attribute:"supporting-text"})],pe.prototype,"supportingText",void 0);c([p({attribute:"error-text"})],pe.prototype,"errorText",void 0);c([p({type:Number})],pe.prototype,"count",void 0);c([p({type:Number})],pe.prototype,"max",void 0);c([p({type:Boolean,attribute:"has-start"})],pe.prototype,"hasStart",void 0);c([p({type:Boolean,attribute:"has-end"})],pe.prototype,"hasEnd",void 0);c([Ne({slot:"aria-describedby"})],pe.prototype,"slottedAriaDescribedBy",void 0);c([J()],pe.prototype,"isAnimating",void 0);c([J()],pe.prototype,"refreshErrorAlert",void 0);c([J()],pe.prototype,"disableTransitions",void 0);c([M(".label.floating")],pe.prototype,"floatingLabelEl",void 0);c([M(".label.resting")],pe.prototype,"restingLabelEl",void 0);c([M(".container")],pe.prototype,"containerEl",void 0);var Yo=class extends pe{renderBackground(){return v` <div class="background"></div> `}renderStateLayer(){return v` <div class="state-layer"></div> `}renderIndicator(){return v`<div class="active-indicator"></div>`}};var $c=T`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;var Xo=T`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;var Zs=class extends Yo{};Zs.styles=[Xo,$c];Zs=c([R("md-filled-field")],Zs);var Rc=T`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;var Qs=Vt(class extends bt{constructor(t){if(super(t),t.type!==Qe.PROPERTY&&t.type!==Qe.ATTRIBUTE&&t.type!==Qe.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!$o(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Me||e===x)return e;let r=t.element,i=t.name;if(t.type===Qe.PROPERTY){if(e===r[i])return Me}else if(t.type===Qe.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return Me}else if(t.type===Qe.ATTRIBUTE&&r.getAttribute(i)===e+"")return Me;return ec(t),e}});var Dc="important",ch=" !"+Dc,zt=Vt(class extends bt{constructor(t){if(super(t),t.type!==Qe.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{let i=t[r];return i==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(t,[e]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(let i in e){let o=e[i];if(o!=null){this.ft.add(i);let n=typeof o=="string"&&o.endsWith(ch);i.includes("-")||n?r.setProperty(i,n?o.slice(0,-11):o,n?Dc:""):r[i]=o}}return Me}});var Lc={fromAttribute(t){return t??""},toAttribute(t){return t||null}};var Gr=Symbol("onReportValidity"),Jo=Symbol("privateCleanupFormListeners"),Zo=Symbol("privateDoNotReportInvalid"),Qo=Symbol("privateIsSelfReportingValidity"),en=Symbol("privateCallOnReportValidity");function tn(t){var e,r,i;class o extends t{constructor(...s){super(...s),this[e]=new AbortController,this[r]=!1,this[i]=!1,!!1&&this.addEventListener("invalid",a=>{this[Zo]||!a.isTrusted||this.addEventListener("invalid",()=>{this[en](a)},{once:!0})},{capture:!0})}checkValidity(){this[Zo]=!0;let s=super.checkValidity();return this[Zo]=!1,s}reportValidity(){this[Qo]=!0;let s=super.reportValidity();return s&&this[en](null),this[Qo]=!1,s}[(e=Jo,r=Zo,i=Qo,en)](s){let a=s?.defaultPrevented;a||(this[Gr](s),!(!a&&s?.defaultPrevented))||(this[Qo]||ph(this[ye].form,this))&&this.focus()}[Gr](s){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(s){super.formAssociatedCallback&&super.formAssociatedCallback(s),this[Jo].abort(),s&&(this[Jo]=new AbortController,dh(this,s,()=>{this[en](null)},this[Jo].signal))}}return o}function dh(t,e,r,i){let o=uh(e),n=!1,s,a=!1;o.addEventListener("before",()=>{a=!0,s=new AbortController,n=!1,t.addEventListener("invalid",()=>{n=!0},{signal:s.signal})},{signal:i}),o.addEventListener("after",()=>{a=!1,s?.abort(),!n&&r()},{signal:i}),e.addEventListener("submit",()=>{a||r()},{signal:i})}var ea=new WeakMap;function uh(t){if(!ea.has(t)){let e=new EventTarget;ea.set(t,e);for(let r of["reportValidity","requestSubmit"]){let i=t[r];t[r]=function(){e.dispatchEvent(new Event("before"));let o=Reflect.apply(i,this,arguments);return e.dispatchEvent(new Event("after")),o}}}return ea.get(t)}function ph(t,e){if(!t)return!0;let r;for(let i of t.elements)if(i.matches(":invalid")){r=i;break}return r===e}var rn=class extends ar{computeValidity({state:e,renderedControl:r}){let i=r;Si(e)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);let o=Si(e)?i:null;if(o&&(o.type=e.type),i.value!==e.value&&(i.value=e.value),i.required=e.required,o){let n=e;n.pattern?o.pattern=n.pattern:o.removeAttribute("pattern"),n.min?o.min=n.min:o.removeAttribute("min"),n.max?o.max=n.max:o.removeAttribute("max"),n.step?o.step=n.step:o.removeAttribute("step")}return(e.minLength??-1)>-1?i.setAttribute("minlength",String(e.minLength)):i.removeAttribute("minlength"),(e.maxLength??-1)>-1?i.setAttribute("maxlength",String(e.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:e},{state:r}){let i=e.type===r.type&&e.value===r.value&&e.required===r.required&&e.minLength===r.minLength&&e.maxLength===r.maxLength;return!Si(e)||!Si(r)?i:i&&e.pattern===r.pattern&&e.min===r.min&&e.max===r.max&&e.step===r.step}copy({state:e}){return{state:Si(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){let{type:r,pattern:i,min:o,max:n,step:s}=e;return{...this.copySharedState(e),type:r,pattern:i,min:o,max:n,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:r,minLength:i,maxLength:o}){return{value:e,required:r,minLength:i,maxLength:o}}};function Si(t){return t.type!=="textarea"}var hh=we(tn(sr(_t(Ke(O))))),Z=class extends hh{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let r=this.getInput();r&&(r.valueAsNumber=e,this.value=r.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let r=this.getInput();r&&(r.valueAsDate=e,this.value=r.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,r,i){this.getInputOrTextarea().setSelectionRange(e,r,i)}showPicker(){let e=this.getInput();e&&e.showPicker()}stepDown(e){let r=this.getInput();r&&(r.stepDown(e),this.value=r.value)}stepUp(e){let r=this.getInput();r&&(r.stepUp(e),this.value=r.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,r,i){e==="value"&&this.dirty||super.attributeChangedCallback(e,r,i)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return v`
      <span class="text-field ${ne(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){let r=this.getInputOrTextarea().value;this.value!==r&&(this.value=r)}renderField(){return rr`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return v`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return v`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let e={direction:this.textDirection},r=this.ariaLabel||this.label||x,i=this.autocomplete,o=(this.maxLength??-1)>-1,n=(this.minLength??-1)>-1;if(this.type==="textarea")return v`
        <textarea
          class="input"
          style=${zt(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${i||x}
          name=${this.name||x}
          ?disabled=${this.disabled}
          maxlength=${o?this.maxLength:x}
          minlength=${n?this.minLength:x}
          placeholder=${this.placeholder||x}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Qs(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let s=this.renderPrefix(),a=this.renderSuffix(),l=this.inputMode;return v`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${zt(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${i||x}
          name=${this.name||x}
          ?disabled=${this.disabled}
          inputmode=${l||x}
          max=${this.max||x}
          maxlength=${o?this.maxLength:x}
          min=${this.min||x}
          minlength=${n?this.minLength:x}
          pattern=${this.pattern||x}
          placeholder=${this.placeholder||x}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||x}
          type=${this.type}
          .value=${Qs(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${a}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?v`<span class="${ne({suffix:r,prefix:!r})}">${e}</span>`:x}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){et(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[tt](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[yt](){return new rn(()=>({state:this,renderedControl:this.inputOrTextarea}))}[xt](){return this.inputOrTextarea}[Gr](e){e?.preventDefault();let r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&this.field?.reannounceError()}};Z.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};c([p({type:Boolean,reflect:!0})],Z.prototype,"error",void 0);c([p({attribute:"error-text"})],Z.prototype,"errorText",void 0);c([p()],Z.prototype,"label",void 0);c([p({type:Boolean,attribute:"no-asterisk"})],Z.prototype,"noAsterisk",void 0);c([p({type:Boolean,reflect:!0})],Z.prototype,"required",void 0);c([p()],Z.prototype,"value",void 0);c([p({attribute:"prefix-text"})],Z.prototype,"prefixText",void 0);c([p({attribute:"suffix-text"})],Z.prototype,"suffixText",void 0);c([p({type:Boolean,attribute:"has-leading-icon"})],Z.prototype,"hasLeadingIcon",void 0);c([p({type:Boolean,attribute:"has-trailing-icon"})],Z.prototype,"hasTrailingIcon",void 0);c([p({attribute:"supporting-text"})],Z.prototype,"supportingText",void 0);c([p({attribute:"text-direction"})],Z.prototype,"textDirection",void 0);c([p({type:Number})],Z.prototype,"rows",void 0);c([p({type:Number})],Z.prototype,"cols",void 0);c([p({reflect:!0})],Z.prototype,"inputMode",void 0);c([p()],Z.prototype,"max",void 0);c([p({type:Number})],Z.prototype,"maxLength",void 0);c([p()],Z.prototype,"min",void 0);c([p({type:Number})],Z.prototype,"minLength",void 0);c([p({type:Boolean,attribute:"no-spinner"})],Z.prototype,"noSpinner",void 0);c([p()],Z.prototype,"pattern",void 0);c([p({reflect:!0,converter:Lc})],Z.prototype,"placeholder",void 0);c([p({type:Boolean,reflect:!0})],Z.prototype,"readOnly",void 0);c([p({type:Boolean,reflect:!0})],Z.prototype,"multiple",void 0);c([p()],Z.prototype,"step",void 0);c([p({reflect:!0})],Z.prototype,"type",void 0);c([p({reflect:!0})],Z.prototype,"autocomplete",void 0);c([J()],Z.prototype,"dirty",void 0);c([J()],Z.prototype,"focused",void 0);c([J()],Z.prototype,"nativeError",void 0);c([J()],Z.prototype,"nativeErrorText",void 0);c([M(".input")],Z.prototype,"inputOrTextarea",void 0);c([M(".field")],Z.prototype,"field",void 0);c([Ne({slot:"leading-icon"})],Z.prototype,"leadingIcons",void 0);c([Ne({slot:"trailing-icon"})],Z.prototype,"trailingIcons",void 0);var on=class extends Z{constructor(){super(...arguments),this.fieldTag=qe`md-filled-field`}};var Vc=T`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;var ta=class extends on{constructor(){super(...arguments),this.fieldTag=qe`md-filled-field`}};ta.styles=[Vc,Rc];ta=c([R("md-filled-text-field")],ta);var nn=class extends pe{renderOutline(e){return v`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${e}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}};var Mc=T`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;var ra=class extends nn{};ra.styles=[Xo,Mc];ra=c([R("md-outlined-field")],ra);function ia(t,e=Ut){let r=Ti(t,e);return r&&(r.tabIndex=0,r.focus()),r}function oa(t,e=Ut){let r=na(t,e);return r&&(r.tabIndex=0,r.focus()),r}function lr(t,e=Ut){for(let r=0;r<t.length;r++){let i=t[r];if(i.tabIndex===0&&e(i))return{item:i,index:r}}return null}function Ti(t,e=Ut){for(let r of t)if(e(r))return r;return null}function na(t,e=Ut){for(let r=t.length-1;r>=0;r--){let i=t[r];if(e(i))return i}return null}function fh(t,e,r=Ut,i=!0){for(let o=1;o<t.length;o++){let n=(o+e)%t.length;if(n<e&&!i)return null;let s=t[n];if(r(s))return s}return t[e]?t[e]:null}function mh(t,e,r=Ut,i=!0){for(let o=1;o<t.length;o++){let n=(e-o+t.length)%t.length;if(n>e&&!i)return null;let s=t[n];if(r(s))return s}return t[e]?t[e]:null}function sa(t,e,r=Ut,i=!0){if(e){let o=fh(t,e.index,r,i);return o&&(o.tabIndex=0,o.focus()),o}else return ia(t,r)}function aa(t,e,r=Ut,i=!0){if(e){let o=mh(t,e.index,r,i);return o&&(o.tabIndex=0,o.focus()),o}else return oa(t,r)}function Ut(t){return!t.disabled}var Re={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"},sn=class{constructor(e){this.handleKeydown=u=>{let f=u.key;if(u.defaultPrevented||!this.isNavigableKey(f))return;let b=this.items;if(!b.length)return;let y=lr(b,this.isActivatable);u.preventDefault();let D=this.isRtl(),L=D?Re.ArrowRight:Re.ArrowLeft,W=D?Re.ArrowLeft:Re.ArrowRight,j=null;switch(f){case Re.ArrowDown:case W:j=sa(b,y,this.isActivatable,this.wrapNavigation());break;case Re.ArrowUp:case L:j=aa(b,y,this.isActivatable,this.wrapNavigation());break;case Re.Home:j=ia(b,this.isActivatable);break;case Re.End:j=oa(b,this.isActivatable);break;default:break}j&&y&&y.item!==j&&(y.item.tabIndex=-1)},this.onDeactivateItems=()=>{let u=this.items;for(let f of u)this.deactivateItem(f)},this.onRequestActivation=u=>{this.onDeactivateItems();let f=u.target;this.activateItem(f),f.focus()},this.onSlotchange=()=>{let u=this.items,f=!1;for(let y of u){if(!y.disabled&&y.tabIndex>-1&&!f){f=!0,y.tabIndex=0;continue}y.tabIndex=-1}if(f)return;let b=Ti(u,this.isActivatable);b&&(b.tabIndex=0)};let{isItem:r,getPossibleItems:i,isRtl:o,deactivateItem:n,activateItem:s,isNavigableKey:a,isActivatable:l,wrapNavigation:h}=e;this.isItem=r,this.getPossibleItems=i,this.isRtl=o,this.deactivateItem=n,this.activateItem=s,this.isNavigableKey=a,this.isActivatable=l,this.wrapNavigation=h??(()=>!0)}get items(){let e=this.getPossibleItems(),r=[];for(let i of e){if(this.isItem(i)){r.push(i);continue}let n=i.item;n&&this.isItem(n)&&r.push(n)}return r}activateNextItem(){let e=this.items,r=lr(e,this.isActivatable);return r&&(r.item.tabIndex=-1),sa(e,r,this.isActivatable,this.wrapNavigation())}activatePreviousItem(){let e=this.items,r=lr(e,this.isActivatable);return r&&(r.item.tabIndex=-1),aa(e,r,this.isActivatable,this.wrapNavigation())}};var Ai={END_START:"end-start",END_END:"end-end",START_START:"start-start",START_END:"start-end"},an=class{constructor(e,r){this.host=e,this.getProperties=r,this.surfaceStylesInternal={display:"none"},this.lastValues={isOpen:!1},this.host.addController(this)}get surfaceStyles(){return this.surfaceStylesInternal}async position(){let{surfaceEl:e,anchorEl:r,anchorCorner:i,surfaceCorner:o,positioning:n,xOffset:s,yOffset:a,disableBlockFlip:l,disableInlineFlip:h,repositionStrategy:u}=this.getProperties(),f=i.toLowerCase().trim(),b=o.toLowerCase().trim();if(!e||!r)return;let y=window.innerWidth,D=window.innerHeight,L=document.createElement("div");L.style.opacity="0",L.style.position="fixed",L.style.display="block",L.style.inset="0",document.body.appendChild(L);let W=L.getBoundingClientRect();L.remove();let j=window.innerHeight-W.bottom,U=window.innerWidth-W.right;this.surfaceStylesInternal={display:"block",opacity:"0"},this.host.requestUpdate(),await this.host.updateComplete,e.popover&&e.isConnected&&e.showPopover();let q=e.getSurfacePositionClientRect?e.getSurfacePositionClientRect():e.getBoundingClientRect(),P=r.getSurfacePositionClientRect?r.getSurfacePositionClientRect():r.getBoundingClientRect(),[S,H]=b.split("-"),[K,F]=f.split("-"),ae=getComputedStyle(e).direction==="ltr",{blockInset:Te,blockOutOfBoundsCorrection:_e,surfaceBlockProperty:lt}=this.calculateBlock({surfaceRect:q,anchorRect:P,anchorBlock:K,surfaceBlock:S,yOffset:a,positioning:n,windowInnerHeight:D,blockScrollbarHeight:j});if(_e&&!l){let Ae=S==="start"?"end":"start",ue=K==="start"?"end":"start",Q=this.calculateBlock({surfaceRect:q,anchorRect:P,anchorBlock:ue,surfaceBlock:Ae,yOffset:a,positioning:n,windowInnerHeight:D,blockScrollbarHeight:j});_e>Q.blockOutOfBoundsCorrection&&(Te=Q.blockInset,_e=Q.blockOutOfBoundsCorrection,lt=Q.surfaceBlockProperty)}let{inlineInset:It,inlineOutOfBoundsCorrection:$t,surfaceInlineProperty:Lr}=this.calculateInline({surfaceRect:q,anchorRect:P,anchorInline:F,surfaceInline:H,xOffset:s,positioning:n,isLTR:ae,windowInnerWidth:y,inlineScrollbarWidth:U});if($t&&!h){let Ae=H==="start"?"end":"start",ue=F==="start"?"end":"start",Q=this.calculateInline({surfaceRect:q,anchorRect:P,anchorInline:ue,surfaceInline:Ae,xOffset:s,positioning:n,isLTR:ae,windowInnerWidth:y,inlineScrollbarWidth:U});Math.abs($t)>Math.abs(Q.inlineOutOfBoundsCorrection)&&(It=Q.inlineInset,$t=Q.inlineOutOfBoundsCorrection,Lr=Q.surfaceInlineProperty)}u==="move"&&(Te=Te-_e,It=It-$t),this.surfaceStylesInternal={display:"block",opacity:"1",[lt]:`${Te}px`,[Lr]:`${It}px`},u==="resize"&&(_e&&(this.surfaceStylesInternal.height=`${q.height-_e}px`),$t&&(this.surfaceStylesInternal.width=`${q.width-$t}px`)),this.host.requestUpdate()}calculateBlock(e){let{surfaceRect:r,anchorRect:i,anchorBlock:o,surfaceBlock:n,yOffset:s,positioning:a,windowInnerHeight:l,blockScrollbarHeight:h}=e,u=a==="fixed"||a==="document"?1:0,f=a==="document"?1:0,b=n==="start"?1:0,y=n==="end"?1:0,L=(o!==n?1:0)*i.height+s,W=b*i.top+y*(l-i.bottom-h),j=b*window.scrollY-y*window.scrollY,U=Math.abs(Math.min(0,l-W-L-r.height));return{blockInset:u*W+f*j+L,blockOutOfBoundsCorrection:U,surfaceBlockProperty:n==="start"?"inset-block-start":"inset-block-end"}}calculateInline(e){let{isLTR:r,surfaceInline:i,anchorInline:o,anchorRect:n,surfaceRect:s,xOffset:a,positioning:l,windowInnerWidth:h,inlineScrollbarWidth:u}=e,f=l==="fixed"||l==="document"?1:0,b=l==="document"?1:0,y=r?1:0,D=r?0:1,L=i==="start"?1:0,W=i==="end"?1:0,U=(o!==i?1:0)*n.width+a,q=L*n.left+W*(h-n.right-u),P=L*(h-n.right-u)+W*n.left,S=y*q+D*P,H=L*window.scrollX-W*window.scrollX,K=W*window.scrollX-L*window.scrollX,F=y*H+D*K,ae=Math.abs(Math.min(0,h-S-U-s.width)),Te=f*S+U+b*F,_e=i==="start"?"inset-inline-start":"inset-inline-end";return(l==="document"||l==="fixed")&&(i==="start"&&r||i==="end"&&!r?_e="left":_e="right"),{inlineInset:Te,inlineOutOfBoundsCorrection:ae,surfaceInlineProperty:_e}}hostUpdate(){this.onUpdate()}hostUpdated(){this.onUpdate()}async onUpdate(){let e=this.getProperties(),r=!1;for(let[s,a]of Object.entries(e))if(r=r||a!==this.lastValues[s],r)break;let i=this.lastValues.isOpen!==e.isOpen,o=!!e.anchorEl,n=!!e.surfaceEl;r&&o&&n&&(this.lastValues.isOpen=e.isOpen,e.isOpen?(this.lastValues=e,await this.position(),e.onOpen()):i&&(await e.beforeClose(),this.close(),e.onClose()))}close(){this.surfaceStylesInternal={display:"none"},this.host.requestUpdate();let e=this.getProperties().surfaceEl;e?.popover&&e?.isConnected&&e.hidePopover()}};var ot={INDEX:0,ITEM:1,TEXT:2},ln=class{constructor(e){this.getProperties=e,this.typeaheadRecords=[],this.typaheadBuffer="",this.cancelTypeaheadTimeout=0,this.isTypingAhead=!1,this.lastActiveRecord=null,this.onKeydown=r=>{this.isTypingAhead?this.typeahead(r):this.beginTypeahead(r)},this.endTypeahead=()=>{this.isTypingAhead=!1,this.typaheadBuffer="",this.typeaheadRecords=[]}}get items(){return this.getProperties().getItems()}get active(){return this.getProperties().active}beginTypeahead(e){this.active&&(e.code==="Space"||e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"||(this.isTypingAhead=!0,this.typeaheadRecords=this.items.map((r,i)=>[i,r,r.typeaheadText.trim().toLowerCase()]),this.lastActiveRecord=this.typeaheadRecords.find(r=>r[ot.ITEM].tabIndex===0)??null,this.lastActiveRecord&&(this.lastActiveRecord[ot.ITEM].tabIndex=-1),this.typeahead(e)))}typeahead(e){if(e.defaultPrevented)return;if(clearTimeout(this.cancelTypeaheadTimeout),e.code==="Enter"||e.code.startsWith("Arrow")||e.code==="Escape"){this.endTypeahead(),this.lastActiveRecord&&(this.lastActiveRecord[ot.ITEM].tabIndex=-1);return}e.code==="Space"&&e.preventDefault(),this.cancelTypeaheadTimeout=setTimeout(this.endTypeahead,this.getProperties().typeaheadBufferTime),this.typaheadBuffer+=e.key.toLowerCase();let r=this.lastActiveRecord?this.lastActiveRecord[ot.INDEX]:-1,i=this.typeaheadRecords.length,o=l=>(l[ot.INDEX]+i-r)%i,n=this.typeaheadRecords.filter(l=>!l[ot.ITEM].disabled&&l[ot.TEXT].startsWith(this.typaheadBuffer)).sort((l,h)=>o(l)-o(h));if(n.length===0){clearTimeout(this.cancelTypeaheadTimeout),this.lastActiveRecord&&(this.lastActiveRecord[ot.ITEM].tabIndex=-1),this.endTypeahead();return}let s=this.typaheadBuffer.length===1,a;this.lastActiveRecord===n[0]&&s?a=n[1]??n[0]:a=n[0],this.lastActiveRecord&&(this.lastActiveRecord[ot.ITEM].tabIndex=-1),this.lastActiveRecord=a,a[ot.ITEM].tabIndex=0,a[ot.ITEM].focus()}};var la=200,Pc=new Set([Re.ArrowDown,Re.ArrowUp,Re.Home,Re.End]),vh=new Set([Re.ArrowLeft,Re.ArrowRight,...Pc]);function gh(t=document){let e=t.activeElement;for(;e&&e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}var me=class extends O{get openDirection(){return this.menuCorner.split("-")[0]==="start"?"DOWN":"UP"}get anchorElement(){return this.anchor?this.getRootNode().querySelector(`#${this.anchor}`):this.currentAnchorElement}set anchorElement(e){this.currentAnchorElement=e,this.requestUpdate("anchorElement")}constructor(){super(),this.anchor="",this.positioning="absolute",this.quick=!1,this.hasOverflow=!1,this.open=!1,this.xOffset=0,this.yOffset=0,this.noHorizontalFlip=!1,this.noVerticalFlip=!1,this.typeaheadDelay=la,this.anchorCorner=Ai.END_START,this.menuCorner=Ai.START_START,this.stayOpenOnOutsideClick=!1,this.stayOpenOnFocusout=!1,this.skipRestoreFocus=!1,this.defaultFocus=Ge.FIRST_ITEM,this.noNavigationWrap=!1,this.typeaheadActive=!0,this.isSubmenu=!1,this.pointerPath=[],this.isRepositioning=!1,this.openCloseAnimationSignal=cc(),this.listController=new sn({isItem:e=>e.hasAttribute("md-menu-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:e=>{e.selected=!1,e.tabIndex=-1},activateItem:e=>{e.selected=!0,e.tabIndex=0},isNavigableKey:e=>{if(!this.isSubmenu)return vh.has(e);let i=getComputedStyle(this).direction==="rtl"?Re.ArrowLeft:Re.ArrowRight;return e===i?!0:Pc.has(e)},wrapNavigation:()=>!this.noNavigationWrap}),this.lastFocusedElement=null,this.typeaheadController=new ln(()=>({getItems:()=>this.items,typeaheadBufferTime:this.typeaheadDelay,active:this.typeaheadActive})),this.currentAnchorElement=null,this.internals=this.attachInternals(),this.menuPositionController=new an(this,()=>({anchorCorner:this.anchorCorner,surfaceCorner:this.menuCorner,surfaceEl:this.surfaceEl,anchorEl:this.anchorElement,positioning:this.positioning==="popover"?"document":this.positioning,isOpen:this.open,xOffset:this.xOffset,yOffset:this.yOffset,disableBlockFlip:this.noVerticalFlip,disableInlineFlip:this.noHorizontalFlip,onOpen:this.onOpened,beforeClose:this.beforeClose,onClose:this.onClosed,repositionStrategy:this.hasOverflow&&this.positioning!=="popover"?"move":"resize"})),this.onWindowResize=()=>{this.isRepositioning||this.positioning!=="document"&&this.positioning!=="fixed"&&this.positioning!=="popover"||(this.isRepositioning=!0,this.reposition(),this.isRepositioning=!1)},this.handleFocusout=async e=>{let r=this.anchorElement;if(this.stayOpenOnFocusout||!this.open||this.pointerPath.includes(r))return;if(e.relatedTarget){if(Ei(e.relatedTarget,this)||this.pointerPath.length!==0&&Ei(e.relatedTarget,r))return}else if(this.pointerPath.includes(this))return;let i=this.skipRestoreFocus;this.skipRestoreFocus=!0,this.close(),await this.updateComplete,this.skipRestoreFocus=i},this.onOpened=async()=>{this.lastFocusedElement=gh();let e=this.items,r=lr(e);r&&this.defaultFocus!==Ge.NONE&&(r.item.tabIndex=-1);let i=!this.quick;switch(this.quick?this.dispatchEvent(new Event("opening")):i=!!await this.animateOpen(),this.defaultFocus){case Ge.FIRST_ITEM:let o=Ti(e);o&&(o.tabIndex=0,o.focus(),await o.updateComplete);break;case Ge.LAST_ITEM:let n=na(e);n&&(n.tabIndex=0,n.focus(),await n.updateComplete);break;case Ge.LIST_ROOT:this.focus();break;default:case Ge.NONE:break}i||this.dispatchEvent(new Event("opened"))},this.beforeClose=async()=>{this.open=!1,this.skipRestoreFocus||this.lastFocusedElement?.focus?.(),this.quick||await this.animateClose()},this.onClosed=()=>{this.quick&&(this.dispatchEvent(new Event("closing")),this.dispatchEvent(new Event("closed")))},this.onWindowPointerdown=e=>{this.pointerPath=e.composedPath()},this.onDocumentClick=e=>{if(!this.open)return;let r=e.composedPath();!this.stayOpenOnOutsideClick&&!r.includes(this)&&!r.includes(this.anchorElement)&&(this.open=!1)},this.internals.role="menu",this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keydown",this.captureKeydown,{capture:!0}),this.addEventListener("focusout",this.handleFocusout)}get items(){return this.listController.items}willUpdate(e){if(e.has("open")){if(this.open){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}}update(e){e.has("open")&&(this.open?this.setUpGlobalEventListeners():this.cleanUpGlobalEventListeners()),e.has("positioning")&&this.positioning==="popover"&&!this.showPopover&&(this.positioning="fixed"),super.update(e)}connectedCallback(){super.connectedCallback(),this.open&&this.setUpGlobalEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.cleanUpGlobalEventListeners()}getBoundingClientRect(){return this.surfaceEl?this.surfaceEl.getBoundingClientRect():super.getBoundingClientRect()}getClientRects(){return this.surfaceEl?this.surfaceEl.getClientRects():super.getClientRects()}render(){return this.renderSurface()}renderSurface(){return v`
      <div
        class="menu ${ne(this.getSurfaceClasses())}"
        style=${zt(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning==="popover"?"manual":x}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `}renderMenuItems(){return v`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`}renderElevation(){return v`<md-elevation part="elevation"></md-elevation>`}getSurfaceClasses(){return{open:this.open,fixed:this.positioning==="fixed","has-overflow":this.hasOverflow}}captureKeydown(e){e.target===this&&!e.defaultPrevented&&zo(e.code)&&(e.preventDefault(),this.close()),this.typeaheadController.onKeydown(e)}async animateOpen(){let e=this.surfaceEl,r=this.slotEl;if(!e||!r)return!0;let i=this.openDirection;this.dispatchEvent(new Event("opening")),e.classList.toggle("animating",!0);let o=this.openCloseAnimationSignal.start(),n=e.offsetHeight,s=i==="UP",a=this.items,l=500,h=50,u=250,f=(l-u)/a.length,b=e.animate([{height:"0px"},{height:`${n}px`}],{duration:l,easing:Pe.EMPHASIZED}),y=r.animate([{transform:s?`translateY(-${n}px)`:""},{transform:""}],{duration:l,easing:Pe.EMPHASIZED}),D=e.animate([{opacity:0},{opacity:1}],h),L=[];for(let U=0;U<a.length;U++){let q=s?a.length-1-U:U,P=a[q],S=P.animate([{opacity:0},{opacity:1}],{duration:u,delay:f*U});P.classList.toggle("md-menu-hidden",!0),S.addEventListener("finish",()=>{P.classList.toggle("md-menu-hidden",!1)}),L.push([P,S])}let W=U=>{},j=new Promise(U=>{W=U});return o.addEventListener("abort",()=>{b.cancel(),y.cancel(),D.cancel(),L.forEach(([U,q])=>{U.classList.toggle("md-menu-hidden",!1),q.cancel()}),W(!0)}),b.addEventListener("finish",()=>{e.classList.toggle("animating",!1),this.openCloseAnimationSignal.finish(),W(!1)}),await j}animateClose(){let e,r=new Promise(S=>{e=S}),i=this.surfaceEl,o=this.slotEl;if(!i||!o)return e(!1),r;let s=this.openDirection==="UP";this.dispatchEvent(new Event("closing")),i.classList.toggle("animating",!0);let a=this.openCloseAnimationSignal.start(),l=i.offsetHeight,h=this.items,u=150,f=50,b=u-f,y=50,D=50,L=.35,W=(u-D-y)/h.length,j=i.animate([{height:`${l}px`},{height:`${l*L}px`}],{duration:u,easing:Pe.EMPHASIZED_ACCELERATE}),U=o.animate([{transform:""},{transform:s?`translateY(-${l*(1-L)}px)`:""}],{duration:u,easing:Pe.EMPHASIZED_ACCELERATE}),q=i.animate([{opacity:1},{opacity:0}],{duration:f,delay:b}),P=[];for(let S=0;S<h.length;S++){let H=s?S:h.length-1-S,K=h[H],F=K.animate([{opacity:1},{opacity:0}],{duration:y,delay:D+W*S});F.addEventListener("finish",()=>{K.classList.toggle("md-menu-hidden",!0)}),P.push([K,F])}return a.addEventListener("abort",()=>{j.cancel(),U.cancel(),q.cancel(),P.forEach(([S,H])=>{H.cancel(),S.classList.toggle("md-menu-hidden",!1)}),e(!1)}),j.addEventListener("finish",()=>{i.classList.toggle("animating",!1),P.forEach(([S])=>{S.classList.toggle("md-menu-hidden",!1)}),this.openCloseAnimationSignal.finish(),this.dispatchEvent(new Event("closed")),e(!0)}),r}handleKeydown(e){this.pointerPath=[],this.listController.handleKeydown(e)}setUpGlobalEventListeners(){document.addEventListener("click",this.onDocumentClick,{capture:!0}),window.addEventListener("pointerdown",this.onWindowPointerdown),document.addEventListener("resize",this.onWindowResize,{passive:!0}),window.addEventListener("resize",this.onWindowResize,{passive:!0})}cleanUpGlobalEventListeners(){document.removeEventListener("click",this.onDocumentClick,{capture:!0}),window.removeEventListener("pointerdown",this.onWindowPointerdown),document.removeEventListener("resize",this.onWindowResize),window.removeEventListener("resize",this.onWindowResize)}onCloseMenu(){this.close()}onDeactivateItems(e){e.stopPropagation(),this.listController.onDeactivateItems()}onRequestActivation(e){e.stopPropagation(),this.listController.onRequestActivation(e)}handleDeactivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!1}handleActivateTypeahead(e){e.stopPropagation(),this.typeaheadActive=!0}handleStayOpenOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!0}handleCloseOnFocusout(e){e.stopPropagation(),this.stayOpenOnFocusout=!1}close(){this.open=!1,this.slotItems.forEach(r=>{r.close?.()})}show(){this.open=!0}activateNextItem(){return this.listController.activateNextItem()??null}activatePreviousItem(){return this.listController.activatePreviousItem()??null}reposition(){this.open&&this.menuPositionController.position()}};c([M(".menu")],me.prototype,"surfaceEl",void 0);c([M("slot")],me.prototype,"slotEl",void 0);c([p()],me.prototype,"anchor",void 0);c([p()],me.prototype,"positioning",void 0);c([p({type:Boolean})],me.prototype,"quick",void 0);c([p({type:Boolean,attribute:"has-overflow"})],me.prototype,"hasOverflow",void 0);c([p({type:Boolean,reflect:!0})],me.prototype,"open",void 0);c([p({type:Number,attribute:"x-offset"})],me.prototype,"xOffset",void 0);c([p({type:Number,attribute:"y-offset"})],me.prototype,"yOffset",void 0);c([p({type:Boolean,attribute:"no-horizontal-flip"})],me.prototype,"noHorizontalFlip",void 0);c([p({type:Boolean,attribute:"no-vertical-flip"})],me.prototype,"noVerticalFlip",void 0);c([p({type:Number,attribute:"typeahead-delay"})],me.prototype,"typeaheadDelay",void 0);c([p({attribute:"anchor-corner"})],me.prototype,"anchorCorner",void 0);c([p({attribute:"menu-corner"})],me.prototype,"menuCorner",void 0);c([p({type:Boolean,attribute:"stay-open-on-outside-click"})],me.prototype,"stayOpenOnOutsideClick",void 0);c([p({type:Boolean,attribute:"stay-open-on-focusout"})],me.prototype,"stayOpenOnFocusout",void 0);c([p({type:Boolean,attribute:"skip-restore-focus"})],me.prototype,"skipRestoreFocus",void 0);c([p({attribute:"default-focus"})],me.prototype,"defaultFocus",void 0);c([p({type:Boolean,attribute:"no-navigation-wrap"})],me.prototype,"noNavigationWrap",void 0);c([Ne({flatten:!0})],me.prototype,"slotItems",void 0);c([J()],me.prototype,"typeaheadActive",void 0);var Fc=T`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;var ca=class extends me{};ca.styles=[Fc];ca=c([R("md-menu")],ca);var cn=class extends ar{computeValidity(e){return this.selectControl||(this.selectControl=document.createElement("select")),Fr(v`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,r){return e.value===r.value&&e.required===r.required}copy({value:e,required:r}){return{value:e,required:r}}};function zc(t){let e=[];for(let r=0;r<t.length;r++){let i=t[r];i.selected&&e.push([i,r])}return e}var Uc,dn=Symbol("value"),bh=we(tn(sr(_t(Ke(O))))),ce=class extends bh{get value(){return this[dn]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,r]=(this.getSelectedOptions()??[])[0]??[];return r??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=la,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[Uc]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=Ge.NONE,this.prevOpen=this.open,this.selectWidth=0,!!1&&(this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this)))}select(e){let r=this.options.find(i=>i.value===e);r&&this.selectItem(r)}selectIndex(e){let r=this.options[e];r&&this.selectItem(r)}reset(){for(let e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}[(Uc=dn,Gr)](e){e?.preventDefault();let r=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,r===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){let r=this.getBoundingClientRect();this.selectWidth=r.width}this.prevOpen=this.open,super.update(e)}render(){return v`
      <span
        class="select ${ne(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!!1&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){let e=this.ariaLabel||this.label;return rr`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${e||x}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return v`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return v`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return v`<div id="label">${this.displayText||v`&nbsp;`}</div>`}renderMenu(){let e=this.label||this.ariaLabel;return v`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||x}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${zt({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign==="start"?"end-start":"end-end"}
        .menuCorner=${this.menuAlign==="start"?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return v`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let r=this.menu.typeaheadController,i=e.code==="Space"||e.code==="ArrowDown"||e.code==="ArrowUp"||e.code==="End"||e.code==="Home"||e.code==="Enter";if(!r.isTypingAhead&&i){switch(e.preventDefault(),this.open=!0,e.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=Ge.NONE;break;case"End":this.defaultFocus=Ge.LAST_ITEM;break;case"ArrowUp":case"Home":this.defaultFocus=Ge.FIRST_ITEM;break;default:break}return}if(e.key.length===1){r.onKeydown(e),e.preventDefault();let{lastActiveRecord:n}=r;if(!n)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(n[ot.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&Ei(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=zc(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],r=!1;if(e.length){let[i]=e[0];r=this.lastSelectedOption!==i,this.lastSelectedOption=i,this[dn]=i.value,this.displayText=i.displayText}else r=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[dn]="",this.displayText="";return r}async handleOpening(e){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e),this.defaultFocus!==Ge.NONE)return;let r=this.menu.items,i=lr(r)?.item,[o]=this.lastSelectedOptionRecords[0]??[null];i&&i!==o&&(i.tabIndex=-1),o=o??r[0],o&&(o.tabIndex=0,o.focus())}redispatchEvent(e){et(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let r=e.detail.reason,i=e.detail.itemPath[0];this.open=!1;let o=!1;r.kind==="click-selection"?o=this.selectItem(i):r.kind==="keydown"&&gc(r.key)?o=this.selectItem(i):(i.tabIndex=-1,i.blur()),o&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach(([i])=>{e!==i&&(i.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){let r=e.target;this.lastSelectedOptionRecords.some(([i])=>i===r)||this.selectItem(r)}handleRequestDeselection(e){let r=e.target;this.lastSelectedOptionRecords.some(([i])=>i===r)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[tt](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[yt](){return new cn(()=>this)}[xt](){return this.field}};ce.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};c([p({type:Boolean})],ce.prototype,"quick",void 0);c([p({type:Boolean})],ce.prototype,"required",void 0);c([p({type:String,attribute:"error-text"})],ce.prototype,"errorText",void 0);c([p()],ce.prototype,"label",void 0);c([p({type:Boolean,attribute:"no-asterisk"})],ce.prototype,"noAsterisk",void 0);c([p({type:String,attribute:"supporting-text"})],ce.prototype,"supportingText",void 0);c([p({type:Boolean,reflect:!0})],ce.prototype,"error",void 0);c([p({attribute:"menu-positioning"})],ce.prototype,"menuPositioning",void 0);c([p({type:Boolean,attribute:"clamp-menu-width"})],ce.prototype,"clampMenuWidth",void 0);c([p({type:Number,attribute:"typeahead-delay"})],ce.prototype,"typeaheadDelay",void 0);c([p({type:Boolean,attribute:"has-leading-icon"})],ce.prototype,"hasLeadingIcon",void 0);c([p({attribute:"display-text"})],ce.prototype,"displayText",void 0);c([p({attribute:"menu-align"})],ce.prototype,"menuAlign",void 0);c([p()],ce.prototype,"value",null);c([p({type:Number,attribute:"selected-index"})],ce.prototype,"selectedIndex",null);c([J()],ce.prototype,"nativeError",void 0);c([J()],ce.prototype,"nativeErrorText",void 0);c([J()],ce.prototype,"focused",void 0);c([J()],ce.prototype,"open",void 0);c([J()],ce.prototype,"defaultFocus",void 0);c([M(".field")],ce.prototype,"field",void 0);c([M("md-menu")],ce.prototype,"menu",void 0);c([M("#label")],ce.prototype,"labelEl",void 0);c([Ne({slot:"leading-icon",flatten:!0})],ce.prototype,"leadingIcons",void 0);var un=class extends ce{constructor(){super(...arguments),this.fieldTag=qe`md-outlined-field`}};var Hc=T`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`;var Bc=T`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`;var da=class extends un{};da.styles=[Bc,Hc];da=c([R("md-outlined-select")],da);var jc={dialog:[[[{transform:"translateY(-50px)"},{transform:"translateY(0)"}],{duration:500,easing:Pe.EMPHASIZED}]],scrim:[[[{opacity:0},{opacity:.32}],{duration:500,easing:"linear"}]],container:[[[{opacity:0},{opacity:1}],{duration:50,easing:"linear",pseudoElement:"::before"}],[[{height:"35%"},{height:"100%"}],{duration:500,easing:Pe.EMPHASIZED,pseudoElement:"::before"}]],headline:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],content:[[[{opacity:0},{opacity:0,offset:.2},{opacity:1}],{duration:250,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:300,easing:"linear",fill:"forwards"}]]},Wc={dialog:[[[{transform:"translateY(0)"},{transform:"translateY(-50px)"}],{duration:150,easing:Pe.EMPHASIZED_ACCELERATE}]],scrim:[[[{opacity:.32},{opacity:0}],{duration:150,easing:"linear"}]],container:[[[{height:"100%"},{height:"35%"}],{duration:150,easing:Pe.EMPHASIZED_ACCELERATE,pseudoElement:"::before"}],[[{opacity:"1"},{opacity:"0"}],{delay:100,duration:50,easing:"linear",pseudoElement:"::before"}]],headline:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],content:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]],actions:[[[{opacity:1},{opacity:0}],{duration:100,easing:"linear",fill:"forwards"}]]};var yh=we(O),ve=class extends yh{get open(){return this.isOpen}set open(e){e!==this.isOpen&&(this.isOpen=e,e?(this.setAttribute("open",""),this.show()):(this.removeAttribute("open"),this.close()))}constructor(){super(),this.quick=!1,this.returnValue="",this.noFocusTrap=!1,this.getOpenAnimation=()=>jc,this.getCloseAnimation=()=>Wc,this.isOpen=!1,this.isOpening=!1,this.isConnectedPromise=this.getIsConnectedPromise(),this.isAtScrollTop=!1,this.isAtScrollBottom=!1,this.nextClickIsFromContent=!1,this.hasHeadline=!1,this.hasActions=!1,this.hasIcon=!1,this.escapePressedWithoutCancel=!1,this.treewalker=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT),this.addEventListener("submit",this.handleSubmit)}async show(){this.isOpening=!0,await this.isConnectedPromise,await this.updateComplete;let e=this.dialog;if(e.open||!this.isOpening){this.isOpening=!1;return}if(!this.dispatchEvent(new Event("open",{cancelable:!0}))){this.open=!1,this.isOpening=!1;return}e.showModal(),this.open=!0,this.scroller&&(this.scroller.scrollTop=0),this.querySelector("[autofocus]")?.focus(),await this.animateDialog(this.getOpenAnimation()),this.dispatchEvent(new Event("opened")),this.isOpening=!1}async close(e=this.returnValue){if(this.isOpening=!1,!this.isConnected){this.open=!1;return}await this.updateComplete;let r=this.dialog;if(!r.open||this.isOpening){this.open=!1;return}let i=this.returnValue;if(this.returnValue=e,!this.dispatchEvent(new Event("close",{cancelable:!0}))){this.returnValue=i;return}await this.animateDialog(this.getCloseAnimation()),r.close(e),this.open=!1,this.dispatchEvent(new Event("closed"))}connectedCallback(){super.connectedCallback(),this.isConnectedPromiseResolve()}disconnectedCallback(){super.disconnectedCallback(),this.isConnectedPromise=this.getIsConnectedPromise()}render(){let e=this.open&&!(this.isAtScrollTop&&this.isAtScrollBottom),r={"has-headline":this.hasHeadline,"has-actions":this.hasActions,"has-icon":this.hasIcon,scrollable:e,"show-top-divider":e&&!this.isAtScrollTop,"show-bottom-divider":e&&!this.isAtScrollBottom},i=this.open&&!this.noFocusTrap,o=v`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `,{ariaLabel:n}=this;return v`
      <div class="scrim"></div>
      <dialog
        class=${ne(r)}
        aria-label=${n||x}
        aria-labelledby=${this.hasHeadline?"headline":x}
        role=${this.type==="alert"?"alertdialog":x}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue||x}>
        ${i?o:x}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline||x}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${i?o:x}
      </dialog>
    `}firstUpdated(){this.intersectionObserver=new IntersectionObserver(e=>{for(let r of e)this.handleAnchorIntersection(r)},{root:this.scroller}),this.intersectionObserver.observe(this.topAnchor),this.intersectionObserver.observe(this.bottomAnchor)}handleDialogClick(){if(this.nextClickIsFromContent){this.nextClickIsFromContent=!1;return}this.dispatchEvent(new Event("cancel",{cancelable:!0}))&&this.close()}handleContentClick(){this.nextClickIsFromContent=!0}handleSubmit(e){let r=e.target,{submitter:i}=e;r.getAttribute("method")!=="dialog"||!i||this.close(i.getAttribute("value")??this.returnValue)}handleCancel(e){if(e.target!==this.dialog)return;this.escapePressedWithoutCancel=!1;let r=!et(this,e);e.preventDefault(),!r&&this.close()}handleClose(){this.escapePressedWithoutCancel&&(this.escapePressedWithoutCancel=!1,this.dialog?.dispatchEvent(new Event("cancel",{cancelable:!0})))}handleKeydown(e){e.key==="Escape"&&(this.escapePressedWithoutCancel=!0,setTimeout(()=>{this.escapePressedWithoutCancel=!1}))}async animateDialog(e){if(this.cancelAnimations?.abort(),this.cancelAnimations=new AbortController,this.quick)return;let{dialog:r,scrim:i,container:o,headline:n,content:s,actions:a}=this;if(!r||!i||!o||!n||!s||!a)return;let{container:l,dialog:h,scrim:u,headline:f,content:b,actions:y}=e,D=[[r,h??[]],[i,u??[]],[o,l??[]],[n,f??[]],[s,b??[]],[a,y??[]]],L=[];for(let[W,j]of D)for(let U of j){let q=W.animate(...U);this.cancelAnimations.signal.addEventListener("abort",()=>{q.cancel()}),L.push(q)}await Promise.all(L.map(W=>W.finished.catch(()=>{})))}handleHeadlineChange(e){let r=e.target;this.hasHeadline=r.assignedElements().length>0}handleActionsChange(e){let r=e.target;this.hasActions=r.assignedElements().length>0}handleIconChange(e){let r=e.target;this.hasIcon=r.assignedElements().length>0}handleAnchorIntersection(e){let{target:r,isIntersecting:i}=e;r===this.topAnchor&&(this.isAtScrollTop=i),r===this.bottomAnchor&&(this.isAtScrollBottom=i)}getIsConnectedPromise(){return new Promise(e=>{this.isConnectedPromiseResolve=e})}handleFocusTrapFocus(e){let[r,i]=this.getFirstAndLastFocusableChildren();if(!r||!i){this.dialog?.focus();return}let o=e.target===this.firstFocusTrap,n=!o,s=e.relatedTarget===r,a=e.relatedTarget===i,l=!s&&!a;if(n&&a||o&&l){r.focus();return}if(o&&s||n&&l){i.focus();return}}getFirstAndLastFocusableChildren(){if(!this.treewalker)return[null,null];let e=null,r=null;for(this.treewalker.currentNode=this.treewalker.root;this.treewalker.nextNode();){let i=this.treewalker.currentNode;xh(i)&&(e||(e=i),r=i)}return[e,r]}};c([p({type:Boolean})],ve.prototype,"open",null);c([p({type:Boolean})],ve.prototype,"quick",void 0);c([p({attribute:!1})],ve.prototype,"returnValue",void 0);c([p()],ve.prototype,"type",void 0);c([p({type:Boolean,attribute:"no-focus-trap"})],ve.prototype,"noFocusTrap",void 0);c([M("dialog")],ve.prototype,"dialog",void 0);c([M(".scrim")],ve.prototype,"scrim",void 0);c([M(".container")],ve.prototype,"container",void 0);c([M(".headline")],ve.prototype,"headline",void 0);c([M(".content")],ve.prototype,"content",void 0);c([M(".actions")],ve.prototype,"actions",void 0);c([J()],ve.prototype,"isAtScrollTop",void 0);c([J()],ve.prototype,"isAtScrollBottom",void 0);c([M(".scroller")],ve.prototype,"scroller",void 0);c([M(".top.anchor")],ve.prototype,"topAnchor",void 0);c([M(".bottom.anchor")],ve.prototype,"bottomAnchor",void 0);c([M(".focus-trap")],ve.prototype,"firstFocusTrap",void 0);c([J()],ve.prototype,"hasHeadline",void 0);c([J()],ve.prototype,"hasActions",void 0);c([J()],ve.prototype,"hasIcon",void 0);function xh(t){let e=":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])",r=":not(:disabled,[disabled])";return t.matches(e+r+':not([tabindex^="-"])')?!0:!t.localName.includes("-")||!t.matches(r)?!1:t.shadowRoot?.delegatesFocus??!1}var qc=T`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;var ua=class extends ve{};ua.styles=[qc];ua=c([R("md-dialog")],ua);var Kc=T`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`;function pn(t,e,r){return t?e(t):r?.(t)}var _h=we(_t(Ke(O))),re=class extends _h{get nameStart(){return this.getAttribute("name-start")??this.name}set nameStart(e){this.setAttribute("name-start",e)}get nameEnd(){return this.getAttribute("name-end")??this.nameStart}set nameEnd(e){this.setAttribute("name-end",e)}get renderAriaLabelStart(){let{ariaLabel:e}=this;return this.ariaLabelStart||e&&`${e} start`||this.valueLabelStart||String(this.valueStart)}get renderAriaValueTextStart(){return this.ariaValueTextStart||this.valueLabelStart||String(this.valueStart)}get renderAriaLabelEnd(){let{ariaLabel:e}=this;return this.range?this.ariaLabelEnd||e&&`${e} end`||this.valueLabelEnd||String(this.valueEnd):e||this.valueLabel||String(this.value)}get renderAriaValueTextEnd(){if(this.range)return this.ariaValueTextEnd||this.valueLabelEnd||String(this.valueEnd);let{ariaValueText:e}=this;return e||this.valueLabel||String(this.value)}constructor(){super(),this.min=0,this.max=100,this.valueLabel="",this.valueLabelStart="",this.valueLabelEnd="",this.ariaLabelStart="",this.ariaValueTextStart="",this.ariaLabelEnd="",this.ariaValueTextEnd="",this.step=1,this.ticks=!1,this.labeled=!1,this.range=!1,this.handleStartHover=!1,this.handleEndHover=!1,this.startOnTop=!1,this.handlesOverlapping=!1,this.ripplePointerId=1,this.isRedispatchingEvent=!1,this.addEventListener("click",e=>{!nr(e)||!this.inputEnd||(this.focus(),or(this.inputEnd))})}focus(){this.inputEnd?.focus()}willUpdate(e){this.renderValueStart=e.has("valueStart")?this.valueStart:this.inputStart?.valueAsNumber;let r=e.has("valueEnd")&&this.range||e.has("value");this.renderValueEnd=r?this.range?this.valueEnd:this.value:this.inputEnd?.valueAsNumber,e.get("handleStartHover")!==void 0?this.toggleRippleHover(this.rippleStart,this.handleStartHover):e.get("handleEndHover")!==void 0&&this.toggleRippleHover(this.rippleEnd,this.handleEndHover)}updated(e){if(this.range&&(this.renderValueStart=this.inputStart.valueAsNumber),this.renderValueEnd=this.inputEnd.valueAsNumber,this.range){let r=(this.max-this.min)/3;if(this.valueStart===void 0){this.inputStart.valueAsNumber=this.min+r;let i=this.inputStart.valueAsNumber;this.valueStart=this.renderValueStart=i}if(this.valueEnd===void 0){this.inputEnd.valueAsNumber=this.min+2*r;let i=this.inputEnd.valueAsNumber;this.valueEnd=this.renderValueEnd=i}}else this.value??=this.renderValueEnd;if(e.has("range")||e.has("renderValueStart")||e.has("renderValueEnd")||this.isUpdatePending){let r=this.handleStart?.querySelector(".handleNub"),i=this.handleEnd?.querySelector(".handleNub");this.handlesOverlapping=wh(r,i)}this.performUpdate()}render(){let e=this.step===0?1:this.step,r=Math.max(this.max-this.min,e),i=this.range?((this.renderValueStart??this.min)-this.min)/r:0,o=((this.renderValueEnd??this.min)-this.min)/r,n={"--_start-fraction":String(i),"--_end-fraction":String(o),"--_tick-count":String(r/e)},s={ranged:this.range},a=this.valueLabelStart||String(this.renderValueStart),l=(this.range?this.valueLabelEnd:this.valueLabel)||String(this.renderValueEnd),h={start:!0,value:this.renderValueStart,ariaLabel:this.renderAriaLabelStart,ariaValueText:this.renderAriaValueTextStart,ariaMin:this.min,ariaMax:this.valueEnd??this.max},u={start:!1,value:this.renderValueEnd,ariaLabel:this.renderAriaLabelEnd,ariaValueText:this.renderAriaValueTextEnd,ariaMin:this.range?this.valueStart??this.min:this.min,ariaMax:this.max},f={start:!0,hover:this.handleStartHover,label:a},b={start:!1,hover:this.handleEndHover,label:l},y={hover:this.handleStartHover||this.handleEndHover};return v` <div
      class="container ${ne(s)}"
      style=${zt(n)}>
      ${pn(this.range,()=>this.renderInput(h))}
      ${this.renderInput(u)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${ne(y)}">
            ${pn(this.range,()=>this.renderHandle(f))}
            ${this.renderHandle(b)}
          </div>
        </div>
      </div>
    </div>`}renderTrack(){return v`
      <div class="track"></div>
      ${this.ticks?v`<div class="tickmarks"></div>`:x}
    `}renderLabel(e){return v`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${e}</span>
    </div>`}renderHandle({start:e,hover:r,label:i}){let o=!this.disabled&&e===this.startOnTop,n=!this.disabled&&this.handlesOverlapping,s=e?"start":"end";return v`<div
      class="handle ${ne({[s]:!0,hover:r,onTop:o,isOverlapping:n})}">
      <md-focus-ring part="focus-ring" for=${s}></md-focus-ring>
      <md-ripple
        for=${s}
        class=${s}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${pn(this.labeled,()=>this.renderLabel(i))}
    </div>`}renderInput({start:e,value:r,ariaLabel:i,ariaValueText:o,ariaMin:n,ariaMax:s}){let a=e?"start":"end";return v`<input
      type="range"
      class="${ne({start:e,end:!e})}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${a}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      aria-valuemin=${n}
      .max=${String(this.max)}
      aria-valuemax=${s}
      .step=${String(this.step)}
      .value=${String(r)}
      .tabIndex=${e?1:0}
      aria-label=${i||x}
      aria-valuetext=${o} />`}async toggleRippleHover(e,r){let i=await e;i&&(r?i.handlePointerenter(new PointerEvent("pointerenter",{isPrimary:!0,pointerId:this.ripplePointerId})):i.handlePointerleave(new PointerEvent("pointerleave",{isPrimary:!0,pointerId:this.ripplePointerId})))}handleFocus(e){this.updateOnTop(e.target)}startAction(e){let r=e.target,i=r===this.inputStart?this.inputEnd:this.inputStart;this.action={canFlip:e.type==="pointerdown",flipped:!1,target:r,fixed:i,values:new Map([[r,r.valueAsNumber],[i,i?.valueAsNumber]])}}finishAction(e){this.action=void 0}handleKeydown(e){this.startAction(e)}handleKeyup(e){this.finishAction(e)}handleDown(e){this.startAction(e),this.ripplePointerId=e.pointerId;let r=e.target===this.inputStart;this.handleStartHover=!this.disabled&&r&&!!this.handleStart,this.handleEndHover=!this.disabled&&!r&&!!this.handleEnd}async handleUp(e){if(!this.action)return;let{target:r,values:i,flipped:o}=this.action;await new Promise(requestAnimationFrame),r!==void 0&&(r.focus(),o&&r.valueAsNumber!==i.get(r)&&r.dispatchEvent(new Event("change",{bubbles:!0}))),this.finishAction(e)}handleMove(e){this.handleStartHover=!this.disabled&&Gc(e,this.handleStart),this.handleEndHover=!this.disabled&&Gc(e,this.handleEnd)}handleEnter(e){this.handleMove(e)}handleLeave(){this.handleStartHover=!1,this.handleEndHover=!1}updateOnTop(e){this.startOnTop=e.classList.contains("start")}needsClamping(){if(!this.action)return!1;let{target:e,fixed:r}=this.action;return e===this.inputStart?e.valueAsNumber>r.valueAsNumber:e.valueAsNumber<r.valueAsNumber}isActionFlipped(){let{action:e}=this;if(!e)return!1;let{target:r,fixed:i,values:o}=e;return e.canFlip&&o.get(r)===o.get(i)&&this.needsClamping()&&(e.canFlip=!1,e.flipped=!0,e.target=i,e.fixed=r),e.flipped}flipAction(){if(!this.action)return!1;let{target:e,fixed:r,values:i}=this.action,o=e.valueAsNumber!==r.valueAsNumber;return e.valueAsNumber=r.valueAsNumber,r.valueAsNumber=i.get(r),o}clampAction(){if(!this.needsClamping()||!this.action)return!1;let{target:e,fixed:r}=this.action;return e.valueAsNumber=r.valueAsNumber,!0}handleInput(e){if(this.isRedispatchingEvent)return;let r=!1,i=!1;this.range&&(this.isActionFlipped()&&(r=!0,i=this.flipAction()),this.clampAction()&&(r=!0,i=!1));let o=e.target;this.updateOnTop(o),this.range?(this.valueStart=this.inputStart.valueAsNumber,this.valueEnd=this.inputEnd.valueAsNumber):this.value=this.inputEnd.valueAsNumber,r&&e.stopPropagation(),i&&(this.isRedispatchingEvent=!0,et(o,e),this.isRedispatchingEvent=!1)}handleChange(e){let r=e.target,{target:i,values:o}=this.action??{};i&&i.valueAsNumber===o.get(r)||et(this,e),this.finishAction(e)}[tt](){if(this.range){let e=new FormData;return e.append(this.nameStart,String(this.valueStart)),e.append(this.nameEnd,String(this.valueEnd)),e}return String(this.value)}formResetCallback(){if(this.range){let r=this.getAttribute("value-start");this.valueStart=r!==null?Number(r):void 0;let i=this.getAttribute("value-end");this.valueEnd=i!==null?Number(i):void 0;return}let e=this.getAttribute("value");this.value=e!==null?Number(e):void 0}formStateRestoreCallback(e){if(Array.isArray(e)){let[[,r],[,i]]=e;this.valueStart=Number(r),this.valueEnd=Number(i),this.range=!0;return}this.value=Number(e),this.range=!1}};re.shadowRootOptions={...O.shadowRootOptions,delegatesFocus:!0};c([p({type:Number})],re.prototype,"min",void 0);c([p({type:Number})],re.prototype,"max",void 0);c([p({type:Number})],re.prototype,"value",void 0);c([p({type:Number,attribute:"value-start"})],re.prototype,"valueStart",void 0);c([p({type:Number,attribute:"value-end"})],re.prototype,"valueEnd",void 0);c([p({attribute:"value-label"})],re.prototype,"valueLabel",void 0);c([p({attribute:"value-label-start"})],re.prototype,"valueLabelStart",void 0);c([p({attribute:"value-label-end"})],re.prototype,"valueLabelEnd",void 0);c([p({attribute:"aria-label-start"})],re.prototype,"ariaLabelStart",void 0);c([p({attribute:"aria-valuetext-start"})],re.prototype,"ariaValueTextStart",void 0);c([p({attribute:"aria-label-end"})],re.prototype,"ariaLabelEnd",void 0);c([p({attribute:"aria-valuetext-end"})],re.prototype,"ariaValueTextEnd",void 0);c([p({type:Number})],re.prototype,"step",void 0);c([p({type:Boolean})],re.prototype,"ticks",void 0);c([p({type:Boolean})],re.prototype,"labeled",void 0);c([p({type:Boolean})],re.prototype,"range",void 0);c([M("input.start")],re.prototype,"inputStart",void 0);c([M(".handle.start")],re.prototype,"handleStart",void 0);c([ls("md-ripple.start")],re.prototype,"rippleStart",void 0);c([M("input.end")],re.prototype,"inputEnd",void 0);c([M(".handle.end")],re.prototype,"handleEnd",void 0);c([ls("md-ripple.end")],re.prototype,"rippleEnd",void 0);c([J()],re.prototype,"handleStartHover",void 0);c([J()],re.prototype,"handleEndHover",void 0);c([J()],re.prototype,"startOnTop",void 0);c([J()],re.prototype,"handlesOverlapping",void 0);c([J()],re.prototype,"renderValueStart",void 0);c([J()],re.prototype,"renderValueEnd",void 0);function Gc({x:t,y:e},r){if(!r)return!1;let{top:i,left:o,bottom:n,right:s}=r.getBoundingClientRect();return t>=o&&t<=s&&e>=i&&e<=n}function wh(t,e){if(!(t&&e))return!1;let r=t.getBoundingClientRect(),i=e.getBoundingClientRect();return!(r.top>i.bottom||r.right<i.left||r.bottom<i.top||r.left>i.right)}var Yc=T`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`;var pa=class extends re{};pa.styles=[Yc,Kc];pa=c([R("md-slider")],pa);var Ni="lit-localize-status";var Xc=t=>typeof t!="string"&&"strTag"in t,hn=(t,e,r)=>{let i=t[0];for(let o=1;o<t.length;o++)i+=e[r?r[o-1]:o-1],i+=t[o];return i};var Oi=t=>Xc(t)?hn(t.strings,t.values):t;var be=Oi,Jc=!1;function ha(t){if(Jc)throw new Error("lit-localize can only be configured once");be=t,Jc=!0}var fa=class{constructor(e){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Ni,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ni,this.__litLocalizeEventHandler)}},Eh=t=>t.addController(new fa(t)),Zc=Eh;var cr=()=>(t,e)=>(t.addInitializer(Zc),t);var Ii=class{constructor(){this.settled=!1,this.promise=new Promise((e,r)=>{this._resolve=e,this._reject=r})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}};var Ht=[];for(let t=0;t<256;t++)Ht[t]=(t>>4&15).toString(16)+(t&15).toString(16);function Qc(t){let e=0,r=8997,i=0,o=33826,n=0,s=40164,a=0,l=52210;for(let h=0;h<t.length;h++)r^=t.charCodeAt(h),e=r*435,i=o*435,n=s*435,a=l*435,n+=r<<8,a+=o<<8,i+=e>>>16,r=e&65535,n+=i>>>16,o=i&65535,l=a+(n>>>16)&65535,s=n&65535;return Ht[l>>8]+Ht[l&255]+Ht[s>>8]+Ht[s&255]+Ht[o>>8]+Ht[o&255]+Ht[r>>8]+Ht[r&255]}var Ch="",kh="h",Sh="s";function ed(t,e){return(e?kh:Sh)+Qc(typeof t=="string"?t:t.join(Ch))}var td=new WeakMap,rd=new Map;function id(t,e,r){if(t){let i=r?.id??Th(e),o=t[i];if(o){if(typeof o=="string")return o;if("strTag"in o)return hn(o.strings,e.values,o.values);{let n=td.get(o);return n===void 0&&(n=o.values,td.set(o,n)),{...o,values:n.map(s=>e.values[s])}}}}return Oi(e)}function Th(t){let e=typeof t=="string"?t:t.strings,r=rd.get(e);return r===void 0&&(r=ed(e,typeof t!="string"&&!("strTag"in t)),rd.set(e,r)),r}function ma(t){window.dispatchEvent(new CustomEvent(Ni,{detail:t}))}var mn="",va,od,vn,ga,nd,Er=new Ii;Er.resolve();var fn=0,sd=t=>(ha((e,r)=>id(nd,e,r)),mn=od=t.sourceLocale,vn=new Set(t.targetLocales),vn.add(t.sourceLocale),ga=t.loadLocale,{getLocale:Ah,setLocale:Nh}),Ah=()=>mn,Nh=t=>{if(t===(va??mn))return Er.promise;if(!vn||!ga)throw new Error("Internal error");if(!vn.has(t))throw new Error("Invalid locale code");fn++;let e=fn;return va=t,Er.settled&&(Er=new Ii),ma({status:"loading",loadingLocale:t}),(t===od?Promise.resolve({templates:void 0}):ga(t)).then(i=>{fn===e&&(mn=t,va=void 0,nd=i.templates,ma({status:"ready",readyLocale:t}),Er.resolve())},i=>{fn===e&&(ma({status:"error",errorLocale:t,errorMessage:i.toString()}),Er.reject(i))}),Er.promise};var gn=class extends CustomEvent{},De=class extends O{constructor(){super(...arguments);this.label="";this.value=[];this.open=!1;this.expandAtOrigin=!1;this.numCharsOnHandler=3;this.onKeydownWhileOpenWithThis=this.onKeydownWhileOpen.bind(this)}onKeydownWhileOpen(r){if(r.key==="Escape"){this.open=!1;return}if(r.key==="Tab"&&this.shadowRoot&&this.focusibleButtons){let i=this.shadowRoot.activeElement;r.shiftKey&&i===this.focusibleButtons[0]?(this.focusibleButtons[this.focusibleButtons.length-1].focus(),r.preventDefault()):!r.shiftKey&&i===this.focusibleButtons[this.focusibleButtons.length-1]&&(this.focusibleButtons[0].focus(),r.preventDefault())}}onKeypadOpen(){if(this.keypadPopup&&this.expandedKeypadRows&&this.handlerButton){if(this.expandAtOrigin)this.keypadPopup.style.position="absolute",this.keypadPopup.style.top="0",this.keypadPopup.style.left="0";else{let r=this.handlerButton.getBoundingClientRect();this.keypadPopup.style.position="fixed",this.keypadPopup.style.top=`${r.bottom+5}px`,this.keypadPopup.style.left=`${r.left}px`,this.keypadPopup.style.transform="";let i=this.keypadPopup.getBoundingClientRect();i.right>window.innerWidth&&(this.keypadPopup.style.transform=`translateX(${window.innerWidth-i.right-16}px)`)}this.firstKeypad?.focus(),this.addEventListener("keydown",this.onKeydownWhileOpenWithThis),this.dispatchEvent(new Event("keypad-open",{bubbles:!0,composed:!0}))}}onKeypadClose(){this.removeEventListener("keydown",this.onKeydownWhileOpenWithThis),this.handlerButton?.focus()}firstUpdated(){this.resizeObserver=new ResizeObserver(()=>{if(!this.handlerButton)return;let r=this.handlerButton.getBoundingClientRect().width;this.allButtons?.forEach(i=>{i!==this.handlerButton&&(i.style.width=`${r}px`),i.style.fontSize=`${r/this.numCharsOnHandler}px`})}),this.resizeObserver.observe(this.handlerButton)}updated(r){let i=r.get("open");i===!0?this.onKeypadClose():i===!1&&this.onKeypadOpen()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}render(){return v`<button
        class="handler"
        @click="${()=>{this.open=!0,this.dispatchEvent(new gn("keypad-handler-click",{detail:"open",bubbles:!0,composed:!0}))}}"
      >
        ${this.label}
      </button>
      <div class="keypad-popup">
        <ul class="container">
          ${this.value.map(r=>v`<li>
                <ul class="row">
                  ${r.split("").map(i=>v`<li>
                        <button
                          @click="${()=>{this.open=!1;let o=i.replace("\u2423"," ");this.dispatchEvent(new gn("character-select",{detail:o,bubbles:!0,composed:!0}))}}"
                        >
                          ${i}
                        </button>
                      </li>`)}
                </ul>
              </li>`)}
        </ul>
      </div>
      <div
        class="backdrop"
        @click="${()=>{this.open=!1}}"
      ></div>`}};De.styles=T`
    button {
      align-items: center;
      aspect-ratio: 1;
      background: var(--color-surface, white);
      border-radius: 20%;
      border: solid 3px #81c995;
      color: var(--color-on-surface);
      cursor: pointer;
      display: flex;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      justify-content: center;
      max-width: 10rem;
      min-width: 2rem;
      width: 100%;
      height: 100%;
    }

    /* 针对标点符号按钮设置特殊高度 */
    :host([label=".,!?"]) button.handler {
      height: 103px;
    }

    button:hover,
    button:focus {
      background: var(--color-primary, yellow);
    }

    .close {
      font-family: 'Material Symbols Outlined';
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .keypad-popup {
      display: none;
      left: 0;
      position: absolute;
      top: 0;
      z-index: 1000;
    }

    :host([open]) .keypad-popup {
      display: block;
    }

    ul.container {
      display: flex;
      gap: 0.5rem;
    }

    ul.row {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }

    ul button {
      /* margin-bottom is not needed for horizontal layout */
    }

    .backdrop {
      background: rgba(0, 0, 0, 0.5);
      display: none;
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
    }

    :host([open]) .backdrop {
      display: block;
    }
  `,k([p({type:String,reflect:!0})],De.prototype,"label",2),k([p({type:Array})],De.prototype,"value",2),k([p({type:Boolean,reflect:!0})],De.prototype,"open",2),k([p({type:Boolean,reflect:!0})],De.prototype,"expandAtOrigin",2),k([p({type:Number})],De.prototype,"numCharsOnHandler",2),k([Qt("button")],De.prototype,"allButtons",2),k([M("button.handler")],De.prototype,"handlerButton",2),k([M(".keypad-popup")],De.prototype,"keypadPopup",2),k([M("ul.container")],De.prototype,"container",2),k([Qt("ul.container button")],De.prototype,"focusibleButtons",2),k([M("li button")],De.prototype,"firstKeypad",2),k([Qt("ul.row")],De.prototype,"expandedKeypadRows",2),De=k([R("pv-expand-keypad")],De);var Oh=[[{label:"abc",value:["abc"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],Ih=[[{label:"\u3042",value:["\u3042\u3044\u3046\u3048\u304A","\u3041\u3043\u3045\u3047\u3049"]},{label:"\u304B",value:["\u304B\u304D\u304F\u3051\u3053","\u304C\u304E\u3050\u3052\u3054"]},{label:"\u3055",value:["\u3055\u3057\u3059\u305B\u305D","\u3056\u3058\u305A\u305C\u305E"]},{label:"\u305F",value:["\u305F\u3061\u3064\u3066\u3068\u3063","\u3060\u3062\u3065\u3067\u3069"]},{label:"\u306A",value:["\u306A\u306B\u306C\u306D\u306E"]},{label:"\u306F",value:["\u306F\u3072\u3075\u3078\u307B","\u3070\u3073\u3076\u3079\u307C","\u3071\u3074\u3077\u307A\u307D"]},{label:"\u307E",value:["\u307E\u307F\u3080\u3081\u3082"]},{label:"\u3084",value:["\u3084\u3086\u3088","\u3083\u3085\u3087"]},{label:"\u3089",value:["\u3089\u308A\u308B\u308C\u308D"]},{label:"\u308F",value:["\u308F\u3092\u3093"]},{label:"\u309B\u309C",value:["\u3002\u3001\u30FC\uFF1F\uFF01","\u2423\u309B\u309C"]}]],$h=[[{label:"abc",value:["abc","\xE0\xE2\xE7"]},{label:"def",value:["def","\xE8\xE9\xEA\xEB"]},{label:"ghi",value:["ghi","\xEE\xEF"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF4\u0153"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xF9\xFB\xFC"]},{label:"wxyz",value:["wxyz","\xFF"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],Rh=[[{label:"abc",value:["abc","\xE4"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF6"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xFC"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],Dh=[[{label:"abc",value:["abc","\xE5\xE4"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF6"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xFC"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]];var Lh=[[{label:"0-9",value:["0","1","2","3","4","5","6","7","8","9"]},{label:"ABC",value:["a","b","c"]},{label:"DEF",value:["d","e","f"]}],[{label:"GHI",value:["g","h","i"]},{label:"JKL",value:["j","h","l"]},{label:"MNO",value:["m","n","o"]}],[{label:"PQRS",value:["p","q","r","s"]},{label:"TUV",value:["t","u","v"]},{label:"WXYZ",value:["w","x","y","z"]}]],ad={label:".,!?",value:[".",",","!","?"]},Vh={label:"\u5220\u9664",value:["backspace"]},Bt=class extends O{constructor(r){super();this.keygrid=r}static{this.styles=T`
    :host {
      position: relative;
    }

    ul {
      display: flex;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      flex: 1;
      max-width: 9rem;
    }
  `}firstUpdated(){this.addEventListener("keypad-open",r=>{let i=r.composedPath()[0];this.keypads?.forEach(o=>{o.open=o===i})})}render(){return this.keygrid.map(r=>v`
        <ul>
          ${r.map(i=>v`
              <li>
                <pv-expand-keypad
                  .label=${i.label}
                  .value=${i.value}
                  ?expandAtOrigin=${this.state?.expandAtOrigin||!1}
                ></pv-expand-keypad>
              </li>
            `)}
        </ul>
      `)}};k([p({type:Object})],Bt.prototype,"state",2),k([Qt("pv-expand-keypad")],Bt.prototype,"keypads",2);var bn=class extends Bt{constructor(){super(Oh)}};bn=k([R("pv-alphanumeric-single-row-keyboard")],bn);var yn=class extends Bt{constructor(){super(Ih)}};yn=k([R("pv-hiragana-single-row-keyboard")],yn);var xn=class extends Bt{constructor(){super($h)}};xn=k([R("pv-french-single-row-keyboard")],xn);var _n=class extends Bt{constructor(){super(Rh)}};_n=k([R("pv-german-single-row-keyboard")],_n);var wn=class extends Bt{constructor(){super(Dh)}};wn=k([R("pv-swedish-single-row-keyboard")],wn);var $i=class extends O{_onKeyClick(e){this.dispatchEvent(new CustomEvent("character-select",{detail:e,bubbles:!0,composed:!0}))}render(){return v`
      <div class="keyboard-area">
        <div class="nine-key-grid">
          ${Lh.flat().map(e=>(console.log("key value:",e.value),v`
                <pv-expand-keypad
                  .label=${e.label}
                  .value=${e.value}
                  @select=${r=>this._onKeyClick(r.detail)}
                ></pv-expand-keypad>
              `))}
          <pv-expand-keypad
            .label=${ad.label}
            .value=${ad.value}
            @select=${e=>this._onKeyClick(e.detail)}
          ></pv-expand-keypad>
          <button
            class="key-btn delete-btn"
            @click=${()=>this._onKeyClick(Vh.value[0])}
          >
            <span class="delete-icon">✖</span> 删除
          </button>
        </div>
      </div>
    `}};$i.styles=T`
    :host {
      display: block;
      width: 100%;
      max-width: 597px; /* 整体九宫格区域宽度 */
    }
    .nine-key-grid {
      display: grid;
      grid-template-columns: repeat(3, 165px); /* 3列，每列按钮宽度165px */
      grid-template-rows: repeat(4, 148px); /* 4行，每行按钮高度148px */
      gap: 20px 14px; /* 垂直间距20px，水平间距14px */
      width: calc(3 * 165px + 2 * 14px); /* 精确计算网格总宽度 */
      max-width: 100%; /* 防止超出父容器 */
      margin-inline: auto; /* 居中显示 */
      margin-bottom: 20px; /* 九宫格与下方按钮或候选字/词的间距 */
    }
    .key-btn {
      background: #fff;
      border: 2px solid #c6e2ff;
      border-radius: 30px; /* 九宫格按钮圆角 */
      font-size: 1.2rem;
      height: 148px; /* 占满网格单元格高度 */
      width: 165px; /* 占满网格单元格宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .key-btn:active {
      background: #e3f2fd;
    }
    .delete-btn {
      background: #fff;
      border: 2px solid #c6e2ff;
      border-radius: 30px; /* 删除按钮圆角 */
      font-size: 1.2rem;
      height: 103px; /* 删除按钮高度 */
      width: 344px; /* 删除按钮宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .delete-btn:active {
      background: #e3f2fd;
    }
    .punctuation-key-btn {
      background: #fff;
      border: 2px solid #c6e2ff;
      border-radius: 30px; /* 标点符号按钮圆角 */
      font-size: 1.2rem;
      height: 103px; /* 标点符号按钮高度 */
      width: 165px; /* 标点符号按钮宽度 */
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .punctuation-key-btn:active {
      background: #e3f2fd;
    }
    .bottom-row {
      display: flex;
      justify-content: center; /* 居中对齐 */
      gap: 14px; /* 标点符号按钮与删除按钮之间的水平间距 */
      width: calc(165px + 14px + 344px); /* 精确计算下方按钮行总宽度 */
      max-width: 100%; /* 防止超出父容器 */
      margin-inline: auto; /* 居中显示 */
    }
  `,$i=k([R("pv-alphanumeric-nine-key-keyboard")],$i);var Mh=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m","?","!"],[","," ","."]],Ri=class extends O{render(){return v`<div class="container">
      ${Mh.map((e,r)=>v`<div class="row ${r%2===0?"even":"odd"}">
            ${e.map(i=>v`<button
                  @click=${()=>{this.dispatchEvent(new CustomEvent("character-select",{detail:i,bubbles:!0,composed:!0}))}}
                >
                  ${i}
                </button>`)}
          </div>`)}
    </div>`}};Ri.styles=T`
    .container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    button {
      background: var(--color-surface, white);
      border-radius: 0.5vh;
      border: solid 3px #8ab4f8;
      color: var(--color-on-surface);
      cursor: pointer;
      flex: 1;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      font-size: min(4vh, 1.5rem);
      min-width: 2em;
      padding: 0.5rem 1rem;
      text-align: center;
    }

    .row {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }

    .row.odd button {
      background: var(--color-secondary);
    }

    .row button:focus,
    .row button:hover {
      background: var(--color-primary, yellow);
    }
  `,Ri=k([R("pv-qwerty-keyboard")],Ri);var ba=String.fromCodePoint(61440),En=new Map([["\u3042","\u3041"],["\u3044","\u3043"],["\u3046","\u3045"],["\u3048","\u3047"],["\u304A","\u3049"],["\u3064","\u3063"],["\u3084","\u3083"],["\u3086","\u3085"],["\u3088","\u3087"],["\u308F","\u308E"],["\u304B","\u3095"],["\u3051","\u3096"]]),ya=new Map(Array.from(En,t=>[t[1],t[0]])),Ph=[["\u3042","\u3044","\u3046","\u3048","\u304A"],["\u304B","\u304D","\u304F","\u3051","\u3053"],["\u3055","\u3057","\u3059","\u305B","\u305D"],["\u305F","\u3061","\u3064","\u3066","\u3068"],["\u306A","\u306B","\u306C","\u306D","\u306E"],["\u306F","\u3072","\u3075","\u3078","\u307B"],["\u307E","\u307F","\u3080","\u3081","\u3082"],["\u3084","\u3086","\u3088","",{label:"\u5C0F",value:ba}],["\u3089","\u308A","\u308B","\u308C","\u308D"],["\u308F","\u3092","\u3093","\u3001","\u3002"],["\u309B","\u309C","\u30FC","\uFF1F","\uFF01"]];var Di=class extends O{render(){return v`<div class="container">
      ${Ph.map((e,r)=>e.map((i,o)=>i?v`<button
                class="${r%2===0?"even":"odd"}"
                style="grid-column: ${r+1}; grid-row: ${o+1}"
                @click=${()=>{this.dispatchEvent(new CustomEvent("character-select",{detail:typeof i=="string"?i:i.value,bubbles:!0,composed:!0}))}}
              >
                ${typeof i=="string"?i:i.label}
              </button>`:v`<span></span>`))}
    </div>`}};Di.styles=T`
    .container {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    .punctuation {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
    }

    button {
      align-items: center;
      background: var(--color-surface, white);
      border-radius: 0.5vh;
      border: solid 3px #8ab4f8;
      color: var(--color-on-surface);
      cursor: pointer;
      direction: ltr;
      display: flex;
      font-family: 'Roboto Mono', 'Noto Sans JP', monospace;
      font-size: max(3vh, 1rem);
      justify-content: center;
      padding: 0 0.5rem;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
    }

    button.odd {
      background: var(--color-secondary);
    }

    button:focus,
    button:hover {
      background: var(--color-primary, yellow);
    }
  `,Di=k([R("pv-fifty-key-keyboard")],Di);var xa=class{constructor(){this.code="";this.promptName="";this.keyboards=[];this.initialPhrases=[];this.aiConfigs={classic:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"},fast:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"},smart:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"}}}segment(e){return e.split(" ")}join(e){return e.join(" ").replace(/ ([.,!?]+( |$))/g,"$1")+" "}appendWord(e,r){return r.startsWith("-")?e+r.slice(1)+" ":e+" "+r+" "}},_a=class extends xa{constructor(){super(...arguments);this.code="en-US";this.promptName="English";this.initialPhrases=["I","You","They","What","Why","When","Where","How","Who","Can","Could you","Would you","Do you"]}},wa=class extends _a{constructor(){super(...arguments);this.keyboards=[qe`pv-alphanumeric-single-row-keyboard`]}render(){return v`${be("English (single-row keyboard)")}`}},Ea=class{constructor(){this.code="zh-CN";this.promptName="Chinese";this.keyboards=[];this.separetor="";this.initialPhrases=["\u4F60","\u6211","\u4ED6","\u5979","\u5B83","\u597D","\u4ECA\u5929","\u6628\u5929","\u660E\u5929"];this.emotions=[];this.aiConfigs={classic:{model:"gemma3:4b",sentence:"SentenceJapanese20240628",word:"WordGeneric20240628"},fast:{model:"gemma3:4b",sentence:"SentenceJapanese20240628",word:"WordGeneric20240628"},smart:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"}}}segment(e){let r=[];for(let i=0;i<e.length;i++)r.push(e[i]);return r}join(e){return e.join("")}appendWord(e,r){return e=e.replace(/[a-z]+$/,""),r.startsWith("-")?e+r.slice(1):e+r}},Ca=class extends Ea{constructor(){super(...arguments);this.keyboards=[qe`pv-alphanumeric-single-row-keyboard`]}render(){return v`${be("Chinese (single-row keyboard)")}`}},dr={englishWithSingleRowKeyboard:new wa,chineseWithSingleRowKeyboard:new Ca};var Fh={okClick:"ok-click"},ur=class extends Mt(O){constructor(){super(...arguments);this.activeSettingsTabIndex=0}show(){this.settingsDialog?.show()}fireEvent(r){this.dispatchEvent(new CustomEvent(r,{detail:{callee:this},bubbles:!0,composed:!0}))}render(){let r=v`
      <div class="form-section">
        <label>
          ${be("Persona")}
          <p>
            <md-filled-text-field
              class="pv-persona-text-field"
              type="textarea"
              rows="5"
              @input=${s=>{this.state.persona=s.target.value}}
              value="${this.state.persona}"
            >
            </md-filled-text-field>
          </p>
        </label>
      </div>
      <div class="form-section">
        <label>
          ${be("Initial phrases")}
          <p>
            <md-filled-text-field
              class="pv-initial-phrase-text-field"
              type="textarea"
              rows="3"
              value="${this.state.initialPhrases.join(`
`)}"
              @input=${s=>{this.state.initialPhrases=s.target.value.split(`
`).filter(a=>a)}}
            >
            </md-filled-text-field>
          </p>
        </label>
      </div>
    `,i=v`
      <div class="form-section">
        <md-outlined-select
          label="${be("AI")}"
          @change=${s=>{let a=s.composedPath()[0];this.state.aiConfig=a.value}}
        >
          <md-select-option
            ?selected="${this.state.aiConfig==="fast"}"
            value="fast"
          >
            <div slot="headline">${be("Fast")}</div>
          </md-select-option>
          <md-select-option
            ?selected="${this.state.aiConfig==="smart"}"
            value="smart"
          >
            <div slot="headline">${be("Smart")}</div>
          </md-select-option>
          <md-select-option
            ?selected="${this.state.aiConfig==="classic"}"
            value="classic"
          >
            <div slot="headline">${be("Classic")}</div>
          </md-select-option>
        </md-outlined-select>
      </div>
      <div class="form-section">
        <label>
          ${be("Always expand at origin")}
          <md-switch
            ?selected=${this.state.expandAtOrigin}
            @change=${()=>{this.state.expandAtOrigin=!this.state.expandAtOrigin}}
          ></md-switch>
        </label>
      </div>
      <div class="form-section">
        <label>
          ${be("Use smaller sentence margin")}
          <md-switch
            ?selected=${this.state.sentenceSmallMargin}
            @change=${()=>{this.state.sentenceSmallMargin=!this.state.sentenceSmallMargin}}
          ></md-switch>
        </label>
      </div>
      <div class="form-section">
        <label>
          ${be("Enable earcons")}
          <md-switch
            ?selected=${this.state.enableEarcons}
            @change=${()=>{this.state.enableEarcons=!this.state.enableEarcons}}
          ></md-switch>
        </label>
      </div>
      <div class="form-section">
        <div>
          <label>${be("Language")}</label>
        </div>
        <div class="language-select">
          <div>
            ${Object.entries(dr).map(([s,a])=>v`<div class="language-option">
                  <div class="language-option-label">
                    <label>${a.render()}</label>
                  </div>
                  <div class="language-option-checkbox">
                    <md-checkbox
                      ?checked="${this.state.checkedLanguages.includes(s)}"
                      ?disabled="${this.state.checkedLanguages.length===1&&this.state.checkedLanguages.includes(s)}"
                      @change=${()=>{this.state.checkedLanguages.includes(s)?this.state.checkedLanguages=this.state.checkedLanguages.filter(l=>l!==s):this.state.checkedLanguages=[...this.state.checkedLanguages,s]}}
                    ></md-checkbox>
                  </div>
                </div>`)}
          </div>
        </div>
      </div>
    `,o=v`
      <div class="form-section">
        <md-outlined-select
          label="${be("TTS Voice")}"
          @change=${s=>{let a=s.target;this.state.voiceName=a.value}}
        >
          <md-select-option
            value="Default"
            ?selected="${this.state.voiceName===""}"
          >
            <div slot="headline">Default</div>
          </md-select-option>
          ${window.speechSynthesis.getVoices().filter(s=>s.lang.startsWith(this.state.lang.code)).map(s=>v`<md-select-option
                  value="${s.name}"
                  ?selected="${this.state.voiceName===s.name}"
                >
                  <div slot="headline">${s.name}</div>
                </md-select-option>`)}

        </md-outlined-select>
      </div>
      <div class="form-section">
        <label>
          ${be("Speaking rate")}
          <md-slider
            class="voice-config-slider"
            min="-10"
            max="10"
            value="${this.state.voiceSpeakingRate}"
            @change=${s=>{this.state.voiceSpeakingRate=Number(s.target.value)}}
          >
          </md-slider>
        </label>
      </div>
      <div class="form-section">
        <label>
          ${be("Pitch")}
          <md-slider
            class="voice-config-slider"
            min="-10"
            max="10"
            value="${this.state.voicePitch}"
            @change=${s=>{this.state.voicePitch=Number(s.target.value)}}
          >
          </md-slider>
        </label>
      </div>
    `,n=[i,r,o];return v`
      <md-dialog>
        <form slot="content" id="form-id" method="dialog">
          <md-tabs
            @change="${s=>{s.target instanceof ki&&(this.activeSettingsTabIndex=s.target.activeTabIndex)}}"
          >
            <md-primary-tab ?active="${this.activeSettingsTabIndex===0}">
              ${be("General")}
            </md-primary-tab>
            <md-primary-tab ?active="${this.activeSettingsTabIndex===1}">
              ${be("Profile")}
            </md-primary-tab>
            <md-primary-tab ?active="${this.activeSettingsTabIndex===2}">
              ${be("VOICE")}
            </md-primary-tab>

          </md-tabs>
          ${n[this.activeSettingsTabIndex]}
        </form>
        <div slot="actions">
          <md-text-button
            form="form-id"
            @click="${()=>{this.settingsDialog?.close(),this.fireEvent(Fh.okClick)}}"
            >OK</md-text-button
          >
        </div>
      </md-dialog>
    `}};ur.styles=T`
    :host {
      background: var(--color-background);
      display: flex;

      --md-icon-button-icon-size: 3rem;
      --md-icon-button-state-layer-width: 4rem;
      --md-icon-button-state-layer-height: 4rem;

      --mdc-typography-body2-font-size: 3rem;
      --mdc-typography-body2-line-height: 3.5rem;
    }

    /* Optimized only for iPad. May need to improve. */
    #form-id {
      height: 440px;
      width: 500px;
    }

    .voice-config-slider {
      display: inline-block;
      width: 350px;
    }

    .form-section {
      margin: 1rem 0;
    }

    .language-select {
      border: 1px solid var(--md-sys-color-outline, #79747e);
      border-radius: var(--md-sys-shape-corner-extra-small, 4px);
      display: inline-flex;
      height: 5rem;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    .language-option {
      border-color: black;
      display: flex;
      margin: 0.75rem 8px;
    }

    .language-option-label {
      flex: 1;
    }

    .language-option-checkbox {
      flex: 0;
      margin: 0 0 0 0.75rem;
    }

    .pv-persona-text-field,
    .pv-initial-phrase-text-field {
      width: 100%;
    }
  `,k([p({type:Object})],ur.prototype,"state",2),k([p({type:Number,reflect:!0})],ur.prototype,"activeSettingsTabIndex",2),k([M("md-dialog")],ur.prototype,"settingsDialog",2),ur=k([cr(),R("pv-setting-panel")],ur);var ka=null,Sa=null,pr=new(window.AudioContext||window.webkitAudioContext);fetch("/static/click2.wav").then(t=>t.arrayBuffer()).then(t=>pr.decodeAudioData(t)).then(t=>{ka=t}).catch(t=>{console.warn("Error loading click audio file:",t)});fetch("/static/chime.wav").then(t=>t.arrayBuffer()).then(t=>pr.decodeAudioData(t)).then(t=>{Sa=t}).catch(t=>{console.warn("Error loading chime audio file:",t)});var Yr=class{static playClick(){return new Promise((e,r)=>{if(!ka)return r("Click audio buffer is not loaded yet.");let i=pr.createBufferSource();i.buffer=ka,i.connect(pr.destination),i.onended=()=>{i.disconnect(),e()},i.start(pr.currentTime)})}static playChime(){return new Promise((e,r)=>{if(!Sa)return r("Chime audio buffer is not loaded yet.");let i=pr.createBufferSource();i.buffer=Sa,i.connect(pr.destination),i.onended=()=>{i.disconnect(),e()},i.start(pr.currentTime)})}};var Cn={backspaceClick:"backspace-click",contentCopyClick:"content-copy-click",deleteClick:"delete-click",firstUpdated:"first-updated",keyboardChangeClick:"keyboard-change-click",languageChangeClick:"language-change-click",settingClick:"setting-click",undoClick:"undo-click"},Cr=class extends Mt(O){constructor(){super(...arguments);this.isTtsReading=!1}fireEvent(r,i){this.dispatchEvent(new CustomEvent(r,{detail:i?{callee:this,...i}:{callee:this},bubbles:!0,composed:!0}))}render(){let r=this.state.text==="",i=this.state.lang.keyboards.length>1,o=this.state.checkedLanguages.length>1;return v`
      <div class="functions">
        <div class="functions-bar">
          <button
            @click="${()=>{this.fireEvent(Cn.undoClick)}}"
          >
            <md-icon>undo</md-icon>
            <span>撤回</span>
          </button>
          <button
            @click="${()=>{this.fireEvent(Cn.contentCopyClick)}}"
            ?disabled=${r}
          >
            <md-icon>content_copy</md-icon>
            <span>复制</span>
          </button>
          <button
            @click="${this.onTtsButtonClick}"
            ?disabled=${this.isTtsReading||r}
          >
            <md-icon>text_to_speech</md-icon>
            <span>朗读</span>
          </button>
          <button
            @click="${()=>{this.fireEvent(Cn.languageChangeClick)}}"
          >
            <md-icon>language</md-icon>
            <span>语言</span>
          </button>
          <button
            @click="${()=>{this.fireEvent(Cn.settingClick)}}"
          >
            <md-icon>settings</md-icon>
            <span>设置</span>
          </button>
        </div>
      </div>
    `}async onTtsButtonClick(){window.speechSynthesis.cancel(),this.state.enableEarcons?Yr.playChime().then(()=>{this.startTts()}):this.startTts()}startTts(){let r=new SpeechSynthesisUtterance(this.state.text);r.lang=this.state.lang.code,r.rate=Math.pow(2,this.state.voiceSpeakingRate/10),r.pitch=(this.state.voicePitch+20)/20;let i=window.speechSynthesis,o=i.getVoices().find(n=>n.name===this.state.voiceName);o&&(r.voice=o),r.addEventListener("end",()=>{this.onTtsEnd()}),i.speak(r),this.isTtsReading=!0}onTtsEnd(){this.isTtsReading=!1}};Cr.styles=T`
    :host {
      display: flex;
      --md-icon-size: 1.5rem;
    }

    .functions {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .functions-bar {
      background: var(--color-secondary);
      border-radius: 10rem;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
    }

    .functions-bar md-icon {
      font-weight: 300;
    }

    .functions-bar button {
      align-items: center;
      background: none;
      border: none;
      color: var(--color-on-secondary);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      font-family: inherit;
      margin: 0.60rem 0;
      padding: 0;
    }

    .functions-bar button md-icon img {
      height: 2rem;
      width: 2rem;
    }

    .functions-bar button span {
      display: none;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .functions-bar button:hover md-icon {
      background: rgba(0, 0, 0, 0.1);
    }

    .functions-bar button[disabled] {
      cursor: default;
      opacity: 0.4;
    }

    .functions-bar button[disabled]:hover md-icon {
      background: inherit;
    }

    /* Optimized only for iPad. May need to improve. */
    #form-id {
      height: 380px;
      width: 500px;
    }

    .form-section {
      margin: 1rem 0;
    }

    .pv-persona-text-field,
    .pv-initial-phrase-text-field {
      width: 100%;
    }

    hr {
      border: 0;
      margin: 0;
    }

    md-icon {
      border-radius: 100px;
      padding: 0.25rem;
    }

    @media screen and (min-height: 33rem) {
      :host {
        --md-icon-size: 2rem;
      }

      md-icon {
        padding: 0.5rem;
      }
    }

    @media screen and (min-height: 45rem) {
      .functions-bar {
        padding: 1rem 0.25rem;
      }

      .functions-bar button span {
        display: inline;
      }

      md-icon {
        padding: 0.125rem 0.5rem;
      }

      hr {
        margin: 0.5rem 0;
      }
    }
  `,k([p({type:Object})],Cr.prototype,"state",2),k([p({type:Boolean,reflect:!0})],Cr.prototype,"isTtsReading",2),Cr=k([cr(),R("pv-functions-bar")],Cr);function Xr(t){let e=Object.create(null);for(let r of t.split(","))e[r]=1;return r=>r in e}var de={},Jr=[],Ye=()=>{},cd=()=>!1,Zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Li=t=>t.startsWith("onUpdate:"),xe=Object.assign,Vi=(t,e)=>{let r=t.indexOf(e);r>-1&&t.splice(r,1)},zh=Object.prototype.hasOwnProperty,ie=(t,e)=>zh.call(t,e),Y=Array.isArray,Qr=t=>kn(t)==="[object Map]",Ta=t=>kn(t)==="[object Set]";var X=t=>typeof t=="function",Ce=t=>typeof t=="string",jt=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",Aa=t=>(ge(t)||X(t))&&X(t.then)&&X(t.catch),Uh=Object.prototype.toString,kn=t=>Uh.call(t),Na=t=>kn(t).slice(8,-1),Oa=t=>kn(t)==="[object Object]",Sn=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");var Tn=t=>{let e=Object.create(null);return r=>e[r]||(e[r]=t(r))},Hh=/-(\w)/g,ct=Tn(t=>t.replace(Hh,(e,r)=>r?r.toUpperCase():"")),Bh=/\B([A-Z])/g,Wt=Tn(t=>t.replace(Bh,"-$1").toLowerCase()),Mi=Tn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pi=Tn(t=>t?`on${Mi(t)}`:""),wt=(t,e)=>!Object.is(t,e),Fi=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},zi=(t,e,r,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:r})},Ia=t=>{let e=parseFloat(t);return isNaN(e)?t:e};var ld,Ui=()=>ld||(ld=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hi(t){if(Y(t)){let e={};for(let r=0;r<t.length;r++){let i=t[r],o=Ce(i)?Kh(i):Hi(i);if(o)for(let n in o)e[n]=o[n]}return e}else if(Ce(t)||ge(t))return t}var jh=/;(?![^(]*\))/g,Wh=/:([^]+)/,qh=/\/\*[^]*?\*\//g;function Kh(t){let e={};return t.replace(qh,"").split(jh).forEach(r=>{if(r){let i=r.split(Wh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Bi(t){let e="";if(Ce(t))e=t;else if(Y(t))for(let r=0;r<t.length;r++){let i=Bi(t[r]);i&&(e+=i+" ")}else if(ge(t))for(let r in t)t[r]&&(e+=r+" ");return e.trim()}var dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ud=Xr(dd),Gh=Xr(dd+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function An(t){return!!t||t===""}function Yh(t,...e){console.warn(`[Vue warn] ${t}`,...e)}var Xe,Ki=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].pause();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].resume();for(e=0,r=this.effects.length;e<r;e++)this.effects[e].resume()}}run(e){if(this._active){let r=Xe;try{return Xe=this,e()}finally{Xe=r}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let r,i;for(r=0,i=this.effects.length;r<i;r++)this.effects[r].stop();for(this.effects.length=0,r=0,i=this.cleanups.length;r<i;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,i=this.scopes.length;r<i;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}};function fd(){return Xe}var fe;var $a=new WeakSet,ri=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pd(this),gd(this);let e=fe,r=ft;fe=this,ft=!0;try{return this.fn()}finally{bd(this),fe=e,ft=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wa(e);this.deps=this.depsTail=void 0,pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){La(this)&&this.run()}get dirty(){return La(this)}},md=0,Wi,qi;function vd(t,e=!1){if(t.flags|=8,e){t.next=qi,qi=t;return}t.next=Wi,Wi=t}function Ba(){md++}function ja(){if(--md>0)return;if(qi){let e=qi;for(qi=void 0;e;){let r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;Wi;){let e=Wi;for(Wi=void 0;e;){let r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=r}}if(t)throw t}function gd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bd(t){let e,r=t.depsTail,i=r;for(;i;){let o=i.prevDep;i.version===-1?(i===r&&(r=o),Wa(i),Xh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}t.deps=e,t.depsTail=r}function La(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gi)||(t.globalVersion=Gi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!La(t))))return;t.flags|=2;let e=t.dep,r=fe,i=ft;fe=t,ft=!0;try{gd(t);let o=t.fn(t._value);(e.version===0||wt(o,t._value))&&(t.flags|=128,t._value=o,e.version++)}catch(o){throw e.version++,o}finally{fe=r,ft=i,bd(t),t.flags&=-3}}function Wa(t,e=!1){let{dep:r,prevSub:i,nextSub:o}=t;if(i&&(i.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=i,t.nextSub=void 0),r.subs===t&&(r.subs=i,!i&&r.computed)){r.computed.flags&=-5;for(let n=r.computed.deps;n;n=n.nextDep)Wa(n,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function Xh(t){let{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}var ft=!0,xd=[];function Ct(){xd.push(ft),ft=!1}function kt(){let t=xd.pop();ft=t===void 0?!0:t}function pd(t){let{cleanup:e}=t;if(t.cleanup=void 0,e){let r=fe;fe=void 0;try{e()}finally{fe=r}}}var Gi=0,Va=class{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Yi=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!fe||!ft||fe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==fe)r=this.activeLink=new Va(fe,this),fe.deps?(r.prevDep=fe.depsTail,fe.depsTail.nextDep=r,fe.depsTail=r):fe.deps=fe.depsTail=r,_d(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){let i=r.nextDep;i.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=i),r.prevDep=fe.depsTail,r.nextDep=void 0,fe.depsTail.nextDep=r,fe.depsTail=r,fe.deps===r&&(fe.deps=i)}return r}trigger(e){this.version++,Gi++,this.notify(e)}notify(e){Ba();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{ja()}}};function _d(t){if(t.dep.sc++,t.sub.flags&4){let e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_d(i)}let r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}var Ma=new WeakMap,Sr=Symbol(""),Pa=Symbol(""),Xi=Symbol("");function Le(t,e,r){if(ft&&fe){let i=Ma.get(t);i||Ma.set(t,i=new Map);let o=i.get(r);o||(i.set(r,o=new Yi),o.map=i,o.key=r),o.track()}}function Et(t,e,r,i,o,n){let s=Ma.get(t);if(!s){Gi++;return}let a=l=>{l&&l.trigger()};if(Ba(),e==="clear")s.forEach(a);else{let l=Y(t),h=l&&Sn(r);if(l&&r==="length"){let u=Number(i);s.forEach((f,b)=>{(b==="length"||b===Xi||!jt(b)&&b>=u)&&a(f)})}else switch((r!==void 0||s.has(void 0))&&a(s.get(r)),h&&a(s.get(Xi)),e){case"add":l?h&&a(s.get("length")):(a(s.get(Sr)),Qr(t)&&a(s.get(Pa)));break;case"delete":l||(a(s.get(Sr)),Qr(t)&&a(s.get(Pa)));break;case"set":Qr(t)&&a(s.get(Sr));break}}ja()}function ti(t){let e=oe(t);return e===t?e:(Le(e,"iterate",Xi),nt(t)?e:e.map(Fe))}function Vn(t){return Le(t=oe(t),"iterate",Xi),t}var Jh={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,Fe)},concat(...t){return ti(this).concat(...t.map(e=>Y(e)?ti(e):e))},entries(){return Ra(this,"entries",t=>(t[1]=Fe(t[1]),t))},every(t,e){return qt(this,"every",t,e,void 0,arguments)},filter(t,e){return qt(this,"filter",t,e,r=>r.map(Fe),arguments)},find(t,e){return qt(this,"find",t,e,Fe,arguments)},findIndex(t,e){return qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qt(this,"findLast",t,e,Fe,arguments)},findLastIndex(t,e){return qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Da(this,"includes",t)},indexOf(...t){return Da(this,"indexOf",t)},join(t){return ti(this).join(t)},lastIndexOf(...t){return Da(this,"lastIndexOf",t)},map(t,e){return qt(this,"map",t,e,void 0,arguments)},pop(){return ji(this,"pop")},push(...t){return ji(this,"push",t)},reduce(t,...e){return hd(this,"reduce",t,e)},reduceRight(t,...e){return hd(this,"reduceRight",t,e)},shift(){return ji(this,"shift")},some(t,e){return qt(this,"some",t,e,void 0,arguments)},splice(...t){return ji(this,"splice",t)},toReversed(){return ti(this).toReversed()},toSorted(t){return ti(this).toSorted(t)},toSpliced(...t){return ti(this).toSpliced(...t)},unshift(...t){return ji(this,"unshift",t)},values(){return Ra(this,"values",Fe)}};function Ra(t,e,r){let i=Vn(t),o=i[e]();return i!==t&&!nt(t)&&(o._next=o.next,o.next=()=>{let n=o._next();return n.value&&(n.value=r(n.value)),n}),o}var Zh=Array.prototype;function qt(t,e,r,i,o,n){let s=Vn(t),a=s!==t&&!nt(t),l=s[e];if(l!==Zh[e]){let f=l.apply(t,n);return a?Fe(f):f}let h=r;s!==t&&(a?h=function(f,b){return r.call(this,Fe(f),b,t)}:r.length>2&&(h=function(f,b){return r.call(this,f,b,t)}));let u=l.call(s,h,i);return a&&o?o(u):u}function hd(t,e,r,i){let o=Vn(t),n=r;return o!==t&&(nt(t)?r.length>3&&(n=function(s,a,l){return r.call(this,s,a,l,t)}):n=function(s,a,l){return r.call(this,s,Fe(a),l,t)}),o[e](n,...i)}function Da(t,e,r){let i=oe(t);Le(i,"iterate",Xi);let o=i[e](...r);return(o===-1||o===!1)&&Ji(r[0])?(r[0]=oe(r[0]),i[e](...r)):o}function ji(t,e,r=[]){Ct(),Ba();let i=oe(t)[e].apply(t,r);return ja(),kt(),i}var Qh=Xr("__proto__,__v_isRef,__isVue"),wd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function ef(t){jt(t)||(t=String(t));let e=oe(this);return Le(e,"has",t),e.hasOwnProperty(t)}var $n=class{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,i){if(r==="__v_skip")return e.__v_skip;let o=this._isReadonly,n=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return n;if(r==="__v_raw")return i===(o?n?df:kd:n?Cd:Ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;let s=Y(e);if(!o){let l;if(s&&(l=Jh[r]))return l;if(r==="hasOwnProperty")return ef}let a=Reflect.get(e,r,Ie(e)?e:i);return(jt(r)?wd.has(r):Qh(r))||(o||Le(e,"get",r),n)?a:Ie(a)?s&&Sn(r)?a:a.value:ge(a)?o?Ga(a):Ar(a):a}},Rn=class extends $n{constructor(e=!1){super(!1,e)}set(e,r,i,o){let n=e[r];if(!this._isShallow){let l=Gt(n);if(!nt(i)&&!Gt(i)&&(n=oe(n),i=oe(i)),!Y(e)&&Ie(n)&&!Ie(i))return l?!1:(n.value=i,!0)}let s=Y(e)&&Sn(r)?Number(r)<e.length:ie(e,r),a=Reflect.set(e,r,i,Ie(e)?e:o);return e===oe(o)&&(s?wt(i,n)&&Et(e,"set",r,i,n):Et(e,"add",r,i)),a}deleteProperty(e,r){let i=ie(e,r),o=e[r],n=Reflect.deleteProperty(e,r);return n&&i&&Et(e,"delete",r,void 0,o),n}has(e,r){let i=Reflect.has(e,r);return(!jt(r)||!wd.has(r))&&Le(e,"has",r),i}ownKeys(e){return Le(e,"iterate",Y(e)?"length":Sr),Reflect.ownKeys(e)}},Fa=class extends $n{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}},tf=new Rn,rf=new Fa,of=new Rn(!0);var za=t=>t,Nn=t=>Reflect.getPrototypeOf(t);function nf(t,e,r){return function(...i){let o=this.__v_raw,n=oe(o),s=Qr(n),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,h=o[t](...i),u=r?za:e?Dn:Fe;return!e&&Le(n,"iterate",l?Pa:Sr),{next(){let{value:f,done:b}=h.next();return b?{value:f,done:b}:{value:a?[u(f[0]),u(f[1])]:u(f),done:b}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sf(t,e){let r={get(o){let n=this.__v_raw,s=oe(n),a=oe(o);t||(wt(o,a)&&Le(s,"get",o),Le(s,"get",a));let{has:l}=Nn(s),h=e?za:t?Dn:Fe;if(l.call(s,o))return h(n.get(o));if(l.call(s,a))return h(n.get(a));n!==s&&n.get(o)},get size(){let o=this.__v_raw;return!t&&Le(oe(o),"iterate",Sr),Reflect.get(o,"size",o)},has(o){let n=this.__v_raw,s=oe(n),a=oe(o);return t||(wt(o,a)&&Le(s,"has",o),Le(s,"has",a)),o===a?n.has(o):n.has(o)||n.has(a)},forEach(o,n){let s=this,a=s.__v_raw,l=oe(a),h=e?za:t?Dn:Fe;return!t&&Le(l,"iterate",Sr),a.forEach((u,f)=>o.call(n,h(u),h(f),s))}};return xe(r,t?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(o){!e&&!nt(o)&&!Gt(o)&&(o=oe(o));let n=oe(this);return Nn(n).has.call(n,o)||(n.add(o),Et(n,"add",o,o)),this},set(o,n){!e&&!nt(n)&&!Gt(n)&&(n=oe(n));let s=oe(this),{has:a,get:l}=Nn(s),h=a.call(s,o);h||(o=oe(o),h=a.call(s,o));let u=l.call(s,o);return s.set(o,n),h?wt(n,u)&&Et(s,"set",o,n,u):Et(s,"add",o,n),this},delete(o){let n=oe(this),{has:s,get:a}=Nn(n),l=s.call(n,o);l||(o=oe(o),l=s.call(n,o));let h=a?a.call(n,o):void 0,u=n.delete(o);return l&&Et(n,"delete",o,void 0,h),u},clear(){let o=oe(this),n=o.size!==0,s=void 0,a=o.clear();return n&&Et(o,"clear",void 0,void 0,s),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=nf(o,t,e)}),r}function qa(t,e){let r=sf(t,e);return(i,o,n)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?i:Reflect.get(ie(r,o)&&o in i?r:i,o,n)}var af={get:qa(!1,!1)},lf={get:qa(!1,!0)},cf={get:qa(!0,!1)};var Ed=new WeakMap,Cd=new WeakMap,kd=new WeakMap,df=new WeakMap;function uf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pf(t){return t.__v_skip||!Object.isExtensible(t)?0:uf(Na(t))}function Ar(t){return Gt(t)?t:Ya(t,!1,tf,af,Ed)}function Ka(t){return Ya(t,!1,of,lf,Cd)}function Ga(t){return Ya(t,!0,rf,cf,kd)}function Ya(t,e,r,i,o){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;let n=pf(t);if(n===0)return t;let s=o.get(t);if(s)return s;let a=new Proxy(t,n===2?i:r);return o.set(t,a),a}function Tr(t){return Gt(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Gt(t){return!!(t&&t.__v_isReadonly)}function nt(t){return!!(t&&t.__v_isShallow)}function Ji(t){return t?!!t.__v_raw:!1}function oe(t){let e=t&&t.__v_raw;return e?oe(e):t}function Xa(t){return!ie(t,"__v_skip")&&Object.isExtensible(t)&&zi(t,"__v_skip",!0),t}var Fe=t=>ge(t)?Ar(t):t,Dn=t=>ge(t)?Ga(t):t;function Ie(t){return t?t.__v_isRef===!0:!1}function ii(t){return hf(t,!1)}function hf(t,e){return Ie(t)?t:new Ua(t,e)}var Ua=class{constructor(e,r){this.dep=new Yi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:oe(e),this._value=r?e:Fe(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){let r=this._rawValue,i=this.__v_isShallow||nt(e)||Gt(e);e=i?e:oe(e),wt(e,r)&&(this._rawValue=e,this._value=i?e:Fe(e),this.dep.trigger())}};function Ja(t){return Ie(t)?t.value:t}var ff={get:(t,e,r)=>e==="__v_raw"?t:Ja(Reflect.get(t,e,r)),set:(t,e,r,i)=>{let o=t[e];return Ie(o)&&!Ie(r)?(o.value=r,!0):Reflect.set(t,e,r,i)}};function Mn(t){return Tr(t)?t:new Proxy(t,ff)}var Ha=class{constructor(e,r,i){this.fn=e,this.setter=r,this._value=void 0,this.dep=new Yi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return vd(this,!0),!0}get value(){let e=this.dep.track();return yd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Sd(t,e,r=!1){let i,o;return X(t)?i=t:(i=t.get,o=t.set),new Ha(i,o,r)}var In={},Ln=new WeakMap,kr;function Td(t,e=!1,r=kr){if(r){let i=Ln.get(r);i||Ln.set(r,i=[]),i.push(t)}}function Ad(t,e,r=de){let{immediate:i,deep:o,once:n,scheduler:s,augmentJob:a,call:l}=r,h=S=>{(r.onWarn||Yh)("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=S=>o?S:nt(S)||o===!1||o===0?Kt(S,1):Kt(S),f,b,y,D,L=!1,W=!1;if(Ie(t)?(b=()=>t.value,L=nt(t)):Tr(t)?(b=()=>u(t),L=!0):Y(t)?(W=!0,L=t.some(S=>Tr(S)||nt(S)),b=()=>t.map(S=>{if(Ie(S))return S.value;if(Tr(S))return u(S);if(X(S))return l?l(S,2):S()})):X(t)?e?b=l?()=>l(t,2):t:b=()=>{if(y){Ct();try{y()}finally{kt()}}let S=kr;kr=f;try{return l?l(t,3,[D]):t(D)}finally{kr=S}}:b=Ye,e&&o){let S=b,H=o===!0?1/0:o;b=()=>Kt(S(),H)}let j=fd(),U=()=>{f.stop(),j&&j.active&&Vi(j.effects,f)};if(n&&e){let S=e;e=(...H)=>{S(...H),U()}}let q=W?new Array(t.length).fill(In):In,P=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(e){let H=f.run();if(o||L||(W?H.some((K,F)=>wt(K,q[F])):wt(H,q))){y&&y();let K=kr;kr=f;try{let F=[H,q===In?void 0:W&&q[0]===In?[]:q,D];q=H,l?l(e,3,F):e(...F)}finally{kr=K}}}else f.run()};return a&&a(P),f=new ri(b),f.scheduler=s?()=>s(P,!1):P,D=S=>Td(S,!1,f),y=f.onStop=()=>{let S=Ln.get(f);if(S){if(l)l(S,4);else for(let H of S)H();Ln.delete(f)}},e?i?P(!0):q=f.run():s?s(P.bind(null,!0),!0):f.run(),U.pause=f.pause.bind(f),U.resume=f.resume.bind(f),U.stop=U,U}function Kt(t,e=1/0,r){if(e<=0||!ge(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),e--,Ie(t))Kt(t.value,e,r);else if(Y(t))for(let i=0;i<t.length;i++)Kt(t[i],e,r);else if(Ta(t)||Qr(t))t.forEach(i=>{Kt(i,e,r)});else if(Oa(t)){for(let i in t)Kt(t[i],e,r);for(let i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Kt(t[i],e,r)}return t}function no(t,e,r,i){try{return i?t(...i):t()}catch(o){qn(o,e,r)}}function mt(t,e,r,i){if(X(t)){let o=no(t,e,r,i);return o&&Aa(o)&&o.catch(n=>{qn(n,e,r)}),o}if(Y(t)){let o=[];for(let n=0;n<t.length;n++)o.push(mt(t[n],e,r,i));return o}}function qn(t,e,r,i=!0){let o=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||de;if(e){let a=e.parent,l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){let u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,h)===!1)return}a=a.parent}if(n){Ct(),no(n,null,10,[t,l,h]),kt();return}}bf(t,r,o,i,s)}function bf(t,e,r,i=!0,o=!1){if(o)throw t;console.error(t)}var Be=[],Tt=-1,ni=[],hr=null,oi=0,Hd=Promise.resolve(),Un=null;function Bd(t){let e=Un||Hd;return t?e.then(this?t.bind(this):t):e}function yf(t){let e=Tt+1,r=Be.length;for(;e<r;){let i=e+r>>>1,o=Be[i],n=io(o);n<t||n===t&&o.flags&2?e=i+1:r=i}return e}function sl(t){if(!(t.flags&1)){let e=io(t),r=Be[Be.length-1];!r||!(t.flags&2)&&e>=io(r)?Be.push(t):Be.splice(yf(e),0,t),t.flags|=1,jd()}}function jd(){Un||(Un=Hd.then(Kd))}function Wd(t){Y(t)?ni.push(...t):hr&&t.id===-1?hr.splice(oi+1,0,t):t.flags&1||(ni.push(t),t.flags|=1),jd()}function Nd(t,e,r=Tt+1){for(;r<Be.length;r++){let i=Be[r];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Be.splice(r,1),r--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qd(t){if(ni.length){let e=[...new Set(ni)].sort((r,i)=>io(r)-io(i));if(ni.length=0,hr){hr.push(...e);return}for(hr=e,oi=0;oi<hr.length;oi++){let r=hr[oi];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}hr=null,oi=0}}var io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kd(t){let e=Ye;try{for(Tt=0;Tt<Be.length;Tt++){let r=Be[Tt];r&&!(r.flags&8)&&(r.flags&4&&(r.flags&=-2),no(r,r.i,r.i?15:14),r.flags&4||(r.flags&=-2))}}finally{for(;Tt<Be.length;Tt++){let r=Be[Tt];r&&(r.flags&=-2)}Tt=-1,Be.length=0,qd(t),Un=null,(Be.length||ni.length)&&Kd(t)}}var Ot=null,Gd=null;function Hn(t){let e=Ot;return Ot=t,Gd=t&&t.type.__scopeId||null,e}function xf(t,e=Ot,r){if(!e||t._n)return t;let i=(...o)=>{i._d&&Md(-1);let n=Hn(e),s;try{s=t(...o)}finally{Hn(n),i._d&&Md(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(t,e,r,i){let o=t.dirs,n=e&&e.dirs;for(let s=0;s<o.length;s++){let a=o[s];n&&(a.oldValue=n[s].value);let l=a.dir[i];l&&(Ct(),mt(l,r,8,[t.el,a,t,e]),kt())}}var _f=Symbol("_vte"),wf=t=>t.__isTeleport;var K1=Symbol("_leaveCb"),G1=Symbol("_enterCb");function Kn(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kn(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function al(t,e){return X(t)?xe({name:t.name},e,{setup:t}):t}function Yd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function eo(t,e,r,i,o=!1){if(Y(t)){t.forEach((D,L)=>eo(D,e&&(Y(e)?e[L]:e),r,i,o));return}if(to(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&eo(t,e,r,i.component.subTree);return}let n=i.shapeFlag&4?fl(i.component):i.el,s=o?null:n,{i:a,r:l}=t,h=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState,b=oe(f),y=f===de?()=>!1:D=>ie(b,D);if(h!=null&&h!==l&&(Ce(h)?(u[h]=null,y(h)&&(f[h]=null)):Ie(h)&&(h.value=null)),X(l))no(l,a,12,[s,u]);else{let D=Ce(l),L=Ie(l);if(D||L){let W=()=>{if(t.f){let j=D?y(l)?f[l]:u[l]:l.value;o?Y(j)&&Vi(j,n):Y(j)?j.includes(n)||j.push(n):D?(u[l]=[n],y(l)&&(f[l]=u[l])):(l.value=[n],t.k&&(u[t.k]=l.value))}else D?(u[l]=s,y(l)&&(f[l]=s)):L&&(l.value=s,t.k&&(u[t.k]=s))};s?(W.id=-1,st(W,r)):W()}}}var Y1=Ui().requestIdleCallback||(t=>setTimeout(t,1)),X1=Ui().cancelIdleCallback||(t=>clearTimeout(t));var to=t=>!!t.type.__asyncLoader;var Xd=t=>t.type.__isKeepAlive;function Ef(t,e){Jd(t,"a",e)}function Cf(t,e){Jd(t,"da",e)}function Jd(t,e,r=je){let i=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Gn(e,i,r),r){let o=r.parent;for(;o&&o.parent;)Xd(o.parent.vnode)&&kf(i,e,r,o),o=o.parent}}function kf(t,e,r,i){let o=Gn(e,t,i,!0);ll(()=>{Vi(i[e],o)},r)}function Gn(t,e,r=je,i=!1){if(r){let o=r[t]||(r[t]=[]),n=e.__weh||(e.__weh=(...s)=>{Ct();let a=so(r),l=mt(e,r,t,s);return a(),kt(),l});return i?o.unshift(n):o.push(n),n}}var Yt=t=>(e,r=je)=>{(!oo||t==="sp")&&Gn(t,(...i)=>e(...i),r)},Sf=Yt("bm"),Yn=Yt("m"),Zd=Yt("bu"),Qd=Yt("u"),Tf=Yt("bum"),ll=Yt("um"),Af=Yt("sp"),Nf=Yt("rtg"),Of=Yt("rtc");function If(t,e=je){Gn("ec",t,e)}var $f=Symbol.for("v-ndc");var tl=t=>t?bu(t)?fl(t):tl(t.parent):null,ro=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cl(t),$forceUpdate:t=>t.f||(t.f=()=>{sl(t.update)}),$nextTick:t=>t.n||(t.n=Bd.bind(t.proxy)),$watch:t=>em.bind(t)});var Za=(t,e)=>t!==de&&!t.__isScriptSetup&&ie(t,e),Rf={get({_:t},e){if(e==="__v_skip")return!0;let{ctx:r,setupState:i,data:o,props:n,accessCache:s,type:a,appContext:l}=t,h;if(e[0]!=="$"){let y=s[e];if(y!==void 0)switch(y){case 1:return i[e];case 2:return o[e];case 4:return r[e];case 3:return n[e]}else{if(Za(i,e))return s[e]=1,i[e];if(o!==de&&ie(o,e))return s[e]=2,o[e];if((h=t.propsOptions[0])&&ie(h,e))return s[e]=3,n[e];if(r!==de&&ie(r,e))return s[e]=4,r[e];rl&&(s[e]=0)}}let u=ro[e],f,b;if(u)return e==="$attrs"&&Le(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(r!==de&&ie(r,e))return s[e]=4,r[e];if(b=l.config.globalProperties,ie(b,e))return b[e]},set({_:t},e,r){let{data:i,setupState:o,ctx:n}=t;return Za(o,e)?(o[e]=r,!0):i!==de&&ie(i,e)?(i[e]=r,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:i,appContext:o,propsOptions:n}},s){let a;return!!r[s]||t!==de&&ie(t,s)||Za(e,s)||(a=n[0])&&ie(a,s)||ie(i,s)||ie(ro,s)||ie(o.config.globalProperties,s)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:ie(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function Od(t){return Y(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}var rl=!0;function Df(t){let e=cl(t),r=t.proxy,i=t.ctx;rl=!1,e.beforeCreate&&Id(e.beforeCreate,t,"bc");let{data:o,computed:n,methods:s,watch:a,provide:l,inject:h,created:u,beforeMount:f,mounted:b,beforeUpdate:y,updated:D,activated:L,deactivated:W,beforeDestroy:j,beforeUnmount:U,destroyed:q,unmounted:P,render:S,renderTracked:H,renderTriggered:K,errorCaptured:F,serverPrefetch:ae,expose:Te,inheritAttrs:_e,components:lt,directives:It,filters:$t}=e;if(h&&Lf(h,i,null),s)for(let ue in s){let Q=s[ue];X(Q)&&(i[ue]=Q.bind(r))}if(o){let ue=o.call(r,r);ge(ue)&&(t.data=Ar(ue))}if(rl=!0,n)for(let ue in n){let Q=n[ue],Rt=X(Q)?Q.bind(r,r):X(Q.get)?Q.get.bind(r,r):Ye,rs=!X(Q)&&X(Q.set)?Q.set.bind(r):Ye,di=ml({get:Rt,set:rs});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>di.value,set:Vr=>di.value=Vr})}if(a)for(let ue in a)eu(a[ue],i,r,ue);if(l){let ue=X(l)?l.call(r):l;Reflect.ownKeys(ue).forEach(Q=>{Uf(Q,ue[Q])})}u&&Id(u,t,"c");function Ae(ue,Q){Y(Q)?Q.forEach(Rt=>ue(Rt.bind(r))):Q&&ue(Q.bind(r))}if(Ae(Sf,f),Ae(Yn,b),Ae(Zd,y),Ae(Qd,D),Ae(Ef,L),Ae(Cf,W),Ae(If,F),Ae(Of,H),Ae(Nf,K),Ae(Tf,U),Ae(ll,P),Ae(Af,ae),Y(Te))if(Te.length){let ue=t.exposed||(t.exposed={});Te.forEach(Q=>{Object.defineProperty(ue,Q,{get:()=>r[Q],set:Rt=>r[Q]=Rt})})}else t.exposed||(t.exposed={});S&&t.render===Ye&&(t.render=S),_e!=null&&(t.inheritAttrs=_e),lt&&(t.components=lt),It&&(t.directives=It),ae&&Yd(t)}function Lf(t,e,r=Ye){Y(t)&&(t=il(t));for(let i in t){let o=t[i],n;ge(o)?"default"in o?n=Pn(o.from||i,o.default,!0):n=Pn(o.from||i):n=Pn(o),Ie(n)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n.value,set:s=>n.value=s}):e[i]=n}}function Id(t,e,r){mt(Y(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,r)}function eu(t,e,r,i){let o=i.includes(".")?fu(r,i):()=>r[i];if(Ce(t)){let n=e[t];X(n)&&Ir(o,n)}else if(X(t))Ir(o,t.bind(r));else if(ge(t))if(Y(t))t.forEach(n=>eu(n,e,r,i));else{let n=X(t.handler)?t.handler.bind(r):e[t.handler];X(n)&&Ir(o,n,t)}}function cl(t){let e=t.type,{mixins:r,extends:i}=e,{mixins:o,optionsCache:n,config:{optionMergeStrategies:s}}=t.appContext,a=n.get(e),l;return a?l=a:!o.length&&!r&&!i?l=e:(l={},o.length&&o.forEach(h=>Bn(l,h,s,!0)),Bn(l,e,s)),ge(e)&&n.set(e,l),l}function Bn(t,e,r,i=!1){let{mixins:o,extends:n}=e;n&&Bn(t,n,r,!0),o&&o.forEach(s=>Bn(t,s,r,!0));for(let s in e)if(!(i&&s==="expose")){let a=Vf[s]||r&&r[s];t[s]=a?a(t[s],e[s]):e[s]}return t}var Vf={data:$d,props:Rd,emits:Rd,methods:Qi,computed:Qi,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Qi,directives:Qi,watch:Pf,provide:$d,inject:Mf};function $d(t,e){return e?t?function(){return xe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return Qi(il(t),il(e))}function il(t){if(Y(t)){let e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function Qi(t,e){return t?xe(Object.create(null),t,e):e}function Rd(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:xe(Object.create(null),Od(t),Od(e??{})):e}function Pf(t,e){if(!t)return e;if(!e)return t;let r=xe(Object.create(null),t);for(let i in e)r[i]=He(t[i],e[i]);return r}function tu(){return{app:null,config:{isNativeTag:cd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ff=0;function zf(t,e){return function(i,o=null){X(i)||(i=xe({},i)),o!=null&&!ge(o)&&(o=null);let n=tu(),s=new WeakSet,a=[],l=!1,h=n.app={_uid:Ff++,_component:i,_props:o,_container:null,_context:n,_instance:null,version:wm,get config(){return n.config},set config(u){},use(u,...f){return s.has(u)||(u&&X(u.install)?(s.add(u),u.install(h,...f)):X(u)&&(s.add(u),u(h,...f))),h},mixin(u){return n.mixins.includes(u)||n.mixins.push(u),h},component(u,f){return f?(n.components[u]=f,h):n.components[u]},directive(u,f){return f?(n.directives[u]=f,h):n.directives[u]},mount(u,f,b){if(!l){let y=h._ceVNode||dt(i,o);return y.appContext=n,b===!0?b="svg":b===!1&&(b=void 0),f&&e?e(y,u):t(y,u,b),l=!0,h._container=u,u.__vue_app__=h,fl(y.component)}},onUnmount(u){a.push(u)},unmount(){l&&(mt(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,f){return n.provides[u]=f,h},runWithContext(u){let f=si;si=h;try{return u()}finally{si=f}}};return h}}var si=null;function Uf(t,e){if(je){let r=je.provides,i=je.parent&&je.parent.provides;i===r&&(r=je.provides=Object.create(i)),r[t]=e}}function Pn(t,e,r=!1){let i=je||Ot;if(i||si){let o=si?si._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return r&&X(e)?e.call(i&&i.proxy):e}}var ru={},iu=()=>Object.create(ru),ou=t=>Object.getPrototypeOf(t)===ru;function Hf(t,e,r,i=!1){let o={},n=iu();t.propsDefaults=Object.create(null),nu(t,e,o,n);for(let s in t.propsOptions[0])s in o||(o[s]=void 0);r?t.props=i?o:Ka(o):t.type.props?t.props=o:t.props=n,t.attrs=n}function Bf(t,e,r,i){let{props:o,attrs:n,vnode:{patchFlag:s}}=t,a=oe(o),[l]=t.propsOptions,h=!1;if((i||s>0)&&!(s&16)){if(s&8){let u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let b=u[f];if(Xn(t.emitsOptions,b))continue;let y=e[b];if(l)if(ie(n,b))y!==n[b]&&(n[b]=y,h=!0);else{let D=ct(b);o[D]=ol(l,a,D,y,t,!1)}else y!==n[b]&&(n[b]=y,h=!0)}}}else{nu(t,e,o,n)&&(h=!0);let u;for(let f in a)(!e||!ie(e,f)&&((u=Wt(f))===f||!ie(e,u)))&&(l?r&&(r[f]!==void 0||r[u]!==void 0)&&(o[f]=ol(l,a,f,void 0,t,!0)):delete o[f]);if(n!==a)for(let f in n)(!e||!ie(e,f))&&(delete n[f],h=!0)}h&&Et(t.attrs,"set","")}function nu(t,e,r,i){let[o,n]=t.propsOptions,s=!1,a;if(e)for(let l in e){if(ei(l))continue;let h=e[l],u;o&&ie(o,u=ct(l))?!n||!n.includes(u)?r[u]=h:(a||(a={}))[u]=h:Xn(t.emitsOptions,l)||(!(l in i)||h!==i[l])&&(i[l]=h,s=!0)}if(n){let l=oe(r),h=a||de;for(let u=0;u<n.length;u++){let f=n[u];r[f]=ol(o,l,f,h[f],t,!ie(h,f))}}return s}function ol(t,e,r,i,o,n){let s=t[r];if(s!=null){let a=ie(s,"default");if(a&&i===void 0){let l=s.default;if(s.type!==Function&&!s.skipFactory&&X(l)){let{propsDefaults:h}=o;if(r in h)i=h[r];else{let u=so(o);i=h[r]=l.call(null,e),u()}}else i=l;o.ce&&o.ce._setProp(r,i)}s[0]&&(n&&!a?i=!1:s[1]&&(i===""||i===Wt(r))&&(i=!0))}return i}var jf=new WeakMap;function su(t,e,r=!1){let i=r?jf:e.propsCache,o=i.get(t);if(o)return o;let n=t.props,s={},a=[],l=!1;if(!X(t)){let u=f=>{l=!0;let[b,y]=su(f,e,!0);xe(s,b),y&&a.push(...y)};!r&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!n&&!l)return ge(t)&&i.set(t,Jr),Jr;if(Y(n))for(let u=0;u<n.length;u++){let f=ct(n[u]);Dd(f)&&(s[f]=de)}else if(n)for(let u in n){let f=ct(u);if(Dd(f)){let b=n[u],y=s[f]=Y(b)||X(b)?{type:b}:xe({},b),D=y.type,L=!1,W=!0;if(Y(D))for(let j=0;j<D.length;++j){let U=D[j],q=X(U)&&U.name;if(q==="Boolean"){L=!0;break}else q==="String"&&(W=!1)}else L=X(D)&&D.name==="Boolean";y[0]=L,y[1]=W,(L||ie(y,"default"))&&a.push(f)}}let h=[s,a];return ge(t)&&i.set(t,h),h}function Dd(t){return t[0]!=="$"&&!ei(t)}var dl=t=>t[0]==="_"||t==="$stable",ul=t=>Y(t)?t.map(Nt):[Nt(t)],Wf=(t,e,r)=>{if(e._n)return e;let i=xf((...o)=>ul(e(...o)),r);return i._c=!1,i},au=(t,e,r)=>{let i=t._ctx;for(let o in t){if(dl(o))continue;let n=t[o];if(X(n))e[o]=Wf(o,n,i);else if(n!=null){let s=ul(n);e[o]=()=>s}}},lu=(t,e)=>{let r=ul(e);t.slots.default=()=>r},cu=(t,e,r)=>{for(let i in e)(r||!dl(i))&&(t[i]=e[i])},qf=(t,e,r)=>{let i=t.slots=iu();if(t.vnode.shapeFlag&32){let o=e.__;o&&zi(i,"__",o,!0);let n=e._;n?(cu(i,e,r),r&&zi(i,"_",n,!0)):au(e,i)}else e&&lu(t,e)},Kf=(t,e,r)=>{let{vnode:i,slots:o}=t,n=!0,s=de;if(i.shapeFlag&32){let a=e._;a?r&&a===1?n=!1:cu(o,e,r):(n=!e.$stable,au(e,o)),s=e}else e&&(lu(t,e),s={default:1});if(n)for(let a in o)!dl(a)&&s[a]==null&&delete o[a]};function Gf(){let t=[]}var st=am;function du(t){return Yf(t)}function Yf(t,e){Gf();let r=Ui();r.__VUE__=!0;let{insert:i,remove:o,patchProp:n,createElement:s,createText:a,createComment:l,setText:h,setElementText:u,parentNode:f,nextSibling:b,setScopeId:y=Ye,insertStaticContent:D}=t,L=(d,m,g,E=null,_=null,w=null,I=void 0,N=null,A=!!m.dynamicChildren)=>{if(d===m)return;d&&!Zi(d,m)&&(E=co(d),Zt(d,_,w,!0),d=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);let{type:C,ref:B,shapeFlag:$}=m;switch(C){case Jn:W(d,m,g,E);break;case ai:j(d,m,g,E);break;case Fn:d==null&&U(m,g,E,I);break;case At:It(d,m,g,E,_,w,I,N,A);break;default:$&1?H(d,m,g,E,_,w,I,N,A):$&6?$t(d,m,g,E,_,w,I,N,A):($&64||$&128)&&C.process(d,m,g,E,_,w,I,N,A,Mr)}B!=null&&_?eo(B,d&&d.ref,w,m||d,!m):B==null&&d&&d.ref!=null&&eo(d.ref,null,w,d,!0)},W=(d,m,g,E)=>{if(d==null)i(m.el=a(m.children),g,E);else{let _=m.el=d.el;m.children!==d.children&&h(_,m.children)}},j=(d,m,g,E)=>{d==null?i(m.el=l(m.children||""),g,E):m.el=d.el},U=(d,m,g,E)=>{[d.el,d.anchor]=D(d.children,m,g,E,d.el,d.anchor)},q=(d,m,g,E)=>{if(m.children!==d.children){let _=b(d.anchor);S(d),[m.el,m.anchor]=D(m.children,g,_,E)}else m.el=d.el,m.anchor=d.anchor},P=({el:d,anchor:m},g,E)=>{let _;for(;d&&d!==m;)_=b(d),i(d,g,E),d=_;i(m,g,E)},S=({el:d,anchor:m})=>{let g;for(;d&&d!==m;)g=b(d),o(d),d=g;o(m)},H=(d,m,g,E,_,w,I,N,A)=>{m.type==="svg"?I="svg":m.type==="math"&&(I="mathml"),d==null?K(m,g,E,_,w,I,N,A):Te(d,m,_,w,I,N,A)},K=(d,m,g,E,_,w,I,N)=>{let A,C,{props:B,shapeFlag:$,transition:z,dirs:G}=d;if(A=d.el=s(d.type,w,B&&B.is,B),$&8?u(A,d.children):$&16&&ae(d.children,A,null,E,_,Qa(d,w),I,N),G&&Nr(d,null,E,"created"),F(A,d,d.scopeId,I,E),B){for(let he in B)he!=="value"&&!ei(he)&&n(A,he,null,B[he],w,E);"value"in B&&n(A,"value",null,B.value,w),(C=B.onVnodeBeforeMount)&&St(C,E,d)}G&&Nr(d,null,E,"beforeMount");let te=Xf(_,z);te&&z.beforeEnter(A),i(A,m,g),((C=B&&B.onVnodeMounted)||te||G)&&st(()=>{C&&St(C,E,d),te&&z.enter(A),G&&Nr(d,null,E,"mounted")},_)},F=(d,m,g,E,_)=>{if(g&&y(d,g),E)for(let w=0;w<E.length;w++)y(d,E[w]);if(_){let w=_.subTree;if(m===w||vu(w.type)&&(w.ssContent===m||w.ssFallback===m)){let I=_.vnode;F(d,I,I.scopeId,I.slotScopeIds,_.parent)}}},ae=(d,m,g,E,_,w,I,N,A=0)=>{for(let C=A;C<d.length;C++){let B=d[C]=N?fr(d[C]):Nt(d[C]);L(null,B,m,g,E,_,w,I,N)}},Te=(d,m,g,E,_,w,I)=>{let N=m.el=d.el,{patchFlag:A,dynamicChildren:C,dirs:B}=m;A|=d.patchFlag&16;let $=d.props||de,z=m.props||de,G;if(g&&Or(g,!1),(G=z.onVnodeBeforeUpdate)&&St(G,g,m,d),B&&Nr(m,d,g,"beforeUpdate"),g&&Or(g,!0),($.innerHTML&&z.innerHTML==null||$.textContent&&z.textContent==null)&&u(N,""),C?_e(d.dynamicChildren,C,N,g,E,Qa(m,_),w):I||Rt(d,m,N,null,g,E,Qa(m,_),w,!1),A>0){if(A&16)lt(N,$,z,g,_);else if(A&2&&$.class!==z.class&&n(N,"class",null,z.class,_),A&4&&n(N,"style",$.style,z.style,_),A&8){let te=m.dynamicProps;for(let he=0;he<te.length;he++){let le=te[he],We=$[le],Ve=z[le];(Ve!==We||le==="value")&&n(N,le,We,Ve,_,g)}}A&1&&d.children!==m.children&&u(N,m.children)}else!I&&C==null&&lt(N,$,z,g,_);((G=z.onVnodeUpdated)||B)&&st(()=>{G&&St(G,g,m,d),B&&Nr(m,d,g,"updated")},E)},_e=(d,m,g,E,_,w,I)=>{for(let N=0;N<m.length;N++){let A=d[N],C=m[N],B=A.el&&(A.type===At||!Zi(A,C)||A.shapeFlag&198)?f(A.el):g;L(A,C,B,null,E,_,w,I,!0)}},lt=(d,m,g,E,_)=>{if(m!==g){if(m!==de)for(let w in m)!ei(w)&&!(w in g)&&n(d,w,m[w],null,_,E);for(let w in g){if(ei(w))continue;let I=g[w],N=m[w];I!==N&&w!=="value"&&n(d,w,N,I,_,E)}"value"in g&&n(d,"value",m.value,g.value,_)}},It=(d,m,g,E,_,w,I,N,A)=>{let C=m.el=d?d.el:a(""),B=m.anchor=d?d.anchor:a(""),{patchFlag:$,dynamicChildren:z,slotScopeIds:G}=m;G&&(N=N?N.concat(G):G),d==null?(i(C,g,E),i(B,g,E),ae(m.children||[],g,B,_,w,I,N,A)):$>0&&$&64&&z&&d.dynamicChildren?(_e(d.dynamicChildren,z,g,_,w,I,N),(m.key!=null||_&&m===_.subTree)&&uu(d,m,!0)):Rt(d,m,g,B,_,w,I,N,A)},$t=(d,m,g,E,_,w,I,N,A)=>{m.slotScopeIds=N,d==null?m.shapeFlag&512?_.ctx.activate(m,g,E,I,A):Lr(m,g,E,_,w,I,A):Ae(d,m,A)},Lr=(d,m,g,E,_,w,I)=>{let N=d.component=vm(d,E,_);if(Xd(d)&&(N.ctx.renderer=Mr),gm(N,!1,I),N.asyncDep){if(_&&_.registerDep(N,ue,I),!d.el){let A=N.subTree=dt(ai);j(null,A,m,g)}}else ue(N,d,m,g,_,w,I)},Ae=(d,m,g)=>{let E=m.component=d.component;if(nm(d,m,g))if(E.asyncDep&&!E.asyncResolved){Q(E,m,g);return}else E.next=m,E.update();else m.el=d.el,E.vnode=m},ue=(d,m,g,E,_,w,I)=>{let N=()=>{if(d.isMounted){let{next:$,bu:z,u:G,parent:te,vnode:he}=d;{let Je=pu(d);if(Je){$&&($.el=he.el,Q(d,$,I)),Je.asyncDep.then(()=>{d.isUnmounted||N()});return}}let le=$,We;Or(d,!1),$?($.el=he.el,Q(d,$,I)):$=he,z&&Fi(z),(We=$.props&&$.props.onVnodeBeforeUpdate)&&St(We,te,$,he),Or(d,!0);let Ve=el(d),ut=d.subTree;d.subTree=Ve,L(ut,Ve,f(ut.el),co(ut),d,_,w),$.el=Ve.el,le===null&&sm(d,Ve.el),G&&st(G,_),(We=$.props&&$.props.onVnodeUpdated)&&st(()=>St(We,te,$,he),_)}else{let $,{el:z,props:G}=m,{bm:te,m:he,parent:le,root:We,type:Ve}=d,ut=to(m);if(Or(d,!1),te&&Fi(te),!ut&&($=G&&G.onVnodeBeforeMount)&&St($,le,m),Or(d,!0),z&&ns){let Je=()=>{d.subTree=el(d),ns(z,d.subTree,d,_,null)};ut&&Ve.__asyncHydrate?Ve.__asyncHydrate(z,d,Je):Je()}else{We.ce&&We.ce._def.shadowRoot!==!1&&We.ce._injectChildStyle(Ve);let Je=d.subTree=el(d);L(null,Je,g,E,d,_,w),m.el=Je.el}if(he&&st(he,_),!ut&&($=G&&G.onVnodeMounted)){let Je=m;st(()=>St($,le,Je),_)}(m.shapeFlag&256||le&&to(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&st(d.a,_),d.isMounted=!0,m=g=E=null}};d.scope.on();let A=d.effect=new ri(N);d.scope.off();let C=d.update=A.run.bind(A),B=d.job=A.runIfDirty.bind(A);B.i=d,B.id=d.uid,A.scheduler=()=>sl(B),Or(d,!0),C()},Q=(d,m,g)=>{m.component=d;let E=d.vnode.props;d.vnode=m,d.next=null,Bf(d,m.props,E,g),Kf(d,m.children,g),Ct(),Nd(d),kt()},Rt=(d,m,g,E,_,w,I,N,A=!1)=>{let C=d&&d.children,B=d?d.shapeFlag:0,$=m.children,{patchFlag:z,shapeFlag:G}=m;if(z>0){if(z&128){di(C,$,g,E,_,w,I,N,A);return}else if(z&256){rs(C,$,g,E,_,w,I,N,A);return}}G&8?(B&16&&ui(C,_,w),$!==C&&u(g,$)):B&16?G&16?di(C,$,g,E,_,w,I,N,A):ui(C,_,w,!0):(B&8&&u(g,""),G&16&&ae($,g,E,_,w,I,N,A))},rs=(d,m,g,E,_,w,I,N,A)=>{d=d||Jr,m=m||Jr;let C=d.length,B=m.length,$=Math.min(C,B),z;for(z=0;z<$;z++){let G=m[z]=A?fr(m[z]):Nt(m[z]);L(d[z],G,g,null,_,w,I,N,A)}C>B?ui(d,_,w,!0,!1,$):ae(m,g,E,_,w,I,N,A,$)},di=(d,m,g,E,_,w,I,N,A)=>{let C=0,B=m.length,$=d.length-1,z=B-1;for(;C<=$&&C<=z;){let G=d[C],te=m[C]=A?fr(m[C]):Nt(m[C]);if(Zi(G,te))L(G,te,g,null,_,w,I,N,A);else break;C++}for(;C<=$&&C<=z;){let G=d[$],te=m[z]=A?fr(m[z]):Nt(m[z]);if(Zi(G,te))L(G,te,g,null,_,w,I,N,A);else break;$--,z--}if(C>$){if(C<=z){let G=z+1,te=G<B?m[G].el:E;for(;C<=z;)L(null,m[C]=A?fr(m[C]):Nt(m[C]),g,te,_,w,I,N,A),C++}}else if(C>z)for(;C<=$;)Zt(d[C],_,w,!0),C++;else{let G=C,te=C,he=new Map;for(C=te;C<=z;C++){let Ze=m[C]=A?fr(m[C]):Nt(m[C]);Ze.key!=null&&he.set(Ze.key,C)}let le,We=0,Ve=z-te+1,ut=!1,Je=0,pi=new Array(Ve);for(C=0;C<Ve;C++)pi[C]=0;for(C=G;C<=$;C++){let Ze=d[C];if(We>=Ve){Zt(Ze,_,w,!0);continue}let gt;if(Ze.key!=null)gt=he.get(Ze.key);else for(le=te;le<=z;le++)if(pi[le-te]===0&&Zi(Ze,m[le])){gt=le;break}gt===void 0?Zt(Ze,_,w,!0):(pi[gt-te]=C+1,gt>=Je?Je=gt:ut=!0,L(Ze,m[gt],g,null,_,w,I,N,A),We++)}let El=ut?Jf(pi):Jr;for(le=El.length-1,C=Ve-1;C>=0;C--){let Ze=te+C,gt=m[Ze],Cl=Ze+1<B?m[Ze+1].el:E;pi[C]===0?L(null,gt,g,Cl,_,w,I,N,A):ut&&(le<0||C!==El[le]?Vr(gt,g,Cl,2):le--)}}},Vr=(d,m,g,E,_=null)=>{let{el:w,type:I,transition:N,children:A,shapeFlag:C}=d;if(C&6){Vr(d.component.subTree,m,g,E);return}if(C&128){d.suspense.move(m,g,E);return}if(C&64){I.move(d,m,g,Mr);return}if(I===At){i(w,m,g);for(let $=0;$<A.length;$++)Vr(A[$],m,g,E);i(d.anchor,m,g);return}if(I===Fn){P(d,m,g);return}if(E!==2&&C&1&&N)if(E===0)N.beforeEnter(w),i(w,m,g),st(()=>N.enter(w),_);else{let{leave:$,delayLeave:z,afterLeave:G}=N,te=()=>{d.ctx.isUnmounted?o(w):i(w,m,g)},he=()=>{$(w,()=>{te(),G&&G()})};z?z(w,te,he):he()}else i(w,m,g)},Zt=(d,m,g,E=!1,_=!1)=>{let{type:w,props:I,ref:N,children:A,dynamicChildren:C,shapeFlag:B,patchFlag:$,dirs:z,cacheIndex:G}=d;if($===-2&&(_=!1),N!=null&&(Ct(),eo(N,null,g,d,!0),kt()),G!=null&&(m.renderCache[G]=void 0),B&256){m.ctx.deactivate(d);return}let te=B&1&&z,he=!to(d),le;if(he&&(le=I&&I.onVnodeBeforeUnmount)&&St(le,m,d),B&6)zu(d.component,g,E);else{if(B&128){d.suspense.unmount(g,E);return}te&&Nr(d,null,m,"beforeUnmount"),B&64?d.type.remove(d,m,g,Mr,E):C&&!C.hasOnce&&(w!==At||$>0&&$&64)?ui(C,m,g,!1,!0):(w===At&&$&384||!_&&B&16)&&ui(A,m,g),E&&_l(d)}(he&&(le=I&&I.onVnodeUnmounted)||te)&&st(()=>{le&&St(le,m,d),te&&Nr(d,null,m,"unmounted")},g)},_l=d=>{let{type:m,el:g,anchor:E,transition:_}=d;if(m===At){Fu(g,E);return}if(m===Fn){S(d);return}let w=()=>{o(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){let{leave:I,delayLeave:N}=_,A=()=>I(g,w);N?N(d.el,w,A):A()}else w()},Fu=(d,m)=>{let g;for(;d!==m;)g=b(d),o(d),d=g;o(m)},zu=(d,m,g)=>{let{bum:E,scope:_,job:w,subTree:I,um:N,m:A,a:C,parent:B,slots:{__:$}}=d;Ld(A),Ld(C),E&&Fi(E),B&&Y($)&&$.forEach(z=>{B.renderCache[z]=void 0}),_.stop(),w&&(w.flags|=8,Zt(I,d,m,g)),N&&st(N,m),st(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ui=(d,m,g,E=!1,_=!1,w=0)=>{for(let I=w;I<d.length;I++)Zt(d[I],m,g,E,_)},co=d=>{if(d.shapeFlag&6)return co(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();let m=b(d.anchor||d.el),g=m&&m[_f];return g?b(g):m},is=!1,wl=(d,m,g)=>{d==null?m._vnode&&Zt(m._vnode,null,null,!0):L(m._vnode||null,d,m,null,null,null,g),m._vnode=d,is||(is=!0,Nd(),qd(),is=!1)},Mr={p:L,um:Zt,m:Vr,r:_l,mt:Lr,mc:ae,pc:Rt,pbc:_e,n:co,o:t},os,ns;return e&&([os,ns]=e(Mr)),{render:wl,hydrate:os,createApp:zf(wl,os)}}function Qa({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function Or({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function uu(t,e,r=!1){let i=t.children,o=e.children;if(Y(i)&&Y(o))for(let n=0;n<i.length;n++){let s=i[n],a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=fr(o[n]),a.el=s.el),!r&&a.patchFlag!==-2&&uu(s,a)),a.type===Jn&&(a.el=s.el),a.type===ai&&!a.el&&(a.el=s.el)}}function Jf(t){let e=t.slice(),r=[0],i,o,n,s,a,l=t.length;for(i=0;i<l;i++){let h=t[i];if(h!==0){if(o=r[r.length-1],t[o]<h){e[i]=o,r.push(i);continue}for(n=0,s=r.length-1;n<s;)a=n+s>>1,t[r[a]]<h?n=a+1:s=a;h<t[r[n]]&&(n>0&&(e[i]=r[n-1]),r[n]=i)}}for(n=r.length,s=r[n-1];n-- >0;)r[n]=s,s=e[s];return r}function pu(t){let e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pu(e)}function Ld(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}var Zf=Symbol.for("v-scx"),Qf=()=>{{let t=Pn(Zf);return t}};function Ir(t,e,r){return hu(t,e,r)}function hu(t,e,r=de){let{immediate:i,deep:o,flush:n,once:s}=r,a=xe({},r),l=e&&i||!e&&n!=="post",h;if(oo){if(n==="sync"){let y=Qf();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){let y=()=>{};return y.stop=Ye,y.resume=Ye,y.pause=Ye,y}}let u=je;a.call=(y,D,L)=>mt(y,u,D,L);let f=!1;n==="post"?a.scheduler=y=>{st(y,u&&u.suspense)}:n!=="sync"&&(f=!0,a.scheduler=(y,D)=>{D?y():sl(y)}),a.augmentJob=y=>{e&&(y.flags|=4),f&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};let b=Ad(t,e,a);return oo&&(h?h.push(b):l&&b()),b}function em(t,e,r){let i=this.proxy,o=Ce(t)?t.includes(".")?fu(i,t):()=>i[t]:t.bind(i,i),n;X(e)?n=e:(n=e.handler,r=e);let s=so(this),a=hu(o,n.bind(i),r);return s(),a}function fu(t,e){let r=e.split(".");return()=>{let i=t;for(let o=0;o<r.length&&i;o++)i=i[r[o]];return i}}var tm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ct(e)}Modifiers`]||t[`${Wt(e)}Modifiers`];function rm(t,e,...r){if(t.isUnmounted)return;let i=t.vnode.props||de,o=r,n=e.startsWith("update:"),s=n&&tm(i,e.slice(7));s&&(s.trim&&(o=r.map(u=>Ce(u)?u.trim():u)),s.number&&(o=r.map(Ia)));let a,l=i[a=Pi(e)]||i[a=Pi(ct(e))];!l&&n&&(l=i[a=Pi(Wt(e))]),l&&mt(l,t,6,o);let h=i[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(h,t,6,o)}}function mu(t,e,r=!1){let i=e.emitsCache,o=i.get(t);if(o!==void 0)return o;let n=t.emits,s={},a=!1;if(!X(t)){let l=h=>{let u=mu(h,e,!0);u&&(a=!0,xe(s,u))};!r&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!n&&!a?(ge(t)&&i.set(t,null),null):(Y(n)?n.forEach(l=>s[l]=null):xe(s,n),ge(t)&&i.set(t,s),s)}function Xn(t,e){return!t||!Zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Wt(e))||ie(t,e))}function el(t){let{type:e,vnode:r,proxy:i,withProxy:o,propsOptions:[n],slots:s,attrs:a,emit:l,render:h,renderCache:u,props:f,data:b,setupState:y,ctx:D,inheritAttrs:L}=t,W=Hn(t),j,U;try{if(r.shapeFlag&4){let S=o||i,H=S;j=Nt(h.call(H,S,u,f,y,b,D)),U=a}else{let S=e;j=Nt(S.length>1?S(f,{attrs:a,slots:s,emit:l}):S(f,null)),U=e.props?a:im(a)}}catch(S){lm.length=0,qn(S,t,1),j=dt(ai)}let q=j,P;if(U&&L!==!1){let S=Object.keys(U),{shapeFlag:H}=q;S.length&&H&7&&(n&&S.some(Li)&&(U=om(U,n)),q=li(q,U,!1,!0))}return r.dirs&&(q=li(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(r.dirs):r.dirs),r.transition&&Kn(q,r.transition),j=q,Hn(W),j}var im=t=>{let e;for(let r in t)(r==="class"||r==="style"||Zr(r))&&((e||(e={}))[r]=t[r]);return e},om=(t,e)=>{let r={};for(let i in t)(!Li(i)||!(i.slice(9)in e))&&(r[i]=t[i]);return r};function nm(t,e,r){let{props:i,children:o,component:n}=t,{props:s,children:a,patchFlag:l}=e,h=n.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return i?Vd(i,s,h):!!s;if(l&8){let u=e.dynamicProps;for(let f=0;f<u.length;f++){let b=u[f];if(s[b]!==i[b]&&!Xn(h,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Vd(i,s,h):!0:!!s;return!1}function Vd(t,e,r){let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let o=0;o<i.length;o++){let n=i[o];if(e[n]!==t[n]&&!Xn(r,n))return!0}return!1}function sm({vnode:t,parent:e},r){for(;e;){let i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=r,e=e.parent;else break}}var vu=t=>t.__isSuspense;function am(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Wd(t)}var At=Symbol.for("v-fgt"),Jn=Symbol.for("v-txt"),ai=Symbol.for("v-cmt"),Fn=Symbol.for("v-stc"),lm=[],mr=null;var pl=1;function Md(t,e=!1){pl+=t,t<0&&mr&&e&&(mr.hasOnce=!0)}function jn(t){return t?t.__v_isVNode===!0:!1}function Zi(t,e){return t.type===e.type&&t.key===e.key}var gu=({key:t})=>t??null,zn=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ie(t)||X(t)?{i:Ot,r:t,k:e,f:!!r}:t:null);function cm(t,e=null,r=null,i=0,o=null,n=t===At?0:1,s=!1,a=!1){let l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gu(e),ref:e&&zn(e),scopeId:Gd,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ot};return a?(hl(l,r),n&128&&t.normalize(l)):r&&(l.shapeFlag|=Ce(r)?8:16),pl>0&&!s&&mr&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&mr.push(l),l}var dt=dm;function dm(t,e=null,r=null,i=0,o=null,n=!1){if((!t||t===$f)&&(t=ai),jn(t)){let a=li(t,e,!0);return r&&hl(a,r),pl>0&&!n&&mr&&(a.shapeFlag&6?mr[mr.indexOf(t)]=a:mr.push(a)),a.patchFlag=-2,a}if(_m(t)&&(t=t.__vccOpts),e){e=um(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Bi(a)),ge(l)&&(Ji(l)&&!Y(l)&&(l=xe({},l)),e.style=Hi(l))}let s=Ce(t)?1:vu(t)?128:wf(t)?64:ge(t)?4:X(t)?2:0;return cm(t,e,r,i,o,s,n,!0)}function um(t){return t?Ji(t)||ou(t)?xe({},t):t:null}function li(t,e,r=!1,i=!1){let{props:o,ref:n,patchFlag:s,children:a,transition:l}=t,h=e?hm(o||{},e):o,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&gu(h),ref:e&&e.ref?r&&n?Y(n)?n.concat(zn(e)):[n,zn(e)]:zn(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&li(t.ssContent),ssFallback:t.ssFallback&&li(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Kn(u,l.clone(u)),u}function pm(t=" ",e=0){return dt(Jn,null,t,e)}function Nt(t){return t==null||typeof t=="boolean"?dt(ai):Y(t)?dt(At,null,t.slice()):jn(t)?fr(t):dt(Jn,null,String(t))}function fr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:li(t)}function hl(t,e){let r=0,{shapeFlag:i}=t;if(e==null)e=null;else if(Y(e))r=16;else if(typeof e=="object")if(i&65){let o=e.default;o&&(o._c&&(o._d=!1),hl(t,o()),o._c&&(o._d=!0));return}else{r=32;let o=e._;!o&&!ou(e)?e._ctx=Ot:o===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Ot},r=32):(e=String(e),i&64?(r=16,e=[pm(e)]):r=8);t.children=e,t.shapeFlag|=r}function hm(...t){let e={};for(let r=0;r<t.length;r++){let i=t[r];for(let o in i)if(o==="class")e.class!==i.class&&(e.class=Bi([e.class,i.class]));else if(o==="style")e.style=Hi([e.style,i.style]);else if(Zr(o)){let n=e[o],s=i[o];s&&n!==s&&!(Y(n)&&n.includes(s))&&(e[o]=n?[].concat(n,s):s)}else o!==""&&(e[o]=i[o])}return e}function St(t,e,r,i=null){mt(t,e,7,[r,i])}var fm=tu(),mm=0;function vm(t,e,r){let i=t.type,o=(e?e.appContext:t.appContext)||fm,n={uid:mm++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ki(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:su(i,o),emitsOptions:mu(i,o),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=rm.bind(null,n),t.ce&&t.ce(n),n}var je=null;var Wn,nl;{let t=Ui(),e=(r,i)=>{let o;return(o=t[r])||(o=t[r]=[]),o.push(i),n=>{o.length>1?o.forEach(s=>s(n)):o[0](n)}};Wn=e("__VUE_INSTANCE_SETTERS__",r=>je=r),nl=e("__VUE_SSR_SETTERS__",r=>oo=r)}var so=t=>{let e=je;return Wn(t),t.scope.on(),()=>{t.scope.off(),Wn(e)}},Pd=()=>{je&&je.scope.off(),Wn(null)};function bu(t){return t.vnode.shapeFlag&4}var oo=!1;function gm(t,e=!1,r=!1){e&&nl(e);let{props:i,children:o}=t.vnode,n=bu(t);Hf(t,i,n,e),qf(t,o,r||e);let s=n?bm(t,e):void 0;return e&&nl(!1),s}function bm(t,e){var r;let i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rf);let{setup:o}=i;if(o){Ct();let n=t.setupContext=o.length>1?xm(t):null,s=so(t),a=no(o,t,0,[t.props,n]),l=Aa(a);if(kt(),s(),(l||t.sp)&&!to(t)&&Yd(t),l){if(a.then(Pd,Pd),e)return a.then(h=>{Fd(t,h,e)}).catch(h=>{qn(h,t,0)});t.asyncDep=a}else Fd(t,a,e)}else yu(t,e)}function Fd(t,e,r){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=Mn(e)),yu(t,r)}var zd,Ud;function yu(t,e,r){let i=t.type;if(!t.render){if(!e&&zd&&!i.render){let o=i.template||cl(t).template;if(o){let{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,h=xe(xe({isCustomElement:n,delimiters:a},s),l);i.render=zd(o,h)}}t.render=i.render||Ye,Ud&&Ud(t)}{let o=so(t);Ct();try{Df(t)}finally{kt(),o()}}}var ym={get(t,e){return Le(t,"get",""),t[e]}};function xm(t){let e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,ym),slots:t.slots,emit:t.emit,expose:e}}function fl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mn(Xa(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in ro)return ro[r](t)},has(e,r){return r in e||r in ro}})):t.proxy}function _m(t){return X(t)&&"__vccOpts"in t}var ml=(t,e)=>Sd(t,e,oo);function V(t,e,r){let i=arguments.length;return i===2?ge(e)&&!Y(e)?jn(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(i>3?r=Array.prototype.slice.call(arguments,2):i===3&&jn(r)&&(r=[r]),dt(t,e,r))}var wm="3.5.17";var bl,xu=typeof window<"u"&&window.trustedTypes;if(xu)try{bl=xu.createPolicy("vue",{createHTML:t=>t})}catch{}var $u=bl?t=>bl.createHTML(t):t=>t,Em="http://www.w3.org/2000/svg",Cm="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,_u=Xt&&Xt.createElement("template"),km={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{let e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,i)=>{let o=e==="svg"?Xt.createElementNS(Em,t):e==="mathml"?Xt.createElementNS(Cm,t):r?Xt.createElement(t,{is:r}):Xt.createElement(t);return t==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,i,o,n){let s=r?r.previousSibling:e.lastChild;if(o&&(o===n||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),r),!(o===n||!(o=o.nextSibling)););else{_u.innerHTML=$u(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);let a=_u.content;if(i==="svg"||i==="mathml"){let l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,r)}return[s?s.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}};var Sm=Symbol("_vtc");function Tm(t,e,r){let i=t[Sm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}var wu=Symbol("_vod"),Am=Symbol("_vsh");var Nm=Symbol("");var Om=/(^|;)\s*display\s*:/;function Im(t,e,r){let i=t.style,o=Ce(r),n=!1;if(r&&!o){if(e)if(Ce(e))for(let s of e.split(";")){let a=s.slice(0,s.indexOf(":")).trim();r[a]==null&&Zn(i,a,"")}else for(let s in e)r[s]==null&&Zn(i,s,"");for(let s in r)s==="display"&&(n=!0),Zn(i,s,r[s])}else if(o){if(e!==r){let s=i[Nm];s&&(r+=";"+s),i.cssText=r,n=Om.test(r)}}else e&&t.removeAttribute("style");wu in t&&(t[wu]=n?i.display:"",t[Am]&&(i.display="none"))}var Eu=/\s*!important$/;function Zn(t,e,r){if(Y(r))r.forEach(i=>Zn(t,e,i));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{let i=$m(t,e);Eu.test(r)?t.setProperty(Wt(i),r.replace(Eu,""),"important"):t[i]=r}}var Cu=["Webkit","Moz","ms"],vl={};function $m(t,e){let r=vl[e];if(r)return r;let i=ct(e);if(i!=="filter"&&i in t)return vl[e]=i;i=Mi(i);for(let o=0;o<Cu.length;o++){let n=Cu[o]+i;if(n in t)return vl[e]=n}return e}var ku="http://www.w3.org/1999/xlink";function Su(t,e,r,i,o,n=ud(e)){i&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(ku,e.slice(6,e.length)):t.setAttributeNS(ku,e,r):r==null||n&&!An(r)?t.removeAttribute(e):t.setAttribute(e,n?"":jt(r)?String(r):r)}function Tu(t,e,r,i,o){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?$u(r):r);return}let n=t.tagName;if(e==="value"&&n!=="PROGRESS"&&!n.includes("-")){let a=n==="OPTION"?t.getAttribute("value")||"":t.value,l=r==null?t.type==="checkbox"?"on":"":String(r);(a!==l||!("_value"in t))&&(t.value=l),r==null&&t.removeAttribute(e),t._value=r;return}let s=!1;if(r===""||r==null){let a=typeof t[e];a==="boolean"?r=An(r):r==null&&a==="string"?(r="",s=!0):a==="number"&&(r=0,s=!0)}try{t[e]=r}catch{}s&&t.removeAttribute(o||e)}function Rm(t,e,r,i){t.addEventListener(e,r,i)}function Dm(t,e,r,i){t.removeEventListener(e,r,i)}var Au=Symbol("_vei");function Lm(t,e,r,i,o=null){let n=t[Au]||(t[Au]={}),s=n[e];if(i&&s)s.value=i;else{let[a,l]=Vm(e);if(i){let h=n[e]=Fm(i,o);Rm(t,a,h,l)}else s&&(Dm(t,a,s,l),n[e]=void 0)}}var Nu=/(?:Once|Passive|Capture)$/;function Vm(t){let e;if(Nu.test(t)){e={};let i;for(;i=t.match(Nu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wt(t.slice(2)),e]}var gl=0,Mm=Promise.resolve(),Pm=()=>gl||(Mm.then(()=>gl=0),gl=Date.now());function Fm(t,e){let r=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=r.attached)return;mt(zm(i,r.value),e,5,[i])};return r.value=t,r.attached=Pm(),r}function zm(t,e){if(Y(e)){let r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(i=>o=>!o._stopped&&i&&i(o))}else return e}var Ou=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Um=(t,e,r,i,o,n)=>{let s=o==="svg";e==="class"?Tm(t,i,s):e==="style"?Im(t,r,i):Zr(e)?Li(e)||Lm(t,e,r,i,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hm(t,e,i,s))?(Tu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Su(t,e,i,s,n,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ce(i))?Tu(t,ct(e),i,n,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Su(t,e,i,s))};function Hm(t,e,r,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ou(e)&&X(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){let o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Ou(e)&&Ce(r)?!1:e in t}var bT=Symbol("_moveCb"),yT=Symbol("_enterCb");var xT=Symbol("_assign");var Bm=xe({patchProp:Um},km),Iu;function jm(){return Iu||(Iu=du(Bm))}var Ru=(...t)=>{let e=jm().createApp(...t),{mount:r}=e;return e.mount=i=>{let o=qm(i);if(!o)return;let n=e._component;!X(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.nodeType===1&&(o.textContent="");let s=r(o,!1,Wm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function Wm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qm(t){return Ce(t)?document.querySelector(t):t}var Du=al({name:"SettingsPanel",props:{state:{type:Object,required:!0}},emits:["ok-click","cancel-click","settings-change"],setup(t,{emit:e,expose:r}){let i=ii(!1),o=ii(0),n=Ar({aiConfig:"smart",expandAtOrigin:!1,sentenceSmallMargin:!1,enableEarcons:!1,persona:"",initialPhrases:[],voiceName:"",voiceSpeakingRate:0,voicePitch:0}),s=ii([]),a=[{name:"\u901A\u7528\u8BBE\u7F6E",key:"general"},{name:"\u914D\u7F6E\u8BBE\u7F6E",key:"config"},{name:"\u8BED\u97F3\u8BBE\u7F6E",key:"voice"}],l=ml({get:()=>n.initialPhrases.join(`
`),set:P=>{n.initialPhrases=P.split(`
`).filter(S=>S.trim()!=="")}}),h=()=>{f(),i.value=!0},u=()=>{i.value=!1},f=()=>{if(t.state){let P=t.state.aiConfig;n.aiConfig=P&&["fast","smart","classic"].includes(P)?P:"classic",n.expandAtOrigin=t.state.expandAtOrigin||!1,n.sentenceSmallMargin=t.state.sentenceSmallMargin||!1,n.enableEarcons=t.state.enableEarcons||!1,n.persona=t.state.persona||"",n.initialPhrases=[...t.state.initialPhrases||[]],n.voiceName=t.state.voiceName||"",n.voiceSpeakingRate=t.state.voiceSpeakingRate!==void 0?Math.max(0,Math.min(100,t.state.voiceSpeakingRate*5+50)):50,n.voicePitch=t.state.voicePitch!==void 0?Math.max(0,Math.min(100,t.state.voicePitch*5+50)):50}},b=()=>{if(typeof window<"u"&&window.speechSynthesis){let P=window.speechSynthesis.getVoices();s.value=P.filter(S=>S.lang.startsWith("zh")||S.lang.startsWith("en")).map(S=>({name:S.name,lang:S.lang}))}},y=()=>{e("ok-click",{...n}),u()},D=()=>{e("cancel-click"),u()},L=()=>{D()},W=P=>{Object.assign(n,P)};Ir(n,P=>{e("settings-change",{...P})},{deep:!0}),Ir(()=>t.state,P=>{P&&f()},{deep:!0}),Yn(()=>{b(),typeof window<"u"&&window.speechSynthesis&&window.speechSynthesis.addEventListener("voiceschanged",b)}),r({show:h,hide:u,updateSettings:W});let j=()=>V("div",{class:"tab-panel"},[V("div",{class:"setting-group"},[V("div",{class:"ai-title-container"},[V("label",{class:"setting-label"},"AI\u6027\u80FD"),V("div",{class:"ai-mode-description"},"\u63A8\u8350\u7ECF\u5178\u6A21\u5F0F\uFF0C\u8C03\u6574\u4E3A\u667A\u80FD\u6A21\u5F0F\u4F1A\u5BF9\u6A21\u578B\u901F\u5EA6\u6709\u5F71\u54CD\u3002")]),V("div",{class:"radio-group"},[V("label",{class:"radio-item"},[V("input",{type:"radio",name:"aiConfig",value:"fast",checked:n.aiConfig==="fast",onChange:()=>{n.aiConfig="fast"}}),V("span",{class:"radio-text"},"\u5FEB\u901F\u6A21\u5F0F")]),V("label",{class:"radio-item"},[V("input",{type:"radio",name:"aiConfig",value:"smart",checked:n.aiConfig==="smart",onChange:()=>{n.aiConfig="smart"}}),V("span",{class:"radio-text"},"\u667A\u80FD\u6A21\u5F0F")]),V("label",{class:"radio-item"},[V("input",{type:"radio",name:"aiConfig",value:"classic",checked:n.aiConfig==="classic",onChange:()=>{n.aiConfig="classic"}}),V("span",{class:"radio-text"},"\u7ECF\u5178\u6A21\u5F0F")])])]),V("div",{class:"setting-group"},[V("label",{class:"switch-group"},[V("span",{},"\u542F\u7528\u97F3\u6548"),V("input",{type:"checkbox",class:"switch-input",checked:n.enableEarcons,onChange:P=>{n.enableEarcons=P.target.checked}}),V("span",{class:"switch-slider"})])]),V("div",{class:"setting-group"},[V("label",{class:"switch-group"},[V("span",{},"\u7F29\u5C0F\u53E5\u8DDD"),V("input",{type:"checkbox",class:"switch-input",checked:n.sentenceSmallMargin,onChange:P=>{n.sentenceSmallMargin=P.target.checked}}),V("span",{class:"switch-slider"})])])]),U=()=>V("div",{class:"tab-panel"},[V("div",{class:"setting-group"},[V("label",{class:"setting-label"},"\u89D2\u8272\u8BBE\u5B9A"),V("textarea",{class:"setting-textarea",rows:4,placeholder:"\u8F93\u5165\u89D2\u8272\u8BBE\u5B9A...",value:n.persona,onInput:P=>{n.persona=P.target.value}})]),V("div",{class:"setting-group"},[V("label",{class:"setting-label"},"\u521D\u59CB\u77ED\u8BED\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09"),V("textarea",{class:"setting-textarea",rows:3,placeholder:"\u6BCF\u884C\u4E00\u4E2A\u77ED\u8BED...",value:l.value,onInput:P=>{l.value=P.target.value}})])]),q=()=>V("div",{class:"tab-panel"},[V("div",{class:"setting-group"},[V("label",{class:"setting-label"},"TTS\u8BED\u97F3"),V("div",{class:"voice-option-group"},[V("div",{class:"voice-option-row"},[V("div",{class:["voice-option-item",{selected:n.voiceName==="female"||n.voiceName===""}],onClick:()=>{n.voiceName="female"}},[V("input",{type:"radio",name:"voiceType",value:"female",checked:n.voiceName==="female"||n.voiceName==="",onChange:()=>{n.voiceName="female"}}),V("span",{class:"voice-option-text"},"\u5973\u58F0")]),V("div",{class:["voice-option-item",{selected:n.voiceName==="male"}],onClick:()=>{n.voiceName="male"}},[V("input",{type:"radio",name:"voiceType",value:"male",checked:n.voiceName==="male",onChange:()=>{n.voiceName="male"}}),V("span",{class:"voice-option-text"},"\u7537\u58F0")])])])]),V("div",{class:"range-group"},[V("div",{class:"range-container"},[V("span",{class:"range-label-text"},"\u8BED\u901F"),V("input",{type:"range",min:0,max:100,class:"setting-range-inline",value:n.voiceSpeakingRate,onInput:P=>{n.voiceSpeakingRate=parseInt(P.target.value)}}),V("span",{class:"range-value"},`${n.voiceSpeakingRate}%`)])]),V("div",{class:"range-group"},[V("div",{class:"range-container"},[V("span",{class:"range-label-text"},"\u97F3\u91CF"),V("input",{type:"range",min:0,max:100,class:"setting-range-inline",value:n.voicePitch,onInput:P=>{n.voicePitch=parseInt(P.target.value)}}),V("span",{class:"range-value"},`${n.voicePitch}%`)])])]);return()=>i.value?V("div",{class:"settings-overlay",onClick:P=>{P.target===P.currentTarget&&L()}},[V("div",{class:"settings-modal"},[V("div",{class:"settings-header"},[V("h2",{},"\u8BBE\u7F6E"),V("button",{class:"close-btn","aria-label":"\u5173\u95ED",onClick:L},[V("span",{},"\xD7")])]),V("div",{class:"settings-body"},[V("div",{class:"settings-tabs"},a.map((P,S)=>V("button",{key:P.key,class:["tab-btn",{active:o.value===S}],onClick:()=>{o.value=S}},P.name))),V("div",{class:"settings-content"},[o.value===0?j():o.value===1?U():q()])]),V("div",{class:"settings-footer"},[V("button",{class:"btn-primary",onClick:y},"\u4FDD\u5B58")])])]):null}});var $r=class extends O{constructor(){super();this.vueApp=null;this.vueComponent=null}updated(r){r.has("state")&&this.vueApp&&this.vueComponent&&(this.vueApp.unmount(),this.createVueApp())}firstUpdated(){this.createVueApp()}createVueApp(){let r=this.shadowRoot?.getElementById("vue-mount-point");if(r)try{this.vueApp=Ru(Du,{state:this.state,"onOk-click":i=>{this.dispatchEvent(new CustomEvent("ok-click",{detail:i,bubbles:!0,composed:!0}))},"onCancel-click":()=>{this.dispatchEvent(new CustomEvent("cancel-click",{bubbles:!0,composed:!0}))},"onSettings-change":i=>{this.dispatchEvent(new CustomEvent("settings-change",{detail:i,bubbles:!0,composed:!0}))}}),this.vueComponent=this.vueApp.mount(r)}catch(i){console.error("\u521B\u5EFAVue\u5E94\u7528\u5931\u8D25:",i)}}show(){this.vueComponent?.show&&this.vueComponent.show()}hide(){this.vueComponent?.hide&&this.vueComponent.hide()}updateSettings(r){this.vueComponent?.updateSettings&&this.vueComponent.updateSettings(r)}render(){return v`
      <div id="vue-mount-point"></div>
    `}disconnectedCallback(){super.disconnectedCallback(),this.vueApp&&(this.vueApp.unmount(),this.vueApp=null,this.vueComponent=null)}};$r.styles=T`
    :host {
      display: block;
    }

    #vue-mount-point {
      width: 100%;
      height: 100%;
    }

    /* Vue组件样式 */
    #vue-mount-point .settings-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Noto Sans JP', 'Roboto', sans-serif;
    }

    #vue-mount-point .settings-modal {
      background: white;
      border-radius: 12px;
      width: 90%;
      max-width: 750px;
      max-height: 85vh;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    #vue-mount-point .settings-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid #e0e0e0;
      background: #f8f9fa;
    }

    #vue-mount-point .settings-header h2 {
      margin: 0;
      color: #333;
      font-size: 20px;
      font-weight: 600;
    }

    #vue-mount-point .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
      padding: 4px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    #vue-mount-point .close-btn:hover {
      background: #e0e0e0;
      color: #333;
    }

    #vue-mount-point .settings-tabs {
      display: flex;
      flex-direction: column;
      background: #f8f9fa;
      border-right: 1px solid #e0e0e0;
      border-bottom: none;
      width: 100px;
      min-width: 100px;
    }

    #vue-mount-point .tab-btn {
      flex: none;
      padding: 16px 20px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      transition: all 0.2s;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;
    }

    #vue-mount-point .tab-btn:hover {
      background: rgba(25, 118, 210, 0.1);
      color: #1976d2;
    }

    #vue-mount-point .tab-btn.active {
      background: rgba(111, 201, 255, 0.11);
      color: #2D85F0;
      font-weight: 600;
      border-right: 3px solid #2D85F0;
    }

    #vue-mount-point .settings-body {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    #vue-mount-point .settings-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px 16px;
    }

    #vue-mount-point .tab-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    #vue-mount-point .setting-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    #vue-mount-point .setting-label {
      font-weight: 600;
      color: #333333;
      font-size: 16px;
      margin-bottom: 8px;
    }

    #vue-mount-point .setting-select,
    #vue-mount-point .setting-textarea {
      padding: 12px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      font-size: 14px;
      transition: border-color 0.2s;
      font-family: inherit;
      background: white;
      height: 44px;
      width: 100%;
      box-sizing: border-box;
    }

    #vue-mount-point .setting-select:focus,
    #vue-mount-point .setting-textarea:focus {
      outline: none;
      border-color: #1976d2;
      box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
    }

    #vue-mount-point .radio-group {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-left: 6px;
    }

    #vue-mount-point .radio-item {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 14px;
      color: #666666;
    }

    #vue-mount-point .radio-item input[type="radio"] {
      width: 16px;
      height: 16px;
      accent-color: #1976d2;
      cursor: pointer;
    }

    #vue-mount-point .radio-text {
      user-select: none;
    }

    #vue-mount-point .ai-title-container {
      display: flex;
      gap: 21px;
      align-items: center;
      margin-bottom: 8px;
      margin-left: 12px;
    }

    #vue-mount-point .ai-mode-description {
      font-size: 12px;
      color: #999999;
      line-height: 1.4;
      white-space: nowrap;
      margin-top: 2px;
    }

    #vue-mount-point .switch-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.2s;
      position: relative;
      font-size: 14px;
      color: #333333;
    }

    #vue-mount-point .switch-group:hover {
      background: #e3f2fd;
    }

    #vue-mount-point .switch-input {
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
    }

    #vue-mount-point .switch-slider {
      width: 32px;
      height: 16px;
      background: #ccc;
      border-radius: 8px;
      position: relative;
      transition: background 0.3s;
    }

    #vue-mount-point .switch-slider::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    #vue-mount-point .switch-input:checked + .switch-slider {
      background: #1976d2;
    }

    #vue-mount-point .switch-input:checked + .switch-slider::before {
      transform: translateX(16px);
    }



    #vue-mount-point .setting-range-inline::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      border: 2px solid white;
    }

    #vue-mount-point .setting-range-inline::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #1976d2;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }

    #vue-mount-point .setting-range-inline::-webkit-slider-track {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
    }

    #vue-mount-point .setting-range-inline::-moz-range-track {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
      border: none;
    }

    /* TTS语音选项样式 */
    #vue-mount-point .voice-option-group {
      margin-top: 16px;
      margin-bottom: 32px;
    }

    #vue-mount-point .voice-option-row {
      display: flex;
      gap: 30px;
    }

    #vue-mount-point .voice-option-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 40px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      background: white;
      transition: all 0.2s;
      position: relative;
    }

    #vue-mount-point .voice-option-item:hover {
      border-color: #2D85F0;
      background: rgba(45, 133, 240, 0.1);
    }

    #vue-mount-point .voice-option-item input[type="radio"]:checked + .voice-option-text {
      color: #2D85F0;
      font-weight: 600;
    }

    #vue-mount-point .voice-option-item:has(input[type="radio"]:checked) {
      border-color: #2D85F0;
      background: rgba(45, 133, 240, 0.1);
    }

    #vue-mount-point .voice-option-item input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    #vue-mount-point .voice-option-text {
      font-size: 16px;
      color: #333333;
      user-select: none;
      cursor: pointer;
      font-weight: 400;
    }

    /* 语音设置特定样式 */
    #vue-mount-point .range-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }

    #vue-mount-point .range-group:first-of-type {
      margin-top: 0px;
    }

    #vue-mount-point .range-container {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 100%;
    }

    #vue-mount-point .range-label-text {
      font-size: 16px;
      color: #333333;
      font-weight: 600;
      min-width: 48px;
      flex-shrink: 0;
    }

    #vue-mount-point .range-value {
      font-size: 16px;
      color: #1976d2;
      font-weight: 600;
      min-width: 40px;
      text-align: right;
      flex-shrink: 0;
    }

    #vue-mount-point .setting-range-inline {
      flex: 1;
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
      outline: none;
      appearance: none;
      margin: 0;
      box-sizing: border-box;
    }

    #vue-mount-point .settings-footer {
      padding: 20px 24px;
      border-top: 1px solid #e0e0e0;
      background: #f8f9fa;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    #vue-mount-point .btn-primary,
    #vue-mount-point .btn-secondary {
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }

    #vue-mount-point .btn-primary {
      background: #1976d2;
      color: white;
    }

    #vue-mount-point .btn-primary:hover {
      background: #1565c0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
    }

    #vue-mount-point .btn-secondary {
      background: #f5f5f5;
      color: #666;
      border: 1px solid #ddd;
    }

    #vue-mount-point .btn-secondary:hover {
      background: #e8e8e8;
      color: #333;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar {
      width: 6px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }

    #vue-mount-point .settings-content::-webkit-scrollbar-thumb:hover {
      background: #a0a0a0;
    }
  `,k([p({type:Object})],$r.prototype,"state",2),$r=k([R("pv-vue-setting-panel")],$r);var yl=class extends CustomEvent{};function Km(t,e){let r=[];for(let i=0;i<t.length&&t[i]===e[0];i++)r.push(e.shift());return r}function Lu(t){let e=[];for(let r of t){let i=r.match(/^(.*[^.,!?])([.,!?]+)$/);i?(e.push(i[1]),e.push(i[2])):e.push(r)}return e}var Jt=class extends O{constructor(){super(...arguments);this.suggestion="";this.offset="";this.mouseoverIndex=-1}render(){let r=Lu(this.state.lang.segment(this.suggestion)),i=Km(r,Lu(this.state.lang.segment(this.offset)));return v`${i.length>0?v`<span class="ellipsis">… </span>`:""}
    ${r.map((o,n)=>n<i.length?"":v` <pv-button
            ?active="${n<=this.mouseoverIndex}"
            .label="${o}"
            @mouseenter="${()=>{this.mouseoverIndex=n}}"
            @mouseleave="${()=>{this.mouseoverIndex=-1}}"
            @click="${()=>{this.dispatchEvent(new yl("select",{detail:[this.state.lang.join(r.slice(0,n+1)),n-i.length]}))}}"
          ></pv-button>`)}`}};Jt.styles=T`
    :host {
      -ms-overflow-style: none;
      display: block;
    }

    :host::-webkit-scrollbar {
      display: none;
    }

    pv-button {
      margin-right: 0.5rem;
    }

    .ellipsis {
      font-family: 'Roboto Mono', monospace;
      font-size: 5vh;
    }
  `,k([p({type:Object})],Jt.prototype,"state",2),k([p({type:String,reflect:!0})],Jt.prototype,"suggestion",2),k([p({type:String,reflect:!0})],Jt.prototype,"offset",2),k([p({type:Number})],Jt.prototype,"mouseoverIndex",2),Jt=k([R("pv-suggestion-stripe")],Jt);var vt=class extends O{constructor(){super(...arguments);this.value="";this.minRows=2;this.maxRows=4;this.placeholder=""}updateLayout(){if(!(this.hiddenTextArea instanceof HTMLTextAreaElement&&this.textArea instanceof HTMLTextAreaElement))return;let r=.8,i=this.getBoundingClientRect();this.hiddenTextArea.style.lineHeight=`${Math.round(i.height/this.minRows)}px`,this.hiddenTextArea.style.fontSize=`${Math.round(i.height/this.minRows*r)}px`;let o=this.hiddenTextArea.scrollHeight,n=Math.min(this.maxRows,Math.max(this.minRows,Math.floor(o/(i.height/this.minRows))));this.textArea.style.lineHeight=`${Math.round(i.height/n)}px`,this.textArea.style.fontSize=`${Math.round(i.height/n*r)}px`,this.textArea.value=this.value}firstUpdated(){window.addEventListener("resize",()=>{this.updateLayout()}),this.updateLayout()}updated(){this.hiddenTextArea instanceof HTMLTextAreaElement&&(this.hiddenTextArea.value=this.value,this.updateLayout(),this.dispatchEvent(new Event("updated")))}render(){return v`
      <textarea class="hidden"></textarea>
      <textarea
        class="main"
        placeholder="${this.placeholder}"
        @input="${r=>{r.isComposing||(this.value=r.composedPath()[0].value)}}"
        @compositionend="${r=>{this.value=r.composedPath()[0].value}}"
      ></textarea>
    `}};vt.styles=T`
    :host {
      display: block;
      position: relative;
    }

    textarea {
      background: var(--color-surface);
      border-radius: 25px 25px 0 0;
      border: solid 1px var(--color-outline);
      box-sizing: border-box;
      color: var(--color-on-surface);
      font-family: Roboto, 'Noto Sans JP', sans-serif;
      height: 100%;
      width: 100%;
    }

    textarea.hidden {
      opacity: 0;
      pointer-events: none;
      position: absolute;
    }
  `,k([p({type:String})],vt.prototype,"value",2),k([p({type:Number})],vt.prototype,"minRows",2),k([p({type:Number})],vt.prototype,"maxRows",2),k([p({type:String,reflect:!0})],vt.prototype,"placeholder",2),k([M("textarea.hidden")],vt.prototype,"hiddenTextArea",2),k([M("textarea.main")],vt.prototype,"textArea",2),vt=k([R("pv-scalable-textarea")],vt);var Rr={BUTTON_BACKSPACE:{kind:"BUTTON_BACKSPACE"},BUTTON_DELETE:{kind:"BUTTON_DELETE"},CHARACTER:{kind:"CHARACTER"},KEYBOARD:{kind:"KEYBOARD"},SUGGESTED_WORD:{kind:"SUGGESTED_WORD"}},ci=class{constructor(e,r){this.value=e;this.sources=r}},Qn=class t{constructor(){this.history=[new ci("",[])];this.currentIndex=0}static{this.SIZE=250}add(e){this.history=this.history.slice(this.currentIndex),this.history.unshift(e),this.currentIndex=0,this.history=this.history.slice(0,t.SIZE)}canUndo(){return this.currentIndex<this.history.length-1}undo(){this.canUndo()&&this.currentIndex++}lastInput(){return this.history[this.currentIndex]}isLastInputSuggested(){let e=this.lastInput();return e?e.sources.some(r=>r.kind==="SUGGESTED_WORD"||r.kind==="SUGGESTED_SENTENCE"):!1}};var Gm={textUpdate:"text-update"},Dr=class extends O{constructor(){super(...arguments);this.inputHistory=new Qn}get value(){return this.textArea?.value||""}isBlank(){return this.textArea&&this.textArea.value===""}canUndo(){return this.inputHistory.canUndo()}isLastInputSuggested(){return this.inputHistory.isLastInputSuggested()}setPlaceholder(r){this.textArea.placeholder=r}setTextFieldValue(r,i){if(!this.textArea)return;let o=new ci(r,i);this.inputHistory.add(o),this.textArea.value=r,this.textArea.placeholder=""}textUndo(){if(!this.textArea||!this.inputHistory)return;this.inputHistory.undo();let r=this.inputHistory.lastInput();this.textArea.value=r.value,this.textArea.placeholder=""}textDelete(){this.setTextFieldValue("",[Rr.BUTTON_DELETE])}textBackspace(){if(!this.textArea)return;let r=this.value,i=r.length;this.setTextFieldValue(r.substring(0,i-1),[Rr.BUTTON_BACKSPACE])}contentCopy(){this.textArea&&navigator.clipboard.writeText(this.value)}render(){return v`
      <pv-scalable-textarea @updated="${i=>{let o=i.target.value;this.state.text=o;let s=this.inputHistory.lastInput()?.value||"";if(o!==s){let a=new ci(o,[Rr.KEYBOARD]);this.inputHistory.add(a)}this.fireEvent()}}">
      </pv-scalable-textarea>
    `}fireEvent(){this.dispatchEvent(new CustomEvent(Gm.textUpdate,{detail:{callee:this},bubbles:!0,composed:!0}))}};Dr.styles=T`
    pv-scalable-textarea {
      box-sizing: border-box;
      height: 20svh;
    }
  `,k([p({type:Object})],Dr.prototype,"state",2),k([M("pv-scalable-textarea")],Dr.prototype,"textArea",2),Dr=k([R("pv-textarea-wrapper"),cr()],Dr);var Vu="en",Mu=["ja"];var xl={};Hu(xl,{templates:()=>Ym});var Ym={s09085b07b5a0de5f:"AI\u8A2D\u5B9A",s1369ddcc1b221411:"\u58F0\u306E\u9AD8\u3055",s19e84b851836664f:"\u9AD8\u901F",s3ceed4d952789f32:"\u8CE2\u3044",s54f4fb35b3a04e2a:"\u82F1\u8A9E (\u4E00\u884C\u30AD\u30FC\u30DC\u30FC\u30C9)",s59e3e7ab292d7c11:"\u6587\u306E\u884C\u9593\u3092\u8A70\u3081\u308B",s5c9bb69e2a31ad59:"VOICE",s612301cee43af417:"\u52B9\u679C\u97F3\u3092\u518D\u751F",s6e237556e679b5b8:"\u30C6\u30AD\u30B9\u30C8\u8AAD\u307F\u4E0A\u3052\u97F3\u58F0",s91b073374c468b93:"\u5229\u7528\u8005\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",s98aa8b9481114f33:"\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3",sb061ff5a347a296e:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",sb46606bea7e65177:"\u8AAD\u3080\u901F\u3055",sb6bc71df20a5484d:"\u30AD\u30FC\u3092\u5DE6\u7AEF\u304B\u3089\u5C55\u958B\u3059\u308B",sc3ac225273c8316b:"\u4E00\u822C",se127d1b851b56845:"\u521D\u671F\u30D5\u30EC\u30FC\u30BA",sefcf950b3cc4fc3b:"\u8A00\u8A9E\u5207\u66FF\u3048",s7e9f6245f158e5a1:"Chinese (single-row keyboard)"};var Pu=T`
  /* Update: 2024-07-30T13:00:00Z - Complete UI Layout Update with fixed overflow */
  :host {
    display: flex;
    width: 1920px; /* 全局宽度 */
    height: 1080px; /* 全局高度 */
    overflow: hidden; /* 防止内容溢出导致滚动条 */
  }

  .container {
    box-sizing: border-box;
    display: flex;
    padding: 10px; /* 容器内边距 */
    width: 100%;
    height: 100%;
    gap: 5px; /* 减小中间与右侧面板之间的间距 */
  }

  .left-panel,
  .right-panel {
    display: flex;
    flex-direction: column;
    padding: 25px; /* 面板内边距 */
    background-color: var(--color-surface, white); /* 可选背景色 */
    border-radius: 20px; /* 面板圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 面板阴影 */
  }

  .left-panel {
    width: 597px; /* 左侧面板宽度 */
    align-items: center; /* 内部元素居中对齐 */
    justify-content: flex-start;
    /*gap: 20px;  九宫格与候选字/词的间距，这里设置的是子元素的间距，会被下面的margin-top覆盖一部分 */
  }

  .center-panel {
    flex: 1; /* 占据剩余空间 */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 联想句子与输入框上下对齐 */
    padding: 20px; /* 中间面板内边距 */
    background-color: var(--color-surface, white);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .right-panel {
    width: 16px; /* 调整宽度使其整体左移 */
    align-items: center;
    justify-content: flex-start;
    /*padding: 10px;  减小内边距 */
    /*gap: 10px;  功能按钮间距 */
  }

  pv-functions-bar .functions-bar {
    gap: 40px;
    background: transparent;
  }

  pv-functions-bar button {
    width: 92px;
    height: 92px;
    border-radius: 30px;
    border: 2px solid #c6e2ff;
  }

  .keypad {
    width: 597px; /* 九宫格总宽度 */
    margin-inline: auto; /* 居中显示 */
    margin-bottom: 22.5px; /* 九宫格与下方元素的间距 */
  }

  /* 九宫格中的单个按钮样式 */
  pv-character-input div.key-group div.key-button {
    width: 165px; /* 按钮宽度 */
    height: 148px; /* 按钮高度 */
    border-radius: 30px; /* 按钮圆角 */
    margin-bottom: 20px; /* 按钮之间垂直间距 */
  }

  /* 候选字/词网格样式 */
  ul.word-suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 165px); /* 3列，每列按钮宽度165px */
    grid-template-rows: repeat(4, 1fr); /* 4行，让按钮自己撑开高度 */
    gap: 11px 21px; /* 垂直间距11px，水平间距21px */
    width: 597px; /* 精确计算网格总宽度 */
    max-width: 100%; /* 防止超出父容器 */
    min-height: calc(4 * 82px + 3 * 11px); /* 确保有足够高度显示4行 */
    height: 414px; /* 整个联想字词区域的高度 */
    margin-inline: auto; /* 居中显示 */
    border-radius: 12px; /* 候选字/词区域圆角 */
  }

  .candidate-btn,
  .candidate-placeholder {
    height: 82px; /* 按钮高度 */
    width: 100%; /* 占满网格单元格宽度 */
    border-radius: 30px; /* 与九宫格按钮圆角一致 */
    font-size: 48px; /* 字体大小 */
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box; /* 包含padding和border在内 */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 隐藏溢出文字 */
    text-overflow: ellipsis; /* 显示省略号 */
  }

  .candidate-btn {
    background: #fff;
    border: 2px solid #c6e2ff;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
  }
  .candidate-btn:active {
    background: #e3f2fd;
  }

  .candidate-placeholder {
    background: #f5f5f5; /* 灰色背景 */
    border: 1px dashed #bbb; /* 虚线边框 */
    border-radius: 12px;
  }

  /* 删除按钮样式 */
  .key-group pv-button.character.delete {
    width: 344px; /* 删除按钮宽度 */
    height: 103px; /* 删除按钮高度 */
  }

  /* 联想句子区样式 */
  .suggestions {
    flex: 1; /* 占据中间面板上方大部分空间 */
    position: relative;
    overflow-y: auto; /* 允许滚动 */
    width: 100%;
    margin-bottom: 28px; /* 与输入框的间距 */
  }

  ul.sentence-suggestions {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; /* 竖直排列 */
    gap: 17px; /* 句子行间距 */
  }

  ul.sentence-suggestions li {
    height: 96px; /* 句子行高 */
    min-height: 96px; /* 确保最小高度 */
    border-radius: 12px; /* 句子圆角 */
    font-size: 48px; /* 字体大小 */
    display: flex;
    align-items: center;
    padding: 20px; /* 内边距 */
    box-sizing: border-box;
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 隐藏溢出 */
    text-overflow: ellipsis; /* 显示省略号 */
    background: #e0f2f7; /* 句子背景色 */
    border: 1px solid #a7d9f7; /* 句子边框 */
    cursor: pointer;
  }
  
  /* 确保 pv-suggestion-stripe 及其内部元素正确显示和截断 */
  ul.sentence-suggestions li pv-suggestion-stripe {
    display: flex; /* 让pv-suggestion-stripe内部的pv-button水平排列 */
    overflow: hidden; /* 隐藏pv-suggestion-stripe内部的溢出内容 */
    text-overflow: ellipsis; /* 显示省略号 */
    white-space: nowrap; /* 不换行 */
    width: 100%; /* 填充li的宽度 */
    height: 100%; /* 填充li的高度 */
    align-items: center; /* 垂直居中 */
  }
  
  ul.sentence-suggestions li pv-suggestion-stripe pv-button {
    margin-right: 5px; /* pv-button之间的间距，根据需要调整 */
    flex-shrink: 0; /* 防止pv-button被压缩 */
    overflow: hidden; /* 确保pv-button内部文本也能截断 */
    text-overflow: ellipsis; /* 确保pv-button内部文本也能截断 */
    white-space: nowrap; /* 确保pv-button内部文本也能截断 */
  }

  .sentence-placeholder {
    background: #f5f5f5;
    border: 1px dashed #bbb;
  }

  /* 输入框区域样式 */
  .input-area {
    width: 100%;
    height: 307px; /* 输入框高度 */
    max-width: 1130px; /* 输入框最大宽度 */
    align-self: center; /* 在center-panel中居中 */
    position: relative;
  }

  pv-textarea-wrapper .textarea-container {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .bottom-buttons {
    position: absolute;
    bottom: 25px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clear-btn, .history-btn {
    border: 2px solid #c6e2ff;
    border-radius: 20px;
    background: white;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold; /* 默认加粗 */
  }

  .clear-btn {
    width: 228px;
    height: 75px;
  }

  .history-btn {
    width: 193px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: normal; /* 覆盖默认加粗 */
  }

  /* 其他现有样式保持不变或根据需要调整 */
  .main textarea {
    width: 100%;
    height: 100%; /* 确保textarea占满input-area */
    box-sizing: border-box;
  }

  /* 独立的功能按钮样式 */
  .function-buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .function-buttons button {
    border: 2px solid #c6e2ff;
    /* border-radius: 20px; */
    background: white;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    /* box-shadow: 0 2px 8px rgba(0,0,0,0.1); 添加阴影使按钮更突出 */
  }

  .function-buttons button:first-child {
    width: 565px;
    height: 65px;
    border-radius: 0 0 0 25px;
    border-right: none;
  }

  .function-buttons button:last-child {
    width: 565px;
    height: 65px;
    border-radius: 0 0 25px 0;
    border-left: none;
  }

  .function-buttons button:hover {
    background: #f0f8ff;
    border-color: #4a90e2;
  }

  .function-buttons button:active {
    background: #e6f3ff;
    transform: translateY(1px);
  }
  /* 功能按钮图标样式 */
  .fb-icon {
    position: relative;
    top: 4px;
  }

  .loader {
    align-items: center;
    background: color-mix(
      in srgb,
      var(--color-background) 80%,
      transparent 20%
    );
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 0.3s ease;
    width: 100%;
  }

  .loader.loading {
    opacity: 1;
  }

  /* 针对 pv-textarea-wrapper 内部的 pv-scalable-textarea */
  pv-textarea-wrapper pv-scalable-textarea {
      height: 100%;
      width: 100%;
      border-radius: 25px; /* 输入框圆角 */
      border: 1px solid #ccc; /* 输入框边框 */
      padding: 10px;
      box-sizing: border-box;
  }

  /* 移除旧的列表项样式，因为已改为 grid/flex 控制 */
  /* ul.word-suggestions li, */ /* 已经由 .candidate-btn 和 .candidate-placeholder 控制 */
  /* ul.sentence-suggestions li { } */ /* 现在由上面的 ul.sentence-suggestions li 精确控制 */

  @media screen and (min-height: 30rem) {
    /* ul.word-suggestions li { margin: 0.5rem 0.5rem 0.5rem 0; } */
    ul.sentence-suggestions li {
      margin: 0; /* 调整为0 */
    }
    ul.sentence-suggestions li.tight {
      margin: 0; /* 调整为0 */
    }
  }
  @media screen and (min-height: 45rem) {
    /* ul.word-suggestions li { margin: 1rem 1rem 1rem 0; } */
  }

  /* 保持其他无关样式 */
  #form-id { height: 380px; width: 500px; }
  .form-section { margin: 1rem 0; }
  .stats {
    background-color: rgba(1, 1, 1, 0.0);
    border: solid rgba(96, 96, 96, 0.5);
    bottom: 4px;
    color: rgba(96, 96, 96, 0.5);
    cursor: pointer;
    padding: 4px;
    position: absolute;
    right: 4px;
  }
  @media (prefers-color-scheme: dark) {
    .stats {
      background-color: rgba(1, 1, 1, 0.0);
      border: solid rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .language-name {
    background: var(--color-on-background); border-radius: 1rem;
    color: var(--color-background); display: none; font-size: 2rem;
    left: 50%; padding: 1rem; pointer-events: none; position: fixed;
    opacity: 0.8; top: 50%; transform: translate(-50%, -50%);
  }
  .language-name[active] { display: block; }
  .conversation-history-container {
    background: var(--color-surface); border-radius: 0.5rem;
    max-width: 30vw; overflow: scroll; padding: 0.5rem; width: 360px;
  }
`;var es=class{constructor(e,r){this.domainHead=e,this.defaultValues=r}read(e){let r=`${this.domainHead}.${e}`,i=localStorage.getItem(r);if(i===null)return this.defaultValues[e];try{let{value:o}=JSON.parse(i);return o}catch{return this.defaultValues[e]}}write(e,r){let i=`${this.domainHead}.${e}`,o=JSON.stringify({value:r});localStorage.setItem(i,o)}};var ao=class{constructor(e=null){this.langSignal=tr(dr.chineseWithSingleRowKeyboard);this.checkedLanguagesSignal=tr([]);this.keyboardSignal=tr(qe`pv-alphanumeric-single-row-keyboard`);this.textSignal=tr("");this.aiConfigInternal="smart";this.expandAtOriginSignal=tr(!1);this.sentenceSmallMarginSignal=tr(!1);this.personaInternal="";this.initialPhrasesSignal=tr([]);this.enableEarconsInternal=!1;this.features={languages:[],sentenceMacroId:null,wordMacroId:null};this.storage=e??new es("com.google.pv",Wl),this.loadState();let r=["-\u6211","-\u4F60","-\u4ED6","-\u5979","-\u5B83","-\u662F","-\u5403","-\u7761","-\u5FEB","-\u7D2F","-\u75BC","-\u9AD8"];this.initialPhrasesSignal.set(r)}get lang(){return this.langSignal.get()}set lang(e){this.langSignal.set(e)}get checkedLanguages(){return this.checkedLanguagesSignal.get()}set checkedLanguages(e){this.storage.write("checkedLanguages",e),this.checkedLanguagesSignal.set(e)}get keyboard(){return this.keyboardSignal.get()}set keyboard(e){this.keyboardSignal.set(e)}get text(){return this.textSignal.get()}set text(e){this.textSignal.set(e)}get aiConfig(){return this.aiConfigInternal}set aiConfig(e){this.storage.write("aiConfig",e),this.aiConfigInternal=e}get model(){return this.lang.aiConfigs[this.aiConfig]?.model}get sentenceMacroId(){return this.lang.aiConfigs[this.aiConfig]?.sentence}get wordMacroId(){return this.lang.aiConfigs[this.aiConfig]?.word}get expandAtOrigin(){return this.expandAtOriginSignal.get()}set expandAtOrigin(e){this.storage.write("expandAtOrigin",e),this.expandAtOriginSignal.set(e)}get sentenceSmallMargin(){return this.sentenceSmallMarginSignal.get()}set sentenceSmallMargin(e){this.storage.write("sentenceSmallMargin",e),this.sentenceSmallMarginSignal.set(e)}get persona(){return this.personaInternal}set persona(e){this.storage.write("persona",e),this.personaInternal=e}get initialPhrases(){return this.initialPhrasesSignal.get()}set initialPhrases(e){this.storage.write("initialPhrases",e),this.initialPhrasesSignal.set(e)}get voiceSpeakingRate(){return this.voiceSpeakingRateInternal}set voiceSpeakingRate(e){this.voiceSpeakingRateInternal=e,this.storage.write("voiceSpeakingRate",e)}get voicePitch(){return this.voicePitchInternal}set voicePitch(e){this.voicePitchInternal=e,this.storage.write("voicePitch",e)}get voiceName(){return this.voiceNameInternal}set voiceName(e){this.voiceNameInternal=e,this.storage.write("ttsVoice",e)}get enableEarcons(){return this.enableEarconsInternal}set enableEarcons(e){this.storage.write("enableEarcons",e),this.enableEarconsInternal=e}loadState(){this.aiConfigInternal=this.storage.read("aiConfig"),this.checkedLanguages=this.storage.read("checkedLanguages"),this.enableEarconsInternal=this.storage.read("enableEarcons"),this.expandAtOrigin=this.storage.read("expandAtOrigin"),this.initialPhrases=this.storage.read("initialPhrases"),this.personaInternal=this.storage.read("persona"),this.sentenceSmallMargin=this.storage.read("sentenceSmallMargin"),this.voiceNameInternal=this.storage.read("ttsVoice"),this.voicePitchInternal=this.storage.read("voicePitch"),this.voiceSpeakingRateInternal=this.storage.read("voiceSpeakingRate")}setStorage(e){this.storage.domainHead!==e.domainHead&&(this.storage=e,this.loadState())}};var ts={SENTENCE_MACRO_ID:"sentenceMacroId",WORD_MACRO_ID:"wordMacroId"},{setLocale:Xm}=sd({sourceLocale:Vu,targetLocales:Mu,loadLocale:async t=>new Promise(e=>{switch(t){case"ja":e(xl);break;default:e({})}})});function Jm(t){if(t.length===0)return"";let e=t.map(i=>i.length),r=Math.min(...e);for(let i=0;i<r;i++)if(new Set(t.map(o=>o[i])).size!==1)return t[0].slice(0,i);return t[e.indexOf(r)]}function lo(t,e){let r=t.replaceAll("\u309B","\u3099").replaceAll("\u309C","\u309A").normalize("NFKC").replaceAll("\u3099","\u309B").replaceAll("\u309A","\u309C").replace(/^\s+/,"").replace(/\s\s+/," ");return e&&(r=r.replace(/ ([,.?!])$/,"$1")),r}function at(){return function(t,e,r){let i=r.value;return r.value=function(...o){return this.state.enableEarcons&&Yr.playClick(),i.apply(this,o)},r}}var se=class extends Mt(O){constructor(r=null,i=null){super();this.suggestions=[];this.words=[];this.isLoading=!1;this.locale="cn";this.sentenceMacroId=null;this.languageLabels="chineseWithSingleRowKeyboard,englishWithSingleRowKeyboard";this.languageIndex=0;this.keyboardIndex=0;this.inFlightRequests=0;this.prevCallsMs=[];this.MAX_SENTENCE_SUGGESTIONS=5;this.stateInternal=r??new ao,this.apiClient=i??new So}get state(){return this.stateInternal}connectedCallback(){super.connectedCallback(),this.stateInternal=new ao,Xm(this.locale?this.locale:"cn"),this.stateInternal.features={languages:this.languageLabels.split(","),sentenceMacroId:this.sentenceMacroId,wordMacroId:null},this.stateInternal.checkedLanguages.length===0&&(this.stateInternal.checkedLanguages=this.stateInternal.features.languages),this.stateInternal.lang=dr[this.stateInternal.checkedLanguages[0]],this.stateInternal.keyboard=this.stateInternal.lang.keyboards[this.keyboardIndex];let r=new URLSearchParams(window.location.search);r.has(ts.SENTENCE_MACRO_ID)&&(this.stateInternal.features.sentenceMacroId=r.get(ts.SENTENCE_MACRO_ID)),r.has(ts.WORD_MACRO_ID)&&(this.stateInternal.features.wordMacroId=r.get(ts.WORD_MACRO_ID)),this.stateInternal.initialPhrases.some(i=>i)||(this.stateInternal.initialPhrases=this.stateInternal.lang.initialPhrases)}isBlank(){return this.textField&&this.textField.value===""}updateSentences(r){this.stateInternal.sentenceSmallMargin||(r=r.slice(0,ql)),this.suggestions=r.map(i=>lo(i))}updateWords(r){this.words=r.map(i=>lo(i))}delayBeforeFetchMs(){return Math.min(150*(this.prevCallsMs.length-1),300)}async updateSuggestions(){window.clearTimeout(this.timeoutId);let r=Date.now();if(this.prevCallsMs.push(r),this.prevCallsMs=this.prevCallsMs.filter(i=>i>r-1e3),this.isBlank()){this.apiClient.abortFetch(),this.isLoading=!1,this.suggestions=[],this.words=[];return}this.timeoutId=window.setTimeout(async()=>{this.inFlightRequests++,this.isLoading=!0;let i=await this.apiClient.fetchSuggestions(this.textField.value??"",this.stateInternal.lang.promptName,this.stateInternal.model,{sentenceMacroId:this.state.features.sentenceMacroId??this.stateInternal.sentenceMacroId,wordMacroId:this.state.features.wordMacroId??this.stateInternal.wordMacroId,persona:this.stateInternal.persona});if(this.inFlightRequests--,this.inFlightRequests===0&&(this.isLoading=!1),!i)return;let[o,n]=i;this.updateSentences(o),this.updateWords(n),this.requestUpdate()},this.delayBeforeFetchMs())}static composeUpdatedSentence(r,i){if(i===ba){let o=r.slice(-1)[0];return[...En.keys()].includes(o)?r.slice(0,-1)+En.get(o):[...ya.keys()].includes(o)?r.slice(0,-1)+ya.get(o):r}return r+i}onCharacterSelect(r){if(!this.textField)return;if(r.detail==="backspace"){this.textField.textBackspace();return}let i=lo(se.composeUpdatedSentence(this.textField.value,r.detail),this.textField.isLastInputSuggested());this.textField.setTextFieldValue(i,[Rr.CHARACTER])}onSuggestedWordClick(r){let i=this.textField?.value??"",o=this.stateInternal.lang.appendWord(i,r),n=lo(o);this.textField?.setTextFieldValue(n,[Rr.SUGGESTED_WORD])}onSettingClick(){this.settingPanel.show()}onUndoClick(){this.textField?.textUndo()}onBackspaceClick(){this.textField?.textBackspace()}onDeleteClick(){this.textField?.textDelete()}switchLanguage(){this.state.lang=dr[this.state.checkedLanguages[this.languageIndex]],this.keyboardIndex=0,this.state.keyboard=this.state.lang.keyboards[this.keyboardIndex],this.updateSuggestions(),this.languageName&&(this.languageName.setAttribute("active","true"),setTimeout(()=>{this.languageName?.removeAttribute("active")},750))}onLanguageChangeClick(){this.languageIndex=(this.languageIndex+1)%this.state.checkedLanguages.length,this.switchLanguage()}onKeyboardChangeClick(){this.keyboardIndex=(this.keyboardIndex+1)%this.state.lang.keyboards.length,this.state.keyboard=this.state.lang.keyboards[this.keyboardIndex],this.updateSuggestions()}onContentCopyClick(){this.textField?.contentCopy()}onKeypadHandlerClick(){}onOkClick(r){if(r.detail&&typeof r.detail=="object"){let o=r.detail;o.aiConfig!==void 0&&(this.state.aiConfig=o.aiConfig),o.expandAtOrigin!==void 0&&(this.state.expandAtOrigin=o.expandAtOrigin),o.sentenceSmallMargin!==void 0&&(this.state.sentenceSmallMargin=o.sentenceSmallMargin),o.enableEarcons!==void 0&&(this.state.enableEarcons=o.enableEarcons),o.persona!==void 0&&(this.state.persona=o.persona),o.initialPhrases!==void 0&&(this.state.initialPhrases=[...o.initialPhrases]),o.voiceName!==void 0&&(this.state.voiceName=o.voiceName),o.voiceSpeakingRate!==void 0&&(this.state.voiceSpeakingRate=(o.voiceSpeakingRate-50)/5),o.voicePitch!==void 0&&(this.state.voicePitch=(o.voicePitch-50)/5)}this.state.checkedLanguages.findIndex(o=>dr[o]===this.state.lang)===-1&&(this.languageIndex=0,this.switchLanguage())}onSuggestionSelect(r){let[i,o]=r.detail;this.textField&&this.textField.setTextFieldValue(i,[{kind:"SUGGESTED_SENTENCE",index:o}])}renderSuggestions(){return this.state.initialPhrases.length>0?v`
        ${this.state.initialPhrases.map(i=>v`
          <li class="sentence-item">
            <pv-suggestion-stripe 
              .state=${this.stateInternal}
              .suggestion=${i}
              @select=${this.onSuggestionSelect}
            ></pv-suggestion-stripe>
          </li>
        `)}
        ${this.renderPlaceholders(this.state.initialPhrases.length,this.MAX_SENTENCE_SUGGESTIONS-this.state.initialPhrases.length,"sentence-placeholder")}
      `:v`
        ${this.renderPlaceholders(0,this.MAX_SENTENCE_SUGGESTIONS,"sentence-placeholder")}
      `}renderPlaceholders(r,i,o){let n=[];for(let s=0;s<i;s++)n.push(v`<li class="${o}"></li>`);return n}handleClearButtonClick(){if(this.textField){let r=this.textField.value;r&&r.trim().length>0&&this.saveToHistory(r.trim()),this.textField.textDelete()}}handleHistoryButtonClick(){let r=this.getInputHistory();if(r.length===0){console.log("\u6682\u65E0\u5386\u53F2\u8BB0\u5F55");return}this.showHistoryDialog(r)}getInputHistory(){try{let r=localStorage.getItem("input_history");return r?JSON.parse(r):[]}catch(r){return console.error("\u8BFB\u53D6\u5386\u53F2\u8BB0\u5F55\u5931\u8D25:",r),[]}}saveToHistory(r){if(!(!r||r.trim().length===0))try{let i=this.getInputHistory(),o=r.trim(),n=i.indexOf(o);n!==-1&&i.splice(n,1),i.unshift(o),i.length>20&&i.splice(20),localStorage.setItem("input_history",JSON.stringify(i))}catch(i){console.error("\u4FDD\u5B58\u5386\u53F2\u8BB0\u5F55\u5931\u8D25:",i)}}showHistoryDialog(r){let i=document.createElement("div");i.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    `;let o=document.createElement("div");o.style.cssText=`
      background: white;
      border-radius: 12px;
      padding: 20px;
      max-width: 600px;
      max-height: 400px;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;let n=document.createElement("h3");n.textContent="\u5386\u53F2\u8BB0\u5F55",n.style.cssText="margin-top: 0; margin-bottom: 15px; color: #333;",o.appendChild(n);let s=document.createElement("div");s.style.cssText="margin-bottom: 15px;",r.forEach((l,h)=>{let u=document.createElement("div");u.style.cssText=`
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: background 0.2s;
        word-break: break-all;
      `,u.textContent=l,u.addEventListener("mouseenter",()=>{u.style.background="#f0f8ff"}),u.addEventListener("mouseleave",()=>{u.style.background="white"}),u.addEventListener("click",()=>{this.textField&&(this.textField.setTextFieldValue(l,[]),this.updateSuggestions()),document.body.removeChild(i)}),s.appendChild(u)}),o.appendChild(s);let a=document.createElement("button");a.textContent="\u5173\u95ED",a.style.cssText=`
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 8px 16px;
      cursor: pointer;
      float: right;
    `,a.addEventListener("click",()=>{document.body.removeChild(i)}),o.appendChild(a),i.appendChild(o),document.body.appendChild(i),i.addEventListener("click",l=>{l.target===i&&document.body.removeChild(i)})}render(){let r=this.isBlank()?this.stateInternal.initialPhrases:this.words,i=12,o=[...r];for(;o.length<i;)o.push("");let n=o.map(u=>u?v`
        <button
          class="candidate-btn"
          @click="${()=>this.onSuggestedWordClick(u)}"
        >
          ${u}
        </button>
      `:v`<div class="candidate-placeholder"></div>`),s=o.some(u=>u&&u.trim()!==""),a=4,l=[];for(let u=0;u<Math.min(this.suggestions.length,a);u++)l.push(this.suggestions[u]);for(;l.length<a;)l.push("");let h=l.map(u=>{if(!u)return v`<li><div class="sentence-placeholder"></div></li>`;let f=lo(this.textField?.value??""),b=Jm([u,f]);return v` <li
        class="${this.stateInternal.sentenceSmallMargin?"tight":""}"
      >
        <pv-suggestion-stripe
          .state=${this.stateInternal}
          .offset="${b}"
          .suggestion="${u}"
          @select="${this.onSuggestionSelect}"
        ></pv-suggestion-stripe>
      </li>`});return v`
      <div class="container">
        <div class="left-panel">
          <div class="keypad">
            <pv-character-input
              .state=${this.stateInternal}
              @character-select=${this.onCharacterSelect}
              @keypad-handler-click=${this.onKeypadHandlerClick}
            ></pv-character-input>
          </div>
          <ul class="word-suggestions">
            ${n}
          </ul>
        </div>
        <div class="center-panel">
          <div class="suggestions">
            <ul class="sentence-suggestions">
              ${h}
            </ul>
            <div class="loader ${this.isLoading?"loading":""}">
              <md-circular-progress indeterminate></md-circular-progress>
            </div>
          </div>
          <div class="input-area">
            <pv-textarea-wrapper
              .state=${this.stateInternal}
              @text-update=${()=>{this.updateSuggestions()}}
            ></pv-textarea-wrapper>
            <!-- 添加两个功能，清除与历史记录 -->
            <div class="function-buttons">
              <button @click=${this.handleClearButtonClick}>
              <md-icon class="fb-icon">delete</md-icon>
              清除
              </button>
              <button @click=${this.handleHistoryButtonClick}>
              <md-icon class="fb-icon">history</md-icon>
              历史记录
              </button>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <pv-functions-bar
            .state=${this.stateInternal}
            @undo-click=${this.onUndoClick}
            @backspace-click=${this.onBackspaceClick}
            @delete-click=${this.onDeleteClick}
            @language-change-click=${this.onLanguageChangeClick}
            @keyboard-change-click=${this.onKeyboardChangeClick}
            @content-copy-click=${this.onContentCopyClick}
            @setting-click=${this.onSettingClick}
          ></pv-functions-bar>
        </div>
      </div>

      <pv-vue-setting-panel
        .state=${this.stateInternal}
        @ok-click=${this.onOkClick}
      ></pv-vue-setting-panel>
    `}firstUpdated(){this.state.loadState()}};se.styles=Pu,k([p({type:Array})],se.prototype,"suggestions",2),k([p({type:Array})],se.prototype,"words",2),k([p({type:Boolean})],se.prototype,"isLoading",2),k([M("pv-textarea-wrapper")],se.prototype,"textField",2),k([M("pv-functions-bar")],se.prototype,"functionsBar",2),k([M("pv-vue-setting-panel")],se.prototype,"settingPanel",2),k([p({type:String,attribute:"feature-locale"})],se.prototype,"locale",2),k([p({type:String,attribute:"feature-sentence-macro-id"})],se.prototype,"sentenceMacroId",2),k([p({type:String,attribute:"feature-languages"})],se.prototype,"languageLabels",2),k([M(".language-name")],se.prototype,"languageName",2),k([at()],se.prototype,"onCharacterSelect",1),k([at()],se.prototype,"onSuggestedWordClick",1),k([at()],se.prototype,"onSettingClick",1),k([at()],se.prototype,"onUndoClick",1),k([at()],se.prototype,"onBackspaceClick",1),k([at()],se.prototype,"onDeleteClick",1),k([at()],se.prototype,"onLanguageChangeClick",1),k([at()],se.prototype,"onKeyboardChangeClick",1),k([at()],se.prototype,"onContentCopyClick",1),k([at()],se.prototype,"onKeypadHandlerClick",1),k([at()],se.prototype,"onSuggestionSelect",1),k([at()],se.prototype,"handleClearButtonClick",1),k([at()],se.prototype,"handleHistoryButtonClick",1),se=k([R("pv-app"),cr()],se);})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/aria/aria.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/delegate.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/circular-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/internal/circular-progress-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/progress/circular-progress.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

signal-polyfill/dist/index.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
  (**
   * @license
   * Copyright 2024 Bloomberg Finance L.P.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@lit-labs/signals/lib/signal-watcher.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/watch.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/lib/html-tag.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/signals/index.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/icon/internal/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/internal/icon-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/attachable-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/md-focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/form-submitter.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/is-rtl.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/internal/icon-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/internal/standard-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/iconbutton/icon-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/form-label-activation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/redispatch-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/constraint-validation.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/form-associated.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/checkbox-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/checkbox.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menuitem/menu-item-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/internal/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/internal/item-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/item/item.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/menuItemController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/selectOptionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/selectoption/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/select-option.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/button.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/text-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/text-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/text-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/events/dispatch-hooks.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/internal/switch.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/internal/switch-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/switch/switch.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/focusable.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/tab.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/primary-tab.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/primary-tab-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/tab-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/primary-tab.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/divider/internal/divider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/divider/internal/divider-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/divider/divider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/tabs.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/internal/tabs-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/tabs/tabs.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/filled-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/filled-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/filled-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/filled-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/controller/string-converter.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/on-report-validity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/text-field-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/filled-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/textfield/filled-text-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/internal/outlined-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/field/outlined-field.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-navigation-helpers.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/list/internal/list-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/surfacePositionController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/controllers/typeaheadController.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/internal/menu-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/menu/menu.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/select-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/shared.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/outlined-select-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/internal/shared-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/select/outlined-select.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/animations.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/dialog.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/internal/dialog-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/dialog/dialog.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/internal/forced-colors-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/slider/internal/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/internal/slider-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/slider/slider.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@lit/localize/internal/locale-status-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/str-tag.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/types.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/default-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-controller.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/localized-decorator.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/deferred.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/fnv1a64.js:
  (**
   * @license
   * Copyright 2014 Travis Webb
   * SPDX-License-Identifier: MIT
   *)

@lit/localize/internal/id-generation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/internal/runtime-msg.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/runtime.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/init/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/localize/lit-localize.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
