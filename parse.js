chrome.tabs.executeScript(null, "removeLinks()");

function removeLinks() {
	[].slice.call(document.links).forEach(function (link) {
		link.parentNode.insertBefore(document.createTextNode(link.textContent), link);
		link.parentNode.removeChild(link);
	});
}
