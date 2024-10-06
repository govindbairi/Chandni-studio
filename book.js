document.getElementById('book-slot-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Form validation
    if (name && email && phone && date && time && service) {
        document.getElementById('confirmation-message').innerHTML = `Thank you, ${name}! Your slot for ${service} on ${date} at ${time} has been booked.`;
        document.getElementById('book-slot-form').reset();
    } else {
        document.getElementById('confirmation-message').innerHTML = "Please fill out all fields!";
        document.getElementById('confirmation-message').style.color = "red";
    }
});
