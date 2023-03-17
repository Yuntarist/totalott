require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cw = require("./public/allgame"); //크롤링 js데이터 가져오기
const history = require("connect-history-api-fallback"); //새로고침후 데이터 유지
const app = express();
const port = 3000;
const _path = path.join(__dirname, "./dist");

// crypto 암호화 모듈
// const crypto = require("crypto");

const USER = process.env.dbid;
const PWD = process.env.dbpwd;
const HOST = process.env.dbhost;
const DB = "trif";
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

mongoose.set("strictQuery", false); // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

const Photo = require("./DB/photo.js");
const maincrawling = require("./DB/maincrawling.js");
const QnA = require("./DB/qna.js");
module.exports = Photo;
module.exports = maincrawling;
module.exports = QnA;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // url 인코딩 함

console.log(_path);
app.use(history());
app.use("/", express.static(_path));
app.use(logger("tiny"));

// 회원가입
app.post("/about4", function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  // console.log(req.body.resultgood);
  const A = req.body.userID;
  const B = req.body.userPW;
  const C = req.body.userPW2;
  const D = req.body.userEM;

  const main = async () => {
    const _data = {
      아이디: A,
      비밀번호: B,
      비밀번호확인: C,
      이메일: D,
    };

    const new_photo = new Photo(_data);
    const t = await new_photo.save();
    console.log(t);
  };
  main();
});

// 로그인
app.get("/about3/:loginid/:loginpwd", (req, res) => {
  let 아이디 = req.params.loginid;
  let 비밀번호 = req.params.loginpwd;
  (async () => {
    const t = await Photo.find({ 아이디 }, {})
      .lean()
      .then((t) => {
        console.log(t);
        if (t[0] === undefined) {
          res.json({ result: 0 });
        } else if (t[0].비밀번호 !== 비밀번호) {
          res.json({ result: 2 });
        } else {
          res.json({ result: 1 });
        }
      });
  })();
});

// 아이디 찾기
app.get("/about5/:email", (req, res) => {
  let 이메일 = req.params.email;

  (async () => {
    const t = await Photo.find({ 이메일 }, {})
      .lean()
      .then((t) => {
        console.log(t);
        if (t[0] === undefined) {
          res.json({ result: 1 });
        } else if (t[0].이메일 === 이메일) {
          res.send(t[0].아이디);
        }
      });
  })();
});

// 비밀번호 찾기
app.get("/about5/:fid", (req, res) => {
  let 아이디 = req.params.fid;

  (async () => {
    const t = await Photo.find({ 아이디 }, {})
      .lean()
      .then((t) => {
        console.log(t);
        if (t[0] === undefined) {
          res.json({ result: 1 });
        } else if (t[0].아이디 === 아이디) {
          res.send(t[0].아이디);
        }
      });
  })();
});

// 1대1 문의
app.post("/about8", (req, res) => {
  const qna = req.body.qna;

  (async () => {
    const _data = { 문의: qna };
    const vs = new QnA(_data);
    const t = await vs.save();
    console.log(t); // 확인용.
    res.send("제출 완료 !");
  })();
});

// 몽고디비에서 읽어오는 형식
// 엑시오스를 이용해 받고 보내고 할수있게 만들기

// 전체 데이터 보내기
// app.get("/all", (req, res) => {
//   const main2 = async () => {
//     const t = await maincrawling.find();
//     console.log(t);
//     console.log(typeof t);
//     res.send(t);
//   };
//   main2();
// });
app.get("/steam", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_all: 1,
        _id: 0,
      }
    );
    console.log(t);
    console.log(typeof t);
    res.send(t);
  };
  main3();
});

app.get("/steam_title", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_title: 1,
        _id: 0,
      }
    );

    console.log(t);
    console.log(typeof t + "1");
    const t1 = Object.entries(t);
    console.log(t1);
    console.log(typeof t1 + "2");
    const t2 = [];
    for (let i = 0; i < t1.length; i++) {
      t2.push(t1[i]);
    }
    res.send(t2);
  };
  main3();
});
app.get("/gamersgate", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_all: 1,
        _id: 0,
      }
    );
    console.log(t);
    console.log(typeof t);
    res.send(t);
  };
  main3();
});
app.get("/greenmangaming", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_all: 1,
        _id: 0,
      }
    );
    console.log(t);
    console.log(typeof t);
    res.send(t);
  };
  main3();
});
app.get("/dream", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_all: 1,
        _id: 0,
      }
    );
    console.log(t);
    console.log(typeof t);
    res.send(t);
  };
  main3();
});

// app.get("/about1", (req, res) => {
//   console.log("준비");
//   cw.ax().then((v) => {
//     res.send(v);
//   });
// });

app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});
