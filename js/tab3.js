

window.onload=function(){
	//获取鼠标滑过或者点击的标签和要切换的内容
	//var con_tit=document.getElementById("notice1");
	//var con_co=document.getElementById("notice-con");

    var titles_fa=document.getElementById("notice1");
    //alert(titles_fa.childNodes.length);
    //var titles=titles_fa.childNodes;
    var titles=titles_fa.getElementsByTagName("li");
    //alert(titles.length);
	var divs_fa=document.getElementById("notice-con");
	//var divs=divs_fa.childNodes;
	var divs=divs_fa.getElementsByTagName("div");
	//alert(divs.length);

  //var len=titles.length;
  var index=0;//标签索引
  var timer=null;

  if(titles.length!=divs.length){return;}//判断标签数和内容数量匹不匹配

  for(var i=0;i<titles.length;i++){
         titles[i].id=i;
         titles[i].onmouseover=function(){
          clearInterval(timer);
          shorterchange(this.id);}

         titles[i].onmouseout=function(){

          timer=setInterval(autoPlay,2000);

         }

         if(timer){
    clearInterval(timer);
    timer=null;
  } 

  
    timer=setInterval(autoPlay,2000);

 function autoPlay(){
                  index++;
                  if(index>=titles.length){
                    index=0;
                  } //索引跳到最后一个时返回第一个
                  shorterchange(index);
                }


 function shorterchange(curindex){
  
                 for(var j=0;j<titles.length;j++){

                   titles[j].className ="";//先把样式都清空
                   divs[j].style.display="none";//把所有的都隐藏
                }

                titles[curindex].className="select";
                divs[curindex].style.display="block";//赋予高亮的样式
                index=curindex;

 }



	
	
	}
}


