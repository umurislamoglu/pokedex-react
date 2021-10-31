import React from "react";

const Stat = ({ statName, statValue , no }) => {

    const colorArr= ["success","danger","warning","info","primary" ,"secondary" ]

    let statPercent = (statCurrent,statMax) => {

        let num = statCurrent*100/statMax 
        
      return Math.ceil(num)

    } 


  return (
    <div className="d-flex flex-row align-items-center w-100" style={{height:"40px"}}>
      <div className="text-capitalize w-25 lh-1">{statName}: </div>
      <div className="progress w-75">
        <div
          className={`progress-bar bg-${colorArr[no]}`}
          role="progressbar"
          style={{"width":`${statPercent(statValue,300)}%`}}
          aria-valuenow={statPercent(statValue,300)}
          aria-valuemin="0"
          aria-valuemax="100"
        >{statPercent(statValue,300)}</div>
      </div>
    </div>
  );
};

export default Stat;
