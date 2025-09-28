
function Triangle({ thickness, color, direction='bottom' }) {
const triangleClip = {
  width: thickness*2,
  height: thickness,
  background: 'skyblue',
  clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)'
}

  return <div style={triangleClip} />
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
