$(document).ready(function() {
	var url = '/articles/tracemonkey.pdf';
	PDFJS.disableWorker = true;

	var pdfDoc = null,
			pageNum = 1,
			scale = 0.8,
			canvas = document.getElementById('canvas'),
			ctx = canvas.getContext('2d');
	function renderPage(num) {
	pdfDoc.getPage(num).then(function(page) {
	var viewport = page.getViewport(scale);
	canvas.height = viewport.height;
	canvas.width = viewport.width;

	// Render PDF page into canvas context
	var renderContext = {
		canvasContext: ctx,
		viewport: viewport
	};
	page.render(renderContext);
	});

	//
    // Asynchronously download PDF as an ArrayBuffer
    //
    PDFJS.getDocument(url).then(function getPdfHelloWorld(_pdfDoc) {
      pdfDoc = _pdfDoc;
      renderPage(pageNum);
    });
});