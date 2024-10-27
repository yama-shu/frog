import frog from './img/frog.png'; // Discordのアイコン画像
import Header from "./Header";
import { Stack } from "@mui/material";
import demoMovie from './videos/demo_movie.mov';
import './bot_title.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import discord_QR from "./img/discord_QR.png";

function Discordbot() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="discord-title">
                <Header />
                <h1 className="cute-title">Discordbot</h1> {/* タイトルを元のスタイルに戻す */}
                <div>
                    <Stack direction="row" spacing={6} justifyContent="center" style={{ marginLeft: "20px", marginRight: "20px" }}>
                        <video
                            className="responsive-video"
                            src={demoMovie}
                            controls
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
                        style={{ backgroundColor: "rgb(90, 145, 83)", color: "white", margin: "20px" }} // 色を統一
                    >
                        Discordbotを始める
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Discordbotへようこそ</DialogTitle>
                        <DialogContent>
                            <img className="frogimg" src={discord_QR} alt="Discord QR Code" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                閉じる
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <img className="frogimg" src={frog} alt="Discord Icon" />
                <h5 style={{color:"#a9a9a9" }}>ヘルプ・プライバシー・利用規約</h5>
            </div>
        </div>
    );
}

export default Discordbot;
