import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "./MyResume.css";

import KBGResume from "../../KBGResume.pdf";

const MyResume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  return (
    <div className="resume">
      <Document file={KBGResume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default MyResume;
