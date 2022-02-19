function insertionSort(source, sort){
        let sorted = [source[0]];       //The first element of the source automatically starts the sorted array; we don't need to sort it against anything
        for (let i=1; i<source.length; i++){    //Start comparing at index 1
                let elementToInsert = source[i]; 
                for (let j=i; j>=0; j--){ //Iterate the sorted array in reverse, starting with the current index in the original array
                        let compareElement = sorted[j-1];
                        if (sort*elementToInsert > sort*compareElement || j==0){ //If sort is -1, then the sort order is reversed by changing the signs of both operands
                                sorted[j] = elementToInsert;
                                break;  //We found our spot, so break this loop and continue with the outer loop
                        }
                        else {
                                sorted[j] = compareElement; //The element we just compared should go to the next index up
                        }
                }
        }
        return sorted;
}
