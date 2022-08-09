import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <h2>일기장</h2>
      {/* 일기를 받아와 */}
      <DiaryEditor onCreate={onCreate} />

      {/* 일기 리스트를 만들어  */}
      <DiaryList diaryList={[]} />
    </div>
  );
}

export default App;
