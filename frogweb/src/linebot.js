import React from "react";
import frog from './img/forg.png'; // Discordのアイコン画像
import { Stack } from "@mui/material"; // MUIからButtonとStackをインポート
function Linebot() {
  return (
    <div>
    <div>
        <h1>Linebot</h1>
        <div>
            <Stack direction="row" spacing={6} justifyContent="center">
                <h2 className="title">デモ動画</h2>
                <h2 className="title">説明</h2>
            </Stack>
        </div>
        <button className="dicordButton"> Linebotを始める </button>
    </div>
    {/* ボタンの追加 */}

    <img
        src={frog}
        alt="Discord Icon"
        style={{ width: "300px", height: "300px", marginBottom: "20px", cursor: "pointer" }} // cursor: pointerでクリック可能を示す
    />
</div>
  );
}

export default Linebot;