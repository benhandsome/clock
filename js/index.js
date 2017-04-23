var arr =["日","一","二","三","四","五","六"]
//時間物件
function mytime(){
  mydate = new Date();

y = mydate.getFullYear();
z = mydate.getMonth()+1;
w = mydate.getDay();
d = mydate.getDate();
h = mydate.getHours();
m = mydate.getMinutes();
s = mydate.getSeconds();
ms = mydate.getMilliseconds();
 if (s <10){
   s = "0"+s;
 };
   if (m <10){
   m = "0"+m;
 };
   if (h <10){
   h = "0"+h;
 };
  
r1 = h + ":" + m + ":" + s ;
r2 = y + "." + z + "." + d ;
r3 = arr[w];

document.getElementById("time").innerHTML = r1;
document.getElementById("date").innerHTML = r2;
document.getElementById("day").innerHTML = "星期" + r3;
  
  t = setTimeout('mytime()',100);
};

mytime();

//try another methods

function start(){
  mytime();
}

function stop(){
  clearTimeout(t);
  document.getElementById("time").innerHTML= '--:--:--';
}

var p = 0;
function move(){
 p = p + .2;
  document.getElementById('c').style.backgroundPosition = p + '%';
  setTimeout("move()",80);
  console.log(p);
}
//move();