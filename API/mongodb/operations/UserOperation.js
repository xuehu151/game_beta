let UserModel = require ('../models/UserModel');
class UserOperation {
    constructor () {

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
module.exports = UserOperation;