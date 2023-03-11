require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const history = require("connect-history-api-fallback"); //새로고침후 데이터 유지
const app = express();
const port = 3000;
const _path = path.join(__dirname, "./dist");
// crypto 암호화 모듈
// const crypto = require("crypto");

const USER = "dtd";
const PWD = 123123;
const HOST = "127.0.0.1:27017";
const DB = "trif";
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

mongoose.set("strictQuery", false); // 6.0 이후 권장사항
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
const Photo = require("./DB/photo.js");
const maincrawling = require("./DB/maincrawling.js");
module.exports = Photo;
module.exports = maincrawling;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/about4", function (req, res) {
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

console.log(_path);
app.use(history());
app.use("/", express.static(_path));
app.use(logger("tiny"));

// 몽고디비에서 읽어오는형식
// 엑시오스를 이용해 받고 보내고를 할 수 있도록 만들기

// 전체 데이터 보내는거
// app.get('/all', (req, res) => {
//   const main2 = async () => {
//     const t = await maincrawling.find()
//     console.log(t)
//     console.log(typeof t)
//     res.send(t)
//   }
//   main2()
// })
app.get("/steam_title", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_title: 1,
        _id: 0,
      }
    );

    console.log(t[0].steam_title);
    console.log(typeof t);
    res.send(t[0].steam_title);
  };
  main3();
});
app.get("/steam_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].steam_price);
    console.log(typeof t);
    res.send(t[0].steam_price);
  };
  main3();
});
app.get("/steam_discount_percent", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_discount_percent: 1,
        _id: 0,
      }
    );
    console.log(t[0].steam_discount_percent);
    console.log(typeof t);
    res.send(t[0].steam_discount_percent);
  };
  main3();
});
app.get("/steam_discount_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        steam_discount_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].steam_discount_price);
    console.log(typeof t);
    res.send(t[0].steam_discount_price);
  };
  main3();
});
app.get("/gamersgate_title", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_title: 1,
        _id: 0,
      }
    );

    console.log(t[0].gamersgate_title);
    console.log(typeof t);
    res.send(t[0].gamersgate_title);
  };
  main3();
});
app.get("/gamersgate_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].gamersgate_price);
    console.log(typeof t);
    res.send(t[0].gamersgate_price);
  };
  main3();
});
app.get("/gamersgate_discount_percent", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_discount_percent: 1,
        _id: 0,
      }
    );
    console.log(t[0].gamersgate_discount_percent);
    console.log(typeof t);
    res.send(t[0].gamersgate_discount_percent);
  };
  main3();
});
app.get("/gamersgate_discount_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        gamersgate_discount_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].gamersgate_discount_price);
    console.log(typeof t);
    res.send(t[0].gamersgate_discount_price);
  };
  main3();
});
app.get("/greenmangaming_title", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_title: 1,
        _id: 0,
      }
    );

    console.log(t[0].greenmangaming_title);
    console.log(typeof t);
    res.send(t[0].greenmangaming_title);
  };
  main3();
});
app.get("/greenmangaming_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].greenmangaming_price);
    console.log(typeof t);
    res.send(t[0].greenmangaming_price);
  };
  main3();
});
app.get("/greenmangaming_discount_percent", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_discount_percent: 1,
        _id: 0,
      }
    );
    console.log(t[0].greenmangaming_discount_percent);
    console.log(typeof t);
    res.send(t[0].greenmangaming_discount_percent);
  };
  main3();
});
app.get("/greenmangaming_discount_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        greenmangaming_discount_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].greenmangaming_discount_price);
    console.log(typeof t);
    res.send(t[0].greenmangaming_discount_price);
  };
  main3();
});
app.get("/dream_title", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_title: 1,
        _id: 0,
      }
    );

    console.log(t[0].dream_title);
    console.log(typeof t);
    res.send(t[0].dream_title);
  };
  main3();
});
app.get("/dream_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].dream_price);
    console.log(typeof t);
    res.send(t[0].dream_price);
  };
  main3();
});
app.get("/dream_discount_percent", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_discount_percent: 1,
        _id: 0,
      }
    );
    console.log(t[0].dream_discount_percent);
    console.log(typeof t);
    res.send(t[0].dream_discount_percent);
  };
  main3();
});
app.get("/dream_discount_price", (req, res) => {
  const main3 = async () => {
    const t = await maincrawling.find(
      {},
      {
        dream_discount_price: 1,
        _id: 0,
      }
    );
    console.log(t[0].dream_discount_price);
    console.log(typeof t);
    res.send(t[0].dream_discount_price);
  };
  main3();
});
app.listen(port, () => {
  console.log(port + "에서 서버 동작 완료.");
});
