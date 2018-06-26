let mongoose = require ('../configs/MongoDBConfigs');

let Schema = mongoose.Schema;
let shopList = new Schema ({
    title : {type : String},
    sp : {type : String},
    img : {type : String}
});
let UserModel = mongoose.model ('lists', shopList);

module.exports = UserModel;


