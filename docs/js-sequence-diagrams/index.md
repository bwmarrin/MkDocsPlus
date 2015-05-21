# Overview

[js-sequence-diagrams](https://bramp.github.io/js-sequence-diagrams/) allows you to draws simple SVG sequence diagrams from textual representation of the diagram. You can find more information about js-sequence-diagrams from it's [website](https://bramp.github.io/js-sequence-diagrams/) or [Github](https://github.com/bramp/js-sequence-diagrams).


# Examples

<div id="diagram"></div>

<hr>

<div class="diagram">
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
</div>

<hr>


<script src="underscore-min.js"></script>
<script src="raphael-min.js"></script>
<script src="sequence-diagram-min.js"></script>

<script> 
var diagram = Diagram.parse("A->B: Does something");
diagram.drawSVG('diagram');
</script>

<script>
$(".diagram").sequenceDiagram({theme: 'simple'});
</script>