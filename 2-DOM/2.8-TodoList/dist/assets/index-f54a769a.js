(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const l=document.querySelector(".search input"),s=document.querySelector(".search .btn-add"),r=document.querySelector(".li-container ul"),i=document.querySelector(".empty"),e=document.querySelector(".task-count");function t(){const n=r.children.length;e.textContent=n,i.style.display=n===0?"block":"none"}function c(){const n=Array.from(r.children).map(o=>o.textContent);localStorage.setItem("items",JSON.stringify(n))}function d(){const n=localStorage.getItem("items");n&&JSON.parse(n).forEach(u)}function u(n){const o=document.createElement("li");o.innerHTML=`<p>${n}</p><button class="btn-delete">x</button>`,o.querySelector(".btn-delete").addEventListener("click",function(){o.remove(),t(),c()}),r.appendChild(o),r.style.display="block",t()}s.addEventListener("click",function(n){n.preventDefault();const o=l.value;o!==""&&(u(o),c(),l.value="")}),d()});
