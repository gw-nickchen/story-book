import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{c as re,r as N}from"./index-DRjF_FHU.js";import{c as K,I as J}from"./IconButton-CbExvevs.js";import{M as le,T as oe,C as se}from"./Close-Cvwy6eSZ.js";import{B as O}from"./Box-DIij3AdC.js";import{S as te}from"./Stack-BygXag9b.js";const me=K(o.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),ue=K(o.jsx("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined"),de=K(o.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew"),pe=K(o.jsx("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7"}),"VisibilityOutlined");var ce={exports:{}};(function(d,h){(function(p,f){d.exports=f()})(re,function(){var p=1e3,f=6e4,w=36e5,I="millisecond",q="second",P="minute",$="hour",b="day",T="week",u="month",s="quarter",F="year",j="date",Y="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var a=["th","st","nd","rd"],e=i%100;return"["+i+(a[(e-20)%10]||a[e]||a[0])+"]"}},B=function(i,a,e){var t=String(i);return!t||t.length>=a?i:""+Array(a+1-t.length).join(e)+i},M={s:B,z:function(i){var a=-i.utcOffset(),e=Math.abs(a),t=Math.floor(e/60),n=e%60;return(a<=0?"+":"-")+B(t,2,"0")+":"+B(n,2,"0")},m:function i(a,e){if(a.date()<e.date())return-i(e,a);var t=12*(e.year()-a.year())+(e.month()-a.month()),n=a.clone().add(t,u),r=e-n<0,l=a.clone().add(t+(r?-1:1),u);return+(-(t+(e-n)/(r?n-l:l-n))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:u,y:F,w:T,d:b,D:j,h:$,m:P,s:q,ms:I,Q:s}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},z="en",W={};W[z]=A;var ne="$isDayjsObject",X=function(i){return i instanceof U||!(!i||!i[ne])},L=function i(a,e,t){var n;if(!a)return z;if(typeof a=="string"){var r=a.toLowerCase();W[r]&&(n=r),e&&(W[r]=e,n=r);var l=a.split("-");if(!n&&l.length>1)return i(l[0])}else{var c=a.name;W[c]=a,n=c}return!t&&n&&(z=n),n||!t&&z},v=function(i,a){if(X(i))return i.clone();var e=typeof a=="object"?a:{};return e.date=i,e.args=arguments,new U(e)},m=M;m.l=L,m.i=X,m.w=function(i,a){return v(i,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var U=function(){function i(e){this.$L=L(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ne]=!0}var a=i.prototype;return a.parse=function(e){this.$d=function(t){var n=t.date,r=t.utc;if(n===null)return new Date(NaN);if(m.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var l=n.match(Q);if(l){var c=l[2]-1||0,g=(l[7]||"0").substring(0,3);return r?new Date(Date.UTC(l[1],c,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)):new Date(l[1],c,l[3]||1,l[4]||0,l[5]||0,l[6]||0,g)}}return new Date(n)}(e),this.init()},a.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},a.$utils=function(){return m},a.isValid=function(){return this.$d.toString()!==Y},a.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},a.isAfter=function(e,t){return v(e)<this.startOf(t)},a.isBefore=function(e,t){return this.endOf(t)<v(e)},a.$g=function(e,t,n){return m.u(e)?this[t]:this.set(n,e)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(e,t){var n=this,r=!!m.u(t)||t,l=m.p(e),c=function(E,C){var S=m.w(n.$u?Date.UTC(n.$y,C,E):new Date(n.$y,C,E),n);return r?S:S.endOf(b)},g=function(E,C){return m.w(n.toDate()[E].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(C)),n)},y=this.$W,k=this.$M,x=this.$D,V="set"+(this.$u?"UTC":"");switch(l){case F:return r?c(1,0):c(31,11);case u:return r?c(1,k):c(0,k+1);case T:var D=this.$locale().weekStart||0,R=(y<D?y+7:y)-D;return c(r?x-R:x+(6-R),k);case b:case j:return g(V+"Hours",0);case $:return g(V+"Minutes",1);case P:return g(V+"Seconds",2);case q:return g(V+"Milliseconds",3);default:return this.clone()}},a.endOf=function(e){return this.startOf(e,!1)},a.$set=function(e,t){var n,r=m.p(e),l="set"+(this.$u?"UTC":""),c=(n={},n[b]=l+"Date",n[j]=l+"Date",n[u]=l+"Month",n[F]=l+"FullYear",n[$]=l+"Hours",n[P]=l+"Minutes",n[q]=l+"Seconds",n[I]=l+"Milliseconds",n)[r],g=r===b?this.$D+(t-this.$W):t;if(r===u||r===F){var y=this.clone().set(j,1);y.$d[c](g),y.init(),this.$d=y.set(j,Math.min(this.$D,y.daysInMonth())).$d}else c&&this.$d[c](g);return this.init(),this},a.set=function(e,t){return this.clone().$set(e,t)},a.get=function(e){return this[m.p(e)]()},a.add=function(e,t){var n,r=this;e=Number(e);var l=m.p(t),c=function(k){var x=v(r);return m.w(x.date(x.date()+Math.round(k*e)),r)};if(l===u)return this.set(u,this.$M+e);if(l===F)return this.set(F,this.$y+e);if(l===b)return c(1);if(l===T)return c(7);var g=(n={},n[P]=f,n[$]=w,n[q]=p,n)[l]||1,y=this.$d.getTime()+e*g;return m.w(y,this)},a.subtract=function(e,t){return this.add(-1*e,t)},a.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||Y;var r=e||"YYYY-MM-DDTHH:mm:ssZ",l=m.z(this),c=this.$H,g=this.$m,y=this.$M,k=n.weekdays,x=n.months,V=n.meridiem,D=function(C,S,H,Z){return C&&(C[S]||C(t,r))||H[S].slice(0,Z)},R=function(C){return m.s(c%12||12,C,"0")},E=V||function(C,S,H){var Z=C<12?"AM":"PM";return H?Z.toLowerCase():Z};return r.replace(_,function(C,S){return S||function(H){switch(H){case"YY":return String(t.$y).slice(-2);case"YYYY":return m.s(t.$y,4,"0");case"M":return y+1;case"MM":return m.s(y+1,2,"0");case"MMM":return D(n.monthsShort,y,x,3);case"MMMM":return D(x,y);case"D":return t.$D;case"DD":return m.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return D(n.weekdaysMin,t.$W,k,2);case"ddd":return D(n.weekdaysShort,t.$W,k,3);case"dddd":return k[t.$W];case"H":return String(c);case"HH":return m.s(c,2,"0");case"h":return R(1);case"hh":return R(2);case"a":return E(c,g,!0);case"A":return E(c,g,!1);case"m":return String(g);case"mm":return m.s(g,2,"0");case"s":return String(t.$s);case"ss":return m.s(t.$s,2,"0");case"SSS":return m.s(t.$ms,3,"0");case"Z":return l}return null}(C)||l.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(e,t,n){var r,l=this,c=m.p(t),g=v(e),y=(g.utcOffset()-this.utcOffset())*f,k=this-g,x=function(){return m.m(l,g)};switch(c){case F:r=x()/12;break;case u:r=x();break;case s:r=x()/3;break;case T:r=(k-y)/6048e5;break;case b:r=(k-y)/864e5;break;case $:r=k/w;break;case P:r=k/f;break;case q:r=k/p;break;default:r=k}return n?r:m.a(r)},a.daysInMonth=function(){return this.endOf(u).$D},a.$locale=function(){return W[this.$L]},a.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=L(e,t,!0);return r&&(n.$L=r),n},a.clone=function(){return m.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},i}(),ae=U.prototype;return v.prototype=ae,[["$ms",I],["$s",q],["$m",P],["$H",$],["$W",b],["$M",u],["$y",F],["$D",j]].forEach(function(i){ae[i[1]]=function(a){return this.$g(a,i[0],i[1])}}),v.extend=function(i,a){return i.$i||(i(a,U,v),i.$i=!0),v},v.locale=L,v.isDayjs=X,v.unix=function(i){return v(1e3*i)},v.en=W[z],v.Ls=W,v.p={},v})})(ce);const fe=(d,h)=>{if(h.length===0)return!0;const p=d.type;return h.some(f=>{if(f===p)return!0;if(f.endsWith("/*")){const w=f.split("/")[0],I=p.split("/")[0];if(w===I)return!0}return!1})},Ie=({value:d,defaultValue:h})=>{if(d===void 0&&h===void 0)throw new Error("Either `value` or `defaultValue` must be provided.");const p=d!==void 0,[f,w]=N.useState(h),I=N.useCallback(P=>{p||w(P)},[p]);return[p?d:f,I]};function ke(d){return h=>{d.forEach(p=>{typeof p=="function"?p(h):p!=null&&(p.current=h)})}}const qe=d=>typeof d!="number"?"":d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Ce=(d,h=0)=>{if(d===0)return"0 Bytes";const p=1024,f=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],w=Math.floor(Math.log(d)/Math.log(p));return`${(d/p**w).toFixed(h)} ${f[w]}`},ie=({imageUrl:d,title:h,pdf:p})=>{const[f,w]=N.useState(!1);return d?o.jsxs(o.Fragment,{children:[o.jsx(J,{size:"small",sx:{color:"#fff"},onClick:()=>w(!0),"aria-label":"preview",children:o.jsx(pe,{})}),o.jsx(le,{open:f,children:o.jsxs(O,{sx:{p:1,display:"flex",flexDirection:"column",height:"100vh"},children:[o.jsxs(O,{children:[o.jsx(oe,{variant:"h2",sx:{flexGrow:1,lineHeight:"40px",textAlign:"center",fontSize:"1.5rem",fontWeight:"bold",color:"#fff"},children:h}),o.jsx(J,{sx:{position:"absolute",top:0,right:0,color:"#fff"},onClick:()=>w(!1),"aria-label":"close",children:o.jsx(se,{})})]}),o.jsx(O,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",overflowY:"auto",msOverflowStyle:"none","&::-webkit-scrollbar":{display:"none"}},children:p?o.jsx(O,{component:"iframe",src:`${d}#toolbar=0`,width:"100%",height:"100%",title:h}):o.jsx(O,{component:"img",src:d,alt:"image",sx:{maxWidth:"100%",objectFit:"contain"}})})]})})]}):null};ie.__docgenInfo={description:"",methods:[],displayName:"PreviewModal",props:{imageUrl:{required:!1,tsType:{name:"string"},description:"The image source to be displayed."},title:{required:!1,tsType:{name:"string"},description:"The title of the image."},pdf:{required:!1,tsType:{name:"boolean"},description:"If true, the image is a pdf file and will be displayed in an iframe."}}};const G="application/pdf",ee=({image:d,imageName:h,acceptMimeTypes:p=["image/*",G],onChange:f,onTypeError:w,size:I="medium",shape:q="square",disablePreview:P=!1,enableOpenNewWindow:$=!0,deletable:b=!0,error:T,...u})=>{const[s,F]=N.useState(d),j=N.useMemo(()=>p.filter(M=>M.startsWith("image/")||M===G),[p]);N.useEffect(()=>{F(d)},[d]);const Y=M=>{if(!M.target.files||M.target.files.length===0)return;const z=M.target.files[0];if(!fe(z,j)){w==null||w();return}if(f){f(M,z);return}F(z)},Q=()=>{if(f){f({},void 0);return}F(void 0)},_=N.useMemo(()=>s?typeof s=="string"?s.includes(".pdf"):s.type===G:!1,[s]),A=N.useMemo(()=>{if(typeof s=="string")return s;if(s)return URL.createObjectURL(_?new Blob([s],{type:`${G};charset=utf-8`}):s)},[s,_]),B=N.useMemo(()=>h||(typeof s=="string"?s.split("/").pop():s==null?void 0:s.name),[s,h]);return o.jsx(O,{...u,sx:{p:s?1:0,border:2,borderStyle:s?"solid":"dashed",borderRadius:q==="square"?4:"50%",borderColor:T?"error.main":"divider",width:I==="small"?80:100,height:I==="small"?80:100,overflow:"hidden",aspectRatio:"1/1",position:"relative",backgroundColor:"background.paper","&:hover":{...!s&&{borderColor:"primary.main"},"& .action":{opacity:1}},...u==null?void 0:u.sx},children:s?o.jsxs(o.Fragment,{children:[o.jsx(O,{component:"div",className:"action",sx:{position:"absolute",background:"rgba(0, 0, 0, 0.45)",width:"calc(100% - 16px)",height:"calc(100% - 16px)",borderRadius:q==="square"?void 0:"50%",opacity:0,transition:"opacity 0.3s ease-in-out"},children:o.jsxs(te,{direction:"row",justifyContent:"center",alignItems:"center",height:"100%",flexWrap:"wrap",children:[!P&&o.jsx(ie,{imageUrl:A,title:B,pdf:_}),$&&o.jsx(J,{component:"a",size:"small",sx:{color:"#fff"},href:A,target:"_blank","aria-label":"open in new window",children:o.jsx(de,{})}),b&&o.jsx(J,{size:"small",sx:{color:"#fff"},onClick:Q,"aria-label":"delete",children:o.jsx(ue,{})})]})}),_?o.jsx(O,{component:"iframe",src:`${A}#toolbar=0`,width:"100%",height:"100%",title:B,sx:{"*":{msOverflowStyle:"none","&::-webkit-scrollbar":{display:"none"}}}}):o.jsx(O,{component:"img",src:A,alt:B,sx:{width:"100%",height:"100%",objectFit:"contain"}})]}):o.jsxs(O,{component:"label",sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:q==="square"?void 0:"50%",height:"100%",cursor:"pointer"},children:[o.jsx(me,{sx:{color:"divider"}}),o.jsx(O,{component:"input",type:"file",onClick:M=>{M.target.value="",M.stopPropagation()},sx:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1},onChange:Y,accept:j==null?void 0:j.join(","),role:"textbox","aria-label":"upload"})]})})};ee.__docgenInfo={description:"`ImageField` 上傳圖片，主要是用來包裝上傳圖片的 input，並提供預覽功能。",methods:[],displayName:"ImageField",props:{image:{required:!1,tsType:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}]},description:"The image source to be displayed."},imageName:{required:!1,tsType:{name:"string"},description:"The image name."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`The size of the component.

@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:`The shape of the component.

@default 'square'`,defaultValue:{value:"'square'",computed:!1}},disablePreview:{required:!1,tsType:{name:"boolean"},description:`If true, the preview will be hidden.

@default false`,defaultValue:{value:"false",computed:!1}},enableOpenNewWindow:{required:!1,tsType:{name:"boolean"},description:`If true, the open new window button will be hidden.

@default false`,defaultValue:{value:"true",computed:!1}},deletable:{required:!1,tsType:{name:"boolean"},description:`If true, the image can be deleted.

@default true`,defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"If true, the input will be error state."},acceptMimeTypes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']",defaultValue:{value:"['image/*', PDF_MIME_TYPE]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}}},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},onTypeError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the type is error."}}};const he=({maxCount:d=1,images:h,defaultConfig:p,onAdd:f,onDelete:w})=>{const[I,q]=N.useState(h??[]);N.useEffect(()=>{q(h??[])},[h]);const P=(b,T)=>{if(!T)return;const u={id:Date.now(),image:T,imageName:T.name};if(f){f(u,[...I,u]);return}q(s=>[...s,u])},$=b=>{if(w){const T=I.find(u=>u.id===b);if(!T)return;w(b,T,I.filter(u=>u.id!==b));return}q(T=>T.filter(u=>u.id!==b))};return o.jsxs(te,{direction:"row",alignItems:"center",gap:1,flexWrap:"wrap",children:[I.map(({id:b,...T})=>o.jsx(ee,{...p,...T,onChange:(u,s)=>{s||$(b)}},b)),d>I.length&&o.jsx(ee,{...p,onChange:P})]})};he.__docgenInfo={description:"`ImageArray` 將多個 `ImageField` 包裝成陣列，並提供新增、刪除功能。",methods:[],displayName:"ImageArray",props:{maxCount:{required:!1,tsType:{name:"number"},description:`The maximum number of images.

@default 1`,defaultValue:{value:"1",computed:!1}},images:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},description:"The images to be displayed."},defaultConfig:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'size' | 'disablePreview' | 'deletable' | 'acceptMimeTypes' | 'error' | 'onTypeError'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'disablePreview'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"},{name:"literal",value:"'error'"},{name:"literal",value:"'onTypeError'"}]}],raw:`Pick<
  ImageFieldProps,
  'size' | 'disablePreview' | 'deletable' | 'acceptMimeTypes' | 'error' | 'onTypeError'
>`},description:"The default configuration of the image field."},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(newImage: ImageInfo, newImages: ImageInfo[]) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]},name:"newImage"},{type:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},name:"newImages"}],return:{name:"void"}}},description:`The callback fired when the value is be added.

@param newImage - The new image.
@param newImages - The new images.`},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: number, deleteFile: ImageInfo, newImages: ImageInfo[]) => void",signature:{arguments:[{type:{name:"number"},name:"id"},{type:{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]},name:"deleteFile"},{type:{name:"Array",elements:[{name:"intersection",raw:`{
  id: number;
} & Required<Pick<ImageFieldProps, 'image'>> &
  Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>`,elements:[{name:"signature",type:"object",raw:`{
  id: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}}]}},{name:"Required",elements:[{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"literal",value:"'image'"}],raw:"Pick<ImageFieldProps, 'image'>"}],raw:"Required<Pick<ImageFieldProps, 'image'>>"},{name:"Pick",elements:[{name:"intersection",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
} & Omit<BoxProps, 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * The image source to be displayed.
   */
  image?: File | string;
  /**
   * The image name.
   */
  imageName?: string;
  /**
   * The size of the component.
   *
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  /**
   * The shape of the component.
   *
   * @default 'square'
   */
  shape?: 'circle' | 'square';
  /**
   * If true, the preview will be hidden.
   *
   * @default false
   */
  disablePreview?: boolean;
  /**
   * If true, the open new window button will be hidden.
   *
   * @default false
   */
  enableOpenNewWindow?: boolean;
  /**
   * If true, the image can be deleted.
   *
   * @default true
   */
  deletable?: boolean;
  /**
   * If true, the input will be error state.
   */
  error?: boolean;
  /**
   * The accept file mime types. only start with \`'image/'\` or \`'application/pdf'\`.
   *
   * @default ['image/*', 'application/pdf']
   */
  acceptMimeTypes?: string[];
  /**
   * Callback fired when the value is changed.
   *
   * @param event — The event source of the callback.
   * @param newImage — The new file.
   */
  onChange?: (event: object, newImage?: File) => void;
  /**
   * Callback fired when the type is error.
   */
  onTypeError?: () => void;
}`,signature:{properties:[{key:"image",value:{name:"union",raw:"File | string",elements:[{name:"File"},{name:"string"}],required:!1},description:"The image source to be displayed."},{key:"imageName",value:{name:"string",required:!1},description:"The image name."},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:`The size of the component.

@default 'medium'`},{key:"shape",value:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1},description:`The shape of the component.

@default 'square'`},{key:"disablePreview",value:{name:"boolean",required:!1},description:`If true, the preview will be hidden.

@default false`},{key:"enableOpenNewWindow",value:{name:"boolean",required:!1},description:`If true, the open new window button will be hidden.

@default false`},{key:"deletable",value:{name:"boolean",required:!1},description:`If true, the image can be deleted.

@default true`},{key:"error",value:{name:"boolean",required:!1},description:"If true, the input will be error state."},{key:"acceptMimeTypes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"The accept file mime types. only start with `'image/'` or `'application/pdf'`.\n\n@default ['image/*', 'application/pdf']"},{key:"onChange",value:{name:"signature",type:"function",raw:"(event: object, newImage?: File) => void",signature:{arguments:[{type:{name:"object"},name:"event"},{type:{name:"File"},name:"newImage"}],return:{name:"void"}},required:!1},description:`Callback fired when the value is changed.

@param event — The event source of the callback.
@param newImage — The new file.`},{key:"onTypeError",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Callback fired when the type is error."}]}},{name:"Omit",elements:[{name:"BoxProps"},{name:"literal",value:"'onChange'"}],raw:"Omit<BoxProps, 'onChange'>"}]},{name:"union",raw:"'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'",elements:[{name:"literal",value:"'imageName'"},{name:"literal",value:"'error'"},{name:"literal",value:"'deletable'"},{name:"literal",value:"'acceptMimeTypes'"}]}],raw:"Pick<ImageFieldProps, 'imageName' | 'error' | 'deletable' | 'acceptMimeTypes'>"}]}],raw:"ImageInfo[]"},name:"newImages"}],return:{name:"void"}}},description:`The callback fired when the value is be deleted.

@param id - The id of the image.
@param deleteFile - The file to be deleted.
@param newImages  - The new images.`}}};export{me as A,ee as I,he as a,Ce as b,qe as f,ke as m,Ie as u,fe as v};
