function clickMe() {
  alert("You clicked me!");
}

function myImageView() {
     var myImageList = document.getElementById("myImageList");
     var myImageValue = myImageList.options[myImageList.selectedIndex].value;
     var myImageText = myImageList.options[myImageList.selectedIndex].text;
     //myImageFile = "/images/" + myImageText + ".jpg";
     myImageFile = myImageText + ".jpg";
     var img = document.createElement("img");
     img.src = myImageFile;
     img.width = 250;
     img.height = 300;
//     document.write("\n");
//     document.writeln();
     document.body.appendChild(img);
}

function myLinkView() {
     var myLinkList = document.getElementById("myLinkList");
     var value = myLinkList.options[myLinkList.selectedIndex].value;
     var text = myLinkList.options[myLinkList.selectedIndex].text;
     var  addr='https://' + value;
     window.open(addr, '_blank', "Game Attendance");
}
