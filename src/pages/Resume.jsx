import React from 'react';
import { Document, Page } from 'react-pdf'; // Import necessary components from react-pdf
import { pdfjs } from 'react-pdf';

// Set the worker URL for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const resumeFile = '/assets/resume.pdf'; // Path to the resume PDF in the public folder

  return (
    <div className="py-10 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Resume</h1>
        <span className="text-gray-500 text-lg">View my resume below</span>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex justify-center mt-5">
        <div style={{ height: '750px', width: '80%' }}>
          <Document
            file={resumeFile} // Path to the PDF
            loading={<div>Loading...</div>} // Loading indicator
          >
            {/* Render the first page of the PDF */}
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Resume;
