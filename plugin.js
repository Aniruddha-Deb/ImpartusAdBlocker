console.log("Loaded ad remover plugin")
var config = { childList: true, subtree: true };
var feed = $("div[class='imus-student-wrapper']")[0];

var callback = function(mutationsList) {
	var ads = $( "div[id^='ad']" )
	if (ads.length !== 0) {
		ads.remove();
		console.log('Removed ads');
	}
};

var observer = new MutationObserver(callback);
observer.observe(feed, config);
