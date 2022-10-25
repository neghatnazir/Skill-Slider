import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import './SkillChips.css'


// const StyledTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))`
//   & .MuiTooltip-tooltip {
//     background: navy;
//   }
// `;


const ToolTipComp = ({showToolTip,  ele, EleId, percentageFilled, Rating}) => {
  const [percentage , setPercentage] = useState(0);
var val = 0;
  const progressBarVal = (event, newValue) => {
      // const filled = (1.0/100)*val;
      val = newValue;
      setPercentage(newValue)
      console.log('filled',event, newValue,EleId );
     return percentageFilled(val, EleId)
  }

// const tooltipStyle = {
//     display: showToolTip ? 'block' : 'none'
//  }
  return (
       <div>
        <div className="insideTooltip">
         <h3> {ele} ({Rating}%) </h3>
          <span className="tooltip">slide to select your confidance in the skill!!
          <Slider
             size="medium"
             aria-label="Small"
            defaultValue={Rating}
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            onChange={progressBarVal}
          
            // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        /> 
          </span>
          </div>

        </div>
         
  )
}

export default ToolTipComp
