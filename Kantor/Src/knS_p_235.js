// ucFirst makes UpperCase firstsymbol of string
// truncate - cut strings its length exceed maxlength
// find in array 
//  
function ucFirst(str) {
    var s;
    s = str.charAt(0);
    //s = str;
    //str[0] = str[0].toUpperCase();
    //str = str[0].toUpperCase() +  str.slice(1); 
    str = s.toUpperCase() +  str.slice(1); 
    return(str);
}

function truncate(str,maxlength) {
    return(str.slice(0,maxlength) + "...");
}

function find(arr,value) {
    var pos = -1;
    for(var i=0; i < arr.length; i++) {
        if (arr[i] === value) {
            pos = i;
            break;
        }
    }
    return(pos);
}

 alert( ucFirst("fyzi") );
//alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
// arr = ["test", 2, 1.5, false];
// alert( find(arr, "test") ); // 0
// alert( find(arr, 2) ); // 1
// alert( find(arr, 1.5) ); // 2
// alert( find(arr, 0) ); // -1
