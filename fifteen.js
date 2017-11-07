var fullPuzzle;
var counter =0;

window.onload = function(){

  fullPuzzle = $('puzzlearea');
  var myURL = "url('background.jpg')";
  backgroundImage(myURL);
  document.getElementById("shufflebutton").onclick = shuffleIt;

  //adding counter for number of moves
  var cntr = document.createElement('div');
  cntr.id = 'gameCounter';
  $('overall').appendChild(cntr);
  $('gameCounter').style.height = "20px";
  $('gameCounter').style.marginTop = "10px";
  $('gameCounter').style.padding = "5px";
  $('gameCounter').style.position = "right";
  $('gameCounter').innerHTML= "Number of Moves: " + counter.toString();
  }

    //This function gives styles to our dives
  function backgroundImage(myURL){
    for (i=0;i<15; i++)
    {
      fullPuzzle.getElementsByTagName('div')[i].addClassName("puzzlepiece");
      fullPuzzle.getElementsByTagName('div')[i].style.background  = myURL;
      fullPuzzle.getElementsByTagName('div')[i].onclick = setup;
    }

    fullPuzzle.getElementsByTagName('div')[0].style.left= '0px';
    fullPuzzle.getElementsByTagName('div')[0].style.top='0px';
    fullPuzzle.getElementsByTagName('div')[0].style.backgroundPosition='0px 0px';

    fullPuzzle.getElementsByTagName('div')[1].style.left= '100px';
    fullPuzzle.getElementsByTagName('div')[1].style.top='0px';
    fullPuzzle.getElementsByTagName('div')[1].style.backgroundPosition='-100px 0px';

    fullPuzzle.getElementsByTagName('div')[2].style.left= '200px';
    fullPuzzle.getElementsByTagName('div')[2].style.top='0px';
    fullPuzzle.getElementsByTagName('div')[2].style.backgroundPosition='-200px 0px';

    fullPuzzle.getElementsByTagName('div')[3].style.left= '300px';
    fullPuzzle.getElementsByTagName('div')[3].style.top='0px';
    fullPuzzle.getElementsByTagName('div')[3].style.backgroundPosition='-300px 0px';

    fullPuzzle.getElementsByTagName('div')[4].style.left= '0px';
    fullPuzzle.getElementsByTagName('div')[4].style.top='100px';
    fullPuzzle.getElementsByTagName('div')[4].style.backgroundPosition='0px -100px';

    fullPuzzle.getElementsByTagName('div')[5].style.left= '100px';
    fullPuzzle.getElementsByTagName('div')[5].style.top='100px';
    fullPuzzle.getElementsByTagName('div')[5].style.backgroundPosition='-100px -100px';

    fullPuzzle.getElementsByTagName('div')[6].style.left= '200px';
    fullPuzzle.getElementsByTagName('div')[6].style.top='100px';
    fullPuzzle.getElementsByTagName('div')[6].style.backgroundPosition='-200px -100px';

    fullPuzzle.getElementsByTagName('div')[7].style.left= '300px';
    fullPuzzle.getElementsByTagName('div')[7].style.top='100px';
    fullPuzzle.getElementsByTagName('div')[7].style.backgroundPosition='-300px -100px';

    fullPuzzle.getElementsByTagName('div')[8].style.left= '0px';
    fullPuzzle.getElementsByTagName('div')[8].style.top='200px';
    fullPuzzle.getElementsByTagName('div')[8].style.backgroundPosition='0px -200px';

    fullPuzzle.getElementsByTagName('div')[9].style.left= '100px';
    fullPuzzle.getElementsByTagName('div')[9].style.top='200px';
    fullPuzzle.getElementsByTagName('div')[9].style.backgroundPosition='-100px -200px';

    fullPuzzle.getElementsByTagName('div')[10].style.left= '200px';
    fullPuzzle.getElementsByTagName('div')[10].style.top='200px';
    fullPuzzle.getElementsByTagName('div')[10].style.backgroundPosition='-200px -200px';

    fullPuzzle.getElementsByTagName('div')[11].style.left= '300px';
    fullPuzzle.getElementsByTagName('div')[11].style.top='200px';
    fullPuzzle.getElementsByTagName('div')[11].style.backgroundPosition='-300px -200px';

    fullPuzzle.getElementsByTagName('div')[12].style.left= '0px';
    fullPuzzle.getElementsByTagName('div')[12].style.top='300px';
    fullPuzzle.getElementsByTagName('div')[12].style.backgroundPosition='0px -300px';

    fullPuzzle.getElementsByTagName('div')[13].style.left= '100px';
    fullPuzzle.getElementsByTagName('div')[13].style.top='300px';
    fullPuzzle.getElementsByTagName('div')[13].style.backgroundPosition='-100px -300px';

    fullPuzzle.getElementsByTagName('div')[14].style.left= '200px';
    fullPuzzle.getElementsByTagName('div')[14].style.top='300px';
    fullPuzzle.getElementsByTagName('div')[14].style.backgroundPosition='-200px -300px';
    }

    //generate random numbers 1~ 15
    function generateRandom(){
      var arr = []
    while(arr.length < 15){
      var randomnumber=Math.floor(Math.random()*15)
      var found=false;
      for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }
    return arr;
    }

    var eLeft = '300px';  //default empty position
    var eTop = '300px';
    var tempLeft, tempTop;  // temporary position

    //This function moves tiles
    function setup() {
    counter++;
    //window.alert("left: "+this.style.left+", top: "+this.style.top+"");
    $('gameCounter').innerHTML= "Number of Moves: " + counter.toString();

    tempLeft = this.style.left;
    tempTop = this.style.top;
    this.style.left = eLeft;
    this.style.top = eTop;
    eLeft = tempLeft;
    eTop = tempTop;
    }


    // when the shuffle button is pressed, this function is called
    function shuffleIt(){
    counter =0;  //reset
    $('gameCounter').innerHTML= "Number of Moves " + counter.toString();

    eLeft = '300px';  //reset empty position
    eTop = '300px';

    var myArray = $('puzzlearea').getElementsByTagName('div');
    //myArray = shuffle(myArray);
    giveCoordinates(myArray);

    }

    //Set coordinates to tiles.
    function giveCoordinates(array){
    //This is how I make a random number 1 ~ 15

    var arr = []
      while(arr.length < 15){
      var randomnumber=Math.floor(Math.random()*15)
      var found=false;
      for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }
    array[arr[14]-1].style.left= '0px';
    array[arr[14]-1].style.top='0px';
    array[arr[13]-1].style.left= '100px';
    array[arr[13]-1].style.top='0px';
    array[arr[12]-1].style.left= '200px';
    array[arr[12]-1].style.top='0px';
    array[arr[11]-1].style.left= '300px';
    array[arr[11]-1].style.top='0px';
    array[arr[10]-1].style.left= '0px';
    array[arr[10]-1].style.top='100px';
    array[arr[9]-1].style.left= '100px';
    array[arr[9]-1].style.top='100px';
    array[arr[8]-1].style.left= '200px';
    array[arr[8]-1].style.top='100px';
    array[arr[7]-1].style.left= '300px';
    array[arr[7]-1].style.top='100px';
    array[arr[6]-1].style.left= '0px';
    array[arr[6]-1].style.top='200px';
    array[arr[5]-1].style.left= '100px';
    array[arr[5]-1].style.top='200px';
    array[arr[4]-1].style.left= '200px';
    array[arr[4]-1].style.top='200px';
    array[arr[3]-1].style.left= '300px';
    array[arr[3]-1].style.top='200px';
    array[arr[2]-1].style.left= '0px';
    array[arr[2]-1].style.top='300px';
    array[arr[1]-1].style.left= '100px';
    array[arr[1]-1].style.top='300px';
    array[arr[0]-1].style.left= '200px';
    array[arr[0]-1].style.top='300px';
    }
