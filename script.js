let currentInput = "";

function display(value) {
    currentInput += value;
    document.getElementById('output-screen').value = currentInput;
}

function clearInput() {
    currentInput = "";
    document.getElementById('output-screen').value = "0";
}

function del() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('output-screen').value = currentInput;
}

function Calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('output-screen').value = currentInput;
    } catch (error) {
        currentInput = "";
        document.getElementById('output-screen').value = "Error";
    }
}

