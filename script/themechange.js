document.getElementById("theme-change-btn").addEventListener("click", function changeTheme(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let rgbColor = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = rgbColor;
})