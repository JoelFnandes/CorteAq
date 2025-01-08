<template>
    <div style="height: 100vh; width: 100vw; margin: 0; padding: 0;">
      <v-row style="display: flex; align-items: center; height: 100vh;">
        <!-- Imagem -->
        <v-col cols="12" md="7" style="height: 100%; padding: 0; margin: 0;" >
          <v-img cover  src="@/assets/barber-register.jpg" alt="Barber Image" style="height: 100%" class="login-image mt-3" />
        </v-col>
  
        <!-- Formulário -->
        <v-col cols="12" md="5" class="d-flex align-center justify-center" style="height: 100%">
          <RegisterForm />
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  import RegisterForm from '@/components/RegisterForm.vue';
  
  export default {
    components: {
      RegisterForm,
    },
  };
  </script>
  

  <style scoped>
  .v-container{
    height: 100%;
  }

  
  </style>
  