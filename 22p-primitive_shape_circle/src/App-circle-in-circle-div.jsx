import styles from './App.module.css';

function Circle({ color, size, thickness }) {
  const circleStyle = {
    backgroundColor: 'black',
    width: size + thickness * 2,
    height: size + thickness * 2,
    borderRadius: (size + thickness * 2) / 2,
    display: 'inline-block',
  };

  const innerCircleStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
    margin: thickness,
  };

  return (
    <div style={circleStyle}>
      <div style={innerCircleStyle}></div>
    </div>
  );
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
