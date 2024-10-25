import React from "react";
import { Stack } from "@mui/material"; // MUIからButtonとStackをインポート
import { useNavigate } from "react-router-dom"; // ページ遷移用
import lineIcon from './img/lineicon.png'; // Lineのアイコン画像
import discordIcon from './img/discordicon.png'; // Discordのアイコン画像
import frogIcon from './img/frogicon.png'; // 蛙化判定Botのアイコン

function Home() {
    const navigate = useNavigate(); // useNavigateフックを使用してページ遷移を実現

    // Linebotへの遷移をハンドルする関数
    const handleLinebotClick = () => {
        navigate('/linebot'); // "/linebot" ページに遷移
    };

    // Discordbotへの遷移をハンドルする関数
    const handleDiscordbotClick = () => {
        navigate('/discordbot'); // "/discordbot" ページに遷移
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {/* タイトル */}
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#42B138" }}>
                <h1 className="title">蛙化判定Bot</h1>

                {/* アイコンの画像 */}
                <img
                    src={frogIcon} // 蛙化判定Botの画像
                    alt="Frog Icon"
                    style={{ width: "150px", height: "150px", marginBottom: "20px" }}
                />
            </div>

            {/* ボタンを並べる */}
            <Stack direction="row" spacing={6} justifyContent="center">
                <h2 className="title">LIENBot</h2>
                <h2 className="title">DiscordBot</h2>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="center">

                {/* Linebotのアイコンをクリックでページ遷移 */}
                <img
                    src={lineIcon}
                    alt="Line Icon"
                    style={{ width: "150px", height: "150px", marginBottom: "20px", cursor: "pointer" }} // cursor: pointerでクリック可能を示す
                    onClick={handleLinebotClick} // クリック時にLinebotのページへ遷移
                />

                {/* Discordbotのアイコンをクリックでページ遷移 */}
                <img
                    src={discordIcon}
                    alt="Discord Icon"
                    style={{ width: "150px", height: "150px", marginBottom: "20px", cursor: "pointer" }} // cursor: pointerでクリック可能を示す
                    onClick={handleDiscordbotClick} // クリック時にDiscordbotのページへ遷移
                />
            </Stack>
        </div>
    );
}

export default Home;
