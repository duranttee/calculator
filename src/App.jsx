import { useState } from 'react'
import './App.css'
const numericButtonsClasses = 'btn btn-outline-dark w-100'
const OperadoresButtonsClasses = 'btn btn-outline-secondary w-100'
function App() {

  const [display, setDisplay] = useState ({
    value: '0',
    hasPoint: false,
  })
  const updateDisplay = (value) => { 
    if (value === '.'){
      if (display.hasPoint){
        return
      }
      
    setDisplay({
      ...display,
      value: display.value + value,
      hasPoint: true, 
    })
    return
  }
      if (display.value === '0') {
      setDisplay ({
        ...display,
        value: value, 
      })
      return
    }
    setDisplay ({
      ...display, 
      value: display.value + value,
  })

}
  const clearDisplay = () => {
    setDisplay ({
      ...display,
      value: '0',
      hasPoint: false,
    })
  }
  


  return(
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className='center'>
        <tbody>
          <tr>
            <td className='text-end' colSpan={4}>
              <h2>{display.value}</h2>
            </td>
          </tr>
          <tr>
          <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            onClick={() => clearDisplay ('0')}
            >
              C
            </button>
          </td>
          <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            >
              {'<'}
            </button>
          </td>
            <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              %
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              /
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('7')}
            >
              7
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('8')}
            >
              8
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('9')}
            >
              9
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            
            >
              X
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('4')}
            >
              4
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('5')}
            >
              5
            </button>
          </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('6')}
            >
              6
            </button>
          </td>
          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              -
            </button>
          </td>
          </tr>
          <tr>
          <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('1')}
            >
              1
            </button>
          </td>
            <td
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('2')}
            >
              2
            </td>
            <td >
            <button
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('3')}
            >
              3
            </button>
          </td>
              
            

          <td >
            <button
            className={OperadoresButtonsClasses}
            type='button'
            >
              +
            </button>
          </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
              className={numericButtonsClasses}
              type='button'
              onClick={() => updateDisplay('0')}
              >
                0
              </button>
            </td>
            <td
            className={numericButtonsClasses}
            type='button'
            onClick={() => updateDisplay('.')}
            >
              .
            </td>
            <td >
            <button
            className='btn btn-outline-danger'
            type='button'
            >
              =
            </button>
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}

export default App

