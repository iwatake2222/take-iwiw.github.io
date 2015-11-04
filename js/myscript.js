function closeMyAccordion(collapseId)
{
	$(collapseId).collapse('hide');
}

function openAllAccordion()
{
	$('.panel-collapse').collapse('show');
}

function closeAllAccordion()
{
	$('.panel-collapse').collapse('hide');
}

window.onresize=function(){
	//console.log(window.innerWidth);
	if (window.innerWidth < 768) {	/* @screen-sm-min */
		//closeAllAccordion();
	} else {
		//openAllAccordion();
	}
};

window.onload=function(){
	if (window.innerWidth < 768) {	/* @screen-sm-min */
		closeAllAccordion();
	} else {
		openAllAccordion();
	}
};
