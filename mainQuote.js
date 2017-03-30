//jQuery is active

$(document).ready(function(){
//Generates quote
  $(".btn").click(function(getQuote){
    $.ajax({
    // url:"https://www.reddit.com/r/dadjokes/.json",
    url:"https://www.reddit.com/r/AskReddit/comments/5l1d7f/what_is_your_best_dad_joke/.json",
    success:
    function(dataObj){
      var joke=dataObj[1].data.children;
      var random=joke[Math.floor(Math.random()*joke.length)];
      $("#outputTitle").html(random.data.body);
      console.log(random.data.body);
    }});
//background-color part
    var colors=["#7A68F2","#38B5D1","#AB00FF","#57E2B8","#BEEE60","#FFD604","#FF9704","#26E099","#E08626","#E06126","#F58092","#97D3D3","#296972","#94AA45","#26788B","#EA4941","#A69B3F","#4169E1","#F79F79","#F7D08A","#E3F09B","#87B6A7","#5B5941",]
     var rand=colors[Math.floor(Math.random()*colors.length)];
      $('body').css('background-color',rand);

  });//btn click last bracket
  //this is for dynamic text change in twitter share button

});//this is the last  jquery bracket
