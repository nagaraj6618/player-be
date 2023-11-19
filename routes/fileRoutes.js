const express = require('express')
const {getAllFile, createFileUpload, getByFileName, uploadfile, getAllFiles} = require('../controllers/fileControllers.js')
const fileUpload = require('../middleware/fileUpload.js')
const router = express.Router()

router.route('/').get(getAllFiles)
router.route('/upload').post(createFileUpload)
router.route('/upload/audio').post(fileUpload.single('file'),uploadfile)
router.route('/upload/video').post(fileUpload.single('file'),uploadfile)
router.get('/assets/:fileName',getByFileName)
module.exports = router