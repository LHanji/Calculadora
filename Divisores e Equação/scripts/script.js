function divs() {
    let x = document.getElementById("a");
    let y = document.getElementById("b");
    let a = parseInt(x.value);
    let b = parseInt(y.value);
    var i = 1;
    var j = 0;
    if (a > b) {
        var div1 = new Array(b);
        while (i <= b) {
            if ((a % i == 0) && (b % i == 0)) {
                div1[j] = i;
                j++;
            }
            i++;
        }
    }
    if (a < b) {
        var div1 = new Array(a);
        while (i <= a) {
            if ((a % i == 0) && (b % i == 0)) {
                div1[j] = i;
                j++;
            }
            i++;
        }
    }
    var k = 0;
    var div2 = [];
    while ((div1[k]) != null) {
        div2.push(div1[k]);
        k++;
    }
    document.getElementById("resp").innerHTML = div2;
}
function equac() {
    let a = parseFloat(document.getElementById("a1").value);
    let b = parseFloat(document.getElementById("b1").value);
    let c = parseFloat(document.getElementById("c1").value);
    let delta = (Math.pow(b,2)) - (4 * a * c);
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        var text = `As raízes são: ${x1} e ${x2}.`;
    }
    if (delta < 0) {
        var text = "Não existe raiz real.";
    }
    if (delta == 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = x1;
        var text = `Uma raiz: ${x1}.`;
    }
    document.getElementById("result").innerHTML = text;
    main();
}

function f(x) {
    let a = parseFloat(document.getElementById("a1").value);
    let b = parseFloat(document.getElementById("b1").value);
    let c = parseFloat(document.getElementById("c1").value);
    var y = ((a * (x ** 2)) + (b * x) + c);
    return yt(y);
}

function yt(y) {
    return -25 * y;
}

function xt(x) {
    return 25 * x;
}

function main() {
    var canvas, ctx, w, h;
    w = 500;
    h = 500;
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
    var x0 = -10;
    var xf = 10;
    var x = x0;
    var dx = 0.1;
    ctx.save();
    ctx.translate(250, 250);
    ctx.beginPath();
    ctx.moveTo(xt(-10), yt(0));
    ctx.lineWidth = 3;
    ctx.lineTo(xt(10), yt(0));
    ctx.moveTo(xt(0), yt(-100));
    ctx.lineTo(xt(0), yt(100));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xt(x0), f(x0));
    x += dx;
    while (x < xf) {
        ctx.lineTo(xt(x), f(x))
        x += dx;
    }
    ctx.stroke();
    ctx.restore();
}
function clearPainel() {
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(ctx);

}