// ==UserScript==
// @name         GrepoData Auto_Indexar
// @namespace    grepodata
// @version      2.0.0
// @author       BadUser
// @homepage     https://grepodata.com/indexer
// @description  Esse script permite a automátização da indexação dos relatórios do jogo.
// @include      https://*.grepolis.com/game/*
// @include      https://grepodata.com*
// @exclude      view-source://*
// @icon         https://grepodata.com/assets/images/grepodata_icon.ico
// ==/UserScript==

(function() {
    var rand = Math.floor((Date.now()/1000)/(60*60)) + "";
    var CustomStyleJS = document.createElement('script');
    CustomStyleJS.type = 'text/javascript';
    CustomStyleJS.src = 'https://api.grepodata.com/script/indexer.js?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleJS);
    var CustomStyleCSS = document.createElement('link');
    CustomStyleCSS.rel = 'stylesheet';
    CustomStyleCSS.type = 'text/css';
    CustomStyleCSS.href = 'https://api.grepodata.com/script/indexer.css?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleCSS);
    console.log("Gredata Auto_Indexar adicionado com sucesso.");
})();
