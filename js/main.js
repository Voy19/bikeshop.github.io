var isMobile = false;
$(document).ready( function() {
    if ($('body').width() <= 768) {
        isMobile = true;
    }
    if (isMobile) {
    }
    if (!isMobile) {
			var item = document.getElementsByClassName('item');
			var next = document.getElementById('next');
			var prev = document.getElementById('prev');
			var playing = true;

				next.onclick = function() {
					nextSlide();
				}

				next.onmouseover = function () {
					pauseSlide();
				}

				next.onmouseout = function () {
					playSlide();
				}

				prev.onclick = function() {
					prevSlide();
				}

				prev.onmouseover = function () {
					pauseSlide();
				}

				prev.onmouseout = function () {
					playSlide();
				}

				var i = 0;
				var slideInterval = setInterval(nextSlide,3000);

				function nextSlide() {
					goToSlide(i + 1);
				}

				function prevSlide() {
					goToSlide(i - 1);
				}

				function goToSlide(n) {
					item[i].className = "item";
					i = (i + 1) % item.length;
					item[i].className = "item active";
				}

				function pauseSlide() {
					playing = false;
					clearInterval(slideInterval);
				}

				function playSlide() {
					playing = true;
					slideInterval = setInterval(nextSlide,3000);
				}
    }
} );

function hideMenu() {
	var x = document.getElementById('myTopnav');
  var icon = document.getElementById("icon");
	x.classList.toggle("responsive");
  if (x.classList.contains("responsive")) {
    icon.style.borderRadius = "10px 10px 0 0";
  }
  else {
    icon.style.borderRadius = "10px";
  }
}

var a = $(".toggle");
for (var i = 0; i < a.length; i++) {
	if (!a[i].hasAttribute("name")) {
		a[i].style.borderRadius = "0";
	}
}

