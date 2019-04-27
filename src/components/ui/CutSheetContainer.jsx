import React from "react";
import "./CutSheetContainer.scss";
// import { BeefCutsSVG } from "./BeefCutsSVG.jsx";
// import { PorkCutsSVG } from "./PorkCutsSVG.jsx";

export const CutSheetContainer = props => {
  const { data } = props;

  const [cutsheetData, setCutsheetData] = React.useState(props.data);
  const [selectedCut, setSelectedCut] = React.useState(null);

  React.useEffect(() => { setCutsheetData(data); }, []);

  const changeSection = nextCut => setSelectedCut(nextCut);
  
  return (
    <div id="div-svg-container">
      { props.children }
      <div className="div-cut-list-container">
        <h4>{props.title} Cuts</h4>
        <hr style={{width: '18rem'}}></hr>
        <ul className="ul-cut-list">
          { 
          selectedCut ? 
          props.data[selectedCut].map((item, index) => <li key={index}>{item}</li> ) :
          <h5>Select a section on the chart</h5>
          }
        </ul>
      </div>
    </div>
  );
}