import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//import{inscrease, descrease, changeByValue} from '../redux/actionCreater'
import { increment, decrement, icrimentByAmount} from '../redux/counterSlice'
export const Counter = () => {
    const [value, setValue]=useState('')

    const counter = useSelector((store) => store.counter.count)

    
    console.log(counter)

    const dispatch = useDispatch()
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment())}>increase</button>
            <button onClick={()=>dispatch(decrement())}>decrease</button>
                <input type="number" onChange={(ev) => setValue(ev.target.value)} />
                <button onClick={()=>dispatch(icrimentByAmount(parseInt(value)))}>ChangeByValue</button>
        </div>
    )
    }