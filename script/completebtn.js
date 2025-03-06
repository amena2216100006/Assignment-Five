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
    let subTitle = document.getElementById("subtitle").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn").disabled = true;
})


// 2nd card

document.getElementById("complete-btn-2").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;
    let subTitle = document.getElementById("subtitle-2").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn-2").disabled = true;
})


//  3rd card 


document.getElementById("complete-btn-3").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;
    let subTitle = document.getElementById("subtitle-3").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn-3").disabled = true;
})



// 4th card



document.getElementById("complete-btn-4").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;
    let subTitle = document.getElementById("subtitle-4").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn-4").disabled = true;
})



// 5th card




document.getElementById("complete-btn-5").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;
    let subTitle = document.getElementById("subtitle-5").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn-5").disabled = true;
})



// 6th card



document.getElementById("complete-btn-6").addEventListener("click", function(){
    alert("Board updated Successfully");
    let taskNum = document.getElementById("task-num").innerText;
    let convertedTaskNum = parseInt(taskNum);
    let sum = convertedTaskNum - 1 ;
    document.getElementById("task-num").innerText = sum;

    let navNum = document.getElementById("nav-num").innerText;
    let convertedNavNum = parseInt(navNum);
    let sum2 = convertedNavNum + 1 ;
    document.getElementById("nav-num").innerText = sum2;
    let subTitle = document.getElementById("subtitle-6").innerText;
    let history = document.getElementById("history-div");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
     <p class = "bg-[#F4F7FF] text-gray-500 rounded-md p-4 mb-4">You have completed the task ${subTitle} at ${new Date().toLocaleTimeString()}</p>
    `
    history.appendChild(newDiv);
    document.getElementById("complete-btn-6").disabled = true;
})