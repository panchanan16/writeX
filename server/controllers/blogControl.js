const Blog = require('../model/blogModel')
const mongoose = require('mongoose')

const BlogControl = {
    createBlog : async function (req, res){
        const createCat = new Blog({ 
            title: req.body.title, description: req.body.description, blog: req.body.blog,
            category : req.body.category, author : req.body.author
         })
        try {
            await createCat.save({timestamps: true})
            res.status(200).send({ msg: `One Blog Published` })
        } catch (error) {
            res.send({ msg: error })
        }
    },
    viewsIncrease : async function (req, res) {
        const { blogId } = req.body;
        try {
            const filteredCategory = await Blog.updateOne(
                { _id: blogId },
                { $inc: { views: 1 } }
             )
            res.status(200).send({msg: "updated successfully..."})
        } catch (error) {
            res.send({ msg: error })
        } 
    },

    filterBycategory: async function (req, res) {
        const { filterId } = req.params;
        try {
            const filteredCategory = await Blog.find({category : filterId}, {title: 1, description: 1, author: 1, category: 1, createdAt: 1});
            res.status(200).send({filteredCategory})
        } catch (error) {
            res.send({ msg: error })
        } 
    },
    getMyAllBlog: async function (req, res) {
        const { authorId } = req.params;
        try {
            const filteredByUserId = await Blog.aggregate([
                {$match : {author : new mongoose.Types.ObjectId(authorId)}},
                {$lookup : {from : "signups", localField: 'author',  foreignField: "_id", as: "author"}},
                {$project : {title: 1, description: 1, author: 1, createdAt : 1}}
            ]);
            res.status(200).send({filteredByUserId})
        } catch (error) {
            res.send({ msg: error })
        } 
    },

    getBlogById: async function (req, res) {
        const { blogId } = req.params;
        try {
            const filteredByBlogId = await Blog.aggregate([
                {$match : { _id: new mongoose.Types.ObjectId(blogId)}},
                {$lookup: {from: 'signups', localField: 'author',  foreignField: "_id", as: "author"}}
            ]);
            res.status(200).send({filteredByBlogId})
        } catch (error) {
            res.send({ msg: "not-found"})
        } 
    },
    deleteBlog: async function (req, res) {
        const { blogId } = req.params;
        try {
            const deleteBlog = await Blog.deleteOne({_id : blogId});
            res.status(200).send({deleteBlog})
        } catch (error) {
            res.send({ msg: error })
        } 
    },
    getAllBlog: async function (req, res) {
        try {
            const allBlog = await Blog.aggregate([{
                $lookup: {from: 'signups', localField: 'author',  foreignField: "_id", as: "author"}}]);
            res.status(200).send({allBlog})
        } catch (error) {
            res.send({ msg: error })
        } 
    },
}

module.exports = BlogControl

