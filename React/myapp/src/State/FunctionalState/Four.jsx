import React from "react"
import { useState } from "react"

let Four = () => {

  let [msg, setMsg] = useState("Hello")

  let aHandler = (event) => {
    setMsg("GM Ronaldo")
  }

  let bHandler = (event) => {
    setMsg("GM Messi")
  }

  return (
    <>
      <div className="navbar navbar-dark navbar-expand-lg bg-dark text-white ">
        <h1>Message : {msg}</h1></div>

      <span className="ml-auto">
        <button onClick={aHandler}>A </button>
      </span>
      <span>
        <button onClick={bHandler}>B</button>
      </span>

    </>
  )
}
export default Four