import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import{inscrease, descrease, changeByValue} from '../redux/actionCreater'

export const Counter = () => {
        const [value, setValue]=useState('')
    const counter = useSelector((state) => state.counter.count) 

    console.log(counter)

    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(inscrease())}>increase</button>
            <button onClick={()=>dispatch(descrease())}>decrease</button>
                <input type="number" onChange={(ev) => setValue(ev.target.value)} />
                <button onClick={()=>dispatch(changeByValue(parseInt(value)))}>ChangeByValue</button>
        </div>
    )
    }