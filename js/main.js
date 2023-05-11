//scroll animation function
function animOnScroll(items, style) {
  if (items.length > 0) {
    $(window).scroll(addAnimStyle);
    function addAnimStyle() {
      for (let index = 0; index < items.length; index++) {
        const animItem = items[index];

        const animItemHeight = animItem.offsetHeight;

        const animItemOffset = offset(animItem).top;

        let animItemPoint = window.innerHeight - animItemHeight;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight;
        }

        if (
          window.pageYOffset > animItemOffset - animItemPoint &&
          window.pageYOffset < animItemOffset + animItemHeight
        ) {
          $(animItem).addClass(style);
        } else {
          $(animItem).removeClass(style);
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    }
    addAnimStyle();
  }
}

//HEADER PAWS ANIMATION
$(".paws img:eq(0)").fadeIn(200, function () {
  $(this).next().fadeIn(200, arguments.callee);
});
$(window).scroll(function () {
  const target = $(this).scrollTop();

  if (target == 0) {
    $(".paws img:eq(0)").fadeIn(200, function () {
      $(this).next().fadeIn(200, arguments.callee);
    });
  }
  if (target > 800) {
    $(".paws img:eq(0)").fadeOut(0.1, function () {
      $(this).next().fadeOut(0.1, arguments.callee);
    });
  }
});

//title and fourtj section info animation
const animTitles = $(".anim-item");
animOnScroll(animTitles, "item--animation");
//card paws animation
const animPaws = $(".anim-paw");
animOnScroll(animPaws, "paw--animation");
//thread animation
const threads = $(".ball-of-thread ");
animOnScroll(threads, "thread--animation ");
//table paws animation
const colorPaws = $(".anim-color_paw ");
animOnScroll(colorPaws, "color-paw--animation ");
