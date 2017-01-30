const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('../passportSetup');

//ADD IN PASSPORT AUTH TO REQUIRED ROUTES

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
router.get('/fixtures/:id', (req, res) => {})
//authenticated/authorised user can edit fixture details
router.post('/fixtures/:id', (req, res) => {})
//show results
router.get('/results', (req, res) => {})
//add result
router.post('/results', (req, res) => {})
//show details(scorecard) of specific result by id
router.get('/results/:id', (req, res) => {})
//add batting scorecard
router.post('/batCard'), (req, res) => {})
//add bowling scorecard
router.post('/bowlCard'), (req, res) => {})
//add fielding scorecard
router.post('/fieldCard'), (req, res) => {})
//show mvp points
router.get('/mvp', (req, res) => {})
//add mvp points
router.post('/mvp', (req, res) => {})

//stretch routes - fielding planner
//get fielding positions
router.get('/fieldPositions', (req, res) => {})
//save custom fieldPositions
router.post('/customFields', (req, res) => {})
//show saved custom fieldPositions
router.get('customFields', (req, res) => {})



module.exports = router
