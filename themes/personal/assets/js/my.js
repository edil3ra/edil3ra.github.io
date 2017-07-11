// outline-container-sec-3
var skills =  {
  patterns: /(\{1\}|\{2\}|\{3\}|\{4\})/g,
  low: {
	pattern: '{1}',
	content: '♟',
	color: 'black',
  },
  medium: {
	pattern: '{2}',
	content: '♜',
	color: 'blue',
  },
  high: {
	pattern: '{3}',
	content: '♛',
	color: 'violet',
  },
  master: {
	pattern: '{4}',
	content: '♚',
	color: 'gold',
  },
}

var el = $('.post-cv #outline-container-sec-1')
var content = el.html()
if(content) {
  var contentReplaced = content.replace(skills.patterns, function(x) {
	switch(x) {
	case skills.low.pattern:
	  return '<span style="color:' + skills.low.color + ';">' + skills.low.content + '</span>'
	  break;

	case skills.medium.pattern:
	  return '<span style="color:' + skills.medium.color + ';">' + skills.medium.content + '</span>'
	  break;
	  
	case skills.high.pattern:
	  return '<span style="color:' + skills.high.color + ';">' + skills.high.content + '</span>'
	  break;

	case skills.master.pattern:
	  return '<span style="color:' + skills.master.color + ';">' + skills.master.content + '</span>'
	  break;
	}
  })

  el.html(contentReplaced)
}

// add pdf odt docx links
// it's ideal to do it in javascript so it won't messed up with org export
var cvs_info = [
  {
    url: '/assets/files/cv.pdf',
    text: 'pdf',
    icon: 'fa fa-file-pdf-o fa-2x',
  },
  {
    url: '/assets/files/cv.docx',
    text: 'docx',
    icon: 'fa fa-file-word-o fa-2x',
  },
  {
    url: '/assets/files/cv.odt',
    text: 'odt',
    icon: 'fa fa-file-o fa-2x',
  }
]
var cvs = ''
cvs += '<ul>'
for(cv of cvs_info) {
  cvs += '<li><a href="' + cv.url + '" title="' + cv.text + ' "target="_blanck"> <i aria-hidden="true" class="' + cv.icon + '"></i> </a></li>' 
}
cvs += '</ul>'


var el = $('.post-cv header')
el.append(cvs)
var h1 = $('.post-cv header h1')
var ul = $('.post-cv header ul')
var lis = $('.post-cv header ul li')
el.addClass('my-post-cv-el')
h1.addClass('my-post-cv-h1')
ul.addClass('my-post-cv-ul')
lis.addClass('my-post-cv-lis')
