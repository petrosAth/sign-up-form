(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function c(o,t){return o===t}function i(o,t,n){if(o)n.textContent="* Passwords do not match",t.push(n,t),t.forEach(s=>{s.classList.add("error")});else{let s=document.querySelector(".error__message"),e=document.querySelectorAll(".error");s.textContent="\xA0",e.forEach(r=>{r.classList.remove("error")})}}function u(o){let t=document.querySelector("#form__data__password"),n=document.querySelector("#form__data__confirm-password"),s=t.value,e=n.value;if(c(s,e))o.submit();else{let r=document.querySelector(".form__data__password__error");i(!0,[t,n],r),o.reportValidity()}}function a(){let o=document.querySelector("#form");document.querySelector(".button").addEventListener("click",()=>{o.checkValidity()?u(o):o.reportValidity()})}a();
