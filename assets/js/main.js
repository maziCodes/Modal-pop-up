//de bounce function to control scrolling
function debounce(func, wait = 70, immediate = false) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

let popModal = document.querySelector("#modal-1");
n = "start";
//Popup Function
function popUp (e) {
	const pop = window.scrollY;
	   //condition to pop modal
		if (n == "start" && pop > 360 && pop < 1430) {
			$(popModal).modal({
        		show: 'false'
    		});

      n = "end";          
      }
             
    }




window.addEventListener('scroll', debounce(popUp));
