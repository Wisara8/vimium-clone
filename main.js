var allTags = document.getElementsByTagName('a');

document.addEventListener("keydown", function(event) {
  // console.log(event.which);
  if (event.which == 70) {
    // console.log("you typed f");
    for (var i = 0; i < allTags.length; i++) {
      var newAtt = allTags[i];
      var tagText = newAtt.textContent;
      var tagHref = newAtt.href;
      // console.log("before anchor");
      var shortCut = document.createElement('a');
      // shortCut.textContent = tagText;
      // console.log("after anchor")
      shortCut.href = tagHref;
      shortCut.innerText = tagText;
      newAtt.appendChild(shortCut);
    }
  }
})
