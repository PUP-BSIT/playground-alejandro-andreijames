var messageStatus;
(function (messageStatus) {
    messageStatus["Sent"] = "SENT";
    messageStatus["Delivered"] = "DELIVERED";
    messageStatus["Read"] = "READ";
})(messageStatus || (messageStatus = {}));
var messageSender = {
    type: "text",
    sender: "Andrei",
    recipient: "Adnan",
    timestamp: Date.now(),
    content: "Eid'l Adha",
    getInfo: function () {
        console.log("\n            Message type: ".concat(this.type, "\n            Sender: ").concat(this.sender, "\n            To: ").concat(this.recipient, "\n            Date: ").concat(this.timestamp, "\n            Message: ").concat(this.content, "\n        "));
    }
};
var messageReceiver = {
    type: "text",
    sender: "Adnan",
    recipient: "Andrei",
    timestamp: Date.now(),
    content: "Alahu Akbar, Bismillah",
    getInfo: function () {
        console.log("\n            Message type: ".concat(this.type, "\n            Sender: ").concat(this.sender, "\n            To: ").concat(this.recipient, "\n            Date: ").concat(this.timestamp, "\n            Message: ").concat(this.content, "\n        "));
    }
};
messageSender.getInfo();
messageReceiver.getInfo();
