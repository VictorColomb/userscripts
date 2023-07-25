// ==UserScript==
// @name Tarmac Technologies
// @description Miscellaneous Tarmac Technologies Utilities
// @version 2.1.2
// @author Victor Colomb
// @match https://backoffice.tarmactechnologies.com/*
// @match https://dev-backoffice.tarmactechnologies.com/*
// @match https://admin.tarmactechnologies.com/*
// @match https://dev-admin.tarmactechnologies.com/*
// @match https://agoa.tarmactechnologies.com/*
// @match https://dev-agoa.tarmactechnologies.com/*
// @downloadURL https://github.com/VictorColomb/userscripts/raw/main/dist/tarmac-technologies.user.js
// @icon https://static-tarmac.s3.amazonaws.com/img/favicon.ico
// @updateURL https://github.com/VictorColomb/userscripts/raw/main/dist/tarmac-technologies.meta.js
// ==/UserScript==

(()=>{var e={109:e=>{e.exports=function(){const e=document.querySelector('label[for="id_business_groups"]'),o=document.querySelector('select[name="business_groups"]');e.addEventListener("click",(()=>{const e=[],t=[],n=[],r=[],a=[];for(const s of o.options){if(!s.selected)continue;const[o,i]=s.label.split(" ");switch(o){case"AIRLINE":e.push(i);break;case"AIRPORT":t.push(i);break;case"HANDLER":n.push(i);break;case"POSITION":r.push(i);break;default:console.warn(`Unknown business group type ${o} (name = ${i})`),a.push(s.label)}}const s=window.open("","","width=800, height=400, scrollbars=yes");s.document.body.innerHTML=`<label for="airlines" style="display: block;">Airlines</label><input type="text" name="airlines" id="airlines" value="${e.join(",")}" style="width: 100%; margin-bottom: 15px;" /><br>`,s.document.body.innerHTML+=`<label for="airports" style="display: block;">Airports</label><input type="text" name="airports" id="airports" value="${t.join(",")}" style="width: 100%; margin-bottom: 15px;" /><br>`,s.document.body.innerHTML+=`<label for="handlers" style="display: block;">Handlers</label><input type="text" name="handlers" id="handlers" value="${n.join(",")}" style="width: 100%; margin-bottom: 15px;" /><br>`,s.document.body.innerHTML+=`<label for="positions" style="display: block;">Positions</label><input type="text" name="positions" id="positions" value="${r.join(",")}" style="width: 100%; margin-bottom: 15px;" /><br>`,s.document.body.innerHTML+='<button id="submit">Submit</button>',s.document.querySelector("#submit").addEventListener("click",(()=>{!function(e,t,n,r,a){for(const e of o.options)e.selected=!1;for(const t of e){if(!t)continue;const e=Array.from(o.options).find((e=>e.label===`AIRLINE ${t.toUpperCase()}`));void 0===e?console.warn(`[TT Userscript] Cound not find airline ${t}`):e.selected=!0}for(const e of t){if(!e)continue;const t=Array.from(o.options).find((o=>o.label===`AIRPORT ${e.toUpperCase()}`));void 0===t?console.warn(`[TT Userscript] Cound not find airport ${e}`):t.selected=!0}for(const e of n){if(!e)continue;const t=Array.from(o.options).find((o=>o.label===`HANDLER ${e.toUpperCase()}`));void 0===t?console.warn(`[TT Userscript] Cound not find handler ${e}`):t.selected=!0}for(const e of r){if(!e)continue;const t=Array.from(o.options).find((o=>o.label===`POSITION ${e.toUpperCase()}`));void 0===t?console.warn(`[TT Userscript] Cound not find position ${e}`):t.selected=!0}for(const e of a){const t=Array.from(o.options).find((o=>o.label===e));void 0===t?console.error(`[TT Userscript] Could not find business group ${e}`):t.selected=!0}}(s.document.querySelector("#airlines").value.split(/[ ,]+/),s.document.querySelector("#airports").value.split(/[ ,]+/),s.document.querySelector("#handlers").value.split(/[ ,]+/),s.document.querySelector("#positions").value.split(/[ ,]+/),a),s.close()}))})),e.style="cursor: pointer; user-select: none;",console.log("[TT Userscript] Users module loaded")}},581:e=>{e.exports=function(e="admin"){setInterval((function(){Array.from(document.querySelectorAll('[id^="turnaroundDetailHeaderHubAirportIataCode"]')).forEach((o=>{if(!o.dataset.processed){const t=o.id.match(/turnaroundDetailHeaderHubAirportIataCode([0-9]+)/)[1];o.addEventListener("click",(()=>{window.open(`https://${e}.tarmactechnologies.com/tarmac/turnaround/${t}`)})),o.style="cursor: pointer; user-select: none;",o.dataset.processed=!0}}))}),1e3),console.log("[TT Userscript] Module loaded")}},614:e=>{e.exports=function(){function e(e,o){const t=document.evaluate('.//label[contains(., "Task Additional Information")]',o,null,XPathResult.ANY_TYPE,null).iterateNext();t?(t.addEventListener("click",(()=>{const t=window.open("","","width=800, height=400, scrollbars=yes");t.document.body.innerHTML='<textarea name="addinfos" id="addinfos" rows="10" style="display: block; height: calc(100% - 20px); width: 100%; padding: 5px;"></textarea><button id="submit">Submit</button>';let n="";for(const t of o.querySelectorAll(".task-additional-information-tbody tr")){const o=t.querySelector(`select[name="normal-${e}-task-additional-information-label-id"]`).selectedOptions,r=o.length>0?o[0].label:"",a=t.querySelector(`input[name="normal-${e}-task-additional-information-custom-label"]`).value,s=t.querySelector(`select[name="normal-${e}-task-additional-information-type"]`).selectedOptions;n+=`${r},${a},${s.length>0?s[0].label:""},${t.querySelector('input[type="checkbox"]').checked?"true":"false"}\n`}",,Checkbox,false\n"===n&&(n="");const r=t.document.getElementById("addinfos");r.value=n,t.document.getElementById("submit").addEventListener("click",(()=>{(function(t,n){const r=n.split("\n").map((e=>e.split(",")[0]));if(r.some(((e,o)=>r.indexOf(e)<o)))return t.alert("Duplicate hard labels not allowed!"),!1;for(const e of o.querySelectorAll(".task-additional-information-tbody button.delete-task-additional-information"))e.click();for(const[r,a]of n.split("\n").entries()){if(""===a.trim())continue;const n=a.split(",");if(n.length<3)return t.alert("Three or four columns required!"),!1;r>0&&o.querySelector(".add-task-additional-information").click();const[s,i,l]=n,c=Array.from(o.querySelectorAll(".task-additional-information-tbody tr")).at(-1),d=c.querySelector(`select[name="normal-${e}-task-additional-information-label-id"]`),u=Array.from(d.options).find((e=>e.label.toLowerCase()===s.toLowerCase()));void 0===u?console.warn(`[TT Userscript] Could not find label ${s}`):u.selected=!0,c.querySelector(`input[name="normal-${e}-task-additional-information-custom-label"]`).value=i;const p=c.querySelector(`select[name="normal-${e}-task-additional-information-type"]`),m=Array.from(p.options).find((e=>e.label.toLowerCase()===l.toLowerCase()));if(void 0===m?console.warn(`[TT Userscript] Could not find type ${l}`):m.selected=!0,n.length>3){const e="true"===n[3].toLowerCase();c.querySelector('input[type="checkbox"]').checked=e}}return!0})(t,r.value)&&t.close()}))})),t.style="cursor: pointer; user-select: none;"):console.error("[TT Userscript] Add info label not found")}for(const o of["above","below"])for(const t of document.querySelectorAll(`#normal-${o}-table-body tr.row-id`))e(o,t);document.querySelector('button[data-action="add"][data-target="#normal-above-table"]').addEventListener("click",(o=>{o.stopPropagation(),addRow("#normal-above-table"),e("above",Array.from(document.querySelectorAll("#normal-above-table-body tr.row-id")).at(-1))})),document.querySelector('button[data-action="add"][data-target="#normal-below-table"]').addEventListener("click",(o=>{o.stopPropagation(),addRow("#normal-below-table"),e("below",Array.from(document.querySelectorAll("#normal-below-table-body tr.row-id")).at(-1))})),console.log("[TT Userscript] Critical path module loaded")}},293:e=>{e.exports=function(e="admin"){new MutationObserver((o=>{for(const t of o)if("childList"===t.type)for(const o of t.addedNodes){const t=o.querySelector("a").href.match(/\/([0-9]+)\//)[1],n=o.children[1];n.addEventListener("click",(()=>{window.open(`https://${e}.tarmactechnologies.com/users/customuser/${t}`)})),n.style="cursor: pointer; user-select: none;"}})).observe(document.querySelector("#users-list tbody"),{childList:!0,subtree:!0}),console.log("[TT Userscript] Users module loaded")}}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return e[n](a,a.exports,t),a.exports}(()=>{const e=t(109),o=t(581),n=t(614),r=t(293);!function(){"use strict";const t=window.location.hostname,a=window.location.pathname;/^(?:dev-)?backoffice.tarmactechnologies.com$/.test(t)&&(/^\/(?:specific_)?critical_path\/(?:[0-9]+\/)?(?:edit|add|new)/.test(a)&&n(),/\/users/i.test(a)&&r(/^dev-backoffice/.test(t)?"dev-admin":"admin")),/^(?:dev-)?admin.tarmactechnologies.com$/.test(t)&&/^\/users\/customuser\/[0-9]+\/change/.test(a)&&e(),/(?:dev-)?agoa.tarmactechnologies.com/.test(t)&&/^\/(?:agoa)?$/.test(a)&&o()}()})()})();