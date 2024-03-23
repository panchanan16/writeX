const User = require('../model/userModel')
const jwt = require('jsonwebtoken');


const userAction = {
   signupUser: function (req, res) {
      const { username, designation, email, password } = req.body;
      const createUser = new User({ username, email, password, designation });
      createUser.save().then(() => {
         res.status(200).send({ msg: "user created successfully!" })
      }).catch((err) => { res.send({ msg: err })});
   },

   loginUser: async function (req, res) {
      const { email, password } = req.body;
      const loginUser = await User.findOne({ email: email, password: password }, {_id: true, email: true }).exec();
      if (loginUser) {
         const token = jwt.sign({ foo: 'bar' }, 'shhhhh')
         res.status(200).send({ user: {email: {_id: loginUser._id, email: loginUser.email, token: token}}});
         return;
      } else { res.status(403).send({ msg: 'Login failed' }); }
   },
   // {email: {_id: loginUser._id, email: loginUser.email}}

   updateUser: async function (req, res) {
      const { id, password } = req.body;
      try {
         const updateUser = await User.updateOne({ _id: id }, { $set: { password: password } });
         res.status(200).send({ user: updateUser });
      } catch (error) {
         res.status(403).send({ msg: 'failed to update!' });
      }
   },
   getAllUser: async function (req, res) {
      try {
         const getUser = await User.find();
         res.status(200).send({ users: getUser });
      } catch (error) {
         res.status(403).send({ msg: 'failed to fetch!' });
      }
   }

}

module.exports = userAction;



