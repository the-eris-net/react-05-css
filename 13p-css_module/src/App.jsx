import styles from './App.module.css';

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <Card title="서류 제출 마감 기한">
        <div id="date">2025-09-15</div>
      </Card>
      <Card title="오늘 공부 체크리스트">
        <ul className={styles.list}>
          <li className={styles.listItem}>스터디 준비</li>
          <li className={styles.listItemHighlight}>예제 코드 작성</li>
        </ul>
      </Card>
    </>
  );
}

export default App;
