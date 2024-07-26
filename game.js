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
            appendNewOption(1, "St Pius - Grade 1")
            appendNewOption(1, "1 Austin Alfonsi's birthday is October 2")
            appendNewOption(2, "2 Ayla Briffa's birthday is November 11-Poppy Day")
            appendNewOption(3, "3 Charlotte Currie's birthday is April 6")
            appendNewOption(4, "4 Chloe Brown's birthday is December 1")
            appendNewOption(5, "5 Chloe Lombardo's birthday is March 23")
            appendNewOption(6, "6 Ellanora Sousa's birthday is August 22 ")
            appendNewOption(7, "7 Ella Pastor's birthday is August 6")
            appendNewOption(8, "8 Georgena Hobbis's birthday is April 7")
            appendNewOption(9, "9 Hedley Rafferty's birthday is August 9")
            appendNewOption(10, "10 Isabel Meier's birthday is May 7")
            appendNewOption(11, "11 Isla Hopkins's birthday is August 2")
            appendNewOption(12, "12 Julien Guy hadduck's birthday is September 26")
            appendNewOption(13, "13 Lochlan Mc man's birthday is October 4")
            appendNewOption(14, "14 Maisie Mc crakan's birthday is October 23")
            appendNewOption(15, "15 Paul Mclaughlin miranda's birthday is May 28")
            appendNewOption(16, "16 Remy Payne's birthday is March 14")
            appendNewOption(17, "17 Matteo Biggart's birthday is February 11")
            appendNewOption(18, "18 Lucas Sambrske's birthday is August 23")

            var img = document.createElement("img");
            img.src = "images/grade1.jpg";
            document.body.appendChild(img);
    }
     if (xGroupValue == "1C") {
            appendNewOption(1, "2023 Grade 1 Christmas concert")

            var img = document.createElement("img");
            img.src = "images/2023 x-mas concert.jpg";
            document.body.appendChild(img);
    }
     if (xGroupValue == "1A") {
            appendNewOption(1, "St Pius - SK")
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
            appendNewOption(30, "Dempsi-t")
            appendNewOption(31, "Ierullo-t")
            appendNewOption(32, "2022 JK SK")
            appendNewOption(33, "2023 JK SK")

            var img = document.createElement("img");
            img.src = "images/st pius.jpg";
            document.body.appendChild(img);
    }
     if (xGroupValue == "2A") {
            appendNewOption(1, "Sign Language list")

            var img = document.createElement("img");
            img.src = "images/sign language.jpg";
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
            img.src = "images/mg baseball.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "5") {
            appendNewOption(1,"Lego 2023 list")
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
            appendNewOption(1,"Arizona Cardinals")
            appendNewOption(2,"Atlanta Falcons")
            appendNewOption(3,"Baltimore Ravens")
            appendNewOption(4,"Buffalo Bills")
            appendNewOption(5,"Carolina Panthers")
            appendNewOption(6,"Chicago Bears")
            appendNewOption(7,"Cincinnati Bengals")
            appendNewOption(8,"Cleveland Browns")
            appendNewOption(9,"Dallas Cowboys")
            appendNewOption(10,"Denver Broncos")
            appendNewOption(11,"Detroit Lions")
            appendNewOption(12,"Green Bay Packers")
            appendNewOption(13,"Houston Texans")
            appendNewOption(14,"Indianapolis Colts")
            appendNewOption(15,"Jacksonville Jaguars")
            appendNewOption(16,"Kansas City Chiefs")
            appendNewOption(17,"Las Vegas Raiders")
            appendNewOption(18,"Los Angeles Chargers")
            appendNewOption(19,"Los Angeles Rams")
            appendNewOption(20,"Miami Dolphins")
            appendNewOption(21,"Minnesota Vikings")
            appendNewOption(22,"New England Patriots")
            appendNewOption(23,"New Orleans Saints")
            appendNewOption(24,"New York Giants")
            appendNewOption(25,"New York Jets")
            appendNewOption(26,"Philadelphia Eagles")
            appendNewOption(27,"Pittsburgh Steelers")
            appendNewOption(28,"San Francisco 49ers")
            appendNewOption(29,"Seattle Seahawks")
            appendNewOption(30,"Tampa Bay Buccaneers")
            appendNewOption(31,"Tennessee Titans")
            appendNewOption(32,"Washington Commanders")

            var img = document.createElement("img");
            img.src = "images/nfl.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "8") {
            appendNewOption(1,"NBA list")
            appendNewOption(1,"Atlanta Hawks")
            appendNewOption(2,"Boston Celtics")
            appendNewOption(3,"Brooklyn Nets")
            appendNewOption(4,"Charlotte Hornets")
            appendNewOption(5,"Chicago Bulls")
            appendNewOption(6,"Cleveland Cavaliers")
            appendNewOption(7,"Dallas Mavericks")
            appendNewOption(8,"Denver Nuggets")
            appendNewOption(9,"Detroit Pistons")
            appendNewOption(10,"Golden State Warriors")
            appendNewOption(11,"Houston Rockets")
            appendNewOption(12,"Indiana Pacers")
            appendNewOption(13,"Los Angeles Clippers")
            appendNewOption(14,"Los Angeles Lakers")
            appendNewOption(15,"Memphis Grizzlies")
            appendNewOption(16,"Miami Heat")
            appendNewOption(17,"Milwaukee Bucks")
            appendNewOption(18,"Minnesota Timberwolves")
            appendNewOption(19,"New Orleans Pelicans")
            appendNewOption(20,"New York Knicks")
            appendNewOption(21,"Oklahoma City Thunder")
            appendNewOption(22,"Orlando Magic")
            appendNewOption(23,"Philadelphia 76ers")
            appendNewOption(24,"Phoenix Suns")
            appendNewOption(25,"Portland Trail Blazers")
            appendNewOption(26,"Sacramento Kings")
            appendNewOption(27,"San Antonio Spurs")
            appendNewOption(28,"Toronto Raptors")
            appendNewOption(29,"Utah Jazz")
            appendNewOption(30,"Washington Wizards")

            var img = document.createElement("img");
            img.src = "images/nba.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "9") {
            appendNewOption(1,"NHL list")
            appendNewOption(1,"Anaheim Ducks")
            appendNewOption(2,"Arizona Coyotes")
            appendNewOption(3,"Boston Bruins")
            appendNewOption(4,"Buffalo Sabres")
            appendNewOption(5,"Calgary Flames")
            appendNewOption(6,"Carolina Hurricanes")
            appendNewOption(7,"Chicago Blackhawks")
            appendNewOption(8,"Colorado Avalanche")
            appendNewOption(9,"Columbus Blue Jackets")
            appendNewOption(10,"Dallas Stars")
            appendNewOption(11,"Detroit Red Wings")
            appendNewOption(12,"Edmonton Oilers")
            appendNewOption(13,"Florida Panthers")
            appendNewOption(14,"Los Angeles Kings")
            appendNewOption(15,"Minnesota Wild")
            appendNewOption(16,"Montreal Canadians")
            appendNewOption(17,"Nashville Predators")
            appendNewOption(18,"New Jersey Devils")
            appendNewOption(19,"New York Islanders")
            appendNewOption(20,"New York Rangers")
            appendNewOption(21,"Ottawa Senators")
            appendNewOption(22,"Pittsburgh Penguins")
            appendNewOption(23,"San Jose Sharks")
            appendNewOption(24,"Seattle Kraken")
            appendNewOption(25,"Tampa Bay Lightning")
            appendNewOption(26,"Toronto Maple Leafs")
            appendNewOption(27,"Vancouver Canucks")
            appendNewOption(28,"Vegas Golden Knights")
            appendNewOption(29,"Washington Capitals")
            appendNewOption(30,"Winnipeg Jets")

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

     if (xGroupValue == "12") {
            appendNewOption(1,"Jack of Sports list 2023")
            appendNewOption(1,"Alexander")
            appendNewOption(2,"Ben")
            appendNewOption(3,"Blake")
            appendNewOption(4,"Ellia")
            appendNewOption(5,"Evelyn")
            appendNewOption(6,"Filia")
            appendNewOption(7,"Julien")
            appendNewOption(8,"Thomas-i")

            var img = document.createElement("img");
            img.src = "images/jackofsports.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "13") {
            appendNewOption(1,"Art Camp list")
            appendNewOption(1,"Keyin")
            appendNewOption(2,"Hugo")
            appendNewOption(3,"Ian")
            appendNewOption(4,"Ethan")
            appendNewOption(5,"Thelis")
            appendNewOption(6,"Hathen")
            appendNewOption(7,"Philix")
            appendNewOption(8,"Wallace")
            appendNewOption(9,"Jack")
            appendNewOption(10,"Reed")
            appendNewOption(11,"Jennifer-i")
            appendNewOption(12,"Sofia-i")
            appendNewOption(13,"Gisel-i")

            var img = document.createElement("img");
            img.src = "images/jackofsports.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "14") {
            appendNewOption(1,"aqua list")
            appendNewOption(1,"splash pad")
            appendNewOption(2,"Kensi")
            appendNewOption(3,"Ellette")

            var img = document.createElement("img");
            img.src = "images/aqua.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "15") {
            appendNewOption(1,"Zebbi")
            appendNewOption(1,"Hugh")
            appendNewOption(2,"Keroin")
            appendNewOption(3,"Damian")
            appendNewOption(4,"Damian M")
            appendNewOption(5,"Graham")
            appendNewOption(6,"Kauner")
            appendNewOption(7,"Anthony")
            appendNewOption(8,"Ronnen G2")
            appendNewOption(9,"Ryan G3")
            appendNewOption(10,"Lucas G3")
            appendNewOption(11,"Hudson G3")
            appendNewOption(12,"Charlie G5")
            appendNewOption(13,"Douclin G6")

            var img = document.createElement("img");
            img.src = "images/school_friends.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "16") {
            appendNewOption(1,"Lego 2024 list")
            appendNewOption(1,"Austin")
            appendNewOption(2,"Alexandra")
            appendNewOption(3,"Wolfe")
            appendNewOption(4,"Julien")
            appendNewOption(5,"Julie-instructor")
            appendNewOption(6,"Max-instructor")
            appendNewOption(7,"Max")
            appendNewOption(8,"Sebastien")
            appendNewOption(9,"Rebecca")
            appendNewOption(10,"Zane")
            appendNewOption(11,"Zax")
            appendNewOption(12,"Vincent")
            appendNewOption(13,"Gabin")
            appendNewOption(14,"Jackson")
            appendNewOption(15,"Ella")
            appendNewOption(16,"Sebby")
            appendNewOption(17,"Leo D")
            appendNewOption(18,"Leo J")

            var img = document.createElement("img");
            img.src = "images/lego.jpg";
            document.body.appendChild(img);
    }

     if (xGroupValue == "17") {
            appendNewOption(1,"Jack of Sports list 2024")
            appendNewOption(1,"Austin")
            appendNewOption(2,"Sophy - Coach/instructor")
            appendNewOption(3,"Marina - Coach/instructor")
            appendNewOption(4,"Cole")
            appendNewOption(5,"Max")
            appendNewOption(6,"Sophy")
            appendNewOption(7,"Charlie")
            appendNewOption(8,"Satiago")
            appendNewOption(9,"Eric")
            appendNewOption(10,"Ronan B - Coach")
            appendNewOption(11,"Rona - Coach")
            appendNewOption(12,"Sam")
            appendNewOption(13,"Maddy")
            appendNewOption(14,"Ellis")

            var img = document.createElement("img");
            img.src = "images/jackofsports2024.jpg";
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
