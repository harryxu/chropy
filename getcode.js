/**
 * Get Selected HTML.
 * 
 * https://stackoverflow.com/a/5084044/157811
 */
function getHTMLOfSelection () {
  var range
  var selection = window.getSelection()
  if (selection.rangeCount > 0) {
    range = selection.getRangeAt(0)
    var clonedSelection = range.cloneContents()
    var div = document.createElement('div')
    div.appendChild(clonedSelection)
    return div.innerHTML
  }
  else {
    return ''
  }
}

getHTMLOfSelection()