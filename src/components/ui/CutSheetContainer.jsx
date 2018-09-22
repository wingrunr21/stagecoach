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
        cheek: [],
        chuck: ["Chuck Roast", "Arm Roast", "Shoulder Pot Roast (Boneless)", "Short Ribs"],
        brisket: ["Brisket"],
        rib: ["Rib Roast", "Rib Eye Steak", "Back Ribs"],
        shortloin: [],
        plate: [],
        skirt: [],
        tenderloin: ["T-Bone Steak", "Porterhouse Steak", "Tenderloin Roast/Steak"],
        flank: ["Flank Steak"],
        sirloin: ["Top Sirloin Steak", "Sirloin Steak", "Tenderloin Roast/Steak", "Beef Tri-Tip"],
        round: ["Round Steak", "Top Round Steak", "Bottom Round Steak", "Tip Steak", "Boneless Rump Roast", "Pikes Peak Roast"],
        shank: ["Soup Bones"]
      },
      porkSections: {
        shoulder: ["Shoulder Roast", "Pork Steaks"],
        loin: ["Spare Ribs", "Pork Chops"],
        belly: ["Bacon"],
        leg: ["Ham"],
        empty: []
      },
      selectedSectionBeef: null,
      selectedSectionPork: null
    }    
  }

  changeSectionBeef = (selectedSection) => {
    this.setState({selectedSectionBeef: selectedSection});
    console.log(selectedSection);
  }

  changeSectionPork = (selectedSection) => {
    this.setState({selectedSectionPork: selectedSection});
    console.log(selectedSection)
  }

  render() {
    return (
      <div id="div-svg-container">
        <BeefCutsSVG changeSelectedBeefCut={this.changeSectionBeef} />
        <div className="div-cut-list-container">
          <h4>Beef Cuts</h4>
          <hr style={{width: "288px"}}></hr>
          <ul className="ul-cut-list">
            { 
              this.state.selectedSectionBeef ? 
              this.state.beefSections[this.state.selectedSectionBeef].map((item, index) => <li key={index}>{item}</li> ) :
              <h5>Select a section on the chart</h5>
            }
          </ul>
        </div>
        <PorkCutsSVG changeSelectedPorkCut={this.changeSectionPork} />
        <div className="div-cut-list-container">
          <h4>Pork Cuts</h4>
          <hr style={{width: "288px"}}></hr>
          <ul className="ul-cut-list">
            { 
              this.state.selectedSectionPork ? 
              this.state.porkSections[this.state.selectedSectionPork].map((item, index) => <li key={index}>{item}</li> ) :
              <h5>Select a section on the chart</h5>
            }
          </ul>
        </div>
      </div>
    )
  }
}