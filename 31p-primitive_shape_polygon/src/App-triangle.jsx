function getDirection(direction) {
  switch (direction) {
    case 'top':
      return 'polygon(0% 0%, 100% 0%, 50% 100%)';
    case 'left':
      return 'polygon(0% 50%, 100% 0%, 100% 100%)';
    case 'right':
      return 'polygon(0% 0%, 100% 50%, 0% 100%)';
    case 'bottom':
      return 'polygon(0% 100%, 100% 100%, 50% 0%)';
    default:
      return 'polygon(0% 100%, 100% 100%, 50% 0%)';
  }
}

function getWithHeight(direction, size) {
  switch (direction) {
    case 'top':
    case 'bottom':
      return { width: size, height: size / 2 };
    case 'left':
    case 'right':
      return { width: size / 2, height: size };
  }
}

function Triangle({ size, color, direction = 'bottom' }) {
  const { width, height } = getWithHeight(direction, size);
  const triangleClip = {
    width, 
    height,
    background: color,
    clipPath: getDirection(direction),
    display: 'inline-block',
  };

  return <div style={triangleClip} />;
}

function App() {
  return (
    <>
      <Triangle size={100} color={'red'} />
      <Triangle size={100} color={'blue'} direction={'top'} />
      <Triangle size={100} color={'green'} direction={'left'} />
      <Triangle size={100} color={'orange'} direction={'right'} />
    </>
  );
}

export default App;
