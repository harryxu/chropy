function getPlainText () {
  return document.getSelection().toString()
}

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

function getLinks () {
  var html = getHTMLOfSelection()
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html')
  var links = doc.querySelectorAll('a')
  var urls = []

  links.forEach(function (link) {
    urls.push(link.href)
  })
  
  return urls.join("\n")
}
