import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>increament</button> <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>
        increamentByAmount
      </button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
}

export default App;
