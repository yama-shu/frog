import frog from './img/frog.png'; // Use frog.png instead of previous image
import Header from "./Header"; // ヘッダーコンポーネントをインポート
import { Stack } from "@mui/material"; // MUIからButtonとStackをインポート
import demoMovie from './videos/demo_movie.mov'; // Linebotの動画ファイルをインポート
import './bot_title.css'; // CSSファイルのインポート
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import line_QR from "./img/line_QR.png"; // QRコードの画像をインポート

function Linebot() {
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
        navigator.clipboard.writeText("https://line.me/R/ti/p/%40linebotid")
            .then(() => {
                alert("IDがコピーされました！");
            })
            .catch(err => {
                console.error("コピーに失敗しました: ", err);
            });
    };

    return (
        <div>
            <div className="line-title">
                <Header /> {/* ヘッダーを追加 */}
                <h1 className="cute-title">Linebot</h1>
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
                        style={{ backgroundColor: "rgb(66, 177, 56)", color: "white", margin: "20px" }}
                    >
                        Linebotを始める
                    </Button>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Linebotへようこそ</DialogTitle>
                        <DialogContent>
                            <h4>ID: https://line.me/R/ti/p/%40linebotid</h4>
                            <img className="frogimg" src={line_QR} alt="Line QR Code" /> {/*QRコードの写真をつける */}
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
                <img className="frogimg" src={frog} alt="Line Icon" /> {/* Use frog.png here */}
            </div>
            {/* ボタンの追加 */}
        </div>
    );
}

export default Linebot;
