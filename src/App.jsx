import { useState, useEffect } from "react"

function App() {
  const [input, setInput] = useState("")
  const [math, setMath] = useState({ n1: 0, n2: 0 })
  const [change, setChange] = useState(true)
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
      setErros(erros + 1)
    } else if (input == math.n1 + math.n2) { // certo
      valueChange()
      setAcertos(acertos + 1)
    }
  }

  function valueChange() {
    setChange(!change)
    setInput("")
  }

  function ButtonCalc({ text }) {
    return (
      <button
        className="w-full h-14 text-white rounded-lg bg-blue-500 hover:bg-blue-800 active:bg-blue-700"
      >
        {text}
      </button>
    )
  }

  function Tag({ texto, tipo }) {
    if (tipo == "acertos") {
      return (
        <span className="p-1 bg-green-500 font-bold text-white rounded">{texto}</span>
      )
    } else if (tipo == "erros") {
      return (
        <span className="p-1 bg-red-500 font-bold text-white rounded">{texto}</span>
      )
    }
  }

  return (
    <>
      <div className="flex flex-col space-y-3 md:min-h-screen items-center justify-center p-5 w-screen">
        <h1 className="text-4xl font-bold">{math.n1} + {math.n2} = {math.n1 + math.n2}</h1>
        <div className="flex-row space-x-3">
          <Tag texto={acertos} tipo="acertos" />
          <Tag texto={erros} tipo="erros" />
        </div>
        <form className="w-full sm:w-[460px] flex-col space-y-3 items-center" onSubmit={valueCheck}>
          <input
            className="w-full h-20 rounded-lg border-4 text-center text-xl"
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            inputMode="numeric"
            autoFocus={true}
          />
          <ButtonCalc text="Calcular" />
        </form>
      </div>
    </>
  )
}

export default App
