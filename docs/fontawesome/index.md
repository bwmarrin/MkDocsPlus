# Overview


[Font Awesome](https://fortawesome.github.io) gives you scalable
 vector icons that can instantly be customized -- size, color, drop shadow, and 
anything that can be done with the power of CSS.

[Font Awesome Markdown](http://bmcorser.github.io/fontawesome-markdown/) A 
Markdown extension that looks for things like `:fa-coffee:` and replaces them 
with the Font Awesome icon markup.

#### Style / Javascript Used
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
```

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

# Examples

This  example uses the normal font awesome markup.
```
<i class="fa fa-camera-retro fa-lg"></i> fa-lg
<i class="fa fa-camera-retro fa-2x"></i> fa-2x
<i class="fa fa-camera-retro fa-3x"></i> fa-3x
<i class="fa fa-camera-retro fa-4x"></i> fa-4x
<i class="fa fa-camera-retro fa-5x"></i> fa-5x
```
<i class="fa fa-camera-retro fa-lg"></i> fa-lg
<i class="fa fa-camera-retro fa-2x"></i> fa-2x
<i class="fa fa-camera-retro fa-3x"></i> fa-3x
<i class="fa fa-camera-retro fa-4x"></i> fa-4x
<i class="fa fa-camera-retro fa-5x"></i> fa-5x

<hr>

This example use the fontawesome_markdown extension
```
i <3 :fa-coffee: and I <3 :fa-beer: and I'll buy wayland ten of both. 
```

i <3 :fa-coffee: and I <3 :fa-beer: and I'll buy wayland ten of both. 




* ** Reference ** : [Github Issue #1](https://github.com/mkdocs/mkdocs/issues/909)
* ** Reference ** : [Github Issue #2](https://github.com/bmcorser/fontawesome-markdown/issues/6)


For this example, you must install the fontawesome_markdown extension with
pip.  Right now version 0.2.5 is the latest but it doesn't work so you have
to install the latest version from the github repository.  You can do that
with the below command

```
pip install https://github.com/bmcorser/fontawesome-markdown/archive/master.zip
```
You may need to include **--upgrade** in the above command if you already have 
this extension installed.

Then add the below to your mkdocs.yml file.
```
markdown_extensions:
      - fontawesome_markdown
```

That's it.
