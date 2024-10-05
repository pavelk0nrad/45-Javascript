// Inicializace Audio Contextu
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Funkce pro přehrávání tónů
function playOscillator(frequency, duration) {
    if (frequency === 0) {
        console.log("Pause"); // Pauza, když je frekvence 0
        return;
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    oscillator.stop(audioContext.currentTime + duration);
}

// Funkce pro naplánování přehrávání tónu
function scheduleNote(index) {
    setTimeout(function() {
        console.log("Playing frequency: " + sequence[index] + " Hz");
        playOscillator(sequence[index], 0.2);
    }, index * eighthNoteLength);
}

// Sekvence: frekvence v Hz, 0 = pauza
let sequence = [150, 8000, 800, 8000, 150, 150, 800, 8000];

// Rychlost v BPM
let bpm = 120; // Beats per minute

// Výpočet délky jedné osminové noty v milisekundách
let eighthNoteLength = (60 / bpm) * 1000 / 2; // Délka osminové noty v ms

// Sekvence tónů
scheduleNote(0);
scheduleNote(1);
scheduleNote(2);
scheduleNote(3);
scheduleNote(4);
scheduleNote(5);
scheduleNote(6);
scheduleNote(7);
