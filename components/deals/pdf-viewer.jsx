"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfViewer({ pdfUrl, isOpen, onClose, title }) {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(600);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPageWidth(width - 48);
      } else if (width < 1024) {
        setPageWidth(Math.min(600, width * 0.8));
      } else {
        setPageWidth(700);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
      
      {/* Modal Container */}
      <div
        className="relative bg-dark rounded-3xl w-full max-w-4xl h-[95vh] sm:h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-black/50 border border-ftborder/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-ft/50 border-b border-ftborder/20">
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg truncate">
              {title}
            </h3>
            {numPages && (
              <p className="text-white/40 text-xs mt-0.5">
                {numPages} {numPages === 1 ? "page" : "pages"}
              </p>
            )}
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Download Button */}
            <a
              href={pdfUrl}
              download
              className="flex items-center space-x-1.5 bg-sec/10 hover:bg-sec/20 text-sec px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border border-sec/20 hover:border-sec/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="hidden sm:inline">Download</span>
            </a>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto flex justify-center bg-darker p-3 sm:p-4 md:p-6">
          {loading && (
            <div className="flex flex-col items-center justify-center h-full space-y-3">
              <div className="w-10 h-10 border-3 border-sec border-t-transparent rounded-full animate-spin"></div>
              <span className="text-white/50 text-sm">Loading document...</span>
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading=""
            className="flex flex-col items-center space-y-4 sm:space-y-6"
          >
            {numPages &&
              Array.from({ length: numPages }, (_, i) => (
                <div key={`page_${i + 1}`} className="relative">
                  <Page
                    pageNumber={i + 1}
                    width={pageWidth}
                    className="shadow-2xl shadow-black/30 rounded-lg overflow-hidden"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white/70 text-xs px-2 py-1 rounded-lg">
                    {i + 1} / {numPages}
                  </div>
                </div>
              ))}
          </Document>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}

export default PdfViewer;
