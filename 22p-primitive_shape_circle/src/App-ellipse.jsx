import styles from './App.module.css';

function Ellipse({ color, width, height }) {
  const ellipseStyle = {
    backgroundColor: color,
    width: width,
    height: height,
    borderRadius: '50%',
    // borderRadius: `${width/2}px / ${height/2}px`,
    display: 'inline-block',
  };
  return <div style={ellipseStyle}></div>;
}

function App() {
  return (
    <>
      <Ellipse color="red" width={200} height={100} />
      <Ellipse color="blue" width={100} height={200} />
      <Ellipse color="green" width={150} height={150} />
    </>
  );
}

export default App;
