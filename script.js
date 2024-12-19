// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', () => {
    const engineSound = document.getElementById('engine-sound');

    // Add event listener to play sound on any click/tap on the screen
    document.addEventListener('click', () => {
        engineSound.play().catch(error => {
            console.log("Audio play failed:", error); // Log if audio doesn't play
        });
    });
});
