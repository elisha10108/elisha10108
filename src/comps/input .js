import React  from 'react';

function Input(props){

 
const handleChange=(event)=> {

props.setValForm(event.target.value)

let  var1Index = props.myAryy.findIndex((coin1) => {
  return coin1 === event.target.value
})
props.setvar1Index(var1Index)
  }
const valuChange=(e)=>{
    props.setvalue(e.target.value)
}


    return (
      <div>
      <form >
        <label>
          <select onChange={(e)=>handleChange(e)} value = {props.myAryy[props.var1Index]}>
             {props.myAryy.map((item,i )=> {
                return  <option  key={i} value={item}>{item}</option>
            })}
          </select>
        </label>
        <input className=" inputVal" defaultValue={props.myValue} type="number" onInput={valuChange} />
      </form>
</div>
    );



}
    export default Input