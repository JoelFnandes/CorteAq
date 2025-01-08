<template>
    <v-container
        style="display: flex; flex-direction: column; justify-content: center; gap: 5em; padding: 0px 15% 0px 15%; ">
        <div>
            <h2 class="text-center">Cadastre-se</h2>
            <p class="text-center">Preencha as informações para criar um usuário.</p>
        </div>

        <v-form class="px-5 d-flex flex-column align-stretch">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="firstName" :readonly="loading" :rules="[required]" class="mb-2" label="Nome"
                        clearable></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="lastName" :readonly="loading" :rules="[required]" class="mb-2"
                        label="Sobrenome" clearable></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-text-field v-model="telephone" :readonly="loading" :rules="[required]" class="mb-2" label="Telefone"
                    placeholder="Número do telefone" clearable></v-text-field>
            </v-row>
            <v-row>
                <p class="text-medium-emphasis text-caption text-left">Você usará o email para fazer login.</p>

            </v-row>
            <v-row>
                <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email"
                    placeholder="Insira seu email" clearable></v-text-field>
            </v-row>

            <v-row>
                <v-text-field v-model="password" :readonly="loading" :rules="[required]"
                    :type="showPassword ? 'text' : 'password'" label="Senha" placeholder="Insira sua senha" clearable
                    append-inner-icon="mdi-eye" @click:append-inner="showPassword = !showPassword"></v-text-field>
            </v-row>

            <v-row class="mt-8 mb-8 ">
                <v-btn-toggle group color="primary" v-model="userType" rounded="lg" variant="outlined" class="mx-auto">
                    <v-btn>Cliente</v-btn>
                    <v-btn>Barbeiro</v-btn>
                </v-btn-toggle>
            </v-row>

            <v-row>
                <v-btn color="primary" class="mt-3" rounded="xl" min-width="150px" block variant="flat"
                    @click="doRegister()">Criar
                    usuário</v-btn>
            </v-row>

            <v-row>
                <v-btn color="primary" class="mt-3" rounded="xl" min-width="150px" block variant="outlined"
                    href="/login">Voltar</v-btn>
            </v-row>
        </v-form>


    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            telephone: '',
            loading: false,
            userType: null,
            required: v => !!v || 'Campo obrigatório',
            showPassword: false, // Controle da visibilidade da senha

        };
    },
    methods: {
        doRegister() {
            console.log('registreeiiiii')
        }
    }
};
</script>
