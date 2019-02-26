// $(function() {
  // 이제 1.7.2 버전의 JQuery 라이브러리에만 정의된 함수나 속성을 사용하려면 $ 대신 newJQuery 를 사용하면 됩니다.
  // newJquery('#slideTest').slidejs({});
  // 기존의 1.4.2버전의 JQuery 라이브러리를 사용하려면 그대로 $ 를 사용하면 됩니다.
  // $('#btnCheck').click(function() {});
// });


$(document).ready(function() {
  var jQuery = $;
  // 체크박스 선택 시에만 인풋박스 활성화
  $('#projectTypeCheck').change(function(){
    $("#projectTypeEtc").prop("disabled", !$(this).is(':checked'));
  });

  // import Typed from 'typed.js';
  var options = {
    strings: [
      "당신의 아이디어에 반했다.<br>당신의 개발팀이 되겠다고,<br><strong>당신의 개발사 화이트브루</strong>",
      "학교 후배, 아는 동생, 친구의 친구..<br>그 중에 없다면<br>아직 못 만난 거다.<br>기다림은 답이 아니란 걸.<br><strong>개발해 듀오, 화이트브루</strong>",
      "아이디어도 있고<br>예산도 있는데<br>개발팀없는 싱글 창업자.<br>이제 좋은 짝만 있으면 되겠죠?<br><strong>개발해 듀오, 화이트브루</strong>",
      "창업이 시작되는 순간이 있다.<br>그런데 개발자는 어디에...<br><strong>개발해 듀오, 화이트브루</strong>",
      "월급을 올리고<br>복지를 올려도<br>못 찾는 개발팀을 여기서.<br>못 만난 인연, 기다림의 끝에서<br><strong>개발해 듀오, 화이트브루</strong>",
      "개발자 면접만 몇번째인가?<br>개발자는 뉴욕에 있나?<br><strong>개발해 듀오, 화이트브루</strong>",
      "느낌만으로는 모르는 개발.<br>조건만으로도 안 되는 개발.<br>아무 팀이나 할 수 있는 일이지만,<br>아무나 잘할 수 없는 일.<br><strong>개발해 듀오, 화이트브루</strong>",
      "당신의 개발사<br><strong>개발해 듀오, 화이트브루</strong>"
    ],
    typeSpeed: 100,
    smartBackspace: true
  }
  var typed = new Typed("#typeWriter1", options);

  // bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // bootstrap range
  // var sliderC = new Slider("#budgetRange", { id: "sliderRange", min: 0, max: 10, range: true, value: [3, 7], tooltip: 'always' });
  // $('.slider').slider();



  // radio 활성화시 input text 보이기
  $("input[type=radio][name=questionRadio").on("click", function() {
    var chkValue = $("input[type=radio][name=questionRadio]:checked").val();
    if (chkValue == '4') {
      $('#questionInputText').show().focus();
    } else if (chkValue == '0','1','2','3') {
      $('#questionInputText').hide();
    }
  });
  // jQuery browser settings
  jQuery.browser = {};
  (function () {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
      jQuery.browser.msie = true;
      jQuery.browser.version = RegExp.$1;
    }
  })();
});
