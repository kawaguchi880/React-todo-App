import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// rootに<App />を代入している．
// <React.StrictMode>は厳格なモードですぐにwarmを出す．基本的にはつける．
// レンダリングとは元のデータをきれいにして表示をすること．
// hot reloading機能でセーブしなくとも画面に反映される
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

