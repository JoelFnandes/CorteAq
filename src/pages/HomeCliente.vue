<template>
  <v-app-bar>
    <v-container>
      <v-row justify="space-between" align="center" style="margin: 0 5em">
        <v-col cols="auto" style="display: flex; align-items: center">
          <img src="../assets/logo-corteaq.svg" alt="" style="height: 40px">
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon size="32">mdi-account-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-container fluid style="display:flex; justify-content: center">
    <div style="width: 70%; display: flex; flex-flow: column; justify-content: start; padding-top: 0">
      <!--Cars de Promoções -->
      <v-row justify="center" style="padding: 2em">
        <v-col v-for="n in 3" :key="n">
          <v-skeleton-loader type="card"/>
        </v-col>
      </v-row>

    <!-- Campo de busca -->
    <v-row justify="center" align="center">
      <v-col md="6" cols="12">
        <v-text-field append-inner-icon="mdi-magnify" variant="solo" placeholder="Buscar barbeiros"
          style="border-radius: 20px" />
      </v-col>
    </v-row>

    <!-- Barbeiros próximos a você -->
    <v-row  align="center" style="justify-content: center; margin-bottom: 5px">
      <v-col cols="auto" style="display: flex; justify-content: flex-end;">
        <h4>Barbeiros próximos de você</h4>
      </v-col>
      <v-col cols="auto" md="7" style="display: flex; justify-content: center">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="auto" style="display: flex; justify-content: flex-start">
        <v-btn>Ver mais</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" style="padding: 0.5em; margin-bottom: 2em;">
      <v-slide-group show-arrows v-if="barbersProximos.length > 0" style="max-width: 80vw; min-height: 30vh">
        <v-slide-group-item v-for="barber in barbersProximos" :key="barber.id" v-slot="{ isSelected, toggle }">
          <BarberCard :barber="barber" class="mx-6" color="grey-lighten-5" />
        </v-slide-group-item>
      </v-slide-group>

      <v-col cols="12" v-else>
        <p class="no-barbers-message">Nenhum barbeiro encontrado.</p>
      </v-col>
    </v-row>

    <!-- Melhores avaliados da semana -->
    <v-row justify="center" align="center" style="margin-bottom: 5px">
      <v-col cols="auto"  style="display: flex">
        <h4 style="margin-left: auto">Melhores avaliados da semana</h4>
      </v-col>
      <v-col cols="auto" md="7">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="auto">
        <v-btn>Ver mais</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" style="padding: 0.5em; margin-bottom: 2em;">
      <v-slide-group show-arrows v-if="barbersMelhoresSemana.length > 0" style="max-width: 80vw; min-height: 30vh">
        <v-slide-group-item v-for="barber in barbersMelhoresSemana" :key="barber.id" v-slot="{ isSelected, toggle }">
          <BarberCard :barber="barber" class="mx-6" color="grey-lighten-5" />
        </v-slide-group-item>
      </v-slide-group>

      <v-col cols="12" v-else>
        <p class="no-barbers-message">Nenhum barbeiro encontrado.</p>
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script>
import BarberCard from "@/components/BarberCard.vue";
import barberImage1 from "@/assets/barbeiro_1.jpg"
import barberImage2 from "@/assets/barbeiro_2.jpg"
import barberImage3 from "@/assets/barbeiro_3.jpg"
import barberImage4 from "@/assets/barbeiro_4.jpg"
import barberImage5 from "@/assets/barbeiro_5.jpg"
import barberImage6 from "@/assets/barbeiro_6.jpg"

export default {
  components: {
    BarberCard,
  },
  data() {
    return {
      barbersProximos: [
        {
          id: 1,
          name: "Carlos Barber",
          specialty: "Corte Clássico",
          rating: 4.0,
          image: barberImage1,
        },
        {
          id: 2,
          name: "Jorge Cortes",
          specialty: "Barba e Bigode",
          rating: 4.5,
          image: barberImage2,
        },
        {
          id: 3,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.2,
          image: barberImage3,
        },
        {
          id: 4,
          name: "Carlos Barber",
          specialty: "Corte Clássico",
          rating: 4.0,
          image: barberImage1,
        },
        {
          id: 5,
          name: "Jorge Cortes",
          specialty: "Barba e Bigode",
          rating: 4.5,
          image: barberImage2,
        },
        {
          id: 6,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.2,
          image: barberImage3,
        },
        {
          id: 7,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.2,
          image: barberImage3,
        },
        {
          id: 8,
          name: "Carlos Barber",
          specialty: "Corte Clássico",
          rating: 4.0,
          image: barberImage1,
        },
        {
          id: 9,
          name: "Jorge Cortes",
          specialty: "Barba e Bigode",
          rating: 4.5,
          image: barberImage2,
        },
        {
          id: 10,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.2,
          image: barberImage3,
        },
        {
          id: 11,
          name: "Carlos Barber",
          specialty: "Corte Clássico",
          rating: 4.0,
          image: barberImage1,
        },
        {
          id: 12,
          name: "Jorge Cortes",
          specialty: "Barba e Bigode",
          rating: 4.5,
          image: barberImage2,
        },
        {
          id: 13,
          name: "Lucas Almeida",
          specialty: "Corte Moderno",
          rating: 4.2,
          image: barberImage3,
        },
      ],
      barbersMelhoresSemana: [
        {
          id: 1,
          name: "Renan Stillo",
          specialty: "Corte Clássico",
          rating: 4.8,
          image: barberImage4,
        },
        {
          id: 2,
          name: "João Silva",
          specialty: "Barba e Bigode",
          rating: 4.6,
          image: barberImage5,
        },
        {
          id: 3,
          name: "Ana Clara",
          specialty: "Corte Moderno",
          rating: 4.9,
          image: barberImage6,
        },
        {
          id: 4,
          name: "João Silva",
          specialty: "Barba e Bigode",
          rating: 4.6,
          image: barberImage5,
        },
        {
          id: 5,
          name: "Ana Clara",
          specialty: "Corte Moderno",
          rating: 4.9,
          image: barberImage6,
        },
        {
          id: 6,
          name: "Ana Clara",
          specialty: "Corte Moderno",
          rating: 4.9,
          image: barberImage6,
        },
        {
          id: 7,
          name: "João Silva",
          specialty: "Barba e Bigode",
          rating: 4.6,
          image: barberImage5,
        },
        {
          id: 8,
          name: "Ana Clara",
          specialty: "Corte Moderno",
          rating: 4.9,
          image: barberImage6,
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
