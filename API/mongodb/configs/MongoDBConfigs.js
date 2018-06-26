//step1 引入mongo驱动引进来
let mongoose = require("mongoose");

//step2:通过nodejs与mongodb建立链接
const dbUrl = "mongodb://localhost:27017/gameBetes";

//step3:建立链接
mongoose.connect(dbUrl);
// var promise = mongoose.connect('mongodb://localhost/myapp', {
//     useMongoClient: true,
//     /* other options */
// });
// var promise = mongoose.createConnection('mongodb://localhost/myapp', {
//     useMongoClient: true,
//     /* other options */
// });

//step4:监听事件
mongoose.connection.on("connected",()=>{
    console.log("链接成功");
});

module.exports = mongoose;
