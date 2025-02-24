function alertName() {
    let name = document.getElementById("name").value;
    let greetings = ["Hello", "Hey", "What's up", "Hi there", "Greetings"];
    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    if (name) {
        alert(randomGreeting + ", " + name + "!");
    } else {
        alert("Please enter your name!");
    }
}

function changeColor() {
    let colors = ["#ff9ff3", "#feca57", "#1dd1a1", "#5f27cd", "#ff6b6b"]; 
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function validateText() {
    let text = document.getElementById("textInput").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    if (validation.test(text)) {
        alert("⚠️ Special characters are not allowed!");
    } else {
        alert("✅ Text is valid.");
    }
}

function addText() {
    let heading = document.getElementById("pageTitle");
    let newText = document.createElement("span");
    
    newText.innerText = " Add Text";
    newText.style.opacity = "0";  
    newText.style.transition = "opacity 1s";  
    
    heading.appendChild(newText);
    setTimeout(() => newText.style.opacity = "1", 100);
}
