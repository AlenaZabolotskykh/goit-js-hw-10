import"./assets/styles-ddbbe98b.js";import{f}from"./assets/vendor-2b44ac2e.js";const h=document.querySelector("#datetime-picker"),n=document.querySelector("button");let a;n.disabled=!0;let r,s;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]>=e?(a=t[0],n.disabled=!1):(alert("Please choose a date in the future"),n.disabled=!0),console.log(t[0])}};f(h,S);n.addEventListener("click",p);function p(){a&&(s=setInterval(()=>{if(r=a-new Date,r<=0){clearInterval(s);return}const{days:e,hours:u,minutes:c,seconds:d}=b(r);document.querySelector("[data-days]").textContent=o(e),document.querySelector("[data-hours]").textContent=o(u),document.querySelector("[data-minutes]").textContent=o(c),document.querySelector("[data-seconds]").textContent=o(d)},1e3))}function o(t){return String(t).padStart(2,"0")}function b(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:y}}
//# sourceMappingURL=commonHelpers.js.map
