import React from "react";
import { useNavigate } from "react-router-dom"; // ページ遷移用
import "./Header.css"; // CSSファイルのインポート
// import logoIcon from './img/logoIcon.png'; // アイコン画像をインポート

function Header() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // "/home" ページに遷移
    };

    return (
        <header className="header">
            <div className="header-content" onClick={handleHomeClick} style={{ cursor: "pointer" }}>
                {/* 　<img src={logoIcon} alt="Logo Icon" className="header-icon" /> アイコンを追加 */}
                <h1 className="header-title">蛙化判定Bot フローティーくん</h1>
            </div>
        </header>
    );
}

export default Header;
