const express = require('express')
const fs = require('fs')
const router = express.Router()
const youtubedl = require('youtube-dl')

router.get('/download/:link',(req,res,next) => {
  let link = "https://www.youtube.com/watch?v="+req.params.link
  console.log(link)
  let video = youtubedl(link)

  video.on('info', (info) => {
    console.log('Download started')
    console.log('filename: ' + info.filename)
    console.log('size: ' + info.size)
  });

  let i = Math.random()

  video.pipe(fs.createWriteStream('myvideo'+i+'.mp4'))

})

module.exports = router