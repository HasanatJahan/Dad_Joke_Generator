//jQuery is active

$(document).ready(function(){
//Generates quote
  $(".btn").click(function(getQuote){
    $.ajax({
      url:"https://www.reddit.com/r/dadjokes/.json",
      success:
      //$(".btn").click(function(getQuote){
      function(dataObj){
        console.log(dataObj);
        var joke=dataObj.data.children;
        var random=joke[Math.floor(Math.random()*joke.length)];
        console.log(joke);
        console.log(random);
        $("#output").html(random.data.title+"<br>"+random.data.selftext);
      }});
//background-color part
    var colors=["#7A68F2","#38B5D1","#AB00FF","#57E2B8","#BEEE60","#FFD604","#FF9704","#26E099","#E08626","#E06126","#F58092","#97D3D3","#296972","#94AA45","#26788B","#EA4941","#A69B3F","#4169E1","#F79F79","#F7D08A","#E3F09B","#87B6A7","#5B5941",]
     var rand=colors[Math.floor(Math.random()*colors.length)];
      $('body').css('background-color',rand);

  });


});//this is the last  jquery bracket

//this is the precious method used before beinng replaced by the new function
//#("#output").html(data.children[i].data.title + "<br>" + data.children[i].data.selftext)

//$("#output").html(function(title,selftext){
//  return title + "<br>" + selftext;
//output here
//$("#output").html(element.data.title+"<br>"+element.data.selftext);
//dataObj.data.children
