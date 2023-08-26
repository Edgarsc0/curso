const express = require("express");
const router = express.Router();
const Services = require("../services/clientServices");

router.get("/", (req, res) => {
    const clients = Services.getAll();
    res.status(200).json({
        clients,
        message: "Clientes recibidos"
    })
});

router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const clients=Services.getOne(id);
    res.status(200).json({
        clients
    })
})

router.post("/",(req,res)=>{
    const data=req.body
    const conf=Services.create(data);
    res.status(201).json({
        conf
    })
})

router.patch("/modify-name/:id",(req,res)=>{
    const {name}=req.body;
    const {id}=req.params;
    const conf=Services.updateName(id,name);
    res.status(200).json({
        conf
    })
})

router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const conf=Services.delete(id);
    res.status(200).json({
        conf
    })
})


module.exports = router;