import React from "react";
import frog from './img/frog.png';
import Header from "./Header";
import demoMovie from './videos/demo_movie.mov'; // 動画ファイルをインポート
import { Stack } from "@mui/material";
import './bot_title.css'; // CSSファイルのインポート
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import line_QR from "./img/line_QR.png";

function Linebot() {
    const [open, setOpen] = useState(false);

    // ダイアログの開閉を制御する関数
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // // クリップボードにコピーする関数
    // const handleCopy = () => {
    //     navigator.clipboard.writeText("id")
    //         .then(() => {
    //             alert("IDがコピーされました！");
    //         })
    //         .catch(err => {
    //             console.error("コピーに失敗しました: ", err);
    //         });
    // };

    return (
        <div>
            <Header /> {/* ヘッダーを追加 */}
            <h1 className="cute-title">Linebot</h1> {/* フォントを可愛くしたい部分 */}
            <div>
                <Stack direction="row" spacing={6} justifyContent="center" style={{ marginLeft: "20px", marginRight: "20px" }}>
                    {/* 動画を追加 */}
                    <video
                        className="demo_line_movie"
                        src={demoMovie} // 動画ファイル
                        controls // 再生コントロールを表示
                        width="100%" // 動画の幅
                        height="300" // 動画の高さ
                        alt="Demo Movie"
                    />
                    <h4 className="LEIN_Description">
                        Linebotは、会話中に特定の発言があった際、即座に反応し、蛙化判定を行います。
                        メッセージが検出されると、自動で『それ蛙化だよ！』と通知し、蛙化度合いをパーセンテージで表示します。
                    </h4>
                </Stack>
            </div>

            <div>
                <Button
                    className="Button"
                    variant="contained"
                    onClick={handleClickOpen}
                    style={{ backgroundColor: "rgb(90, 145, 83)", color: "white", margin: "20px" }}
                >
                    LIENbotを始める
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Linebotへようこそ</DialogTitle>
                    <DialogContent>
                        
                        <img className="frogimg" src={line_QR} alt="Discord Icon" /> {/*QRコードの写真をつける */}
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleCopy} color="primary">
                            IDをコピー
                        </Button> */}
                        <Button onClick={handleClose} color="primary">
                            閉じる
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <img className="frogimg" src={frog} alt="Discord Icon" />
            <h5 style={{color:"#a9a9a9" }}>ヘルプ・プライバシー・利用規約</h5>

        </div>
    );
}

export default Linebot;
