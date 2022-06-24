
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCrNZyupEqNrAQC1ih7P_lC77ijCfL3EUw",
  authDomain: "testwebsite-4ea81.firebaseapp.com",
  projectId: "testwebsite-4ea81",
  storageBucket: "testwebsite-4ea81.appspot.com",
  messagingSenderId: "306207894628",
  appId: "1:306207894628:web:a59da13bd1d35fea2dc371"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)