import styles from './App.module.css';

function Card({ title, children }) {
  const cardStyle = {
    border: '1px solid gray',
    color: 'white',
    borderRadius: '8px',
    padding: '10px',
  };

  const cardTitleStyle = {
    color: 'tomato',
  };

  const cardBodyStyle = {
    borderRadius: '10px',
    border: '5px solid black',
    padding: '10px',
    backgroundColor: 'gray',
  };

  return (
    <div style={cardStyle}>
      <h2 style={cardTitleStyle}>{title}</h2>
      <div style={cardBodyStyle}>{children}</div>
    </div>
  );
}

function App() {
  const listStyle = {
    fontWeight: 'bold',
  };

  const listItemStyle = {
    color: 'white',
  };

  const listItemHighlightStyle = {
    color: 'aquamarine',
    fontSize: '1.2rem',
  };

  return (
    <>
      <Card title="서류 제출 마감 기한">
        <div id="date">2025-09-15</div>
      </Card>
      <Card title="오늘 공부 체크리스트">
        <ul style={listStyle}>
          <li style={listItemStyle}>스터디 준비</li>
          <li style={listItemHighlightStyle}>예제 코드 작성</li>
        </ul>
      </Card>
    </>
  );
}

export default App;
