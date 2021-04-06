import React  from 'react';

function Select(props){

 
const handleChange=(event)=> {

props.setval2(event.target.value)

let  var2Index = props.myAryy.findIndex((coin2) => {
  return coin2 === event.target.value
})
props.setvar2Index(var2Index)
  }


    return (
      <div>
      <form >
        <label>
          
          <select    onChange={(e)=>handleChange(e)} value = {props.myAryy[props.var2Index]}>
             {props.myAryy.map((item,i )=> {
                return  <option  key={i} value={item}>{item}</option>
              })}
              
          </select>
        </label>
        
      </form>
</div>
    );



}
  
    export default Select