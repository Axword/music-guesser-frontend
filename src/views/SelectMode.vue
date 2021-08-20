<template>

    <top-nav></top-nav>

    <div class="main-container">
      <button @click="goAuthor">
        <h1>AUTHOR</h1>
      </button>
      <button @click="goPlaylist">
        <h1>PLAYLIST</h1>
      </button>
    </div>
    
</template>

<script>
  export default {
    methods: {
      goAuthor() {
        this.$router.push('/author');
      },
      goPlaylist() {
        this.$router.push('/playlist');
      },
    }
  }
</script>

<style scoped>

  button {
    height: 100%;
    width: 50%;
    margin-right: 1px;
  }

  div.main-container {
    background-color: #5c7ce9;
    flex-direction: row;
  }
</style>
