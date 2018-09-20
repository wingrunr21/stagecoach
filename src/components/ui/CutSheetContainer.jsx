/* React */
import React from "react";

/* Stylesheets */
import "../../styles/ui/CutSheetContainer.css";

/* Compoenents */
import { BeefCutsSVG } from "./BeefCutsSVG.jsx";
import { PorkCutsSVG } from "./PorkCutsSVG.jsx";


export class CutSheetContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      beefSections: {
        chuck: ["Chuck Roast", "Arm Roast", "Shoulder Pot Roast (Boneless)", "Short Ribs"],
        brisket: ["Brisket"],
        rib: ["Rib Roast", "Rib Eye Steak", "Back Ribs"],
        shortLoin: ["T-Bone Steak", "Porterhouse Steak", "Tenderloin Roast/Steak"],
        flank: ["Flank Steak"],
        sirloin: ["Top Sirloin Steak", "Sirloin Steak", "Tenderloin Roast/Steak", "Beef Tri-Tip"],
        round: ["Round Steak", "Top Round Steak", "Bottom Round Steak", "Tip Steak", "Boneless Rump Roast", "Pikes Peak Roast"],
        shank: ["Soup Bones"]
      },
      porkSections: {
        shoulder: ["Shoulder Roast", "Pork Steaks"],
        loin: ["Spare Ribs", "Pork Chops"],
        belly: ["Bacon"],
        leg: ["Ham"]
      },
      selectedPathBeef: "chuck",
      selectedSectionPork: null
    }    
  }

  changeSectionBeef = (target) => {
    this.state.selectedPathBeef && this.state.selectedPathBeef.classList.remove("path-beef-cut-active");
    target.classList.add("path-beef-cut-active");
    this.setState({selectedPathBeef: target});
    console.log(this.state.selectedSectionBeef);
  }

  changeSectionPork(target) {
    console.log(target)
  }

  render() {
    return (
      <div id="div-svg-container">
        <BeefCutsSVG selectedSectionBeef={this.state.selectedBeefCut} changeSelectedBeefCut={this.changeSectionBeef} />
        <ul>
          {
            this.state.selectedPathBeef && this.state.beefCuts[this.state.selectedPathBeef].map((item, index) => <li key={index}>{item}</li> )
          }
        </ul>
        <PorkCutsSVG selectedSectionBeef={ null } changeSelectionPork={this.changeSectionPork} />
        <ul>
      
      </ul>
      </div>
    )
  }
}