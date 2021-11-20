// TODO: after taking result continue operating without need to erase it set firstValue to result

import { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState('')
    const [firstVal, setFirstVal] = useState(null)
    const [secondVal, setSecondVal] = useState(null)
    const [operator, setOperator] = useState(null)
    const [operatorExist, setOperatorExist] = useState(false)


    const isOperator = (value) => {
        if (value === '.') return false
        if (value === '=') return false
        if (value === 'CLEAR') return false
        return (isNaN(value))
    }

    const clear = () => {
        setDisplay('')
        setFirstVal(null)
        setSecondVal(null)
        setOperator(null)
        setOperatorExist(false)
    }
    
    const handleNumberClick = (event) => {
        let curr = event.target.innerText
        if (curr === '=') {
            setDisplay(eval(display))
            console.log(display)
            setFirstVal(display)
            setSecondVal(null)
            setOperator(null)
            setOperatorExist(false)
        } else if (curr === 'CLEAR') {
            clear()
        } else {
            let dis = document.getElementById('display-text').innerText
            dis = dis + event.target.innerText
            setDisplay(dis)
            console.log(dis)
        }
    }


    const handleOperatorClick = (event) => {
        let text = document.getElementById('display-text')
        let oper = event.target.innerText
        if (!operatorExist) {
            if (text && !firstVal) {
                setFirstVal(text)
                setOperator(`${oper}`)
                setDisplay(display + oper)
            }
        }
        if (!firstVal && !secondVal) {
            setSecondVal(text)
        }
    }
    
    
    const Button = (props) => {
        return (
            <button onClick={isOperator(props.children) ? handleOperatorClick : handleNumberClick} className={isOperator(props.children) ? 'btn operator' : 'btn number'}>{props.children}</button>
        )
    }

    return (
        <div>
            <h1>Calculator</h1>
            <div className='calculator'>
                <div className='display'>
                    <p id='display-text' className='display-text'>
                        {display}
                    </p>
                </div>

                <div className='buttons'>
                    <Button id='7'>7</Button>
                    <Button id='8'>8</Button>
                    <Button id='9'>9</Button>
                    <Button id='/'>/</Button>
                    <Button id='4'>4</Button>
                    <Button id='5'>5</Button>
                    <Button id='6'>6</Button>
                    <Button id='*'>*</Button>
                    <Button id='1'>1</Button>
                    <Button id='2'>2</Button>
                    <Button id='3'>3</Button>
                    <Button id='+'>+</Button>
                    <Button id='.'>.</Button>
                    <Button>0</Button>
                    <Button>=</Button>
                    <Button>-</Button>


                </div>

                <div className='clear'>
                    <Button>CLEAR</Button>
                </div>
            </div>
        </div>
    )
}

export default Calculator