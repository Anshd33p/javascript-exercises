const removeFromArray = function(arr,...item) {
    for( const n of item)arr= remove(arr,n);
   return arr;
};

function searchItem(arr,item){
    len= arr.length;
    for(let i=0; i<  len; i++)
    {
        if(arr[i]== item && typeof arr[i]== typeof item ) return i;
    }
    return -1;
}

function remove(arr,item){
   let pos = -1;
   do{
    if(item!=null){pos= searchItem(arr,item);
        if (pos== -1) break;
        arr.splice(pos,1);
   }}while(pos!=-1);


return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
