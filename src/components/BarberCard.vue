<template>
  <v-col md="3" cols="12">
    <v-card>
      <v-img :src="barber.image" height="200px"></v-img>

      <v-card-title>{{ barber.name }}</v-card-title>

      <v-card-text>
        Especialidade: {{ barber.specialty }}<br>
        Avaliação: {{ barber.rating }} ⭐
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="bookAppointment(barber.id)">
          Agendar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "BarberCard",
  props: {
    barber: {
      type: Object,
      required: true,
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

<style scoped>

</style>
