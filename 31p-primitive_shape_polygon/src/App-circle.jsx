

function Circle({ color, size }) {
  const circleStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    clipPath: 'circle(50% at 50% 50%)',
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
