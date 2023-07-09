function clickMe() {
  alert("You clicked me!");
}

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

function appendNewOption(f_optionValue, f_optionText) {
    var mySelect = document.getElementById('myFriendList'),
        newOption = document.createElement('option');

    newOption.value = f_optionValue;

    // Not all browsers support textContent (W3C-compliant)
    // When available, textContent is faster (see http://stackoverflow.com/a/1359822/139010)
    if (typeof newOption.textContent === 'undefined')
    {
        newOption.innerText = f_optionText;
    }
    else
    {
        newOption.textContent = f_optionText;
    }
    mySelect.appendChild(newOption);
}

function myGroupView() {
     var xGroupList = document.getElementById("myGroupList");
     var xGroupValue = myGroupList.options[xGroupList.selectedIndex].value;
     var xGroupText = myGroupList.options[xGroupList.selectedIndex].text;

    //alert("xGroupvalue= " + xGroupValue);

    // using the function:
    removeOptions(document.getElementById('myFriendList'));

     if (xGroupValue == "1") {
            appendNewOption(1, "St Pius list")
            appendNewOption(1, "Austin")
            appendNewOption(2, "Austin2")
            appendNewOption(3,  "Amelia")
            appendNewOption(4, "Adrian")
            appendNewOption(5, "Aria")
            appendNewOption(6, "Athena")
            appendNewOption(7, "Ayla")
            appendNewOption(8, "Bianca")
            appendNewOption(9, "Cloe")
            appendNewOption(10, "Colin")
            appendNewOption(11, "Charlotte")
            appendNewOption(12, "Desmond")
            appendNewOption(13, "Ella")
            appendNewOption(14, "Ellanora")
            appendNewOption(15, "Felix")
            appendNewOption(16, "Hedley")
            appendNewOption(17, "Hudson")
            appendNewOption(18, "Julien")
            appendNewOption(19, "Kennedy")
            appendNewOption(20, "Liliana")
            appendNewOption(21, "Lochlan")
            appendNewOption(22, "Leila")
            appendNewOption(23, "Leo")
            appendNewOption(24, "Luca")
            appendNewOption(25, "Mateo")
            appendNewOption(26, "Meloni")
            appendNewOption(27, "Owen")
            appendNewOption(28, "Odhran")
            appendNewOption(29, "Wyatt")
            appendNewOption(30, "Dempsi")
            appendNewOption(31, "Ierullo")
            appendNewOption(32, "2022 JK SK")
            appendNewOption(33, "2023 JK SK")

            var img = document.createElement("img");
            img.src = "images/st pius.jpg";
            document.body.appendChild(img);
    }
     if (xGroupValue == "2") {
            appendNewOption(1, "Paw Patrol list")
            appendNewOption(1, "Ryder")
            appendNewOption(2, "Skye")
            appendNewOption(3, "Rocky")
            appendNewOption(4, "Rubble")
            appendNewOption(5, "Zuma")
            appendNewOption(6, "Marshall")
            appendNewOption(7, "Chase")
            appendNewOption(8, "Everest")
            appendNewOption(9, "Garfield")

            var img = document.createElement("img");
            img.src = "images/ryder.jpg";
            document.body.appendChild(img);
    }

    if (xGroupValue == "3") {
            appendNewOption(1, "A-Z-9 list")
            appendNewOption(1, "A-Z-9 list")
            appendNewOption(2, "A")
            appendNewOption(3, "B")
            appendNewOption(4, "C")
            appendNewOption(5, "D")
            appendNewOption(6, "E")
            appendNewOption(7, "F")
            appendNewOption(8, "G")
            appendNewOption(9, "H")
            appendNewOption(10, "I")
            appendNewOption(11, "J")
            appendNewOption(12, "K")
            appendNewOption(13, "L")
            appendNewOption(14, "M")
            appendNewOption(15, "N")
            appendNewOption(16, "O")
            appendNewOption(17, "P")
            appendNewOption(18, "Q")
            appendNewOption(19, "R")
            appendNewOption(20, "S")
            appendNewOption(21, "T")
            appendNewOption(22, "U")
            appendNewOption(23, "V")
            appendNewOption(24, "W")
            appendNewOption(25, "X")
            appendNewOption(26, "Y")
            appendNewOption(27, "Z")
            appendNewOption(30, "0")
            appendNewOption(31, "1")
            appendNewOption(32, "2")
            appendNewOption(33, "3")
            appendNewOption(34, "4")
            appendNewOption(35, "5")
            appendNewOption(36, "6")
            appendNewOption(37, "7")
            appendNewOption(38, "8")
            appendNewOption(39, "9")

            var img = document.createElement("img");
            img.src = "images/a-z-9.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "4") {
            appendNewOption(1,"Baseball list")
            appendNewOption(1,"Austin")
            appendNewOption(2,"Aria-b")
            appendNewOption(3,"Blake")
            appendNewOption(4,"David")
            appendNewOption(5,"Jack")
            appendNewOption(6,"Joshua")
            appendNewOption(7,"Kaidon")
            appendNewOption(8,"Maisie")
            appendNewOption(9,"Matthew")
            appendNewOption(10,"Sophia")
            appendNewOption(11,"Vanessa")

            var img = document.createElement("img");
            img.src = "images/baseball.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "5") {
            appendNewOption(1,"Lego list")
            appendNewOption(1,"Austin")
            appendNewOption(2,"Billy")
            appendNewOption(3,"Issac")
            appendNewOption(4,"Jacob")
            appendNewOption(5,"Jet")
            appendNewOption(6,"Oscar")
            appendNewOption(7,"Owen")
            appendNewOption(8,"Zack")
            appendNewOption(9,"Veronica-t")

            var img = document.createElement("img");
            img.src = "images/lego.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "6") {
            appendNewOption(1,"MLB list")
            appendNewOption(1,"Toronto Blue Jays")
            appendNewOption(2,"Tampa Bay Rays")
            appendNewOption(3,"New York Yankees")
            appendNewOption(4,"Boston Redsox")
            appendNewOption(5,"Baltimore Orioles")
            appendNewOption(6,"Chicago White Sox")
            appendNewOption(7,"Cleveland Indians")
            appendNewOption(8,"Detroit Tigers")
            appendNewOption(9,"Kansas City Royals")
            appendNewOption(10,"Minnesota Twins")
            appendNewOption(11,"Houston Astros")
            appendNewOption(12,"Los Angeles Angels")
            appendNewOption(13,"Oakland Athletic")
            appendNewOption(14,"Seattle Mariners")
            appendNewOption(15,"Toronto Blue Jays")
            appendNewOption(16,"Texas Rangers")
            appendNewOption(17,"Atlanta Braves")
            appendNewOption(18,"Miami Marlins")
            appendNewOption(19,"New York Mets")
            appendNewOption(20,"Philadelphia Phillies")
            appendNewOption(21,"Washington Nationals")
            appendNewOption(22,"Chicago Cubs")
            appendNewOption(23,"Cincinnati Reds")
            appendNewOption(24,"Milwaukee Brewers")
            appendNewOption(25,"Pittsburgh Pirates")
            appendNewOption(26,"StLouis Cardinals")
            appendNewOption(27,"Arizona Diamondbacks")
            appendNewOption(28,"Colorado Rockies")
            appendNewOption(29,"Los Angeles Dodgers")
            appendNewOption(30,"San Diego Padres")
            appendNewOption(31,"San Francisco Giants")

            var img = document.createElement("img");
            img.src = "images/mlb.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "7") {
            appendNewOption(1,"NFL list")
            appendNewOption(1,"NFL1")

            var img = document.createElement("img");
            img.src = "images/nfl.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "8") {
            appendNewOption(1,"NBA list")
            appendNewOption(1,"NBA1")

            var img = document.createElement("img");
            img.src = "images/nba.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "9") {
            appendNewOption(1,"NHL list")
            appendNewOption(1,"NHL1")

            var img = document.createElement("img");
            img.src = "images/nhl.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "10") {
            appendNewOption(1,"Car list")
            appendNewOption(1,"Subaru")
            appendNewOption(2,"Toyota")
            appendNewOption(3,"Lexus")

            var img = document.createElement("img");
            img.src = "images/car.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "11") {
            appendNewOption(1,"Truck list")
            appendNewOption(1,"Garbage truck")
            appendNewOption(2,"Excavator")

            var img = document.createElement("img");
            img.src = "images/truck.jpg";
            document.body.appendChild(img);
    }

    return false;
}

function myFriendView() {
     //alert("myFriendView v"+ver);
     var myFriendList = document.getElementById("myFriendList");
     var myFriendValue = myFriendList.options[myFriendList.selectedIndex].value;
     var myFriendText = myFriendList.options[myFriendList.selectedIndex].text;
     myFriendFile = "images/" + myFriendText.toLowerCase() + ".jpg";
     //myFriendFile = "/images/" + myFriendText + ".jpg";
     //alert("myFriendFile java att= "+myFriendFile);
     var img = document.createElement("img");
//     var img = new Friend();
     img.src = myFriendFile;
//     img.width = 250;
//     img.height = 300;
//     document.write("\n");
//     document.writeln();
     document.body.appendChild(img);
//     document.appendChild(img);
//     open(myFriendFile, '_blank', "School");
}

function myImageView() {
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

function myLinkView() {
     //alert("myLinkView v"+ver);
     var myLinkList = document.getElementById("myLinkList");
     var value = myLinkList.options[myLinkList.selectedIndex].value;
     var text = myLinkList.options[myLinkList.selectedIndex].text;
     var  addr='https://' + value;
     window.open(addr, '_blank', "Game Attendance");
}
