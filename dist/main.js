(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --color-blk: #0D0D0D;\n    --color-wht: #FFFFFF;\n    --color-bkgr: white;\n    --color-font: black;\n    --color-theme1: olive;\n    --color-theme2: tan;\n   \n}\n\nbody {\n    background-color: white;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n/* Menu (mobile only) */\n\n.hidden {\n    transform: translateY(-135%)\n}\n\n.topBar {\n    width: 100%;\n    height: max-content;\n    padding: .5em;\n    background-color: var(--color-theme1);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    position: fixed;\n    top: 0;\n    z-index: 22;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background-color: antiquewhite;\n}\n\n.navBar {\n    position: fixed;\n    top: 0;\n    background-color: var(--color-theme1);\n    height: 100vh;\n    z-index: 2;\n    padding-top: 2em;\n}\n\n\n.nav {\n    cursor: pointer;\n    width: max-content;\n    width: max-content;\n    padding: 1em;\n    font-size: 2em;\n    margin: auto;\n    font-weight: bold;\n}\n\n.coName {\n    font-size: 1.2em;\n    padding: .5em;\n}\n\n/* Burger (mobile only) */\n\n.burger {\n    width: max-content;\n    padding: 1em;\n    z-index: 5;\n  } \n\n.b-top {\n    background-color: var(--color-blk);\n    width: 3em;\n    height: 3px;\n    margin-bottom: .5em;\n}\n\n.b-bot {\n    background-color: var(--color-blk);\n    width: 1.5em;\n    height: 3px;\n    margin-left: auto;\n}\n\n.b-bot-click {\n    width: 3em;\n}\n\n\n/* Slider */\n.slider {\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n}\n\n/* USTAWIĆ OKRĄGŁE ZDJĘCIE I KONTENT NA ŚRODKU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */\n\n.slider {\n    width: 80vw;\n    height: 20vh;\n}\n\n.slider img {\n    width: 80%;\n    height: 80%;\n    margin: auto;\n    padding: 1em;\n    border-radius: 50%;\n}\n\n.circles {\n    display: flex;\n    flex-direction: row;\n}\n\n.circle {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    background-color: var(--color-theme1);\n}\n\n.circAct {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    background-color: var(--color-theme2);\n}\n\n/* Main content */\n\nmain {\n    padding-top: 3.9em;\n    display: flex;\n    flex-direction: column;\n    height: max-content;\n}\n\nh1 {\n    background-color: var(--color-theme2);\n    padding: .5em;\n}\n\n.mainSaidbar {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.profilePhoto img {\n    width: 80%;\n    height: auto;\n    padding: 1em;\n    margin: auto;\n    border-radius: 50%;\n}\n\n/* Footer */\n/* USTAWIĆ PRZYKLEJENIE DO SPODU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/\nfooter {\n    background-color: beige;\n    padding: 1em;\n    margin-top: auto;\n    \n}\n\n/* Services */\n\n.service1 {\n    background-color: var(--color-theme1);\n}\n\n.service2 {\n    background-color: var(--color-theme2);\n}\n\n.service3 {\n    background-color: var(--color-theme1);\n}\n\n.service1, .service2, .service3 {\n    padding: 1em;\n    text-align: center;\n    \n}\n\n.servicesDiv li {\n    list-style: none;\n    padding: 0.3em;\n}\n\n\n/* Publications list */\n\n.pubsLi {\n    padding: 1em;\n}\n\n\n/* About me section */\n\n.aboutMe {\n    padding: 1em;\n    width: 90%;\n    margin: auto;\n    text-align: justify;\n}",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var a,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function r(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var m=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(o[m].references++,o[m].updater(p)):o.push({identifier:d,updater:h(p,n),references:1}),a.push(d)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var o=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function p(e,n,t){var a=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var u=null,g=0;function h(e,n){var t,a,i;if(n.singleton){var o=g++;t=u||(u=s(n)),a=m.bind(null,t,o,!1),i=m.bind(null,t,o,!0)}else t=s(n),a=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=r(t[a]);o[i].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=t.p+"9410caf3730e464f8bcdd37b8a863303.jpg",n=t.p+"79acc471973463467ef14063f7678f16.jpg",a=t.p+"19d43de471b1560e64fddf44092bfa39.jpg",i=t.p+"9000e8f2d811c592793f64d29565d830.jpg",o=t.p+"84c6c63fe0fa6e79beb8649dc40d46ab.jpg",r=t.p+"b243c343178b4993af794c4e8d97454b.jpg",c=t.p+"930d7e5a5e249659928e982d8e8629a7.jpg",s=t.p+"3e06b9174758e138841e2cf2328031ba.jpg",l=t.p+"53aae0dab9fa74792ec217f990dbebc8.jpg",d=t.p+"87bcc5e7a59dbdcbe0a32a68395f6be5.jpg",m=t.p+"e35d398815947a7faf11379b96d073d3.jpg",p=t.p+"e7eba27941eac7148e071bdca28f980f.jpg",u=t.p+"2afedc41f35b4d31c6d2c4b18d4cc947.jpg",g=t.p+"5f057f5a6783ec907be169b5fbc4c608.jpg",h=t.p+"343c42ab7c9e978b17532050fbc366a4.jpg",f=t.p+"f1f4a09f447079490d7d5f770810ab5c.jpg",b=t.p+"dcef561f754c46548334c90fa1e9ca0e.jpg",v=t.p+"70f1852cb9af3b2d31611014f3ad5b46.jpg",y=t.p+"fb1b7e3701504225beb7f1f048c8775f.jpg",w=t.p+"c275bf92f51671215be8fc148c520c1e.jpg",k=t.p+"2822c7da058334f5d9ac75f5a56c1f14.jpg",E=t.p+"bc96a737c4e15d4ee22f8e594b48ce31.jpg",M=t.p+"da0c78228f66acc6733b2507dfc9b5b0.jpg",S=t.p+"b74c50d326f63c1a9e643c3b297babfa.jpg",T=t.p+"468643593ceeb4254f82bf9cfbfa7df9.jpg",x=t.p+"c5dd4e43194062a414996d69f59d6d3b.jpg",L=t.p+"0179c7e5e3943288fe1cf57295498a32.jpg",j=new Image,N=new Image,I=new Image,P=new Image,C=new Image,H=new Image,A=new Image,B=new Image,_=new Image,q=new Image,G=new Image,z=new Image,F=new Image,D=new Image,R=new Image,O=new Image,U=new Image,J=new Image,K=new Image,Z=new Image,W=new Image,$=new Image,X=new Image,Y=new Image,Q=new Image,V=new Image,ee=new Image;j.src=e,N.src=n,I.src=a,P.src=i,C.src=o,H.src=r,A.src=c,B.src=s,_.src=l,q.src=d,G.src=m,z.src=p,F.src=u,D.src=g,R.src=h,O.src=f,U.src=b,J.src=v,K.src=y,Z.src=w,W.src=k,$.src=E,X.src=M,Y.src=S,Q.src=T,V.src=x,ee.src=L;let ne=[j,N,I,P,C,H,A,B,_,q,G,z,F,D,R,O,U,J,K,Z,W,$,X,Y,Q,V,ee];function te(){let e=document.createElement("div");e.className="sliderBox";let n=document.createElement("div");const t=document.createElement("div"),a=document.createElement("div");let i=document.createElement("div");document.querySelector("main").append(e);let o=0,r=()=>{n.className="slider",n.innerHTML="",i.innerHTML="",n.appendChild(ne[o]),t.className="backBtn",t.innerText="<",a.className="froBtn",a.innerText=">",i.className="circles",i.innerHTML="";for(let e=0;e<ne.length;e++){let e=document.createElement("div");e.className="circle",i.appendChild(e)}document.querySelectorAll(".circle").forEach(((e,n)=>{e.addEventListener("click",(()=>{o=n,r()}))})),i.childNodes[o].className="circAct"};r(),e.append(n,t,a,i),t.addEventListener("click",(()=>{o--,o<0&&(o=ne.length-1),r()})),a.addEventListener("click",(()=>{o++,o>ne.length-1&&(o=0),r()})),setInterval((()=>{o++,o>=ne.length&&(o=0),r()}),2e3)}let ae=()=>{const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("h1");n.innerText="Company profile",e.appendChild(n),te();const t=document.createElement("p");t.className="homeText",t.innerText="Michał Matysik Geconsulting is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporiticsiliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation.",e.appendChild(t)},ie=()=>{const e=document.querySelector("footer");e.innerHTML="";const n=document.createElement("div");n.className="adress",n.innerHTML="<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>";const t=document.createElement("div");t.className="email",t.innerHTML="<p><strong>E-mail:</strong> ma4tys@interia.pl</p>";const a=document.createElement("div");a.className="mobile",a.innerHTML="<p><strong>Mobile:</strong> (+48) 882 483 147</p>",e.append(n,t,a)};const oe=t.p+"1004a8d5b3bff4875a83ac16b00f2f73.jpg";let re=()=>{window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="mainText",e.appendChild(n);const t=document.createElement("h1");t.innerText="Publication list";const a=document.createElement("ul"),i=document.createElement("li");i.innerHTML="<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S., Rameil, N., Gianotten, I. P. & Brunstad, H. (in review) Cherts, spiculites, and collapse breccias Porosity generation in upper Permian reservoir rocks, Gohta discovery, Loppa High, south-western Barents Sea. <i>Marine and Petroleum Geology</i>";const o=document.createElement("li");o.innerHTML="Bucur, I. I. & <strong>Matysik, M.</strong> (accepted) Dasycladalean green algae and associated foraminifers in Middle Triassic (Lower and Middle Muschelkalk) carbonates of the south-eastern Germanic Basin (Upper Silesia, Poland). <i>Annales Societatis Geologorum Poloniae.</i>";const r=document.createElement("li");r.innerHTML='Antczak, M., Ruciński, M. R., Stachacz, M., <strong>Matysik, M.</strong> & Król, J. J. (in press) Diversity of vertebrate remains from the Lower Gogolin Beds (Anisian) of southern Poland. <i>Annales Societatis Geologorum Poloniae.</i> Free full text available at: <a href="http://www.asgp.pl/inpress" target="blank">[click]</a>;';const c=document.createElement("li");c.innerHTML='Stachacz, M. & <strong>Matysik, M.</strong> (2020) Early Middle Triassic (Anisian) trace fossils, ichnofabrics, and substrate types from the southeastern Germanic Basin (Wellenkalk facies) of Upper Silesia, southern Poland: implications for biotic recovery following the Permian/Triassic mass extinction. <i>Global and Planetary Change</i>, 194: 103290. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921818120301818?dgcid=rss_sd_all" target="blank">[click]</a>';const s=document.createElement("li");s.innerHTML='<strong>Matysik, M.</strong> & Szulc, J. (2019) Shallow-marine carbonate sedimentation in a tectonically mobile basin, the Muschelkalk (Middle Triassic) of Upper Silesia (southern Poland). <i>Marine and Petroleum Geology</i>, 107: 99–115.  See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264817219302211" target="blank">[click]</a>';const l=document.createElement("li");l.innerHTML='<strong>Matysik, M.</strong> (2019) High-frequency depositional cycles in the Muschelkalk (Middle Triassic) of southern Poland: Origin and implications for Germanic Basin astrochronological scales. <i>Sedimentary Geology</i>, 383: 159–180. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0037073819300338" target="blank">[click]</a>';const d=document.createElement("li");d.innerHTML='Jewuła, K., <strong>Matysik, M.</strong>, Paszkowski, M. & Szulc, J. (2019) The Late Triassic development of playa–gilgai environments from Upper Silesia, southern Poland. <i>Sedimentary Geology</i>, 379: 25–45.  Free full text available at: <a href="https://www.krasiejow.pl/static/img/k01/The_late_Triassic_development_of_playa,_gilgai_floodplain,_and_fluvial_environments_from_Upper_Silesia...pdf" target="blank">[click]</a>';const m=document.createElement("li");m.innerHTML='<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S. & Brunstad, H. (2017) Diagenesis of spiculites and carbonates in a Permian temperate ramp succession, Tempelfjorden Group, Spitsbergen, Arctic Norway. <i>Sedimentology</i>, 65: 745–774. See: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sed.12404" target="blank">[click]</a>';const p=document.createElement("li");p.innerHTML='<strong>Matysik, M.</strong> (2016) Facies types and depositional environments of a morphologically diverse carbonate platform: a case study from the Muschelkalk (Middle Triassic) of Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 86: 119–164. Free full text available at: <a href="https://geojournals.pgi.gov.pl/asgp/article/view/25483/0" target="blank">[click]</a>';const u=document.createElement("li");u.innerHTML='<strong>Matysik, M.</strong>, Al-Ramadan, K. & Riding, R. (2015) Composition and morphology of Early Devonian microbial and metazoan patch reefs: Qasr Member of the Jauf Formation, Northwestern Saudi Arabia. <i>Journal of Sedimentary Research</i>, 85: 45–61. See: <a href="https://pubs.geoscienceworld.org/jsedres/issue/85/1" target="blank">[click]</a>';const g=document.createElement("li");g.innerHTML='<strong>Matysik, M.</strong> (2014) Sedimentology of the "ore-bearing dolomite" of the Kraków-Silesia region (Middle Triassic, southern Poland). <i>Annales Societatis Geologorum Poloniae</i>, 84: 81–112. Free full text available at: <a href="http://www.asgp.pl/84_2_081_112" target="blank">[click]</a>';const h=document.createElement("li");h.innerHTML='<strong>Matysik, M.</strong> (2010) Reefal environments and sedimentary processes of the Anisian Karchowice Beds in Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 80: 123–145. Free full text available at: <a href="http://www.asgp.pl/80_2_123_145" target="blank">[click]</a>',a.append(i,o,r,c,s,l,d,m,p,u,g,h),n.append(t,a),ce(),ie()},ce=()=>{const e=document.getElementsByTagName("li");for(let n=0;n<e.length;n++)e[n].classList.add("pubsLi")};const se=new Image;se.src=oe;var le=t(379),de=t.n(le),me=t(426);de()(me.Z,{insert:"head",singleton:!1}),me.Z.locals,window.photos=ne,(()=>{const e=document.getElementById("content"),n=document.createElement("navigation"),t=document.createElement("main"),a=document.createElement("footer");e.append(n,t,a),(()=>{const e=document.querySelector("navigation"),n=document.createElement("div");n.className="coName",n.textContent="MM Geoconsulting";const t=document.createElement("div");t.className="hidden menu";const a=document.createElement("div");a.className="nav home",a.textContent="Home",t.appendChild(a);const i=document.createElement("div");i.className="nav services",i.textContent="Services",t.appendChild(i);const o=document.createElement("div");o.className="nav about",o.textContent="About Me",t.appendChild(o);const r=document.createElement("div");r.className="nav pubList",r.textContent="Publication list",t.appendChild(r);const c=document.createElement("div");c.className="burger";const s=document.createElement("div");s.className="b-top";const l=document.createElement("div");l.className="b-bot b-bot-click",c.appendChild(s),c.appendChild(l),e.append(n,c,t)})(),ae(),ie()})();const pe=document.querySelector(".home"),ue=document.querySelector(".services"),ge=document.querySelector(".about"),he=document.querySelector(".burger"),fe=document.querySelector(".menu"),be=document.querySelector(".b-bot"),ve=document.querySelector(".pubList");he.addEventListener("click",(()=>{fe.classList.toggle("hidden"),be.classList.toggle("b-bot-click")})),pe.addEventListener("click",(()=>{be.classList.toggle("b-bot-click"),fe.classList.toggle("hidden"),ae()})),ue.addEventListener("click",(()=>{be.classList.toggle("b-bot-click"),fe.classList.toggle("hidden"),(()=>{const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="mainText",e.append(n);const t=document.createElement("h1");t.innerText="Services";const a=document.createElement("div");a.className="servicesDiv",n.append(t,a);const i=document.createElement("div");i.className="service1";const o=document.createElement("h5");o.innerText="Sedimentology:";const r=document.createElement("ul"),c=document.createElement("li");c.innerText="describing and interpreting depositional macro- and microfacies, key surfaces,";const s=document.createElement("li");s.innerText="recognizing high-frequency sedimentary cycles, sequence stratigraphic units, and key surfaces,";const l=document.createElement("li");l.innerText="describing and interpreting syndepositional deformation structures and tsunamites,";const d=document.createElement("li");d.innerText="reconstructing depositional environments, platform geometries, and basin evolution and dynamics.",r.append(c,s,l,d),i.append(o,r);const m=document.createElement("div");m.className="service2";const p=document.createElement("h5");p.innerText="Diagenesis:";const u=document.createElement("ul"),g=document.createElement("li");g.innerText="identifying diagenetic phases and events and their relative timing to establish post-depositional history of the strata,";const h=document.createElement("li");h.innerText="establishing cement stratigraphy using petrographic and cathodoluminescence observations (the company is equipped with a petrographic microscope with a high-resolution camera and reflected light and CL stages),";const f=document.createElement("li");f.innerText="establishing temperature and character of cement-forming fluids with oxygen and carbon isotope geochemistry using powder (bulk) and SIMS (in situ) methods (powder samples are analyzed in one of several laboratories in Europe, and thin sections are analyzed with SIMS in Stockholm).",u.append(g,h,f),m.append(p,u);const b=document.createElement("div");b.className="service3";const v=document.createElement("h5");v.innerText="Reservoir properties:";const y=document.createElement("ul"),w=document.createElement("li");w.innerText="characterizing pore types, morphology, and distribution as well as porosity enhancing and destructive processes,";const k=document.createElement("li");k.innerText="integration of macroscopic and petrographic observations with petrophysical and well log data provided by the client,";const E=document.createElement("li");E.innerText="assessing reservoir properties of individual facies or stratigraphic intervals.",y.append(w,k,E),b.append(v,y),a.append(i,m,b),function(){const e=document.getElementsByTagName("li");for(let n=0;n<e.length;n++)e[n].classList.add("servicesListItems")}(),te(),ie()})()})),ge.addEventListener("click",(()=>{be.classList.toggle("b-bot-click"),fe.classList.toggle("hidden"),function(){window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="mainText",e.append(n);const t=document.createElement("h1");t.innerText="About me";const a=document.createElement("p");a.className="aboutMe",a.innerText="My name is Michał Matysik. I have a 13-year experience in Paleozoic and Mesozoic tropical- and cool-water carbonates, evaporites, mixed carbonate-siliciclastic systems, and siliceous deposits, gained during my Ph.D. research, four postdoc projects, and current geoconsulting and academic works focused on the Barents Sea, continental Europe, and the Middle East. Not only these different projects gave me an opportunity to work with a broad range of depositional facies and environments (sabkhas, tidal flats, lagoons, high-energy shoals, warm- to cool-water reefs, open-platform storm-dominated settings), diagenetic processes (dissolution, karstification, silicification, various dolomitization models), reservoir geometries (simple layer-cake successions to highly heterogeneous reservoirs hosted in tectonically tilted strata), and economic accumulations (hydrocarbons, MVT mineralization). They also developed my proficiency in planning and using proper methods to solve specific sedimentological problems. Part of the results has been published in high-impact peer-reviewed journals (see publication list on the right). By visiting areas of modern sedimentation along the Red Sea, Persian (Arabian) Gulf, Oman Gulf, and Jutland Peninsula, I have supplemented my theoretical knowledge about coastal carbonate-evaporitic and siliciclastic settings.",n.append(t,a);const i=se;i.className="profilePhoto";const o=document.createElement("div");o.className="publicationList",o.innerText="Publication list",e.append(i,o),document.querySelector(".publicationList").addEventListener("click",(()=>{re()})),ie()}()})),ve.addEventListener("click",(()=>{be.classList.toggle("b-bot-click"),fe.classList.toggle("hidden"),re()}))})()})();