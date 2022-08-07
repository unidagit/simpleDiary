import React from "react";
import { useState } from "react";

export default function DiaryEditor() {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // const onChangeInput = (e) => {
  //   setState({
  //     ...state,
  //     author: e.target.value,
  //   });
  //   console.log(e);
  // };

  // const onChangeContent = (e) => {
  //   setState({
  //     ...state,
  //     content: e.target.value,
  //   });
  //   console.log(e);
  // };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <form>
        <input
          name="author"
          type="text"
          value={state.author}
          onChange={handleChangeState}
        />
        <div>
          <textarea
            name="content"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
      </form>
    </div>
  );
}
