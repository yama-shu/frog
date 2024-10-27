import frog from './img/frog.png'; // Linebotのアイコン画像
import Header from "./Header";
import { Stack } from "@mui/material";
import demoMovie from './videos/demo_movie.mov';
import './bot_title.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import line_QR from "./img/line_QR.png";

function Linebot() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className="line-title">
                <Header />
                <h1 className="cute-title">Linebot</h1> {/* タイトルを元のスタイルに戻す */}
                <div>
                    <Stack direction="row" spacing={6} justifyContent="center" style={{ marginLeft: "20px", marginRight: "20px" }}>
                        <video
                            className="responsive-video"
                            src={demoMovie}
                            controls
                            alt="Demo Movie"
                        />

                        <h4 className="Line_Description">
                            Linebotは、ユーザーとの会話をリアルタイムで解析し、感情やトピックに基づいて自動的に反応します。
                            コミュニケーションをより便利で楽しくするためのツールです。
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
                        Linebotを始める
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Linebotへようこそ</DialogTitle>
                        <DialogContent>
                            <img className="frogimg" src={line_QR} alt="Line QR Code" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                閉じる
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <img className="frogimg" src={frog} alt="Line Icon" />
                <h5 style={{color:"#a9a9a9" }}>ヘルプ・プライバシー・利用規約</h5>
            </div>
        </div>
    );
}

export default Linebot;
