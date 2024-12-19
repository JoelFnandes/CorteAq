<template>
    <v-container style="padding: 0; margin: 0;">
      <v-row style="display: flex; align-items: center; height: 100%;">
        <!-- Imagem -->
        <v-col cols="12" md="7" class="d-none d-md-flex" style=" height: 100%;padding: 0;margin-top: 12px;">
          <img src="@/assets/barber-login.png" alt="Barber Image" class="login-image" />
        </v-col>
  
        <!-- Formulário -->
        <v-col cols="12" md="5" class="d-flex align-center justify-center">
          <LoginForm />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import LoginForm from '@/components/LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  

  <style scoped>
  .v-container{
    height: 100%;
  }

  .login-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  