import{j as C}from"./jsx-runtime-DR9Q75dM.js";import{I as M,a as P}from"./ImageArray-DIeSA17V.js";import"./index-DRjF_FHU.js";import"./IconButton-CbExvevs.js";import"./Stack-BygXag9b.js";import"./Close-Cvwy6eSZ.js";import"./useSlot-0E7IaSh4.js";import"./index-Ce3zGP_a.js";import"./Box-DIij3AdC.js";const z={title:"輸入元件/ImageField",component:M,parameters:{layout:"centered"},tags:["autodocs"]},e={name:"預設",args:{image:"https://cdn2.ettoday.net/images/3017/d3017273.jpg",deletable:!1}},r={name:"輸入圖檔"},a={name:"圓形樣式",args:{shape:"circle"}},s={name:"錯誤樣式",args:{error:!0}},n={name:"只能上傳 png",args:{acceptMimeTypes:["image/png"],onTypeError:()=>alert("只能上傳 png 檔案")}},t={name:"另開視窗預覽",args:{disablePreview:!0,enableOpenNewWindow:!0,image:"https://cdn2.ettoday.net/images/3017/d3017273.jpg"}},o={name:"傳入圖片陣列",render:()=>C.jsx(P,{images:[{id:1,image:"https://cdn2.ettoday.net/images/3017/d3017273.jpg",imageName:"d3017273.jpg"}],maxCount:3})};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設',
  args: {
    image: 'https://cdn2.ettoday.net/images/3017/d3017273.jpg',
    deletable: false
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,d,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '輸入圖檔'
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,l,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '圓形樣式',
  args: {
    shape: 'circle'
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var j,w,h;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '錯誤樣式',
  args: {
    error: true
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,O,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '只能上傳 png',
  args: {
    acceptMimeTypes: ['image/png'],
    onTypeError: () => alert('只能上傳 png 檔案')
  }
}`,...(S=(O=n.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var b,E,N;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '另開視窗預覽',
  args: {
    disablePreview: true,
    enableOpenNewWindow: true,
    image: 'https://cdn2.ettoday.net/images/3017/d3017273.jpg'
  }
}`,...(N=(E=t.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var f,I,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '傳入圖片陣列',
  render: () => <ImageArray images={[{
    id: 1,
    image: 'https://cdn2.ettoday.net/images/3017/d3017273.jpg',
    imageName: 'd3017273.jpg'
  }]} maxCount={3} />
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const B=["Main","Upload","Circle","Error","OnlyPng","OpenNewWindow","Array"];export{o as Array,a as Circle,s as Error,e as Main,n as OnlyPng,t as OpenNewWindow,r as Upload,B as __namedExportsOrder,z as default};
