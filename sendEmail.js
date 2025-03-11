const sendBtn = document.getElementById("sendBtn")
const emailField = document.getElementById("inputEmail4")
const messageField = document.getElementById("inputMessage")

function checkInp() {
    console.log("OK");
    
    if (emailField.value.trim() !== "" && messageField.value.trim() !== "") {
        sendBtn.removeAttribute("disabled")
    } else {
        sendBtn.setAttribute("disabled", "true")
    }
}

emailField.addEventListener("input", checkInp)
messageField.addEventListener("input", checkInp)
sendBtn.addEventListener("click", function() {
    alert("Tin nhắn đã gửi thành công !")
})

document.querySelector(".send-email-container i").addEventListener("click", function() {
    window.location.href = "../index.html";
})