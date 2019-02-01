// $(function() {
  // 이제 1.7.2 버전의 JQuery 라이브러리에만 정의된 함수나 속성을 사용하려면 $ 대신 newJQuery 를 사용하면 됩니다.
  // newJquery('#slideTest').slidejs({});
  // 기존의 1.4.2버전의 JQuery 라이브러리를 사용하려면 그대로 $ 를 사용하면 됩니다.
  // $('#btnCheck').click(function() {});
// });



// var jQuery = $;
// $new(document).ready(function() {
//   // 체크박스 선택 시에만 인풋박스 활성화
//   $('#projectTypeCheck').change(function(){
//     $("#projectTypeEtc").prop("disabled", !$(this).is(':checked'));
//   });

//   // import Typed from 'typed.js';
//   var options = {
//     strings: ["회사의 시작을 함께하는 개발사<br><strong>화이트브루</strong>입니다."],
//     typeSpeed: 90
//   }
//   var typed = new Typed("#typeWriter1", options);

//   // bootstrap tooltip
//   $('[data-toggle="tooltip"]').tooltip();

//   // bootstrap range
//   var sliderC = new Slider("#budgetRange", { id: "sliderRange", min: 0, max: 10, range: true, value: [3, 7], tooltip: 'always' });
//   $('.slider').slider();

//   // radio 활성화시 input text 보이기
//   $("input[type=radio][name=questionRadio").on("click", function() {
//     var chkValue = $("input[type=radio][name=questionRadio]:checked").val();
//     if (chkValue == '4') {
//       $('#questionInputText').show().focus();
//     } else if (chkValue == '0','1','2','3') {
//       $('#questionInputText').hide();
//     }
//   });
// });

// $old(document).ready(function() {
//   // 구버전 bootstrap datepicker
//   $.datepicker.setDefaults({
//     closeText: "닫기",
//     prevText: "이전달",
//     nextText: "다음달",
//     currentText: "오늘",
//     monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
//     monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
//     dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
//     dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
//     dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
//     weekHeader: "주",
//     dateFormat: "yy년 m월 d일",
//     firstDay: 0,
//     isRTL: false,
//     showMonthAfterYear: true,
//     yearSuffix: "년"
//   });
//   $old("#datepicker").datepicker({
//     minDate: 0,
//     onSelect: function (selected, event) {
//       console.log(selected);
//       window.parent.postMessage(selected, "*");
//     }
//   });
// });


// // jQuery browser settings
// jQuery.browser = {};
// (function () {
//     jQuery.browser.msie = false;
//     jQuery.browser.version = 0;
//     if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
//         jQuery.browser.msie = true;
//         jQuery.browser.version = RegExp.$1;
//     }
// })();





$(document).ready(function() {
  var jQuery = $;
  // 체크박스 선택 시에만 인풋박스 활성화
  $('#projectTypeCheck').change(function(){
    $("#projectTypeEtc").prop("disabled", !$(this).is(':checked'));
  });

  // import Typed from 'typed.js';
  var options = {
    strings: ["회사의 시작을 함께하는 개발사<br><strong>화이트브루</strong>입니다."],
    typeSpeed: 90
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
// (function($){
//   jQuery.datepicker.setDefaults({
//     closeText: "닫기",
//     prevText: "이전달",
//     nextText: "다음달",
//     currentText: "오늘",
//     monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
//     monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
//     dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
//     dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
//     dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
//     weekHeader: "주",
//     dateFormat: "yy년 m월 d일",
//     firstDay: 0,
//     isRTL: false,
//     showMonthAfterYear: true,
//     yearSuffix: "년"
//   });
//   jQuery("#datepicker").datepicker({
//     minDate: 0,
//     onSelect: function (selected, event) {
//       console.log(selected);
//       window.parent.postMessage(selected, "*");
//     }
//   });
// }($old));
