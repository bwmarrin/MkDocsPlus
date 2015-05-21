var code	= 'st=>start: Start\n'
			+ 'e=>end\n'
			+ 'op=>operation: My Operation\n'
			+ 'cond=>condition: Yes or No?\n'

			+ 'st->op->cond\n'
			+ 'cond(yes)->e\n'
			+ 'cond(no)->op\n'
         ;



var diagram = flowchart.parse(code); 
diagram.drawSVG('diagram',{theme: 'hand'});