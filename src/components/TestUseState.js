import { useState } from "react"

export default function TestUseState() {
  const [count, setCount] = useState(0)
  
  function incrementCount(){
    setCount(count+1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}
