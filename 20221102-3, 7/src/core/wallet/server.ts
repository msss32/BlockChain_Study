// 지갑 서버

import express from "express";
import nunjucks from "nunjucks";
import { Wallet } from "./wallet";
import axios from "axios";
import path from "path";

const app = express();
nunjucks.configure("view", {
  express: app, // express 속성에 우리가 만든 express 연결해줌
  watch: true, // watch 옵션은 true일 때 html 파일이 변경되면 템플릿 엔진이 리로드 시켜줌
});
app.set("view engine", "html");

// axios 사용할 때 디폴트값 셋팅

const baseURL = "http://localhost:3000";
const baseAuth = Buffer.from("seok" + ":" + "4561").toString("base64");
const request = axios.create({
  baseURL,
  headers: {
    // api 서버에서 데이터를 요청 응답할때 http Authorization 헤더에
    // 유저의 아이디와 비밀번호를 base64 형태로 인코딩한 문자열을 추가해서
    // 인증하는 방식 base64로 인코딩되어 전송되기 때문에
    // 중간 공격이 취약함
    Authorization: "Basic " + baseAuth,
    "Content-type": "application/json",
  },
});

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/newWallet", (req, res) => {
  res.json(new Wallet());
});

app.listen(4000, () => {
  console.log("4000번 서버 열림");
});
