var imageSource = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];
var imageHolder = []

function Item(image) {
  this.votes = 0;
  this.name = image;
  this.path = "images/" + image + ".jpg";
  imageHolder.push(this);
};

function imageCaller(){
  for (var i = 0; i < imageSource.length; i++){
    new Item(imageSource[i]);
  }
};

imageCaller();

var tracker = {
  imageblock: document.getElementById("imageblock"),
  choiceOne: document.getElementById("choiceOne"),
  choiceTwo: document.getElementById("choiceTwo"),
  choiceThree: document.getElementById("choiceThree"),
  voteCounter: 0,
  picker: function() {
    return Math.floor(Math.random() * imageSource.length);
  },
  printImages: function (){
    var pickOne = this.picker();
    choiceOne.src = imageHolder[pickOne].path;
    choiceOne.name = imageHolder[pickOne].name;
    var pickTwo = this.picker();
    choiceTwo.src = imageHolder[pickTwo].path;
    choiceTwo.name = imageHolder[pickTwo].name;
    console.log(choiceOne.name);
    while (choiceOne.name === choiceTwo.name){
      console.log("loop 1");
      var pickTwo = this.picker();
      choiceTwo.src = imageHolder[pickTwo].path;
      choiceTwo.name = imageHolder[pickTwo].name;
    };
    var pickThree = this.picker();
    choiceThree.src = imageHolder[pickThree].path;
    choiceThree.name = imageHolder[pickThree].name;
    while (choiceOne.name === choiceThree.name || choiceTwo.name === choiceThree.name){
      console.log("loop 2")
      var pickThree = this.picker();
      choiceThree.src = imageHolder[pickThree].path;
      choiceThree.name = imageHolder[pickThree].name;
    };
  },
};

// function chartCaller(){
//   if tracker.voteCounter === 15


tracker.imageblock.addEventListener("click", function() {

  if (event.target == tracker.choiceOne) {
    console.log("choiceOne");
    console.log(tracker.choiceOne.src);
    for (var i=0; i < imageHolder.length; i++) {
      if (tracker.choiceOne.name == imageHolder[i].name){
        imageHolder[i].votes ++;
        tracker.voteCounter ++;
        console.log(imageHolder[i].votes)
      }
    }
  };
  if (event.target == tracker.choiceTwo) {
    console.log(tracker.choiceTwo.src);
    for (var i=0; i < imageHolder.length; i++) {
      if (tracker.choiceTwo.name == imageHolder[i].name){
        imageHolder[i].votes ++;
        tracker.voteCounter ++;
        console.log(imageHolder[i].votes)
      }
    }
  };
  if (event.target == tracker.choiceThree) {
    console.log(tracker.choiceThree.src);
    for (var i=0; i < imageHolder.length; i++) {
      if (tracker.choiceThree.name == imageHolder[i].name){
        imageHolder[i].votes ++;
        tracker.voteCounter ++;
        console.log(imageHolder[i].votes)
      }
    }
  };
  tracker.printImages();
});

window.onload = tracker.printImages();
