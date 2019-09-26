input = document.querySelector('data');
listItems = document.querySelectorAll('li');
input.addEventListener('input',myFunction;
function myFunction()
{
	search = input.value.toLowerCase();
	listItems.forEach(function(li){
		text = li.innerHTML.toLowerCase();
		found = text.indexOf(search);
		if(search == ''){
			li.style.display= "block";

		}else if(found == -1){
			li.style.display= "none"
		}else{
			li.style.display= "block"
		}
		
	})
	

	}


