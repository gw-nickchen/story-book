import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{r as c}from"./index-DRjF_FHU.js";import{T as C,B as w}from"./Close-Cvwy6eSZ.js";import{g as S,a as R,s as $,u as T,c as I,d as j,b as M,S as A}from"./Stack-BygXag9b.js";import{k as h,a as g,m as L,C as _}from"./IconButton-CbExvevs.js";import{B as f}from"./Box-DIij3AdC.js";function U(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function N(e){return parseFloat(e)}function B(e){return R("MuiSkeleton",e)}S("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const F=e=>{const{classes:a,variant:t,animation:n,hasChildren:r,width:i,height:s}=e;return j({root:["root",t,n,r&&"withChildren",r&&!i&&"fitContent",r&&!s&&"heightAuto"]},B,a)},l=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,d=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,q=typeof l!="string"?g`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,D=typeof d!="string"?g`
        &::after {
          animation: ${d} 2s linear 0.5s infinite;
        }
      `:null,V=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.animation!==!1&&a[t.animation],t.hasChildren&&a.withChildren,t.hasChildren&&!t.width&&a.fitContent,t.hasChildren&&!t.height&&a.heightAuto]}})(L(({theme:e})=>{const a=U(e.shape.borderRadius)||"px",t=N(e.shape.borderRadius);return{display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:M(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${t}${a}/${Math.round(t/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:q||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:D||{"&::after":{animation:`${d} 2s linear 0.5s infinite`}}}]}})),b=c.forwardRef(function(a,t){const n=T({props:a,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:s="span",height:p,style:y,variant:v="text",width:x,...u}=n,m={...n,animation:r,component:s,variant:v,hasChildren:!!u.children},k=F(m);return o.jsx(V,{as:s,ref:t,className:I(k.root,i),ownerState:m,...u,style:{width:x,height:p,...y}})}),z=c.forwardRef(({children:e,loading:a,...t},n)=>o.jsx(C,{ref:n,color:"primary.main",...t,sx:{display:"flex",fontSize:"1.25rem",fontWeight:"bold","&:before":{content:'""',borderLeft:"5px solid",borderRadius:20,borderColor:"primary.main",mr:1},...t==null?void 0:t.sx},children:a?o.jsx(b,{variant:"text",sx:{width:"100%"}}):e}));z.__docgenInfo={description:"`DecorativeTitle` 在標題前加上裝飾線。",methods:[],displayName:"DecorativeTitle",props:{loading:{required:!1,tsType:{name:"boolean"},description:"If `true`, the title will show loading effect."}}};function P({count:e,height:a}){return o.jsx(A,{spacing:2,component:"div","aria-label":"loading content",children:Array(e||3).fill(null).map((t,n)=>n).map(t=>o.jsx(b,{variant:"rounded",height:a||40},t))})}P.__docgenInfo={description:`用來顯示載入中的內容，通常用在列表或表格中。

預設會顯示 3 個長條狀 Skeleton 元件。

參考 [Material-UI Skeleton](https://mui.com/material-ui/react-skeleton/)`,methods:[],displayName:"LoadingContent",props:{count:{required:!1,tsType:{name:"number"},description:`The Skeleton count.

@default 3`},height:{required:!1,tsType:{name:"number"},description:`Each Skeleton height.

@default 40`}}};function X({sx:e,children:a=o.jsx(_,{}),...t}){return o.jsx(w,{sx:{zIndex:n=>n.zIndex.drawer+1e3,...e},...t,children:a})}X.__docgenInfo={description:"`LoadingFullScreen` 全螢幕讀取中，通常用於非同步操作時提示使用者等待。\n\n參考 [Material-UI Backdrop](https://mui.com/material-ui/react-backdrop/)",methods:[],displayName:"LoadingFullScreen",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The loading indicator of the backdrop.\n\n@default\n\n```jsx\n<CircularProgress />\n```",defaultValue:{value:"<CircularProgress />",computed:!1}}}};const E=e=>e<3?3:e>5?5:e,W=(e,a)=>({animation:`bounce-loading ${e}s ${a*.07}s infinite ease-in-out`,animationFillMode:"both","@keyframes bounce-loading":{"33%":{transform:"translateY(10px)"},"66%":{transform:"translateY(-10px)"},"100%":{transform:"translateY(0)"}}}),Y=(e,a)=>({animation:`pulse-loading ${e}s ${a*.12/1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)`,animationFillMode:"both","@keyframes pulse-loading":{"0%":{transform:"scale(1)",opacity:1},"50%":{transform:"scale(0.1)",opacity:.7},"80%":{transform:"scale(1)",opacity:1}}}),K=(e,a)=>({animation:`beat-loading ${e}s ${a%2?0:`${.35/1}`}s infinite linear`,animationFillMode:"both","@keyframes beat-loading":{"50%":{transform:"scale(0.75)",opacity:.2},"100%":{transform:"scale(1)",opacity:1}}}),G=c.forwardRef(({type:e="bounce",frequency:a=.75,count:t=3},n)=>o.jsx(f,{ref:n,display:"flex",alignItems:"center",justifyContent:"center","data-testid":"loading-indicator",children:Array.from({length:E(t)}).map((r,i)=>o.jsx(f,{sx:{margin:"2px",width:"12px",height:"12px",bgcolor:"primary.main",borderRadius:"50%",...e==="bounce"&&W(a,i),...e==="pulse"&&Y(a,i),...e==="beat"&&K(a,i)}},i))}));G.__docgenInfo={description:"`LoadingIndicator` 是一個用來顯示載入中的元件。",methods:[],displayName:"GwLoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'bounce' | 'pulse' | 'beat'",elements:[{name:"literal",value:"'bounce'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'beat'"}]},description:`類型

@default 'bounce'`,defaultValue:{value:"'bounce'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:`顆數

@default 3`,defaultValue:{value:"3",computed:!1}},frequency:{required:!1,tsType:{name:"number"},description:`頻率 (s)

@default 0.75`,defaultValue:{value:"0.75",computed:!1}}}};export{z as D,G as L,b as S,P as a,X as b};
