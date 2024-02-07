<template>
  <div>
    <button class="button-metamask" @click="connectMetaMask">
      <img src="../assets/metamask_24x24.png" alt="Metamask Logo" class="metamask-logo">
      Connect
    </button>
  </div>
</template>

<script>


export default {
  name: 'MetamaskButton',
  methods: {
    async connectMetaMask() {

    }
  }
};
</script>

<style>
.button-metamask {
  background-color: #2F4F4F;
  border: 2px solid #FF7F50;
  border-radius: 30px;
  padding: 5px;
  color: #FF7F50;
  display: flex; /* Make the button a flex container */
  align-items: center; /* Center the contents vertically */
  justify-content: space-between; /* Space between the logo and text */
}
.button-metamask:hover{
  border: 2px solid #09256c;
  color: #09256c;
}
.metamask-logo {
  width: 24px;
  height: 24px;
  margin-right: 5px; /* Add spacing between the logo and text */
}
</style>
