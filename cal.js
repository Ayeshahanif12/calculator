  function myvalue(val) {
        document.getElementById('display').value += val;
    }
    function calculate() {
        let z = document.getElementById('display').value;
        let result = eval(z);
        document.getElementById('display').value = result;
    }
    function del() {
        document.getElementById('display').value = '';
    }