import styles from './App.module.css';


function Circle({ color, size, thickness }) {
  const circleStyle = {
    boxSizing: 'border-box',
    backgroundColor: color,
    width: size,
    height: size,
    border: `${thickness}px solid black`,
    borderRadius: size/2,
    display: 'inline-block',
  };
  return <div style={circleStyle}></div>;
}

function App() {
  return (
    <>
      <Circle color="red" size={200} thickness={50} />
      <Circle color="blue" size={100} thickness={25} />
      <Circle color="green" size={150} thickness={30} />
    </>
  );
}

export default App;
