# efimera

Browser based Javascript live coding environment.

# Interface

There are three possible panes, term, logs and preview.

Term is made up of blocks. 
Each block has a preview box. 
Only one preview box can be set as a full pane.

# Architecture

## Logic

+ Document
  + Block
    + Line
      + History (optional)

## Views

SessionView
  + TermView -> displays a document
    + BlockView -> displays a input / output block
      + InputView -> renders and gets input of a block
        +-> uses a BlockRenderer for displaying
      + OutputView -> displays the result of evaluate input block code
      + RenderView -> space for real time rendering from any block
  + RenderView -> Independent of blocks renderViews, but can be copied
  + LogsView

## Keyboard Shortcuts

(Those implemented are prefixed with *)

* Enter -> Evaluate single-line block
*       -> Insert new line on multi-line block

* Shift + Enter -> Insert new line
* Ctrl + Enter -> Evaluate block

* Ctrl + Backspace -> Delete line
*                  -> Delete block (if empty)

* Ctrl + Delete -> Delete current block
* Ctrl + Insert -> Insert new block after the current one (without eval)

Ctrl + Arrow Up -> Copy previous block to current one
Ctrl + Arrow Down -> Go back in history ?!
