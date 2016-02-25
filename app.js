var imageSource = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];
var itemHolder = [];
var storedItemHolder;

function storeIt(){
  console.log("storeIt")
  if (localStorage.storedItemHolder == null){
    imageCaller();
    console.log("storeIt called imageCaller")
  } else {
    itemHolder = JSON.parse(localStorage.getItem("storedItemHolder"));
    };
};

function Item(image) {
  this.votes = 0;
  this.name = image;
  this.path = "images/" + image + ".jpg";
  itemHolder.push(this);
};

function imageCaller(){
  for (var i = 0; i < imageSource.length; i++){
    new Item(imageSource[i]);
  }
};

window.onload = storeIt();

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
    choiceOne.src = itemHolder[pickOne].path;
    choiceOne.name = itemHolder[pickOne].name;
    var pickTwo = this.picker();
    choiceTwo.src = itemHolder[pickTwo].path;
    choiceTwo.name = itemHolder[pickTwo].name;
    while (choiceOne.name === choiceTwo.name){
      var pickTwo = this.picker();
      choiceTwo.src = itemHolder[pickTwo].path;
      choiceTwo.name = itemHolder[pickTwo].name;
    };
    var pickThree = this.picker();
    choiceThree.src = itemHolder[pickThree].path;
    choiceThree.name = itemHolder[pickThree].name;
    while (choiceOne.name === choiceThree.name || choiceTwo.name === choiceThree.name){
      var pickThree = this.picker();
      choiceThree.src = itemHolder[pickThree].path;
      choiceThree.name = itemHolder[pickThree].name;
    };
  },
};

var chartData = {
    labels: ["Bag", "Banana", "Boots", "Chair", "Cthulhu", "Dragon", "Pen", "Scissors", "Shark", "Sweep", "Unicorn", "Usb", "Wateringcan", "Wine glass"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        },
    ]
}; 

var buttonResults = document.getElementById("viewResults");
var buttonReset = document.getElementById("reset");
var ctx = document.getElementById("results").getContext("2d");
var meDatalist = [];

tracker.imageblock.addEventListener("click", function(event) {
  console.log(event.target.name);
    if (tracker.voteCounter >= 15) {
      tracker.imageblock.removeEventListener("click");
      console.log("Votes at 15");
      buttonResults.style.display = "inline";
      buttonReset.style.display = "inline";
      localStorage.setItem("storedItemHolder", JSON.stringify(itemHolder));
      
    } else {
      tracker.voteCounter++;
      for (var i=0; i < itemHolder.length; i++) {
        if (event.target.name === itemHolder[i].name){
          itemHolder[i].votes++;
          console.log(itemHolder[i].votes + " " + itemHolder[i].name);
          tracker.printImages();
          console.log("Vote Counter " + tracker.voteCounter);
          break;  
        }
      }
    };
  })
var myNewChart = new Chart(ctx).Bar(chartData);

buttonResults.addEventListener("click", function(){
  for (var i=0; i < itemHolder.length; i++){
        chartData.datasets[0].data.push(itemHolder[i].votes);
      };
  myNewChart.destroy();
  myNewChart = new Chart(ctx).Bar(chartData);
  results.style.display = "block";
});

buttonReset.addEventListener("click", function(){
  buttonReset.style.display = "none";
  buttonResults.style.display = "none";
  results.style.display = "none";
  tracker.voteCounter = 0; 
  chartData.datasets[0].data = [];
  myNewChart.update();
});

window.onload = tracker.printImages();
