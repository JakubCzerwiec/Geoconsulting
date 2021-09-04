(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),a=t.n(i)()((function(e){return e[1]}));a.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --color-blk: #0D0D0D;\n    --color-wht: #FFFFFF;\n    --color-bkgr: white;\n    --color-font: black;\n    --color-theme1: rgb(199, 199, 199);\n    --color-theme2: rgb(240, 240, 240);\n    --color-dark: rgb(50, 50, 50);\n   \n}\n\nbody {\n    background-color: white;\n    font-family: 'Roboto', sans-serif;\n}\n\n#content {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n/* Menu (mobile only) */\n\n.hidden {\n    /* transform: translateY(-135%); */\n    transform: translateY(-100%)\n}\n\n.menu {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--color-dark);\n    transition: transform 200ms cubic-bezier(.5, 0, .5, 1);\n}\n\nnavig {\n    width: 100%;\n    height: min-content;\n    padding: .5em;\n    background-color: var(--color-dark);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: fixed;\n    align-items: center;\n    top: 0;\n    z-index: 22;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background-color: antiquewhite;\n}\n\n\n.nav {\n    cursor: pointer;\n    width: 100%;\n    padding: 1em;\n    font-size: 2em;\n    margin: auto;\n    font-weight: bold;\n    border-bottom: 2px solid white;\n    text-align: center;\n    color: var(--color-wht);\n}\n\n.coName {\n    font-size: 1.2em;\n    padding: .5em;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-weight: bold;\n    cursor: pointer;\n    color: var(--color-wht);\n}\n\n.coNameTop {\n    width: 60%;\n}\n\n.coNameSub {\n    display: none;\n}\n\n.coName img {\n    height: 4em;\n    margin-right: 1em;\n}\n\n/* Burger (mobile only) */\n\n.burger {\n    width: max-content;\n    padding: 1em;\n    z-index: 5;\n  } \n\n.b-top {\n    background-color: var(--color-wht);\n    width: 3em;\n    height: 3px;\n    margin-bottom: .5em;\n}\n\n.b-bot {\n    background-color: var(--color-wht);\n    width: 1.5em;\n    height: 3px;\n    margin-left: auto;\n}\n\n.b-bot-click {\n    width: 3em;\n}\n\n\n/* Slider */\n\n.sliderBox {\n    width: 100%;\n    height: 19em;\n}\n\n.displayer {\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: auto;\n}\n.slider {\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    padding: 2em;\n}\n\n.slider img {\n    animation: slide 8000ms;\n\n}\n\n@keyframes slide {\n    0% {\n        opacity: .2;\n    }\n    10% {\n        opacity: 1;\n    }\n    90% {\n        opacity: 1;\n    }\n    100% {\n        opacity: .2;\n    }\n  }\n\n/* USTAWIĆ OKRĄGŁE ZDJĘCIE I KONTENT NA ŚRODKU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */\n\n\n\n.slider img {\n    width: 13em;\n    height: 13em;\n    margin: auto;\n    border-radius: 50%;\n}\n\n.btn {\n    height: inherit;\n    font-size: 2em;\n    cursor: pointer;\n}\n\n.circles {\n    display: flex;\n    flex-direction: row;\n    width: max-content;\n    margin: auto;\n    cursor: pointer;\n}\n\n.circle {\n    width: 1em;\n    height: 1em;\n    margin: .2em .2em;\n    border-radius: 50%;\n    background-color: var(--color-theme1);\n}\n\n.circAct {\n    width: 1em;\n    height: 1em;\n    margin: .2em .2em;\n    border-radius: 50%;\n    border: .2em solid var(--color-theme1);\n    background-color: var(--color-theme2);\n}\n\n/* Main content */\n\nmain {\n    /* padding-top: 4.5em; */\n    margin-top: 7em;\n    display: flex;\n    flex-direction: column;\n    height: max-content;\n}\n\nh2 {\n    background-color: var(--color-theme2);\n    padding: .5em;\n    height: 100%;\n}\n\n\n\n\n/* Footer */\n\nfooter {\n    background-color: beige;\n    padding: 1.5em;\n    margin-top: 3em;\n}\n\n.mobile a, .email a {\n    text-decoration: none;\n    color: black;\n}\n\n/* Services */\n\n.service1 {\n    background-color: var(--color-theme1);\n}\n\n.service2 {\n    background-color: var(--color-theme2);\n}\n\n.service3 {\n    background-color: var(--color-theme1);\n}\n\n.service1, .service2, .service3 {\n    padding: 1em 3em;\n    text-align: center; \n}\n\n.servicesDiv li {\n    list-style: none;\n    padding: 0.3em;\n}\n\n\n/* Publications list */\n\n.pubText {\n    width: 80%;\n    margin: auto;\n}\n\n.pubsLi {\n    padding: 1em;\n    list-style: none;\n}\n\n\n\n\n/* About me section */\n\n.aboutMe {\n    padding: 1em;\n    width: 80%;\n    margin: auto;\n    text-align: justify;\n    text-indent: 10%;\n}\n\n\n\n.sideBar {\n    width: 80%;\n    height: 100%;\n    margin: auto;\n}\n\n.profilePhoto {\n    width: 50%;\n    height: auto;\n    padding: 1em;\n    margin-left: 25%;\n    margin-right: 25%;\n}\n\n.publicationList {\n    cursor: pointer;\n    padding: 1em;\n    text-align: center;\n    background-color: var(--color-theme1);\n    border-radius: 10px;\n    margin: auto;\n    width: 60%;\n    font-weight: bold;\n}\n\n/* Home page */\n.homeText {\n    padding: 1em;\n    text-align: center;\n    width: 80%;\n    margin: auto;\n}\n\n\n\n/* <-- Desctop version --\x3e */\n\n@media screen and (min-width: 600px) {\n\n    /* Navigation */\n\n    .burger {\n        display: none;\n    }\n\n    .hidden {\n        transform: translateY(0);\n    }\n\n    .menu {\n        display: flex;\n        flex-direction: row;\n        width: max-content;\n        height: 100%;\n        position: static;\n    }\n\n    .nav {\n        width: max-content;\n        height: max-content;\n        border-bottom: none;\n        font-size: 1.5em;\n    }\n\n    main {\n        flex-direction: column;\n        height: 100%;\n        flex-grow: 2;\n        align-items: center;\n\n    }\n\n    h2 {\n        width: 100%;\n    }\n\n    .coNameTop {\n        width: max-content;\n    }\n\n\n    .coNameSub {\n        font-style: italic;\n        font-weight: normal;\n        display: block;\n    }\n\n    /* Main */\n    .homeText {\n        width: 60%;\n    }\n\n    /* Slider */\n    .sliderBox {\n        width: 60%;\n        height: 50vh;\n        margin: 0 auto;\n    }\n\n    .slider img {\n        width: auto;\n        height: 35vh;\n        border-radius: 0;\n        object-fit: fill;\n    }\n\n    /* Services */\n    .service1, .service2, .service3 {\n        padding: 1em 2em;\n        text-align: left; \n    }\n    \n    .servicesDiv li {\n        list-style: disc;\n        padding: 0.3em;\n        width: 60%;\n        margin: auto;\n    }\n\n    h3 {\n        width: 60%;\n        margin: auto;\n    }\n\n    /* Pbulication list */\n    .pubText {\n        width: 60%;\n        margin: auto;\n        \n    }\n\n    /* About me */\n    .aboutMe {\n        width: 90%;\n        margin: auto;\n        text-align: left;\n    }\n\n    .aboutBox {\n        display: flex;\n        flex-direction: row;\n        width: 70%;\n        margin: auto;\n    }\n\n    .sideBar {\n        width: max-content;\n        height: 100%;\n        margin: auto;\n        \n    }\n\n    .profilePhoto  {\n        width: auto;\n        height: 20em;\n        margin: auto;\n    }\n\n    .publicationList {\n        text-align: center;\n        background-color: var(--color-theme1);\n        border-radius: 10px;\n        padding: .2em;\n    }\n\n\n\n    footer {\n        margin-top: 0;\n    }\n\n\n}\n\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var i,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function r(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var m=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(o[m].references++,o[m].updater(p)):o.push({identifier:d,updater:h(p,n),references:1}),i.push(d)}return i}function s(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,g=0;function h(e,n){var t,i,a;if(n.singleton){var o=g++;t=u||(u=s(n)),i=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=s(n),i=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=r(t[i]);o[a].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={};t.r(e),t.d(e,{N:()=>ae});const n=t.p+"e479974513d4d5e9817d5b5455173b66.png",i=new Image;i.src=n;const a=t.p+"cdc1338257f17367b18867a1ddf2ee21.jpg",o=t.p+"0bac58bab3db22abc19f65045c0df50b.jpg",r=t.p+"19d43de471b1560e64fddf44092bfa39.jpg",c=t.p+"4d5ed18c1fcdc48aea1c8a8fbeb19363.jpg",s=t.p+"acff6393169da2946ee5c089c78dbce9.jpg",l=t.p+"192d9a3d4c7e1e4ca2911851530261a6.jpg",d=t.p+"2c50586bfabc8c7efdf955e82c8cbf4f.jpg",m=t.p+"0015906b79d8bfae54c162cc29d5929c.jpg",p=t.p+"6ad6c4f21ef74bc7510d86b299f6a754.jpg",u=t.p+"7f2b30318a7693de16fe15a834b43407.jpg",g=t.p+"ae98e3383279b0058bcaf8e548b7f40d.jpg",h=t.p+"ad14885749c66f8b6b2432cfd433a35f.jpg",f=t.p+"9149e7886b842ee4796684062e9dbbd4.jpg",b=t.p+"5ed32ab2b05f640959cd2a3a3b24bdb0.jpg",v=t.p+"5e1908b32f2dfd3ad28e0310d3b577c2.jpg",w=t.p+"b77a723818a82ff3ccfc936d4273fe9b.jpg",y=t.p+"fb2a267ef208fabc67a79c8b13888bcd.jpg",k=t.p+"47259c35a82d6b43bc7baab7cd7733b5.jpg",x=t.p+"0c2a19e8bf257e784553fb92489303a9.jpg",M=t.p+"d727b05c27c67d77af55090dd1f0d66e.jpg",E=t.p+"18dc44ca4a0a255dec5133709331bdd8.jpg",T=t.p+"7919cb23414332dbb0a2ee6ce00fc631.jpg",S=t.p+"1db296f310a119c60df4377f4aab1b98.jpg",L=t.p+"4e2d7b8379099be31f0cb9dff6d5a775.jpg",N=t.p+"1864bcfc49e5575b23c3612113806801.jpg",j=t.p+"ec894e418ce4bb1f7453c214fd894412.jpg",I=t.p+"b6d28938e56f1ef4df4fdfef5d06c67f.jpg",P=new Image,H=new Image,C=new Image,A=new Image,B=new Image,_=new Image,q=new Image,z=new Image,G=new Image,F=new Image,D=new Image,R=new Image,O=new Image,U=new Image,J=new Image,K=new Image,Z=new Image,Y=new Image,$=new Image,W=new Image,X=new Image,Q=new Image,V=new Image,ee=new Image,ne=new Image,te=new Image,ie=new Image;P.src=a,H.src=o,C.src=r,A.src=c,B.src=s,_.src=l,q.src=d,z.src=m,G.src=p,F.src=u,D.src=g,R.src=h,O.src=f,U.src=b,J.src=v,K.src=w,Z.src=y,Y.src=k,$.src=x,W.src=M,X.src=E,Q.src=T,V.src=S,ee.src=L,ne.src=N,te.src=j,ie.src=I;let ae=[P,H,C,A,B,_,q,z,G,F,D,R,O,U,J,K,Z,Y,$,W,X,Q,V,ee,ne,te,ie];function oe(){let n=document.createElement("div");n.className="sliderBox";let t=document.createElement("div");t.className="displayer";let i=document.createElement("div");const a=document.createElement("div"),o=document.createElement("div");let r=document.createElement("div");document.querySelector("main").append(n);let c=0,s=()=>{i.className="slider",i.innerHTML="",r.innerHTML="",i.appendChild(e.photos[c]),a.className="back btn",a.innerText="<",o.className="fro btn",o.innerText=">",r.className="circles",r.innerHTML="";for(let n=0;n<e.photos.length;n++){let e=document.createElement("div");e.className="circle",r.appendChild(e)}document.querySelectorAll(".circle").forEach(((e,n)=>{e.addEventListener("click",(()=>{c=n,s()}))})),r.childNodes[c].className="circAct"};s(),t.append(a,i,o),n.append(t,r),a.addEventListener("click",(()=>{c--,c<0&&(c=e.photos.length-1),s()})),o.addEventListener("click",(()=>{c++,c>e.photos.length-1&&(c=0),s()})),setInterval((()=>{c++,c>=e.photos.length&&(c=0),s()}),8e3)}let re=()=>{window.scroll(0,0);const n=document.querySelector("main");n.innerHTML="";const t=document.createElement("h2");t.innerText="Company profile",n.appendChild(t),e.photos=photosI.slice(0,10),oe();const i=document.createElement("p");i.className="homeText",i.innerHTML='<strong>Michał Matysik Geconsulting</strong> is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporiticsiliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation (see example of <a class=\'pdfLink\' href="/src/pdf/2.pdf" download="download2">sedimentary log </a> and example of detailed <a class=\'pdfLink\' href="/src/pdf/1.pdf" download="download1">thin section description sheet</a>).',n.appendChild(i)},ce=()=>{const e=document.querySelector("footer");e.innerHTML="";const n=document.createElement("div");n.className="adress",n.innerHTML="<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>";const t=document.createElement("div");t.className="email",t.innerHTML="<p><strong>E-mail:</strong> <a href='mailto:ma4tys@interia.pl'>ma4tys@interia.pl</a></p>";const i=document.createElement("div");i.className="mobile",i.innerHTML="<p><strong>Mobile:</strong> <a href='tel:+48882483147'>(+48) 882 483 147</a></p>",e.append(n,t,i)};const se=t.p+"1004a8d5b3bff4875a83ac16b00f2f73.jpg";let le=()=>{window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="pubText";const t=document.createElement("h2");t.innerText="Publication list";const i=document.createElement("ul"),a=document.createElement("li");a.innerHTML="<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S., Rameil, N., Gianotten, I. P. & Brunstad, H. (in review) Cherts, spiculites, and collapse breccias Porosity generation in upper Permian reservoir rocks, Gohta discovery, Loppa High, south-western Barents Sea. <i>Marine and Petroleum Geology</i>";const o=document.createElement("li");o.innerHTML="Bucur, I. I. & <strong>Matysik, M.</strong> (accepted) Dasycladalean green algae and associated foraminifers in Middle Triassic (Lower and Middle Muschelkalk) carbonates of the south-eastern Germanic Basin (Upper Silesia, Poland). <i>Annales Societatis Geologorum Poloniae.</i>";const r=document.createElement("li");r.innerHTML='Antczak, M., Ruciński, M. R., Stachacz, M., <strong>Matysik, M.</strong> & Król, J. J. (in press) Diversity of vertebrate remains from the Lower Gogolin Beds (Anisian) of southern Poland. <i>Annales Societatis Geologorum Poloniae.</i> Free full text available at: <a href="http://www.asgp.pl/inpress" target="blank">[click]</a>;';const c=document.createElement("li");c.innerHTML='Stachacz, M. & <strong>Matysik, M.</strong> (2020) Early Middle Triassic (Anisian) trace fossils, ichnofabrics, and substrate types from the southeastern Germanic Basin (Wellenkalk facies) of Upper Silesia, southern Poland: implications for biotic recovery following the Permian/Triassic mass extinction. <i>Global and Planetary Change</i>, 194: 103290. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921818120301818?dgcid=rss_sd_all" target="blank">[click]</a>';const s=document.createElement("li");s.innerHTML='<strong>Matysik, M.</strong> & Szulc, J. (2019) Shallow-marine carbonate sedimentation in a tectonically mobile basin, the Muschelkalk (Middle Triassic) of Upper Silesia (southern Poland). <i>Marine and Petroleum Geology</i>, 107: 99–115.  See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264817219302211" target="blank">[click]</a>';const l=document.createElement("li");l.innerHTML='<strong>Matysik, M.</strong> (2019) High-frequency depositional cycles in the Muschelkalk (Middle Triassic) of southern Poland: Origin and implications for Germanic Basin astrochronological scales. <i>Sedimentary Geology</i>, 383: 159–180. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0037073819300338" target="blank">[click]</a>';const d=document.createElement("li");d.innerHTML='Jewuła, K., <strong>Matysik, M.</strong>, Paszkowski, M. & Szulc, J. (2019) The Late Triassic development of playa–gilgai environments from Upper Silesia, southern Poland. <i>Sedimentary Geology</i>, 379: 25–45.  Free full text available at: <a href="https://www.krasiejow.pl/static/img/k01/The_late_Triassic_development_of_playa,_gilgai_floodplain,_and_fluvial_environments_from_Upper_Silesia...pdf" target="blank">[click]</a>';const m=document.createElement("li");m.innerHTML='<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S. & Brunstad, H. (2017) Diagenesis of spiculites and carbonates in a Permian temperate ramp succession, Tempelfjorden Group, Spitsbergen, Arctic Norway. <i>Sedimentology</i>, 65: 745–774. See: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sed.12404" target="blank">[click]</a>';const p=document.createElement("li");p.innerHTML='<strong>Matysik, M.</strong> (2016) Facies types and depositional environments of a morphologically diverse carbonate platform: a case study from the Muschelkalk (Middle Triassic) of Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 86: 119–164. Free full text available at: <a href="https://geojournals.pgi.gov.pl/asgp/article/view/25483/0" target="blank">[click]</a>';const u=document.createElement("li");u.innerHTML='<strong>Matysik, M.</strong>, Al-Ramadan, K. & Riding, R. (2015) Composition and morphology of Early Devonian microbial and metazoan patch reefs: Qasr Member of the Jauf Formation, Northwestern Saudi Arabia. <i>Journal of Sedimentary Research</i>, 85: 45–61. See: <a href="https://pubs.geoscienceworld.org/jsedres/issue/85/1" target="blank">[click]</a>';const g=document.createElement("li");g.innerHTML='<strong>Matysik, M.</strong> (2014) Sedimentology of the "ore-bearing dolomite" of the Kraków-Silesia region (Middle Triassic, southern Poland). <i>Annales Societatis Geologorum Poloniae</i>, 84: 81–112. Free full text available at: <a href="http://www.asgp.pl/84_2_081_112" target="blank">[click]</a>';const h=document.createElement("li");h.innerHTML='<strong>Matysik, M.</strong> (2010) Reefal environments and sedimentary processes of the Anisian Karchowice Beds in Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 80: 123–145. Free full text available at: <a href="http://www.asgp.pl/80_2_123_145" target="blank">[click]</a>',i.append(a,o,r,c,s,l,d,m,p,u,g,h),e.append(t,n),n.append(i),de(),ce()},de=()=>{const e=document.getElementsByTagName("li");for(let n=0;n<e.length;n++)e[n].classList.add("pubsLi")};const me=new Image;me.src=se;var pe=t(379),ue=t.n(pe),ge=t(426);ue()(ge.Z,{insert:"head",singleton:!1}),ge.Z.locals,window.photosI=ae,(()=>{const e=document.getElementById("content"),n=document.createElement("navig"),t=document.createElement("main"),a=document.createElement("footer");e.append(n,t,a),(()=>{const e=document.querySelector("navig"),n=document.createElement("div");n.className="coName";const t=document.createElement("div");t.className="coNameTop",t.innerHTML="Michał Matysik Geoconsulting";const a=document.createElement("div");a.className="coNameSub",a.innerHTML="Reservoir sedimentology";const o=document.createElement("div");o.className="coNameBox",o.append(t,a),n.append(i,o);const r=document.createElement("div");r.className="hidden menu";const c=document.createElement("div");c.className="nav home",c.textContent="Home",r.appendChild(c);const s=document.createElement("div");s.className="nav services",s.textContent="Services",r.appendChild(s);const l=document.createElement("div");l.className="nav about",l.textContent="About Me",r.appendChild(l);const d=document.createElement("div");d.className="nav pubList",d.textContent="Publication list",r.appendChild(d);const m=document.createElement("div");m.className="burger";const p=document.createElement("div");p.className="b-top";const u=document.createElement("div");u.className="b-bot b-bot-click",m.appendChild(p),m.appendChild(u),e.append(n,r,m)})(),re(),ce()})();const he=document.querySelector(".home"),fe=document.querySelector(".services"),be=document.querySelector(".about"),ve=document.querySelector(".burger"),we=document.querySelector(".menu"),ye=document.querySelector(".b-bot"),ke=document.querySelector(".pubList"),xe=document.querySelector(".coName");ve.addEventListener("click",(()=>{we.classList.toggle("hidden"),ye.classList.toggle("b-bot-click")})),he.addEventListener("click",(()=>{ye.classList.toggle("b-bot-click"),we.classList.toggle("hidden"),re()})),fe.addEventListener("click",(()=>{ye.classList.toggle("b-bot-click"),we.classList.toggle("hidden"),(()=>{window.scroll(0,0);const n=document.querySelector("main");n.innerHTML="";const t=document.createElement("div");t.className="mainText";const i=document.createElement("h2");i.innerText="Services";const a=document.createElement("div");a.className="servicesDiv",t.append(a);const o=document.createElement("div");o.className="service1";const r=document.createElement("h3");r.innerText="Sedimentology:";const c=document.createElement("ul"),s=document.createElement("li");s.innerText="describing and interpreting depositional macro- and microfacies, key surfaces,";const l=document.createElement("li");l.innerText="recognizing high-frequency sedimentary cycles, sequence stratigraphic units, and key surfaces,";const d=document.createElement("li");d.innerText="describing and interpreting syndepositional deformation structures and tsunamites,";const m=document.createElement("li");m.innerText="reconstructing depositional environments, platform geometries, and basin evolution and dynamics.",c.append(s,l,d,m),o.append(r,c);const p=document.createElement("div");p.className="service2";const u=document.createElement("h3");u.innerText="Diagenesis:";const g=document.createElement("ul"),h=document.createElement("li");h.innerText="identifying diagenetic phases and events and their relative timing to establish post-depositional history of the strata,";const f=document.createElement("li");f.innerText="establishing cement stratigraphy using petrographic and cathodoluminescence observations (the company is equipped with a petrographic microscope with a high-resolution camera and reflected light and CL stages),";const b=document.createElement("li");b.innerText="establishing temperature and character of cement-forming fluids with oxygen and carbon isotope geochemistry using powder (bulk) and SIMS (in situ) methods (powder samples are analyzed in one of several laboratories in Europe, and thin sections are analyzed with SIMS in Stockholm).",g.append(h,f,b),p.append(u,g);const v=document.createElement("div");v.className="service3";const w=document.createElement("h3");w.innerText="Reservoir properties:";const y=document.createElement("ul"),k=document.createElement("li");k.innerText="characterizing pore types, morphology, and distribution as well as porosity enhancing and destructive processes,";const x=document.createElement("li");x.innerText="integration of macroscopic and petrographic observations with petrophysical and well log data provided by the client,";const M=document.createElement("li");M.innerText="assessing reservoir properties of individual facies or stratigraphic intervals.",y.append(k,x,M),v.append(w,y),a.append(o,p,v),n.append(i,t),function(){const e=document.getElementsByTagName("li");for(let n=0;n<e.length;n++)e[n].classList.add("servicesListItems")}(),e.photos=photosI.slice(10,20),oe(),ce()})()})),be.addEventListener("click",(()=>{ye.classList.toggle("b-bot-click"),we.classList.toggle("hidden"),function(){window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="mainText";const t=document.createElement("h2");t.innerText="About me";const i=document.createElement("p");i.className="aboutMe",i.innerHTML="My name is Michał Matysik. I have a 13-year experience in Paleozoic and Mesozoic tropical- and cool-water carbonates, evaporites, mixed carbonate-siliciclastic systems, and siliceous deposits, gained during my Ph.D. research, four postdoc projects, and current geoconsulting and academic works focused on the Barents Sea, continental Europe, and the Middle East. Not only these different projects gave me an opportunity to work with a broad range of depositional facies and environments (sabkhas, tidal flats, lagoons, high-energy shoals, warm- to cool-water reefs, open-platform storm-dominated settings), diagenetic processes (dissolution, karstification, silicification, various dolomitization models), reservoir geometries (simple layer-cake successions to highly heterogeneous reservoirs hosted in tectonically tilted strata), and economic accumulations (hydrocarbons, MVT mineralization). They also developed my proficiency in planning and using proper methods to solve specific sedimentological problems. Part of the results has been published in high-impact peer-reviewed journals (see publication list on the right). <p>By visiting areas of modern sedimentation along the Red Sea, Persian (Arabian) Gulf, Oman Gulf, and Jutland Peninsula, I have supplemented my theoretical knowledge about coastal carbonate-evaporitic and siliciclastic settings.</p>",n.append(i);const a=document.createElement("div");a.className="aboutBox";const o=document.createElement("div");o.className="sideBar";const r=me;r.className="profilePhoto";const c=document.createElement("div");c.className="publicationList",c.innerText="Publications list",o.append(r,c),a.append(n,o),e.append(t,a),document.querySelector(".publicationList").addEventListener("click",(()=>{le()})),ce()}()})),ke.addEventListener("click",(()=>{ye.classList.toggle("b-bot-click"),we.classList.toggle("hidden"),le()})),xe.addEventListener("click",(()=>{re()}))})()})();