
class CountdownTimer {
    constructor(initialMinutes, initialSeconds) {
        this.initialTime = initialMinutes * 60 + initialSeconds;
        this.time = this.initialTime;
        this.timerElement = document.getElementById('timer');
        this.intervalId = null;
    }

    start() {
        this.updateDisplay();
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    tick() {
        if (this.time > 0) {
            this.time--;
            this.updateDisplay();
        } else {
            this.stop();
        }
    }

    updateDisplay() {
        const minutes = String(Math.floor(this.time / 60)).padStart(2, '0');
        const seconds = String(this.time % 60).padStart(2, '0');
        this.timerElement.textContent = `${minutes}:${seconds}`;
    }
}

// Задаємо початковий час у хвилинах та секундах
const timer = new CountdownTimer(1, 25);

// Запускаємо таймер
timer.start();

