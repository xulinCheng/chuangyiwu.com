window.onload=function(){
	let lh=innerHeight;
	let fiedhead=document.querySelector(".fiedhead");
	let back=document.querySelector(".back");
	let bannerb=document.querySelector(".bannerbottom");
	let imgbox=document.querySelectorAll(".imgbox li");
	let btns=document.querySelectorAll(".circle li");
	console.log(fiedhead,back,bannerb,imgbox,btns);
	//轮播图
	/*let t=setInterval(move,2000);					//定时器
	let current=0,next=0;
	btns[0].className="hot";
	bannerb.onmouseenter=function(){
		clearInterval(t);
	}
	bannerb.onmouseleave=function(){
		t=setInterval(move,2000);	
	}
	function move(){
		next++;
		if(next==imgbox.length){
			next=0;
		}
		imgbox.forEach((v,i,obj)=>{
			v.style.zIndex=5;
			v.style.opacity=0;
		})
		btns.forEach((v,i,obj)=>{
			v.className="";
		})
		btns[next].className="hot";
		animate(imgbox[next],{zIndex:10,opacity:1});
	}
	btns.forEach((v,i,obj)=>{
			v.onclick=function(){
			btns[current].classList.remove("hot");
			btns[i].classList.add("hot");
			animate(imgbox[current],{zIndex:5,opacity:0});
			animate(imgbox[i],{zIndex:10,opacity:1});
			current=i;
		}
	})*/
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
	/*//商品点击事件
	let shop=document.querySelector(".shop");
	let w=parseInt(getComputedStyle(shop,null).width);
	let btnl=document.querySelector(".btnl");
	let btnr=document.querySelector(".btnr");
	let shopbottom=document.querySelector(".shopbottom");
	btnl.onclick=function(){
		times++;
		if(times==1){
			times=1;
			shopbottom.style.transform=`translateX(${-w*times}px)`;
		}
	}
	btnr.onclick=function(){
		times--;
		if(times<0){
			times=0;
			shopbottom.style.transform=`translateX(${-w*times}px)`;
		}
	}
	function fn(flag){
		// let shopbox=document.querySelector(".shopbox");
		let shopimgbox=flag.querySelector(".shopimgbox");
		let btns1=flag.querySelectorAll(".circle1 li");
		let cw=parseInt(getComputedStyle(flag,null).width);
		let times=0;
		btns1[0].className="cir";
		btns1[0].onclick=function(){
			times--;
			if(times<0){
				times=1;
				shopimgbox.style.transform=`translateX(${0}px)`;
			}
		}
		btns1[1].onclick=function(){
			times--;
			if(times<0){
				times=1;
				shopimgbox.style.transform=`translateX(${-cw*times}px)`;
			}
		}
	}
	let shopbox1=document.querySelectorAll(".shopbox")[0];
	let shopbox2=document.querySelectorAll(".shopbox")[1];
	let shopbox3=document.querySelectorAll(".shopbox")[2];
	let shopbox4=document.querySelectorAll(".shopbox")[3];
	fn(shopbox1);
	fn(shopbox2);
	fn(shopbox3);
	fn(shopbox3);
	fn(shopbox3);
	fn(shopbox4);
	let off=document.querySelector(".offbottom");
	let shopbox5=off.querySelectorAll(".shopbox")[0];
	let shopbox6=off.querySelectorAll(".shopbox")[1];
	let shopbox7=off.querySelectorAll(".shopbox")[2];
	let shopbox8=off.querySelectorAll(".shopbox")[3];
	fn(shopbox5);
	fn(shopbox6);
	fn(shopbox7);
	fn(shopbox8);*/
}