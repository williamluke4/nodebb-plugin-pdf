
(function(module) {
	"use strict";
	// responsive format found at http://avexdesigns.com/responsive-youtube-embed/
	var PDF = {},
		embed = '<iframe class="pdf-plugin" src="/uploads/files/$1" frameborder="0"></iframe>';

	// modified from http://stackoverflow.com/questions/7168987/
	var	regularUrl = /<a href="(?:\/uploads\/files?)\/?(.+)">.+<\/a>/g;


	PDF.parse = function(data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}

		if (data.postData.content.match(regularUrl)) {
			data.postData.content = data.postData.content.replace(regularUrl, embed);
		}


		callback(null, data);
	};

	module.exports = PDF;
}(module));