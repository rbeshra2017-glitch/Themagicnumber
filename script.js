function generateNextNumber(prev) {
    while (true) {
        let firstDigit = Math.floor(Math.random() * 10);
        let lastThree = Math.floor(Math.random() * 1000);
        let lastThreeStr = lastThree.toString().padStart(3, '0');
        let newNumber = firstDigit.toString() + lastThreeStr;

        if (newNumber.slice(-3) !== prev.slice(-3)) {
            let prevLastTwo = parseInt(prev.slice(-2));
            let newLastTwo = parseInt(newNumber.slice(-2));
            if (newLastTwo !== prevLastTwo) {
                return newNumber;
            }
        }
    }
}

function generateNumbers() {
    let numbers = [];
    let prev = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    numbers.push(prev);

    for (let i = 0; i < 9; i++) {
        let nextNumber = generateNextNumber(prev);
        numbers.push(nextNumber);
        prev = nextNumber;
    }

    numbers.sort((a, b) => parseInt(a) - parseInt(b));
    document.getElementById('numbers').innerText = numbers.join(', ');
}