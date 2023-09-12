import React, { FC, useState, useEffect } from "react";  // useEffectを追加
import baseBackground from "../img/pop.png";
import background from "../img/window.png";
import { Link } from "react-router-dom";


export const StartPage: FC = () => {
  const title = "START!!"

  const [count, setCount] = React.useState(5);
  const [isCounting, setIsCounting] = React.useState(false);

  return (
    <>
      <div className="h-full" style={{backgroundImage:`url(${baseBackground})`, height:"1080px"}}>
        <div className="flex p-16 ml-32 mt-54">
          <div className="h-full" style={{backgroundImage: `url(${background})`, width: "1187px", height:"788px"}}>
            <div className="py-24 px-16">
              <p className="text text-sky-400 text-9xl fond-bold text-center mb-8">
                {title}
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
