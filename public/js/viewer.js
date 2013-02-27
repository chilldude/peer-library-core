//
// NOTE: 
// Modifying the URL below to another server will likely *NOT* work. Because of browser
// security restrictions, we have to use a file server with special headers
// (CORS) - most servers don't support cross-origin browser requests.
//
var url = 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf';

//
// Disable workers to avoid yet another cross-origin issue (workers need the URL of
// the script to be loaded, and currently do not allow cross-origin scripts)
//
PDFJS.disableWorker = true;

var pdfDoc = null;

//
// Get page info from document, resize canvas accordingly, and render page
//
function renderPage(num, canvas, ctx) {
	// Using promise to fetch the page
	pdfDoc.getPage(num).then(function(page) {
		var viewport = page.getViewport(835 / page.getViewport(1.0).width);
		canvas.height = viewport.height;
		canvas.width = viewport.width;

		// Render PDF page into canvas context
		var renderContext = {
			canvasContext: ctx,
			viewport: viewport
		};
		page.render(renderContext);
	});
}

//
// Asynchronously download PDF as an ArrayBuffer
//
PDFJS.getDocument(url).then(function getPdfHelloWorld(_pdfDoc) {
	pdfDoc = _pdfDoc;

	var canvas, ctx;

	for (var i=1; i <= pdfDoc.numPages; i++) {
		$('<canvas class=\"page\" id=\"' + i.toString() + '\"></canvas>').appendTo('.full-text');
		canvas = $('.page#' + i.toString()).get(0);
		ctx = canvas.getContext('2d');
		renderPage(i, canvas, ctx);
	}
});