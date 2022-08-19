 // Active ajax page loader
 $.ajaxLoad = true;
    
 //required when $.ajaxLoad = true
$.defaultPage = 'principal.php';
$.subPagesDirectory = 'views/';
$.page404 = 'views/pagina/404.html';
$.mainContent = $('#ui-view');

function loadPage(url) {

    $.ajax({
      type : 'GET',
      url : $.subPagesDirectory + url,
      dataType : 'html',
      cache : false,   
      beforeSend : function() {
        $.mainContent.css({ opacity : 0 });
      },
      success : function() {
        Pace.restart();
        $('html, body').animate({ scrollTop: 0 }, 0);
        $.mainContent.load($.subPagesDirectory + url, null, function (responseText) {
          window.location.hash = url;
        }).delay(250).animate({ opacity : 1 }, 0);
      },
      error : function() {
        window.location.href = $.page404;
      }
  
    });
  }