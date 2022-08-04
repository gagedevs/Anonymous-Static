var nSite = 'new Nightmare({"title": "Anonymous","type": "url","url": "https://anonymouss.org","width": 1920,"height": 850,"theme": "dark"})';
async function injectnightmare() {
    var e = await fetch("https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js"),
        n = await e.text();
    n = n.replaceAll("<br>", ";");
    var t = document.createElement("script");
    (t.innerHTML = n + "\n\neval(" + nSite + ")"), document.getElementsByTagName("html")[0].appendChild(t);
}
var cdn2 = document.createElement("link");
cdn2.setAttribute("rel", "stylesheet"), (cdn2.href = "https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css"), document.getElementsByTagName("html")[0].appendChild(cdn2);
var ncdn3 = document.createElement("script");
(ncdn3.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"), document.getElementsByTagName("html")[0].appendChild(ncdn3);
var ncdn4 = document.createElement("script");
(ncdn4.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"), document.getElementsByTagName("html")[0].appendChild(ncdn4);
var ncdn5 = document.createElement("link");
(ncdn5.rel = "stylesheet"), (ncdn5.href = "https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"), document.getElementsByTagName("html")[0].appendChild(ncdn5), injectnightmare();
//# sourceMappingURL=/sm/fa4efa9826bcbca812444e8dde348e3f9f93a8e4469cb09f69139b0f44400cc9.map