import React, { useState } from 'react'
import './SkillChips.css';
import { Tooltip } from '@mui/material';
import ToolTipComp from './ToolltipComp';
import Grow from '@mui/material/Grow';

const imgPath = './image/background.jpeg';

const SelectedChips = ({state, setSkillRating}) => {

    const percentageFilled = (val, EleId) => {
        const ele = document.getElementById(EleId.toString());
        ele.style.background="url('https://st4.depositphotos.com/13324256/20097/i/600/depositphotos_200978284-stock-photo-blank-bright-blue-abstract-background.jpg') no-repeat left";
        ele.style.backgroundSize = `${val}% 100%`
         console.log('afridi',val, EleId)
        return setSkillRating(val, EleId)
    }
    return (
        <div>
           <div className='ChipsList'>
            {state.list.map((item, index) =>{
              if(item.flag)  {
                return(
                    <Tooltip  TransitionComponent={Grow}  placement="top" title={<ToolTipComp ele={item.title} EleId={item.id} percentageFilled={percentageFilled} Rating={item.Rating} />} >
                        <div  id={item.id} className='ChipContainer' key={index} >
                            <p className='Chip'>{item.title}</p>
                        </div>
                    </Tooltip>
                   ) 
               }       
            })}
        
           </div>
        </div>
      )
}

export default SelectedChips
