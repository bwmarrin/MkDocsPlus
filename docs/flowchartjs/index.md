
# Overview

[Flowchart.js](http://flowchart.js.org) allows you to draw simple SVG flow chart diagrams from textual representation of the diagram.  You can find more information about Flowchart.js from it's [website](http://flowchart.js.org) or [Github](https://github.com/adrai/flowchart.js).

#### Style / Javascript Used

```
<style>
.pre {
	display:       block;
	unicode-bidi:  embed;
	font-family:   monospace;
	white-space:   pre;
}
</style>


<script src ="raphael.min.js"></script>
<script src ="flowchart.min.js"></script>
<script src ="jquery-plugin.js"></script>
```

<style>
.pre {
	display:       block;
	unicode-bidi:  embed;
	font-family:   monospace;
	white-space:   pre;
}
</style>


<script src ="raphael.min.js"></script>
<script src ="flowchart.min.js"></script>
<script src ="jquery-plugin.js"></script>


# Examples

This example embeds the chart data directly inside the markdown file then 
uses the jquery-plugin to create the chart.

```
<div class="diagram">
st=>start: Start|past:>http://www.google.com[blank]
e=>end: Ende|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes 
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
</div>

<script>
$(".diagram").flowchart();
</script>
```

<div class="diagram">
st=>start: Start|past:>http://www.google.com[blank]
e=>end: Ende|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes 
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
</div>


<script>
$(".diagram").flowchart();
</script>

<hr>
This example creates the graph entirely from javascript
```
<div id="diagram"></div>
<script>
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
</script>
```

<div id="diagram"></div>
<script>
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
</script>
