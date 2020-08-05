# efimera

Browser based Javascript live coding environment.

# Interface

There are three possible panes, term, logs and preview.

Term is made up of blocks. 
Each block has a preview box. 
Only one preview box can be set as a full pane.

# Architecture

## Logic

Session
  + Document
    + Block
	  + Line
	    + History (optional)

## Views

SessionView
  + PaneView
    + TermView -> displays a document
	  + BlockView -> displays a input / output block
        + InputView -> renders and gets input of a block
	      +-> uses a BlockRenderer for displaying
        + OutputView -> displays the result of evaluate input block code
        + RenderView -> space for real time rendering from any block
    + RenderView
    + LogsView
