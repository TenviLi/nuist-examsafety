const later = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const seconds = Array(60).fill(void 0).map((...[,idx]) => idx);

/**
 * @wrapper
 * @asynchronous
 */
(async () => {
  let minute = 0;
  while (minute > -1) { // forever
    $.post('/exam_xuexi_online.php', {cmd: 'xuexi_online'}, (data) => {
      let shichang;
      try {
        ({shichang} = JSON.parse(data));
      } catch (e) {
        return new Error('parse error occurs');
      }
      $(".block-login .explanation li:first").html(`<a class='changePassword loginCommonBtn'>最近一次发送请求:${shichang}</a>`);
      if (shichang.indexOf('时') > 0) {
        return alert('挂完了');
      }
    });

    for (const second of seconds) {
      await later(1000);
      $('.block-login .explanation li:eq(1)').html(`<a class='changePassword loginCommonBtn'>挂题库时长:${minute * 60 + second + 1}</a>`);
    }

    minute++;
  }
})();
