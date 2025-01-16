<template>
  <v-card :color="grey-lighten-5" height="325px" width="55vw" hover>
    <v-img :src="appointment.barber.image" cover height="50%">
      <v-btn style="position: absolute; top: 5px; right: 5px" v-if="appointment.status !== 'CONCLUIDO'"
             color="red-darken-3" size="x-small" variant="flat" icon title="Cancelar agendamento" @click="dialogCancel = true">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-img>
    <v-card-title>
      Agendamento com {{ appointment.barber.name }}
      <span class="float-right mr-1">
        <v-btn color="green-darken-3" size="small" density="compact" icon variant="plain"
               title="Entrar em contato via Whatsapp"><v-icon>mdi-whatsapp</v-icon></v-btn>
        <v-btn color="amber-lighten-1" size="small" density="compact" icon variant="plain" title="Relatar um problema" @click="dialogProblem = true"><v-icon>mdi-flag</v-icon></v-btn>
      </span>
    </v-card-title>
    <v-card-text class="mt-3">
      <span v-for="service in appointment.services">
        <v-chip class="mr-2" :text="service"></v-chip>
      </span>
      <v-chip color="green" :text="'R$' + appointment.valor"  />
      <v-chip class="float-right" color="primary" :text="appointment.time"></v-chip>
    </v-card-text>

    <v-card-actions class="d-flex align-center">
      <v-btn v-if="appointment.status === 'CONCLUIDO' && !appointment.rating" color="amber" @click="dialogAval = true">Avaliar</v-btn>
      <v-rating v-if="appointment.rating" color="amber" density="compact" active-color="amber" readonly :model-value="appointment.rating" ></v-rating>

      <span class="ml-auto mr-2">
        <v-chip v-if="appointment.status === 'PENDENTE'" text="Pendente" prepend-icon="mdi-clock"
                color="yellow"></v-chip>
        <v-chip v-else-if="appointment.status === 'ACEITO'" text="Agendamento aceito" prepend-icon="mdi-accept"
                color="green-accent-4"></v-chip>
        <v-chip v-else-if="appointment.status === 'A_CAMINHO'" text="Barbeiro a caminho" prepend-icon="mdi-walk"
                color="green-accent-4"></v-chip>
        <v-chip v-else-if="appointment.status === 'ANDAMENTO'" text="Em andamento" prepend-icon="mdi-progress-clock"
                color="primary"></v-chip>
        <v-chip v-else-if="appointment.status === 'CONCLUIDO'" text="Concluído" prepend-icon="mdi-check"
                color="teal-darken-3"></v-chip>
        <v-chip v-else-if="appointment.status === 'CANCELADO'" text="Cancelado" prepend-icon="mdi-cancel"
                color="red-accent-4"></v-chip>
      </span>
    </v-card-actions>

    <v-dialog v-model="dialogCancel" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirmação</v-card-title>
        <v-card-text>Deseja realmente cancelar o agendamento?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  text @click="cancelAppointment">Sim</v-btn>
          <v-btn  text @click="dialogCancel = false">Não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAval" max-width="600">
      <v-card>
        <v-card-title class="headline">Avalie sua experiência com {{appointment.barber.name}}</v-card-title>
        <v-card-text class="text-center">
          <v-label>Deixe-nos saber como foi sua experiência</v-label>
          <v-rating
            v-model="rating"
            class="mt-6"
            :item-labels="['Péssima', '', '', '', 'Excelente']"
            active-color="amber"
            color="amber"
          ></v-rating>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  text color="amber" @click="sendAval">Enviar</v-btn>
          <v-btn  text @click="dialogAval = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogProblem" max-width="400">
      <v-card>
        <v-card-title class="headline">Relatar um problema</v-card-title>
        <v-card-text class="text-center">
          <v-textarea placeholder="Conte o que houve" variant="plain" no-resize rounded="rounded" />

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  text color="amber" @click="sendProblem">Enviar</v-btn>
          <v-btn  text @click="dialogProblem = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbarAval"
      :timeout="2000"
      color="green-darken-3"
      rounded="pill"
      opacity="0"
      elevation="25"
    >
      Sua avaliação foi enviada com sucesso!
      <v-icon @click="snackbarAval = false" class="float-right">mdi-close</v-icon>
    </v-snackbar>
  </v-card>

</template>

<script>

export default {
  name: "AppointmentCard",
  props: {
    appointment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      dialogCancel: false,
      dialogAval: false,
      dialogProblem: false,
      snackbarAval: false,
      rating: null,
    };
  },
  methods: {
    cancelAppointment() {
      console.log("Agendamento cancelado");
      this.dialogCancel = false;
    },
    sendAval() {
      console.log("Avaliação enviada");
      this.appointment.rating = this.rating
      this.rating = null
      this.dialogAval = false;
      this.snackbarAval = true;
    },
    sendProblem() {
      console.log("Relato enviado")
      this.dialogProblem
    }
  }
}
</script>

<style scoped>

</style>
