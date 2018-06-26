let vipModel = require('../models/Vipmodel');
class UserOperation{
    constructor(){

    }
    //用来添加用户信息
    addUser(userObj,cb){
        let user = new vipModel(userObj);
        user.save((error,result)=>{
            cb(error,result);
        })
    }
    //查找用户信息
    findUsers(where,cb){
        vipModel.find(where,(error,result)=>{
            cb(error,result)
        })
    }
    //修改用户信息
    updateUser(where,setWhere,cb){
        vipModel.update(where,{$set:setWhere},(error,resolut)=>{
            cb(error,resolut)
        })
    }

    //删除用户信息
    deleteUser(where,cb){
        vipModel.remove(where,(error,result)=>{
            cb(error,result)
        })
    }
    //查询用户信息并分页
    findByPager(where,pagesize,pageIndex,cb){
        vipModel.find(where).limit(pagesize).skip((pageIndex-1)*pagesize).exec((error,result)=>{
            cb(error,result);
        });
    }
}
module.exports = UserOperation;