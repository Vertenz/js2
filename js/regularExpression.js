window.onload = () => {
    let str = '';
    document.getElementById('btn-hw1').addEventListener('click', () => {
        str = document.getElementById('text-hw1').value;
        return document.querySelector('.result').insertAdjacentHTML('beforeend', str.replace(/'/g, '"'));
    });
    document.getElementById('btn-hw2').addEventListener('click', () => {
        let str = '';
        str = document.getElementById('text-hw2').value;
        return document.querySelector('.result_2').insertAdjacentHTML('beforeend', str.replace(/\B'/g, '"'));
    });
};
