
function Rectangle({ thickness,color }) {
  const rectangleStyle = {
    width: 100,
    height: 100,
    backgroundColor: color,
    borderLeft: `${thickness}px solid red`,
    borderRight: `${thickness}px solid blue`,
    borderTop: `${thickness}px solid green`,
    borderBottom: `${thickness}px solid yellow`,
  };

  return (
    <div style={rectangleStyle} />
  );
}

function App() {
  return (
    <>
      <Rectangle thickness={50} color={'black'}/>
    </>
  );
}

export default App;
