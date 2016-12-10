
$('.box').click(function() {
	if($(this).attr('class') === "box"){
		$(this).attr('class', 'box-invisible');
	} else {
		$(this).attr('class', 'box');
	}
});

$('.box-invisible').click(function() {
	if($(this).attr('class') === "box"){
		$(this).attr('class', 'box-invisible');
	} else {
		$(this).attr('class', 'box');
	}
});
