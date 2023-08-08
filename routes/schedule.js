var express = require('express');
var router = express.Router();
const controllers = require('../controllers/scheduleControllers')

router.post('/new', controllers.newSchedule);
router.get('/get/:email', controllers.getSchedule)
router.delete('/delete', controllers.deleteSchedule)
router.put('/update', controllers.updateSchedule)

module.exports = router;
