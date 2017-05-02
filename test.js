/**
 * 
 */
function submitForm(formId)
{
	document.getElementById(formId).submit();
}
function checkHeadRequest(flipkarturl,amazonurl)
{
	
	$.ajax({
		type: "GET",
		//use below to get the base url from window
		//url: window.basePath + "suggestions.view",
		  	url: "/cacheHeadRequest/checkHeadRequest",
		  	data: {flipkartUrl: flipkarturl ,amazonUrl:amazonurl}
	
		}).done(function( availableResults ) {
			var data = $.parseJSON(availableResults);
		
			if(data.buyFromField=='Yes')
				{
				
				$(".buy-button-btn").each(function(){
					if($(this).parents('.buy-button-div').find('.buyfrom-options').is(':visible')){
					
						$(this).parents('.buy-button-div').find('.buyfrom-options').find(".buyfrom-options-container").css("display","block");
						if(data.flipkartFlag=='No')
						{
							$(this).parents('.buy-button-div').find('.buyfrom-options').find(".buyfrom-options-container").find(".flipkartDiv").css("display","none");
						}
						if(data.amazonFlag=='No')
						{
							$(this).parents('.buy-button-div').find('.buyfrom-options').find(".buyfrom-options-container").find(".amazonDiv").css("display","none");
						}
						
					}
				});
				}
			else
				{
				$(".buy-button-btn").each(function(){
					if($(this).parents('.buy-button-div').find('.buyfrom-options').is(':visible')){
					
						$(this).parents('.buy-button-div').find('.buyfrom-options').find(".buyfrom-error").css("display","block");
					}
				});
				}
			//document.getElementById("pdpprice").innerHTML += 
			
			/*var results = $.ui.autocomplete.filter(data.suggestions, request.term);
		response(results);*/
		});

}

$('#clearAll').click(function(){
	
	var oneChecked = false;
	$("input:checkbox:checked").each(function(){
			  
			  $(this).attr('checked',false);
			  oneChecked = true;
			 
	});
	if(oneChecked){
		
		$('#filter_search').submit();
	}
	
});

