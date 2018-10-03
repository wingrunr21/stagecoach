/* React */
import React from "react";

/* Components */

/* Stylesheets */
import "../../styles/pages/PageProcessing.css";

/* Assets */
import BarbedWire from "../../assets/images/barbed-wire.jpg";
import CutsheetBeefPDF from "../../assets/documents/stagecoach-cutsheet-beef.pdf";
import CutsheetPorkPDF from "../../assets/documents/stagecoach-cutsheet-pork.pdf";
import { CutSheetContainer } from "../ui/CutSheetContainer.jsx";


export const PageProcessing = () => (
  <main className="main-processing">
      <div id="div-processing-banner-wrapper">
      <section>
        <h3>Custom Processing</h3>
      </section>
      <div id="div-cattle-image" />
    </div>
    <p>Because we are a small family-owned plant, we offer high quality processing while also cutting beef to the customer's specifications. If you're new to the whole process, we're available to answer any questions you may have along the way!</p>
    <p>The current slaughter charge for beef is $75 per head and the cost of processing is $0.81/lb. Contact us if you need to verify these rates.  After cutting, the beef is then double-wrapped and put into our freezer.</p>
    <p>The cut sheets we use to process your order are linked below.  If you have the ability to fill them out in advance they can be faxed to 970-483-8180 or sent via email to svonloh@yahoo.com. If you don't have the option to print and return the cut sheet to us, we have paper sheets available at our shop location.</p>
    <h5>Cut sheets in PDF format</h5>
    <div id="div-button-wrapper">
      {/* <input type="button" className="input-cutsheet" value="Beef Cut Sheet"></input>
      <input type="button" className="input-cutsheet" value="Pork Cut Sheet"></input>
      <input type="button" className="input-cutsheet" value="Steve - Resume"></input> */}
      <a className="a-pdf-link" href={CutsheetBeefPDF}>BEEF</a>
      <a className="a-pdf-link" href={CutsheetPorkPDF}>PORK</a>
    </div>
    <img id="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>
    <p>The diagrams below show the types of cuts we can do during processing. Click on a section to see available cuts.</p>
    <div id="div-svg-container">

    </div>
    <CutSheetContainer />
  </main>
);
