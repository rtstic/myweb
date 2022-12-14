var list=[
    {
      name:"demons" , //used for getting current song index - matches with current string
      path:"music/Imagine Dragons - Demons (Lyrics).mp3",
      image:"/music-album-cover/demon.jpg"
    },
    {
      name:"wavin" , 
      path:"music/K NAAN - Wavin  Flag (Coca-Cola Celebration Mix).mp3",
      image:"/music-album-cover/wavin.jpg"
    },
    {
      name:"counting" , 
      path:"music/OneRepublic - Counting Stars (Official Music Video).mp3",
      image:"/music-album-cover/counting.jpg"
    },
  ]
  var mySong=document.getElementById("mySong");//audio element where src added dynamically
  var icon=document.getElementById("play"); //paly and pause button
  var nextSong=document.getElementById("next");//get next song element
  var prevSong=document.getElementById("prev");//get prev song element
  var length=list.length;//song list length
  var i=0;
  var j=0;
  var current;
  var x;
    //onload playing from first music and cover i=0
  function music(){
    document.getElementById('mySong').src=list[i].path;
    document.getElementById('music-cover').src=list[i].image;
  }
  // play and pause button
  icon.onclick=function(){
      if(mySong.paused){
      mySong.play();
      console.log("play")
        }
      else{
        mySong.pause();
        console.log("pause")
        }
    }
  
  //onclick of next button
  nextSong.onclick=function(){
    //finding current song index
    current=document.getElementById('mySong').src;
    for(j=0; j<length; ++j){
      x =list[j].name.includes(current);
      if(x==true){
        i=j;//set current index to i
        break;
      }
    }; 

    //changing the song
    if(i<length){
      i=i+1;
    }
    if(i==length){
      i=0; 
    }
    document.getElementById('music-cover').src=list[i].image;
    document.getElementById('mySong').src=list[i].path;//changing src value to the next song
    mySong.play();
    console.log("next"+ i);
  }

  //on click of prev button
  prevSong.onclick=function(){
    //finding current song index
    current=document.getElementById('mySong').src;
    for(j=0; j<length; ++j){
      x =list[j].name.includes(current);
      if(x==true){
        i=j;//set current index to i
        break;
      }
    }; 

    //changing the song
    if(i<length){
      i=i-1;
    }
    if(i == -1){
      i=length-1; 
    }
    document.getElementById('music-cover').src=list[i].image;
    document.getElementById('mySong').src=list[i].path;//changing src value to the next song
    mySong.play();
    console.log("prev"+ i);
  }
