
$(function(){
	let nav=$('.navbottom');
	let page=$('.node li');
	console.log(nav,page);

	$(page).eq(0).css({'background':'#2d78f4','color':'#000'});
	$(page).eq(0).on('click',function(){
		$(this).css({'background':'#2d78f4','color':'#fff'}).siblings().css({'background':'#fff','color':'#000'});;
		$(nav).eq(0).show().siblings('.navbottom').hide();
	})
	$(page).eq(1).on('click',function(){
		$(this).css({'background':'#2d78f4','color':'#fff'}).siblings().css({'background':'#fff','color':'#000'});;
		$(nav).eq(1).show().siblings('.navbottom').hide();
	})
	$(page).eq(2).on('click',function(){
		$(this).css({'background':'#2d78f4','color':'#fff'}).siblings().css({'background':'#fff','color':'#000'});;
		$(nav).eq(2).show().siblings('.navbottom').hide();
	})

})