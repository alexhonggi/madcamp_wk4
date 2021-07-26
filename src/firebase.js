import firebase from 'firebase'
import {ref, onUnmounted} from 'vue'

const config = {
    apiKey: "AIzaSyAY-3yZJEFFw0nT8X372JGtvhYJDtzUwho",
    authDomain: "fir-test-934dd.firebaseapp.com",
    databaseURL: "https://fir-test-934dd-default-rtdb.firebaseio.com",
    projectId: "fir-test-934dd",
    storageBucket: "fir-test-934dd.appspot.com",
    messagingSenderId: "492576615696",
    appId: "1:492576615696:web:e8278157d54082cad90995"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

const storageRef = firebase.storage().ref('userProfile');

//유저 정보 디비에 기입
export const createUser = (googleId, user) => {
    return usersCollection.doc(googleId).set(user);
}

//storage에 사진 올리고 사진 다운로드 링크 반환
export const uploadFile  = async (googleId, file) => {
    await storageRef.child(googleId).put(file);
    return storageRef.child(googleId).getDownloadURL();
}

//user object 하나 return
export const getUser = async googleId => {
    const user = await usersCollection.doc(googleId).get();
    return user.exists ? user.data() : null;
}

//좋아요시 like 배열에 추가
export const onLike = (myId, targetId) => {
    usersCollection.doc(myId).update({
        like: firebase.firestore.FieldValue.arrayUnion(targetId)
    });
}

//좋아요한 user id 전달 시 user object들 반환
export const getLikes = async likes => {
    var likeUserData = [];
    for(var like in likes){
        var userData = await getUser(likes[like]);
        likeUserData.push(userData);
        console.log('array: ',likeUserData)
    }
    return likeUserData;
}

//user db 전체 데이터 반환
export const getAllData = async () => {
    const snapshot = await usersCollection.get();
    // console.log(snapshot);
    // snapshot.forEach(doc=>{
    //     console.log(doc.id, '=>', doc.data(), '=>', doc.data().name);
    // });
    return snapshot;
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete();
}

export const useLoadUsers = () => {
    const users = ref([]);
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    });
    onUnmounted(close);
    return users;
}