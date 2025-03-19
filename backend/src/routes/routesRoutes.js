const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController');

router.get('/stops',routesController.getStops);
router.get('/routes/:stop1/:stop2',routesController.getRoutes);

module.exports = router;