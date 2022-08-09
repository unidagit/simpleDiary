import React from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList, onDelete, onEdit }) {
  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem onDelete={onDelete} onEdit={onEdit} key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
