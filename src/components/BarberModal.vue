<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-img :src="barber.image" cover height="150px"></v-img>
      <v-card-text>
        <v-label class="ml-2">Escolha os serviços</v-label>
        <v-chip-group
          v-model="services"
          selected-class="text-primary"
          column
          multiple
        >
          <v-chip
            text="Corte"
            :value="50"
          ></v-chip>

          <v-chip
            text="Barba e bigode"
            :value="30"
          ></v-chip>

          <v-chip
            text="Sobrancelha"
            :value="10"
          ></v-chip>


        </v-chip-group>

        <div>
          <v-chip color="green" size="large">R${{ total }}</v-chip>
        </div>

        <v-label class="ml-2 mt-4">Escolha entre os horários disponíveis</v-label>
        <v-chip-group
          v-model="appointmentTime"
          selected-class="text-primary"
          column
          mandatory
        >
          <v-chip
            text="14:00 - 14:30"
          ></v-chip>

          <v-chip
            text="14:30 - 15:00"
          ></v-chip>

          <v-chip
            text="15:00 - 16:00"
          ></v-chip>

          <v-chip
            text="16:00 - 16:30"
          ></v-chip>

          <v-chip
            text="16:30 - 17:00"
          ></v-chip>

          <v-chip
            text="17:00 - 17:30"
          ></v-chip>

        </v-chip-group>




        <v-text-field placeholder="Observação" class="mt-6" rounded="xl" variant="outlined"/>


      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green-darken-3" text @click="bookAppointment(barber.id)">Confirmar</v-btn>
        <v-btn color="red darken-1" text @click="dialog = false">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar
    v-model="snackbar"
    :timeout="2000"
    color="green-darken-3"
    rounded="pill"
    opacity="0"
    elevation="25"
  >
    Agendamento realizado com sucesso!
    <v-icon @click="snackbar = false" class="float-right">mdi-close</v-icon>
  </v-snackbar>
</template>

<script>
export default {
  name: "BarberModal",

  data() {
    return {
      dialog: false,
      barber: null,
      services: [],
      appointmentTime: null,
      snackbar: false
    };
  },
  computed: {
    total() {
      return this.services.reduce((total, value) => total + value, 0);
    }
  },
  methods: {
    bookAppointment(barberId) {
      console.log("Agendar com barbeiro:", barberId);
      this.dialog = false;
      this.snackbar = true;
      this.services = [];
      this.appointmentTime = null;
    },
    openDialog(barber) {
      this.barber = barber
      this.dialog = true
    }
  },
}
</script>
<style scoped>

</style>
