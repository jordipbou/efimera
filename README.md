# efimera

Browser based Javascript live coding environment.

# Interface

There are three possible panes, term, logs and preview.

Term is made up of blocks. Each block has a preview box. Only one preview box can be set as a full pane.

# Architecture

## Logic

Session
  + Document
    + Block
	  + History

## Views

SessionView
  + PaneView
    + TermView
      + InputView -> displays a block
      + OutputView -> displays the result of evaluate input block code
      + RenderView -> space for real time rendering from any block
    + RenderView
    + LogsView
