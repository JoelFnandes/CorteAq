<template>
  <v-navigation-drawer
    app
    expand-on-hover
    v-model="drawer"
    color="primary"
    rail
    dark
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="padding: 8px">
            <v-img :src="logo" class="logo" />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="item in menuItems" :key="item.title" @click="navigate(item.route)">
        <v-list-item-content style="display: flex; align-items: center; justify-content: flex-start; height: 60px">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title style="margin-left: 10px">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import LogoCorteAq from '@/assets/logo-corteaq.svg';

export default {
  data() {
    return {
      logo: LogoCorteAq,
      drawer: true,
      menuItems: [
        { title: "Agenda", icon: "mdi-calendar", route: "/agenda" },
        { title: "Financeiro", icon: "mdi-cash", route: "/financeiro" },
        { title: "Avaliações", icon: "mdi-star", route: "/avaliacoes" },
        { title: "Perfil", icon: "mdi-account", route: "/perfil" },
        { title: "Sair", icon: "mdi-logout", route: "/logout" },
      ],
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.logo {
  max-height: 40px;
  filter: invert(1);
}
</style>
