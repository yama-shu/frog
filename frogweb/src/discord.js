import React from "react";
import frog from './img/frog.png'; // Discordのアイコン画像
import Header from "./Header"; // ヘッダーコンポーネントをインポート
import { Stack } from "@mui/material"; // MUIからButtonとStackをインポート
import demoMovie from './videos/demo_movie.mov'; // 動画ファイルをインポート
import './bot_title.css'; // CSSファイルのインポート
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import discord_QR from "./img/discord_QR.png";


function Discordbot() {
    const [open, setOpen] = useState(false);

    // ダイアログの開閉を制御する関数
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // クリップボードにコピーする関数
    const handleCopy = () => {
        navigator.clipboard.writeText("https://discord.com/oauth2/authorize?client_id=1297556251953201233")
            .then(() => {
                alert("IDがコピーされました！");
            })
            .catch(err => {
                console.error("コピーに失敗しました: ", err);
            });
    };
    return (
        <div>
            <div className="discord-title">
                <Header /> {/* ヘッダーを追加 */}
                <h1 className="cute-title">Discordbot</h1>
                <div>
                    <Stack direction="row" spacing={6} justifyContent="center" style={{ marginLeft: "20px", marginRight: "20px" }}>
                        <video
                            className="demo_line_movie"
                            src={demoMovie} // 動画ファイル
                            controls // 再生コントロールを表示
                            width="100%" // 動画の幅
                            height="300" // 動画の高さ
                            alt="Demo Movie"
                        />

                        <h4 className="Discord_Description">
                            Discordbotは、サーバー内でのチャットをリアルタイムで解析します。
                            ユーザーが感情のこもった発言をしたときに、ボットが自動で反応し、蛙化度を通知します。
                            チャットがより楽しく、盛り上がる要素を追加します。
                        </h4>
                    </Stack>
                </div>
                <div>
                    <Button
                        className="Button"
                        variant="contained"
                        onClick={handleClickOpen}
                        style={{ backgroundColor: "rgb(66, 177, 56)", color: "white", margin: "20px" }}
                    >
                        Discordbotを始める
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Discordbotへようこそ</DialogTitle>
                        <DialogContent>
                            <h4>ID: https://discord.com/oauth2/authorize?client_id=1297556251953201233</h4>
                            <img className="frogimg" src={discord_QR} alt="Discord Icon" /> {/*QRコードの写真をつける */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCopy} color="primary">
                                IDをコピー
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                閉じる
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <img className="frogimg" src={frog} alt="Discord Icon" />

            </div>
            {/* ボタンの追加 */}
        </div>

    );
}

export default Discordbot;
