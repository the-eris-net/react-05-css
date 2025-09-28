import { useState, useEffect } from 'react';

function ChartBar({
  item: { id, name, score },
  maxScore,
  color,
  setData,
  animationDelayMs = 500,
}) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid gray',
    backgroundColor: color,
    height: init ? `${(score / maxScore) * 100}%` : 0,
    width: init ? 50 : 0,
    marginRight: 10,
    marginTop: 'auto',
    // 밑바닥에 붙는다
    justifyContent: 'flex-end',
    alignItems: 'center',
    transition: `height ${animationDelayMs}ms, width ${animationDelayMs}ms`,
  };

  const charBarStyle = {
    color: 'black',
    fontWeight: 'bold',
  };

  const handleClick = () => {
    setInit(false);
    setTimeout(() => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    }, animationDelayMs);
  };

  return (
    <div style={style} onClick={handleClick}>
      <span style={charBarStyle}>{name}</span>
      <span style={charBarStyle}>{score}</span>
    </div>
  );
}

function ChartForm({ setData }) {
  const [inputSubject, setInputSubject] = useState('');
  const [inputScore, setInputScore] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [
      ...prevData,
      { id: prevData.length, name: inputSubject, score: Number(inputScore) },
    ]);
    setInputSubject('');
    setInputScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="subject">
        과목 명 :{' '}
        <input
          type="text"
          id="subject"
          value={inputSubject}
          onChange={(e) => setInputSubject(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="score">
        점수 :{' '}
        <input
          type="text"
          id="score"
          value={inputScore}
          onChange={(e) => setInputScore(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">추가</button>
    </form>
  );
}

function Chart({ data, colorRainbow, setData }) {
  const chartStyle = {
    boxSizing: 'border-box',
    height: 300,
    width: '100%',
    border: '1px solid black',
    padding: 10,
    marginTop: 10,
    display: 'flex',
    /* 이거 추가하면 가운데 적용 */
    justifyContent: 'center',
  };

  return (
    <div style={chartStyle}>
      {data.map((item) => (
        <ChartBar
          key={item.id}
          item={item}
          setData={setData}
          color={colorRainbow[item.id % colorRainbow.length]}
          maxScore={Math.max(...data.map((item) => item.score))}
        />
      ))}
    </div>
  );
}

function App() {
  const [data, setData] = useState([
    { id: 0, name: '국어', score: 90 },
    { id: 1, name: '수학', score: 85 },
    { id: 2, name: '영어', score: 88 },
  ]);

  const colorRainbow = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  return (
    <div>
      <h1>중간고사 점수</h1>
      <ChartForm setData={setData} />
      <Chart data={data} setData={setData} colorRainbow={colorRainbow} />
    </div>
  );
}

export default App;
