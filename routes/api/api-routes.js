// const axios = require("axios");
const db = require("../../models");
const path = require("path");

module.exports = function (app) {

    app.get("/api/newArrivals", (req, res) => {
        return db.NewArrival.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    });

    app.get("/api/highlighted", (req, res) => {

        return db.Highlighted.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    });

    app.get("/api/perfumes", (req, res) => {

        return db.Product.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    });

    app.get("/api/favorites/:id", (req, res) => {

        return db.Favorite.find({ userId: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    });

    app.post("/api/favorites/:id/:userId", (req, res) => {

        const favoriteData = {
            name: "",
            imgPath: "",
            price: "",
            description: "",
            size: 0,
            brand: "",
            gender: "",
            userId: req.params.userId
        }

        db.Product.findById(req.params.id)
            .then(dbModel => {
                favoriteData.name = dbModel.name;
                favoriteData.imgPath = dbModel.imgPath;
                favoriteData.price = dbModel.price;
                favoriteData.description = dbModel.description;
                favoriteData.size = dbModel.size;
                favoriteData.brand = dbModel.brand;
                favoriteData.gender = dbModel.gender;
                db.Favorite.create(favoriteData)
                    .then(function (results) {
                        console.log("This is the favorite result: ", results)
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            })
            .catch(err => res.status(422).json(err));

    });

    app.post("/api/delete/:id/:userId", (req, res) => {
        db.Favorite.findByIdAndDelete({_id: req.params.id, userId: req.params.userId}).then(
            (response) => {
                res.json(response);
            }
        ).catch(
            (err) => {
                res.json(err);
            }
        );
            
    });

    app.get("/api/user/:id", (req, res) => {
        return db.User.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.post("/api/update/:id/:tokenId", (req, res) => {
        return db.User.findOneAndUpdate({ _id: req.params.id }, {$set: { tokenId: req.params.tokenId}})
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    });

    app.post("/api/update/:id/:selectionDate/:limitDate", (req, res) => {
        return db.User.findOneAndUpdate(
            { _id: req.params.id }, 
            {$set: { selectionDate: req.params.selectionDate, limitDate: req.params.limitDate}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.post("/api/update/:id", (req, res) => {
        return db.User.findOneAndUpdate(
            { _id: req.params.id }, 
            {$set: { sampleSelected: true }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.post("/api/update/:id", (req, res) => {
        return db.User.findOneAndUpdate(
            { _id: req.params.id }, 
            {$set: { isSubscribed: true }})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
        });

}
