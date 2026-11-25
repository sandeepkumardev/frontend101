import { useEffect, useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount1(count1 + 1);
  };

  useEffect(() => {
    console.log("only one time");
  }, []);

  useEffect(() => {
    console.log("on count1");
  }, [count1]);

  useEffect(() => {
    console.log("always");
  });

  useEffect(() => {
    return () => {
      console.log("on unmount");
    };
  }, []);

  return (
    <div className="home">
      <button onClick={handleClick}>+</button>
      {count1}
      <br />
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      {count2}
    </div>
  );
};

export default Home;

// component life-cycle methods
// class- based components - componentDidMount, componentWillMount,
