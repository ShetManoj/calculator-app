let history = [];

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
}

function appendValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let operation = document.getElementById('result').value;
    try {
        let result = eval(operation);
        document.getElementById('result').value = result;
        updateHistory(operation, result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

function sin() {
    let result = Math.sin(parseFloat(document.getElementById('result').value));
    document.getElementById('result').value = result;
    updateHistory('sin()', result);
}

function cos() {
    let result = Math.cos(parseFloat(document.getElementById('result').value));
    document.getElementById('result').value = result;
    updateHistory('cos()', result);
}

function tan() {
    let result = Math.tan(parseFloat(document.getElementById('result').value));
    document.getElementById('result').value = result;
    updateHistory('tan()', result);
}

function log() {
    let result = Math.log(parseFloat(document.getElementById('result').value));
    document.getElementById('result').value = result;
    updateHistory('log()', result);
}

function updateHistory(operation, result) {
    history.push({ operation, result });
    displayHistory();
}

function displayHistory() {
    let historyDisplay = document.getElementById('history');
    historyDisplay.innerHTML = '';
    history.forEach(entry => {
        historyDisplay.innerHTML += `<p>${entry.operation} = ${entry.result}</p>`;
    });
}
