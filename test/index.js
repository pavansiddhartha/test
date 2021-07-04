function expand(e) {
  var imgboxes = document.getElementsByClassName("img-box");
  for (var i = 0; i < imgboxes.length; i++) {
    imgboxes[i].className = "img-box compress";
    imgboxes[i].getElementsByClassName("title")[0].className = "title hide";
  }
  e.className = "img-box stretch";
  e.getElementsByClassName("title")[0].className = "title visible";
}
