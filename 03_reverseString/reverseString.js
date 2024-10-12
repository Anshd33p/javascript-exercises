const reverseString = function(string) {
    let rev_st='';
    for( const  n of string)
    {
        rev_st= n + rev_st;
    }
    return rev_st;

};

// Do not edit below this line
module.exports = reverseString;
