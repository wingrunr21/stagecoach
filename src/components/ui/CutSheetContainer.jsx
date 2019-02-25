/* React */
import React from "react";

/* Stylesheets */
import "./CutSheetContainer.css";

/* Components */
// import { BeefCutsSVG } from "./BeefCutsSVG.jsx";
// import { PorkCutsSVG } from "./PorkCutsSVG.jsx";


export class CutSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cuts: props.data,
      selectedSection: null
    }
  }

  changeSection = (selectedSection) => {
    this.setState({selectedSection: selectedSection});
    console.log(selectedSection);
  }

  render() {

    return (
      <div id="div-svg-container">
        { this.props.children }
        <div className="div-cut-list-container">
          <h4>{this.props.title} Cuts</h4>
          <hr style={{width: "288px"}}></hr>
          <ul className="ul-cut-list">
            { 
            this.state.selectedSection ? 
            this.props.data[this.state.selectedSection].map((item, index) => <li key={index}>{item}</li> ) :
            <h5>Select a section on the chart</h5>
            }
          </ul>
        </div>
      </div>
    )
  }
}