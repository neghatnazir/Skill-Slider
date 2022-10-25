import React, { useReducer } from 'react'
import './SkillChips.css';
import SelectedChips from './SelectedChips';


const initialState = {
    list : [
        {id: 'HTML', title: 'HTML', flag: false, Rating: 0},
        {id: 'Javascript', title: 'Javascript', flag: false, Rating: 0},
        {id: 'CSS', title: 'CSS', flag: false, Rating: 0},
        {id: 'newSkill', title: 'newSkill', flag: false, Rating: 0},
    ]
}

function reducer(state,action) {
   switch(action.type){
    case 'ON_SELECT':
        return {...state, ...action.payload};
    case 'SET_RATING':
        return {...state, ...action.payload}
        default:
            return state;
        
   } 
}
const SkilllChips = () => {
    const [ state, dispatch] = useReducer(reducer, initialState);
    const selectItem = (item, index) => {

        state.list[index].flag = !state.list[index].flag;
       dispatch({
        type: 'ON_SELECT',
        payload: state.list
        
       })
    }

    const setSkillRating = (val, id) => {
        state.list.forEach((item,index) => {
            if(item.id == id){
               state.list[index].Rating = val;
            }
        })

        dispatch({
            type: 'SET_RATING',
            payload: state.list
            
           })   
    }
  return (
    <div className='AllComponents'>
      <SelectedChips state={state} setSkillRating={setSkillRating}/>
       <h3 className='heading'>Select Skills</h3>
       <div className='ChipsList'>
        {state.list.map((item, index) =>{
           return(
            <div className='ChipContainer' style={{ background: `${item.flag? '#B9BFFF': 'black'}`}} key={index} onClick={() => selectItem(item,index)}>
                <p className='Chip' style={{color: `${item.flag? 'black': 'white'}`}}>{item.title}</p>
            </div>
           ) 
        })}
       </div>
    </div>
  )
}

export default SkilllChips
