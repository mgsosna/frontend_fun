function updatePage(data) {
    d3.select("#updater").text(data);
}

$.ajax({
	type : "POST",
	url : '/js_python',
	dataType: "json",
	data: JSON.stringify(5),
	contentType: 'application/json;charset=UTF-8',
	success: updatePage
	});
