<template>  
  <!--------------------------------------------------------------------Uncomment to check users--
  <ul>    
    <li v-for="user in this.users" :key="user.id">{{ user.nick }}</li>
  </ul>
  -->
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      usersDbUrl: 'https://song-guesser-caa2c-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      userFilip: {
        id: '1',
        nick: 'FlipFlop',
        email: 'filip.tomczyk00@gmail.com',
        score: 0,
      },
      userMichal: {
        id: '2',
        nick: 'Axword',
        email: 'cebule.axworda@gmail.com',
        score: 0,
      },
      users: []
    };
  },

  methods: {
    fetchNewUser() {
      fetch(this.usersDbUrl, {              //send data to Firebase
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.userMichal.id,
          nick: this.userMichal.nick,
          email: this.userMichal.email,
          score: this.userMichal.score,
        }),
      })
      .catch(err => {
        alert("Uh-Oh, could not send data :(\n" + err)
        console.log(err);
      });  
    },

    fetchUserData() {
      fetch(this.usersDbUrl)    
        .then(response => {
          if(response.ok)
            return response.json();
        })
        .then(data => {
          const users = [];
          for(const firebaseId in data) {
            users.push({
              id: data[firebaseId].id,
              nick: data[firebaseId].nick,
              email: data[firebaseId].email,
              score: data[firebaseId].score,
            });
          }
          this.users = users;
          this.$router.push({path: '/login'});
        })
        .catch(err => {
          alert("Uh-Oh, could not fetch data :(\n" + err);
          console.log(err);
        });
    }
  },
  
  mounted() {
    //this.fetchNewUser();  TODO: Use this method to pass new user 
    this.fetchUserData();
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: auto;
  }

  body {
    background: linear-gradient(to bottom right, #1ae3d9, #5c7ce9);
    background-repeat: no-repeat;
    background-size: cover;
  }

  div {
    height: 100%;
    width: 100%;
    margin: 0 auto;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div.main-container {
    height: 80%;
    width: 50%;

    background-color: white;
    box-shadow: 0px 0px 10px hsl(0, 11%, 9%);
    border-radius: 5px;
    border: 1px solid gray;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 100%;
  }
</style>
