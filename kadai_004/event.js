$(function() {
  // HTMLドキュメントが読み込み完了したとき
    console.log('loadイベントが発生しました');

  // 画面をスクロールしたとき
  $(window).on('scroll', function (){
    console.log('scrollイベントが発生しました');
  });
});
