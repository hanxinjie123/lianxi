    function getArrEqual(arr1, arr2) {
        let newArr = [];
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if(arr1[j] === arr2[i]){
                    newArr.push(arr1[j]);
                }
        }
     }
     return newArr;
}