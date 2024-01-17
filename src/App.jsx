import { useState, useEffect } from "react"

function App() {
  const [input, setInput] = useState("")
  const [math, setMath] = useState({ n1: 0, n2: 0 })
  const [change, setChange] = useState(0)
  const [status, setStatus] = useState("NaN")
  const [acertos, setAcertos] = useState(0)
  const [erros, setErros] = useState(0)

  useEffect(() => {
    setMath({
      n1: handleRandomNumber(),
      n2: handleRandomNumber(),
    })
  }, [change])

  function handleRandomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  }

  function valueCheck(event) {
    event.preventDefault()
    if (input != math.n1 + math.n2) { // errado
      valueChange()
      setStatus("false")
      setErros(erros + 1)
    } else if (input == math.n1 + math.n2) { // certo
      valueChange()
      setStatus("true")
      setAcertos(acertos + 1)
    }
  }

  function valueChange() {
    setChange(change + 0.1)
    setInput("")
  }

  return (
    <>
      <div className="flex flex-col items-center p-5 w-screen">
        <h1 className="m-1 text-xl">{math.n1} + {math.n2} = {math.n1 + math.n2}</h1>
        <div className="flex-row">
          {status} ~ acertos: {acertos} ~ erros: {erros}
        </div>
        <form className="w-full md:w-[720px] flex-col items-center" onSubmit={valueCheck}>
          <input
            className="w-full h-24 p-1 m-1 rounded border text-center text-xl"
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            inputMode="numeric"
            autoFocus={true}
          />
          <button className="w-full h-24 p-1 m-1 rounded border hover:bg-gray-200 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">Calcular</button>
        </form>
      </div>
    </>
  )
}

export default App
