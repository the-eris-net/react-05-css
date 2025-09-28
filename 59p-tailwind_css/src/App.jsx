function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>
        <input
          type="text"
          placeholder="아이디"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full mb-3 p-2 border border-gray-300 rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          로그인
        </button>
      </div>
    </div>
  );
}
export default App;
