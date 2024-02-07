<template>
    <div>
      <ul class="ul-chat-box">
        <li v-for="(message, index) in messages" :key="index">
          <div v-if="index % 2 !== 0">
            <img src="../assets/icon_new_16x16.png" alt="Morpheus Logo" style="width: 16px; height: 16px;">
            <span class="user-title"> Morpheus:</span>
            <p>&gt; {{ message.text }}</p> 
          </div>
          <div v-else>
            <img src="../assets/icon_new_16x16.png" alt="Your Profile" style="width: 16px; height: 16px;">
            <span class="user-title"> You:</span>
            <p>&gt; {{ message.text }}</p> 
          </div>
        </li>
      </ul>
    </div>
  </template>

<script>
export default {
    name: 'ChatBox',
    props: ['messages'],
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    }

}
</script>

<style scoped>
ul {
  background-color: #2F4F4F;
  list-style-type: none; /* Removes default list styling */
  padding: 0;
  margin: 0;
}

ul li {
  background-color: #2F4F4F; /* Darker gray than your input, but lighter than #333 */
  text-align: left;
  color:    rgb(255, 255, 255); /* White text color for readability */
  padding: 10px 15px; /* Adequate padding for touch targets and readability */
  margin-bottom: 8px; /* Space between list items */
  border-radius: 5px; /* Slightly rounded corners for a modern look */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; /* Consistent font */
  position: relative; /* Needed for the ::before pseudo-element */
  padding-left: 60px; /* Increase left padding for indentation */
}


ul li:last-child {
  margin-bottom: 0; /* Removes margin from the last item to maintain spacing consistency */
}

.user-title {
  color: #FF7F50;
}

</style>
