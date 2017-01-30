const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('../passportSetup');

//get players
router.get('/players', (req, res) => {})
//add player
router.post('/players', (req, res) => {})
//get specific player
router.get('/players/:id', (req, res) => {})
//authenticated user can edit profile
router.post('/players/:id', (req, res) => {})
//get fixtures
router.get('/fixtures', (req, res) => {})
//add fixtures
router.post('/fixtures', (req, res) => {})
//get fixture by id

module.exports = router
