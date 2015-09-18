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
    alert(titles.length);
	var divs_fa=document.getElementById("notice-con");
	//var divs=divs_fa.childNodes;
	var divs=divs_fa.getElementsByTagName("div");
	alert(divs.length);

	if(titles.length!=divs.length){return;}//判断标签数和内容数量匹不匹配
	
	for(var i=0,len=titles.length;i<len;i++){//报错了，哪儿有错啊？？？
              titles[i].id=i;
              titles[i].onmouseover=function(e){
console.log(e);
              	for(var j=0;j<titles.length;j++){
                   titles[j].className ="";
                   divs[j].style.display="none";
                }

              	this.className="select";
              	divs[this.id].style.display="block";
              }
	}



}