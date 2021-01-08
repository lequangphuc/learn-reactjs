import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    const action = increase(); // action creator
    console.log(action);
    dispatch(action);
  };

  const handleDecrease = () => {
    // const action = decrease();
    // dispatch(action);

    dispatch(decrease());
  };

  return (
    <div>
      Counter {counter}
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
