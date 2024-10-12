// firebaseConfig.js



// firebaseConfig.js

// Firebase SDKをインポート
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

// Firebase の設定
const firebaseConfig = {
    apiKey: "AIzaSyBiHjBk7rMiz4Fw7IoLPpFo1FTrQxqy_58",
    authDomain: "acau-3ebcf.firebaseapp.com",
    projectId: "acau-3ebcf",
    storageBucket: "acau-3ebcf.appspot.com",
    messagingSenderId: "407904196633",
    appId: "your-app-id-here" // もし必要ならappIdを追加
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);

// Firestoreのインスタンスを作成
const db = getFirestore(app);

// 他のファイルからインポートできるようにエクスポート
export { db };




    // // Firebaseの初期化
    // const firebaseConfig = {
    //     apiKey: "AIzaSyBiHjBk7rMiz4Fw7IoLPpFo1FTrQxqy_58",
    //     authDomain: "acau-3ebcf.firebaseapp.com",
    //     projectId: "acau-3ebcf",
    //     storageBucket: "acau-3ebcf.appspot.com",
    //     messagingSenderId: "407904196633",
    // };

    // // 初期化
    // if (!firebase.apps.length) {
    //     firebase.initializeApp(firebaseConfig);
    // }
    // const db = firebase.firestore();





