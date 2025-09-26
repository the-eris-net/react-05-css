import styles from './App.module.css';

function Card({ title, children }) {
  return (
    <div className={styles.card} >
      <h2 className={styles['card-title']}>{title}</h2>
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <Card title="서류 제출 마감 기한">
        <div>2025-09-15</div>
      </Card>
      <Card title="오늘 공부 체크리스트">
        <ul className={styles.list}>
          <li className={styles['list-item']}>스터디 준비</li>
          <li className={styles['list-item-highlight']}>예제 코드 작성</li>
        </ul>
      </Card>
    </>
  );
}

export default App;
