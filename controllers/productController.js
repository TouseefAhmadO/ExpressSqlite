const Products = require('../models/productModel');

module.exports = {
    async all(req, res) {
        try {
            const products = await Products.findAll();
            res.status(200).json(products)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async one(req, res) {
        try {
            const id = req.params.id;
            const product = await Products.findOne({ where: { id } });

            if (!product) {
                return res.status(400).json("Product Not Found!!");
            }
            res.status(200).json(product)

        } catch (error) {
            res.status(400).send(error)
        }
    },
    async create(req, res) {
        try {
            const product = await Products.create(req.body);
            res.status(200).json({ message: "Product Inserted Successfully !!", product: product })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;

            const product = await Products.findOne({ where: { id } });

            const { name, price, description, category } = req.body;

            product.name = name;
            product.price = price;
            product.description = description;
            product.category = category;

            await product.save();

            res.status(201).json({ message: "Product Updated!!", product: product });

            if (!product) {
                return res.status(400).json("Product Not Found!!");
            }

        } catch (error) {
            res.status(400).send(error)
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const getOneProduct = await Products.findOne({ where: { id } });
            const product = await Products.destroy({ where: { id } });

            if (!product) {
                return res.status(400).json("Product Not Found!!");
            }
            res.status(200).json(
                [
                    { success: true },
                    { product: getOneProduct }
                ]
            )

        } catch (error) {
            res.status(400).send(error)
        }
    },
    async deleteAll(req, res) {
        try {
            const product = await Products.destroy({ where: {} });
            const deletedProducts = await Products.findAll();
            if (!product) {
                return res.status(400).json("Product Not Found!!");
            }
            res.status(200).json(
                [
                    { success: true },
                    { product: deletedProducts }
                ]
            )

        } catch (error) {
            res.status(400).send(error)
        }
    }
}