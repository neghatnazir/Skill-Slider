import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import './SkillChips.css'


const ToolTipComp = ({ele, EleId, percentageFilled, Rating}) => {

  const changeSkillRating = (event, newValue) => {
     return percentageFilled(newValue, EleId)
  }

  return (
       <div>
        <div className="TooltipContent">
         <h3> {ele} ({Rating}%) </h3>
          <span className="tooltip">slide to select your confidance in the skill!!
          <Slider
              size="medium"
              aria-label="Small"
              defaultValue={Rating}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              onChange={changeSkillRating}
        /> 
          </span>
          </div>

        </div>
         
  )
}

export default ToolTipComp
