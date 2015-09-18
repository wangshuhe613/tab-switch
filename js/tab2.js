/*function $(id){
	return typeof id==="string"?document.getElementById(id):id;
}*/

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

  var index=0;//标签索引
  var timer=null;


	if(titles.length!=divs.length){return;}//判断标签数和内容数量匹不匹配
	
	for(var i=0,len=titles.length;i<len;i++){
              titles[i].id=i;
              titles[i].onmouseover=function(){
                var that = this ;
                //如果存在准备执行的定时器则清除，只有时间大于500ms时才开始切换，如果存在准备执行的定时器则清除，
              	if(timer){
                  clearTimeout(timer);
                  timer=null;
                }
                //延迟半秒执行
                timer=setTimeout(function(){

                 for(var j=0;j<titles.length;j++){

                   titles[j].className ="";
                   divs[j].style.display="none";
                }

                //this.className="select";//this此处指向的是window对象
                //因为定时器是window的方法
                that.className="select";
                divs[that.id].style.display="block";
                //divs[this.id].style.display="block";

                },500);

               
              }
	}



}