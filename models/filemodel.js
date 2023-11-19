const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema(
   {
      audio: {
         type: String,
         required: true,
         unique: true,
      },
      video: {
         type: String,
         required: true,
         unique: true,
      },
      type: {
         type: String,
         required: true,
      }
   }, {
   collection: 'files'
}
)

module.exports = mongoose.model('files', fileSchema)