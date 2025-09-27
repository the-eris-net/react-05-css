import styles from './App.module.css';

function Circle({ color, thickness }) {
  const circleStyle = {
    borderRadius: '50%',
    display: 'inline-block',
    padding: thickness,
  };

  return (
    <>
      {color.reduce(
        (acc, col) => (
          <div style={{ ...circleStyle, backgroundColor: col }}>
            {acc}
          </div>
        ),
        <></>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Circle thickness={50} color={['red', 'blue', 'green']} />
    </>
  );
}

export default App;
