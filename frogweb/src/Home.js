import React from "react";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import lineIcon from './img/lineicon.png';
import discordIcon from './img/discordicon.png';
import frogIcon from './img/image.png';
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleLinebotClick = () => {
        navigate('/linebot');
    };

    const handleDiscordbotClick = () => {
        navigate('/discordbot');
    };

    return (
        <div style={{ textAlign: "center", padding: "1px" }}>
            {/* 蛙化Botの背景セクション */}
            <div className="background-section" style={{ backgroundColor: "#42B138" }}>
                <Stack direction="column" alignItems="center">
                    {/* テキストに背景色を付けるためのラッパー要素 */}
                   
                    <img
                        src={frogIcon}
                        alt="Frog Icon"
                        className="frog-icon" // アイコンのクラス
                    />
                </Stack>
            </div>

            {/* LinebotとDiscordbotの横並びセクション */}
            <div className="background-section-horizontal">
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                    {/* Linebotのアイコンとテキスト */}
                    <div className="icon-container">
                        <h2 className="title">LIENBot</h2>
                        <img
                            src={lineIcon}
                            alt="Line Icon"
                            className="icon-image"
                            onClick={handleLinebotClick}
                        />
                    </div>

                    {/* 区切りを作成（白色の背景） */}
                    <div className="divider"></div>

                    {/* Discordbotのアイコンとテキスト */}
                    <div className="icon-container">
                        <h2 className="title">DiscordBot</h2>
                        <img
                            src={discordIcon}
                            alt="Discord Icon"
                            className="icon-image"
                            onClick={handleDiscordbotClick}
                        />
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default Home;
