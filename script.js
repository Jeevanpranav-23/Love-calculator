document.getElementById("calculate").addEventListener("click", function() {
    const yourName = document.getElementById("your-name").value.trim().toLowerCase();
    const crushName = document.getElementById("crush-name").value.trim().toLowerCase();

    if (!yourName || !crushName) {
        alert("Please enter both names ❤️");
        return;
    }

    // Love Algorithm (Based on "TRUE LOVE" letters)
    const loveLetters = "truelove";
    let loveScore = 0;

    // Count matching letters in both names
    for (let char of yourName + crushName) {
        if (loveLetters.includes(char)) {
            loveScore += 5; // Each matching letter adds 5%
        }
    }

    // Bonus for name lengths (longer names = more chance)
    const lengthBonus = Math.min(yourName.length, crushName.length) * 2;
    loveScore += lengthBonus;

    // Ensure percentage is between 40% and 100% (because love is never 0%!)
    const percentage = Math.min(Math.max(40, loveScore), 100);

    // Romantic messages based on percentage
    let message = "";
    if (percentage >= 90) message = "Soulmates! 💘";
    else if (percentage >= 70) message = "Perfect Match! 💖";
    else if (percentage >= 50) message = "Good Potential! 💕";
    else message = "Give it a try! 💝";

    // Display results with animation
    document.getElementById("result-message").innerHTML = 
        `${yourName.toUpperCase()} <span class="heart">❤️</span> ${crushName.toUpperCase()}<br>${message}`;
    
    document.getElementById("result-percentage").textContent = `${percentage}%`;
    
    // Fun confetti effect for high scores
    if (percentage > 80) {
        setTimeout(() => {
            alert("Wow! Such a high score! 🎉");
        }, 500);
    }
});