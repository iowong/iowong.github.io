import{o as t,c as e,w as l,i as n,h as o,b as a,d as s,k as r,m as i}from"./index-423fb64a.js";import{_ as u}from"./_plugin-vue_export-helper.1b428a4d.js";const c=u({data:()=>({txt:""}),methods:{jx(){let t=this.txt,e=(new DOMParser).parseFromString(t,"text/html"),l=e.querySelector('meta[property="og:title"]');if(l){let t=l.getAttribute("content");console.log(t)}let n=e.querySelector("strong.ll.rating_num");if(n){let t=n.textContent||n.innerText;console.log(t)}let o=e.querySelectorAll("#info > span:nth-child(3) > span.attrs a"),a="";o.forEach((function(t){let e=t.textContent||t.innerText;a&&(a+="/"),a+=e})),console.log(a),this.txt=a}}},[["render",function(u,c,d,x,m,p){const g=r,f=i,h=n;return t(),e(h,{class:"box1"},{default:l((()=>[o("div",null,[o("div",{class:"box"},[o("span",null,"源码:"),a(g,{class:"kuang",maxlength:"-1",modelValue:m.txt,"onUpdate:modelValue":c[0]||(c[0]=t=>m.txt=t)},null,8,["modelValue"])])]),o("div",null,[a(f,{style:{"margin-right":"30px"},onClick:c[1]||(c[1]=t=>p.jx()),class:"mini-btn",type:"primary",size:"mini"},{default:l((()=>[s("解析")])),_:1})])])),_:1})}],["__scopeId","data-v-e4886db5"]]);export{c as default};
