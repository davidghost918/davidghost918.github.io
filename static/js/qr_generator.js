urlInputField.addEventListener('input', function(event) {
    if (urlInputField.value == "") {
        submitButton.classList.remove("active");
        submitButton.classList.remove("sky-hovered");
    } else {
        submitButton.classList.add("active");
        submitButton.classList.add("sky-hovered");
    }
})
