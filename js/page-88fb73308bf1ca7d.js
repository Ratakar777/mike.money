(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7365:(e,t,i)=>{Promise.resolve().then(i.bind(i,1204))},1204:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var s=i(7437),r=i(6648),n=i(2265);let o=[{name:"Jupiter",url:"https://jup.ag/swap/SOL-tysjdwNYp1suKsq6jFed5UpiHJP7mdYMrM3mo2VRENX",imgSrc:"/jupiter.svg",alt:"Jupiter"},{name:"Telegram",url:"https://t.me/officialmikemoney",imgSrc:"/telegram.svg",alt:"Telegram"},{name:"Dexscreener",url:"https://dexscreener.com/solana/bufznt9wykwg2iuwqxhi38huczo6jw8b5ewmz5qwk8xy",imgSrc:"/dexscreener.svg",alt:"Dexscreener"},{name:"Twitter",url:"https://x.com/mikedotmoney",imgSrc:"/twitter.svg",alt:"Twitter"},{name:"Dextools",url:"https://www.dextools.io/app/en/solana/pair-explorer/BuFznt9WYkwG2iuwQXHi38hUcZo6jw8b5Ewmz5QwK8Xy?t=1730981335164",imgSrc:"/dextools.svg",alt:"Dextools"}],c=()=>{let[e,t]=n.useState(null);return(0,s.jsx)("div",{className:"flex justify-center items-center py-4 z-20",children:o.map(i=>(0,s.jsx)("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"rounded mx-4",onMouseEnter:()=>t(i.name),onMouseLeave:()=>t(null),children:(0,s.jsx)(r.default,{src:e===i.name?"/fist.png":i.imgSrc,className:"drop-shadow-xl",width:"60",height:"60",alt:i.alt})},i.name))})};var a=i(7138),l=i(9582),d=i(6098),p=i.n(d);let m=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(window.innerWidth<768)},[]),e};function h(){let e=async e=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&window.innerWidth<768&&navigator.share&&navigator.canShare)try{let t=await fetch(e),i=await t.blob(),s={files:[new File([i],"mike-meme.png",{type:i.type})],title:"$MIKE Meme"};if(navigator.canShare(s)){await navigator.share(s);return}}catch(e){console.log("Error sharing:",e)}t(e)},t=e=>{let t=document.createElement("a");t.href=e,t.setAttribute("download","meme.png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},i=m();return(0,n.useEffect)(()=>{l.ZP.registerPlugin(p());let e=l.ZP.utils.toArray(".section");return p().create({trigger:e[1],start:"top 50%",end:"top 50%",pin:!0,pinSpacing:!1}),e.slice().forEach((t,i)=>{let s=e[i+1];s&&l.ZP.to(t,{yPercent:-10,ease:"none",scrollTrigger:{trigger:s,start:"top top",end:"bottom top",scrub:1,invalidateOnRefresh:!0}})}),e.forEach(e=>{p().create({trigger:e,start:"top top",end:"bottom top",pinSpacing:!0})}),p().create({snap:{snapTo:1/(e.length-1),duration:.2,delay:0,ease:"power1.inOut",inertia:!0},onUpdate:e=>{if(0!==e.direction){let t=Math.round(e.scroll()/window.innerHeight),i=p().getById("snap");i&&i.scroll(t*window.innerHeight)}}}),()=>{p().killAll()}},[]),(0,s.jsxs)("div",{className:"container relative bg-[#e00000] w-full",children:[(0,s.jsxs)("div",{id:"sticky-header",className:"z-30 fixed top-0 left-0 w-full flex justify-center items-center transition-colors duration-300 text-white",children:[(0,s.jsxs)("span",{className:"text-[120px] sm:text-[150px] leading-[210px] sticky top-0 mr-8 font-compacta font-[900]",children:["$"," "]}),(0,s.jsx)("span",{className:"text-[120px] sm:text-[150px] leading-[210px] sticky top-0 font-compacta font-[900]",children:"MIKE"})]}),(0,s.jsxs)("section",{id:"primary",className:"section min-h-screen flex flex-col justify-center items-center text-center text-white text-8xl font-normal relative overflow-hidden",children:[(0,s.jsxs)("video",{className:"hero-video absolute inset-0 w-full h-full object-cover",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[(0,s.jsx)("source",{src:"/hero.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,s.jsxs)("div",{className:"flex flex-col items-center relative mb-12 z-30",children:[(0,s.jsx)("div",{className:"hero-text drop-shadow-2xl mb-3 text-[70px] sm:text-8xl",children:"$INK YOUR TEETH IN"}),(0,s.jsx)("a",{href:"https://jup.ag/swap/SOL-tysjdwNYp1suKsq6jFed5UpiHJP7mdYMrM3mo2VRENX",target:"_blank",rel:"noopener noreferrer",className:"bg-[#ffffffaa] text-black px-8 py-3 rounded-full text-[34px] inline-block",children:"Buy"})]})]}),(0,s.jsx)("section",{id:"subtitle",className:"section bg-[#e00000] min-h-screen flex flex-col justify-center items-center text-center text-white text-7xl font-normal",children:(0,s.jsxs)("div",{className:"drop-shadow-xl",children:["I WILL EAT YOUR CHILDREN &",(0,s.jsx)("br",{}),"FUCK YOU TILL YOU LOVE ME"]})}),(0,s.jsx)("section",{id:"memes",className:"section bg-[#0e0e0e] min-h-screen flex flex-col justify-center items-center text-white overflow-hidden z-20 max-w-full",children:(0,s.jsx)("div",{className:"meme-carousel flex overflow-x-auto whitespace-nowrap space-x-4 px-4",children:[{src:"/got_mike.jpg",description:"Got $MIKE"},{src:"/eagle.jpg",description:"America"},{src:"/like_uth_they_not.jpg",description:"Like uth they not"},{src:"/garbage_island.png",description:"Garbage Island"},{src:"/map.jpg",description:"Map"},{src:"/mike_is_forever.jpeg",description:"Mike is forever"},{src:"/meg.jpg",description:"Meg"},{src:"/Mike_is_king.jpg",description:"Mike is king"},{src:"/mike_memes_great_again.jpeg",description:"Mike memes great again"},{src:"/mike_my_wallet.jpg",description:"My wallet"},{src:"/sign_the_contract.jpg",description:"Sign the contract"},{src:"/Srooge_mc_duck.jpg",description:"Scrooge McDuck"},{src:"/thoon.jpeg",description:"Thoon"},{src:"/token_fealty.jpg",description:"Fealty"},{src:"/tyson_chicken.jpg",description:"Tyson Chicken"},{src:"/tyson-gm.png",description:"GM"},{src:"/Joey__chain_MIKE.png",description:"Chicken"},{src:"/KAMALA_MIKE.png",description:"The market"},{src:"/Thavage_MIKE.jpg",description:"Thavage"},{src:"/Riot.png",description:"Riot"},{src:"/Jhonny_MIKE.jpeg",description:"Thauvage"},{src:"/Thtay.jpg",description:"Tiltay"},{src:"/MtFuji.png",description:"Mt Fuji"},{src:"/Forklift_MIKE.jpg",description:"Help me, my son is sick"},{src:"/Picasso.jpg",description:"Picasso"},{src:"/Smile_dwnr.png",description:"Smile"},{src:"/Trump.png",description:"Trump"}].map((t,n)=>(0,s.jsx)("div",{className:"meme-item inline-block cursor-pointer",style:{minWidth:"132px"},children:(0,s.jsxs)("div",{onClick:()=>e(t.src),children:[(0,s.jsx)(r.default,{alt:"",width:i?132:352,height:i?192:507,src:t.src,className:"object-cover ".concat(i?"h-[192px]":"h-[507px]"," w-auto"),priority:n<3}),(0,s.jsxs)("div",{className:"text-sm mt-2",children:[t.description," ",(0,s.jsx)("span",{className:"text-[#e00000] pl-2",children:"(click to download)"})]})]})},n))})}),(0,s.jsxs)("section",{id:"disclosure",className:"section z-0 bg-[#e00000] min-h-screen flex flex-col justify-center items-center text-white text-center font-normal z-20 px-4",children:[(0,s.jsxs)("div",{className:"drop-shadow-xl text-5xl sm:text-7xl mb-24 flex-clo space-y-2 font-compacta font-semilight uppercase tracking-wide",children:[(0,s.jsx)("div",{children:"A community of thavages"}),(0,s.jsx)("div",{children:"For those who rawdog life and win at any cost"}),(0,s.jsx)("div",{children:"Unleash the Mike within"})]}),(0,s.jsxs)(a.default,{href:"/disclosures",className:"relative z-20 drop-shadow-xl text-md font-compacta font-normal",children:["The ",(0,s.jsx)("span",{className:"text-lg",children:"$ MIKE"})," token is a memecoin on Solana created purely for speculative and parody purposes"]})]}),(0,s.jsx)("div",{className:"fixed bottom-0 left-0 w-full flex justify-center items-center py-4 text-center text-white text-7xl font-normal z-20",children:(0,s.jsx)(c,{})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[922,138,300,130,215,744],()=>t(7365)),_N_E=e.O()}]);