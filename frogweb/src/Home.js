import React from "react";
import {  Stack } from "@mui/material"; // MUIからButtonとStackをインポート
// import { useNavigate } from "react-router-dom"; // ページ遷移用
import lineIcon from './img/lineicon.png'; // Lineのアイコン画像
import discordIcon from './img/discordicon.png'; // Discordのアイコン画像
import frogIcon from './img/frogicon.png'; // 蛙化判定Botのアイコン

function Home() {


  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* タイトル */}
      <h1 className="title">蛙化判定Bot</h1>

      {/* アイコンの画像 */}
      <img
        src={frogIcon} // 蛙化判定Botの画像
        alt="Frog Icon"
        style={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />

      {/* ボタンを並べる */}
      <Stack direction="row" spacing={6} justifyContent="center">
      <h2 className="title">LIENBot</h2>
      <h2 className="title">DiscordBot</h2>
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">

      <img
        src={lineIcon} 
        alt="Frog Icon"
        style={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />
        
            <img
        src={discordIcon} 
        alt="Frog Icon"
        style={{ width: "150px", height: "150px", marginBottom: "20px" }}
      />
      </Stack>
    </div>
  );
}

export default Home;
