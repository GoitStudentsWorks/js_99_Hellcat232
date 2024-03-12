(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const t={bestBooks:document.querySelector(".best-books-category"),categories:document.querySelector(".sidebar-categories"),allCategories:document.querySelector(".sidebar-all-categories"),categoryTitle:document.querySelector(".best-books-title"),loader:document.querySelector(".loader"),loader1:document.querySelector(".loader1"),scrollToEl:document.querySelector(".global-books-block"),modalWindow:document.querySelector("modal-window"),seeMoreBtn:document.querySelector(".best-books-category"),headerBtn:document.querySelector(".header-burger-btn"),headerIcon:document.querySelector(".header-burger-icon"),headerMenu:document.querySelector(".header-modal-menu"),burgerSvg:document.querySelector("#burger-svg"),headerToggle:document.querySelector("#headerToggle"),root:document.querySelector(":root"),btnToTop:document.querySelector(".to-top"),element:document.querySelectorAll(".header-navigation-list-item"),modalElement:document.querySelectorAll(".header-modal-menu-navigation-list-item"),svg:document.querySelector(".header-modal-menu-icon"),modalLinks:document.querySelectorAll(".header-modal-menu-link"),links:document.querySelectorAll(".header-link"),svg1:document.querySelector(".header-bucket-icon"),headerContainer:document.querySelector(".header-container")};let c=JSON.parse(localStorage.getItem("shoppingList"))||[];function p(e){return!!c.find(n=>n._id===e)}function b(e){if(!e._id||!e.book_image||!e.title||!e.list_name||!e.author||!e.buy_links)throw new Error("Book _id, book_image, title, list_name, author, buy_links are required");p(e._id)||(c.push(e),localStorage.setItem("shoppingList",JSON.stringify(c)))}window.atsl=b;window.sl=c;function N(e){c=c.filter(n=>n._id!==e),localStorage.setItem("shoppingList",JSON.stringify(c))}function L(){t.headerMenu.classList.toggle("hidden"),t.headerContainer.style.position="fixed";const e=t.burgerSvg.getAttribute("href")=="./img/symbol-defs.svg#icon-burger";console.log(t.burgerSvg.getAttribute("href")),e?(t.burgerSvg.setAttribute("href","./img/symbol-defs.svg#icon-close"),t.headerIcon.setAttribute("width","18"),t.headerIcon.setAttribute("height","18")):(t.burgerSvg.setAttribute("href","./img/symbol-defs.svg#icon-burger"),t.headerIcon.setAttribute("width","28"),t.headerIcon.setAttribute("height","28")),t.headerMenu.classList.contains("hidden")&&t.headerContainer.removeAttribute("style")}t.headerBtn.addEventListener("click",L);function v(e){e.preventDefault(),localStorage.removeItem("colorScheme"),t.root.classList.toggle("dark"),t.root.classList.contains("dark")?localStorage.setItem("colorScheme","dark"):localStorage.setItem("colorScheme","light")}function q(){localStorage.getItem("colorScheme"),localStorage.getItem("colorScheme")=="dark"?(t.root.classList.add("dark"),t.headerToggle.checked=!0):(t.root.classList.remove("dark"),t.headerToggle.checked=!1)}t.headerToggle.addEventListener("change",v);q();const k=document.querySelectorAll(".item-charity"),m=document.querySelector(".btn-scroll-up"),g=document.querySelector(".btn-scroll-down"),d=document.querySelector(".swiper"),w=2;E(0,5);g.addEventListener("click",A);m.addEventListener("click",I);function A(){S(d,d.scrollTop+(d.scrollHeight-d.scrollTop)/w),g.classList.add("hidden"),m.classList.remove("hidden")}function I(){S(d,0),g.classList.remove("hidden"),m.classList.add("hidden")}function E(e,n){for(let s=e;s<=n;s++)k[s].classList.remove("hidden")}function S(e,n){const i=e.scrollTop,o=n-i,r=20;function a(l,u,f,y){return l/=y/2,l<1?f/2*l*l+u:(l--,-f/2*(l*(l-2)-1)+u)}function h(l){l+=r;const u=a(l,i,o,500);e.scrollTop=u,l<500&&setTimeout(function(){h(l)},r)}h(0)}const T=document.querySelectorAll(".charity-image");T.forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-url");window.open(n,"_blank")})});function _(){return window.location.pathname.split("/").pop()}function O(){const e=_();e==="index.html"||e==="Rockstar"||e===""?(t.element[0].classList.add("header-current"),t.modalElement[0].classList.add("header-modal-current"),t.modalLinks[0].classList.add("link-current"),t.links[0].style.color="#111"):(t.element[1].classList.add("header-current"),t.modalElement[1].classList.add("header-modal-current"),t.modalLinks[1].classList.add("link-current"),t.links[1].style.color="#111",t.svg.classList.add("svg-current"),t.svg1.style.fill="#111")}window.onload=function(){O()};export{N as a,b,c,t as r,p as s};
//# sourceMappingURL=check-page-04bdd8a8.js.map
