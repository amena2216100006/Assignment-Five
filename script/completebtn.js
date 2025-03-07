 
//  current day
// document.getElementById("currentDay").innerText = `${new Date().getDay()}`;
//  current date
document.getElementById("currentDate").innerText = `${new Date().toDateString()}`;
 


document.getElementById("complete-btn").addEventListener("click", function btn1(){
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

document.getElementById("complete-btn-2").addEventListener("click", function btn2(){
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


document.getElementById("complete-btn-3").addEventListener("click", function btn3(){
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



document.getElementById("complete-btn-4").addEventListener("click", function btn4(){
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




document.getElementById("complete-btn-5").addEventListener("click", function btn5(){
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



document.getElementById("complete-btn-6").addEventListener("click", function btn6(){
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

// clear history

document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("history-div").textContent = "";
})
 
// last alert;
// function lastAlert (){
//     btn1()
//     btn2()
//     btn3()
//     btn4()
//     btn5()
//     btn6()
//     alert("congrates!!!  You have completed all the current task");
// }

// last alert
let buttons = document.querySelectorAll(".completed-btn");
let totalButtons = buttons.length;
let clickedCount = 0;
for(let i= 0; i< totalButtons; i++){
    buttons[i].addEventListener("click",function(){
        if(!buttons[i].classList.contains("clicked")){
            buttons[i].classList.add("clicked");
            clickedCount++;
        }
        if(clickedCount === totalButtons){
            alert("congrates!!!  You have completed all the current task");
        }
    })
}
