(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),a=t.n(i)()((function(e){return e[1]}));a.push([e.id,"/* General setup */\n\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    :root {\n        --color-blk: #0D0D0D;\n        --color-wht: #FFFFFF;\n        --color-bkgr: white;\n        --color-font: black;\n        --color-theme1: rgb(199, 199, 199);\n        --color-theme2: rgb(240, 240, 240);\n        --color-dark: rgb(50, 50, 50);\n    }\n\n/* Body and main cointainer */\n    body {\n        background-color: white;\n        font-family: 'Roboto', sans-serif;\n    }\n\n    #content {\n        min-height: 100vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n\n\n/* Menu (mobile only) */\n\n    .hidden {\n        /* transform: translateY(-135%); */\n        transform: translateY(-100%)\n    }\n\n    .menu {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100vw;\n        height: 100vh;\n        background-color: var(--color-dark);\n        transition: transform 200ms cubic-bezier(.5, 0, .5, 1);\n    }\n\n    navig {\n        width: 100%;\n        height: min-content;\n        padding: .5em;\n        background-color: var(--color-dark);\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        position: fixed;\n        align-items: center;\n        top: 0;\n        z-index: 22;\n    }\n\n    nav {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        background-color: antiquewhite;\n    }\n\n    .nav {\n        cursor: pointer;\n        width: 100%;\n        padding: 1em;\n        font-size: 2em;\n        margin: auto;\n        font-weight: bold;\n        border-bottom: 2px solid white;\n        text-align: center;\n        color: var(--color-wht);\n    }\n\n    .coName {\n        font-size: 1.2em;\n        padding: .5em;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        font-weight: bold;\n        cursor: pointer;\n        color: var(--color-wht);\n    }\n\n    .coNameTop {\n        width: 80%;\n        \n    }\n\n    .coNameSub {\n        /* display: none; */\n        font-style: italic;\n        font-size: 0.7em;\n        font-weight: normal;\n        padding-top: .3em;\n    } \n\n    .coName img {\n        height: 4em;\n        margin-right: 1em;\n    }\n\n\n/* Burger (mobile only) */\n\n    .burger {\n        width: max-content;\n        padding: 1em;\n        z-index: 5;\n    } \n\n    .b-top {\n        background-color: var(--color-wht);\n        width: 3em;\n        height: 3px;\n        margin-bottom: .5em;\n    }\n\n    .b-bot {\n        background-color: var(--color-wht);\n        width: 1.5em;\n        height: 3px;\n        margin-left: auto;\n    }\n\n    .b-bot-click {\n        width: 3em;\n    }\n\n\n/* Slider */\n\n    .sliderBox {\n        width: 100%;\n        height: 19em;\n        margin-top: 1em;\n    }\n\n    .displayer {\n        width: 80%;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin: auto;\n        justify-content: center;\n    }\n    .slider {\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        padding: .5em;\n        flex-direction: column;\n    }\n\n    .picDescriptionDiv {\n        display: none;\n    }\n\n\n/* Keframes for pictures changing */    \n        @keyframes slide {\n            0% {\n                opacity: .2;\n            }\n            10% {\n                opacity: 1;\n            }\n            90% {\n                opacity: 1;\n            }\n            100% {\n                opacity: .2;\n            }\n        }\n\n    .slider img {\n        width: 16em;\n        height: 16em;\n        margin: auto;\n        border-radius: 50%;\n        animation: slide 8000ms;\n    }\n\n    .btn {\n        height: inherit;\n        font-size: 2em;\n        cursor: pointer;\n    }\n\n    .circles {\n        display: flex;\n        flex-direction: row;\n        width: max-content;\n        margin: auto;\n        cursor: pointer;\n    }\n\n    .circle {\n        width: 1em;\n        height: 1em;\n        margin: .2em .2em;\n        border-radius: 50%;\n        background-color: var(--color-theme1);\n    }\n\n    .circAct {\n        width: 1em;\n        height: 1em;\n        margin: .2em .2em;\n        border-radius: 50%;\n        border: .2em solid var(--color-theme1);\n        background-color: var(--color-theme2);\n    }\n\n/* Main content */\n\n    main {\n        margin-top: 7em;\n        display: flex;\n        flex-direction: column;\n        height: max-content;\n    }\n\n    h2 {\n        background-color: var(--color-theme2);\n        padding: .5em;\n        height: 100%;\n    }\n\n\n/* Footer */\n\n    footer {\n        background-color: rgb(250, 219, 195);\n        padding: 1.3em;\n        margin-top: 2em;\n    }\n\n    .mobile a, .email a {\n        text-decoration: none;\n        color: black;\n    }\n\n/* Services */\n\n    .service1 {\n        background-color: var(--color-theme1);\n    }\n\n    .service2 {\n        background-color: var(--color-theme2);\n    }\n\n    .service3 {\n        background-color: var(--color-theme1);\n    }\n\n    .service1, .service2, .service3 {\n        padding: 1em 3em;\n        text-align: center; \n    }\n\n    .servicesDiv li {\n        list-style: none;\n        padding: 0.3em;\n    }\n\n\n/* Publications list */\n\n    .pubText {\n        width: 80%;\n        margin: auto;\n    }\n\n    .pubsLi {\n        padding: 1em;\n        list-style: none;\n    }\n\n\n/* About me section */\n\n    .aboutMe {\n        padding: 1em;\n        width: 80%;\n        margin: auto;\n        text-align: center;\n        \n    }\n\n\n\n    .sideBar {\n        width: 80%;\n        height: 100%;\n        margin: auto;\n    }\n\n    .profilePhoto {\n        width: 50%;\n        height: auto;\n        padding: 1em;\n        margin-left: 25%;\n        margin-right: 25%;\n    }\n\n    .publicationList {\n        cursor: pointer;\n        padding: 1em;\n        text-align: center;\n        background-color: var(--color-theme1);\n        border-radius: 10px;\n        margin: auto;\n        width: 60%;\n        font-weight: bold;\n    }\n\n/* Home page */\n    .homeText {\n        padding: 1em;\n        text-align: center;\n        width: 80%;\n        margin: auto;\n        margin-top: 1.2em;\n    }\n\n    footer p {\n        font-size: .8rem;\n     }\n\n\n/* <------------------------- Desctop version -------------------------\x3e */\n\n    @media screen and (min-width: 600px) {\n\n    /* Navigation */\n\n        .burger {\n            display: none;\n        }\n\n        .hidden {\n            transform: translateY(0);\n        }\n\n        .menu {\n            display: flex;\n            flex-direction: row;\n            width: max-content;\n            height: 100%;\n            position: static;\n        }\n\n        .nav {\n            width: max-content;\n            height: max-content;\n            border-bottom: none;\n            font-size: 1.5em;\n        }\n\n        .nav:hover {\n            color: var(--color-theme1);\n            transform: scale(1.1);\n        }\n\n        main {\n            flex-direction: column;\n            height: 100%;\n            flex-grow: 2;\n            align-items: center;\n\n        }\n\n        h2 {\n            width: 100%;\n            text-align: center;\n        }\n\n        .coNameTop {\n            width: max-content;\n        }\n\n        .coNameSub {\n            font-style: italic;\n            font-weight: normal;\n            display: block;\n            font-size: 0.9em;\n        }\n\n    /* Main */\n        .homeText {\n            width: 60%;\n            margin-top: 1.5em;\n        }\n\n\n\n    /* Slider */\n        .sliderBox {\n            width: 60%;\n            height: 70vh;\n            margin: 0 auto;\n            margin-top: 2em;\n        }\n\n        .slider img {\n            width: auto;\n            height: 55vh;\n            border-radius: 0;\n            object-fit: fill;\n        }\n\n        .btn, .circle, .nav {\n            transition: transform .15s ease-in-out;\n        }\n\n        .circle:hover {\n            transform: scale(1.3);\n        }\n\n        .btn:hover {\n            transform: scale(1.5);\n        }\n\n        .picDescriptionDiv {\n            position: absolute;\n            width: 30vw;\n            background-color: white;\n            font-size: .7em;\n            margin-top: 45vh;\n            opacity: .7;\n            padding: .4em;\n            border-radius: 5px;\n            text-align: center;\n        }\n\n    /* Services */\n        .service1, .service2, .service3 {\n            padding: 1em 2em;\n            text-align: left; \n        }\n        \n        .servicesDiv li {\n            list-style: disc;\n            padding: 0.3em;\n            width: 60%;\n            margin: auto;\n        }\n\n        h3 {\n            width: 60%;\n            margin: auto;\n        }\n\n    /* Pbulication list */\n        .pubText {\n            width: 60%;\n            margin: auto;\n            \n        }\n\n    /* About me */\n        .aboutMe {\n            width: 90%;\n            margin: auto;\n            text-align: left;\n            text-align: center;\n        }\n\n        .aboutBox {\n            display: flex;\n            flex-direction: row;\n            width: 70%;\n            margin: auto;\n        }\n\n        .sideBar {\n            width: max-content;\n            height: 100%;\n            margin: auto;\n            \n        }\n\n        .profilePhoto  {\n            width: auto;\n            height: 20em;\n            margin: auto;\n        }\n\n        .publicationList {\n            text-align: center;\n            background-color: var(--color-theme1);\n            border-radius: 10px;\n            padding: .2em;\n        }\n\n\n    /* Footer */\n        footer {\n            margin-top: 0;\n            \n        }\n\n        .pubBtn {\n            font-weight: bold;\n            cursor: pointer;\n        }\n\n\n    }\n\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var i,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function r(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var m=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(o[m].references++,o[m].updater(p)):o.push({identifier:d,updater:h(p,n),references:1}),i.push(d)}return i}function s(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function m(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,g=0;function h(e,n){var t,i,a;if(n.singleton){var o=g++;t=u||(u=s(n)),i=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=s(n),i=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=r(t[i]);o[a].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=r(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={};t.r(e),t.d(e,{N:()=>oe});var n={};t.r(n),t.d(n,{H:()=>re});const i=t.p+"e479974513d4d5e9817d5b5455173b66.png",a=new Image;a.src=i;const o=t.p+"3c4ca1a5971a6d5d73b8ac726c13c15e.jpg",r=t.p+"ad4f01893300491343e4fbfd10e8e2f8.jpg",c=t.p+"b7d7606c8ef88f520a88b43c549dae24.jpg",s=t.p+"7359be24b1e2092d97eb27fe1932fff4.jpg",l=t.p+"a0f54ad1bf76a8c3eed192f1a1e214e2.jpg",d=t.p+"45beeb497cf477413f9b4b83606a9897.jpg",m=t.p+"68b4fc7f1bba4db4217e8b6e7db3ce3a.jpg",p=t.p+"c36e93774476e68a311b035029bdd5dc.jpg",u=t.p+"43e947676fd1c50b3370c18745be1dce.jpg",g=t.p+"739ce3f06c356f09c8f4bca0f7e455db.jpg",h=t.p+"8e97c47ce3c248df72ac1df9bf397d41.jpg",f=t.p+"73e93bdd9c90da0bd6b153f9d62c6a8b.jpg",b=t.p+"afaf315503e299ea7b03e67ad286e881.jpg",w=t.p+"498b43a434397885e6a03849d38aa681.jpg",v=t.p+"8e87198dd6518e93b406b8adbaa7db6d.jpg",y=t.p+"45b2edb298b539285826d12c188bd817.jpg",k=t.p+"c7689f70ae93c5f8675940b042a1439e.jpg",M=t.p+"ff6bac58f9f84c1fd1acdb22e26e874a.jpg",x=t.p+"0defba1561adf354169f0dc7727dc45f.jpg",S=t.p+"4f1728156eb25b61387941439d233de6.jpg",T=t.p+"229368f1ed92661d470847e25628a93b.jpg",E=t.p+"12c51732fa32fc046bfb2318cb9055af.jpg",L=t.p+"f439c704c99ea6bf6e12e1c00667e7d9.jpg",P=t.p+"16823c161fabaf2f9396eaff9ad141de.jpg",N=t.p+"c73f61a6901e61d54885bae2dccd0de6.jpg",j=t.p+"cde1e65c4d58e1649e9957ed108db35a.jpg",I=t.p+"6ae893195d025a4ec47f317017323ec0.jpg",z=new Image,H=new Image,A=new Image,B=new Image,D=new Image,_=new Image,C=new Image,q=new Image,G=new Image,F=new Image,R=new Image,K=new Image,O=new Image,U=new Image,J=new Image,Z=new Image,V=new Image,$=new Image,W=new Image,X=new Image,Y=new Image,Q=new Image,ee=new Image,ne=new Image,te=new Image,ie=new Image,ae=new Image;z.src=o,H.src=r,A.src=c,B.src=s,D.src=l,_.src=d,C.src=m,q.src=p,G.src=u,F.src=g,R.src=h,K.src=f,O.src=b,U.src=w,J.src=v,Z.src=y,V.src=k,$.src=M,W.src=x,X.src=S,Y.src=T,Q.src=E,ee.src=L,ne.src=P,te.src=N,ie.src=j,ae.src=I;let oe=[z,H,A,B,D,_,C,q,G,F,R,K,O,U,J,Z,V,$,W,X,Y,Q,ee,ne,te,ie,ae],re=["Modern intertidal laminite (planar stromatolite) during ebb tide. It grades seaward into carbonate mud (bright area). Trucial Coast, Abu Dhabi, United Arab Emirates. ","Transition from warm-water carbonates and gypsum (lower half of the bright gray part), to temperate-water carbonates (upper half of the bright gray part), to spiculitic sediments (black part). The wall is ca. 50 m high. Permian, central Spitsbergen.","Plane-polarized (left) and SEM (right) views of tight spiculitic chert (lower part) and porous spiculite with excellent inter- and intraspicule porosity (upper part). Permian biosiliceous strata, central Spitsbergen.","Planar-e dolomite with relics of bryozoan colony. Excellent intraparticle and intercrystalline porosity.","CL view of saddle dolomite (sd) with non-luminescent core and bright red luminescent margin, post-dated by poikilotopic calcite (pc) in fracture. Permian biosiliceous strata, central Spitsbergen.","Void filled with calcite (white crystals) and galena (dark). MVT mineralization in Middle Triassic carbonates of the Kraków-Silesia region, southern Poland.","Sponge mound (m) with the oldest scleractinian corals in the World. Middle Triassic carbonates, southern Poland.","Bryozoan floatstone (lower half) being completely obliterated by late dolomitization and dissolution (upper half). ","Sabkha with desiccation cracks (s) and evaporite pan (e), grading seaward into microbial laminites (m). Car tracks for scale. Trucial Coast, Abu Dhabi, United Arab Emirates.","Sub-recent reddish caliche. Cyprus.","Karst-collapse breccias (arrows) in Upper Paleozoic carbonates. Central Spitsbergen.","Microbial mounds. Car tracks for scale. Early Devonian carbonates, northwestern Saudi Arabia.","Landward termination of the tidal channel, cutting carbonate mud during ebb tide. Saudi Arabia.","Calcite-replaced nodules after anhydrite/gypsum. Middle Triassic carbonates, northern Poland.","Shoreface sandstone penetrated by Zoophycos (black structures) and topped with flooding surface (not shown). The surface is overlain by deep spiculite. Permian biosiliceous strata, central Spitsbergen.","Sub-recent karst. Triassic carbonates, Dachstein platform, Austria.","Vertical transition from undolomitized micritic firmgrounds with Balanoglossites burrows (lower half), to epigenetically dolomitized firmgrounds (upper half). Middle Triassic carbonates, southern Poland.","Black spiculites cut by fractures with megaquartz (arrow) and later wide vein with saddle dolomite (orange cement; sd) and poikilotopic calcite (white cement; pc). Permian biosiliceous strata, central Spitsbergen.","Solution voids (hydrothermal karst) lined with several generations of white and orange saddle dolomite (sd) and later calcite (cc). Host rock (h) is Middle Devonian dolostone, southern Poland.","Layered lagoonal dolomicrite with superimposed dissolution vugs aligned with the layering. Middle Triassic carbonates, southern Poland.","Lofer cycles manifested as horizontal bedding in Upper Triassic carbonates. The Dolomites, northern Italy.","Middle Triassic peritidal dolostones (m) and cliff breccia (b), adjacent to the Devonian horst (h) that was standing in the middle of the Middle Triassic sea. Southern Poland.","Ore-bearing dolomite (epigenetically dolomitized micritic firmground) pierced by fractures with saddle dolomite (reddish cement) and Zn-Pb mineralization (dark cement). Middle Triassic carbonates, southern Poland.","Cryptalgal laminite with fluidization conduits (white arrows) and synsedimentary fault (yellow arrow). Both features indicate syndepositional tectonic activity. Middle Triassic carbonates, southern Poland.","Seismically induced jigsaw-puzzle (autoclastic) breccia in lagoonal dolomudstone. Middle Triassic carbonates, southern Poland.","K/T boundary (arrow) at Stevns Klint, Denmark.","CL view of partly recrystallized coarse, planar-s dolomite with characteristic blotchy luminescence."],ce=()=>{let t=document.createElement("div");t.className="sliderBox";let i=document.createElement("div");i.className="displayer";let a=document.createElement("div"),o=document.createElement("div");const r=document.createElement("div"),c=document.createElement("div");let s=document.createElement("div");document.querySelector("main").append(t);let l=0,d=()=>{a.className="slider",a.innerHTML="",o.className="picDescriptionDiv",o.innerHTML=`${n.picDescription[l]}`,s.innerHTML="",a.append(e.photos[l],o),r.className="back btn",r.innerText="<",c.className="fro btn",c.innerText=">",s.className="circles",s.innerHTML="";for(let n=0;n<e.photos.length;n++){let e=document.createElement("div");e.className="circle",s.appendChild(e)}document.querySelectorAll(".circle").forEach(((e,n)=>{e.addEventListener("click",(()=>{l=n,d()}))})),s.childNodes[l].className="circAct"};d(),i.append(r,a,c),t.append(i,s),r.addEventListener("click",(()=>{l--,l<0&&(l=e.photos.length-1),d()})),c.addEventListener("click",(()=>{l++,l>e.photos.length-1&&(l=0),d()})),setInterval((()=>{l++,l>=e.photos.length&&(l=0),d()}),8e3)},se=()=>{window.scroll(0,0);const t=document.querySelector("main");t.innerHTML="";const i=document.createElement("h2");i.innerText="Company profile",t.appendChild(i);const a=document.createElement("p");a.className="homeText",a.innerHTML='<strong>Michał Matysik Geconsulting</strong> is a one-person consulting company providing a wide spectrum of sedimentological services in carbonate and mixed carbonate-evaporitic-siliciclastic-siliceous systems and reservoirs. To best solve client problems, the company can work on different types of materials (outcrops, drill cores, side-wall cores, cuttings, thin sections) and datasets (stable isotope, cathodoluminescence, X-ray diffraction, X-ray fluorescence, scanning electron microscopy, total organic carbon, well log, and porosity-permeability plug data). All projects are held in the strictest confidence and are completed to a high standard with a rich photographic documentation (see example of <a class=\'pdfLink\' href="./pdf/2.pdf" download target="blank">sedimentary log</a> and <a class=\'pdfLink\' href="./pdf/1.pdf" download target="blank">detailed thin section description sheet</a>).',t.appendChild(a),n.picDescription=picDescriptions.slice(0,14),e.photos=photosI.slice(0,14),ce()},le=()=>{const e=document.querySelector("footer");e.innerHTML="";const n=document.createElement("div");n.className="adress",n.innerHTML="<p><strong>Address:</strong> Malachitowa 5/3, 30-798 Kraków, Poland</p>";const t=document.createElement("div");t.className="email",t.innerHTML="<p><strong>E-mail:</strong> <a href='mailto:ma4tys@interia.pl'>ma4tys@interia.pl</a></p>";const i=document.createElement("div");i.className="mobile",i.innerHTML="<p><strong>Mobile:</strong> <a href='tel:+48882483147'>(+48) 882 483 147</a></p>";const a=document.createElement("div");a.className="nip",a.innerHTML="<p><strong>NIP (taxpayer identification no.):</strong> 6782962896</p>",e.append(n,a,t,i)};const de=t.p+"1004a8d5b3bff4875a83ac16b00f2f73.jpg";let me=()=>{window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="pubText";const t=document.createElement("h2");t.innerText="Publication list";const i=document.createElement("ul"),a=document.createElement("li");a.innerHTML='<strong>Matysik, M.</strong>, Stachacz, M., Knaust, D. & Whitehouse, M.J. (2022) Geochemistry, ichnology, and sedimentology of omission levels in Middle Triassic (Muschelkalk) platform carbonates of the Germanic Basin (southern Poland). Palaeogeography, Palaeoclimatology, Palaeoecology, 585: 110732. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031018221005174" target="blank">[click]</a>';const o=document.createElement("li");o.innerHTML='Stachacz, M., Knaust, D. & <strong>Matysik, M.</strong> (2021) Middle Triassic bivalve traces from central Europe (Muschelkalk, Anisian): overlooked burrows of a common ichnofabric. PalZ. See: <a href="https://link.springer.com/content/pdf/10.1007/s12542-021-00583-6.pdf" target="blank">[click]</a>';const r=document.createElement("li");r.innerHTML='<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S., Rameil, N., Gianotten, I. P. & Brunstad, H. (2021) Cherts, spiculites, and collapse breccias Porosity generation in upper Permian reservoir rocks, Gohta discovery, Loppa High, south-western Barents Sea. <i>Marine and Petroleum Geology</i>, 128: 105043. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S026481722100146X" target="blank">[click]</a>';const c=document.createElement("li");c.innerHTML='Bucur, I. I. & <strong>Matysik, M.</strong> (2020) Dasycladalean green algae and associated foraminifers in Middle Triassic (Lower and Middle Muschelkalk) carbonates of the south-eastern Germanic Basin (Upper Silesia, Poland). <i>Annales Societatis Geologorum Poloniae</i>, 90: 391-407. See: <a href="http://www.asgp.pl/sites/default/files/volumes/90_4_391_407_Bucur_Matysik.pdf" target="blank">[click]</a>';const s=document.createElement("li");s.innerHTML='Antczak, M., Ruciński, M. R., Stachacz, M., <strong>Matysik, M.</strong> & Król, J. J. (2020) Diversity of vertebrate remains from the Lower Gogolin Beds (Anisian) of southern Poland. <i>Annales Societatis Geologorum Poloniae.</i> Free full text available at: <a href="http://www.asgp.pl/sites/default/files/volumes/90_4_419_433_Antczak_et_al.pdfMo" target="blank">[click]</a>;';const l=document.createElement("li");l.innerHTML='Stachacz, M. & <strong>Matysik, M.</strong> (2020) Early Middle Triassic (Anisian) trace fossils, ichnofabrics, and substrate types from the southeastern Germanic Basin (Wellenkalk facies) of Upper Silesia, southern Poland: implications for biotic recovery following the Permian/Triassic mass extinction. <i>Global and Planetary Change</i>, 194: 103290. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921818120301818?dgcid=rss_sd_all" target="blank">[click]</a>';const d=document.createElement("li");d.innerHTML='<strong>Matysik, M.</strong> & Szulc, J. (2019) Shallow-marine carbonate sedimentation in a tectonically mobile basin, the Muschelkalk (Middle Triassic) of Upper Silesia (southern Poland). <i>Marine and Petroleum Geology</i>, 107: 99–115.  See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0264817219302211" target="blank">[click]</a>';const m=document.createElement("li");m.innerHTML='<strong>Matysik, M.</strong> (2019) High-frequency depositional cycles in the Muschelkalk (Middle Triassic) of southern Poland: Origin and implications for Germanic Basin astrochronological scales. <i>Sedimentary Geology</i>, 383: 159–180. See: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0037073819300338" target="blank">[click]</a>';const p=document.createElement("li");p.innerHTML='Jewuła, K., <strong>Matysik, M.</strong>, Paszkowski, M. & Szulc, J. (2019) The Late Triassic development of playa–gilgai environments from Upper Silesia, southern Poland. <i>Sedimentary Geology</i>, 379: 25–45.  Free full text available at: <a href="https://www.krasiejow.pl/static/img/k01/The_late_Triassic_development_of_playa,_gilgai_floodplain,_and_fluvial_environments_from_Upper_Silesia...pdf" target="blank">[click]</a>';const u=document.createElement("li");u.innerHTML='<strong>Matysik, M.</strong>, Stemmerik, L., Olaussen, S. & Brunstad, H. (2017) Diagenesis of spiculites and carbonates in a Permian temperate ramp succession, Tempelfjorden Group, Spitsbergen, Arctic Norway. <i>Sedimentology</i>, 65: 745–774. See: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/sed.12404" target="blank">[click]</a>';const g=document.createElement("li");g.innerHTML='<strong>Matysik, M.</strong> (2016) Facies types and depositional environments of a morphologically diverse carbonate platform: a case study from the Muschelkalk (Middle Triassic) of Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 86: 119–164. Free full text available at: <a href="https://geojournals.pgi.gov.pl/asgp/article/view/25483/0" target="blank">[click]</a>';const h=document.createElement("li");h.innerHTML='<strong>Matysik, M.</strong>, Al-Ramadan, K. & Riding, R. (2015) Composition and morphology of Early Devonian microbial and metazoan patch reefs: Qasr Member of the Jauf Formation, Northwestern Saudi Arabia. <i>Journal of Sedimentary Research</i>, 85: 45–61. See: <a href="https://pubs.geoscienceworld.org/jsedres/issue/85/1" target="blank">[click]</a>';const f=document.createElement("li");f.innerHTML='<strong>Matysik, M.</strong> (2014) Sedimentology of the "ore-bearing dolomite" of the Kraków-Silesia region (Middle Triassic, southern Poland). <i>Annales Societatis Geologorum Poloniae</i>, 84: 81–112. Free full text available at: <a href="http://www.asgp.pl/84_2_081_112" target="blank">[click]</a>';const b=document.createElement("li");b.innerHTML='<strong>Matysik, M.</strong> (2010) Reefal environments and sedimentary processes of the Anisian Karchowice Beds in Upper Silesia, southern Poland. <i>Annales Societatis Geologorum Poloniae</i>, 80: 123–145. Free full text available at: <a href="http://www.asgp.pl/80_2_123_145" target="blank">[click]</a>',i.append(a,o,r,c,s,l,d,m,p,u,g,h,f,b),e.append(t,n),n.append(i),pe(),le()},pe=()=>{document.querySelectorAll("li").forEach((e=>{e.classList.add("pubsLi")}))};const ue=new Image;ue.src=de;var ge=t(379),he=t.n(ge),fe=t(426);he()(fe.Z,{insert:"head",singleton:!1}),fe.Z.locals,window.photosI=oe,window.picDescriptions=re,(()=>{const e=document.getElementById("content"),n=document.createElement("navig"),t=document.createElement("main"),i=document.createElement("footer");e.append(n,t,i),(()=>{const e=document.querySelector("navig"),n=document.createElement("div");n.className="coName";const t=document.createElement("div");t.className="coNameTop",t.innerHTML="Michał Matysik Geoconsulting";const i=document.createElement("div");i.className="coNameSub",i.innerHTML="Reservoir sedimentology";const o=document.createElement("div");o.className="coNameBox",o.append(t,i),n.append(a,o);const r=document.createElement("div");r.className="hidden menu";const c=document.createElement("div");c.className="nav home",c.textContent="Home";const s=document.createElement("div");s.className="nav services",s.textContent="Services";const l=document.createElement("div");l.className="nav about",l.textContent="About Me";const d=document.createElement("div");d.className="nav pubList",d.textContent="Publication list",r.append(c,s,l,d);const m=document.createElement("div");m.className="burger";const p=document.createElement("div");p.className="b-top";const u=document.createElement("div");u.className="b-bot b-bot-click",m.appendChild(p),m.appendChild(u),e.append(n,r,m)})(),se(),le()})();const be=document.querySelector(".home"),we=document.querySelector(".services"),ve=document.querySelector(".about"),ye=document.querySelector(".burger"),ke=document.querySelector(".menu"),Me=document.querySelector(".b-bot"),xe=document.querySelector(".pubList"),Se=document.querySelector(".coName");ye.addEventListener("click",(()=>{ke.classList.toggle("hidden"),Me.classList.toggle("b-bot-click")})),be.addEventListener("click",(()=>{Me.classList.toggle("b-bot-click"),ke.classList.toggle("hidden"),se()})),we.addEventListener("click",(()=>{Me.classList.toggle("b-bot-click"),ke.classList.toggle("hidden"),(()=>{window.scroll(0,0);const t=document.querySelector("main");t.innerHTML="";const i=document.createElement("div");i.className="mainText";const a=document.createElement("h2");a.innerText="Services";const o=document.createElement("div");o.className="servicesDiv",i.append(o);const r=document.createElement("div");r.className="service1";const c=document.createElement("h3");c.innerText="Sedimentology:";const s=document.createElement("ul"),l=document.createElement("li");l.innerText="describing and interpreting depositional macro- and microfacies,";const d=document.createElement("li");d.innerText="recognizing high-frequency sedimentary cycles, sequence stratigraphic units, and key surfaces,";const m=document.createElement("li");m.innerText="describing and interpreting syndepositional deformation structures and tsunamites,";const p=document.createElement("li");p.innerText="reconstructing depositional environments, platform geometries, and basin evolution and dynamics.",s.append(l,d,m,p),r.append(c,s);const u=document.createElement("div");u.className="service2";const g=document.createElement("h3");g.innerText="Diagenesis:";const h=document.createElement("ul"),f=document.createElement("li");f.innerText="identifying diagenetic phases and events and their relative timing to establish post-depositional history of the strata,";const b=document.createElement("li");b.innerText="establishing cement stratigraphy using petrographic and cathodoluminescence observations (the company is equipped with a petrographic microscope with a high-resolution camera and reflected light and CL stages),";const w=document.createElement("li");w.innerText="establishing temperature and character of cement-forming fluids with oxygen and carbon isotope geochemistry using powder (bulk) and SIMS (in situ) methods (powder samples are analyzed in one of several laboratories in Europe, and thin sections are analyzed with SIMS in Stockholm).",h.append(f,b,w),u.append(g,h);const v=document.createElement("div");v.className="service3";const y=document.createElement("h3");y.innerText="Reservoir properties:";const k=document.createElement("ul"),M=document.createElement("li");M.innerText="characterizing pore types, morphology, and distribution as well as porosity enhancing and destructive processes,";const x=document.createElement("li");x.innerText="integration of macroscopic and petrographic observations with petrophysical and well log data provided by the client,";const S=document.createElement("li");S.innerText="assessing reservoir properties of individual facies or stratigraphic intervals.",k.append(M,x,S),v.append(y,k),o.append(r,u,v),t.append(a,i),function(){const e=document.getElementsByTagName("li");for(let n=0;n<e.length;n++)e[n].classList.add("servicesListItems")}(),n.picDescription=picDescriptions.slice(14,27),e.photos=photosI.slice(14,27),ce(),le()})()})),ve.addEventListener("click",(()=>{Me.classList.toggle("b-bot-click"),ke.classList.toggle("hidden"),function(){window.scroll(0,0);const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.className="mainText";const t=document.createElement("h2");t.innerText="About me";const i=document.createElement("p");i.className="aboutMe",i.innerHTML='My name is Michał Matysik. I have over 10-year experience in studying Paleozoic and Mesozoic tropical- and cool-water carbonates, evaporites, mixed carbonate-siliciclastic systems, and biosiliceous deposits, gained during my Ph.D. research, four postdoc projects, and current geoconsulting and academic works focused on the Barents Sea, continental Europe, and the Middle East. Not only these different projects gave me an opportunity to work with a broad range of depositional facies and environments (sabkhas, tidal flats, lagoons, high-energy shoals, warm- to cool-water reefs, open-platform storm-dominated settings), diagenetic processes (dissolution, karstification, silicification, various dolomitization models), reservoir geometries (simple layer-cake successions to highly heterogeneous reservoirs hosted in tectonically tilted strata), and economic accumulations (hydrocarbons, MVT mineralization). They also developed my proficiency in planning and using proper methods to solve specific sedimentological problems. Part of the results has been published in high-impact peer-reviewed journals (see <span class="pubBtn">publication list</span>). By visiting areas of modern sedimentation along the Red Sea, Persian (Arabian) Gulf, Oman Gulf, and Jutland Peninsula, I have supplemented my theoretical knowledge about coastal carbonate-evaporitic and siliciclastic settings.</p>',n.append(i);const a=document.createElement("div");a.className="aboutBox";const o=document.createElement("div");o.className="sideBar";const r=ue;r.className="profilePhoto",o.append(r),a.append(n,o),e.append(t,a),document.querySelector(".pubBtn").addEventListener("click",(()=>{me()})),le()}()})),xe.addEventListener("click",(()=>{Me.classList.toggle("b-bot-click"),ke.classList.toggle("hidden"),me()})),Se.addEventListener("click",(()=>{se()}))})()})();