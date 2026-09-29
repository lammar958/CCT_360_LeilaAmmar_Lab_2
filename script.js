// changing image 
document.getElementById("imageButton").addEventListener("click", function() {
    document.getElementById("dayImage").src = "images/night.jpg";
});

// revealing message
document.getElementById("messageButton").addEventListener("click", function() {
    document.getElementById("message").textContent = "Congratulations! You revealed the hidden message!";
});

// visiting another page
document.getElementById("pageButton").addEventListener("click", function() {
    window.location.href = "nextpage.html";
});