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
      beefCuts: [],
      porkCuts: [],
      selectedBeefCut: null,
      selectedPorkCut: null
    }
  }

  changeSelectedCut(e, value ) {
    console.log(e, value)
  }

  render() {
    return (
      <div id="div-svg-container">
        <BeefCutsSVG changeSelectedCut={this.changeSelectedCut} />
        <PorkCutsSVG />
      </div>
    )
  }
}