<template>
    <v-container class="w-50" style="display: flex; flex-direction: column; gap: 5em;">
        <div>
            <h2 class="text-center">Bem-vindo!</h2>
            <p class="text-center">Entre ou registre-se para acessar a plataforma</p>
        </div>

        <v-form>

            <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
                placeholder="Insira seu email" clearable></v-text-field>

            <v-text-field v-model="password" :readonly="loading" :rules="[required]"
                :type="showPassword ? 'text' : 'password'" label="Senha" placeholder="Insira sua senha" clearable
                append-inner-icon="mdi-eye" @click:append-inner="showPassword = !showPassword"></v-text-field>

            <v-btn color="primary" block>Entrar</v-btn>
        </v-form>

        <p class="text-center mt-4">
            Ainda não possui uma conta? <a href="/register">Cadastrar-se</a>
        </p>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            loading: false,
            required: v => !!v || 'Campo obrigatório',
            showPassword: false, // Controle da visibilidade da senha
        };
    },
};
</script>
