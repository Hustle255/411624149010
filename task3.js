let messages = [];

const input = document.getElementById("messageInput");
const count = document.getElementById("count");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const messageBox = document.getElementById("messages");
const status = document.getElementById("status");


input.addEventListener("input", function () {
    count.textContent = input.value.length;
});

addBtn.addEventListener("click", function () {

    const msg = input.value.trim();

    const promise = new Promise(function (resolve, reject) {

        if (msg.length >= 3) {
            resolve(msg);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise
        .then(function (message) {

            status.textContent = "Message Added Successfully";

            messages.push(message);

            displayMessages();

            input.value = "";
            count.textContent = 0;

        })

        .catch(function (error) {

            status.textContent = error;

        });

});

function displayMessages() {

    messageBox.innerHTML = "";

    messages.forEach(function (msg) {

        const div = document.createElement("div");

        div.className = "message";

        div.textContent = msg;

        messageBox.appendChild(div);

    
        setTimeout(function () {

            if (messages.includes(msg)) {

                messages.splice(messages.indexOf(msg), 1);

                displayMessages();

                status.textContent = "Message Expired";

            }

        }, 10000);

    });

}


clearBtn.addEventListener("click", function () {

    messages = [];

    messageBox.innerHTML = "";

    status.textContent = "All Messages Cleared";

});