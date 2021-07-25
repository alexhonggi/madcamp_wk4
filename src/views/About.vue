<template>
  <div class="about">
    <input-form></input-form>
    <login></login>
  </div>
</template>

<script>
import InputForm from '../components/InputForm.vue';
import Login from '../components/Login.vue';

export default {
  components: {
    InputForm, Login
  }
}
</script>
