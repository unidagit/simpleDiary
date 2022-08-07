import React from "react";
import { useState } from "react";

export default function DiaryEditor() {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const onChangeInput = (e) => {
    setState({
      ...state,
      author: e.target.value,
    });
    console.log(e);
  };

  const onChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
    console.log(e);
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <form>
        <input type="text" value={state.author} onChange={onChangeInput} />
        <div>
          <textarea value={state.content} onChange={onChangeContent} />
        </div>
      </form>
    </div>
  );
}
