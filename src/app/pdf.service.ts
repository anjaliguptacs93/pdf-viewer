// import { DOCUMENT } from '@angular/common';
// import { Inject, Injectable } from '@angular/core';
// import { ViewportParameters, PDFRenderParams } from 'pdfjs-dist';
// import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
// import { PDFDocumentProxy } from 'pdfjs-dist/types/display/api';
// import { version } from 'process';

// export class PdfService {
//   private document: Document;

//   constructor(@Inject(DOCUMENT) document) {
//     this.document = document;
//     const pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`;
//     GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
//   }

//   // My use case demonstrating strongly typed usage.
//   public async pdfToImageDataURLAsync(pdfFile: File): Promise<string> {
//     const arrayBuffer = await new Response(pdfFile).arrayBuffer();
//     const canvas = this.document.createElement('canvas'),
//       ctx = canvas.getContext('2d') as CanvasRenderingContext2D,
//       data = arrayBuffer;

//     const pdf: PDFDocumentProxy = await getDocument(data).promise;
//     const page = await pdf.getPage(1);

//     const viewPortParams: ViewportParameters = { scale: 2 };
//     const viewport = page.getViewport(viewPortParams);

//     canvas.height = viewport.height;
//     canvas.width = viewport.width;

//     const renderContext: PDFRenderParams = {
//       canvasContext: ctx,
//       viewport: viewport
//     };

//     const renderedPage = await page.render(renderContext).promise;
//     const res = canvas.toDataURL();
//     if (pdf != null) pdf.destroy();
//     return res;
  
// }
// }


