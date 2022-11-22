window.onload = function(){
   
function countDown( maxtime,fn ) {  
  var timer = setInterval(function() { 
    if( !!maxtime ){  
      var maxtime1 = sessionStorage.getItem("maxtime")
      if(maxtime1 != undefined &&maxtime1 !=null  ){
        maxtime =maxtime1
      }
      var day = Math.floor(maxtime / 86400),
       hour = Math.floor((maxtime % 86400) / 3600),
      minutes = Math.floor((maxtime % 3600) / 60), 
      seconds = Math.floor(maxtime%60), 
       msg = hour+":"+minutes+":"+seconds;
    fn( msg ); 
    maxtime--;
    sessionStorage.setItem('maxtime',maxtime)  
   } else {  
    clearInterval( timer ); 
    fn("时间到，结束!"); 
   }  
  }, 2000); 
 } 
 countDown( 86400,function( msg ) { 
  document.querySelector(".time-h").innerHTML = msg; 
 }) 
 countDown( 72400,function( msg ) { 
    document.querySelector(".time-ms0").innerHTML = msg; 
  document.querySelector(".time-ms1").innerHTML = msg; 
  document.querySelector(".time-ms2").innerHTML = msg; 
 })

}

function aaa(e){
  var zst = document.querySelector('.zst');
  zst.setAttribute('src',e.src)
 }