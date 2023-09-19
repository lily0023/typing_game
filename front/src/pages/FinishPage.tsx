import React from "react";
import baseBackground from "../img/pop.png";
import background from "../img/window.png";
import { FC } from "react";
import { Link } from "react-router-dom";


export const FinishPage: FC = () => {
  const title = "FINISH!!"
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
                <Link to='/top'>トップページへ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
