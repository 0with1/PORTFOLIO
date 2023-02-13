
$("#header").load("header.html");

  /**
 * footer 디렉토리 영역 모바일 시 탭으로 변경.
 */$("footer").load("footer.html", function () {
    $(".footer .directory-wrap strong").click(function () {
      // $(this).toggleClass("is-active");
      // $(this).next(".directory-list").toggleClass("is-active");
      if ($(this).hasClass('is-active')) {
        $('.footer .directory-wrap strong').removeClass('is-active');
        $('.directory-list').removeClass('is-active');
      } else {
        $('.footer .directory-wrap strong').removeClass('is-active');
        $(this).addClass('is-active');
        $('.directory-list').removeClass('is-active');
        $(this).next(".directory-list").addClass('is-active');
      }
    })
  });

