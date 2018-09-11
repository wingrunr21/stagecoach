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
      <section id="section-intro">
        <p>Our processing plant and shop is located in Wiggins, CO.</p>
      </section>
      <section id="section-business-hours">
        <h3>Business Hours</h3>
        <hr />
        <ul className="ul-contact">
          <li>Mon - Fri: 7:30 - 5:00</li>
          <li>Sat: 9:00 - 12:00</li>
        </ul>
      </section>
      <section id="section-phone-and-fax">
        <h3>Phone and Fax</h3>
        <hr />
        <ul className="ul-contact">
          <li>Phone : 970-483-7280</li>
          <li>Fax : 970-483-8180</li>
        </ul>
      </section>
      <section id="section-map">
        <h3>Processing Plant and Retail Shop</h3>
        <hr />
        <p>Be aware that Google Maps will occasionally plot our location incorrectly.  If you end up in the wrong place plase call us!</p>
        <ul className="ul-contact">
          <li>600 W 3rd Ave</li>
          <li>WIggins, CO 80654</li> 
        </ul>
        <div style={styleGoogleMap}>
          <GoogleMapReact defaultCenter={ defaultMapCenter} defaultZoom={ defaultMapZoom } bootstrapURLKeys={keyAPI}>
            <MapLabel lat={ defaultMapCenter.lat } lng={ defaultMapCenter.lng } text={ "Stagecoach Meat Co." }/>
          </GoogleMapReact>
        </div>
      </section>
      <section id="section-mailing-address">
      <h3>Mailing Address</h3>
      <hr />
      <p>Should you need to send physical mail, our mail is delivered to this address:</p>
        <ul className="ul-contact">
          <li>PO Box 413</li>
          <li>Wiggins, CO 80654</li>
        </ul>
      </section>
      <section id="section-email">
        <p>To contact us via email: <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">Stagecoach Meat</a></p>
      </section>
      <section id="section-feacebook">
        <h3>Social Media</h3>
        <hr />
        <p>Also check out our Facebook page!</p>
      </section>
    </main>
  );
};
