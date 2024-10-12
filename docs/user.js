// main.js

import { db } from './firebaseConfig.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

async function fetchData() {
    try {
        const querySnapshot = await getDocs(collection(db, 'your-collection-name'));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    } catch (error) {
        console.error("Firestoreからのデータ取得エラー:", error);
    }
}

window.onload = fetchData;
