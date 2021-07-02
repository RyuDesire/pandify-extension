function pandify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/collection/9967035/${img.width}x${img.height}?${Math.random()}`;
    img.style= `height: auto;`
    img.srcset = img.src;
    img.datasrc = `https://source.unsplash.com/collection/9967035/${img.width}x${img.height}?${Math.random()}`;
  })
    document.querySelectorAll('i').forEach( (i) => {
    i.src=`https://img.icons8.com/ios-glyphs/30/000000/panda.png"`;
    i.datasrc = `https://img.icons8.com/ios-glyphs/30/000000/panda.png"`;
  })
}
// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // actions based on the request (which corresponds to the object we sent in our message)
    if (request.action === 'pandify') pandify();
  }
);
