if (!($ = window.jQuery)) {
	script = document.createElement( 'script' );  
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';  
	script.onload=promptAndSearch;  
	document.body.appendChild(script);  
} else {  
	promptAndSearch();  
}  


function promptAndSearch() {  
  	var searchQuery=prompt('Search?');
  	var regExPattern = new RegExp(searchQuery, 'gi');
  	var entireDOM = $('body').html().toString();
  	var entireArray = entireDOM.split('\n');

	//create result element
	var resultTitle = document.createElement('h1');
	resultTitle.appendChild(document.createTextNode('GREP Results:'));

	//create div to store all search results
	var searchDiv = document.createElement('div');

	//match regular expression to each line
  	for (var i=0;i < entireArray.length; i++){
  		if ( entireArray[i].match(regExPattern) ){
			
			//insert html into our search div div
			var newText = '<p>'+entireArray[i]+'</p>';
			searchDiv.insertAdjacentHTML('beforeend', newText);	
  		}
  	}

	//divider after the grep results
	searchDiv.insertAdjacentHTML('beforeend', '------------------------------------');

		
	//insert searchDiv as the first element after body
	var body = document.body;
	body.insertBefore(resultTitle, body.firstChild);
	//body.insertBefore(searchDiv, resultTitle);	
	insertAfter(resultTitle, searchDiv);
}

//insert after hack
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
