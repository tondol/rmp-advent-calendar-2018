// レンダリング開始後に ready 関数を実行。
document.addEventListener("DOMContentLoaded", function () {
    var scene = document.querySelector("a-scene");

    if (scene.hasLoaded) {
        ready();
    } else {
        scene.addEventListener("renderstart", ready);
    }
});

function ready() {
    console.warn("ready");

    function css(e, styles) {
        for (var property in styles) {
            e.style[property] = styles[property];
        }
    }

    var marquee = document.querySelector("#target .item-marquee");

    // フォントサイズの調整。
    css(marquee, {
        'font-size': (640 / marquee.textContent.length) + 'px',
    });

    var t = 0;

    // render 関数を毎フレーム実行する。
    function render() {
        if (t >= 1.0) {
            t -= Math.floor(t);
        }

        // 要素の左マージンを変化させる (右から左に流れるアニメーションを実現) 。
        var value = 640 * (1.0 - t * 2.0);
        css(marquee, {
            'margin-left': value + 'px',
        });

        t += 0.005;

        requestAnimationFrame(render);
    }

    render();
}
