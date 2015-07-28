var fs = require('fs')
var net = require('net')
var port = 2000

var responses = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]


//console.log(responses[chooseResponse])

var server = net.createServer(function(c){
	console.log('client connected')


c.on('data', function(data){
	console.log(data.toString().trim())

	var chooseResponse = Math.floor(Math.random()*responses.length)
	
	var question = data.toString('utf-8')

		if (/[\s\w]+\?/g.test(question)){
			c.write(responses[chooseResponse])
		}else{
			console.log('Ask a question')
		}
	})


	c.on('end', function(){
		console.log('client disconnected')
	})
})

server.listen(port, function(){
	console.log('listening on ' + port)
})



