class Message {
    constructor(message, fullName, from, to, isRead) {
      this.message = message;
      this.fullName = fullName;
      this.from = from;
      this.to = to;
      this.isRead = isRead;
    }
  }

  export default Message;