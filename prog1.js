let arr = [];

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

document.querySelector('#ger')

ger.addEventListener('click', () => {
    const num = parseInt(document.getElementById('num').value) || 5;
    arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = Math.floor(Math.random() * num) + 1;
    }
    document.getElementById('res').innerHTML = '<strong>Array Original:</strong> ' + arr;
});

document.querySelector('#ord')

ord.addEventListener('click', () => {
    const sortedArray = insertionSort(arr.slice());
    document.getElementById('res').innerHTML += '<br><strong>Array Ordenado:</strong> ' + sortedArray;
});

document.querySelector('#dec')

dec.addEventListener('click', () => {
    const sortedArray = bubbleSort(arr.slice()).reverse();
    document.getElementById('res').innerHTML += '<br><strong>Array Decrescente:</strong> ' + sortedArray;
})