import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBzOJgwr7JWMD8QCxdWSXfCQKlZxuKrtMQ',
    authDomain: 'beenchangseo-1da05.firebaseapp.com',
    projectId: 'beenchangseo-1da05',
    storageBucket: 'beenchangseo-1da05.appspot.com',
    messagingSenderId: '981492125293',
    appId: '1:981492125293:web:a3e3909726e98d812fb964',
    measurementId: 'G-C6H0L1ELNJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);