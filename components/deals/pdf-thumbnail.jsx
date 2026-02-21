"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfThumbnail({ pdfUrl, width = 320 }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-full overflow-hidden bg-darker relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-6 border-2 border-sec border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white/50 text-xs">Loading preview...</span>
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full">
        <Document
          file={pdfUrl}
          onLoadSuccess={() => setLoaded(true)}
          loading=""
        >
          <Page
            pageNumber={1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-lg"
          />
        </Document>
      </div>
      {loaded && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-darker to-transparent pointer-events-none"></div>
      )}
    </div>
  );
}

export default PdfThumbnail;
