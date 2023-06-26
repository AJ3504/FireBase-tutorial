import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase"; //./components/Auth ?
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//데이터 가져오기
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //(현재 로그인한 유저의 정보를 확인할 수 있음)
  useEffect(() => {
    //방법1.
    onAuthStateChanged(auth, (user) => {
      console.log("현재 로그인한 유저의 정보는?", user);

      //방법2.
      // auth.currentUser;
    });
  }, []);

  //데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "todos")); //컬렉션 이름이 todos인 document를 가져옴
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    fetchData();
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const signUp = async (event) => {
    event.preventDefault();

    //
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("회원가입이 완료되었습니다!", userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("회원가입에 문제가 발생했습니다", errorCode, errorMessage);
    }
  };
  const signIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("로그인이 완료되었습니다!", userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("로그인에 문제가 발생했습니다", errorCode, errorMessage);
    }
  };
  const logOut = async (event) => {
    event.preventDefault();
    await signOut(auth);
  };

  //--------------------------------------------------------------------//
  return (
    <div className="App">
      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          ></input>
        </div>
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>
      </form>
    </div>
  );
};

export default App;

// const App = () => {
//   //
//   useEffect(() => {
//     createUserWithEmailAndPassword(auth, "abc@gmail.com", "123123");
//   }, []);
//   //
//   return (
//     <div className="App">
//       <h1>Learn Firebase</h1>
//     </div>
//   );
// };

// export default App;
