const db = require('../models');
const User = db.User;
async function login(req,res){
const data = req.body
try {
const user = await User.findOne({where: {email:data.email, password:data.password}});
if(!user) return res.JSON({status:false, message: "No Invalid Login Details"});
return res.JSON({status:true, message: "login successfull"});
} catch (error) {
res.JSON("An error occured"+error)
}
}
async function register(req,res){
const data = req.body
try {
const createduser = await User.create(data);
if(!createduser) return res.JSON({status:false, message: "Could  not create user"});
return res.JSON({status:true, message: "User created successfull"});
} catch (error) {
res.JSON("An error occured"+error)
}
}
module.exports = {
register,
login
}