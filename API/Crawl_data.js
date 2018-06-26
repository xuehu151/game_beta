/**
 * Created by admin on 2018/2/1.
 */
let superagent = require ("superagent");
let cheerio = require ("cheerio");
let mongoose = require ("mongoose");
const dbUrl = "mongodb://localhost:27017/gameBetes";
mongoose.connect (dbUrl);
mongoose.connection.on ("connected", () => {
    console.log ("链接成功");
});
let Schema = mongoose.Schema;
let indexlist = new Schema ({
    title : {type : String},
    pic : {type : String},
    sp : {type : String}
});
let UserModel = mongoose.model ('lists', indexlist);
class UserOperation {
    constructor () {
        //....
    }

    //用来添加用户信息
    addUser (userObj, cb) {
        let user = new UserModel (userObj);
        user.save ((error, result) => {
            cb (error, result);
        })
    }

    //查找用户信息
    findUsers (where, cb) {
        UserModel.find (where, (error, result) => {
            cb (error, result)
        })
    }

    //修改用户信息
    updateUser (where, setWhere, cb) {
        UserModel.update (where, {$set : setWhere}, (error, resolut) => {
            cb (error, resolut)
        })
    }

    //删除用户信息
    deleteUser (where, cb) {
        UserModel.remove (where, (error, result) => {
            cb (error, result)
        })
    }

    //查询用户信息并分页
    findByPager (where, pagesize, pageIndex, cb) {
        UserModel.find (where).limit (pagesize).skip ((pageIndex - 1) * pagesize).exec ((error, result) => {
            cb (error, result);
        });
    }
}

superagent
    .get ('http://t.okbuy.com/')
    .end (function (err, res) {
        let $ = cheerio.load (res.text);
        $ ("#cat_0").children ("li").each ((idx, data) => {

            let product = {
                title : "",
                sp : "",
                pic : ""
            };

            let aaa = $ (data).find ("p").text ();
            product.sp = $ (data).find ("p").find ("span").text ();
            product.title = aaa.substring (product.sp.length);

            let picUrl = $ (data).find ('.topic').find ("img").attr ("data-src");
            if (picUrl == undefined) {
                picUrl = $ (data).find (".p-img").find ("img").attr ("data-lazy-img");
            }
            product.pic = picUrl;
            let pro = new UserOperation ();
            pro.addUser (product, (error, result) => {
                console.log (result);
                console.log (product);
            })

        })
    });
