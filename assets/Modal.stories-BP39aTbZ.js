import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{r as l}from"./index-DRjF_FHU.js";import{B as r}from"./IconButton-CbExvevs.js";import{M as d,a as A,o as i}from"./ModalHost-O-Lo-BdS.js";import{B as a}from"./Box-DIij3AdC.js";import{T as y}from"./Close-Cvwy6eSZ.js";import{S as L}from"./Stack-BygXag9b.js";import"./LoadingIndicator-BY7ZTKnp.js";import"./useSlot-0E7IaSh4.js";import"./index-Ce3zGP_a.js";import"./Paper-CcsFN5SX.js";const K={title:"反饋元件/Modal",component:d,parameters:{layout:"fullscreen",disable:!0},tags:["autodocs"]},p={name:"預設",render:()=>{const[n,o]=l.useState(!1),s=()=>o(!0),t=()=>o(!1);return e.jsxs(a,{padding:4,children:[e.jsx(r,{onClick:s,children:"Open Modal"}),e.jsx(d,{title:"MUI",open:n,onClose:t,onSubmit:t,children:e.jsx(y,{gutterBottom:!0,children:"MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components."})})]})}},u={name:"讀取中",render:()=>{const[n,o]=l.useState(!1),[s,t]=l.useState(!1),g=()=>{o(!0),t(!0),setTimeout(()=>{t(!1)},2e3)},c=()=>o(!1);return e.jsxs(a,{padding:4,children:[e.jsx(r,{onClick:g,children:"Open Modal"}),e.jsx(d,{title:"MUI",open:n,PaperProps:{sx:{minWidth:600}},loading:s,onClose:c,onSubmit:c,children:e.jsx(y,{gutterBottom:!0,children:"MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components."})})]})}},m={name:"非同步 submit",render:()=>{const[n,o]=l.useState(!1),s=()=>o(!0),t=()=>o(!1),g=async()=>{await new Promise(c=>{setTimeout(c,1e3)}),t()};return e.jsxs(a,{padding:4,children:[e.jsx(r,{onClick:s,children:"Open Modal"}),e.jsx(d,{title:"MUI",open:n,onClose:t,onSubmit:g,children:e.jsx(y,{gutterBottom:!0,children:"MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components."})})]})}},h={name:"自訂 Action",render:()=>{const[n,o]=l.useState(!1),s=()=>o(!0),t=()=>o(!1);return e.jsxs(a,{padding:4,children:[e.jsx(r,{onClick:s,children:"Open Modal"}),e.jsx(d,{title:"MUI",open:n,onClose:t,customActions:e.jsx(a,{component:"button",sx:{p:2,border:1,borderStyle:"dotted",backgroundColor:"transparent",cursor:"pointer"},onClick:t,children:"Submit"}),children:e.jsx(y,{gutterBottom:!0,children:"MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components."})})]})}},E=()=>e.jsxs(a,{padding:4,children:[e.jsx(A,{}),e.jsxs(L,{spacing:2,direction:"row",children:[e.jsx(r,{color:"info",variant:"outlined",onClick:()=>i.info({title:"info",content:"this is a info modal."}),children:"Info Modal"}),e.jsx(r,{color:"success",variant:"outlined",onClick:()=>i.success({title:"success",content:"this is a success modal."}),children:"Success Modal"}),e.jsx(r,{color:"error",variant:"outlined",onClick:()=>i.error({title:"error",content:"this is a error modal."}),children:"Error Modal"}),e.jsx(r,{color:"warning",variant:"outlined",onClick:()=>i.warning({title:"warning",content:"this is a warning modal."}),children:"Warning Modal"}),e.jsx(r,{color:"warning",variant:"outlined",onClick:()=>i.confirm({title:"confirm",content:"this is a confirm modal.",onOk:async()=>new Promise(n=>{setTimeout(()=>{n()},2e3)})}),children:"Confirm Modal"})]})]}),f={name:"提示類型視窗",render:()=>e.jsx(E,{})};var M,x,C;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '預設',
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <Box padding={4}>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal title="MUI" open={open} onClose={handleClose} onSubmit={handleClose}>
          <Typography gutterBottom>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
        </Modal>
      </Box>;
  }
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var O,S,b;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '讀取中',
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOpen = () => {
      setOpen(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    const handleClose = () => setOpen(false);
    return <Box padding={4}>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal title="MUI" open={open} PaperProps={{
        sx: {
          minWidth: 600
        }
      }} loading={loading} onClose={handleClose} onSubmit={handleClose}>
          <Typography gutterBottom>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
        </Modal>
      </Box>;
  }
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var I,w,U;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '非同步 submit',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleSubmit = async () => {
      await new Promise(resolve => {
        setTimeout(resolve, 1000);
      });
      handleClose();
    };
    return <Box padding={4}>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal title="MUI" open={isOpen} onClose={handleClose} onSubmit={handleSubmit}>
          <Typography gutterBottom>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
        </Modal>
      </Box>;
  }
}`,...(U=(w=m.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var B,j,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '自訂 Action',
  render: () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <Box padding={4}>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal title="MUI" open={open} onClose={handleClose} customActions={<Box component="button" sx={{
        p: 2,
        border: 1,
        borderStyle: 'dotted',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      }} onClick={handleClose}>
              Submit
            </Box>}>
          <Typography gutterBottom>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
        </Modal>
      </Box>;
  }
}`,...(k=(j=h.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var v,T,P;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '提示類型視窗',
  render: () => <Quick />
}`,...(P=(T=f.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const N=["Main","Loading","Sync","CustomActions","QuickModal"];export{h as CustomActions,u as Loading,p as Main,f as QuickModal,m as Sync,N as __namedExportsOrder,K as default};
