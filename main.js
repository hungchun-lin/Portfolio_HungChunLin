$(function scroll_to_top() {
    var to_top = document.getElementById('Click-to-Top'); // 取得指定id

    to_top.style.cursor = 'pointer'; //變更游標形狀
    to_top.onclick = function () { //指定id 的 onclick function
        window.scrollTo(0, 0) //scrollTo 特定座標 (x, y)
        return false;
    };
})

