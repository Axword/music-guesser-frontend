export default class Fetcher {
    constructor() {
        this.activeData = [];
        this.serverResponded = false;
    }

    static getActiveData() {
        return this.activeData;
    }

    static getResponseStatus() {
        return this.serverResponded;
    }

    static getData(url) {
        this.activeData = [];
        this.serverResponded = false;
        fetch(url)    
            .then(response => {
                if(response.ok)
                    return response.json();
            })
            .then(data => {
                for(const firebaseId in data) {
                    this.activeData.push({
                        id: data[firebaseId].id,
                        nick: data[firebaseId].nick,
                        email: data[firebaseId].email,
                        score: data[firebaseId].score,
                    });
                }
                this.serverResponded = true;
            })
            .catch(err => {
                this.handleError(err);
            });
    }

    static sendData(url) {
        fetch(url, {              
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: 'Admin',
              nick: 'Admin',
              email: 'admin@gmail.com',
              score: 0,
            }),
          })
          .catch(err => {
            this.handleError(err);
          }); 
    }

    static handleError(err) {
        alert("Uh-Oh, could not fetch data :(\n\n" + err)
        console.log(err);
    }
}