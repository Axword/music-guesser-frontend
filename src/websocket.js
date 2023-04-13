class WebSocketConnection {
    constructor() {
      this.socket = null;
    }
  
    connect(url) {
      this.socket = new WebSocket(url);
  
      this.socket.onopen = (event) => {
        console.log("WebSocket connection opened:", event);
      };
  
      this.socket.onclose = (event) => {
        console.log("WebSocket connection closed:", event);
      };
  
      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  
    onMessage(callback) {
      this.socket.onmessage = (event) => {
        callback(JSON.parse(event.data));
      };
    }
  
    sendMessage(message) {
      this.socket.send(JSON.stringify(message));
    }
  
    close() {
      this.socket.close();
    }
  }
  
  export default WebSocketConnection;
  