//Thanks to rlemon and Esailija for this!
//http://chat.stackoverflow.com/transcript/message/6026190#6026190

[].slice.call(document.links).forEach(function (link) {
	link.parentNode.insertBefore(document.createTextNode(link.textContent), link);
	link.parentNode.removeChild(link);
});
