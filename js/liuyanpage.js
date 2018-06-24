window.onload=function(){
	let title=document.querySelector(".title1");
	let text=document.querySelector('textarea');
	let zuo=document.querySelector('.zuo');
	let btn=document.querySelector(".baocun");
	let time=new Date();
	console.log(title,text,time,zuo,btn);

	text.onkeyup=function(){
		let span=document.querySelector(".tips span");
		span.innerText=text.value.length;
	}
	btn.onclick=function(){
		let t=title.value;
		let tx=text.value;

		title.value="";
		text.value="";
		let str=`
			<div class="list">
    			<img src="img/img.jpg" alt="">
    			<div class="con">
    				<h3>${t}</h3>
    				<textarea>${tx}</textarea>
    				<span>${time}</span>
    			</div>
    		</div>`
    	zuo.innerHTML+=str;
	}
	let lh=innerHeight;
	let fiedhead=document.querySelector(".fiedhead");
	let back=document.querySelector(".back");
	//鼠标滚动事件
	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;			//获取滚动距离
		if (st>200) {
			fiedhead.style.display="block";
		}
		else if(st<200){
			fiedhead.style.display="none";
		}
		back.onclick=function(){
			animate(document.documentElement,{scrollTop:0});
			animate(document,{scrollTop:0});
		}
	}

}