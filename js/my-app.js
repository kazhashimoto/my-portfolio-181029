// vegas背景スライドショーの実行
// 画像など含めすべてのコンテンツの読み込みが終わったタイミングで実行(念のため)
//
// jQuery 3.xから.loadイベント廃止に伴うコードの対応
// jQuery 2.x: $(window).load(function(){
// jQuery 3.x: $(window).on('load',function(){
//
$(window).on('load',function(){
    $('.main-visual').vegas({
        slides: [
            { src: 'images/main-visual-01-2000x1500.jpg' },
            { src: 'images/main-visual-02-2000x1500.jpg' },
            { src: 'images/main-visual-03-2000x1500.jpg' },
            { src: 'images/main-visual-04-2000x1500.jpg' }
        ],
		transition: 'fade2',
		transitionDuration: 2000,
		animation: 'kenburns'
    });
});
