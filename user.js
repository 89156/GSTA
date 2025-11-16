// ==UserScript==
// @name         天才们的邀约 正确答案高亮助手
// @namespace    https://starrailawards.com/
// @version      2.1
// @description  适用于⌈天才们的邀约⌋小游戏
// @match        *://geniuses.starrailawards.com/*
// @grant        none
// ==/UserScript==
(function(){'use strict';let DB={};fetch("https://gh-proxy.org/https://github.com/89156/userjs/blob/11b4c8fb449d82c566a8efaabf8e2203da233f91/quiz_db.json").then(r=>r.json()).then(j=>DB=j);const K=o=>{let k=o.innerText.trim(),i=o.querySelector('img'),a=o.querySelector('audio');if(i)k+=`|img:${i.src}`;if(a)k+=`|audio:${a.src}`;return k};const H=()=>{const q=document.querySelector('.question-text');if(!q)return;let t=q.innerText.trim();const c=q.closest('.question-container');if(c){const a=c.querySelector('audio source'),i=c.querySelector('img');if(a)t+=`|audio:${a.src}`;if(i)t+=`|img:${i.src}`;}if(t.includes('请找出与题目语音同角色的选项'))return;const ops=[...document.querySelectorAll('.option')];ops.forEach(o=>o.style.border='');const ans=DB[t];if(ans){const o=ops.find(x=>K(x)===ans);if(o)o.style.border='2px solid lime';}};new MutationObserver(H).observe(document.body,{childList:true,subtree:true});H();})();
