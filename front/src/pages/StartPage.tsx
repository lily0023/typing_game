import React, { FC, useState, useEffect } from "react";  // useEffectを追加
import baseBackground from "../img/pop.png";
import background from "../img/window.png";
import { Link } from "react-router-dom";


export const StartPage: FC = () => {
  const title = "START!!"

  const [count, setCount] = React.useState(5);
  const [isCounting, setIsCounting] = React.useState(false);

  useEffect(() => {
    const handleSpacePress = (e: KeyboardEvent) => {
      if (e.keyCode === 32 && count > 0 && !isCounting) {  // !isCountingを追加して、カウント中に再度スタートしないようにします
        setIsCounting(true);
      }
    };
    //スペースキーのキーコードは32

    window.addEventListener('keydown', handleSpacePress);

    return () => {
      window.removeEventListener('keydown', handleSpacePress);
    };
  }, [count, isCounting]);  
  

  useEffect(() => {
  let timer: NodeJS.Timeout | number; // timerに型を追加

  if (isCounting && count > 0) {
    timer = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  } else if (count === 0) {
    setIsCounting(false);
  }

  return () => {
    clearTimeout(timer as NodeJS.Timeout); // timerをNodeJS.Timeoutとして型アサーション
  };
}, [isCounting, count]);

  

  return (
    <>
      <div className="h-full" style={{backgroundImage:`url(${baseBackground})`, height:"1080px"}}>
        <div className="flex p-16 ml-32 mt-54">
          <div className="h-full" style={{backgroundImage: `url(${background})`, width: "1187px", height:"788px"}}>
            <div className="py-24 px-16">
              <p className="text text-sky-400 text-9xl fond-bold text-center mb-8">
              {isCounting ? count : title}
              </p>
              <div className="text-center">
                <Link to='/finish'>フィニッシュページへ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
