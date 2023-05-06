import React, {useState} from "react"

let Calculator=()=>{
 
  let [solve,setSolve]=useState("")

  let clickHandler=(event)=>{
setSolve(solve.concat([event.target.name]))
  }

  let clear=()=>{
    setSolve("")
  }

  let answer=()=>{
    setSolve(eval(solve).toString())
  }

  let backspace=()=>{
    setSolve(solve.slice(0,-1))
  }

return (
<div class="container calculator card my-3">

<input type="text" class="calculator-screen z-depth-1" value={solve} />


<div class="calculator-keys">

<tr>
  <button name="+" onClick={clickHandler} type="button" class="operator btn btn-info" value="+">+</button>
  <button name="-" onClick={clickHandler} type="button" class="operator btn btn-info" value="-">-</button>
  <button name="*" onClick={clickHandler} type="button" class="operator btn btn-info" value="*">&times;</button>
  <button name="/" onClick={clickHandler} type="button" class="operator btn btn-info" value="/">&divide;</button>
  </tr>
  
  <tr>
  <button name="7" onClick={clickHandler} type="button" value="7" class="btn btn-light waves-effect">7</button>
  <button name="8" onClick={clickHandler} type="button" value="8" class="btn btn-light waves-effect">8</button>
  <button name="9" onClick={clickHandler} type="button" value="9" class="btn btn-light waves-effect">9</button>
  </tr>
  
  <tr>
  <button name="4" onClick={clickHandler} type="button" value="4" class="btn btn-light waves-effect">4</button>
  <button name="5" onClick={clickHandler} type="button" value="5" class="btn btn-light waves-effect">5</button>
  <button name="6" onClick={clickHandler} type="button" value="6" class="btn btn-light waves-effect">6</button>
  </tr>
  
  <tr>
  <button name="1" onClick={clickHandler} type="button" value="1" class="btn btn-light waves-effect">1</button>
  <button name="2" onClick={clickHandler} type="button" value="2" class="btn btn-light waves-effect">2</button>
  <button name="3" onClick={clickHandler} type="button" value="3" class="btn btn-light waves-effect">3</button>
  </tr>
  
  <tr>
  <button name="0" onClick={clickHandler} type="button" value="0" class="btn btn-light waves-effect">0</button>
  <button name="." onClick={clickHandler} type="button" class="decimal function btn btn-secondary" value=".">.</button>
  <button onClick={answer} type="button" class="equal-sign operator btn btn-default" value="=">=</button>
  </tr>
  <tr>
      <button onClick={clear} type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>
      <button onClick={backspace} type="button" class="clear function btn btn-danger btn-sm" value="backspace">C</button>

  </tr>

</div>
</div>
)
}
export default Calculator