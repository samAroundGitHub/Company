<!-- 点击标签滚动效果 -->
$(document).ready(function () {
	$(".navbar a, footer a[href='#myPage']").on("click", function (event) {
		if (this.hash !== "") {
			// 取消默认事件效果
			event.preventDefault();
			var hash = this.hash;
			// 滚动到指定位置
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function() {
				window.location.hash = hash;
			});
		}
	});
});