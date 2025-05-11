// filepath: e:\MuikaUmino.github.io\whatisnani\illust-detail.html
document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".illust__wrap");
    let scrollAmount = 0;
    const scrollStep = 1; // スクロールするピクセル数
    const scrollInterval = 50; // スクロール間隔 (ミリ秒)

    function autoScroll() {
        if (scrollContainer.scrollWidth - scrollContainer.clientWidth === scrollAmount) {
            scrollAmount = 0; // 最初に戻る
            scrollContainer.scrollLeft = 0;
        } else {
            scrollAmount += scrollStep;
            scrollContainer.scrollLeft += scrollStep;
        }
    }

    setInterval(autoScroll, scrollInterval);
});
