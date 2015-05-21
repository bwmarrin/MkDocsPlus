# Overview

[DataTables](https://www.datatables.net/) is a table enhancing plug-in for the jQuery Javascript library, adding sorting, paging and filtering abilities to plain HTML tables with minimal effort. You can find more information about DataTables from it's [website](https://www.datatables.net/) or [Github](https://github.com/DataTables/DataTables).


# Examples

<table id="table_id" class="display">
    <thead>
        <tr>
            <th>Library</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Flowchart.js</td>
            <td>Allows you to draw simple SVG flow chart diagrams from textual representation of the diagram.</td>
        </tr>
        <tr>
            <td>js-sequence-diagrams</td>
            <td>Draws simple SVG sequence diagrams from textual representation of the diagram </td>
        </tr>
        <tr>
            <td>DataTables</td>
            <td>Add advanced interaction controls to any HTML </td>
        </tr>
        <tr>
            <td>mermaid</td>
            <td>Generation of diagrams and flowcharts from text in a similar manner as markdown</td>
        </tr>
        <tr>
            <td>ChartJS</td>
            <td>desc</td>
        </tr>
        <tr>
            <td>VisJS</td>
            <td>desc</td>
        </tr>
        <tr>
            <td>Awesause</td>
            <td>desc</td>
        </tr>
        <tr>
            <td>Lib2me</td>
            <td>desc</td>
        </tr>
    </tbody>
</table>


<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.js"></script>

<!-- USE BELOW FOR BootStrap Themes, but there seems to be a slight problem with MkDocs Bootstrap... 
<script type="text/javascript" charset="utf8" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.css">
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.js"></script>
-->

<script>
$(document).ready( function () { $('#table_id').DataTable(); } );
</script>