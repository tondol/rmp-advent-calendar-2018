function css(e, styles) {
    for (var property in styles) {
        e.style[property] = styles[property];
    }
}

var scene = document.querySelector("a-scene");
var target = document.querySelector("#target");

document.addEventListener("DOMContentLoaded", function () {
    if (scene.hasLoaded) {
        ready();
    } else {
        scene.addEventListener("renderstart", ready);
    }
    ready();
});

function ready() {
    console.warn("ready");

    var marquee = document.querySelector("#target .item-marquee");

    css(marquee, {
        'font-size': (640 / marquee.textContent.length) + 'px',
    });

    var t = 0;

    function render() {
        if (t >= 1.0) {
            t -= Math.floor(t);
        }
        var value = 640 * (1.0 - t * 2.0);
        css(marquee, {
            'margin-left': value + 'px',
        });

        t += 0.005;

        requestAnimationFrame(render);
    }

    render();
}
