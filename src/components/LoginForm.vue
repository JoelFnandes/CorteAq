<template>
    <v-container  style="display: flex; flex-direction: column; justify-content: center; gap: 5em; padding: 0px 15% 0px 15%; " >
        <div>
            <h2 class="text-center">Bem-vindo!</h2>
            <p class="text-center">Entre ou registre-se para acessar a plataforma</p>
        </div>

        <v-form class="px-5 text-center">

            <v-text-field v-model="email" :readonly="loading" :rules="emailRules" class="mb-2" label="Email"
                placeholder="Insira seu email" clearable></v-text-field>

            <v-text-field v-model="password" :readonly="loading" :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'" label="Senha" placeholder="Insira sua senha" clearable
                append-inner-icon="mdi-eye" @click:append-inner="showPassword = !showPassword" @keyup.enter="doLogin"></v-text-field>

            <v-btn color="primary" class="mt-3" rounded="xl" min-width="150px" variant="flat" @click="doLogin()">Entrar</v-btn>
        </v-form>

        <p class="text-center mt-4">
            Ainda não possui uma conta? <a href="/registro" class="text-primary">Cadastrar-se</a>
        </p>
    </v-container>
</template>

<script>
import AuthenticationRoutes from '@/api/AuthenticationRoutes';
import LoginDTO from "@/dto/LoginDTO"
export default {
    data() {
        return {
            email: '',
            password: '',
            loading: false,
            emailRules: [
              v => !!v || 'Campo obrigatório',
              v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
            ],
            passwordRules: [
              v => !!v || 'Campo é obrigatório',
            ],
            showPassword: false, // Controle da visibilidade da senha
        };
    },

    mounted() {
      window.addEventListener('keyup', this.handleEnter);
    },
    beforeUnmount() {
      window.removeEventListener('keyup', this.handleEnter);
    },
    methods: {
        handleEnter(event) {
          if (event.key === 'Enter') {
            this.doLogin();
          }
        },
        async doLogin() {
            let data = new LoginDTO({username: this.email, password: this.password})
            const response = await AuthenticationRoutes.login(data.toJSON())
            if(response.status == 200) {
                const token = response.data.token
                this.storeToken(token)
                this.$router.push({name: 'Home'})
            }

        },
        storeToken(token) {
            localStorage.setItem("token", token)
        }
    }
};
</script>
