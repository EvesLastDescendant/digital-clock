import {useState, useEffect} from "react"

function App() {
    const [newTime, setNewTime] = useState(new Date())
    const displayTime = newTime.toLocaleTimeString()

  useEffect (() => {
    const timeInterval = setInterval(() => {
      setNewTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [])
  
  return (
    <>
      <div className="container-fluid text-center">
        <main className="mx-auto">
          <div className="container p-5">
            <div className='container p-5'>
              <div className='container p-5'>
                <h1>Digital Clock</h1>
                <p className="w-50 text-bg-dark mx-auto">
                  <span>{displayTime}</span> 
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App