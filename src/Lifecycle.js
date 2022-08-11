import React, { useEffect, useState } from "react";

function UnmoustTest() {
  useEffect(() => {
    console.log("마운트");
    return () => {
      // 언마운트 시점에 실행되게 됨
      console.log("언마운트");
    };
  });

  return <div>언마운트 테스트!</div>;
}

function Lifecycle() {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/*단락회로 평가 사용 
      isVisible이 false이면 뒤를 보지 않음 
      isVisible이 true이면 뒤에도 true인지 확인함으로 UnmoustTest가 true이면 화면에 렌더링  */}
      {isVisible && <UnmoustTest />}
    </div>
  );
}

export default Lifecycle;
