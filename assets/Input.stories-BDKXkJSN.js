import{j as e}from"./jsx-runtime-DMMhMOAu.js";import{r as t}from"./iframe-C0lgRGMc.js";import{c as w,X as C}from"./x-C9JvKKK7.js";import"./preload-helper-PPVm8Dsz.js";const _=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],I=w("eye-off",_);const W=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$=w("eye",W),v=({type:u="text",placeholder:E="",value:r,onChange:b,clearable:j=!1,disabled:a=!1,label:f,error:m,className:N=""})=>{const[y,g]=t.useState(r||""),[s,P]=t.useState(!1),h=t.useId(),S=u==="password"&&s?"text":u;t.useEffect(()=>{r!==void 0&&g(r)},[r]);const T=q=>{const x=q.target.value;g(x),b?.(x)},k=()=>{g(""),b?.("")};return e.jsxs("div",{className:`w-full max-w-sm ${N}`,children:[f&&e.jsx("label",{htmlFor:h,className:"block text-sm font-medium text-gray-700 mb-1",children:f}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:h,type:S,value:y,onChange:T,placeholder:E,disabled:a,className:`w-full px-3 py-2 pr-10 border rounded-lg transition-colors focus:outline-none focus:ring-2 ${m?"border-red-500 focus:ring-red-500":"border-gray-300 focus:ring-blue-500 focus:border-blue-500"} ${a?"bg-gray-100 cursor-not-allowed":"bg-white"}`}),e.jsxs("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex gap-1",children:[u==="password"&&y&&e.jsx("button",{type:"button",onClick:()=>P(!s),disabled:a,className:`p-1 transition-colors ${a?"opacity-50 cursor-not-allowed":"text-gray-500 hover:text-gray-700"}`,"aria-label":s?"Hide password":"Show password",children:s?e.jsx(I,{size:18}):e.jsx($,{size:18})}),j&&y&&!a&&e.jsx("button",{type:"button",onClick:k,className:"p-1 text-gray-500 hover:text-gray-700 transition-colors","aria-label":"Clear input",children:e.jsx(C,{size:18})})]})]}),m&&e.jsx("p",{className:"mt-1 text-sm text-red-600",role:"alert",children:m})]})};v.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const A={title:"Components/Input",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number"]},clearable:{control:"boolean"},disabled:{control:"boolean"}}},o={args:{placeholder:"Enter text...",type:"text"}},l={args:{label:"Username",placeholder:"Enter your username",type:"text"}},n={args:{label:"Password",placeholder:"Enter your password",type:"password"}},c={args:{label:"Password",placeholder:"Enter your password",type:"password",clearable:!0}},d={args:{label:"Email Address",placeholder:"you@example.com",type:"email",clearable:!0}},p={args:{label:"Quantity",placeholder:"0",type:"number",clearable:!0}},i={args:{label:"Email",placeholder:"you@example.com",type:"email",error:"Please enter a valid email address",value:"invalid-email"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    type: 'text'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    clearable: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    clearable: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    placeholder: '0',
    type: 'number',
    clearable: true
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    error: 'Please enter a valid email address',
    value: 'invalid-email'
  }
}`,...i.parameters?.docs?.source}}};const D=["Default","WithLabel","Password","PasswordWithClear","Email","Number","WithError"];export{o as Default,d as Email,p as Number,n as Password,c as PasswordWithClear,i as WithError,l as WithLabel,D as __namedExportsOrder,A as default};
