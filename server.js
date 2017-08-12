var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
   'article-1':{
    title:"Article-one|Anand singh",
    heading:"Article One",
    date:"12 august 2017",
    content:
    `<p>This is the content of My First article.</p>`

},
    'article-2':{
    title:"Article-two|Anand singh",
    heading:"Article two",
    date:"13 august 2017",
    content:
    `<p>This is the content of My Second article.</p>`},
    'article-3':{
    title:"Article-three|Anand singh",
    heading:"Article Three",
    date:"14 august 2017",
    content:
    `<p>This is the content of third Article</p>`
    
    }
};

function createTemplate (data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate=`
<html>
<head>
<title>${title}</title>
<meta name="viewport" content="view=device-width initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
<div>
<a href="/">Home</a>
</div>
<hr/>
<h3>${heading}</h3>
<div>
${date}
</div>
<div>
${content}
</div>
</div>
</body>
</html>`
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-2', function (req,res) {
   res.send(createTemplate(article2)); 
});

app.get('/article-3', function (req,res) {
    res.send(createTemplate(article3));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
