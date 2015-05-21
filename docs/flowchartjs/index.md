<style>
.pre {
	display:       block;
	unicode-bidi:  embed;
	font-family:   monospace;
	white-space:   pre;
}
</style>



# Overview

[Flowchart.js](http://flowchart.js.org) allows you to draw simple SVG flow chart diagrams from textual representation of the diagram.  You can find more information about Flowchart.js from it's [website](http://flowchart.js.org) or [Github](https://github.com/adrai/flowchart.js).


# Examples

<div id="diagram"></div>


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




<script src ="raphael-min.js"></script>
<script src ="flowchart-1.4.0.js"></script>
<script src ="jquery-plugin.js"></script>
<script src ="data.js"></script>

<script>
$(".diagram").flowchart();
</script>