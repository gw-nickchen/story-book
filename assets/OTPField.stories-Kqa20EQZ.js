import{j as p}from"./jsx-runtime-DR9Q75dM.js";import{r as d}from"./index-DRjF_FHU.js";import{O as n}from"./UploadFile-DRUiyWNa.js";import"./IconButton-CbExvevs.js";import"./LoadingIndicator-BY7ZTKnp.js";import"./Dot-kaPYFofX.js";import"./Drawer-k-a20FxL.js";import"./ImageArray-DIeSA17V.js";import"./ModalHost-O-Lo-BdS.js";import"./Toaster-BjAmHl9m.js";import"./Box-DIij3AdC.js";import"./Stack-BygXag9b.js";import"./Close-Cvwy6eSZ.js";import"./useSlot-0E7IaSh4.js";import"./index-Ce3zGP_a.js";import"./Paper-CcsFN5SX.js";const w={title:"輸入元件/OTPField",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e=()=>{const[s,i]=d.useState("123456"),m=t=>{i(t)};return p.jsx(n,{length:5,autoFocus:!0,sx:{width:300},gap:1,TextFieldsProps:t=>({type:"text",size:"medium",placeholder:String(t)}),value:s,onChange:m})};e.__docgenInfo={description:"",methods:[],displayName:"Primary"};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('123456');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return <OTPField length={5} autoFocus sx={{
    width: 300
  }} gap={1} TextFieldsProps={(index: number) => ({
    type: 'text',
    size: 'medium',
    placeholder: String(index)
  })} value={value} onChange={handleChange} />;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,w as default};
