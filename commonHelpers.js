import{i as p,a as u,S as x}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function M(){p.show({title:"Error",message:"Please enter a search term to begin your search.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}function v(){p.show({title:"Ooops...",message:"There are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}function z(){p.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}function C(){p.show({title:"Error",message:err.message,titleSize:"16px",titleLineHeight:"150%",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"bottomRight"})}const c={emptySearch:M,noImages:v,endOfSearch:z,errorMessage:C},d=document.querySelector(".loader"),g=document.querySelector(".btn");function f(){d.style.display="block"}function h(){d.style.display="none"}function y(){g.style.display="none"}function O(){g.style.display="block"}u.defaults.baseURL="https://pixabay.com/";const q="42174217-6daf07c41ac875e98ae2151fa";async function b(s,o){return(await u.get("api/",{params:{key:q,per_page:15,page:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function L({webformatURL:s,largeImageURL:o,tags:r,likes:i,views:e,comments:t,downloads:a}){return`<li class="gallery-item"><a href="${o}"><img class="gallery-image" src="${s}" alt="${r}" /></a>
<div class="description"> <p>Likes <span>${i}</span></p><p>Views <span>${e}</span></p><p>Comments <span>${t}</span></p><p>Downloads <span>${a}</span></p></div></li>`}const S=document.querySelector(".search-form"),n=document.querySelector(".gallery"),E=document.querySelector(".btn");let l=1,m="",w=0;const H=new x(".gallery a",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",P);E.addEventListener("click",$);async function P(s){s.preventDefault();const o=s.target.elements.image.value.trim();n.innerHTML="",y();try{if(o===""){c.emptySearch();return}f(),m=o,l=1;const r=await b(m,l);if(r.totalHits>0){const i=r.hits.map(L).join(`

`);n.insertAdjacentHTML("beforeend",i);const e=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:e.height,behavior:"smooth"}),H.refresh(),O(),S.reset(),w=Math.ceil(r.totalHits/15)}else n.innerHTML="",c.noImages()}catch{c.errorMessage()}finally{h()}}async function $(){try{f(),l+=1;const o=(await b(m,l)).hits.map(L).join(`

`);n.insertAdjacentHTML("beforeend",o);const r=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:r.height,behavior:"smooth"}),H.refresh(),l===w&&(c.endOfSearch(),y())}catch{c.errorMessage()}finally{h()}}
//# sourceMappingURL=commonHelpers.js.map
