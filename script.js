let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
  attractions = data;
});


function filterData(category) {
	let category_array=[];

	if (category == "all"){
			category_array=attractions;
	}
	else{
		for (var i = 0; i < attractions.length;i++){
			if (attractions[i].Category == category){
				category_array.push(attractions[i]);
			}
		}
	}
	for (var i = 0; i < category_array;i++){
		for (var j =1 ; i<category_array.length ; i++){
			if (category_array[i].Visitors < category_array[j].Visitors){
				let temp = category_array[i];
				category_array[i] = category_array[j];
				category_array[j] = temp;
			}
		}
	}
	
	let top_five = category_array.slice(0,5);
	renderBarChart(top_five);
	


}
document.querySelector("#attraction-category").addEventListener('change', function(){
	filterData(this.value);
});

window.onload= a=> { // when the page has loaded it bothered me the inital graph wasn't there
    filterData(document.getElementById("attraction-category").value);
}
