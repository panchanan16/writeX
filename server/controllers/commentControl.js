const CommentModel =  require('../model/commentModel')
const mongoose = require('mongoose');

const CommentControl = {
    createComment: async function(req, res){
        const {userId, blogId, comment} = req.body
        const newcomment = new CommentModel({userId, comment, blogId})
        try {
            await newcomment.save()
            res.status(200).send({ msg: `comment added successfully!!` })
        } catch (error) {
            res.send({ msg: error })
        }
    },
    deleteComment: async function(req, res){
        const {commentId} = req.body
        try {
           const delresult = await CommentModel.deleteOne({_id : commentId})
           res.status(200).send({ msg: delresult})
        } catch (error) {
            res.send({ msg: error })
        }
    },
    getBlogWithComment: async function(req, res){
        const {blogId} = req.params
        const result = await CommentModel.aggregate([
            {$match : { blogId : blogId}},
            {$lookup : {from: "signups", localField: "userId",foreignField: "_id", as: "author"}},
            {$project : {comment : 1, author: 1}}
        ])
        res.send({result})
    }
}

module.exports = CommentControl
