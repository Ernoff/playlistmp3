const express = require('express')
const router = express.Router()
const youtubedl = require('youtube-dl')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})


router.post('/download/:link',(req,res,next) => {
	var link = req.params.link;
	var video = youtubedl(link);

	video.on('info', function(info) {
	  console.log('Download started');
	  console.log('filename: ' + info.filename);
	  console.log('size: ' + info.size);
	});

	var i = Math.random();
 
video.pipe(fs.createWriteStream('myvideo'+i+'.mp4'));

}

module.exports = router
