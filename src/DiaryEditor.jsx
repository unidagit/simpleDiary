import React from "react";
import { useState, useRef } from "react";

export default function DiaryEditor({ onCreate }) {
  const [state, setState] = useState({
    author: "",
    content: "",
  });
  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      alert("5글자 이상 입력해주세요");
      return;
    }
    console.log(state);
    onCreate(state.author, state.content, state.emotion);
    alert("저장성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
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
          ref={authorInput}
          name="author"
          type="text"
          value={state.author}
          onChange={handleChangeState}
        />
        <div>
          <textarea
            ref={contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <span>오늘의 감정점수 </span>
          <select
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}
