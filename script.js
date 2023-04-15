// media page js

// creating an array of book recommendation images
const images = ["atomic.png", "be.png", "howto.png", "stop.png"];

const imageObject = document.getElementById("atomic");

let count = 0;

//function switchImage changes the images by increasing count and then if the count is equal to images.length, resetting count back to 0.
function switchImage() {
  count = count +1;

    if (count == images.length) {
      count = 0;
    }

  imageObject.src = images[count];
}

//creating an array of podcast recommendation images
const pictures = ["terrible.png", "happiness.png", "ten.png", "anxiety.png"]

const pictureObject = document.getElementById("terrible");

//function switchPodImage changes the images of podcast images by increasing count and then if the count is equal to pictures.length, resetting the count to 0.
function switchPodImage (){
  count = count+1;

  if (count == pictures.length) {
    count=0;
  }
  pictureObject.src = pictures[count];
}

// write page js starts here //

//creating variables stories, submit, and input to be equal to access specific classes
var stories = $('.stories')
var submit = $('.submit')
var input = $('.myInput')
//submitting to the stories when the submit button is clicked
submit.on("click", addToStories)
//function addToStores works when the button is clicked and it appends the paragraph written to the stories page
function addToStories (event) {
  event.preventDefault
  var text = input.val()
  stories.append (`<div> <p> <b>anonymous: </b> ${text} </p></div>`)
  var textInput = $('.myInput')
  textInput.val("")
}




