var imageSource = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];
var imageHolder = []

function Item(image) {
  var votes = 0;
  var name = image;
  var path = "images/" + image + ".jpg";
  imageHolder.push(this);
  console.log(name);
};

function imageCaller(images){
  for (var i = 0; i < imageSource.length; i++){
    Item();
  }
};

imageCaller(imageSource);

console.log("Hello World")
