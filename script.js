document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typingText');
    const textToType = "Jimena Esquivel";
    let index = 0;
    let isDeleting = false;

    function type() {
        let currentText = textToType.substring(0, index);
        textElement.textContent = currentText;

        if (!isDeleting && index < textToType.length) {
            index++;
            setTimeout(type, 100); // Typing speed
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(type, 50); // Deleting speed
        } else if (!isDeleting && index === textToType.length) {
            isDeleting = true;
            setTimeout(type, 1500); // Pause before deleting
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            setTimeout(type, 500); // Pause before re-typing
        }
    }

    type();
});
