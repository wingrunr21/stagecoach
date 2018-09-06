/* React */
import React from "react";

/* Stylesheets */
import "../styles/PageFAQ.css";


export const PageFAQ = (props) => {
  return (
    <div id="div-page-wrapper-faq" className="div-page-wrapper">
      <h2>Frequently Asked Questions</h2>
      <ul id="ul-faq-list">
        <li className="li-faq-item">
          <span className="span-faq-q">I’d like to cook for my family or friends.  What serving size do you recommend per person?</span>
          {/* <span className="span-faq-a">As much as you can eat.</span> */}
          <span className="span-faq-a">We recommend 8 to 12oz per adult</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How are beef aged?  How long are they aged?</span>
          {/* <span className="span-faq-a">Like a fine wine.</span> */}
          <span className="span-faq-a">The beef are hanged in a temperature controlled cooler for up to 3 weeks, or your preference</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you age hogs the same as beef?</span>
          {/* <span className="span-faq-a">Yes... Next question.</span> */}
          <span className="span-faq-a">Hogs also hang in temperature controlled cooler for up to a week</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">When can I expect my order to be ready?</span>
          {/* <span className="span-faq-a">When we get to it</span> */}
          <span className="span-faq-a">You can expect your order to be ready 48 hours after it has been cut. We will notify you by telephone when it is ready to be picked up</span>
        </li>
        {/* <li className="li-faq-item">
          <span className="span-faq-q">How soon can I get an animal in?</span>
          <span className="span-faq-a">How soon can you get here?</span>
        </li> */}
        <li className="li-faq-item">
          <span className="span-faq-q">Where is Stagecoach Meat Co. located?  How do I find you?</span>
          <span className="span-faq-a">Our location is on the Contact Page. Google maps shows our location incorrectly</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you accept checks?</span>
          {/* <span className="span-faq-a">If it wont bounce</span> */}
          <span className="span-faq-a">Yes. We accept checks, cash and credit cards.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">What cuts do I have to choose from?</span>
          <span className="span-faq-a">You will be offered a cut sheet (either pork or beef), and you can choose your cuts on that form. If you have any questions when filling it out, we invite you to contact us, and we'll be more than happy to help you.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">What are your charges for slaughtering and processing?</span>
          <span className="span-faq-a">The slaughter charge is a flat charge.  Processing charges are based on the dress weight of the animal.  Please call for current rates.</span>
        </li>
        {/* <li className="li-faq-item">
          <span className="span-faq-q">What does “dress weight” mean?</span>
          <span className="span-faq-a">Dress weight refers to the carcass hanging weight after it has been butchered and skinned.  Expect an approximately 30% loss from the live weight of the animal.</span>
        </li> */}
        <li className="li-faq-item">
          <span className="span-faq-q">How do I cook certain cuts of meat?</span>
          <span className="span-faq-a">Microwave or stove</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do I need to bring boxes or coolers to take the meat home?</span>
          <span className="span-faq-a">BYOB</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">When should I drop the animal off?</span>
          <span className="span-faq-a">ASAP</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How soon after I’m notified that my order is ready should I pick it up?</span>
          <span className="span-faq-a">Our freezer space is valuable.  Please plan to pick your order up within a week after notification.</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">I’m new to custom meat processing.  Do you have cutting instruction forms available?</span>
          <span className="span-faq-a">We're working on it</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">Do you charge extra for making hamburger patties or sausage patties.</span>
          <span className="span-faq-a">No. Only for special sauce...</span>
        </li>
        <li className="li-faq-item">
          <span className="span-faq-q">How do you package the cuts of meat?</span>
          <span className="span-faq-a">All meat is wrapped first in a layer of plastic meat film and then covered with freezer paper.</span>
        </li>
      </ul>
    </div>
  );
};
