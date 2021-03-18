// list simple of numbers
var startN=2, endN=20, allNum ;  
var i, k ;
var isSimple = false;

// definition simple number
// for every i from [2 to k-1]  (k % i) > 0 => k є SIMPLE 
for (k = startN; k<=endN; k++) {
    for (i=2; i < k;i++) {
        if (k%i == 0 ) break;
        if ( i == k-1) {
            isSimple = true; 
        }      
               
    }
    if( isSimple) {
        alert( k);
        isSimple = false;
    }
}

