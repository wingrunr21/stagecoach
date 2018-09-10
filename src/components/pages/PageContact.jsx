/* React */
import React from "react";

/* Components */
import GoogleMapReact from "google-map-react";

/* Stylesheets */
import "../../styles/pages/PageContact.css";


export const PageContact = (props) => {
  const styleGoogleMap = { height: 288 + 'px', width: 90 + '%', minWidth: 320 + 'px', maxWidth: 640 +'px', margin: "24px auto", display: 'inlineBlock' };
  const MapLabel = ({ text }) => <div>{ text }</div>;

  const keyAPI= { key: "AIzaSyBL3o3vS6QBa0JxUEAIKrX80_gkmuH3S3U" };
  const defaultMapCenter= { lat: 40.2304149, lng: -104.0814956 };
  const defaultMapZoom = 16;

  return (
    <main className="main-contact">
      <p>Our processing plant and shop is located in Wiggins, CO. Google Maps will <em>occasionally</em> plot our location incorrectly.  See the image below for the correct location.</p>
      <h1>Contact</h1>
      <ul className="ul-contact">
        <li>Shop Location</li>
        <li>600 W 3rd Ave</li>
        <li>WIggins, CO 80654</li> 
      </ul>
      <div style={styleGoogleMap}>
        <GoogleMapReact defaultCenter={ defaultMapCenter} defaultZoom={ defaultMapZoom } bootstrapURLKeys={keyAPI}>
          <MapLabel lat={ defaultMapCenter.lat } lng={ defaultMapCenter.lng } text={ "Stagecoach Meat Co." }/>
        </GoogleMapReact>
      </div>
      <ul className="ul-contact">
        <li>Mailing Address</li>
        <li>PO Box 413</li>
        <li>Wiggins, CO 80654</li>
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
