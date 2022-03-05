const router = require("express").Router()
const templates = require("../public/templates/templates.js")

//routes
router.get('/', (req, res) => {res.send(templates.home) })
router.get('/day1', (req, res) => {res.send(templates.day1) })
router.get('/day2', (req, res) => {res.send(templates.day2) })
router.get('/day3', (req, res) => {res.send(templates.day3) })
router.get('/day4', (req, res) => {res.send(templates.day4) })

module.exports = {
    router
};