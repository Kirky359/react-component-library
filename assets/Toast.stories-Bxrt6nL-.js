import{j as e}from"./jsx-runtime-DMMhMOAu.js";import{r as d}from"./iframe-C0lgRGMc.js";import{c as l,X as I}from"./x-C9JvKKK7.js";import"./preload-helper-PPVm8Dsz.js";const $=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],j=l("circle-alert",$);const E=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],q=l("circle-check-big",E);const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],W=l("circle-x",B);const z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],A=l("info",z),M={success:{icon:q,bg:"bg-green-50",border:"border-green-500",text:"text-green-800",iconColor:"text-green-500"},error:{icon:W,bg:"bg-red-50",border:"border-red-500",text:"text-red-800",iconColor:"text-red-500"},warning:{icon:j,bg:"bg-yellow-50",border:"border-yellow-500",text:"text-yellow-800",iconColor:"text-yellow-500"},info:{icon:A,bg:"bg-blue-50",border:"border-blue-500",text:"text-blue-800",iconColor:"text-blue-500"}},y=({message:f,type:h="info",duration:u=3e3,onClose:x,showCloseButton:b=!0})=>{const[w,m]=d.useState(!1),[T,C]=d.useState(!1);d.useEffect(()=>{if(m(!0),u>0){const _=setTimeout(()=>p(),u);return()=>clearTimeout(_)}},[u]);const p=()=>{C(!0),setTimeout(()=>{m(!1),x?.()},300)},{icon:k,bg:v,border:S,text:g,iconColor:N}=M[h];return w?e.jsx("div",{className:`relative transition-all duration-300 ${T?"opacity-0 translate-x-full":"opacity-100 translate-x-0"}`,role:"alert",children:e.jsxs("div",{className:`flex items-start gap-3 p-4 rounded-lg border-l-4 shadow-lg ${v} ${S} min-w-80 max-w-md`,children:[e.jsx(k,{className:N,size:20,"aria-hidden":"true"}),e.jsx("p",{className:`flex-1 text-sm font-medium ${g}`,children:f}),b&&e.jsx("button",{onClick:p,className:`${g} hover:opacity-70 transition-opacity`,"aria-label":"Close notification",children:e.jsx(I,{size:18})})]})}):null};y.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const F={title:"Feedback/Toast",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{type:{control:"select",options:["success","error","warning","info"]},duration:{control:{type:"number",min:0,max:1e4,step:500}},showCloseButton:{control:"boolean"}}},s={args:{message:"Operation completed successfully!",type:"success",duration:3e3}},r={args:{message:"An error occurred. Please try again.",type:"error",duration:3e3}},o={args:{message:"Warning: This action cannot be undone.",type:"warning",duration:3e3}},t={args:{message:"Here is some useful information for you.",type:"info",duration:3e3}},a={args:{message:"This is a much longer notification message that demonstrates how the toast component handles multiple lines of text and wraps appropriately.",type:"info",duration:5e3}},n={args:{message:"This toast will not auto-dismiss.",type:"info",duration:0}},i={args:{message:"This toast has no close button.",type:"success",duration:3e3,showCloseButton:!1}},c={args:{message:"Quick notification!",type:"success",duration:1e3}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Operation completed successfully!',
    type: 'success',
    duration: 3000
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'An error occurred. Please try again.',
    type: 'error',
    duration: 3000
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Warning: This action cannot be undone.',
    type: 'warning',
    duration: 3000
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Here is some useful information for you.',
    type: 'info',
    duration: 3000
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a much longer notification message that demonstrates how the toast component handles multiple lines of text and wraps appropriately.',
    type: 'info',
    duration: 5000
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This toast will not auto-dismiss.',
    type: 'info',
    duration: 0
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This toast has no close button.',
    type: 'success',
    duration: 3000,
    showCloseButton: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Quick notification!',
    type: 'success',
    duration: 1000
  }
}`,...c.parameters?.docs?.source}}};const H=["Success","Error","Warning","Info","LongMessage","NoDuration","WithoutCloseButton","ShortDuration"];export{r as Error,t as Info,a as LongMessage,n as NoDuration,c as ShortDuration,s as Success,o as Warning,i as WithoutCloseButton,H as __namedExportsOrder,F as default};
