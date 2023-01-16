//JS Function to take an array as argument and print itd elements in reverse order


function reverse_Order(arr) {

    for (let i = arr.length-1 ; i >= 0; i = i-1) {
        console.log(arr[i])
    }
}
reverse_Order([96, 97, 98, 99, 100])