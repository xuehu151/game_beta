let mongoose = require ('../configs/MongoDBConfigs');

let Schema = mongoose.Schema;
let vipList = new Schema ({
    username : {type : String},
    userpass : {type : String}
});
let UserModel = mongoose.model ('vipuser', vipList);

module.exports = UserModel;


