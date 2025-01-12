<template>
  <v-app>
    <!-- Menu Lateral -->
    <MenuLateral />

    <!-- Conteúdo Principal -->
    <v-main>
      <v-container fluid style="max-width: 80%; margin-top: 3em">
        <h1 style="margin-bottom: 10px">Bem-vindo, {{ barberName }}!</h1>

        <!-- Cards de Atalhos -->
        <v-row justify="center">
          <v-col md="4" cols="12">
            <v-card class="pa-3">
              <v-card-title>Próximos Agendamentos</v-card-title>
              <v-card-text>Você tem 3 agendamentos hoje.</v-card-text>
            </v-card>
          </v-col>

          <v-col md="4" cols="12">
            <v-card class="pa-3">
              <v-card-title>Financeiro</v-card-title>
              <v-card-text>R$ 1.200,00 em serviços concluídos.</v-card-text>
            </v-card>
          </v-col>

          <v-col md="4" cols="12">
            <v-card class="pa-3">
              <v-card-title>Avaliações</v-card-title>
              <v-card-text>4.8 ⭐ de média.</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";

export default {
  components: {
    MenuLateral,
  },
  data() {
    return {
      barberName: "Carlos Barber",
    };
  },
};
</script>
