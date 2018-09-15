/* React */
import React from "react";

/* Components */
import GoogleMapReact from "google-map-react";

/* Stylesheets */
import "../../styles/pages/PageContact.css";

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export const PageContact = (props) => {
  const MapLabel = ({ text }) => <div>{ text }</div>;
  const keyAPI= { key: "AIzaSyBL3o3vS6QBa0JxUEAIKrX80_gkmuH3S3U" };
  const defaultMapCenter= { lat: 40.2304149, lng: -104.0814956 };
  const defaultMapZoom = 14;

  return (
    <main className="main-contact">
      <section id="section-business-hours">
        <h3>Business Hours</h3>
        <hr />
        <div id="div-business-hours">
          <p>Our normal shop hours are listed. Please note we break for lunch from 12pm to 1pm on weekdays. Contact us in advance for business hours closer to holidays as we may extend weekends and time off to accomodate our employees.</p>
          <ul className="ul-contact">
            <li className="li-underlined">Monday - Friday</li>
            <li>7:30 to 12:00 </li>
            <li>-- Lunch --</li>
            <li>1:00 to 5:00 </li>
            <li className="li-underlined">Saturday</li>
            <li>9:00 to 12:00</li>
          </ul>        
        </div>
      </section>
      <section id="section-map">
        <h3>Processing and Retail Shop</h3>
        <hr />
        <div id="div-map-info">
          <p>Be aware that Google Maps will occasionally plot our location incorrectly.  If you can't find the the shop or end up in the wrong place please call us!</p>
          <ul className="ul-contact">
            <li>Stagecoach Meat Co.</li>
            <li>600 W 3rd Ave</li>
            <li>Wiggins, CO 80654</li> 
          </ul>
        </div>
        <div id="div-map">
          <GoogleMapReact defaultCenter={ defaultMapCenter} defaultZoom={ defaultMapZoom } bootstrapURLKeys={keyAPI}>
            <MapLabel lat={ defaultMapCenter.lat } lng={ defaultMapCenter.lng } text={ "Stagecoach Meat Co." }/>
          </GoogleMapReact>
        </div>
      </section>
      <section id="section-phone-and-fax">
        <h3>Phone and Fax</h3>
        <hr />
        {/* <FontAwesomeIcon className="fa-logo" icon={ faPhoneSquare } size="4x" /> */}
        <div id="div-phone-and-fax">
          <p>During business hours, direct phone calls and faxes to the following numbers:</p>
          <ul className="ul-contact">
            <li className="li-underlined">Phone</li>
            <li>970-483-7280</li>
            <li className="li-underlined">Fax</li>
            <li>970-483-8180</li>
          </ul>
        </div>
      </section>
      <section id="section-mailing-address">
        <h3>Mailing Address</h3>
        <hr />
        <div id="div-mailing-address">
          <p>If you need to send physical mail, deliveries are made to the listed address:</p>
          <ul className="ul-contact">
            <li>Stagecoach Meat Co.</li>
            <li>PO Box 413</li>
            <li>Wiggins, CO 80654</li>
          </ul>
        </div>
      </section>
      <section id="section-email">
        <h3>Email</h3>
        <hr />
        <div id="div-email">
          <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">
            <FontAwesomeIcon className="fa-logo" icon={ faEnvelope } size="4x" />
          </a>
          <p>To contact us via email: <a href="mailto:svonloh@yahoo.com?subject=Attention%20Sean">Stagecoach Meat</a> (svonloh@yahoo.com). Please add &quot;Attention: Sean&quot; to the subject line.</p>
        </div>
      </section>
      <section id="section-feacebook">
        <h3>Social Media</h3>
        <hr />
        <div id="div-social-media">
          <a href="https://www.facebook.com/Stagecoach-Meat-Company-LLC-205877879464025/">
            <FontAwesomeIcon className="fa-logo" icon={ faFacebook } size="4x" />
          </a>
          <p>Check out our Facebook page!  We post information about adjusted business hours, deals, events and more.</p>
        </div>
      </section>
    </main>
  );
};
