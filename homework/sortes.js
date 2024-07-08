// ---------------- Bubble sort ------------------------------
function bubleSort(arr) {
    let n = arr.length;
    let swapped;
    do{
        swapped = false
        for (let i = 0; i < n-1; i++) {
            if(arr[i] > arr[i+1]){
            let b = arr[i]//6
            arr[i] = arr[i+1]//1
            arr[i+1] = b
            swapped = true
            
            }  
        
    }
    n--;

    } while(swapped)
    
    return arr
}

//console.log(bubleSort([6,1,8,5,4,8,8,5,4,2]))


function SelectionSort(arr) {
    
    let sorted = [];


        for (let i = 0; i < n; i++) {
            
            let max = Math.max(...arr);
            let temp = arr[arr.length-1];

            arr[arr.length-1] = max
            arr[arr.indexOf(max)] = temp
            sorted.unshift(arr.pop())
            
        }
        n--
    
    
    return sorted
}


// ---------------- Quick Sort ------------------------------


function quickSort(arr){
    
    if(arr.length <= 1){
        return arr
    } 
        let pivot = arr.pop();
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > pivot)
                right.push(arr[i]);
            else
                left.push(arr[i]);
    }
    
    
    return [...quickSort(left),pivot,...quickSort(right)]
}


// ---------------- Binary Search  ------------------------------

function binarySearch(arr,target) {
    let sorted = quickSort(arr);
    let left = 0;
    let right = sorted.length-1;

    for (;left <= right;){
        let middle = Math.floor((right+left)/2)
        
        if (sorted[middle] === target) {
            return middle;
        } else if (sorted[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
     
    }
        
    
    return -1;
}




// ---------------- Linear Search  ------------------------------

function linearSearch(arr,target) {
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
        
    }
    return -1
}


