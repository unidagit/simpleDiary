import React from "react";
import { useState } from "react";

export default function DiaryEditor() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const onChangeInput = (e) => {
    setAuthor(e.target.value);
    console.log(e);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    console.log(e);
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <form>
        <input type="text" value={author} onChange={onChangeInput} />
        <div>
          <textarea value={content} onChange={onChangeContent} />
        </div>
      </form>
    </div>
  );
}
