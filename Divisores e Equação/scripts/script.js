function divs(){
    let x = document.getElementById("a");
    let y = document.getElementById("b");
    let a = parseInt(x.value);
    let b = parseInt(y.value);
    var i = 1;
    var j = 0;
    if(a>b){
        var div1 = new Array(b);
        while(i<=b){
            if((a%i==0)&&(b%i==0)){
                div1[j]=i;
                j++;
            }
            i++;
        }
    }
    if(a<b){
        var div1 = new Array(a);
        while(i<=a){
            if((a%i==0)&&(b%i==0)){
                div1[j]=i;
                j++;
            }
            i++;
        }
    }
    var k = 0;
    var div2 = [];
    while((div1[k])!=null){
        div2.push(div1[k]);
        k++;
    }
    document.getElementById("resp").innerHTML = div2;
}
function equac(){
    let xx = document.getElementById("a1");
    let yy = document.getElementById("b1");
    let zz = document.getElementById("c1");
    let a1 = parseFloat(xx.value);
    let b1 = parseFloat(yy.value);
    let c1 = parseFloat(zz.value);
    let delta = (b1*b1) - (4*a1*c1);
    if(delta>0){
        let x1 = (-b1 + Math.sqrt(delta)) / (2*a1);
        let x2 = (-b1 - Math.sqrt(delta)) / (2*a1);
        var text = `As raízes são: ${x1} e ${x2}.`;
    }
    if(delta<0){
        var text = "Não existe raiz real.";
    }
    if(delta==0){
        let xx1 = (-b1 + Math.sqrt(delta)) / (2*a1);
        var text = `Uma raiz: ${xx1}.`;
    }
    document.getElementById("result").innerHTML = text;
}