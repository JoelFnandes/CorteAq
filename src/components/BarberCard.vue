<template>
  <v-card :color="color" height="260" width="250px" hover>
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
      {{ barber.speciality }}<br>
    </v-card-text>

    <v-card-actions>

      <v-btn color="primary" @click="$refs.barberModal.openDialog(barber)">
        Agendar
      </v-btn>
    </v-card-actions>

    <BarberModal ref="barberModal" />
  </v-card>

</template>

<script>

  import BarberModal from "@/components/BarberModal.vue";

  export default {
    name: "BarberCard",
    components: {BarberModal},

    props: {
      barber: {
        type: Object,
        required: true,
      },
      color: {
        type: String,
        default: "white",
      },
    },
    emits: ['open-dialog'],
  };
</script>

<style scoped></style>
