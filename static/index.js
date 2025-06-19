"use strict";(()=>{var xo=Object.defineProperty;var pc=Object.getOwnPropertyDescriptor;var fc=(e,t)=>{for(var r in t)xo(e,r,{get:t[r],enumerable:!0})};var E=(e,t,r,n)=>{for(var s=n>1?void 0:n?pc(t,r):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(n?o(t,r,s):o(s))||s);return n&&s&&xo(t,r,s),s};function H(e,t,r,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}var L=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var pn=globalThis,fn=pn.ShadowRoot&&(pn.ShadyCSS===void 0||pn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Is=Symbol(),wo=new WeakMap,vr=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Is)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(fn&&t===void 0){let n=r!==void 0&&r.length===1;n&&(t=wo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&wo.set(r,t))}return t}toString(){return this.cssText}},No=e=>new vr(typeof e=="string"?e:e+"",void 0,Is),F=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new vr(r,e,Is)},So=(e,t)=>{if(fn)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let n=document.createElement("style"),s=pn.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)}},Vs=fn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let n of t.cssRules)r+=n.cssText;return No(r)})(e):e;var{is:hc,defineProperty:gc,getOwnPropertyDescriptor:mc,getOwnPropertyNames:vc,getOwnPropertySymbols:yc,getPrototypeOf:bc}=Object,hn=globalThis,Co=hn.trustedTypes,_c=Co?Co.emptyScript:"",Ec=hn.reactiveElementPolyfillSupport,yr=(e,t)=>e,br={toAttribute(e,t){switch(t){case Boolean:e=e?_c:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},gn=(e,t)=>!hc(e,t),Oo={attribute:!0,type:String,converter:br,reflect:!1,useDefault:!1,hasChanged:gn};Symbol.metadata??=Symbol("metadata"),hn.litPropertyMetadata??=new WeakMap;var Ze=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Oo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(t,n,r);s!==void 0&&gc(this.prototype,t,s)}}static getPropertyDescriptor(t,r,n){let{get:s,set:i}=mc(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){let a=s?.call(this);i?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oo}static _$Ei(){if(this.hasOwnProperty(yr("elementProperties")))return;let t=bc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yr("properties"))){let r=this.properties,n=[...vc(r),...yc(r)];for(let s of n)this.createProperty(s,r[s])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[r,n]of this.elementProperties){let s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let s of n)r.unshift(Vs(s))}else t!==void 0&&r.push(Vs(t));return r}static _$Eu(t,r){let n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return So(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){let n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:br).toAttribute(r,n.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){let n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:br;this._$Em=s,this[s]=o.fromAttribute(r,i.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){let s=this.constructor,i=this[t];if(n??=s.getPropertyOptions(t),!((n.hasChanged??gn)(i,r)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,i]of n){let{wrapped:o}=i,a=this[s];o!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[yr("elementProperties")]=new Map,Ze[yr("finalized")]=new Map,Ec?.({ReactiveElement:Ze}),(hn.reactiveElementVersions??=[]).push("2.1.0");var xc={attribute:!0,type:String,converter:br,reflect:!1,hasChanged:gn},wc=(e=xc,t,r)=>{let{kind:n,metadata:s}=r,i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){let{name:o}=r;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){let{name:o}=r;return function(a){let l=this[o];t.call(this,a),this.requestUpdate(o,l,e)}}throw Error("Unsupported decorator location: "+n)};function O(e){return(t,r)=>typeof r=="object"?wc(e,t,r):((n,s,i)=>{let o=s.hasOwnProperty(i);return s.constructor.createProperty(i,n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}function _r(e){return O({...e,state:!0,attribute:!1})}var ft=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function ce(e,t){return(r,n,s)=>{let i=o=>o.renderRoot?.querySelector(e)??null;if(t){let{get:o,set:a}=typeof n=="object"?r:s??(()=>{let l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return ft(r,n,{get(){let l=o.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return ft(r,n,{get(){return i(this)}})}}var Nc;function zt(e){return(t,r)=>ft(t,r,{get(){return(this.renderRoot??(Nc??=document.createDocumentFragment())).querySelectorAll(e)}})}var Ps=globalThis,mn=Ps.trustedTypes,To=mn?mn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ls="$lit$",Qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Us="?"+Qe,Sc=`<${Us}>`,Ot=document,xr=()=>Ot.createComment(""),wr=e=>e===null||typeof e!="object"&&typeof e!="function",Hs=Array.isArray,Io=e=>Hs(e)||typeof e?.[Symbol.iterator]=="function",Ms=`[ 	
\f\r]`,Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,ko=/>/g,St=RegExp(`>|${Ms}(?:([^\\s"'>=/]+)(${Ms}*=${Ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$o=/'/g,Do=/"/g,Vo=/^(?:script|style|textarea|title)$/i,Fs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=Fs(1),xn=Fs(2),Mo=Fs(3),et=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Ro=new WeakMap,Ct=Ot.createTreeWalker(Ot,129);function Po(e,t){if(!Hs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return To!==void 0?To.createHTML(t):t}var Lo=(e,t)=>{let r=e.length-1,n=[],s,i=t===2?"<svg>":t===3?"<math>":"",o=Er;for(let a=0;a<r;a++){let l=e[a],d,p,f=-1,_=0;for(;_<l.length&&(o.lastIndex=_,p=o.exec(l),p!==null);)_=o.lastIndex,o===Er?p[1]==="!--"?o=Ao:p[1]!==void 0?o=ko:p[2]!==void 0?(Vo.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=St):p[3]!==void 0&&(o=St):o===St?p[0]===">"?(o=s??Er,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?St:p[3]==='"'?Do:$o):o===Do||o===$o?o=St:o===Ao||o===ko?o=Er:(o=St,s=void 0);let b=o===St&&e[a+1].startsWith("/>")?" ":"";i+=o===Er?l+Sc:f>=0?(n.push(d),l.slice(0,f)+Ls+l.slice(f)+Qe+b):l+Qe+(f===-2?a:b)}return[Po(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Nr=class e{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let i=0,o=0,a=t.length-1,l=this.parts,[d,p]=Lo(t,r);if(this.el=e.createElement(d,n),Ct.currentNode=this.el.content,r===2||r===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Ct.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(Ls)){let _=p[o++],b=s.getAttribute(f).split(Qe),$=/([.?@])?(.*)/.exec(_);l.push({type:1,index:i,name:$[2],strings:b,ctor:$[1]==="."?yn:$[1]==="?"?bn:$[1]==="@"?_n:At}),s.removeAttribute(f)}else f.startsWith(Qe)&&(l.push({type:6,index:i}),s.removeAttribute(f));if(Vo.test(s.tagName)){let f=s.textContent.split(Qe),_=f.length-1;if(_>0){s.textContent=mn?mn.emptyScript:"";for(let b=0;b<_;b++)s.append(f[b],xr()),Ct.nextNode(),l.push({type:2,index:++i});s.append(f[_],xr())}}}else if(s.nodeType===8)if(s.data===Us)l.push({type:2,index:i});else{let f=-1;for(;(f=s.data.indexOf(Qe,f+1))!==-1;)l.push({type:7,index:i}),f+=Qe.length-1}i++}}static createElement(t,r){let n=Ot.createElement("template");return n.innerHTML=t,n}};function Tt(e,t,r=e,n){if(t===et)return t;let s=n!==void 0?r._$Co?.[n]:r._$Cl,i=wr(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=s:r._$Cl=s),s!==void 0&&(t=Tt(e,s._$AS(e,t.values),s,n)),t}var vn=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:n}=this._$AD,s=(t?.creationScope??Ot).importNode(r,!0);Ct.currentNode=s;let i=Ct.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new Kt(i,i.nextSibling,this,t):l.type===1?d=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(d=new En(i,this,t)),this._$AV.push(d),l=n[++a]}o!==l?.index&&(i=Ct.nextNode(),o++)}return Ct.currentNode=Ot,s}p(t){let r=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}},Kt=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Tt(this,t,r),wr(t)?t===W||t==null||t===""?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Io(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&wr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ot.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Nr.createElement(Po(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{let i=new vn(s,this),o=i.u(this.options);i.p(r),this.T(o),this._$AH=i}}_$AC(t){let r=Ro.get(t.strings);return r===void 0&&Ro.set(t.strings,r=new Nr(t)),r}k(t){Hs(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,s=0;for(let i of t)s===r.length?r.push(n=new e(this.O(xr()),this.O(xr()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,s,i){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=W}_$AI(t,r=this,n,s){let i=this.strings,o=!1;if(i===void 0)t=Tt(this,t,r,0),o=!wr(t)||t!==this._$AH&&t!==et,o&&(this._$AH=t);else{let a=t,l,d;for(t=i[0],l=0;l<i.length-1;l++)d=Tt(this,a[n+l],r,l),d===et&&(d=this._$AH[l]),o||=!wr(d)||d!==this._$AH[l],d===W?t=W:t!==W&&(t+=(d??"")+i[l+1]),this._$AH[l]=d}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},yn=class extends At{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},bn=class extends At{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}},_n=class extends At{constructor(t,r,n,s,i){super(t,r,n,s,i),this.type=5}_$AI(t,r=this){if((t=Tt(this,t,r,0)??W)===et)return;let n=this._$AH,s=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==W&&(n===W||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},En=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}},Uo={M:Ls,P:Qe,A:Us,C:1,L:Lo,R:vn,D:Io,V:Tt,I:Kt,H:At,N:bn,U:_n,B:yn,F:En},Cc=Ps.litHtmlPolyfillSupport;Cc?.(Nr,Kt),(Ps.litHtmlVersions??=[]).push("3.3.0");var Ho=(e,t,r)=>{let n=r?.renderBefore??t,s=n._$litPart$;if(s===void 0){let i=r?.renderBefore??null;n._$litPart$=s=new Kt(t.insertBefore(xr(),i),i,void 0,r??{})}return s._$AI(e),s};var js=globalThis,P=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ho(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}};P._$litElement$=!0,P.finalized=!0,js.litElementHydrateSupport?.({LitElement:P});var Oc=js.litElementPolyfillSupport;Oc?.({LitElement:P});(js.litElementVersions??=[]).push("4.2.0");var wn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Sr=e=>(...t)=>({_$litDirective$:e,values:t}),Gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var qt=Sr(class extends Gt{constructor(e){if(super(e),e.type!==wn.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let r=e.element.classList;for(let n of this.st)n in t||(r.remove(n),this.st.delete(n));for(let n in t){let s=!!t[n];s===this.st.has(n)||this.nt?.has(n)||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return et}});var Bs=["role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"],Tc=Bs.map(Ws);function Nn(e){return Tc.includes(e)}function Ws(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}var Sn=Symbol("privateIgnoreAttributeChangesFor");function Cn(e){var t;if(!1)return e;class r extends e{constructor(){super(...arguments),this[t]=new Set}attributeChangedCallback(s,i,o){if(!Nn(s)){super.attributeChangedCallback(s,i,o);return}if(this[Sn].has(s))return;this[Sn].add(s),this.removeAttribute(s),this[Sn].delete(s);let a=Ks(s);o===null?delete this.dataset[a]:this.dataset[a]=o,this.requestUpdate(Ks(s),i)}getAttribute(s){return Nn(s)?super.getAttribute(zs(s)):super.getAttribute(s)}removeAttribute(s){super.removeAttribute(s),Nn(s)&&(super.removeAttribute(zs(s)),this.requestUpdate())}}return t=Sn,Ac(r),r}function Ac(e){for(let t of Bs){let r=Ws(t),n=zs(r),s=Ks(r);e.createProperty(t,{attribute:r,noAccessor:!0}),e.createProperty(Symbol(n),{attribute:n,noAccessor:!0}),Object.defineProperty(e.prototype,t,{configurable:!0,enumerable:!0,get(){return this.dataset[s]??null},set(i){let o=this.dataset[s]??null;i!==o&&(i===null?delete this.dataset[s]:this.dataset[s]=i,this.requestUpdate(t,o))}})}}function zs(e){return`data-${e}`}function Ks(e){return e.replace(/-\w/,t=>t[1].toUpperCase())}var kc=Cn(P),ht=class extends kc{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:t}=this;return C`
      <div
        class="progress ${qt(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${t||W}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?W:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}};H([O({type:Number})],ht.prototype,"value",void 0);H([O({type:Number})],ht.prototype,"max",void 0);H([O({type:Boolean})],ht.prototype,"indeterminate",void 0);H([O({type:Boolean,attribute:"four-color"})],ht.prototype,"fourColor",void 0);var On=class extends ht{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){let t=(1-this.value/this.max)*100;return C`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return C` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}};var Fo=F`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;var Gs=class extends On{};Gs.styles=[Fo];Gs=H([L("md-circular-progress")],Gs);var jo="/run-macro",Bo={aiConfig:"smart",checkedLanguages:[],enableEarcons:!1,expandAtOrigin:!1,initialPhrases:[],persona:"",sentenceSmallMargin:!1,ttsVoice:"",voicePitch:0,voiceSpeakingRate:0},Wo=4;function $c(e){return e=e.replaceAll(`\\
`,""),e.split(`
`).map(t=>t.trim()).filter(t=>t.match(/^[0-9]+\./)).map(t=>t.replace(/^\d+\.\s?/,""))}var Tn=class e{constructor(){this.fetchAbortController=null}abortFetch(){this.fetchAbortController?.abort()}async fetchSuggestions(t,r,n,s){this.fetchAbortController?.abort(),this.fetchAbortController=new AbortController;let i=this.fetchAbortController.signal,o=s.wordMacroId,l={language:r,num:"5",text:t,persona:s.persona},d=e.fetchSuggestion(l,i,o,n),p=s.sentenceMacroId,f=e.fetchSuggestion(l,i,p,n);return Promise.all([f,d]).catch(b=>(b instanceof DOMException?console.log("Request was aborted by user:",l):alert(`Failed to access Gemini server or ${b||"something"}.`),null))}static async fetchSuggestion(t,r,n,s,i=0){let o=await e.fetchMacro(t,r,n,s,i);return $c(o)}static async fetchMacro(t,r,n,s,i){console.log(`macroId: ${n}, model: ${s}`);let o=new FormData;o.append("id",n),o.append("userInputs",JSON.stringify(t)),o.append("temperature",`${i}`),o.append("model_id",s),o.append("_csrf_token",document.body.dataset.csrfToken||"");let a=d=>{if(!(d instanceof Object&&"messages"in d))throw new Error("API response doesn't have messages");return!Array.isArray(d.messages)||d.messages.length===0?"":d.messages[0].text};return fetch(jo,{method:"POST",body:o,signal:r}).then(d=>d.json()).then(a)}};var kt=class extends P{constructor(){super(...arguments);this.label="";this.active=!1}render(){return C`<button>${this.label}</button>`}};kt.styles=F`
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
  `,E([O({type:String})],kt.prototype,"label",2),E([O({type:Boolean})],kt.prototype,"active",2),kt=E([L("pv-button")],kt);var Dc=Object.defineProperty,Rc=(e,t,r)=>t in e?Dc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qs=(e,t,r)=>(Rc(e,typeof t!="symbol"?t+"":t,r),r),Ic=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Ys=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},An=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},zo=(e,t,r)=>(Ic(e,t,"access private method"),r);function Ko(e,t){return Object.is(e,t)}var ie=null,Cr=!1,kn=1,$n=Symbol("SIGNAL");function Yt(e){let t=ie;return ie=e,t}function Vc(){return ie}function Mc(){return Cr}var ei={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Dn(e){if(Cr)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(ie===null)return;ie.consumerOnSignalRead(e);let t=ie.nextProducerIndex++;if(Jt(ie),t<ie.producerNode.length&&ie.producerNode[t]!==e&&Zs(ie)){let r=ie.producerNode[t];Rn(r,ie.producerIndexOfThis[t])}ie.producerNode[t]!==e&&(ie.producerNode[t]=e,ie.producerIndexOfThis[t]=Zs(ie)?Yo(e,ie,t):0),ie.producerLastReadVersion[t]=e.version}function Pc(){kn++}function Go(e){if(!(!e.dirty&&e.lastCleanEpoch===kn)){if(!e.producerMustRecompute(e)&&!jc(e)){e.dirty=!1,e.lastCleanEpoch=kn;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=kn}}function qo(e){if(e.liveConsumerNode===void 0)return;let t=Cr;Cr=!0;try{for(let r of e.liveConsumerNode)r.dirty||Uc(r)}finally{Cr=t}}function Lc(){return ie?.consumerAllowSignalWrites!==!1}function Uc(e){var t;e.dirty=!0,qo(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function Hc(e){return e&&(e.nextProducerIndex=0),Yt(e)}function Fc(e,t){if(Yt(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Zs(e))for(let r=e.nextProducerIndex;r<e.producerNode.length;r++)Rn(e.producerNode[r],e.producerIndexOfThis[r]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function jc(e){Jt(e);for(let t=0;t<e.producerNode.length;t++){let r=e.producerNode[t],n=e.producerLastReadVersion[t];if(n!==r.version||(Go(r),n!==r.version))return!0}return!1}function Yo(e,t,r){var n;if(ti(e),Jt(e),e.liveConsumerNode.length===0){(n=e.watched)==null||n.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)e.producerIndexOfThis[s]=Yo(e.producerNode[s],e,s)}return e.liveConsumerIndexOfThis.push(r),e.liveConsumerNode.push(t)-1}function Rn(e,t){var r;if(ti(e),Jt(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(r=e.unwatched)==null||r.call(e.wrapper);for(let s=0;s<e.producerNode.length;s++)Rn(e.producerNode[s],e.producerIndexOfThis[s])}let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let s=e.liveConsumerIndexOfThis[t],i=e.liveConsumerNode[t];Jt(i),i.producerIndexOfThis[s]=t}}function Zs(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function Jt(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function ti(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function Jo(e){if(Go(e),Dn(e),e.value===Qs)throw e.error;return e.value}function Bc(e){let t=Object.create(Wc);t.computation=e;let r=()=>Jo(t);return r[$n]=t,r}var Js=Symbol("UNSET"),Xs=Symbol("COMPUTING"),Qs=Symbol("ERRORED"),Wc={...ei,value:Js,dirty:!0,error:null,equal:Ko,producerMustRecompute(e){return e.value===Js||e.value===Xs},producerRecomputeValue(e){if(e.value===Xs)throw new Error("Detected cycle in computations.");let t=e.value;e.value=Xs;let r=Hc(e),n,s=!1;try{n=e.computation.call(e.wrapper),s=t!==Js&&t!==Qs&&e.equal.call(e.wrapper,t,n)}catch(i){n=Qs,e.error=i}finally{Fc(e,r)}if(s){e.value=t;return}e.value=n,e.version++}};function zc(){throw new Error}var Kc=zc;function Gc(){Kc()}function qc(e){let t=Object.create(Xc);t.value=e;let r=()=>(Dn(t),t.value);return r[$n]=t,r}function Yc(){return Dn(this),this.value}function Jc(e,t){Lc()||Gc(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Zc(e))}var Xc={...ei,equal:Ko,value:void 0};function Zc(e){e.version++,Pc(),qo(e)}var pe=Symbol("node"),ue;(e=>{var t,r,n,s,i,o;class a{constructor(p,f={}){An(this,r),qs(this,t);let b=qc(p)[$n];if(this[pe]=b,b.wrapper=this,f){let $=f.equals;$&&(b.equal=$),b.watched=f[e.subtle.watched],b.unwatched=f[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Yc.call(this[pe])}set(p){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(Mc())throw new Error("Writes to signals not permitted during Watcher callback");let f=this[pe];Jc(f,p)}}t=pe,r=new WeakSet,n=function(){},e.isState=d=>typeof d=="object"&&Ys(r,d),e.State=a;class l{constructor(p,f){An(this,i),qs(this,s);let b=Bc(p)[$n];if(b.consumerAllowSignalWrites=!0,this[pe]=b,b.wrapper=this,f){let $=f.equals;$&&(b.equal=$),b.watched=f[e.subtle.watched],b.unwatched=f[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Jo(this[pe])}}s=pe,i=new WeakSet,o=function(){},e.isComputed=d=>typeof d=="object"&&Ys(i,d),e.Computed=l,(d=>{var p,f,_,b,$;function j(I){let U,D=null;try{D=Yt(null),U=I()}finally{Yt(D)}return U}d.untrack=j;function le(I){var U;if(!(0,e.isComputed)(I)&&!(0,e.isWatcher)(I))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((U=I[pe].producerNode)==null?void 0:U.map(D=>D.wrapper))??[]}d.introspectSources=le;function X(I){var U;if(!(0,e.isComputed)(I)&&!(0,e.isState)(I))throw new TypeError("Called introspectSinks without a Signal argument");return((U=I[pe].liveConsumerNode)==null?void 0:U.map(D=>D.wrapper))??[]}d.introspectSinks=X;function re(I){if(!(0,e.isComputed)(I)&&!(0,e.isState)(I))throw new TypeError("Called hasSinks without a Signal argument");let U=I[pe].liveConsumerNode;return U?U.length>0:!1}d.hasSinks=re;function ee(I){if(!(0,e.isComputed)(I)&&!(0,e.isWatcher)(I))throw new TypeError("Called hasSources without a Computed or Watcher argument");let U=I[pe].producerNode;return U?U.length>0:!1}d.hasSources=ee;class ke{constructor(U){An(this,f),An(this,b),qs(this,p);let D=Object.create(ei);D.wrapper=this,D.consumerMarkedDirty=U,D.consumerIsAlwaysLive=!0,D.consumerAllowSignalWrites=!1,D.producerNode=[],this[pe]=D}watch(...U){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");zo(this,b,$).call(this,U);let D=this[pe];D.dirty=!1;let te=Yt(D);for(let Re of U)Dn(Re[pe]);Yt(te)}unwatch(...U){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");zo(this,b,$).call(this,U);let D=this[pe];Jt(D);for(let te=D.producerNode.length-1;te>=0;te--)if(U.includes(D.producerNode[te].wrapper)){Rn(D.producerNode[te],D.producerIndexOfThis[te]);let Re=D.producerNode.length-1;if(D.producerNode[te]=D.producerNode[Re],D.producerIndexOfThis[te]=D.producerIndexOfThis[Re],D.producerNode.length--,D.producerIndexOfThis.length--,D.nextProducerIndex--,te<D.producerNode.length){let Ye=D.producerIndexOfThis[te],Je=D.producerNode[te];ti(Je),Je.liveConsumerIndexOfThis[Ye]=te}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[pe].producerNode.filter(D=>D.dirty).map(D=>D.wrapper)}}p=pe,f=new WeakSet,_=function(){},b=new WeakSet,$=function(I){for(let U of I)if(!(0,e.isComputed)(U)&&!(0,e.isState)(U))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=I=>Ys(f,I),d.Watcher=ke;function k(){var I;return(I=Vc())==null?void 0:I.wrapper}d.currentComputed=k,d.watched=Symbol("watched"),d.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(ue||(ue={}));var Qc=Symbol("SignalWatcherBrand"),eu=new FinalizationRegistry(({watcher:e,signal:t})=>{e.unwatch(t)}),Xo=new WeakMap;function tt(e){return e[Qc]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new ue.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set}_$Sl(){if(this._$Su!==void 0)return;this._$Sv=new ue.Computed(()=>{this._$St.get(),super.performUpdate()});let t=this._$Su=new ue.subtle.Watcher(function(){let r=Xo.get(this);r!==void 0&&(r._$Si===!1&&r.requestUpdate(),this.watch())});Xo.set(t,this),eu.register(this,{watcher:t,signal:this._$Sv}),t.watch(this._$Sv)}_$Sp(){this._$Su!==void 0&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0)}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get())}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(r=>r.commit())}finally{this.isUpdatePending=!1,this._$Sh.clear()}}requestUpdate(t,r,n){this._$So=!0,super.requestUpdate(t,r,n)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}_(t){this._$Sh.add(t);let r=this._$So;this.requestUpdate(),this._$So=r}m(t){this._$Sh.delete(t)}}}var{I:Dh}=Uo;var Zo=e=>e.strings===void 0;var Or=(e,t)=>{let r=e._$AN;if(r===void 0)return!1;for(let n of r)n._$AO?.(t,!1),Or(n,t);return!0},In=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Qo=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),nu(t)}};function tu(e){this._$AN!==void 0?(In(this),this._$AM=e,Qo(this)):this._$AM=e}function ru(e,t=!1,r=0){let n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let i=r;i<n.length;i++)Or(n[i],!1),In(n[i]);else n!=null&&(Or(n,!1),In(n));else Or(this,e)}var nu=e=>{e.type==wn.CHILD&&(e._$AP??=ru,e._$AQ??=tu)},Vn=class extends Gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),Qo(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(Or(this,t),In(this))}setValue(t){if(Zo(this._$Ct))this._$Ct._$AI(t,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var Mn=class extends Vn{_$Sl(){if(this._$Su!==void 0)return;this._$SW=new ue.Computed(()=>{var r;return(r=this._$Sj)===null||r===void 0?void 0:r.get()});let t=this._$Su=new ue.subtle.Watcher(()=>{var r;(r=this._$SO)===null||r===void 0||r._(this),t.watch()});t.watch(this._$SW)}_$Sp(){var t;this._$Su!==void 0&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,(t=this._$SO)===null||t===void 0||t.m(this))}commit(){this.setValue(ue.subtle.untrack(()=>{var t;return(t=this._$SW)===null||t===void 0?void 0:t.get()}))}render(t){return ue.subtle.untrack(()=>t.get())}update(t,[r]){var n,s;return(n=this._$SO)!==null&&n!==void 0||(this._$SO=(s=t.options)===null||s===void 0?void 0:s.host),r!==this._$Sj&&this._$Sj!==void 0&&this._$Sp(),this._$Sj=r,this._$Sl(),ue.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$Sl()}},ri=Sr(Mn);var ni=e=>(t,...r)=>e(t,...r.map(n=>n instanceof ue.State||n instanceof ue.Computed?ri(n):n)),su=ni(C),iu=ni(xn);var Xh=ue.State,Zh=ue.Computed,gt=(e,t)=>new ue.State(e,t);var ta=Symbol.for(""),ou=e=>{if(e?.r===ta)return e?._$litStatic$};var mt=(e,...t)=>({_$litStatic$:t.reduce((r,n,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[s+1],e[0]),r:ta}),ea=new Map,si=e=>(t,...r)=>{let n=r.length,s,i,o=[],a=[],l,d=0,p=!1;for(;d<n;){for(l=t[d];d<n&&(i=r[d],(s=ou(i))!==void 0);)l+=s+t[++d],p=!0;d!==n&&a.push(i),o.push(l),d++}if(d===n&&o.push(t[n]),p){let f=o.join("$$lit$$");(t=ea.get(f))===void 0&&(o.raw=o,ea.set(f,t=o)),r=a}return e(t,...r)},Pn=si(C),ig=si(xn),og=si(Mo);var Tr=class extends tt(P){render(){return Pn`<pv-alphanumeric-nine-key-keyboard></pv-alphanumeric-nine-key-keyboard>`}};E([O({type:Object})],Tr.prototype,"state",2),Tr=E([L("pv-character-input")],Tr);var Ln=class extends P{render(){return C`<slot></slot>`}connectedCallback(){if(super.connectedCallback(),this.getAttribute("aria-hidden")==="false"){this.removeAttribute("aria-hidden");return}this.setAttribute("aria-hidden","true")}};var ra=F`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;var ii=class extends Ln{};ii.styles=[ra];ii=H([L("md-icon")],ii);var na=Symbol("attachableController"),sa;sa=new MutationObserver(e=>{for(let t of e)t.target[na]?.hostConnected()});var Xt=class{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){t===null?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,r){this.host=t,this.onControlChange=r,this.currentControl=null,t.addController(this),t[na]=this,sa?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}};var au=["focusin","focusout","pointerdown"],Zt=class extends P{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Xt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[ia]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}t[ia]=!0}}onControlChange(t,r){if(!!1)for(let n of au)t?.removeEventListener(n,this),r?.addEventListener(n,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}};H([O({type:Boolean,reflect:!0})],Zt.prototype,"visible",void 0);H([O({type:Boolean,reflect:!0})],Zt.prototype,"inward",void 0);var ia=Symbol("handledByFocusRing");var oa=F`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;var oi=class extends Zt{};oi.styles=[oa];oi=H([L("md-focus-ring")],oi);var aa={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};var lu=450,la=225,cu=.2,uu=10,du=75,pu=.35,fu="::after",hu="forwards",ve;(function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(ve||(ve={}));var gu=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],mu=150,vu=window.matchMedia("(forced-colors: active)"),vt=class extends P{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ve.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Xt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){let t={hovered:this.hovered,pressed:this.pressed};return C`<div class="surface ${qt(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==ve.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state===ve.HOLDING){this.state=ve.WAITING_FOR_CLICK;return}if(this.state===ve.TOUCH_DELAY){this.state=ve.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t)){this.state=ve.WAITING_FOR_CLICK,this.startPressAnimation(t);return}this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=ve.TOUCH_DELAY,await new Promise(r=>{setTimeout(r,mu)}),this.state===ve.TOUCH_DELAY&&(this.state=ve.HOLDING,this.startPressAnimation(t)))}}handleClick(){if(!this.disabled){if(this.state===ve.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===ve.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){let{height:t,width:r}=this.getBoundingClientRect(),n=Math.max(t,r),s=Math.max(pu*n,du),i=Math.floor(n*cu),a=Math.sqrt(r**2+t**2)+uu;this.initialSize=i,this.rippleScale=`${(a+s)/i}`,this.rippleSize=`${i}px`}getNormalizedPointerEventCoords(t){let{scrollX:r,scrollY:n}=window,{left:s,top:i}=this.getBoundingClientRect(),o=r+s,a=n+i,{pageX:l,pageY:d}=t;return{x:l-o,y:d-a}}getTranslationCoordinates(t){let{height:r,width:n}=this.getBoundingClientRect(),s={x:(n-this.initialSize)/2,y:(r-this.initialSize)/2},i;return t instanceof PointerEvent?i=this.getNormalizedPointerEventCoords(t):i={x:n/2,y:r/2},i={x:i.x-this.initialSize/2,y:i.y-this.initialSize/2},{startPoint:i,endPoint:s}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();let{startPoint:r,endPoint:n}=this.getTranslationCoordinates(t),s=`${r.x}px, ${r.y}px`,i=`${n.x}px, ${n.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${s}) scale(1)`,`translate(${i}) scale(${this.rippleScale})`]},{pseudoElement:fu,duration:lu,easing:aa.STANDARD,fill:hu})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ve.INACTIVE;let t=this.growAnimation,r=1/0;if(typeof t?.currentTime=="number"?r=t.currentTime:t?.currentTime&&(r=t.currentTime.to("ms").value),r>=la){this.pressed=!1;return}await new Promise(n=>{setTimeout(n,la-r)}),this.growAnimation===t&&(this.pressed=!1)}shouldReactToEvent(t){if(this.disabled||!t.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if(t.type==="pointerenter"||t.type==="pointerleave")return!this.isTouch(t);let r=t.buttons===1;return this.isTouch(t)||r}inBounds({x:t,y:r}){let{top:n,left:s,bottom:i,right:o}=this.getBoundingClientRect();return t>=s&&t<=o&&r>=n&&r<=i}isTouch({pointerType:t}){return t==="touch"}async handleEvent(t){if(!vu?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t);break;default:break}}onControlChange(t,r){if(!!1)for(let n of gu)t?.removeEventListener(n,this),r?.addEventListener(n,this)}};H([O({type:Boolean,reflect:!0})],vt.prototype,"disabled",void 0);H([_r()],vt.prototype,"hovered",void 0);H([_r()],vt.prototype,"pressed",void 0);H([ce(".surface")],vt.prototype,"mdRoot",void 0);var ca=F`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;var ai=class extends vt{};ai.styles=[ca];ai=H([L("md-ripple")],ai);var Qt=Symbol("internals"),li=Symbol("privateInternals");function ua(e){class t extends e{get[Qt](){return this[li]||(this[li]=this.attachInternals()),this[li]}}return t}function da(e){e.addInitializer(t=>{let r=t;r.addEventListener("click",async n=>{let{type:s,[Qt]:i}=r,{form:o}=i;if(!(!o||s==="button")&&(await new Promise(a=>{setTimeout(a)}),!n.defaultPrevented)){if(s==="reset"){o.reset();return}o.addEventListener("submit",a=>{Object.defineProperty(a,"submitter",{configurable:!0,enumerable:!0,get:()=>r})},{capture:!0,once:!0}),i.setFormValue(r.value),o.requestSubmit()}})})}function ci(e,t=!0){return t&&getComputedStyle(e).getPropertyValue("direction").trim()==="rtl"}var yu=Cn(ua(P)),de=class extends yu{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[Qt].form}get labels(){return this[Qt].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=ci(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let t=this.href?mt`div`:mt`button`,{ariaLabel:r,ariaHasPopup:n,ariaExpanded:s}=this,i=r&&this.ariaLabelSelected,o=this.toggle?this.selected:W,a=W;return this.href||(a=i&&this.selected?this.ariaLabelSelected:r),Pn`<${t}
        class="icon-button ${qt(this.getRenderClasses())}"
        id="button"
        aria-label="${a||W}"
        aria-haspopup="${!this.href&&n||W}"
        aria-expanded="${!this.href&&s||W}"
        aria-pressed="${o}"
        aria-disabled=${!this.href&&this.softDisabled||W}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?W:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():W}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${t}>`}renderLink(){let{ariaLabel:t}=this;return C`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||W}"
        target="${this.target||W}"
        aria-label="${t||W}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return C`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return C`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return C`<span class="touch"></span>`}renderFocusRing(){return C`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){let t=!this.href&&(this.disabled||this.softDisabled);return C`<md-ripple
      for=${this.href?"link":W}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=ci(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled){t.stopImmediatePropagation(),t.preventDefault();return}}async handleClickOnChild(t){await 0,!(!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}};da(de);de.formAssociated=!0;de.shadowRootOptions={mode:"open",delegatesFocus:!0};H([O({type:Boolean,reflect:!0})],de.prototype,"disabled",void 0);H([O({type:Boolean,attribute:"soft-disabled",reflect:!0})],de.prototype,"softDisabled",void 0);H([O({type:Boolean,attribute:"flip-icon-in-rtl"})],de.prototype,"flipIconInRtl",void 0);H([O()],de.prototype,"href",void 0);H([O()],de.prototype,"download",void 0);H([O()],de.prototype,"target",void 0);H([O({attribute:"aria-label-selected"})],de.prototype,"ariaLabelSelected",void 0);H([O({type:Boolean})],de.prototype,"toggle",void 0);H([O({type:Boolean,reflect:!0})],de.prototype,"selected",void 0);H([O()],de.prototype,"type",void 0);H([O({reflect:!0})],de.prototype,"value",void 0);H([_r()],de.prototype,"flipIcon",void 0);var pa=F`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;var fa=F`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;var ui=class extends de{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};ui.styles=[pa,fa];ui=H([L("md-icon-button")],ui);var Ar="lit-localize-status";var ha=e=>typeof e!="string"&&"strTag"in e,Un=(e,t,r)=>{let n=e[0];for(let s=1;s<e.length;s++)n+=t[r?r[s-1]:s-1],n+=e[s];return n};var kr=e=>ha(e)?Un(e.strings,e.values):e;var $r=kr,ga=!1;function di(e){if(ga)throw new Error("lit-localize can only be configured once");$r=e,ga=!0}var pi=class{constructor(t){this.__litLocalizeEventHandler=r=>{r.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(Ar,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Ar,this.__litLocalizeEventHandler)}},bu=e=>e.addController(new pi(e)),ma=bu;var yt=()=>(e,t)=>(e.addInitializer(ma),e);var Dr=class{constructor(){this.settled=!1,this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}};var rt=[];for(let e=0;e<256;e++)rt[e]=(e>>4&15).toString(16)+(e&15).toString(16);function va(e){let t=0,r=8997,n=0,s=33826,i=0,o=40164,a=0,l=52210;for(let d=0;d<e.length;d++)r^=e.charCodeAt(d),t=r*435,n=s*435,i=o*435,a=l*435,i+=r<<8,a+=s<<8,n+=t>>>16,r=t&65535,i+=n>>>16,s=n&65535,l=a+(i>>>16)&65535,o=i&65535;return rt[l>>8]+rt[l&255]+rt[o>>8]+rt[o&255]+rt[s>>8]+rt[s&255]+rt[r>>8]+rt[r&255]}var _u="",Eu="h",xu="s";function ya(e,t){return(t?Eu:xu)+va(typeof e=="string"?e:e.join(_u))}var ba=new WeakMap,_a=new Map;function Ea(e,t,r){if(e){let n=r?.id??wu(t),s=e[n];if(s){if(typeof s=="string")return s;if("strTag"in s)return Un(s.strings,t.values,s.values);{let i=ba.get(s);return i===void 0&&(i=s.values,ba.set(s,i)),{...s,values:i.map(o=>t.values[o])}}}}return kr(t)}function wu(e){let t=typeof e=="string"?e:e.strings,r=_a.get(t);return r===void 0&&(r=ya(t,typeof e!="string"&&!("strTag"in e)),_a.set(t,r)),r}function fi(e){window.dispatchEvent(new CustomEvent(Ar,{detail:e}))}var Fn="",hi,xa,jn,gi,wa,$t=new Dr;$t.resolve();var Hn=0,Na=e=>(di((t,r)=>Ea(wa,t,r)),Fn=xa=e.sourceLocale,jn=new Set(e.targetLocales),jn.add(e.sourceLocale),gi=e.loadLocale,{getLocale:Nu,setLocale:Su}),Nu=()=>Fn,Su=e=>{if(e===(hi??Fn))return $t.promise;if(!jn||!gi)throw new Error("Internal error");if(!jn.has(e))throw new Error("Invalid locale code");Hn++;let t=Hn;return hi=e,$t.settled&&($t=new Dr),fi({status:"loading",loadingLocale:e}),(e===xa?Promise.resolve({templates:void 0}):gi(e)).then(n=>{Hn===t&&(Fn=e,hi=void 0,wa=n.templates,fi({status:"ready",readyLocale:e}),$t.resolve())},n=>{Hn===t&&(fi({status:"error",errorLocale:e,errorMessage:n.toString()}),$t.reject(n))}),$t.promise};function er(e){let t=Object.create(null);for(let r of e.split(","))t[r]=1;return r=>r in t}var Y={},tr=[],ye=()=>{},Ca=()=>!1,rr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Rr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Ir=(e,t)=>{let r=e.indexOf(t);r>-1&&e.splice(r,1)},Cu=Object.prototype.hasOwnProperty,z=(e,t)=>Cu.call(e,t),V=Array.isArray,nr=e=>Bn(e)==="[object Map]",mi=e=>Bn(e)==="[object Set]";var M=e=>typeof e=="function",oe=e=>typeof e=="string",nt=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",vi=e=>(se(e)||M(e))&&M(e.then)&&M(e.catch),Ou=Object.prototype.toString,Bn=e=>Ou.call(e),yi=e=>Bn(e).slice(8,-1),bi=e=>Bn(e)==="[object Object]",Wn=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,sr=er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");var zn=e=>{let t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Tu=/-(\w)/g,De=zn(e=>e.replace(Tu,(t,r)=>r?r.toUpperCase():"")),Au=/\B([A-Z])/g,st=zn(e=>e.replace(Au,"-$1").toLowerCase()),Vr=zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mr=zn(e=>e?`on${Vr(e)}`:""),it=(e,t)=>!Object.is(e,t),Pr=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Dt=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},_i=e=>{let t=parseFloat(e);return isNaN(t)?e:t};var Sa,bt=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lr(e){if(V(e)){let t={};for(let r=0;r<e.length;r++){let n=e[r],s=oe(n)?Ru(n):Lr(n);if(s)for(let i in s)t[i]=s[i]}return t}else if(oe(e)||se(e))return e}var ku=/;(?![^(]*\))/g,$u=/:([^]+)/,Du=/\/\*[^]*?\*\//g;function Ru(e){let t={};return e.replace(Du,"").split(ku).forEach(r=>{if(r){let n=r.split($u);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ur(e){let t="";if(oe(e))t=e;else if(V(e))for(let r=0;r<e.length;r++){let n=Ur(e[r]);n&&(t+=n+" ")}else if(se(e))for(let r in e)e[r]&&(t+=r+" ");return t.trim()}var Oa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ta=er(Oa),Iu=er(Oa+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Kn(e){return!!e||e===""}function Vu(e,...t){console.warn(`[Vue warn] ${e}`,...t)}var Ne,Jn=class{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){let r=Ne;try{return Ne=this,t()}finally{Ne=r}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){let s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}};function Mu(){return Ne}var Q;var Ei=new WeakSet,Br=class{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ei.has(this)&&(Ei.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Da(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Aa(this),Ra(this);let t=Q,r=Ve;Q=this,Ve=!0;try{return this.fn()}finally{Ia(this),Q=t,Ve=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ri(t);this.deps=this.depsTail=void 0,Aa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ei.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ni(this)&&this.run()}get dirty(){return Ni(this)}},$a=0,Fr,jr;function Da(e,t=!1){if(e.flags|=8,t){e.next=jr,jr=e;return}e.next=Fr,Fr=e}function $i(){$a++}function Di(){if(--$a>0)return;if(jr){let t=jr;for(jr=void 0;t;){let r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;Fr;){let t=Fr;for(Fr=void 0;t;){let r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Ra(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ia(e){let t,r=e.depsTail,n=r;for(;n;){let s=n.prevDep;n.version===-1?(n===r&&(r=s),Ri(n),Pu(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}e.deps=t,e.depsTail=r}function Ni(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Va(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Va(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Wr)||(e.globalVersion=Wr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ni(e))))return;e.flags|=2;let t=e.dep,r=Q,n=Ve;Q=e,Ve=!0;try{Ra(e);let s=e.fn(e._value);(t.version===0||it(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Q=r,Ve=n,Ia(e),e.flags&=-3}}function Ri(e,t=!1){let{dep:r,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)Ri(i,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Pu(e){let{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}var Ve=!0,Ma=[];function je(){Ma.push(Ve),Ve=!1}function Be(){let e=Ma.pop();Ve=e===void 0?!0:e}function Aa(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let r=Q;Q=void 0;try{t()}finally{Q=r}}}var Wr=0,Si=class{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Xn=class{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Q||!Ve||Q===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Q)r=this.activeLink=new Si(Q,this),Q.deps?(r.prevDep=Q.depsTail,Q.depsTail.nextDep=r,Q.depsTail=r):Q.deps=Q.depsTail=r,Pa(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){let n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Q.depsTail,r.nextDep=void 0,Q.depsTail.nextDep=r,Q.depsTail=r,Q.deps===r&&(Q.deps=n)}return r}trigger(t){this.version++,Wr++,this.notify(t)}notify(t){$i();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Di()}}};function Pa(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Pa(n)}let r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}var Ci=new WeakMap,It=Symbol(""),Oi=Symbol(""),zr=Symbol("");function fe(e,t,r){if(Ve&&Q){let n=Ci.get(e);n||Ci.set(e,n=new Map);let s=n.get(r);s||(n.set(r,s=new Xn),s.map=n,s.key=r),s.track()}}function Fe(e,t,r,n,s,i){let o=Ci.get(e);if(!o){Wr++;return}let a=l=>{l&&l.trigger()};if($i(),t==="clear")o.forEach(a);else{let l=V(e),d=l&&Wn(r);if(l&&r==="length"){let p=Number(n);o.forEach((f,_)=>{(_==="length"||_===zr||!nt(_)&&_>=p)&&a(f)})}else switch((r!==void 0||o.has(void 0))&&a(o.get(r)),d&&a(o.get(zr)),t){case"add":l?d&&a(o.get("length")):(a(o.get(It)),nr(e)&&a(o.get(Oi)));break;case"delete":l||(a(o.get(It)),nr(e)&&a(o.get(Oi)));break;case"set":nr(e)&&a(o.get(It));break}}Di()}function ir(e){let t=K(e);return t===e?t:(fe(t,"iterate",zr),Me(e)?t:t.map(Se))}function rs(e){return fe(e=K(e),"iterate",zr),e}var Lu={__proto__:null,[Symbol.iterator](){return xi(this,Symbol.iterator,Se)},concat(...e){return ir(this).concat(...e.map(t=>V(t)?ir(t):t))},entries(){return xi(this,"entries",e=>(e[1]=Se(e[1]),e))},every(e,t){return ot(this,"every",e,t,void 0,arguments)},filter(e,t){return ot(this,"filter",e,t,r=>r.map(Se),arguments)},find(e,t){return ot(this,"find",e,t,Se,arguments)},findIndex(e,t){return ot(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ot(this,"findLast",e,t,Se,arguments)},findLastIndex(e,t){return ot(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ot(this,"forEach",e,t,void 0,arguments)},includes(...e){return wi(this,"includes",e)},indexOf(...e){return wi(this,"indexOf",e)},join(e){return ir(this).join(e)},lastIndexOf(...e){return wi(this,"lastIndexOf",e)},map(e,t){return ot(this,"map",e,t,void 0,arguments)},pop(){return Hr(this,"pop")},push(...e){return Hr(this,"push",e)},reduce(e,...t){return ka(this,"reduce",e,t)},reduceRight(e,...t){return ka(this,"reduceRight",e,t)},shift(){return Hr(this,"shift")},some(e,t){return ot(this,"some",e,t,void 0,arguments)},splice(...e){return Hr(this,"splice",e)},toReversed(){return ir(this).toReversed()},toSorted(e){return ir(this).toSorted(e)},toSpliced(...e){return ir(this).toSpliced(...e)},unshift(...e){return Hr(this,"unshift",e)},values(){return xi(this,"values",Se)}};function xi(e,t,r){let n=rs(e),s=n[t]();return n!==e&&!Me(e)&&(s._next=s.next,s.next=()=>{let i=s._next();return i.value&&(i.value=r(i.value)),i}),s}var Uu=Array.prototype;function ot(e,t,r,n,s,i){let o=rs(e),a=o!==e&&!Me(e),l=o[t];if(l!==Uu[t]){let f=l.apply(e,i);return a?Se(f):f}let d=r;o!==e&&(a?d=function(f,_){return r.call(this,Se(f),_,e)}:r.length>2&&(d=function(f,_){return r.call(this,f,_,e)}));let p=l.call(o,d,n);return a&&s?s(p):p}function ka(e,t,r,n){let s=rs(e),i=r;return s!==e&&(Me(e)?r.length>3&&(i=function(o,a,l){return r.call(this,o,a,l,e)}):i=function(o,a,l){return r.call(this,o,Se(a),l,e)}),s[t](i,...n)}function wi(e,t,r){let n=K(e);fe(n,"iterate",zr);let s=n[t](...r);return(s===-1||s===!1)&&ss(r[0])?(r[0]=K(r[0]),n[t](...r)):s}function Hr(e,t,r=[]){je(),$i();let n=K(e)[t].apply(e,r);return Di(),Be(),n}var Hu=er("__proto__,__v_isRef,__isVue"),La=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nt));function Fu(e){nt(e)||(e=String(e));let t=K(this);return fe(t,"has",e),t.hasOwnProperty(e)}var Zn=class{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;let s=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!s;if(r==="__v_isReadonly")return s;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(s?i?Ju:Fa:i?Ha:Ua).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;let o=V(t);if(!s){let l;if(o&&(l=Lu[r]))return l;if(r==="hasOwnProperty")return Fu}let a=Reflect.get(t,r,me(t)?t:n);return(nt(r)?La.has(r):Hu(r))||(s||fe(t,"get",r),i)?a:me(a)?o&&Wn(r)?a:a.value:se(a)?s?Ba(a):ns(a):a}},Qn=class extends Zn{constructor(t=!1){super(!1,t)}set(t,r,n,s){let i=t[r];if(!this._isShallow){let l=Vt(i);if(!Me(n)&&!Vt(n)&&(i=K(i),n=K(n)),!V(t)&&me(i)&&!me(n))return l?!1:(i.value=n,!0)}let o=V(t)&&Wn(r)?Number(r)<t.length:z(t,r),a=Reflect.set(t,r,n,me(t)?t:s);return t===K(s)&&(o?it(n,i)&&Fe(t,"set",r,n,i):Fe(t,"add",r,n)),a}deleteProperty(t,r){let n=z(t,r),s=t[r],i=Reflect.deleteProperty(t,r);return i&&n&&Fe(t,"delete",r,void 0,s),i}has(t,r){let n=Reflect.has(t,r);return(!nt(r)||!La.has(r))&&fe(t,"has",r),n}ownKeys(t){return fe(t,"iterate",V(t)?"length":It),Reflect.ownKeys(t)}},Ti=class extends Zn{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}},ju=new Qn,Bu=new Ti,Wu=new Qn(!0);var Ai=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function zu(e,t,r){return function(...n){let s=this.__v_raw,i=K(s),o=nr(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,d=s[e](...n),p=r?Ai:t?es:Se;return!t&&fe(i,"iterate",l?Oi:It),{next(){let{value:f,done:_}=d.next();return _?{value:f,done:_}:{value:a?[p(f[0]),p(f[1])]:p(f),done:_}},[Symbol.iterator](){return this}}}}function qn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ku(e,t){let r={get(s){let i=this.__v_raw,o=K(i),a=K(s);e||(it(s,a)&&fe(o,"get",s),fe(o,"get",a));let{has:l}=Gn(o),d=t?Ai:e?es:Se;if(l.call(o,s))return d(i.get(s));if(l.call(o,a))return d(i.get(a));i!==o&&i.get(s)},get size(){let s=this.__v_raw;return!e&&fe(K(s),"iterate",It),Reflect.get(s,"size",s)},has(s){let i=this.__v_raw,o=K(i),a=K(s);return e||(it(s,a)&&fe(o,"has",s),fe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){let o=this,a=o.__v_raw,l=K(a),d=t?Ai:e?es:Se;return!e&&fe(l,"iterate",It),a.forEach((p,f)=>s.call(i,d(p),d(f),o))}};return ae(r,e?{add:qn("add"),set:qn("set"),delete:qn("delete"),clear:qn("clear")}:{add(s){!t&&!Me(s)&&!Vt(s)&&(s=K(s));let i=K(this);return Gn(i).has.call(i,s)||(i.add(s),Fe(i,"add",s,s)),this},set(s,i){!t&&!Me(i)&&!Vt(i)&&(i=K(i));let o=K(this),{has:a,get:l}=Gn(o),d=a.call(o,s);d||(s=K(s),d=a.call(o,s));let p=l.call(o,s);return o.set(s,i),d?it(i,p)&&Fe(o,"set",s,i,p):Fe(o,"add",s,i),this},delete(s){let i=K(this),{has:o,get:a}=Gn(i),l=o.call(i,s);l||(s=K(s),l=o.call(i,s));let d=a?a.call(i,s):void 0,p=i.delete(s);return l&&Fe(i,"delete",s,void 0,d),p},clear(){let s=K(this),i=s.size!==0,o=void 0,a=s.clear();return i&&Fe(s,"clear",void 0,void 0,o),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=zu(s,e,t)}),r}function Ii(e,t){let r=Ku(e,t);return(n,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?n:Reflect.get(z(r,s)&&s in n?r:n,s,i)}var Gu={get:Ii(!1,!1)},qu={get:Ii(!1,!0)},Yu={get:Ii(!0,!1)};var Ua=new WeakMap,Ha=new WeakMap,Fa=new WeakMap,Ju=new WeakMap;function Xu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zu(e){return e.__v_skip||!Object.isExtensible(e)?0:Xu(yi(e))}function ns(e){return Vt(e)?e:Vi(e,!1,ju,Gu,Ua)}function ja(e){return Vi(e,!1,Wu,qu,Ha)}function Ba(e){return Vi(e,!0,Bu,Yu,Fa)}function Vi(e,t,r,n,s){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let i=Zu(e);if(i===0)return e;let o=s.get(e);if(o)return o;let a=new Proxy(e,i===2?n:r);return s.set(e,a),a}function or(e){return Vt(e)?or(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function ss(e){return e?!!e.__v_raw:!1}function K(e){let t=e&&e.__v_raw;return t?K(t):e}function Wa(e){return!z(e,"__v_skip")&&Object.isExtensible(e)&&Dt(e,"__v_skip",!0),e}var Se=e=>se(e)?ns(e):e,es=e=>se(e)?Ba(e):e;function me(e){return e?e.__v_isRef===!0:!1}function za(e){return me(e)?e.value:e}var Qu={get:(e,t,r)=>t==="__v_raw"?e:za(Reflect.get(e,t,r)),set:(e,t,r,n)=>{let s=e[t];return me(s)&&!me(r)?(s.value=r,!0):Reflect.set(e,t,r,n)}};function Mi(e){return or(e)?e:new Proxy(e,Qu)}var ki=class{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Xn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Q!==this)return Da(this,!0),!0}get value(){let t=this.dep.track();return Va(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}};function Ka(e,t,r=!1){let n,s;return M(e)?n=e:(n=e.get,s=e.set),new ki(n,s,r)}var Yn={},ts=new WeakMap,Rt;function ed(e,t=!1,r=Rt){if(r){let n=ts.get(r);n||ts.set(r,n=[]),n.push(e)}}function Ga(e,t,r=Y){let{immediate:n,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=r,d=k=>{(r.onWarn||Vu)("Invalid watch source: ",k,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=k=>s?k:Me(k)||s===!1||s===0?at(k,1):at(k),f,_,b,$,j=!1,le=!1;if(me(e)?(_=()=>e.value,j=Me(e)):or(e)?(_=()=>p(e),j=!0):V(e)?(le=!0,j=e.some(k=>or(k)||Me(k)),_=()=>e.map(k=>{if(me(k))return k.value;if(or(k))return p(k);if(M(k))return l?l(k,2):k()})):M(e)?t?_=l?()=>l(e,2):e:_=()=>{if(b){je();try{b()}finally{Be()}}let k=Rt;Rt=f;try{return l?l(e,3,[$]):e($)}finally{Rt=k}}:_=ye,t&&s){let k=_,I=s===!0?1/0:s;_=()=>at(k(),I)}let X=Mu(),re=()=>{f.stop(),X&&X.active&&Ir(X.effects,f)};if(i&&t){let k=t;t=(...I)=>{k(...I),re()}}let ee=le?new Array(e.length).fill(Yn):Yn,ke=k=>{if(!(!(f.flags&1)||!f.dirty&&!k))if(t){let I=f.run();if(s||j||(le?I.some((U,D)=>it(U,ee[D])):it(I,ee))){b&&b();let U=Rt;Rt=f;try{let D=[I,ee===Yn?void 0:le&&ee[0]===Yn?[]:ee,$];ee=I,l?l(t,3,D):t(...D)}finally{Rt=U}}}else f.run()};return a&&a(ke),f=new Br(_),f.scheduler=o?()=>o(ke,!1):ke,$=k=>ed(k,!1,f),b=f.onStop=()=>{let k=ts.get(f);if(k){if(l)l(k,4);else for(let I of k)I();ts.delete(f)}},t?n?ke(!0):ee=f.run():o?o(ke.bind(null,!0),!0):f.run(),re.pause=f.pause.bind(f),re.resume=f.resume.bind(f),re.stop=re,re}function at(e,t=1/0,r){if(t<=0||!se(e)||e.__v_skip||(r=r||new Set,r.has(e)))return e;if(r.add(e),t--,me(e))at(e.value,t,r);else if(V(e))for(let n=0;n<e.length;n++)at(e[n],t,r);else if(mi(e)||nr(e))e.forEach(n=>{at(n,t,r)});else if(bi(e)){for(let n in e)at(e[n],t,r);for(let n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&at(e[n],t,r)}return e}function tn(e,t,r,n){try{return n?e(...n):e()}catch(s){ps(s,t,r)}}function Le(e,t,r,n){if(M(e)){let s=tn(e,t,r,n);return s&&vi(s)&&s.catch(i=>{ps(i,t,r)}),s}if(V(e)){let s=[];for(let i=0;i<e.length;i++)s.push(Le(e[i],t,r,n));return s}}function ps(e,t,r,n=!0){let s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Y;if(t){let a=t.parent,l=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${r}`;for(;a;){let p=a.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,l,d)===!1)return}a=a.parent}if(i){je(),tn(i,null,10,[e,l,d]),Be();return}}rd(e,r,s,n,o)}function rd(e,t,r,n=!0,s=!1){if(s)throw e;console.error(e)}var _e=[],ze=-1,lr=[],_t=null,ar=0,ll=Promise.resolve(),ls=null;function cl(e){let t=ls||ll;return e?t.then(this?e.bind(this):e):t}function nd(e){let t=ze+1,r=_e.length;for(;t<r;){let n=t+r>>>1,s=_e[n],i=Qr(s);i<e||i===e&&s.flags&2?t=n+1:r=n}return t}function Ki(e){if(!(e.flags&1)){let t=Qr(e),r=_e[_e.length-1];!r||!(e.flags&2)&&t>=Qr(r)?_e.push(e):_e.splice(nd(t),0,e),e.flags|=1,ul()}}function ul(){ls||(ls=ll.then(fl))}function dl(e){V(e)?lr.push(...e):_t&&e.id===-1?_t.splice(ar+1,0,e):e.flags&1||(lr.push(e),e.flags|=1),ul()}function qa(e,t,r=ze+1){for(;r<_e.length;r++){let n=_e[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;_e.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function pl(e){if(lr.length){let t=[...new Set(lr)].sort((r,n)=>Qr(r)-Qr(n));if(lr.length=0,_t){_t.push(...t);return}for(_t=t,ar=0;ar<_t.length;ar++){let r=_t[ar];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}_t=null,ar=0}}var Qr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fl(e){let t=ye;try{for(ze=0;ze<_e.length;ze++){let r=_e[ze];r&&!(r.flags&8)&&(r.flags&4&&(r.flags&=-2),tn(r,r.i,r.i?15:14),r.flags&4||(r.flags&=-2))}}finally{for(;ze<_e.length;ze++){let r=_e[ze];r&&(r.flags&=-2)}ze=-1,_e.length=0,pl(e),ls=null,(_e.length||lr.length)&&fl(e)}}var Ge,Gr=[],Hi=!1;function fs(e,...t){Ge?Ge.emit(e,...t):Hi||Gr.push({event:e,args:t})}function hl(e,t){var r,n;Ge=e,Ge?(Ge.enabled=!0,Gr.forEach(({event:s,args:i})=>Ge.emit(s,...i)),Gr=[]):typeof window<"u"&&window.HTMLElement&&!((n=(r=window.navigator)==null?void 0:r.userAgent)!=null&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{hl(i,t)}),setTimeout(()=>{Ge||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Hi=!0,Gr=[])},3e3)):(Hi=!0,Gr=[])}function sd(e,t){fs("app:init",e,t,{Fragment:Pe,Text:rn,Comment:Lt,Static:Zr})}function id(e){fs("app:unmount",e)}var od=Gi("component:added"),gl=Gi("component:updated"),ad=Gi("component:removed"),ld=e=>{Ge&&typeof Ge.cleanupBuffer=="function"&&!Ge.cleanupBuffer(e)&&ad(e)};function Gi(e){return t=>{fs(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}function cd(e,t,r){fs("component:emit",e.appContext.app,e,t,r)}var qe=null,ml=null;function cs(e){let t=qe;return qe=e,ml=e&&e.type.__scopeId||null,t}function ud(e,t=qe,r){if(!t||e._n)return e;let n=(...s)=>{n._d&&rl(-1);let i=cs(t),o;try{o=e(...s)}finally{cs(i),n._d&&rl(1)}return __VUE_PROD_DEVTOOLS__&&gl(t),o};return n._n=!0,n._c=!0,n._d=!0,n}function Mt(e,t,r,n){let s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){let a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[n];l&&(je(),Le(l,r,8,[e.el,a,e,t]),Be())}}var dd=Symbol("_vte"),pd=e=>e.__isTeleport;var Rv=Symbol("_leaveCb"),Iv=Symbol("_enterCb");function hs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,hs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Yr(e,t,r,n,s=!1){if(V(e)){e.forEach(($,j)=>Yr($,t&&(V(t)?t[j]:t),r,n,s));return}if(Jr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Yr(e,t,r,n.component.subTree);return}let i=n.shapeFlag&4?eo(n.component):n.el,o=s?null:i,{i:a,r:l}=e,d=t&&t.r,p=a.refs===Y?a.refs={}:a.refs,f=a.setupState,_=K(f),b=f===Y?()=>!1:$=>z(_,$);if(d!=null&&d!==l&&(oe(d)?(p[d]=null,b(d)&&(f[d]=null)):me(d)&&(d.value=null)),M(l))tn(l,a,12,[o,p]);else{let $=oe(l),j=me(l);if($||j){let le=()=>{if(e.f){let X=$?b(l)?f[l]:p[l]:l.value;s?V(X)&&Ir(X,i):V(X)?X.includes(i)||X.push(i):$?(p[l]=[i],b(l)&&(f[l]=p[l])):(l.value=[i],e.k&&(p[e.k]=l.value))}else $?(p[l]=o,b(l)&&(f[l]=o)):j&&(l.value=o,e.k&&(p[e.k]=o))};o?(le.id=-1,Te(le,r)):le()}}}var Vv=bt().requestIdleCallback||(e=>setTimeout(e,1)),Mv=bt().cancelIdleCallback||(e=>clearTimeout(e));var Jr=e=>!!e.type.__asyncLoader;var yl=e=>e.type.__isKeepAlive;function fd(e,t){bl(e,"a",t)}function hd(e,t){bl(e,"da",t)}function bl(e,t,r=Ee){let n=e.__wdc||(e.__wdc=()=>{let s=r;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(gs(t,n,r),r){let s=r.parent;for(;s&&s.parent;)yl(s.parent.vnode)&&gd(n,t,r,s),s=s.parent}}function gd(e,t,r,n){let s=gs(t,e,n,!0);qi(()=>{Ir(n[t],s)},r)}function gs(e,t,r=Ee,n=!1){if(r){let s=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...o)=>{je();let a=nn(r),l=Le(t,r,e,o);return a(),Be(),l});return n?s.unshift(i):s.push(i),i}}var lt=e=>(t,r=Ee)=>{(!en||e==="sp")&&gs(e,(...n)=>t(...n),r)},md=lt("bm"),_l=lt("m"),El=lt("bu"),xl=lt("u"),vd=lt("bum"),qi=lt("um"),yd=lt("sp"),bd=lt("rtg"),_d=lt("rtc");function Ed(e,t=Ee){gs("ec",e,t)}var xd=Symbol.for("v-ndc");var Fi=e=>e?jl(e)?eo(e):Fi(e.parent):null,Xr=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fi(e.parent),$root:e=>Fi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>__VUE_OPTIONS_API__?Yi(e):e.type,$forceUpdate:e=>e.f||(e.f=()=>{Ki(e.update)}),$nextTick:e=>e.n||(e.n=cl.bind(e.proxy)),$watch:e=>__VUE_OPTIONS_API__?Wd.bind(e):ye});var Pi=(e,t)=>e!==Y&&!e.__isScriptSetup&&z(e,t),wd={get({_:e},t){if(t==="__v_skip")return!0;let{ctx:r,setupState:n,data:s,props:i,accessCache:o,type:a,appContext:l}=e,d;if(t[0]!=="$"){let b=o[t];if(b!==void 0)switch(b){case 1:return n[t];case 2:return s[t];case 4:return r[t];case 3:return i[t]}else{if(Pi(n,t))return o[t]=1,n[t];if(s!==Y&&z(s,t))return o[t]=2,s[t];if((d=e.propsOptions[0])&&z(d,t))return o[t]=3,i[t];if(r!==Y&&z(r,t))return o[t]=4,r[t];(!__VUE_OPTIONS_API__||ji)&&(o[t]=0)}}let p=Xr[t],f,_;if(p)return t==="$attrs"&&fe(e.attrs,"get",""),p(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(r!==Y&&z(r,t))return o[t]=4,r[t];if(_=l.config.globalProperties,z(_,t))return _[t]},set({_:e},t,r){let{data:n,setupState:s,ctx:i}=e;return Pi(s,t)?(s[t]=r,!0):n!==Y&&z(n,t)?(n[t]=r,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:s,propsOptions:i}},o){let a;return!!r[o]||e!==Y&&z(e,o)||Pi(t,o)||(a=i[0])&&z(a,o)||z(n,o)||z(Xr,o)||z(s.config.globalProperties,o)},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:z(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Ya(e){return V(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}var ji=!0;function Nd(e){let t=Yi(e),r=e.proxy,n=e.ctx;ji=!1,t.beforeCreate&&Ja(t.beforeCreate,e,"bc");let{data:s,computed:i,methods:o,watch:a,provide:l,inject:d,created:p,beforeMount:f,mounted:_,beforeUpdate:b,updated:$,activated:j,deactivated:le,beforeDestroy:X,beforeUnmount:re,destroyed:ee,unmounted:ke,render:k,renderTracked:I,renderTriggered:U,errorCaptured:D,serverPrefetch:te,expose:Re,inheritAttrs:Ye,components:Je,directives:un,filters:vo}=t;if(d&&Sd(d,n,null),o)for(let ne in o){let J=o[ne];M(J)&&(n[ne]=J.bind(r))}if(s){let ne=s.call(r,r);se(ne)&&(e.data=ns(ne))}if(ji=!0,i)for(let ne in i){let J=i[ne],Xe=M(J)?J.bind(r,r):M(J.get)?J.get.bind(r,r):ye,ks=!M(J)&&M(J.set)?J.set.bind(r):ye,hr=pp({get:Xe,set:ks});Object.defineProperty(n,ne,{enumerable:!0,configurable:!0,get:()=>hr.value,set:Bt=>hr.value=Bt})}if(a)for(let ne in a)wl(a[ne],n,r,ne);if(l){let ne=M(l)?l.call(r):l;Reflect.ownKeys(ne).forEach(J=>{$d(J,ne[J])})}p&&Ja(p,e,"c");function xe(ne,J){V(J)?J.forEach(Xe=>ne(Xe.bind(r))):J&&ne(J.bind(r))}if(xe(md,f),xe(_l,_),xe(El,b),xe(xl,$),xe(fd,j),xe(hd,le),xe(Ed,D),xe(_d,I),xe(bd,U),xe(vd,re),xe(qi,ke),xe(yd,te),V(Re))if(Re.length){let ne=e.exposed||(e.exposed={});Re.forEach(J=>{Object.defineProperty(ne,J,{get:()=>r[J],set:Xe=>r[J]=Xe})})}else e.exposed||(e.exposed={});k&&e.render===ye&&(e.render=k),Ye!=null&&(e.inheritAttrs=Ye),Je&&(e.components=Je),un&&(e.directives=un),te&&vl(e)}function Sd(e,t,r=ye){V(e)&&(e=Bi(e));for(let n in e){let s=e[n],i;se(s)?"default"in s?i=is(s.from||n,s.default,!0):i=is(s.from||n):i=is(s),me(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[n]=i}}function Ja(e,t,r){Le(V(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function wl(e,t,r,n){let s=n.includes(".")?Pl(r,n):()=>r[n];if(oe(e)){let i=t[e];M(i)&&os(s,i)}else if(M(e))os(s,e.bind(r));else if(se(e))if(V(e))e.forEach(i=>wl(i,t,r,n));else{let i=M(e.handler)?e.handler.bind(r):t[e.handler];M(i)&&os(s,i,e)}}function Yi(e){let t=e.type,{mixins:r,extends:n}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t),l;return a?l=a:!s.length&&!r&&!n?l=t:(l={},s.length&&s.forEach(d=>us(l,d,o,!0)),us(l,t,o)),se(t)&&i.set(t,l),l}function us(e,t,r,n=!1){let{mixins:s,extends:i}=t;i&&us(e,i,r,!0),s&&s.forEach(o=>us(e,o,r,!0));for(let o in t)if(!(n&&o==="expose")){let a=Cd[o]||r&&r[o];e[o]=a?a(e[o],t[o]):t[o]}return e}var Cd={data:Xa,props:Za,emits:Za,methods:qr,computed:qr,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:qr,directives:qr,watch:Td,provide:Xa,inject:Od};function Xa(e,t){return t?e?function(){return ae(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function Od(e,t){return qr(Bi(e),Bi(t))}function Bi(e){if(V(e)){let t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function qr(e,t){return e?ae(Object.create(null),e,t):t}function Za(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ae(Object.create(null),Ya(e),Ya(t??{})):t}function Td(e,t){if(!e)return t;if(!t)return e;let r=ae(Object.create(null),e);for(let n in t)r[n]=be(e[n],t[n]);return r}function Nl(){return{app:null,config:{isNativeTag:Ca,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ad=0;function kd(e,t){return function(n,s=null){M(n)||(n=ae({},n)),s!=null&&!se(s)&&(s=null);let i=Nl(),o=new WeakSet,a=[],l=!1,d=i.app={_uid:Ad++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:al,get config(){return i.config},set config(p){},use(p,...f){return o.has(p)||(p&&M(p.install)?(o.add(p),p.install(d,...f)):M(p)&&(o.add(p),p(d,...f))),d},mixin(p){return __VUE_OPTIONS_API__&&(i.mixins.includes(p)||i.mixins.push(p)),d},component(p,f){return f?(i.components[p]=f,d):i.components[p]},directive(p,f){return f?(i.directives[p]=f,d):i.directives[p]},mount(p,f,_){if(!l){let b=d._ceVNode||wt(n,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),f&&t?t(b,p):e(b,p,_),l=!0,d._container=p,p.__vue_app__=d,__VUE_PROD_DEVTOOLS__&&(d._instance=b.component,sd(d,al)),eo(b.component)}},onUnmount(p){a.push(p)},unmount(){l&&(Le(a,d._instance,16),e(null,d._container),__VUE_PROD_DEVTOOLS__&&(d._instance=null,id(d)),delete d._container.__vue_app__)},provide(p,f){return i.provides[p]=f,d},runWithContext(p){let f=cr;cr=d;try{return p()}finally{cr=f}}};return d}}var cr=null;function $d(e,t){if(Ee){let r=Ee.provides,n=Ee.parent&&Ee.parent.provides;n===r&&(r=Ee.provides=Object.create(n)),r[e]=t}}function is(e,t,r=!1){let n=Ee||qe;if(n||cr){let s=cr?cr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return r&&M(t)?t.call(n&&n.proxy):t}}var Sl={},Cl=()=>Object.create(Sl),Ol=e=>Object.getPrototypeOf(e)===Sl;function Dd(e,t,r,n=!1){let s={},i=Cl();e.propsDefaults=Object.create(null),Tl(e,t,s,i);for(let o in e.propsOptions[0])o in s||(s[o]=void 0);r?e.props=n?s:ja(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Rd(e,t,r,n){let{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=K(s),[l]=e.propsOptions,d=!1;if((n||o>0)&&!(o&16)){if(o&8){let p=e.vnode.dynamicProps;for(let f=0;f<p.length;f++){let _=p[f];if(ms(e.emitsOptions,_))continue;let b=t[_];if(l)if(z(i,_))b!==i[_]&&(i[_]=b,d=!0);else{let $=De(_);s[$]=Wi(l,a,$,b,e,!1)}else b!==i[_]&&(i[_]=b,d=!0)}}}else{Tl(e,t,s,i)&&(d=!0);let p;for(let f in a)(!t||!z(t,f)&&((p=st(f))===f||!z(t,p)))&&(l?r&&(r[f]!==void 0||r[p]!==void 0)&&(s[f]=Wi(l,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(let f in i)(!t||!z(t,f))&&(delete i[f],d=!0)}d&&Fe(e.attrs,"set","")}function Tl(e,t,r,n){let[s,i]=e.propsOptions,o=!1,a;if(t)for(let l in t){if(sr(l))continue;let d=t[l],p;s&&z(s,p=De(l))?!i||!i.includes(p)?r[p]=d:(a||(a={}))[p]=d:ms(e.emitsOptions,l)||(!(l in n)||d!==n[l])&&(n[l]=d,o=!0)}if(i){let l=K(r),d=a||Y;for(let p=0;p<i.length;p++){let f=i[p];r[f]=Wi(s,l,f,d[f],e,!z(d,f))}}return o}function Wi(e,t,r,n,s,i){let o=e[r];if(o!=null){let a=z(o,"default");if(a&&n===void 0){let l=o.default;if(o.type!==Function&&!o.skipFactory&&M(l)){let{propsDefaults:d}=s;if(r in d)n=d[r];else{let p=nn(s);n=d[r]=l.call(null,t),p()}}else n=l;s.ce&&s.ce._setProp(r,n)}o[0]&&(i&&!a?n=!1:o[1]&&(n===""||n===st(r))&&(n=!0))}return n}var Id=new WeakMap;function Al(e,t,r=!1){let n=__VUE_OPTIONS_API__&&r?Id:t.propsCache,s=n.get(e);if(s)return s;let i=e.props,o={},a=[],l=!1;if(__VUE_OPTIONS_API__&&!M(e)){let p=f=>{l=!0;let[_,b]=Al(f,t,!0);ae(o,_),b&&a.push(...b)};!r&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!i&&!l)return se(e)&&n.set(e,tr),tr;if(V(i))for(let p=0;p<i.length;p++){let f=De(i[p]);Qa(f)&&(o[f]=Y)}else if(i)for(let p in i){let f=De(p);if(Qa(f)){let _=i[p],b=o[f]=V(_)||M(_)?{type:_}:ae({},_),$=b.type,j=!1,le=!0;if(V($))for(let X=0;X<$.length;++X){let re=$[X],ee=M(re)&&re.name;if(ee==="Boolean"){j=!0;break}else ee==="String"&&(le=!1)}else j=M($)&&$.name==="Boolean";b[0]=j,b[1]=le,(j||z(b,"default"))&&a.push(f)}}let d=[o,a];return se(e)&&n.set(e,d),d}function Qa(e){return e[0]!=="$"&&!sr(e)}var Ji=e=>e[0]==="_"||e==="$stable",Xi=e=>V(e)?e.map(Ke):[Ke(e)],Vd=(e,t,r)=>{if(t._n)return t;let n=ud((...s)=>Xi(t(...s)),r);return n._c=!1,n},kl=(e,t,r)=>{let n=e._ctx;for(let s in e){if(Ji(s))continue;let i=e[s];if(M(i))t[s]=Vd(s,i,n);else if(i!=null){let o=Xi(i);t[s]=()=>o}}},$l=(e,t)=>{let r=Xi(t);e.slots.default=()=>r},Dl=(e,t,r)=>{for(let n in t)(r||!Ji(n))&&(e[n]=t[n])},Md=(e,t,r)=>{let n=e.slots=Cl();if(e.vnode.shapeFlag&32){let s=t.__;s&&Dt(n,"__",s,!0);let i=t._;i?(Dl(n,t,r),r&&Dt(n,"_",i,!0)):kl(t,n)}else t&&$l(e,t)},Pd=(e,t,r)=>{let{vnode:n,slots:s}=e,i=!0,o=Y;if(n.shapeFlag&32){let a=t._;a?r&&a===1?i=!1:Dl(s,t,r):(i=!t.$stable,kl(t,s)),o=t}else t&&($l(e,t),o={default:1});if(i)for(let a in s)!Ji(a)&&o[a]==null&&delete s[a]};function Ld(){let e=[];typeof __VUE_OPTIONS_API__!="boolean"&&(bt().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!="boolean"&&(bt().__VUE_PROD_DEVTOOLS__=!1),typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(bt().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}var Te=Xd;function Rl(e){return Ud(e)}function Ud(e,t){Ld();let r=bt();r.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&hl(r.__VUE_DEVTOOLS_GLOBAL_HOOK__,r);let{insert:n,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:d,setElementText:p,parentNode:f,nextSibling:_,setScopeId:b=ye,insertStaticContent:$}=e,j=(c,u,h,v=null,g=null,m=null,N=void 0,w=null,x=!!u.dynamicChildren)=>{if(c===u)return;c&&!Kr(c,u)&&(v=dn(c),pt(c,g,m,!0),c=null),u.patchFlag===-2&&(x=!1,u.dynamicChildren=null);let{type:y,ref:A,shapeFlag:S}=u;switch(y){case rn:le(c,u,h,v);break;case Lt:X(c,u,h,v);break;case Zr:c==null&&re(u,h,v,N);break;case Pe:un(c,u,h,v,g,m,N,w,x);break;default:S&1?I(c,u,h,v,g,m,N,w,x):S&6?vo(c,u,h,v,g,m,N,w,x):(S&64||S&128)&&y.process(c,u,h,v,g,m,N,w,x,Wt)}A!=null&&g?Yr(A,c&&c.ref,m,u||c,!u):A==null&&c&&c.ref!=null&&Yr(c.ref,null,m,c,!0)},le=(c,u,h,v)=>{if(c==null)n(u.el=a(u.children),h,v);else{let g=u.el=c.el;u.children!==c.children&&d(g,u.children)}},X=(c,u,h,v)=>{c==null?n(u.el=l(u.children||""),h,v):u.el=c.el},re=(c,u,h,v)=>{[c.el,c.anchor]=$(c.children,u,h,v,c.el,c.anchor)},ee=(c,u,h,v)=>{if(u.children!==c.children){let g=_(c.anchor);k(c),[u.el,u.anchor]=$(u.children,h,g,v)}else u.el=c.el,u.anchor=c.anchor},ke=({el:c,anchor:u},h,v)=>{let g;for(;c&&c!==u;)g=_(c),n(c,h,v),c=g;n(u,h,v)},k=({el:c,anchor:u})=>{let h;for(;c&&c!==u;)h=_(c),s(c),c=h;s(u)},I=(c,u,h,v,g,m,N,w,x)=>{u.type==="svg"?N="svg":u.type==="math"&&(N="mathml"),c==null?U(u,h,v,g,m,N,w,x):Re(c,u,g,m,N,w,x)},U=(c,u,h,v,g,m,N,w)=>{let x,y,{props:A,shapeFlag:S,transition:T,dirs:R}=c;if(x=c.el=o(c.type,m,A&&A.is,A),S&8?p(x,c.children):S&16&&te(c.children,x,null,v,g,Li(c,m),N,w),R&&Mt(c,null,v,"created"),D(x,c,c.scopeId,N,v),A){for(let Z in A)Z!=="value"&&!sr(Z)&&i(x,Z,null,A[Z],m,v);"value"in A&&i(x,"value",null,A.value,m),(y=A.onVnodeBeforeMount)&&We(y,v,c)}__VUE_PROD_DEVTOOLS__&&(Dt(x,"__vnode",c,!0),Dt(x,"__vueParentComponent",v,!0)),R&&Mt(c,null,v,"beforeMount");let B=Hd(g,T);B&&T.beforeEnter(x),n(x,u,h),((y=A&&A.onVnodeMounted)||B||R)&&Te(()=>{y&&We(y,v,c),B&&T.enter(x),R&&Mt(c,null,v,"mounted")},g)},D=(c,u,h,v,g)=>{if(h&&b(c,h),v)for(let m=0;m<v.length;m++)b(c,v[m]);if(g){let m=g.subTree;if(u===m||Ul(m.type)&&(m.ssContent===u||m.ssFallback===u)){let N=g.vnode;D(c,N,N.scopeId,N.slotScopeIds,g.parent)}}},te=(c,u,h,v,g,m,N,w,x=0)=>{for(let y=x;y<c.length;y++){let A=c[y]=w?Et(c[y]):Ke(c[y]);j(null,A,u,h,v,g,m,N,w)}},Re=(c,u,h,v,g,m,N)=>{let w=u.el=c.el;__VUE_PROD_DEVTOOLS__&&(w.__vnode=u);let{patchFlag:x,dynamicChildren:y,dirs:A}=u;x|=c.patchFlag&16;let S=c.props||Y,T=u.props||Y,R;if(h&&Pt(h,!1),(R=T.onVnodeBeforeUpdate)&&We(R,h,u,c),A&&Mt(u,c,h,"beforeUpdate"),h&&Pt(h,!0),(S.innerHTML&&T.innerHTML==null||S.textContent&&T.textContent==null)&&p(w,""),y?Ye(c.dynamicChildren,y,w,h,v,Li(u,g),m):N||Xe(c,u,w,null,h,v,Li(u,g),m,!1),x>0){if(x&16)Je(w,S,T,h,g);else if(x&2&&S.class!==T.class&&i(w,"class",null,T.class,g),x&4&&i(w,"style",S.style,T.style,g),x&8){let B=u.dynamicProps;for(let Z=0;Z<B.length;Z++){let q=B[Z],we=S[q],ge=T[q];(ge!==we||q==="value")&&i(w,q,we,ge,g,h)}}x&1&&c.children!==u.children&&p(w,u.children)}else!N&&y==null&&Je(w,S,T,h,g);((R=T.onVnodeUpdated)||A)&&Te(()=>{R&&We(R,h,u,c),A&&Mt(u,c,h,"updated")},v)},Ye=(c,u,h,v,g,m,N)=>{for(let w=0;w<u.length;w++){let x=c[w],y=u[w],A=x.el&&(x.type===Pe||!Kr(x,y)||x.shapeFlag&198)?f(x.el):h;j(x,y,A,null,v,g,m,N,!0)}},Je=(c,u,h,v,g)=>{if(u!==h){if(u!==Y)for(let m in u)!sr(m)&&!(m in h)&&i(c,m,u[m],null,g,v);for(let m in h){if(sr(m))continue;let N=h[m],w=u[m];N!==w&&m!=="value"&&i(c,m,w,N,g,v)}"value"in h&&i(c,"value",u.value,h.value,g)}},un=(c,u,h,v,g,m,N,w,x)=>{let y=u.el=c?c.el:a(""),A=u.anchor=c?c.anchor:a(""),{patchFlag:S,dynamicChildren:T,slotScopeIds:R}=u;R&&(w=w?w.concat(R):R),c==null?(n(y,h,v),n(A,h,v),te(u.children||[],h,A,g,m,N,w,x)):S>0&&S&64&&T&&c.dynamicChildren?(Ye(c.dynamicChildren,T,h,g,m,N,w),(u.key!=null||g&&u===g.subTree)&&Il(c,u,!0)):Xe(c,u,h,A,g,m,N,w,x)},vo=(c,u,h,v,g,m,N,w,x)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?g.ctx.activate(u,h,v,N,x):As(u,h,v,g,m,N,x):xe(c,u,x)},As=(c,u,h,v,g,m,N)=>{let w=c.component=op(c,v,g);if(yl(c)&&(w.ctx.renderer=Wt),ap(w,!1,N),w.asyncDep){if(g&&g.registerDep(w,ne,N),!c.el){let x=w.subTree=wt(Lt);X(null,x,u,h)}}else ne(w,c,u,h,g,m,N)},xe=(c,u,h)=>{let v=u.component=c.component;if(Yd(c,u,h))if(v.asyncDep&&!v.asyncResolved){J(v,u,h);return}else v.next=u,v.update();else u.el=c.el,v.vnode=u},ne=(c,u,h,v,g,m,N)=>{let w=()=>{if(c.isMounted){let{next:S,bu:T,u:R,parent:B,vnode:Z}=c;{let Ce=Vl(c);if(Ce){S&&(S.el=Z.el,J(c,S,N)),Ce.asyncDep.then(()=>{c.isUnmounted||w()});return}}let q=S,we;Pt(c,!1),S?(S.el=Z.el,J(c,S,N)):S=Z,T&&Pr(T),(we=S.props&&S.props.onVnodeBeforeUpdate)&&We(we,B,S,Z),Pt(c,!0);let ge=Ui(c),Ie=c.subTree;c.subTree=ge,j(Ie,ge,f(Ie.el),dn(Ie),c,g,m),S.el=ge.el,q===null&&Jd(c,ge.el),R&&Te(R,g),(we=S.props&&S.props.onVnodeUpdated)&&Te(()=>We(we,B,S,Z),g),__VUE_PROD_DEVTOOLS__&&gl(c)}else{let S,{el:T,props:R}=u,{bm:B,m:Z,parent:q,root:we,type:ge}=c,Ie=Jr(u);if(Pt(c,!1),B&&Pr(B),!Ie&&(S=R&&R.onVnodeBeforeMount)&&We(S,q,u),Pt(c,!0),T&&Rs){let Ce=()=>{c.subTree=Ui(c),Rs(T,c.subTree,c,g,null)};Ie&&ge.__asyncHydrate?ge.__asyncHydrate(T,c,Ce):Ce()}else{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(ge);let Ce=c.subTree=Ui(c);j(null,Ce,h,v,c,g,m),u.el=Ce.el}if(Z&&Te(Z,g),!Ie&&(S=R&&R.onVnodeMounted)){let Ce=u;Te(()=>We(S,q,Ce),g)}(u.shapeFlag&256||q&&Jr(q.vnode)&&q.vnode.shapeFlag&256)&&c.a&&Te(c.a,g),c.isMounted=!0,__VUE_PROD_DEVTOOLS__&&od(c),u=h=v=null}};c.scope.on();let x=c.effect=new Br(w);c.scope.off();let y=c.update=x.run.bind(x),A=c.job=x.runIfDirty.bind(x);A.i=c,A.id=c.uid,x.scheduler=()=>Ki(A),Pt(c,!0),y()},J=(c,u,h)=>{u.component=c;let v=c.vnode.props;c.vnode=u,c.next=null,Rd(c,u.props,v,h),Pd(c,u.children,h),je(),qa(c),Be()},Xe=(c,u,h,v,g,m,N,w,x=!1)=>{let y=c&&c.children,A=c?c.shapeFlag:0,S=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){hr(y,S,h,v,g,m,N,w,x);return}else if(T&256){ks(y,S,h,v,g,m,N,w,x);return}}R&8?(A&16&&gr(y,g,m),S!==y&&p(h,S)):A&16?R&16?hr(y,S,h,v,g,m,N,w,x):gr(y,g,m,!0):(A&8&&p(h,""),R&16&&te(S,h,v,g,m,N,w,x))},ks=(c,u,h,v,g,m,N,w,x)=>{c=c||tr,u=u||tr;let y=c.length,A=u.length,S=Math.min(y,A),T;for(T=0;T<S;T++){let R=u[T]=x?Et(u[T]):Ke(u[T]);j(c[T],R,h,null,g,m,N,w,x)}y>A?gr(c,g,m,!0,!1,S):te(u,h,v,g,m,N,w,x,S)},hr=(c,u,h,v,g,m,N,w,x)=>{let y=0,A=u.length,S=c.length-1,T=A-1;for(;y<=S&&y<=T;){let R=c[y],B=u[y]=x?Et(u[y]):Ke(u[y]);if(Kr(R,B))j(R,B,h,null,g,m,N,w,x);else break;y++}for(;y<=S&&y<=T;){let R=c[S],B=u[T]=x?Et(u[T]):Ke(u[T]);if(Kr(R,B))j(R,B,h,null,g,m,N,w,x);else break;S--,T--}if(y>S){if(y<=T){let R=T+1,B=R<A?u[R].el:v;for(;y<=T;)j(null,u[y]=x?Et(u[y]):Ke(u[y]),h,B,g,m,N,w,x),y++}}else if(y>T)for(;y<=S;)pt(c[y],g,m,!0),y++;else{let R=y,B=y,Z=new Map;for(y=B;y<=T;y++){let Oe=u[y]=x?Et(u[y]):Ke(u[y]);Oe.key!=null&&Z.set(Oe.key,y)}let q,we=0,ge=T-B+1,Ie=!1,Ce=0,mr=new Array(ge);for(y=0;y<ge;y++)mr[y]=0;for(y=R;y<=S;y++){let Oe=c[y];if(we>=ge){pt(Oe,g,m,!0);continue}let He;if(Oe.key!=null)He=Z.get(Oe.key);else for(q=B;q<=T;q++)if(mr[q-B]===0&&Kr(Oe,u[q])){He=q;break}He===void 0?pt(Oe,g,m,!0):(mr[He-B]=y+1,He>=Ce?Ce=He:Ie=!0,j(Oe,u[He],h,null,g,m,N,w,x),we++)}let _o=Ie?Fd(mr):tr;for(q=_o.length-1,y=ge-1;y>=0;y--){let Oe=B+y,He=u[Oe],Eo=Oe+1<A?u[Oe+1].el:v;mr[y]===0?j(null,He,h,Eo,g,m,N,w,x):Ie&&(q<0||y!==_o[q]?Bt(He,h,Eo,2):q--)}}},Bt=(c,u,h,v,g=null)=>{let{el:m,type:N,transition:w,children:x,shapeFlag:y}=c;if(y&6){Bt(c.component.subTree,u,h,v);return}if(y&128){c.suspense.move(u,h,v);return}if(y&64){N.move(c,u,h,Wt);return}if(N===Pe){n(m,u,h);for(let S=0;S<x.length;S++)Bt(x[S],u,h,v);n(c.anchor,u,h);return}if(N===Zr){ke(c,u,h);return}if(v!==2&&y&1&&w)if(v===0)w.beforeEnter(m),n(m,u,h),Te(()=>w.enter(m),g);else{let{leave:S,delayLeave:T,afterLeave:R}=w,B=()=>{c.ctx.isUnmounted?s(m):n(m,u,h)},Z=()=>{S(m,()=>{B(),R&&R()})};T?T(m,B,Z):Z()}else n(m,u,h)},pt=(c,u,h,v=!1,g=!1)=>{let{type:m,props:N,ref:w,children:x,dynamicChildren:y,shapeFlag:A,patchFlag:S,dirs:T,cacheIndex:R}=c;if(S===-2&&(g=!1),w!=null&&(je(),Yr(w,null,h,c,!0),Be()),R!=null&&(u.renderCache[R]=void 0),A&256){u.ctx.deactivate(c);return}let B=A&1&&T,Z=!Jr(c),q;if(Z&&(q=N&&N.onVnodeBeforeUnmount)&&We(q,u,c),A&6)dc(c.component,h,v);else{if(A&128){c.suspense.unmount(h,v);return}B&&Mt(c,null,u,"beforeUnmount"),A&64?c.type.remove(c,u,h,Wt,v):y&&!y.hasOnce&&(m!==Pe||S>0&&S&64)?gr(y,u,h,!1,!0):(m===Pe&&S&384||!g&&A&16)&&gr(x,u,h),v&&yo(c)}(Z&&(q=N&&N.onVnodeUnmounted)||B)&&Te(()=>{q&&We(q,u,c),B&&Mt(c,null,u,"unmounted")},h)},yo=c=>{let{type:u,el:h,anchor:v,transition:g}=c;if(u===Pe){uc(h,v);return}if(u===Zr){k(c);return}let m=()=>{s(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){let{leave:N,delayLeave:w}=g,x=()=>N(h,m);w?w(c.el,m,x):x()}else m()},uc=(c,u)=>{let h;for(;c!==u;)h=_(c),s(c),c=h;s(u)},dc=(c,u,h)=>{let{bum:v,scope:g,job:m,subTree:N,um:w,m:x,a:y,parent:A,slots:{__:S}}=c;el(x),el(y),v&&Pr(v),A&&V(S)&&S.forEach(T=>{A.renderCache[T]=void 0}),g.stop(),m&&(m.flags|=8,pt(N,c,u,h)),w&&Te(w,u),Te(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve()),__VUE_PROD_DEVTOOLS__&&ld(c)},gr=(c,u,h,v=!1,g=!1,m=0)=>{for(let N=m;N<c.length;N++)pt(c[N],u,h,v,g)},dn=c=>{if(c.shapeFlag&6)return dn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();let u=_(c.anchor||c.el),h=u&&u[dd];return h?_(h):u},$s=!1,bo=(c,u,h)=>{c==null?u._vnode&&pt(u._vnode,null,null,!0):j(u._vnode||null,c,u,null,null,null,h),u._vnode=c,$s||($s=!0,qa(),pl(),$s=!1)},Wt={p:j,um:pt,m:Bt,r:yo,mt:As,mc:te,pc:Xe,pbc:Ye,n:dn,o:e},Ds,Rs;return t&&([Ds,Rs]=t(Wt)),{render:bo,hydrate:Ds,createApp:kd(bo,Ds)}}function Li({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function Pt({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Il(e,t,r=!1){let n=e.children,s=t.children;if(V(n)&&V(s))for(let i=0;i<n.length;i++){let o=n[i],a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Et(s[i]),a.el=o.el),!r&&a.patchFlag!==-2&&Il(o,a)),a.type===rn&&(a.el=o.el),a.type===Lt&&!a.el&&(a.el=o.el)}}function Fd(e){let t=e.slice(),r=[0],n,s,i,o,a,l=e.length;for(n=0;n<l;n++){let d=e[n];if(d!==0){if(s=r[r.length-1],e[s]<d){t[n]=s,r.push(n);continue}for(i=0,o=r.length-1;i<o;)a=i+o>>1,e[r[a]]<d?i=a+1:o=a;d<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,o=r[i-1];i-- >0;)r[i]=o,o=t[o];return r}function Vl(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Vl(t)}function el(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}var jd=Symbol.for("v-scx"),Bd=()=>{{let e=is(jd);return e}};function os(e,t,r){return Ml(e,t,r)}function Ml(e,t,r=Y){let{immediate:n,deep:s,flush:i,once:o}=r,a=ae({},r),l=t&&n||!t&&i!=="post",d;if(en){if(i==="sync"){let b=Bd();d=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){let b=()=>{};return b.stop=ye,b.resume=ye,b.pause=ye,b}}let p=Ee;a.call=(b,$,j)=>Le(b,p,$,j);let f=!1;i==="post"?a.scheduler=b=>{Te(b,p&&p.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(b,$)=>{$?b():Ki(b)}),a.augmentJob=b=>{t&&(b.flags|=4),f&&(b.flags|=2,p&&(b.id=p.uid,b.i=p))};let _=Ga(e,t,a);return en&&(d?d.push(_):l&&_()),_}function Wd(e,t,r){let n=this.proxy,s=oe(e)?e.includes(".")?Pl(n,e):()=>n[e]:e.bind(n,n),i;M(t)?i=t:(i=t.handler,r=t);let o=nn(this),a=Ml(s,i.bind(n),r);return o(),a}function Pl(e,t){let r=t.split(".");return()=>{let n=e;for(let s=0;s<r.length&&n;s++)n=n[r[s]];return n}}var zd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${st(t)}Modifiers`];function Kd(e,t,...r){if(e.isUnmounted)return;let n=e.vnode.props||Y,s=r,i=t.startsWith("update:"),o=i&&zd(n,t.slice(7));o&&(o.trim&&(s=r.map(p=>oe(p)?p.trim():p)),o.number&&(s=r.map(_i))),__VUE_PROD_DEVTOOLS__&&cd(e,t,s);let a,l=n[a=Mr(t)]||n[a=Mr(De(t))];!l&&i&&(l=n[a=Mr(st(t))]),l&&Le(l,e,6,s);let d=n[a+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Le(d,e,6,s)}}function Ll(e,t,r=!1){let n=t.emitsCache,s=n.get(e);if(s!==void 0)return s;let i=e.emits,o={},a=!1;if(__VUE_OPTIONS_API__&&!M(e)){let l=d=>{let p=Ll(d,t,!0);p&&(a=!0,ae(o,p))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(se(e)&&n.set(e,null),null):(V(i)?i.forEach(l=>o[l]=null):ae(o,i),se(e)&&n.set(e,o),o)}function ms(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,st(t))||z(e,t))}function Ui(e){let{type:t,vnode:r,proxy:n,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:d,renderCache:p,props:f,data:_,setupState:b,ctx:$,inheritAttrs:j}=e,le=cs(e),X,re;try{if(r.shapeFlag&4){let k=s||n,I=k;X=Ke(d.call(I,k,p,f,b,_,$)),re=a}else{let k=t;X=Ke(k.length>1?k(f,{attrs:a,slots:o,emit:l}):k(f,null)),re=t.props?a:Gd(a)}}catch(k){Zd.length=0,ps(k,e,1),X=wt(Lt)}let ee=X,ke;if(re&&j!==!1){let k=Object.keys(re),{shapeFlag:I}=ee;k.length&&I&7&&(i&&k.some(Rr)&&(re=qd(re,i)),ee=ur(ee,re,!1,!0))}return r.dirs&&(ee=ur(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(r.dirs):r.dirs),r.transition&&hs(ee,r.transition),X=ee,cs(le),X}var Gd=e=>{let t;for(let r in e)(r==="class"||r==="style"||rr(r))&&((t||(t={}))[r]=e[r]);return t},qd=(e,t)=>{let r={};for(let n in e)(!Rr(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Yd(e,t,r){let{props:n,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,d=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?tl(n,o,d):!!o;if(l&8){let p=t.dynamicProps;for(let f=0;f<p.length;f++){let _=p[f];if(o[_]!==n[_]&&!ms(d,_))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?tl(n,o,d):!0:!!o;return!1}function tl(e,t,r){let n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let s=0;s<n.length;s++){let i=n[s];if(t[i]!==e[i]&&!ms(r,i))return!0}return!1}function Jd({vnode:e,parent:t},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}var Ul=e=>e.__isSuspense;function Xd(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):dl(e)}var Pe=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Zd=[],xt=null;var Zi=1;function rl(e,t=!1){Zi+=e,e<0&&xt&&t&&(xt.hasOnce=!0)}function Hl(e){return e?e.__v_isVNode===!0:!1}function Kr(e,t){return e.type===t.type&&e.key===t.key}var Fl=({key:e})=>e??null,as=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||me(e)||M(e)?{i:qe,r:e,k:t,f:!!r}:e:null);function Qd(e,t=null,r=null,n=0,s=null,i=e===Pe?0:1,o=!1,a=!1){let l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fl(t),ref:t&&as(t),scopeId:ml,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return a?(Qi(l,r),i&128&&e.normalize(l)):r&&(l.shapeFlag|=oe(r)?8:16),Zi>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}var wt=ep;function ep(e,t=null,r=null,n=0,s=null,i=!1){if((!e||e===xd)&&(e=Lt),Hl(e)){let a=ur(e,t,!0);return r&&Qi(a,r),Zi>0&&!i&&xt&&(a.shapeFlag&6?xt[xt.indexOf(e)]=a:xt.push(a)),a.patchFlag=-2,a}if(dp(e)&&(e=e.__vccOpts),t){t=tp(t);let{class:a,style:l}=t;a&&!oe(a)&&(t.class=Ur(a)),se(l)&&(ss(l)&&!V(l)&&(l=ae({},l)),t.style=Lr(l))}let o=oe(e)?1:Ul(e)?128:pd(e)?64:se(e)?4:M(e)?2:0;return Qd(e,t,r,n,s,o,i,!0)}function tp(e){return e?ss(e)||Ol(e)?ae({},e):e:null}function ur(e,t,r=!1,n=!1){let{props:s,ref:i,patchFlag:o,children:a,transition:l}=e,d=t?np(s||{},t):s,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Fl(d),ref:t&&t.ref?r&&i?V(i)?i.concat(as(t)):[i,as(t)]:as(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&hs(p,l.clone(p)),p}function rp(e=" ",t=0){return wt(rn,null,e,t)}function Ke(e){return e==null||typeof e=="boolean"?wt(Lt):V(e)?wt(Pe,null,e.slice()):Hl(e)?Et(e):wt(rn,null,String(e))}function Et(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ur(e)}function Qi(e,t){let r=0,{shapeFlag:n}=e;if(t==null)t=null;else if(V(t))r=16;else if(typeof t=="object")if(n&65){let s=t.default;s&&(s._c&&(s._d=!1),Qi(e,s()),s._c&&(s._d=!0));return}else{r=32;let s=t._;!s&&!Ol(t)?t._ctx=qe:s===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:qe},r=32):(t=String(t),n&64?(r=16,t=[rp(t)]):r=8);e.children=t,e.shapeFlag|=r}function np(...e){let t={};for(let r=0;r<e.length;r++){let n=e[r];for(let s in n)if(s==="class")t.class!==n.class&&(t.class=Ur([t.class,n.class]));else if(s==="style")t.style=Lr([t.style,n.style]);else if(rr(s)){let i=t[s],o=n[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=n[s])}return t}function We(e,t,r,n=null){Le(e,t,7,[r,n])}var sp=Nl(),ip=0;function op(e,t,r){let n=e.type,s=(t?t.appContext:e.appContext)||sp,i={uid:ip++,vnode:e,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Al(n,s),emitsOptions:Ll(n,s),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:n.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kd.bind(null,i),e.ce&&e.ce(i),i}var Ee=null;var ds,zi;{let e=bt(),t=(r,n)=>{let s;return(s=e[r])||(s=e[r]=[]),s.push(n),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ds=t("__VUE_INSTANCE_SETTERS__",r=>Ee=r),zi=t("__VUE_SSR_SETTERS__",r=>en=r)}var nn=e=>{let t=Ee;return ds(e),e.scope.on(),()=>{e.scope.off(),ds(t)}},nl=()=>{Ee&&Ee.scope.off(),ds(null)};function jl(e){return e.vnode.shapeFlag&4}var en=!1;function ap(e,t=!1,r=!1){t&&zi(t);let{props:n,children:s}=e.vnode,i=jl(e);Dd(e,n,i,t),Md(e,s,r||t);let o=i?lp(e,t):void 0;return t&&zi(!1),o}function lp(e,t){var r;let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wd);let{setup:s}=n;if(s){je();let i=e.setupContext=s.length>1?up(e):null,o=nn(e),a=tn(s,e,0,[e.props,i]),l=vi(a);if(Be(),o(),(l||e.sp)&&!Jr(e)&&vl(e),l){if(a.then(nl,nl),t)return a.then(d=>{sl(e,d,t)}).catch(d=>{ps(d,e,0)});e.asyncDep=a}else sl(e,a,t)}else Bl(e,t)}function sl(e,t,r){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(__VUE_PROD_DEVTOOLS__&&(e.devtoolsRawSetupState=t),e.setupState=Mi(t)),Bl(e,r)}var il,ol;function Bl(e,t,r){let n=e.type;if(!e.render){if(!t&&il&&!n.render){let s=n.template||__VUE_OPTIONS_API__&&Yi(e).template;if(s){let{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=n,d=ae(ae({isCustomElement:i,delimiters:a},o),l);n.render=il(s,d)}}e.render=n.render||ye,ol&&ol(e)}if(__VUE_OPTIONS_API__){let s=nn(e);je();try{Nd(e)}finally{Be(),s()}}}var cp={get(e,t){return fe(e,"get",""),e[t]}};function up(e){let t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,cp),slots:e.slots,emit:e.emit,expose:t}}function eo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Mi(Wa(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Xr)return Xr[r](e)},has(t,r){return r in t||r in Xr}})):e.proxy}function dp(e){return M(e)&&"__vccOpts"in e}var pp=(e,t)=>Ka(e,t,en);var al="3.5.17";var no,Wl=typeof window<"u"&&window.trustedTypes;if(Wl)try{no=Wl.createPolicy("vue",{createHTML:e=>e})}catch{}var rc=no?e=>no.createHTML(e):e=>e,fp="http://www.w3.org/2000/svg",hp="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,zl=ct&&ct.createElement("template"),gp={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{let s=t==="svg"?ct.createElementNS(fp,e):t==="mathml"?ct.createElementNS(hp,e):r?ct.createElement(e,{is:r}):ct.createElement(e);return e==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:e=>ct.createTextNode(e),createComment:e=>ct.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ct.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,s,i){let o=r?r.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),r),!(s===i||!(s=s.nextSibling)););else{zl.innerHTML=rc(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);let a=zl.content;if(n==="svg"||n==="mathml"){let l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,r)}return[o?o.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}};var mp=Symbol("_vtc");function vp(e,t,r){let n=e[mp];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}var Kl=Symbol("_vod"),yp=Symbol("_vsh");var bp=Symbol("");var _p=/(^|;)\s*display\s*:/;function Ep(e,t,r){let n=e.style,s=oe(r),i=!1;if(r&&!s){if(t)if(oe(t))for(let o of t.split(";")){let a=o.slice(0,o.indexOf(":")).trim();r[a]==null&&vs(n,a,"")}else for(let o in t)r[o]==null&&vs(n,o,"");for(let o in r)o==="display"&&(i=!0),vs(n,o,r[o])}else if(s){if(t!==r){let o=n[bp];o&&(r+=";"+o),n.cssText=r,i=_p.test(r)}}else t&&e.removeAttribute("style");Kl in e&&(e[Kl]=i?n.display:"",e[yp]&&(n.display="none"))}var Gl=/\s*!important$/;function vs(e,t,r){if(V(r))r.forEach(n=>vs(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{let n=xp(e,t);Gl.test(r)?e.setProperty(st(n),r.replace(Gl,""),"important"):e[n]=r}}var ql=["Webkit","Moz","ms"],to={};function xp(e,t){let r=to[t];if(r)return r;let n=De(t);if(n!=="filter"&&n in e)return to[t]=n;n=Vr(n);for(let s=0;s<ql.length;s++){let i=ql[s]+n;if(i in e)return to[t]=i}return t}var Yl="http://www.w3.org/1999/xlink";function Jl(e,t,r,n,s,i=Ta(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Yl,t.slice(6,t.length)):e.setAttributeNS(Yl,t,r):r==null||i&&!Kn(r)?e.removeAttribute(t):e.setAttribute(t,i?"":nt(r)?String(r):r)}function Xl(e,t,r,n,s){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?rc(r):r);return}let i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){let a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(a!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let o=!1;if(r===""||r==null){let a=typeof e[t];a==="boolean"?r=Kn(r):r==null&&a==="string"?(r="",o=!0):a==="number"&&(r=0,o=!0)}try{e[t]=r}catch{}o&&e.removeAttribute(s||t)}function wp(e,t,r,n){e.addEventListener(t,r,n)}function Np(e,t,r,n){e.removeEventListener(t,r,n)}var Zl=Symbol("_vei");function Sp(e,t,r,n,s=null){let i=e[Zl]||(e[Zl]={}),o=i[t];if(n&&o)o.value=n;else{let[a,l]=Cp(t);if(n){let d=i[t]=Ap(n,s);wp(e,a,d,l)}else o&&(Np(e,a,o,l),i[t]=void 0)}}var Ql=/(?:Once|Passive|Capture)$/;function Cp(e){let t;if(Ql.test(e)){t={};let n;for(;n=e.match(Ql);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):st(e.slice(2)),t]}var ro=0,Op=Promise.resolve(),Tp=()=>ro||(Op.then(()=>ro=0),ro=Date.now());function Ap(e,t){let r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;Le(kp(n,r.value),t,5,[n])};return r.value=e,r.attached=Tp(),r}function kp(e,t){if(V(t)){let r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}var ec=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$p=(e,t,r,n,s,i)=>{let o=s==="svg";t==="class"?vp(e,n,o):t==="style"?Ep(e,r,n):rr(t)?Rr(t)||Sp(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Dp(e,t,n,o))?(Xl(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Jl(e,t,n,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!oe(n))?Xl(e,De(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Jl(e,t,n,o))};function Dp(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&ec(t)&&M(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){let s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ec(t)&&oe(r)?!1:t in e}var iy=Symbol("_moveCb"),oy=Symbol("_enterCb");var ay=Symbol("_assign");var Rp=ae({patchProp:$p},gp),tc;function Ip(){return tc||(tc=Rl(Rp))}var nc=(...e)=>{let t=Ip().createApp(...e),{mount:r}=t;return t.mount=n=>{let s=Mp(n);if(!s)return;let i=t._component;!M(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");let o=r(s,!1,Vp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Vp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Mp(e){return oe(e)?document.querySelector(e):e}var so=class{constructor(t){this.vueApp=null;this.container=null;this.isVisible=!1;this.state=t}mount(t){this.container=t,this.vueApp=nc({data(){return{visible:!1,activeTab:0,settings:{aiConfig:"smart",expandAtOrigin:!1,sentenceSmallMargin:!1,enableEarcons:!1,checkedLanguages:["chineseWithSingleRowKeyboard"],persona:"",initialPhrases:[],voiceName:"",voiceSpeakingRate:0,voicePitch:0},availableVoices:[],tabs:[{name:"\u901A\u7528",id:"general"},{name:"\u914D\u7F6E",id:"profile"},{name:"\u8BED\u97F3",id:"voice"}],availableLanguages:{chineseWithSingleRowKeyboard:{name:"\u4E2D\u6587\u5355\u884C\u952E\u76D8"},englishWithSingleRowKeyboard:{name:"\u82F1\u6587\u5355\u884C\u952E\u76D8"}}}},computed:{initialPhrasesText:{get(){return this.settings.initialPhrases.join(`
`)},set(r){this.settings.initialPhrases=r.split(`
`).filter(n=>n.trim())}}},methods:{updateSetting(r,n){this.settings[r]=n,this.emitSettingsUpdate()},emitSettingsUpdate(){let r=new CustomEvent("settings-update",{detail:{...this.settings},bubbles:!0});this.$el.dispatchEvent(r)},updateInitialPhrases(r){let s=r.target.value.split(`
`).filter(i=>i.trim());this.updateSetting("initialPhrases",s)},closeDialog(){this.visible=!1;let r=new CustomEvent("settings-close",{bubbles:!0});this.$el.dispatchEvent(r)},getAvailableVoices(){let r=window.speechSynthesis.getVoices();this.availableVoices=r.filter(n=>n.lang.startsWith("zh")||n.lang.startsWith("en"))},show(){this.visible=!0},hide(){this.visible=!1},updateSettings(r){Object.assign(this.settings,r)}},mounted(){this.getAvailableVoices(),window.speechSynthesis.addEventListener("voiceschanged",this.getAvailableVoices)},template:`
        <div class="vue-settings-panel">
          <!-- \u8BBE\u7F6E\u5BF9\u8BDD\u6846 -->
          <div v-if="visible" class="settings-dialog" @click.self="closeDialog">
            <div class="dialog-content">
              <!-- \u6807\u7B7E\u9875\u5BFC\u822A -->
              <div class="tabs-container">
                <div class="tabs">
                  <button 
                    v-for="(tab, index) in tabs" 
                    :key="index"
                    :class="['tab', { active: activeTab === index }]"
                    @click="activeTab = index"
                  >
                    {{ tab.name }}
                  </button>
                </div>
              </div>

              <!-- \u8BBE\u7F6E\u5185\u5BB9 -->
              <div class="settings-content">
                <!-- \u901A\u7528\u8BBE\u7F6E -->
                <div v-if="activeTab === 0" class="settings-section">
                  <div class="form-section">
                    <label>AI\u6A21\u5F0F</label>
                    <select v-model="settings.aiConfig" @change="updateSetting('aiConfig', settings.aiConfig)">
                      <option value="fast">\u5FEB\u901F</option>
                      <option value="smart">\u667A\u80FD</option>
                      <option value="classic">\u7ECF\u5178</option>
                    </select>
                  </div>

                  <div class="form-section">
                    <label class="switch-label">
                      <span>\u603B\u662F\u5728\u539F\u70B9\u5C55\u5F00</span>
                      <input 
                        type="checkbox" 
                        v-model="settings.expandAtOrigin"
                        @change="updateSetting('expandAtOrigin', settings.expandAtOrigin)"
                      >
                    </label>
                  </div>

                  <div class="form-section">
                    <label class="switch-label">
                      <span>\u4F7F\u7528\u8F83\u5C0F\u53E5\u5B50\u8FB9\u8DDD</span>
                      <input 
                        type="checkbox" 
                        v-model="settings.sentenceSmallMargin"
                        @change="updateSetting('sentenceSmallMargin', settings.sentenceSmallMargin)"
                      >
                    </label>
                  </div>

                  <div class="form-section">
                    <label class="switch-label">
                      <span>\u542F\u7528\u63D0\u793A\u97F3</span>
                      <input 
                        type="checkbox" 
                        v-model="settings.enableEarcons"
                        @change="updateSetting('enableEarcons', settings.enableEarcons)"
                      >
                    </label>
                  </div>

                  <div class="form-section">
                    <label>\u8BED\u8A00\u9009\u62E9</label>
                    <div class="language-select">
                      <div 
                        v-for="(lang, key) in availableLanguages" 
                        :key="key"
                        class="language-option"
                      >
                        <span>{{ lang.name }}</span>
                        <input 
                          type="checkbox" 
                          :value="key"
                          v-model="settings.checkedLanguages"
                          @change="updateSetting('checkedLanguages', settings.checkedLanguages)"
                          :disabled="settings.checkedLanguages.length === 1 && settings.checkedLanguages.includes(key)"
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- \u914D\u7F6E\u8BBE\u7F6E -->
                <div v-if="activeTab === 1" class="settings-section">
                  <div class="form-section">
                    <label>\u89D2\u8272\u8BBE\u5B9A</label>
                    <textarea 
                      v-model="settings.persona"
                      @input="updateSetting('persona', settings.persona)"
                      rows="5"
                      placeholder="\u8F93\u5165\u89D2\u8272\u8BBE\u5B9A..."
                    ></textarea>
                  </div>

                  <div class="form-section">
                    <label>\u521D\u59CB\u77ED\u8BED</label>
                    <textarea 
                      v-model="initialPhrasesText"
                      @input="updateInitialPhrases"
                      rows="3"
                      placeholder="\u6BCF\u884C\u4E00\u4E2A\u77ED\u8BED..."
                    ></textarea>
                  </div>
                </div>

                <!-- \u8BED\u97F3\u8BBE\u7F6E -->
                <div v-if="activeTab === 2" class="settings-section">
                  <div class="form-section">
                    <label>TTS\u8BED\u97F3</label>
                    <select v-model="settings.voiceName" @change="updateSetting('voiceName', settings.voiceName)">
                      <option value="">\u9ED8\u8BA4</option>
                      <option 
                        v-for="voice in availableVoices" 
                        :key="voice.name"
                        :value="voice.name"
                      >
                        {{ voice.name }}
                      </option>
                    </select>
                  </div>

                  <div class="form-section">
                    <label>\u8BED\u901F: {{ settings.voiceSpeakingRate }}</label>
                    <input 
                      type="range" 
                      min="-10" 
                      max="10" 
                      v-model.number="settings.voiceSpeakingRate"
                      @input="updateSetting('voiceSpeakingRate', settings.voiceSpeakingRate)"
                      class="slider"
                    >
                  </div>

                  <div class="form-section">
                    <label>\u97F3\u8C03: {{ settings.voicePitch }}</label>
                    <input 
                      type="range" 
                      min="-10" 
                      max="10" 
                      v-model.number="settings.voicePitch"
                      @input="updateSetting('voicePitch', settings.voicePitch)"
                      class="slider"
                    >
                  </div>
                </div>
              </div>

              <!-- \u64CD\u4F5C\u6309\u94AE -->
              <div class="dialog-actions">
                <button @click="closeDialog" class="btn-primary">\u786E\u5B9A</button>
              </div>
            </div>
          </div>
        </div>
      `}),this.addStyles(),this.vueApp.mount(t),t.addEventListener("settings-update",r=>{let n=r;this.updateStateFromSettings(n.detail)}),t.addEventListener("settings-close",()=>{this.hide(),t.dispatchEvent(new CustomEvent("ok-click",{bubbles:!0,composed:!0}))})}addStyles(){if(document.getElementById("vue-settings-styles"))return;let t=document.createElement("style");t.id="vue-settings-styles",t.textContent=`
      .vue-settings-panel {
        font-family: 'Noto Sans JP', 'Roboto', sans-serif;
      }

      .settings-dialog {
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
      }

      .dialog-content {
        background: white;
        border-radius: 8px;
        width: 500px;
        max-height: 600px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        overflow: hidden;
      }

      .tabs-container {
        border-bottom: 1px solid #e0e0e0;
      }

      .tabs {
        display: flex;
      }

      .tab {
        flex: 1;
        padding: 16px;
        border: none;
        background: transparent;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.2s ease;
      }

      .tab:hover {
        background: #f5f5f5;
      }

      .tab.active {
        background: #1976d2;
        color: white;
      }

      .settings-content {
        padding: 24px;
        max-height: 400px;
        overflow-y: auto;
      }

      .settings-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .form-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .form-section label {
        font-weight: 500;
        color: #333;
        font-size: 14px;
      }

      .form-section select,
      .form-section textarea {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        transition: border-color 0.2s ease;
      }

      .form-section select:focus,
      .form-section textarea:focus {
        outline: none;
        border-color: #1976d2;
      }

      .switch-label {
        display: flex !important;
        flex-direction: row !important;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
      }

      .switch-label input[type="checkbox"] {
        appearance: none;
        width: 48px;
        height: 24px;
        background: #ccc;
        border-radius: 12px;
        position: relative;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .switch-label input[type="checkbox"]:checked {
        background: #1976d2;
      }

      .switch-label input[type="checkbox"]:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        top: 2px;
        left: 2px;
        transition: transform 0.2s ease;
      }

      .switch-label input[type="checkbox"]:checked:before {
        transform: translateX(24px);
      }

      .language-select {
        border: 1px solid #ddd;
        border-radius: 4px;
        max-height: 120px;
        overflow-y: auto;
        padding: 8px;
      }

      .language-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        transition: background 0.2s ease;
      }

      .language-option:hover {
        background: #f5f5f5;
      }

      .slider {
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background: #ddd;
        outline: none;
        transition: background 0.2s ease;
      }

      .slider::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1976d2;
        cursor: pointer;
      }

      .dialog-actions {
        padding: 16px 24px;
        border-top: 1px solid #e0e0e0;
        text-align: right;
      }

      .btn-primary {
        background: #1976d2;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .btn-primary:hover {
        background: #1565c0;
      }

      .settings-content::-webkit-scrollbar,
      .language-select::-webkit-scrollbar {
        width: 6px;
      }

      .settings-content::-webkit-scrollbar-track,
      .language-select::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }

      .settings-content::-webkit-scrollbar-thumb,
      .language-select::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
      }

      .settings-content::-webkit-scrollbar-thumb:hover,
      .language-select::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }
    `,document.head.appendChild(t)}show(){if(this.isVisible=!0,this.vueApp){let t=this.vueApp._instance;t&&(t.ctx.updateSettings(this.getSettingsFromState()),t.ctx.show())}}hide(){if(this.isVisible=!1,this.vueApp){let t=this.vueApp._instance;t&&t.ctx.hide()}}unmount(){this.vueApp&&(this.vueApp.unmount(),this.vueApp=null),this.container=null}getSettingsFromState(){return{aiConfig:this.state.aiConfig,expandAtOrigin:this.state.expandAtOrigin,sentenceSmallMargin:this.state.sentenceSmallMargin,enableEarcons:this.state.enableEarcons,checkedLanguages:[...this.state.checkedLanguages],persona:this.state.persona,initialPhrases:[...this.state.initialPhrases],voiceName:this.state.voiceName,voiceSpeakingRate:this.state.voiceSpeakingRate,voicePitch:this.state.voicePitch}}updateStateFromSettings(t){this.state.aiConfig!==t.aiConfig&&(this.state.aiConfig=t.aiConfig),this.state.expandAtOrigin!==t.expandAtOrigin&&(this.state.expandAtOrigin=t.expandAtOrigin),this.state.sentenceSmallMargin!==t.sentenceSmallMargin&&(this.state.sentenceSmallMargin=t.sentenceSmallMargin),this.state.enableEarcons!==t.enableEarcons&&(this.state.enableEarcons=t.enableEarcons),JSON.stringify(this.state.checkedLanguages)!==JSON.stringify(t.checkedLanguages)&&(this.state.checkedLanguages=t.checkedLanguages),this.state.persona!==t.persona&&(this.state.persona=t.persona),JSON.stringify(this.state.initialPhrases)!==JSON.stringify(t.initialPhrases)&&(this.state.initialPhrases=t.initialPhrases),this.state.voiceName!==t.voiceName&&(this.state.voiceName=t.voiceName),this.state.voiceSpeakingRate!==t.voiceSpeakingRate&&(this.state.voiceSpeakingRate=t.voiceSpeakingRate),this.state.voicePitch!==t.voicePitch&&(this.state.voicePitch=t.voicePitch)}};function sc(e){return new so(e)}var Pp={okClick:"ok-click"},Ut=class extends tt(P){connectedCallback(){super.connectedCallback()}firstUpdated(){this.vueContainer&&this.state&&(this.vueBridge=sc(this.state),this.vueBridge.mount(this.vueContainer),this.vueContainer.addEventListener("ok-click",()=>{this.fireEvent(Pp.okClick)}))}disconnectedCallback(){super.disconnectedCallback(),this.vueBridge&&(this.vueBridge.unmount(),this.vueBridge=void 0)}show(){this.vueBridge&&this.vueBridge.show()}hide(){this.vueBridge&&this.vueBridge.hide()}fireEvent(t){this.dispatchEvent(new CustomEvent(t,{detail:{callee:this},bubbles:!0,composed:!0}))}render(){return C`
      <div class="vue-settings-container"></div>
    `}};Ut.styles=F`
    :host {
      display: block;
    }

    .vue-settings-container {
      /* Vue组件将在这里渲染 */
    }
  `,E([O({type:Object})],Ut.prototype,"state",2),E([ce(".vue-settings-container")],Ut.prototype,"vueContainer",2),Ut=E([yt(),L("pv-vue-setting-panel")],Ut);var io=null,oo=null,Nt=new(window.AudioContext||window.webkitAudioContext);fetch("/static/click2.wav").then(e=>e.arrayBuffer()).then(e=>Nt.decodeAudioData(e)).then(e=>{io=e}).catch(e=>{console.warn("Error loading click audio file:",e)});fetch("/static/chime.wav").then(e=>e.arrayBuffer()).then(e=>Nt.decodeAudioData(e)).then(e=>{oo=e}).catch(e=>{console.warn("Error loading chime audio file:",e)});var dr=class{static playClick(){return new Promise((t,r)=>{if(!io)return r("Click audio buffer is not loaded yet.");let n=Nt.createBufferSource();n.buffer=io,n.connect(Nt.destination),n.onended=()=>{n.disconnect(),t()},n.start(Nt.currentTime)})}static playChime(){return new Promise((t,r)=>{if(!oo)return r("Chime audio buffer is not loaded yet.");let n=Nt.createBufferSource();n.buffer=oo,n.connect(Nt.destination),n.onended=()=>{n.disconnect(),t()},n.start(Nt.currentTime)})}};var ys={backspaceClick:"backspace-click",contentCopyClick:"content-copy-click",deleteClick:"delete-click",firstUpdated:"first-updated",keyboardChangeClick:"keyboard-change-click",languageChangeClick:"language-change-click",settingClick:"setting-click",undoClick:"undo-click"},Ht=class extends tt(P){constructor(){super(...arguments);this.isTtsReading=!1}fireEvent(r,n){this.dispatchEvent(new CustomEvent(r,{detail:n?{callee:this,...n}:{callee:this},bubbles:!0,composed:!0}))}render(){let r=this.state.text==="",n=this.state.lang.keyboards.length>1,s=this.state.checkedLanguages.length>1;return C`
      <div class="functions">
        <div class="functions-bar">
          <button
            @click="${()=>{this.fireEvent(ys.undoClick)}}"
          >
            <md-icon>undo</md-icon>
            <span>撤回</span>
          </button>
          <button
            @click="${()=>{this.fireEvent(ys.contentCopyClick)}}"
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
            @click="${()=>{this.fireEvent(ys.languageChangeClick)}}"
          >
            <md-icon>language</md-icon>
            <span>语言</span>
          </button>
          <button
            @click="${()=>{this.fireEvent(ys.settingClick)}}"
          >
            <md-icon>settings</md-icon>
            <span>设置</span>
          </button>
        </div>
      </div>
    `}async onTtsButtonClick(){window.speechSynthesis.cancel(),this.state.enableEarcons?dr.playChime().then(()=>{this.startTts()}):this.startTts()}startTts(){let r=new SpeechSynthesisUtterance(this.state.text);r.lang=this.state.lang.code,r.rate=Math.pow(2,this.state.voiceSpeakingRate/10),r.pitch=(this.state.voicePitch+20)/20;let n=window.speechSynthesis,s=n.getVoices().find(i=>i.name===this.state.voiceName);s&&(r.voice=s),r.addEventListener("end",()=>{this.onTtsEnd()}),n.speak(r),this.isTtsReading=!0}onTtsEnd(){this.isTtsReading=!1}};Ht.styles=F`
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
  `,E([O({type:Object})],Ht.prototype,"state",2),E([O({type:Boolean,reflect:!0})],Ht.prototype,"isTtsReading",2),Ht=E([yt(),L("pv-functions-bar")],Ht);var ao=class extends CustomEvent{};function Lp(e,t){let r=[];for(let n=0;n<e.length&&e[n]===t[0];n++)r.push(t.shift());return r}function ic(e){let t=[];for(let r of e){let n=r.match(/^(.*[^.,!?])([.,!?]+)$/);n?(t.push(n[1]),t.push(n[2])):t.push(r)}return t}var ut=class extends P{constructor(){super(...arguments);this.suggestion="";this.offset="";this.mouseoverIndex=-1}render(){let r=ic(this.state.lang.segment(this.suggestion)),n=Lp(r,ic(this.state.lang.segment(this.offset)));return C`${n.length>0?C`<span class="ellipsis">… </span>`:""}
    ${r.map((s,i)=>i<n.length?"":C` <pv-button
            ?active="${i<=this.mouseoverIndex}"
            .label="${s}"
            @mouseenter="${()=>{this.mouseoverIndex=i}}"
            @mouseleave="${()=>{this.mouseoverIndex=-1}}"
            @click="${()=>{this.dispatchEvent(new ao("select",{detail:[this.state.lang.join(r.slice(0,i+1)),i-n.length]}))}}"
          ></pv-button>`)}`}};ut.styles=F`
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
  `,E([O({type:Object})],ut.prototype,"state",2),E([O({type:String,reflect:!0})],ut.prototype,"suggestion",2),E([O({type:String,reflect:!0})],ut.prototype,"offset",2),E([O({type:Number})],ut.prototype,"mouseoverIndex",2),ut=E([L("pv-suggestion-stripe")],ut);var Ue=class extends P{constructor(){super(...arguments);this.value="";this.minRows=2;this.maxRows=4;this.placeholder=""}updateLayout(){if(!(this.hiddenTextArea instanceof HTMLTextAreaElement&&this.textArea instanceof HTMLTextAreaElement))return;let r=.8,n=this.getBoundingClientRect();this.hiddenTextArea.style.lineHeight=`${Math.round(n.height/this.minRows)}px`,this.hiddenTextArea.style.fontSize=`${Math.round(n.height/this.minRows*r)}px`;let s=this.hiddenTextArea.scrollHeight,i=Math.min(this.maxRows,Math.max(this.minRows,Math.floor(s/(n.height/this.minRows))));this.textArea.style.lineHeight=`${Math.round(n.height/i)}px`,this.textArea.style.fontSize=`${Math.round(n.height/i*r)}px`,this.textArea.value=this.value}firstUpdated(){window.addEventListener("resize",()=>{this.updateLayout()}),this.updateLayout()}updated(){this.hiddenTextArea instanceof HTMLTextAreaElement&&(this.hiddenTextArea.value=this.value,this.updateLayout(),this.dispatchEvent(new Event("updated")))}render(){return C`
      <textarea class="hidden"></textarea>
      <textarea
        class="main"
        placeholder="${this.placeholder}"
        @input="${r=>{r.isComposing||(this.value=r.composedPath()[0].value)}}"
        @compositionend="${r=>{this.value=r.composedPath()[0].value}}"
      ></textarea>
    `}};Ue.styles=F`
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
  `,E([O({type:String})],Ue.prototype,"value",2),E([O({type:Number})],Ue.prototype,"minRows",2),E([O({type:Number})],Ue.prototype,"maxRows",2),E([O({type:String,reflect:!0})],Ue.prototype,"placeholder",2),E([ce("textarea.hidden")],Ue.prototype,"hiddenTextArea",2),E([ce("textarea.main")],Ue.prototype,"textArea",2),Ue=E([L("pv-scalable-textarea")],Ue);var Ft={BUTTON_BACKSPACE:{kind:"BUTTON_BACKSPACE"},BUTTON_DELETE:{kind:"BUTTON_DELETE"},CHARACTER:{kind:"CHARACTER"},KEYBOARD:{kind:"KEYBOARD"},SUGGESTED_WORD:{kind:"SUGGESTED_WORD"}},pr=class{constructor(t,r){this.value=t;this.sources=r}},bs=class e{constructor(){this.history=[new pr("",[])];this.currentIndex=0}static{this.SIZE=250}add(t){this.history=this.history.slice(this.currentIndex),this.history.unshift(t),this.currentIndex=0,this.history=this.history.slice(0,e.SIZE)}canUndo(){return this.currentIndex<this.history.length-1}undo(){this.canUndo()&&this.currentIndex++}lastInput(){return this.history[this.currentIndex]}isLastInputSuggested(){let t=this.lastInput();return t?t.sources.some(r=>r.kind==="SUGGESTED_WORD"||r.kind==="SUGGESTED_SENTENCE"):!1}};var Up={textUpdate:"text-update"},jt=class extends P{constructor(){super(...arguments);this.inputHistory=new bs}get value(){return this.textArea?.value||""}isBlank(){return this.textArea&&this.textArea.value===""}canUndo(){return this.inputHistory.canUndo()}isLastInputSuggested(){return this.inputHistory.isLastInputSuggested()}setPlaceholder(r){this.textArea.placeholder=r}setTextFieldValue(r,n){if(!this.textArea)return;let s=new pr(r,n);this.inputHistory.add(s),this.textArea.value=r,this.textArea.placeholder=""}textUndo(){if(!this.textArea||!this.inputHistory)return;this.inputHistory.undo();let r=this.inputHistory.lastInput();this.textArea.value=r.value,this.textArea.placeholder=""}textDelete(){this.setTextFieldValue("",[Ft.BUTTON_DELETE])}textBackspace(){if(!this.textArea)return;let r=this.value,n=r.length;this.setTextFieldValue(r.substring(0,n-1),[Ft.BUTTON_BACKSPACE])}contentCopy(){this.textArea&&navigator.clipboard.writeText(this.value)}render(){return C`
      <pv-scalable-textarea @updated="${n=>{let s=n.target.value;this.state.text=s;let o=this.inputHistory.lastInput()?.value||"";if(s!==o){let a=new pr(s,[Ft.KEYBOARD]);this.inputHistory.add(a)}this.fireEvent()}}">
      </pv-scalable-textarea>
    `}fireEvent(){this.dispatchEvent(new CustomEvent(Up.textUpdate,{detail:{callee:this},bubbles:!0,composed:!0}))}};jt.styles=F`
    pv-scalable-textarea {
      box-sizing: border-box;
      height: 20svh;
    }
  `,E([O({type:Object})],jt.prototype,"state",2),E([ce("pv-scalable-textarea")],jt.prototype,"textArea",2),jt=E([L("pv-textarea-wrapper"),yt()],jt);var lo=String.fromCodePoint(61440),_s=new Map([["\u3042","\u3041"],["\u3044","\u3043"],["\u3046","\u3045"],["\u3048","\u3047"],["\u304A","\u3049"],["\u3064","\u3063"],["\u3084","\u3083"],["\u3086","\u3085"],["\u3088","\u3087"],["\u308F","\u308E"],["\u304B","\u3095"],["\u3051","\u3096"]]),co=new Map(Array.from(_s,e=>[e[1],e[0]])),Hp=[["\u3042","\u3044","\u3046","\u3048","\u304A"],["\u304B","\u304D","\u304F","\u3051","\u3053"],["\u3055","\u3057","\u3059","\u305B","\u305D"],["\u305F","\u3061","\u3064","\u3066","\u3068"],["\u306A","\u306B","\u306C","\u306D","\u306E"],["\u306F","\u3072","\u3075","\u3078","\u307B"],["\u307E","\u307F","\u3080","\u3081","\u3082"],["\u3084","\u3086","\u3088","",{label:"\u5C0F",value:lo}],["\u3089","\u308A","\u308B","\u308C","\u308D"],["\u308F","\u3092","\u3093","\u3001","\u3002"],["\u309B","\u309C","\u30FC","\uFF1F","\uFF01"]];var sn=class extends P{render(){return C`<div class="container">
      ${Hp.map((t,r)=>t.map((n,s)=>n?C`<button
                class="${r%2===0?"even":"odd"}"
                style="grid-column: ${r+1}; grid-row: ${s+1}"
                @click=${()=>{this.dispatchEvent(new CustomEvent("character-select",{detail:typeof n=="string"?n:n.value,bubbles:!0,composed:!0}))}}
              >
                ${typeof n=="string"?n:n.label}
              </button>`:C`<span></span>`))}
    </div>`}};sn.styles=F`
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
  `,sn=E([L("pv-fifty-key-keyboard")],sn);var Es=class extends CustomEvent{},he=class extends P{constructor(){super(...arguments);this.label="";this.value=[];this.open=!1;this.expandAtOrigin=!1;this.numCharsOnHandler=3;this.onKeydownWhileOpenWithThis=this.onKeydownWhileOpen.bind(this)}onKeydownWhileOpen(r){if(r.key==="Escape"){this.open=!1;return}if(r.key==="Tab"&&this.shadowRoot&&this.focusibleButtons){let n=this.shadowRoot.activeElement;r.shiftKey&&n===this.focusibleButtons[0]?(this.focusibleButtons[this.focusibleButtons.length-1].focus(),r.preventDefault()):!r.shiftKey&&n===this.focusibleButtons[this.focusibleButtons.length-1]&&(this.focusibleButtons[0].focus(),r.preventDefault())}}onKeypadOpen(){if(this.keypadPopup&&this.expandedKeypadRows&&this.handlerButton){if(this.expandAtOrigin)this.keypadPopup.style.position="absolute",this.keypadPopup.style.top="0",this.keypadPopup.style.left="0";else{let r=this.handlerButton.getBoundingClientRect();this.keypadPopup.style.position="fixed",this.keypadPopup.style.top=`${r.bottom+5}px`,this.keypadPopup.style.left=`${r.left}px`,this.keypadPopup.style.transform="";let n=this.keypadPopup.getBoundingClientRect();n.right>window.innerWidth&&(this.keypadPopup.style.transform=`translateX(${window.innerWidth-n.right-16}px)`)}this.firstKeypad?.focus(),this.addEventListener("keydown",this.onKeydownWhileOpenWithThis),this.dispatchEvent(new Event("keypad-open",{bubbles:!0,composed:!0}))}}onKeypadClose(){this.removeEventListener("keydown",this.onKeydownWhileOpenWithThis),this.handlerButton?.focus()}firstUpdated(){this.resizeObserver=new ResizeObserver(()=>{if(!this.handlerButton)return;let r=this.handlerButton.getBoundingClientRect().width;this.allButtons?.forEach(n=>{n!==this.handlerButton&&(n.style.width=`${r}px`),n.style.fontSize=`${r/this.numCharsOnHandler}px`})}),this.resizeObserver.observe(this.handlerButton)}updated(r){let n=r.get("open");n===!0?this.onKeypadClose():n===!1&&this.onKeypadOpen()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}render(){return C`<button
        class="handler"
        @click="${()=>{this.open=!0,this.dispatchEvent(new Es("keypad-handler-click",{detail:"open",bubbles:!0,composed:!0}))}}"
      >
        ${this.label}
      </button>
      <div class="keypad-popup">
        <ul class="container">
          ${this.value.map(r=>C`<li>
                <ul class="row">
                  ${r.split("").map(n=>C`<li>
                        <button
                          @click="${()=>{this.open=!1;let s=n.replace("\u2423"," ");this.dispatchEvent(new Es("character-select",{detail:s,bubbles:!0,composed:!0}))}}"
                        >
                          ${n}
                        </button>
                      </li>`)}
                </ul>
              </li>`)}
        </ul>
      </div>
      <div
        class="backdrop"
        @click="${()=>{this.open=!1}}"
      ></div>`}};he.styles=F`
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
  `,E([O({type:String,reflect:!0})],he.prototype,"label",2),E([O({type:Array})],he.prototype,"value",2),E([O({type:Boolean,reflect:!0})],he.prototype,"open",2),E([O({type:Boolean,reflect:!0})],he.prototype,"expandAtOrigin",2),E([O({type:Number})],he.prototype,"numCharsOnHandler",2),E([zt("button")],he.prototype,"allButtons",2),E([ce("button.handler")],he.prototype,"handlerButton",2),E([ce(".keypad-popup")],he.prototype,"keypadPopup",2),E([ce("ul.container")],he.prototype,"container",2),E([zt("ul.container button")],he.prototype,"focusibleButtons",2),E([ce("li button")],he.prototype,"firstKeypad",2),E([zt("ul.row")],he.prototype,"expandedKeypadRows",2),he=E([L("pv-expand-keypad")],he);var Fp=[[{label:"abc",value:["abc"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],jp=[[{label:"\u3042",value:["\u3042\u3044\u3046\u3048\u304A","\u3041\u3043\u3045\u3047\u3049"]},{label:"\u304B",value:["\u304B\u304D\u304F\u3051\u3053","\u304C\u304E\u3050\u3052\u3054"]},{label:"\u3055",value:["\u3055\u3057\u3059\u305B\u305D","\u3056\u3058\u305A\u305C\u305E"]},{label:"\u305F",value:["\u305F\u3061\u3064\u3066\u3068\u3063","\u3060\u3062\u3065\u3067\u3069"]},{label:"\u306A",value:["\u306A\u306B\u306C\u306D\u306E"]},{label:"\u306F",value:["\u306F\u3072\u3075\u3078\u307B","\u3070\u3073\u3076\u3079\u307C","\u3071\u3074\u3077\u307A\u307D"]},{label:"\u307E",value:["\u307E\u307F\u3080\u3081\u3082"]},{label:"\u3084",value:["\u3084\u3086\u3088","\u3083\u3085\u3087"]},{label:"\u3089",value:["\u3089\u308A\u308B\u308C\u308D"]},{label:"\u308F",value:["\u308F\u3092\u3093"]},{label:"\u309B\u309C",value:["\u3002\u3001\u30FC\uFF1F\uFF01","\u2423\u309B\u309C"]}]],Bp=[[{label:"abc",value:["abc","\xE0\xE2\xE7"]},{label:"def",value:["def","\xE8\xE9\xEA\xEB"]},{label:"ghi",value:["ghi","\xEE\xEF"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF4\u0153"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xF9\xFB\xFC"]},{label:"wxyz",value:["wxyz","\xFF"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],Wp=[[{label:"abc",value:["abc","\xE4"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF6"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xFC"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]],zp=[[{label:"abc",value:["abc","\xE5\xE4"]},{label:"def",value:["def"]},{label:"ghi",value:["ghi"]},{label:"jkl",value:["jkl"]},{label:"mno",value:["mno","\xF6"]},{label:"pqrs",value:["pqrs"]},{label:"tuv",value:["tuv","\xFC"]},{label:"wxyz",value:["wxyz"]},{label:"0~9",value:["01234","56789"]},{label:".,!?",value:["\u2423.,!?"]}]];var Kp=[[{label:"0-9",value:["0","1","2","3","4","5","6","7","8","9"]},{label:"ABC",value:["a","b","c"]},{label:"DEF",value:["d","e","f"]}],[{label:"GHI",value:["g","h","i"]},{label:"JKL",value:["j","h","l"]},{label:"MNO",value:["m","n","o"]}],[{label:"PQRS",value:["p","q","r","s"]},{label:"TUV",value:["t","u","v"]},{label:"WXYZ",value:["w","x","y","z"]}]],oc={label:".,!?",value:[".",",","!","?"]},Gp={label:"\u5220\u9664",value:["backspace"]},dt=class extends P{constructor(r){super();this.keygrid=r}static{this.styles=F`
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
  `}firstUpdated(){this.addEventListener("keypad-open",r=>{let n=r.composedPath()[0];this.keypads?.forEach(s=>{s.open=s===n})})}render(){return this.keygrid.map(r=>C`
        <ul>
          ${r.map(n=>C`
              <li>
                <pv-expand-keypad
                  .label=${n.label}
                  .value=${n.value}
                  ?expandAtOrigin=${this.state?.expandAtOrigin||!1}
                ></pv-expand-keypad>
              </li>
            `)}
        </ul>
      `)}};E([O({type:Object})],dt.prototype,"state",2),E([zt("pv-expand-keypad")],dt.prototype,"keypads",2);var xs=class extends dt{constructor(){super(Fp)}};xs=E([L("pv-alphanumeric-single-row-keyboard")],xs);var ws=class extends dt{constructor(){super(jp)}};ws=E([L("pv-hiragana-single-row-keyboard")],ws);var Ns=class extends dt{constructor(){super(Bp)}};Ns=E([L("pv-french-single-row-keyboard")],Ns);var Ss=class extends dt{constructor(){super(Wp)}};Ss=E([L("pv-german-single-row-keyboard")],Ss);var Cs=class extends dt{constructor(){super(zp)}};Cs=E([L("pv-swedish-single-row-keyboard")],Cs);var on=class extends P{_onKeyClick(t){this.dispatchEvent(new CustomEvent("character-select",{detail:t,bubbles:!0,composed:!0}))}render(){return C`
      <div class="keyboard-area">
        <div class="nine-key-grid">
          ${Kp.flat().map(t=>(console.log("key value:",t.value),C`
                <pv-expand-keypad
                  .label=${t.label}
                  .value=${t.value}
                  @select=${r=>this._onKeyClick(r.detail)}
                ></pv-expand-keypad>
              `))}
          <pv-expand-keypad
            .label=${oc.label}
            .value=${oc.value}
            @select=${t=>this._onKeyClick(t.detail)}
          ></pv-expand-keypad>
          <button
            class="key-btn delete-btn"
            @click=${()=>this._onKeyClick(Gp.value[0])}
          >
            <span class="delete-icon">✖</span> 删除
          </button>
        </div>
      </div>
    `}};on.styles=F`
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
  `,on=E([L("pv-alphanumeric-nine-key-keyboard")],on);var qp=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m","?","!"],[","," ","."]],an=class extends P{render(){return C`<div class="container">
      ${qp.map((t,r)=>C`<div class="row ${r%2===0?"even":"odd"}">
            ${t.map(n=>C`<button
                  @click=${()=>{this.dispatchEvent(new CustomEvent("character-select",{detail:n,bubbles:!0,composed:!0}))}}
                >
                  ${n}
                </button>`)}
          </div>`)}
    </div>`}};an.styles=F`
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
  `,an=E([L("pv-qwerty-keyboard")],an);var uo=class{constructor(){this.code="";this.promptName="";this.keyboards=[];this.initialPhrases=[];this.aiConfigs={classic:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"},fast:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"},smart:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"}}}segment(t){return t.split(" ")}join(t){return t.join(" ").replace(/ ([.,!?]+( |$))/g,"$1")+" "}appendWord(t,r){return r.startsWith("-")?t+r.slice(1)+" ":t+" "+r+" "}},po=class extends uo{constructor(){super(...arguments);this.code="en-US";this.promptName="English";this.initialPhrases=["I","You","They","What","Why","When","Where","How","Who","Can","Could you","Would you","Do you"]}},fo=class extends po{constructor(){super(...arguments);this.keyboards=[mt`pv-alphanumeric-single-row-keyboard`]}render(){return C`${$r("English (single-row keyboard)")}`}},ho=class{constructor(){this.code="zh-CN";this.promptName="Chinese";this.keyboards=[];this.separetor="";this.initialPhrases=["\u4F60","\u6211","\u4ED6","\u5979","\u5B83","\u597D","\u4ECA\u5929","\u6628\u5929","\u660E\u5929"];this.emotions=[];this.aiConfigs={classic:{model:"gemma3:4b",sentence:"SentenceJapanese20240628",word:"WordGeneric20240628"},fast:{model:"gemma3:4b",sentence:"SentenceJapanese20240628",word:"WordGeneric20240628"},smart:{model:"gemma3:4b",sentence:"SentenceGeneric20250311",word:"WordGeneric20240628"}}}segment(t){let r=[];for(let n=0;n<t.length;n++)r.push(t[n]);return r}join(t){return t.join("")}appendWord(t,r){return t=t.replace(/[a-z]+$/,""),r.startsWith("-")?t+r.slice(1):t+r}},go=class extends ho{constructor(){super(...arguments);this.keyboards=[mt`pv-alphanumeric-single-row-keyboard`]}render(){return C`${$r("Chinese (single-row keyboard)")}`}},fr={englishWithSingleRowKeyboard:new fo,chineseWithSingleRowKeyboard:new go};var ac="en",lc=["ja"];var mo={};fc(mo,{templates:()=>Yp});var Yp={s09085b07b5a0de5f:"AI\u8A2D\u5B9A",s1369ddcc1b221411:"\u58F0\u306E\u9AD8\u3055",s19e84b851836664f:"\u9AD8\u901F",s3ceed4d952789f32:"\u8CE2\u3044",s54f4fb35b3a04e2a:"\u82F1\u8A9E (\u4E00\u884C\u30AD\u30FC\u30DC\u30FC\u30C9)",s59e3e7ab292d7c11:"\u6587\u306E\u884C\u9593\u3092\u8A70\u3081\u308B",s5c9bb69e2a31ad59:"VOICE",s612301cee43af417:"\u52B9\u679C\u97F3\u3092\u518D\u751F",s6e237556e679b5b8:"\u30C6\u30AD\u30B9\u30C8\u8AAD\u307F\u4E0A\u3052\u97F3\u58F0",s91b073374c468b93:"\u5229\u7528\u8005\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",s98aa8b9481114f33:"\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3",sb061ff5a347a296e:"\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",sb46606bea7e65177:"\u8AAD\u3080\u901F\u3055",sb6bc71df20a5484d:"\u30AD\u30FC\u3092\u5DE6\u7AEF\u304B\u3089\u5C55\u958B\u3059\u308B",sc3ac225273c8316b:"\u4E00\u822C",se127d1b851b56845:"\u521D\u671F\u30D5\u30EC\u30FC\u30BA",sefcf950b3cc4fc3b:"\u8A00\u8A9E\u5207\u66FF\u3048",s7e9f6245f158e5a1:"Chinese (single-row keyboard)"};var cc=F`
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
    bottom: -18px;
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
`;var Os=class{constructor(t,r){this.domainHead=t,this.defaultValues=r}read(t){let r=`${this.domainHead}.${t}`,n=localStorage.getItem(r);if(n===null)return this.defaultValues[t];try{let{value:s}=JSON.parse(n);return s}catch{return this.defaultValues[t]}}write(t,r){let n=`${this.domainHead}.${t}`,s=JSON.stringify({value:r});localStorage.setItem(n,s)}};var ln=class{constructor(t=null){this.langSignal=gt(fr.chineseWithSingleRowKeyboard);this.checkedLanguagesSignal=gt([]);this.keyboardSignal=gt(mt`pv-alphanumeric-single-row-keyboard`);this.textSignal=gt("");this.aiConfigInternal="smart";this.expandAtOriginSignal=gt(!1);this.sentenceSmallMarginSignal=gt(!1);this.personaInternal="";this.initialPhrasesSignal=gt([]);this.enableEarconsInternal=!1;this.features={languages:[],sentenceMacroId:null,wordMacroId:null};this.storage=t??new Os("com.google.pv",Bo),this.loadState();let r=["-\u6211","-\u4F60","-\u4ED6","-\u5979","-\u5B83","-\u662F","-\u5403","-\u7761","-\u5FEB","-\u7D2F","-\u75BC","-\u9AD8"];this.initialPhrasesSignal.set(r)}get lang(){return this.langSignal.get()}set lang(t){this.langSignal.set(t)}get checkedLanguages(){return this.checkedLanguagesSignal.get()}set checkedLanguages(t){this.storage.write("checkedLanguages",t),this.checkedLanguagesSignal.set(t)}get keyboard(){return this.keyboardSignal.get()}set keyboard(t){this.keyboardSignal.set(t)}get text(){return this.textSignal.get()}set text(t){this.textSignal.set(t)}get aiConfig(){return this.aiConfigInternal}set aiConfig(t){this.storage.write("aiConfig",t),this.aiConfigInternal=t}get model(){return this.lang.aiConfigs[this.aiConfig]?.model}get sentenceMacroId(){return this.lang.aiConfigs[this.aiConfig]?.sentence}get wordMacroId(){return this.lang.aiConfigs[this.aiConfig]?.word}get expandAtOrigin(){return this.expandAtOriginSignal.get()}set expandAtOrigin(t){this.storage.write("expandAtOrigin",t),this.expandAtOriginSignal.set(t)}get sentenceSmallMargin(){return this.sentenceSmallMarginSignal.get()}set sentenceSmallMargin(t){this.storage.write("sentenceSmallMargin",t),this.sentenceSmallMarginSignal.set(t)}get persona(){return this.personaInternal}set persona(t){this.storage.write("persona",t),this.personaInternal=t}get initialPhrases(){return this.initialPhrasesSignal.get()}set initialPhrases(t){this.storage.write("initialPhrases",t),this.initialPhrasesSignal.set(t)}get voiceSpeakingRate(){return this.voiceSpeakingRateInternal}set voiceSpeakingRate(t){this.voiceSpeakingRateInternal=t,this.storage.write("voiceSpeakingRate",t)}get voicePitch(){return this.voicePitchInternal}set voicePitch(t){this.voicePitchInternal=t,this.storage.write("voicePitch",t)}get voiceName(){return this.voiceNameInternal}set voiceName(t){this.voiceNameInternal=t,this.storage.write("ttsVoice",t)}get enableEarcons(){return this.enableEarconsInternal}set enableEarcons(t){this.storage.write("enableEarcons",t),this.enableEarconsInternal=t}loadState(){this.aiConfigInternal=this.storage.read("aiConfig"),this.checkedLanguages=this.storage.read("checkedLanguages"),this.enableEarconsInternal=this.storage.read("enableEarcons"),this.expandAtOrigin=this.storage.read("expandAtOrigin"),this.initialPhrases=this.storage.read("initialPhrases"),this.personaInternal=this.storage.read("persona"),this.sentenceSmallMargin=this.storage.read("sentenceSmallMargin"),this.voiceNameInternal=this.storage.read("ttsVoice"),this.voicePitchInternal=this.storage.read("voicePitch"),this.voiceSpeakingRateInternal=this.storage.read("voiceSpeakingRate")}setStorage(t){this.storage.domainHead!==t.domainHead&&(this.storage=t,this.loadState())}};var Ts={SENTENCE_MACRO_ID:"sentenceMacroId",WORD_MACRO_ID:"wordMacroId"},{setLocale:Jp}=Na({sourceLocale:ac,targetLocales:lc,loadLocale:async e=>new Promise(t=>{switch(e){case"ja":t(mo);break;default:t({})}})});function Xp(e){if(e.length===0)return"";let t=e.map(n=>n.length),r=Math.min(...t);for(let n=0;n<r;n++)if(new Set(e.map(s=>s[n])).size!==1)return e[0].slice(0,n);return e[t.indexOf(r)]}function cn(e,t){let r=e.replaceAll("\u309B","\u3099").replaceAll("\u309C","\u309A").normalize("NFKC").replaceAll("\u3099","\u309B").replaceAll("\u309A","\u309C").replace(/^\s+/,"").replace(/\s\s+/," ");return t&&(r=r.replace(/ ([,.?!])$/,"$1")),r}function Ae(){return function(e,t,r){let n=r.value;return r.value=function(...s){return this.state.enableEarcons&&dr.playClick(),n.apply(this,s)},r}}var G=class extends tt(P){constructor(r=null,n=null){super();this.suggestions=[];this.words=[];this.isLoading=!1;this.locale="cn";this.sentenceMacroId=null;this.languageLabels="chineseWithSingleRowKeyboard,englishWithSingleRowKeyboard";this.languageIndex=0;this.keyboardIndex=0;this.inFlightRequests=0;this.prevCallsMs=[];this.MAX_SENTENCE_SUGGESTIONS=5;this.stateInternal=r??new ln,this.apiClient=n??new Tn}get state(){return this.stateInternal}connectedCallback(){super.connectedCallback(),this.stateInternal=new ln,Jp(this.locale?this.locale:"cn"),this.stateInternal.features={languages:this.languageLabels.split(","),sentenceMacroId:this.sentenceMacroId,wordMacroId:null},this.stateInternal.checkedLanguages.length===0&&(this.stateInternal.checkedLanguages=this.stateInternal.features.languages),this.stateInternal.lang=fr[this.stateInternal.checkedLanguages[0]],this.stateInternal.keyboard=this.stateInternal.lang.keyboards[this.keyboardIndex];let r=new URLSearchParams(window.location.search);r.has(Ts.SENTENCE_MACRO_ID)&&(this.stateInternal.features.sentenceMacroId=r.get(Ts.SENTENCE_MACRO_ID)),r.has(Ts.WORD_MACRO_ID)&&(this.stateInternal.features.wordMacroId=r.get(Ts.WORD_MACRO_ID)),this.stateInternal.initialPhrases.some(n=>n)||(this.stateInternal.initialPhrases=this.stateInternal.lang.initialPhrases)}isBlank(){return this.textField&&this.textField.value===""}updateSentences(r){this.stateInternal.sentenceSmallMargin||(r=r.slice(0,Wo)),this.suggestions=r.map(n=>cn(n))}updateWords(r){this.words=r.map(n=>cn(n))}delayBeforeFetchMs(){return Math.min(150*(this.prevCallsMs.length-1),300)}async updateSuggestions(){window.clearTimeout(this.timeoutId);let r=Date.now();if(this.prevCallsMs.push(r),this.prevCallsMs=this.prevCallsMs.filter(n=>n>r-1e3),this.isBlank()){this.apiClient.abortFetch(),this.isLoading=!1,this.suggestions=[],this.words=[];return}this.timeoutId=window.setTimeout(async()=>{this.inFlightRequests++,this.isLoading=!0;let n=await this.apiClient.fetchSuggestions(this.textField.value??"",this.stateInternal.lang.promptName,this.stateInternal.model,{sentenceMacroId:this.state.features.sentenceMacroId??this.stateInternal.sentenceMacroId,wordMacroId:this.state.features.wordMacroId??this.stateInternal.wordMacroId,persona:this.stateInternal.persona});if(this.inFlightRequests--,this.inFlightRequests===0&&(this.isLoading=!1),!n)return;let[s,i]=n;this.updateSentences(s),this.updateWords(i),this.requestUpdate()},this.delayBeforeFetchMs())}static composeUpdatedSentence(r,n){if(n===lo){let s=r.slice(-1)[0];return[..._s.keys()].includes(s)?r.slice(0,-1)+_s.get(s):[...co.keys()].includes(s)?r.slice(0,-1)+co.get(s):r}return r+n}onCharacterSelect(r){if(!this.textField)return;if(r.detail==="backspace"){this.textField.textBackspace();return}let n=cn(G.composeUpdatedSentence(this.textField.value,r.detail),this.textField.isLastInputSuggested());this.textField.setTextFieldValue(n,[Ft.CHARACTER])}onSuggestedWordClick(r){let n=this.textField?.value??"",s=this.stateInternal.lang.appendWord(n,r),i=cn(s);this.textField?.setTextFieldValue(i,[Ft.SUGGESTED_WORD])}onSettingClick(){this.settingPanel.show()}onUndoClick(){this.textField?.textUndo()}onBackspaceClick(){this.textField?.textBackspace()}onDeleteClick(){this.textField?.textDelete()}switchLanguage(){this.state.lang=fr[this.state.checkedLanguages[this.languageIndex]],this.keyboardIndex=0,this.state.keyboard=this.state.lang.keyboards[this.keyboardIndex],this.updateSuggestions(),this.languageName&&(this.languageName.setAttribute("active","true"),setTimeout(()=>{this.languageName?.removeAttribute("active")},750))}onLanguageChangeClick(){this.languageIndex=(this.languageIndex+1)%this.state.checkedLanguages.length,this.switchLanguage()}onKeyboardChangeClick(){this.keyboardIndex=(this.keyboardIndex+1)%this.state.lang.keyboards.length,this.state.keyboard=this.state.lang.keyboards[this.keyboardIndex],this.updateSuggestions()}onContentCopyClick(){this.textField?.contentCopy()}onKeypadHandlerClick(){}onOkClick(){this.state.checkedLanguages.findIndex(n=>fr[n]===this.state.lang)===-1&&(this.languageIndex=0,this.switchLanguage())}onSuggestionSelect(r){let[n,s]=r.detail;this.textField&&this.textField.setTextFieldValue(n,[{kind:"SUGGESTED_SENTENCE",index:s}])}renderSuggestions(){return this.state.initialPhrases.length>0?C`
        ${this.state.initialPhrases.map(n=>C`
          <li class="sentence-item">
            <pv-suggestion-stripe 
              .state=${this.stateInternal}
              .suggestion=${n}
              @select=${this.onSuggestionSelect}
            ></pv-suggestion-stripe>
          </li>
        `)}
        ${this.renderPlaceholders(this.state.initialPhrases.length,this.MAX_SENTENCE_SUGGESTIONS-this.state.initialPhrases.length,"sentence-placeholder")}
      `:C`
        ${this.renderPlaceholders(0,this.MAX_SENTENCE_SUGGESTIONS,"sentence-placeholder")}
      `}renderPlaceholders(r,n,s){let i=[];for(let o=0;o<n;o++)i.push(C`<li class="${s}"></li>`);return i}handleClearButtonClick(){if(this.textField){let r=this.textField.value;r&&r.trim().length>0&&this.saveToHistory(r.trim()),this.textField.textDelete()}}handleHistoryButtonClick(){let r=this.getInputHistory();if(r.length===0){console.log("\u6682\u65E0\u5386\u53F2\u8BB0\u5F55");return}this.showHistoryDialog(r)}getInputHistory(){try{let r=localStorage.getItem("input_history");return r?JSON.parse(r):[]}catch(r){return console.error("\u8BFB\u53D6\u5386\u53F2\u8BB0\u5F55\u5931\u8D25:",r),[]}}saveToHistory(r){if(!(!r||r.trim().length===0))try{let n=this.getInputHistory(),s=r.trim(),i=n.indexOf(s);i!==-1&&n.splice(i,1),n.unshift(s),n.length>20&&n.splice(20),localStorage.setItem("input_history",JSON.stringify(n))}catch(n){console.error("\u4FDD\u5B58\u5386\u53F2\u8BB0\u5F55\u5931\u8D25:",n)}}showHistoryDialog(r){let n=document.createElement("div");n.style.cssText=`
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
    `;let s=document.createElement("div");s.style.cssText=`
      background: white;
      border-radius: 12px;
      padding: 20px;
      max-width: 600px;
      max-height: 400px;
      overflow-y: auto;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;let i=document.createElement("h3");i.textContent="\u5386\u53F2\u8BB0\u5F55",i.style.cssText="margin-top: 0; margin-bottom: 15px; color: #333;",s.appendChild(i);let o=document.createElement("div");o.style.cssText="margin-bottom: 15px;",r.forEach((l,d)=>{let p=document.createElement("div");p.style.cssText=`
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: background 0.2s;
        word-break: break-all;
      `,p.textContent=l,p.addEventListener("mouseenter",()=>{p.style.background="#f0f8ff"}),p.addEventListener("mouseleave",()=>{p.style.background="white"}),p.addEventListener("click",()=>{this.textField&&(this.textField.setTextFieldValue(l,[]),this.updateSuggestions()),document.body.removeChild(n)}),o.appendChild(p)}),s.appendChild(o);let a=document.createElement("button");a.textContent="\u5173\u95ED",a.style.cssText=`
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 8px 16px;
      cursor: pointer;
      float: right;
    `,a.addEventListener("click",()=>{document.body.removeChild(n)}),s.appendChild(a),n.appendChild(s),document.body.appendChild(n),n.addEventListener("click",l=>{l.target===n&&document.body.removeChild(n)})}render(){let r=this.isBlank()?this.stateInternal.initialPhrases:this.words,n=12,s=[...r];for(;s.length<n;)s.push("");let i=s.map(p=>p?C`
        <button
          class="candidate-btn"
          @click="${()=>this.onSuggestedWordClick(p)}"
        >
          ${p}
        </button>
      `:C`<div class="candidate-placeholder"></div>`),o=s.some(p=>p&&p.trim()!==""),a=4,l=[];for(let p=0;p<Math.min(this.suggestions.length,a);p++)l.push(this.suggestions[p]);for(;l.length<a;)l.push("");let d=l.map(p=>{if(!p)return C`<li><div class="sentence-placeholder"></div></li>`;let f=cn(this.textField?.value??""),_=Xp([p,f]);return C` <li
        class="${this.stateInternal.sentenceSmallMargin?"tight":""}"
      >
        <pv-suggestion-stripe
          .state=${this.stateInternal}
          .offset="${_}"
          .suggestion="${p}"
          @select="${this.onSuggestionSelect}"
        ></pv-suggestion-stripe>
      </li>`});return C`
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
            ${i}
          </ul>
        </div>
        <div class="center-panel">
          <div class="suggestions">
            <ul class="sentence-suggestions">
              ${d}
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
    `}firstUpdated(){this.state.loadState()}};G.styles=cc,E([O({type:Array})],G.prototype,"suggestions",2),E([O({type:Array})],G.prototype,"words",2),E([O({type:Boolean})],G.prototype,"isLoading",2),E([ce("pv-textarea-wrapper")],G.prototype,"textField",2),E([ce("pv-functions-bar")],G.prototype,"functionsBar",2),E([ce("pv-vue-setting-panel")],G.prototype,"settingPanel",2),E([O({type:String,attribute:"feature-locale"})],G.prototype,"locale",2),E([O({type:String,attribute:"feature-sentence-macro-id"})],G.prototype,"sentenceMacroId",2),E([O({type:String,attribute:"feature-languages"})],G.prototype,"languageLabels",2),E([ce(".language-name")],G.prototype,"languageName",2),E([Ae()],G.prototype,"onCharacterSelect",1),E([Ae()],G.prototype,"onSuggestedWordClick",1),E([Ae()],G.prototype,"onSettingClick",1),E([Ae()],G.prototype,"onUndoClick",1),E([Ae()],G.prototype,"onBackspaceClick",1),E([Ae()],G.prototype,"onDeleteClick",1),E([Ae()],G.prototype,"onLanguageChangeClick",1),E([Ae()],G.prototype,"onKeyboardChangeClick",1),E([Ae()],G.prototype,"onContentCopyClick",1),E([Ae()],G.prototype,"onKeypadHandlerClick",1),E([Ae()],G.prototype,"onSuggestionSelect",1),E([Ae()],G.prototype,"handleClearButtonClick",1),E([Ae()],G.prototype,"handleHistoryButtonClick",1),G=E([L("pv-app"),yt()],G);})();
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
