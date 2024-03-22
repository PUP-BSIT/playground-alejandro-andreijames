interface textMessage {
    type: "text",
    sender: string,
    recipient: string,
    timestamp: number,
    content: string,
    getInfo(): void
}

interface imageMessage {
    type: "image",
    sender: string,
    recipient: string,
    timestamp: number,
    url: string,
    caption: string
}

interface videoMessage {
    type: "video",
    sender: string,
    recipient: string,
    timestamp: number,
    url: string,
    duration: number
}

type mediaType = textMessage | imageMessage | videoMessage;
type Sender = "Andrei" | "Adnan" | "Pearl";
type Receiver = "Chan" | "Jalipa" | "Tocmo";

enum messageStatus {
    Sent = "SENT",
    Delivered = "DELIVERED",
    Read = "READ",
}

const messageSender: textMessage = {
    type: "text",
    sender: "Andrei",
    recipient: "Adnan",
    timestamp: Date.now(),
    content: "Eid'l Adha",
    getInfo() {
        console.log(`
            Message type: ${this.type}
            Sender: ${this.sender}
            To: ${this.recipient}
            Date: ${this.timestamp}
            Message: ${this.content}
        `);
    }
}

const messageReceiver: textMessage = {
    type: "text",
    sender: "Adnan",
    recipient: "Andrei",
    timestamp: Date.now(),
    content: "Alahu Akbar, Bismillah",
    getInfo() {
        console.log(`
            Message type: ${this.type}
            Sender: ${this.sender}
            To: ${this.recipient}
            Date: ${this.timestamp}
            Message: ${this.content}
        `);
    }
}

messageSender.getInfo();
messageReceiver.getInfo();