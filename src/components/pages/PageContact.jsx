/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/PageContact.css";


export const PageContact = (props) => {
  return (
    <main className="main-contact">
      <p>Our processing plant and shop is located in Wiggins, CO. Google Maps will incorrectly plot our location.  See the image below for the correct location.</p>
      <h1>Contact</h1>
      <ul className="ul-contact">
        <li>Shop Location</li>
        <li>600 W 3rd Ave</li>
        <li>Colorado 80654</li> 
      </ul>
      <ul className="ul-contact">
        <li>Mailing Address</li>
        <li>PO Box 413</li>
        <li>Wiggins, Colorado 80654</li>
      </ul>
      <ul className="ul-contact">
        <li>Phone and Fax</li>
        <li>Phone : 970-483-7280</li>
        <li>Fax : 970-483-8180</li>
      </ul>
      <p>To contact us via email: <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">Stagecoach Meat</a></p>
      <p>Also check out our Facebook page...</p>
    </main>
  );
};
