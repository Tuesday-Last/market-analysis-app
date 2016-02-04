var imageSource = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];
var imageHolder = []

function Item(image) {
  this.votes = 0;
  this.name = image;
  this.path = "images/" + image + ".jpg";
  imageHolder.push(this);
  console.log(this.path);
};

function imageCaller(){
  for (var i = 0; i < imageSource.length; i++){
    new Item(imageSource[i]);
  }
};

imageCaller();

var Tracker = {
  choiceOne: document.getElementById("choiceOne"),
  choiceTwo: document.getElementById("choiceTwo"),
  choiceThree: document.getElementById("choiceThree"),
  picker: function() {
    return Math.floor(Math.random() * imageSource.length);
  },
  printImages: function (){
    choiceOne.src = imageHolder[this.picker()].path;
    choiceTwo.src = imageHolder[this.picker()].path;
    while (choiceOne === choiceTwo){
      choiceTwo.src = imageHolder[this.picker()].path;
    };
    choiceThree.src = imageHolder[this.picker()].path;
    while (choiceThree === choiceTwo || choiceThree === choiceOne){
      choiceThree.src = imageHolder[this.picker()].path;
    }
  }, 

//   imageblock.addEventListener("click", )
}
