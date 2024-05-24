const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,

    },
    image: {
        type: String,

    },
    description: {
      type: String,

    }

})

const Products = mongoose.model("Product", productSchema)

app.get("/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    const items = await Products.find()
    res.send(items)
})

app.post("/products", async (req, res) => {
    const newProd = new Products({...req.body})
    await newProd.save()
    res.status(201).send(newProd)
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image } = req.body
    await Products.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated")
})

mongoose.connect(process.env.CONNECTION_STRING).then(res => {
    console.log("db connected")
})

app.listen(process.env.PORT, (req, res) => {
    console.log("api running on 8080")
})