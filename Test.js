var ip = '255.255.255.255, 255.255.255.256'
var port = '80'

var reg = new RegExp('^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$') //ipv4 255.255.255.255

var pattern = ',';
var standard  = ip.indexOf(',');


console.log(reg.test(ip));

if(standard > -1)
{
    console.log( validate_chk(ip, reg) );
    
    // return validate_chk(ip, reg);
}

function validate_chk(el, reg){
    var arr = new Array();
    var trueFalse = new Array();

    arr = el.replace(/[\t\s]/g,'').split(','); // 공백 문자 제거 후  ',' 기준으로 문자 잘라서 배열 반환 
    console.log('arr1: ',arr) //filter befor

    arr.forEach(function(el) {
        var val = discriminant(el,pattern,reg)
        trueFalse.push(val)
    })

    console.log(trueFalse)
    var result = trueFalse.every(function(x) {return x === true;}) //배열안의 값 비교
    console.log('result',result)
    
    return result;
}


function discriminant(port,pattern,reg)
{
    var start = port.indexOf(pattern);
    var end = port.length;				
    var cidr = port.substring(start,end)
    var result = reg.test(cidr)
    
    return result; 
}
var a = !false

