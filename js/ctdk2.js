function ex1(){
    let tmp=parseFloat(document.getElementById("temperature").value);
    let convertF=(tmp*9)/5+32;
    document.getElementById("ex1").innerHTML=tmp+" độ C = "+parseFloat(convertF)+" độ F";
}

function ex2(){
    const x=3.2808;
    let m=parseFloat(document.getElementById("length").value);
    let ft=x*m;
    document.getElementById("ex2").innerHTML=m+" mét = "+ft+" feet";
}

function ex3(){
    let a=parseFloat(document.getElementById("aSquare").value);
    document.getElementById("ex3").innerHTML="Diện tích hình vuông là: "+(a*a);
}

function ex4(){
    let a=parseFloat(document.getElementById("aCross").value);
    let b=parseFloat(document.getElementById("bCross").value);
    document.getElementById("ex4").innerHTML="Diện tích hình chữ nhật là: "+(a*b);
}

function ex5(){
    let a=parseFloat(document.getElementById("aTriangle").value);
    let b=parseFloat(document.getElementById("bTriangle").value);
    document.getElementById("ex5").innerHTML="Diện tích tam giác vuông là:"+(a*b)/2;
}

function ex6(){
    let a=parseFloat(document.getElementById("aEx1").value);
    let b=parseFloat(document.getElementById("bEx1").value);

    if(a==0){
        document.getElementById("ex6").innerHTML="Không phải phương trình bậc 1!";
    }
    else{
        document.getElementById("ex6").innerHTML="Nghiệm của phương trình là: "+(-b/a);
    }
}

function ex7(){
    let a=parseFloat(document.getElementById("aEx2").value);
    let b=parseFloat(document.getElementById("bEx2").value);
    let c=parseFloat(document.getElementById("cEx2").value);
    if(a==0)
    {
        document.getElementById("ex7").innerHTML="Không phải phương trình bậc 2!";
    }
    else{
        let delta=parseFloat(b*b-4*a*c);
        if(delta==0){
            let x=(-b)/(2*a);
            document.getElementById("ex7").innerHTML="Phương trình có hai nghiệm bằng nhau là: "+x;
        }
        else if(delta>0){
            let x1=((-b)+Math.sqrt(delta))/(2*a);
            let x2=((-b)-Math.sqrt(delta))/(2*a);
            document.getElementById("ex7").innerHTML="Phương trình có hai nghiệm là: "+x1+" và "+x2;
        }
        else{
            document.getElementById("ex7").innerHTML="Phương trình vô nghiệm!";
        }
    }
}

function ex8(){
    let a=parseInt(document.getElementById("age").value);
    if(a>0&&a<=120){
        document.getElementById("ex8").innerHTML="Tuổi hợp lệ!";
    }
    else{
        document.getElementById("ex8").innerHTML="Không hợp lệ!!!!!!!!!!!!!!!!!!!!!";
    }
}

function ex9(){
    let a=parseFloat(document.getElementById("aEx9").value);
    let b=parseFloat(document.getElementById("bEx9").value);
    let c=parseFloat(document.getElementById("cEx9").value);
    if(a>0&&b>0&&c>0){
        if((a+b>c)||(b+c>a)||(a+c>b)){
            document.getElementById("ex9").innerHTML="Là các cạnh của tam giác!"
        }
        else {
            document.getElementById("ex9").innerHTML="Không hợp lệ!";
        }
    }
    else{
        document.getElementById("ex9").innerHTML="Không hợp lệ!";
    }
}

function ex10(){
    let a=parseFloat(document.getElementById("eTotal").value);
    const x1=2000;
    const x2=3000;
    const x3=4000;
    if(a<0){
        document.getElementById("ex10").innerHTML="Bạn nhập sai rồi! Nhập lại đi bạn nhé!";
    }
    else if(a==0){
        document.getElementById("ex10").innerHTML="Ồ!!! Ngạc nhiên quá, bạn ko dùng điện à?";
    }
    else if(a>0 && a<=100){
        document.getElementById("ex10").innerHTML="Tháng này tiền điện của bạn mất: "+parseFloat(x1*a);
    }
    else if(a>=101 && a<=200){
        let tmp=(100*x1)+(a-100)*3000;
        document.getElementById("ex10").innerHTML="Tháng này tiền điện của bạn mất: "+parseFloat(tmp);
    }
    else if(a>=201){
        let tmp=(100*x1)+(100*x2)+(a-200)*4000;
        document.getElementById("ex10").innerHTML="Tháng này tiền điện của bạn mất: "+parseFloat(tmp);
    }
}

function ex11(){
    let a=parseFloat(document.getElementById("monthly_salary").value);
    if(a<=0){
        document.getElementById("ex11").innerHTML="Bạn đang thất nghiệp đúng ko nè :))";
    }
    else if(a>0 && a<=9000000){
        document.getElementById("ex11").innerHTML="Bạn không phải chịu thuế!";
    }
    else if(a>9000000&&a<=18000000){
        document.getElementById("ex11").innerHTML="Bạn phải chịu mức thuế hàng tháng là:"+0.1*a;
    }
    else if(a>18000000&&a<=50000000){
        document.getElementById("ex11").innerHTML="Bạn phải chịu mức thuế hàng tháng là:"+0.2*a;
    }
    else if(a>50000000){
        document.getElementById("ex11").innerHTML="Bạn phải chịu mức thuế hàng tháng là:"+0.3*a;
    }
}

function ex12(){
    let rate=parseFloat(document.getElementById("interest_rate").value);
    let money=parseFloat(document.getElementById("amount").value);
    let months=parseFloat(document.getElementById("time").value);
    let ls=0;
    for(let i=0;i<months;i++){
        ls=(rate*money)/1200;
        money=money+ls;
    }
    document.getElementById("ex12").innerHTML="Lãi bạn nhận được khi đáo hạn là: "+ls+" VNĐ.";
}