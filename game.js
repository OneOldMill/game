function clickMe() {
  alert("You clicked me!");
}

function myImageView(ver) {
     //alert("myImageView v"+ver);
     var myImageList = document.getElementById("myImageList");
     var myImageValue = myImageList.options[myImageList.selectedIndex].value;
     var myImageText = myImageList.options[myImageList.selectedIndex].text;
     myImageFile = "images/" + myImageText.toLowerCase() + ".jpg";
     //myImageFile = "/images/" + myImageText + ".jpg";
     //alert("myImageFile java att= "+myImageFile);
     var img = document.createElement("img");
//     var img = new image();
     img.src = myImageFile;
//     img.width = 250;
//     img.height = 300;
//     document.write("\n");
//     document.writeln();
     document.body.appendChild(img);
//     document.appendChild(img);
//     open(myImageFile, '_blank', "School");
}

function myLinkView(ver) {
     //alert("myLinkView v"+ver);
     var myLinkList = document.getElementById("myLinkList");
     var value = myLinkList.options[myLinkList.selectedIndex].value;
     var text = myLinkList.options[myLinkList.selectedIndex].text;
     var  addr='https://' + value;
     window.open(addr, '_blank', "Game Attendance");
}
