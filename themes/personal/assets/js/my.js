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
