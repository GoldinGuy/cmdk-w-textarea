import{a as ne}from"./chunk-XJATAMEX.mjs";import*as T from"@radix-ui/react-dialog";import*as t from"react";var de='[cmdk-list-sizer=""]',O='[cmdk-group=""]',W='[cmdk-group-items=""]',fe='[cmdk-group-heading=""]',N='[cmdk-item=""]',re=`${N}:not([aria-disabled="true"])`,J="cmdk-item-select",C="data-value",me=(n,a)=>ne(n,a),oe=t.createContext(void 0),w=()=>t.useContext(oe),ae=t.createContext(void 0),_=()=>t.useContext(ae),se=t.createContext(void 0),ce=t.forwardRef((n,a)=>{let r=t.useRef(null),o=I(()=>{var e;return{search:"",value:n.value??((e=n.defaultValue)==null?void 0:e.toLowerCase())??"",filtered:{count:0,items:new Map,groups:new Set}}}),i=I(()=>new Set),f=I(()=>new Map),m=I(()=>new Map),v=I(()=>new Set),u=ie(n),{label:R,children:d,value:p,onValueChange:M,filter:P,shouldFilter:x,vimBindings:F=!0,...k}=n,K=t.useId(),G=t.useId(),b=t.useId(),S=Te();D(()=>{if(p!==void 0){let e=p.trim().toLowerCase();o.current.value=e,S(6,X),E.emit()}},[p]);let E=t.useMemo(()=>({subscribe:e=>(v.current.add(e),()=>v.current.delete(e)),snapshot:()=>o.current,setState:(e,l,s)=>{var c,g,h;if(!Object.is(o.current[e],l)){if(o.current[e]=l,e==="search")z(),j(),S(1,q);else if(e==="value")if(((c=u.current)==null?void 0:c.value)!==void 0){let L=l??"";(h=(g=u.current).onValueChange)==null||h.call(g,L);return}else s||S(5,X);E.emit()}},emit:()=>{v.current.forEach(e=>e())}}),[]),$=t.useMemo(()=>({value:(e,l)=>{l!==m.current.get(e)&&(m.current.set(e,l),o.current.filtered.items.set(e,Q(l)),S(2,()=>{j(),E.emit()}))},item:(e,l)=>(i.current.add(e),l&&(f.current.has(l)?f.current.get(l).add(e):f.current.set(l,new Set([e]))),S(3,()=>{z(),j(),o.current.value||q(),E.emit()}),()=>{m.current.delete(e),i.current.delete(e),o.current.filtered.items.delete(e);let s=A();S(4,()=>{z(),(s==null?void 0:s.getAttribute("id"))===e&&q(),E.emit()})}),group:e=>(f.current.has(e)||f.current.set(e,new Set),()=>{m.current.delete(e),f.current.delete(e)}),filter:()=>u.current.shouldFilter,label:R||n["aria-label"],commandRef:r,listId:K,inputId:b,labelId:G}),[]);function Q(e){var s;let l=((s=u.current)==null?void 0:s.filter)??me;return e?l(e,o.current.search):0}function j(){if(!r.current||!o.current.search||u.current.shouldFilter===!1)return;let e=o.current.filtered.items,l=[];o.current.filtered.groups.forEach(c=>{let g=f.current.get(c),h=0;g.forEach(L=>{let ue=e.get(L);h=Math.max(ue,h)}),l.push([c,h])});let s=r.current.querySelector(de);H().sort((c,g)=>{let h=c.getAttribute(C),L=g.getAttribute(C);return(e.get(L)??0)-(e.get(h)??0)}).forEach(c=>{let g=c.closest(W);g?g.appendChild(c.parentElement===g?c:c.closest(`${W} > *`)):s.appendChild(c.parentElement===s?c:c.closest(`${W} > *`))}),l.sort((c,g)=>g[1]-c[1]).forEach(c=>{let g=r.current.querySelector(`${O}[${C}="${c[0]}"]`);g==null||g.parentElement.appendChild(g)})}function q(){let e=H().find(s=>!s.ariaDisabled),l=e==null?void 0:e.getAttribute(C);E.setState("value",l||void 0)}function z(){if(!o.current.search||u.current.shouldFilter===!1){o.current.filtered.count=i.current.size;return}o.current.filtered.groups=new Set;let e=0;for(let l of i.current){let s=m.current.get(l),c=Q(s);o.current.filtered.items.set(l,c),c>0&&e++}for(let[l,s]of f.current)for(let c of s)if(o.current.filtered.items.get(c)>0){o.current.filtered.groups.add(l);break}o.current.filtered.count=e}function X(){var l,s,c;let e=A();e&&(((l=e.parentElement)==null?void 0:l.firstChild)===e&&((c=(s=e.closest(O))==null?void 0:s.querySelector(fe))==null||c.scrollIntoView({block:"nearest"})),e.scrollIntoView({block:"nearest"}))}function A(){var e;return(e=r.current)==null?void 0:e.querySelector(`${N}[aria-selected="true"]`)}function H(){return Array.from(r.current.querySelectorAll(re))}function U(e){let s=H()[e];s&&E.setState("value",s.getAttribute(C))}function B(e){var h;let l=A(),s=H(),c=s.findIndex(L=>L===l),g=s[c+e];(h=u.current)!=null&&h.loop&&(g=c+e<0?s[s.length-1]:c+e===s.length?s[0]:s[c+e]),g&&E.setState("value",g.getAttribute(C))}function Y(e){let l=A(),s=l==null?void 0:l.closest(O),c;for(;s&&!c;)s=e>0?ye(s,O):xe(s,O),c=s==null?void 0:s.querySelector(re);c?E.setState("value",c.getAttribute(C)):B(e)}let Z=()=>U(H().length-1),ee=e=>{e.preventDefault(),e.metaKey?Z():e.altKey?Y(1):B(1)},te=e=>{e.preventDefault(),e.metaKey?U(0):e.altKey?Y(-1):B(-1)};return t.createElement("div",{ref:V([r,a]),...k,"cmdk-root":"",onKeyDown:e=>{var l;if((l=k.onKeyDown)==null||l.call(k,e),!e.defaultPrevented)switch(e.key){case"n":case"j":{F&&e.ctrlKey&&ee(e);break}case"ArrowDown":{ee(e);break}case"p":case"k":{F&&e.ctrlKey&&te(e);break}case"ArrowUp":{te(e);break}case"Home":{e.preventDefault(),U(0);break}case"End":{e.preventDefault(),Z();break}case"Enter":if(!e.nativeEvent.isComposing){e.preventDefault();let s=A();if(s){let c=new Event(J);s.dispatchEvent(c)}}}}},t.createElement("label",{"cmdk-label":"",htmlFor:$.inputId,id:$.labelId,style:Le},R),t.createElement(ae.Provider,{value:E},t.createElement(oe.Provider,{value:$},d)))}),ve=t.forwardRef((n,a)=>{var G;let r=t.useId(),o=t.useRef(null),i=t.useContext(se),f=w(),m=ie(n),v=((G=m.current)==null?void 0:G.forceMount)??(i==null?void 0:i.forceMount);D(()=>f.item(r,i==null?void 0:i.id),[]);let u=le(r,o,[n.value,n.children,o]),R=_(),d=y(b=>b.value&&b.value===u.current),p=y(b=>v||f.filter()===!1?!0:b.search?b.filtered.items.get(r)>0:!0);t.useEffect(()=>{let b=o.current;if(!(!b||n.disabled))return b.addEventListener(J,M),()=>b.removeEventListener(J,M)},[p,n.onSelect,n.disabled]);function M(){var b,S;P(),(S=(b=m.current).onSelect)==null||S.call(b,u.current)}function P(){R.setState("value",u.current,!0)}if(!p)return null;let{disabled:x,value:F,onSelect:k,...K}=n;return t.createElement("div",{ref:V([o,a]),...K,id:r,"cmdk-item":"",role:"option","aria-disabled":x||void 0,"aria-selected":d||void 0,"data-disabled":x||void 0,"data-selected":d||void 0,onPointerMove:x?void 0:P,onClick:x?void 0:M},n.children)}),ge=t.forwardRef((n,a)=>{let{heading:r,children:o,forceMount:i,...f}=n,m=t.useId(),v=t.useRef(null),u=t.useRef(null),R=t.useId(),d=w(),p=y(x=>i||d.filter()===!1?!0:x.search?x.filtered.groups.has(m):!0);D(()=>d.group(m),[]),le(m,v,[n.value,n.heading,u]);let M=t.useMemo(()=>({id:m,forceMount:i}),[i]),P=t.createElement(se.Provider,{value:M},o);return t.createElement("div",{ref:V([v,a]),...f,"cmdk-group":"",role:"presentation",hidden:p?void 0:!0},r&&t.createElement("div",{ref:u,"cmdk-group-heading":"","aria-hidden":!0,id:R},r),t.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?R:void 0},P))}),pe=t.forwardRef((n,a)=>{let{alwaysRender:r,...o}=n,i=t.useRef(null),f=y(m=>!m.search);return!r&&!f?null:t.createElement("div",{ref:V([i,a]),...o,"cmdk-separator":"",role:"separator"})}),Re=t.forwardRef((n,a)=>{let{onValueChange:r,...o}=n,i=n.value!=null,f=_(),m=y(d=>d.search),v=y(d=>d.value),u=w(),R=t.useMemo(()=>{var p;let d=(p=u.commandRef.current)==null?void 0:p.querySelector(`${N}[${C}="${v}"]`);return d==null?void 0:d.getAttribute("id")},[v,u.commandRef]);return t.useEffect(()=>{n.value!=null&&f.setState("search",n.value)},[n.value]),t.createElement("input",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":u.listId,"aria-labelledby":u.labelId,"aria-activedescendant":R,id:u.inputId,type:"text",value:i?n.value:m,onChange:d=>{i||f.setState("search",d.target.value),r==null||r(d.target.value)}})}),be=t.forwardRef((n,a)=>{let{onValueChange:r,...o}=n,i=n.value!=null,f=_(),m=y(d=>d.search),v=y(d=>d.value),u=w(),R=t.useMemo(()=>{var p;let d=(p=u.commandRef.current)==null?void 0:p.querySelector(`${N}[${C}="${v}"]`);return d==null?void 0:d.getAttribute("id")},[v,u.commandRef]);return t.useEffect(()=>{n.value!=null&&f.setState("search",n.value)},[n.value]),t.createElement("textarea",{ref:a,...o,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!0,"aria-autocomplete":"list",role:"combobox","aria-controls":u.listId,"aria-labelledby":u.labelId,className:o.className,"aria-activedescendant":R,id:u.inputId,value:i?n.value:m,onChange:d=>{i||f.setState("search",d.target.value),r==null||r(d.target.value)}})}),he=t.forwardRef((n,a)=>{let{children:r,...o}=n,i=t.useRef(null),f=t.useRef(null),m=w();return t.useEffect(()=>{if(f.current&&i.current){let v=f.current,u=i.current,R,d=new ResizeObserver(()=>{R=requestAnimationFrame(()=>{let p=v.offsetHeight;u.style.setProperty("--cmdk-list-height",p.toFixed(1)+"px")})});return d.observe(v),()=>{cancelAnimationFrame(R),d.unobserve(v)}}},[]),t.createElement("div",{ref:V([i,a]),...o,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:m.listId,"aria-labelledby":m.inputId},t.createElement("div",{ref:f,"cmdk-list-sizer":""},r))}),Ee=t.forwardRef((n,a)=>{let{open:r,onOpenChange:o,overlayClassName:i,contentClassName:f,container:m,...v}=n;return t.createElement(T.Root,{open:r,onOpenChange:o},t.createElement(T.Portal,{container:m},t.createElement(T.Overlay,{"cmdk-overlay":"",className:i}),t.createElement(T.Content,{"aria-label":n.label,"cmdk-dialog":"",className:f},t.createElement(ce,{ref:a,...v}))))}),Ce=t.forwardRef((n,a)=>{let r=t.useRef(!0),o=y(i=>i.filtered.count===0);return t.useEffect(()=>{r.current=!1},[]),r.current||!o?null:t.createElement("div",{ref:a,...n,"cmdk-empty":"",role:"presentation"})}),Se=t.forwardRef((n,a)=>{let{progress:r,children:o,...i}=n;return t.createElement("div",{ref:a,...i,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},t.createElement("div",{"aria-hidden":!0},o))}),Ie=Object.assign(ce,{List:he,Item:ve,Input:Re,Group:ge,Separator:pe,Dialog:Ee,Empty:Ce,Loading:Se,Textarea:be});function ye(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function xe(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function ie(n){let a=t.useRef(n);return D(()=>{a.current=n}),a}var D=typeof window>"u"?t.useEffect:t.useLayoutEffect;function I(n){let a=t.useRef();return a.current===void 0&&(a.current=n()),a}function V(n){return a=>{n.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}function y(n){let a=_(),r=()=>n(a.snapshot());return t.useSyncExternalStore(a.subscribe,r,r)}function le(n,a,r){let o=t.useRef(),i=w();return D(()=>{var m;let f=(()=>{var v;for(let u of r){if(typeof u=="string")return u.trim().toLowerCase();if(typeof u=="object"&&"current"in u)return u.current?(v=u.current.textContent)==null?void 0:v.trim().toLowerCase():o.current}})();i.value(n,f),(m=a.current)==null||m.setAttribute(C,f),o.current=f}),o}var Te=()=>{let[n,a]=t.useState(),r=I(()=>new Map);return D(()=>{r.current.forEach(o=>o()),r.current=new Map},[n]),(o,i)=>{r.current.set(o,i),a({})}},Le={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};export{Ie as Command,Ee as CommandDialog,Ce as CommandEmpty,ge as CommandGroup,Re as CommandInput,ve as CommandItem,he as CommandList,Se as CommandLoading,ce as CommandRoot,pe as CommandSeparator,be as CommandTextArea,y as useCommandState};
