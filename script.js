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

/**
 * https://stackoverflow.com/a/12693636/157811
 */
function copyToClipboard (str, mimetype) {
  mimetype = mimetype || 'text/plain'
  document.oncopy = function(event) {
    event.clipboardData.setData(mimetype, str);
    event.preventDefault();
  };
  document.execCommand('copy', false, null);
}

function copyPlainText(info, tab) {
  console.log(info.selectionText)
  copyToClipboard(info.selectionText)
}

function copyLinkUrls() {
  chrome.tabs.executeScript( {
    code: "window.getSelection()"
  }, function(results) {
    var selection = results[0]
    console.log(selection)
    alert(selection.toString())
  });
  // alert(str)
  // copyToClipboard(str)

}

function copyHtmlCode() {

}

chrome.contextMenus.create({
  id: 'chropy',
  contexts: ['selection'] ,
  title: 'chropy'
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'Copy plain text',
  onclick: copyPlainText
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'Copy link urls',
  onclick: copyLinkUrls
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'Copy html code',
  onclick: copyHtmlCode
})
