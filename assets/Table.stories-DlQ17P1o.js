import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{T as e}from"./UploadFile-DRUiyWNa.js";import"./IconButton-CbExvevs.js";import"./LoadingIndicator-BY7ZTKnp.js";import"./Dot-kaPYFofX.js";import"./Drawer-k-a20FxL.js";import"./ImageArray-DIeSA17V.js";import"./ModalHost-O-Lo-BdS.js";import"./index-DRjF_FHU.js";import"./Toaster-BjAmHl9m.js";import"./Box-DIij3AdC.js";import"./Stack-BygXag9b.js";import"./Close-Cvwy6eSZ.js";import"./useSlot-0E7IaSh4.js";import"./index-Ce3zGP_a.js";import"./Paper-CcsFN5SX.js";const O={title:"展示元件/Table",component:e,tags:["autodocs"]},o=[{name:{firstName:"John",lastName:"Doe"},address:"261 Erdman Ford",city:"East Daphne",state:"Kentucky"},{name:{firstName:"Jane",lastName:"Doe"},address:"769 Dominic Grove",city:"Columbus",state:"Ohio"},{name:{firstName:"Joe",lastName:"Doe"},address:"566 Brakus Inlet",city:"South Linda",state:"West Virginia"},{name:{firstName:"Kevin",lastName:"Vandy"},address:"722 Emie Stream",city:"Lincoln",state:"Nebraska"},{name:{firstName:"Joshua",lastName:"Rolluffs"},address:"32188 Larkin Turnpike",city:"Omaha",state:"Nebraska"},{name:{firstName:"Alice",lastName:"Smith"},address:"123 Main Street",city:"Springfield",state:"Illinois"},{name:{firstName:"Bob",lastName:"Johnson"},address:"456 Elm Street",city:"Baltimore",state:"Maryland"},{name:{firstName:"Emily",lastName:"Brown"},address:"789 Oak Street",city:"Tucson",state:"Arizona"},{name:{firstName:"Michael",lastName:"Williams"},address:"101 Pine Street",city:"Austin",state:"Texas"},{name:{firstName:"Sara",lastName:"Davis"},address:"555 Maple Street",city:"Portland",state:"Oregon"}],m=[{accessorKey:"name.firstName",header:"First Name",size:150},{accessorKey:"name.lastName",header:"Last Name",size:150},{accessorKey:"address",header:"Address",size:200},{accessorKey:"city",header:"City",size:150},{accessorKey:"state",header:"State",size:150}],a={name:"預設",render:()=>n.jsx(e,{data:o,columns:m})},s={name:"邊框",render:()=>n.jsx(e,{data:o,columns:m,bordered:!0})},r={name:"可選擇列",render:()=>n.jsx(e,{data:o,columns:m,enableRowSelection:!0})},t={name:"分頁",render:()=>n.jsx(e,{localization:{of:"筆，總筆數:",rowsPerPage:"每頁數量",goToNextPage:"下一頁",goToPreviousPage:"上一頁",noRecordsToDisplay:"查無資料"},data:[...o,{name:{firstName:"new",lastName:"new"},address:"new",city:"new",state:"new"}],columns:m,enablePagination:!0})};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設',
  render: () => <Table data={data} columns={columns} />
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '邊框',
  render: () => <Table data={data} columns={columns} bordered />
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var N,y,g;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '可選擇列',
  render: () => <Table data={data} columns={columns} enableRowSelection />
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,S,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '分頁',
  render: () => <Table localization={{
    of: '筆，總筆數:',
    rowsPerPage: '每頁數量',
    goToNextPage: '下一頁',
    goToPreviousPage: '上一頁',
    noRecordsToDisplay: '查無資料'
  }} data={[...data, {
    name: {
      firstName: 'new',
      lastName: 'new'
    },
    address: 'new',
    city: 'new',
    state: 'new'
  }]} columns={columns} enablePagination />
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const A=["Main","Bordered","CheckBox","Pagination"];export{s as Bordered,r as CheckBox,a as Main,t as Pagination,A as __namedExportsOrder,O as default};
