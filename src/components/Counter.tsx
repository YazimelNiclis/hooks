import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";
import { decrement2, increment2 } from "../redux/slices/discounterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const discount = useSelector((state: RootState) => state.discounter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <span>{discount}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
