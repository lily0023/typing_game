import React from "react";
import baseBackground from "../img/pop.png";
import background from "../img/window.png";
import { FC } from "react";
import { Link } from "react-router-dom";


export const SelectionPage: FC = () => {
  const explanationText = "ゆくゆくは、Railsについて〜、Webについて〜 \n って単語の種類で分けられたら良さそう \n 最初はこのページなくてもいいかも！\n→最初はエンターかスペース押したら、すぐゲームが始まるような感じで良さそうですね！"
  return (
    <>
      <div className="h-full" style={{backgroundImage:`url(${baseBackground})`, height:"1080px"}}>
        <div className="flex p-16 ml-32 mt-54">
          <div className="h-full" style={{backgroundImage: `url(${background})`, width: "1187px", height:"788px"}}>
            <div className="py-24 px-16">
              <p className="text text-sky-400 text-3xl fond-bold text-center mb-8">
                TypingGame
              </p>
              <p className="text text-black text-xl font-medium my-4 text-center whitespace-pre-wrap">
                {explanationText}
              </p>
              <div className="text-center">
                <Link to='/start'>スタートページへ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
