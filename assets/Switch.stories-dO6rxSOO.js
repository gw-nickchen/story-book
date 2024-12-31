import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{S as r,F as s}from"./UploadFile-DRUiyWNa.js";import"./IconButton-CbExvevs.js";import"./LoadingIndicator-BY7ZTKnp.js";import"./Dot-kaPYFofX.js";import"./Drawer-k-a20FxL.js";import"./ImageArray-DIeSA17V.js";import"./ModalHost-O-Lo-BdS.js";import"./index-DRjF_FHU.js";import"./Toaster-BjAmHl9m.js";import{S as b}from"./Stack-BygXag9b.js";import"./Box-DIij3AdC.js";import"./Close-Cvwy6eSZ.js";import"./useSlot-0E7IaSh4.js";import"./index-Ce3zGP_a.js";import"./Paper-CcsFN5SX.js";const _={title:"輸入元件/Switch",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={name:"預設",args:{size:"medium"}},t={name:"尺寸",render:()=>e.jsxs(b,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(r,{}),e.jsx(r,{size:"small"})]})},o={name:"包含標籤",render:()=>e.jsxs(b,{spacing:2,children:[e.jsx(s,{control:e.jsx(r,{defaultChecked:!0}),label:"Label"}),e.jsx(s,{disabled:!0,control:e.jsx(r,{}),label:"Disabled"})]})};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設',
  args: {
    size: 'medium'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,l,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '尺寸',
  render: () => <Stack direction="row" alignItems="center" spacing={2}>
      <Switch />
      <Switch size="small" />
    </Stack>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,S;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '包含標籤',
  render: () => <Stack spacing={2}>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </Stack>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const y=["Main","Size","WithLabel"];export{a as Main,t as Size,o as WithLabel,y as __namedExportsOrder,_ as default};
