<template>

  <v-card :color="color" height="260" width="200px" hover>
    <v-img :src="barber.image" cover height="120px"></v-img>
    <v-divider></v-divider>
    <v-card-title class="d-flex flex-wrap justify-space-between align-center">
      {{ barber.name }}
      <span class="text-caption float-right d-flex align-center text-blue-grey">
        <v-icon size="xs" color="amber" style="margin-right: 2px;">mdi-star</v-icon>
        {{ barber.rating }}
      </span>
    </v-card-title>
    <v-card-text class="text-medium-emphasis text-grey">
      {{ barber.specialty }}<br>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="bookAppointment(barber.id)">
        Agendar
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  name: "BarberCard",
  props: {
    barber: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: "white", // Cor padrão se nenhuma for informada
    },
  },
  methods: {
    bookAppointment(barberId) {
      // Aqui você pode colocar sua lógica de agendamento
      console.log("Agendar com barbeiro:", barberId);
    },
  },
};
</script>

<style scoped></style>
