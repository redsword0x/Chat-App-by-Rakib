const socket = io("https://your-heroku-app.herokuapp.com"); // Replace with your Heroku app URL

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.emit("message", message);
    messageInput.value = "";
  }
}

socket.on("message", (message) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
