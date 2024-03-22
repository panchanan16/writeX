const Category = require('../../model/blogCategoryModel')

const categoryControl = {
    createCategory: async function (req, res) {
        const { category } = req.body;
        const createCat = new Category({ category })
        try {
            await createCat.save()
            res.status(200).send({ msg: `One Category created with Id ${createCat._id}` })
        } catch (error) {
            res.send({ msg: error })
        }

    },
    getAllCategory: async function (req, res) {
        try {
            const allcategories = await Category.find({}, {category : 1});
            res.status(200).send({allcategories})
        } catch (error) {
            res.status(500).send({error})
        }
    },
    deletecategory: async function (req, res) {
        const { id } = req.body;
        try {
            const allcategories = await Category.deleteOne({_id: id});
            res.status(200).send({allcategories})
        } catch (error) {
            res.send({ msg: error })
        } 
    }
}

module.exports = categoryControl;