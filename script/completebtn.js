document.getElementById("complete-btn").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;

    
})