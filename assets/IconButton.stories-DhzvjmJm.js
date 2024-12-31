import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as x,I as n}from"./IconButton-CbExvevs.js";import{S as j}from"./Stack-BygXag9b.js";import"./index-DRjF_FHU.js";const o=x(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),M={title:"通用元件/IconButton",component:n,parameters:{layout:"centered"},args:{children:e.jsx(o,{})},tags:["autodocs"]},a={name:"預設"},r={name:"尺寸",render:()=>e.jsxs(j,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(n,{"aria-label":"delete",size:"small",children:e.jsx(o,{fontSize:"inherit"})}),e.jsx(n,{"aria-label":"delete",size:"small",children:e.jsx(o,{fontSize:"small"})}),e.jsx(n,{"aria-label":"delete",size:"large",component:"a",href:"/",children:e.jsx(o,{})})]})},s={name:"讀取中",args:{loading:!0}},t={name:"禁用",args:{disabled:!0}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設'
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <Stack spacing={1} direction="row" alignItems="center">
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large" component="a" href="/">
        <DeleteIcon />
      </IconButton>
    </Stack>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,I;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '讀取中',
  args: {
    loading: true
  }
}`,...(I=(g=s.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var S,h,z;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '禁用',
  args: {
    disabled: true
  }
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const k=["Main","Sizes","Loading","Disable"];export{t as Disable,s as Loading,a as Main,r as Sizes,k as __namedExportsOrder,M as default};
