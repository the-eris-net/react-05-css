import styles from './App.module.css';

function Ellipse({ color, width, height }) {
  const ellipseStyle = {
    backgroundColor: color,
    width: width,
    height: height,
    borderRadius: width/2,
    // borderRadius: '50%',
    display: 'inline-block',
  };
  return <div style={ellipseStyle}></div>;
}


function Circle({ color, size }) {
  const circleStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
    // borderRadius: '50%',
    display: 'inline-block',
  };
  return <div style={circleStyle}></div>;
}

function App() {
  return (
    <>
      <Circle color="red" size={200} />
      <Circle color="blue" size={100} />
      <Circle color="green" size={150} />
    </>
  );
}

export default App;
