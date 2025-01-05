<template>
    <v-app-bar>
      <v-container>
        <v-row justify="space-between" align="center" >
          <v-col cols="auto" style="display: flex; align-items: center">
            <img src="../assets/logo-corteaq.svg" alt="" style="height: 40px">
          </v-col>
          <v-col cols="auto">
            <v-btn icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

      <v-container fluid>
        <!--Cars de Promoções -->
        <v-row justify="center" style="padding: 2em">
          <v-col md="3" cols="3" v-for="n in 3" :key="n">
            <v-skeleton-loader type="card"/>
          </v-col>
        </v-row>

      <!-- Campo de busca -->
        <v-row justify="center" align="center">
          <v-col md="4" cols="auto">
            <v-text-field append-inner-icon="mdi-magnify" variant="outlined" placeholder="Buscar barbeiros"/>
          </v-col>
        </v-row>

        <!-- Barbeiros próximos a você -->
        <v-row justify="center" align="center">
          <v-col cols="auto" md="3" style="display: flex">
            <h4 style="margin-left: auto">Barbeiros próximos de você</h4>
          </v-col>
          <v-col cols="auto" md="5">
            <hr/>
          </v-col>
          <v-col cols="auto"  md="3">
            <v-btn >Ver mais</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" style="padding: 2em">
          <BarberCard v-for="barber in barbers" :key="barber.id" :barber="barber" v-if="barbers.length > 0" />
          <v-col cols="12" v-else>
            <p class="no-barbers-message">Nenhum barbeiro encontrado.</p>
          </v-col>
        </v-row>

        <!-- Melhores avaliados da semana -->
        <v-row justify="center" align="center">
          <v-col cols="auto" md="3" style="display: flex">
            <h4 style="margin-left: auto">Melhores avaliados da semana</h4>
          </v-col>
          <v-col cols="auto" md="5">
            <hr/>
          </v-col>
          <v-col cols="auto"  md="3">
            <v-btn >Ver mais</v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" style="padding: 1em;">
          <v-col cols="3" md="3" v-for="n in 3" :key="'barbeiro-' + n">
            <v-skeleton-loader type="card" />
          </v-col>
        </v-row>

      </v-container>
</template>
<script>
import BarberCard from "@/components/BarberCard.vue";

export default {
  components: {
    BarberCard,
  },
  data() {
    return {
      barbers: [
        {
          id: 1,
          name: "Carlos Barber",
          specialty: "Corte Clássico",
          rating: 4.8,
          image: "https://via.placeholder.com/200",
        },
        {
          id: 2,
          name: "João Silva",
          specialty: "Barba e Bigode",
          rating: 4.6,
          image: "https://via.placeholder.com/200",
        },
        {
          id: 3,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.9,
          image: "https://via.placeholder.com/200",
        },
      ],
    };
  },
};
</script>
<style scoped>
.no-barbers-message {
  text-align: center;
  font-size: 18px;
  color: #666;
}
</style>
