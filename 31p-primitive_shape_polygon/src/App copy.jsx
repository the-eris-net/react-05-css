
function Triangle({ thickness, color, direction='bottom' }) {
  const triangleStyle = {
    width: 0,
    height: 0,
    display: 'inline-block',
  };

  let directionStyle = {
    borderLeft: `${thickness}px solid transparent`,
    borderRight: `${thickness}px solid transparent`,
    borderBottom: direction === 'bottom' 
      ? `${thickness}px solid ${color}` 
      : 'none',
    borderTop: direction === 'top' 
      ? `${thickness}px solid ${color}` 
      : 'none',
  }

  if(direction === 'left' || direction === 'right') {
    directionStyle = {
      borderTop: `${thickness}px solid transparent`,
      borderBottom: `${thickness}px solid transparent`,
      borderLeft: direction === 'left' 
        ? `${thickness}px solid ${color}` 
        : 'none',
        borderRight: direction === 'right' 
        ? `${thickness}px solid ${color}` 
        : 'none',
    };
  }

  return <div style={{...triangleStyle, ...directionStyle}} />
}

function App() {
  return (<>
      <Triangle thickness={50} color={'red'}/>
      <Triangle thickness={50} color={'blue'} direction={'top'}/>
      <Triangle thickness={50} color={'green'} direction={'left'}/>
      <Triangle thickness={50} color={'orange'} direction={'right'}/>
    </>);
}

export default App;
