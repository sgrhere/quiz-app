document.getElementById('calculateBtn').addEventListener('click', function() {
    let totalPoints = 0;
    for (let i = 1; i <= 6; i++) {
        const inputField = document.getElementById(`input${i}`);
        const pointsField = document.getElementById(`points${i}`);
        const pointsToAdd = parseInt(inputField.value) || 0;

        // Update the points displayed for the group
        const currentPoints = parseInt(pointsField.innerText);
        pointsField.innerText = currentPoints + pointsToAdd;

        // Calculate total points
        totalPoints += parseInt(pointsField.innerText);
        inputField.value = ''; // Clear input after adding points
    } 
});
