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

/**
 * Copy selection as plain text.
 */
function copyPlainText(info, tab) {
  chrome.tabs.executeScript({
    file: './getcode.js'
  }, function() {

    chrome.tabs.executeScript({code: 'getPlainText()'}, function(results) {
      copyToClipboard(results[0])
    })

  });
}

function copyLinkUrls(info, tab) {
  chrome.tabs.executeScript({
    file: './getcode.js'
  }, function() {

    chrome.tabs.executeScript({code: 'getLinks()'}, function(results) {
      copyToClipboard(results[0])
    })

  });
}

function copyHtmlCode(info, tab) {
  chrome.tabs.executeScript({
    file: './getcode.js'
  }, function() {

    chrome.tabs.executeScript({code: 'getHTMLOfSelection()'}, function(results) {
      copyToClipboard(results[0])
    })

  });
}

chrome.contextMenus.create({
  id: 'chropy',
  contexts: ['selection'] ,
  title: 'chropy'
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'Plain text',
  onclick: copyPlainText
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'Link URLs',
  onclick: copyLinkUrls
})

chrome.contextMenus.create({
  parentId: 'chropy',
  contexts: ['selection'] ,
  title: 'HTML Code',
  onclick: copyHtmlCode
})
