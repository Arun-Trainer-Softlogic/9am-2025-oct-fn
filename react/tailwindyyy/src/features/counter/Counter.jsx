import { useDispatch , useSelector } from "react-redux"
import { increment,  decrement} from "./counterSlice"

function Counter(){
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div>
            <h2>Count : {count}</h2>

            <button onClick={()=> dispatch(increment())}>Add </button>
            <button onClick={()=> dispatch(decrement())}>Subtract</button>
        </div>
    )

}

export default Counter;


