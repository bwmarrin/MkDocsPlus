# Overview


[mermaid](http://knsv.github.io/mermaid/) allows you to create diagrams and flowcharts from text in a similar manner as markdown. You can find more information about mermaid from it's [website](http://knsv.github.io/mermaid/) or [Github](https://github.com/knsv/mermaid).


<link rel="stylesheet" type="text/css" href="mermaid.css">
<script src="mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>


# Examples



<div class="mermaid">
graph TB
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
</div>
<hr>


<div class="mermaid">
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
</div>
<hr>


<div class="mermaid">
graph TB
         subgraph one
         a1-->a2
         end
         subgraph two
         b1-->b2
         end
         subgraph three
         c1-->c2
         end
         c1-->a2
</div>
<hr>


<div class="mermaid">
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A subgraph
        od>Odd shape]-- Two line<br>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
</div>
<hr>


<div class="mermaid">
sequenceDiagram
    Bruce->>Steve: Hey, can we get a raise?
    Steve-->>Bruce: Sorry, I got The Look.
    Bruce->>Steve: What look?
    Steve-->>Bruce: The Look.
    Bruce->>Steve: Uh, what does that mean?
    Steve-->>Bruce: Nancy gave me The Look.
    Bruce->>Steve: So, did you even ask her?
    Steve-->>Bruce: No. I got The Look.
    Bruce->>Steve: So, do we get our raise or not?
    Steve-->>Bruce: No. Nothing I can do.
</div>
<hr>


<div markdown="block" class="mermaid">
sequenceDiagram
    Alice ->> Bob: Hello Bob, how are you?
    Bob-->>John: How about you John?
    Bob--x Alice: I am good thanks!
    Bob-x John: I am good thanks!
    Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

    Bob-->Alice: Checking with John...
    Alice->John: Yes... John, how are you?  
</div>
<hr>


<div markdown="block" class="mermaid">
sequenceDiagram
    loop Daily query
        Alice->>Bob: Hello Bob, how are you?
        alt is sick
            Bob->>Alice: Not so good :(
        else is well
            Bob->>Alice: Feeling fresh like a daisy
        end

        opt Extra response
            Bob->>Alice: Thanks for asking
        end
    end
</div>
<hr>


<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts<br/>prevail...
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
</div>
<hr>


<div markdown="block" class="mermaid">
gantt
    title A Gantt Diagram

    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    anther task      : 24d
</div>

<hr>

# Instructions
This was accomplished just by including the mermaid.min.js and mermain.css files
with one slight modification to the mermain.css file which is shown below.

```
/** Section styling */
.section {
  stroke: none; 
/* below commented out because it conflicts with the readthedocs theme */
/*  opacity: 0.2; */
}
```
