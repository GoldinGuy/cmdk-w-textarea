var Ae=Object.create;var G=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var we=Object.getOwnPropertyNames;var Ie=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var _e=(e,a)=>{for(var n in a)G(e,n,{get:a[n],enumerable:!0})},se=(e,a,n,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let c of we(a))!Oe.call(e,c)&&c!==n&&G(e,c,{get:()=>a[c],enumerable:!(o=De(a,c))||o.enumerable});return e};var ie=(e,a,n)=>(n=e!=null?Ae(Ie(e)):{},se(a||!e||!e.__esModule?G(n,"default",{value:e,enumerable:!0}):n,e)),ke=e=>se(G({},"__esModule",{value:!0}),e);var Qe={};_e(Qe,{Command:()=>Xe,CommandDialog:()=>be,CommandEmpty:()=>ye,CommandGroup:()=>he,CommandInput:()=>Ce,CommandItem:()=>ge,CommandList:()=>Te,CommandLoading:()=>Me,CommandRoot:()=>ee,CommandSeparator:()=>Ee,CommandTextArea:()=>Se,useCommandState:()=>y});module.exports=ke(Qe);var L=ie(require("@radix-ui/react-dialog")),r=ie(require("react"));var le=1,He=.9,Ne=.8,Ge=.17,J=.1,W=.999,Ke=.9999;var Ve=.99,$e=/[\\\/_+.#"@\[\(\{&]/,Fe=/[\\\/_+.#"@\[\(\{&]/g,je=/[\s-]/,de=/[\s-]/g;function z(e,a,n,o,c,s,m){if(s===a.length)return c===e.length?le:Ve;var R=`${c},${s}`;if(m[R]!==void 0)return m[R];for(var u=o.charAt(s),v=n.indexOf(u,c),d=0,p,S,M,E;v>=0;)p=z(e,a,n,o,v+1,s+1,m),p>d&&(v===c?p*=le:$e.test(e.charAt(v-1))?(p*=Ne,M=e.slice(c,v-1).match(Fe),M&&c>0&&(p*=Math.pow(W,M.length))):je.test(e.charAt(v-1))?(p*=He,E=e.slice(c,v-1).match(de),E&&c>0&&(p*=Math.pow(W,E.length))):(p*=Ge,c>0&&(p*=Math.pow(W,v-c))),e.charAt(v)!==a.charAt(s)&&(p*=Ke)),(p<J&&n.charAt(v-1)===o.charAt(s+1)||o.charAt(s+1)===o.charAt(s)&&n.charAt(v-1)!==o.charAt(s))&&(S=z(e,a,n,o,v+1,s+2,m),S*J>p&&(p=S*J)),p>d&&(d=p),v=n.indexOf(u,v+1);return m[R]=d,d}function ue(e){return e.toLowerCase().replace(de," ")}function fe(e,a){return z(e,a,ue(e),ue(a),0,0,{})}var Ue='[cmdk-list-sizer=""]',k='[cmdk-group=""]',Q='[cmdk-group-items=""]',qe='[cmdk-group-heading=""]',K='[cmdk-item=""]',me=`${K}:not([aria-disabled="true"])`,Z="cmdk-item-select",b="data-value",Be=(e,a)=>fe(e,a),pe=r.createContext(void 0),D=()=>r.useContext(pe),ve=r.createContext(void 0),V=()=>r.useContext(ve),Re=r.createContext(void 0),ee=r.forwardRef((e,a)=>{let n=r.useRef(null),o=A(()=>{var t;return{search:"",value:e.value??((t=e.defaultValue)==null?void 0:t.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),c=A(()=>new Set),s=A(()=>new Map),m=A(()=>new Map),R=A(()=>new Set),u=Pe(e),{label:v,children:d,value:p,onValueChange:S,filter:M,shouldFilter:E,vimBindings:$=!0,...I}=e,F=r.useId(),N=r.useId(),h=r.useId(),P=We();w(()=>{if(p!==void 0){let t=p.trim().toLowerCase();o.current.value=t,P(6,re),T.emit()}},[p]);let T=r.useMemo(()=>({subscribe:t=>(R.current.add(t),()=>R.current.delete(t)),snapshot:()=>o.current,setState:(t,f,i)=>{var l,g,C;if(!Object.is(o.current[t],f)){if(o.current[t]=f,t==="search")B(),U(),P(1,q);else if(t==="value")if(((l=u.current)==null?void 0:l.value)!==void 0){let x=f??"";(C=(g=u.current).onValueChange)==null||C.call(g,x);return}else i||P(5,re);T.emit()}},emit:()=>{R.current.forEach(t=>t())}}),[]),j=r.useMemo(()=>({value:(t,f)=>{f!==m.current.get(t)&&(m.current.set(t,f),o.current.filtered.items.set(t,te(f)),P(2,()=>{U(),T.emit()}))},item:(t,f)=>(c.current.add(t),f&&(s.current.has(f)?s.current.get(f).add(t):s.current.set(f,new Set([t]))),P(3,()=>{B(),U(),o.current.value||q(),T.emit()}),()=>{m.current.delete(t),c.current.delete(t),o.current.filtered.items.delete(t);let i=O();P(4,()=>{B(),(i==null?void 0:i.getAttribute("id"))===t&&q(),T.emit()})}),group:t=>(s.current.has(t)||s.current.set(t,new Set),()=>{m.current.delete(t),s.current.delete(t)}),filter:()=>u.current.shouldFilter,label:v||e["aria-label"],commandRef:n,listId:F,inputId:h,labelId:N}),[]);function te(t){var i;let f=((i=u.current)==null?void 0:i.filter)??Be;return t?f(t,o.current.search):0}function U(){if(!n.current||!o.current.search||u.current.shouldFilter===!1)return;let t=o.current.filtered.items,f=[];o.current.filtered.groups.forEach(l=>{let g=s.current.get(l),C=0;g.forEach(x=>{let xe=t.get(x);C=Math.max(xe,C)}),f.push([l,C])});let i=n.current.querySelector(Ue);_().sort((l,g)=>{let C=l.getAttribute(b),x=g.getAttribute(b);return(t.get(x)??0)-(t.get(C)??0)}).forEach(l=>{let g=l.closest(Q);g?g.appendChild(l.parentElement===g?l:l.closest(`${Q} > *`)):i.appendChild(l.parentElement===i?l:l.closest(`${Q} > *`))}),f.sort((l,g)=>g[1]-l[1]).forEach(l=>{let g=n.current.querySelector(`${k}[${b}="${l[0]}"]`);g==null||g.parentElement.appendChild(g)})}function q(){let t=_().find(i=>!i.ariaDisabled),f=t==null?void 0:t.getAttribute(b);T.setState("value",f||void 0)}function B(){if(!o.current.search||u.current.shouldFilter===!1){o.current.filtered.count=c.current.size;return}o.current.filtered.groups=new Set;let t=0;for(let f of c.current){let i=m.current.get(f),l=te(i);o.current.filtered.items.set(f,l),l>0&&t++}for(let[f,i]of s.current)for(let l of i)if(o.current.filtered.items.get(l)>0){o.current.filtered.groups.add(f);break}o.current.filtered.count=t}function re(){var f,i,l;let t=O();t&&(((f=t.parentElement)==null?void 0:f.firstChild)===t&&((l=(i=t.closest(k))==null?void 0:i.querySelector(qe))==null||l.scrollIntoView({block:"nearest"})),t.scrollIntoView({block:"nearest"}))}function O(){var t;return(t=n.current)==null?void 0:t.querySelector(`${K}[aria-selected="true"]`)}function _(){return Array.from(n.current.querySelectorAll(me))}function X(t){let i=_()[t];i&&T.setState("value",i.getAttribute(b))}function Y(t){var C;let f=O(),i=_(),l=i.findIndex(x=>x===f),g=i[l+t];(C=u.current)!=null&&C.loop&&(g=l+t<0?i[i.length-1]:l+t===i.length?i[0]:i[l+t]),g&&T.setState("value",g.getAttribute(b))}function ne(t){let f=O(),i=f==null?void 0:f.closest(k),l;for(;i&&!l;)i=t>0?Ye(i,k):Je(i,k),l=i==null?void 0:i.querySelector(me);l?T.setState("value",l.getAttribute(b)):Y(t)}let ae=()=>X(_().length-1),oe=t=>{t.preventDefault(),t.metaKey?ae():t.altKey?ne(1):Y(1)},ce=t=>{t.preventDefault(),t.metaKey?X(0):t.altKey?ne(-1):Y(-1)};return r.createElement("div",{ref:H([n,a]),...I,"cmdk-root":"",onKeyDown:t=>{var f;if((f=I.onKeyDown)==null||f.call(I,t),!t.defaultPrevented)switch(t.key){case"n":case"j":{$&&t.ctrlKey&&oe(t);break}case"ArrowDown":{oe(t);break}case"p":case"k":{$&&t.ctrlKey&&ce(t);break}case"ArrowUp":{ce(t);break}case"Home":{t.preventDefault(),X(0);break}case"End":{t.preventDefault(),ae();break}case"Enter":if(!t.nativeEvent.isComposing){t.preventDefault();let i=O();if(i){let l=new Event(Z);i.dispatchEvent(l)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:j.inputId,id:j.labelId,style:ze},v),r.createElement(ve.Provider,{value:T},r.createElement(pe.Provider,{value:j},d)))}),ge=r.forwardRef((e,a)=>{var N;let n=r.useId(),o=r.useRef(null),c=r.useContext(Re),s=D(),m=Pe(e),R=((N=m.current)==null?void 0:N.forceMount)??(c==null?void 0:c.forceMount);w(()=>s.item(n,c==null?void 0:c.id),[]);let u=Le(n,o,[e.value,e.children,o]),v=V(),d=y(h=>h.value&&h.value===u.current),p=y(h=>R||s.filter()===!1?!0:h.search?h.filtered.items.get(n)>0:!0);r.useEffect(()=>{let h=o.current;if(!(!h||e.disabled))return h.addEventListener(Z,S),()=>h.removeEventListener(Z,S)},[p,e.onSelect,e.disabled]);function S(){var h,P;M(),(P=(h=m.current).onSelect)==null||P.call(h,u.current)}function M(){v.setState("value",u.current,!0)}if(!p)return null;let{disabled:E,value:$,onSelect:I,...F}=e;return r.createElement("div",{ref:H([o,a]),...F,id:n,"cmdk-item":"",role:"option","aria-disabled":E||void 0,"aria-selected":d||void 0,"data-disabled":E||void 0,"data-selected":d||void 0,onPointerMove:E?void 0:M,onClick:E?void 0:S},e.children)}),he=r.forwardRef((e,a)=>{let{heading:n,children:o,forceMount:c,...s}=e,m=r.useId(),R=r.useRef(null),u=r.useRef(null),v=r.useId(),d=D(),p=y(E=>c||d.filter()===!1?!0:E.search?E.filtered.groups.has(m):!0);w(()=>d.group(m),[]),Le(m,R,[e.value,e.heading,u]);let S=r.useMemo(()=>({id:m,forceMount:c}),[c]),M=r.createElement(Re.Provider,{value:S},o);return r.createElement("div",{ref:H([R,a]),...s,"cmdk-group":"",role:"presentation",hidden:p?void 0:!0},n&&r.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:v},n),r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?v:void 0},M))}),Ee=r.forwardRef((e,a)=>{let{alwaysRender:n,...o}=e,c=r.useRef(null),s=y(m=>!m.search);return!n&&!s?null:r.createElement("div",{ref:H([c,a]),...o,"cmdk-separator":"",role:"separator"})}),Ce=r.forwardRef((e,a)=>{let{onValueChange:n,...o}=e,c=e.value!=null,s=V(),m=y(d=>d.search),R=y(d=>d.value),u=D(),v=r.useMemo(()=>{var p;let d=(p=u.commandRef.current)==null?void 0:p.querySelector(`${K}[${b}="${R}"]`);return d==null?void 0:d.getAttribute("id")},[R,u.commandRef]);return r.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),r.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":v,id:u.inputId,type:"text",value:c?e.value:m,onChange:d=>{c||s.setState("search",d.target.value),n==null||n(d.target.value)}})}),Se=r.forwardRef((e,a)=>{let{onValueChange:n,...o}=e,c=e.value!=null,s=V(),m=y(d=>d.search),R=y(d=>d.value),u=D(),v=r.useMemo(()=>{var p;let d=(p=u.commandRef.current)==null?void 0:p.querySelector(`${K}[${b}="${R}"]`);return d==null?void 0:d.getAttribute("id")},[R,u.commandRef]);return r.useEffect(()=>{e.value!=null&&s.setState("search",e.value)},[e.value]),r.createElement("textarea",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!0,"aria-autocomplete":"list",role:"combobox","aria-controls":u.listId,"aria-labelledby":u.labelId,className:o.className,"aria-activedescendant":v,id:u.inputId,value:c?e.value:m,onChange:d=>{c||s.setState("search",d.target.value),n==null||n(d.target.value)}})}),Te=r.forwardRef((e,a)=>{let{children:n,...o}=e,c=r.useRef(null),s=r.useRef(null),m=D();return r.useEffect(()=>{if(s.current&&c.current){let R=s.current,u=c.current,v,d=new ResizeObserver(()=>{v=requestAnimationFrame(()=>{let p=R.offsetHeight;u.style.setProperty("--cmdk-list-height",p.toFixed(1)+"px")})});return d.observe(R),()=>{cancelAnimationFrame(v),d.unobserve(R)}}},[]),r.createElement("div",{ref:H([c,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:m.listId,"aria-labelledby":m.inputId},r.createElement("div",{ref:s,"cmdk-list-sizer":""},n))}),be=r.forwardRef((e,a)=>{let{open:n,onOpenChange:o,overlayClassName:c,contentClassName:s,container:m,...R}=e;return r.createElement(L.Root,{open:n,onOpenChange:o},r.createElement(L.Portal,{container:m},r.createElement(L.Overlay,{"cmdk-overlay":"",className:c}),r.createElement(L.Content,{"aria-label":e.label,"cmdk-dialog":"",className:s},r.createElement(ee,{ref:a,...R}))))}),ye=r.forwardRef((e,a)=>{let n=r.useRef(!0),o=y(c=>c.filtered.count===0);return r.useEffect(()=>{n.current=!1},[]),n.current||!o?null:r.createElement("div",{ref:a,...e,"cmdk-empty":"",role:"presentation"})}),Me=r.forwardRef((e,a)=>{let{progress:n,children:o,...c}=e;return r.createElement("div",{ref:a,...c,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},r.createElement("div",{"aria-hidden":!0},o))}),Xe=Object.assign(ee,{List:Te,Item:ge,Input:Ce,Group:he,Separator:Ee,Dialog:be,Empty:ye,Loading:Me,Textarea:Se});function Ye(e,a){let n=e.nextElementSibling;for(;n;){if(n.matches(a))return n;n=n.nextElementSibling}}function Je(e,a){let n=e.previousElementSibling;for(;n;){if(n.matches(a))return n;n=n.previousElementSibling}}function Pe(e){let a=r.useRef(e);return w(()=>{a.current=e}),a}var w=typeof window>"u"?r.useEffect:r.useLayoutEffect;function A(e){let a=r.useRef();return a.current===void 0&&(a.current=e()),a}function H(e){return a=>{e.forEach(n=>{typeof n=="function"?n(a):n!=null&&(n.current=a)})}}function y(e){let a=V(),n=()=>e(a.snapshot());return r.useSyncExternalStore(a.subscribe,n,n)}function Le(e,a,n){let o=r.useRef(),c=D();return w(()=>{var m;let s=(()=>{var R;for(let u of n){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u)return u.current?(R=u.current.textContent)==null?void 0:R.trim().toLowerCase():o.current}})();c.value(e,s),(m=a.current)==null||m.setAttribute(b,s),o.current=s}),o}var We=()=>{let[e,a]=r.useState(),n=A(()=>new Map);return w(()=>{n.current.forEach(o=>o()),n.current=new Map},[e]),(o,c)=>{n.current.set(o,c),a({})}},ze={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};0&&(module.exports={Command,CommandDialog,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandLoading,CommandRoot,CommandSeparator,CommandTextArea,useCommandState});
