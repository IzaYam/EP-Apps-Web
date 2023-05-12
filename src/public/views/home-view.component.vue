<script>
import { defineComponent } from "vue";
import { HealthChecksService } from "../../analytics/services/health-checks.service";

export default defineComponent({
  name: 'home-view',
  data() {
    return {
        healthChecksService: new HealthChecksService(),
        healthChecks: [],
        Volts: [],
        Watts: [],
        Hp: [],
    }
  },
  methods: {
    getAllHealthChecks() {
        this.healthChecksService.getAll().then(response => {
        this.healthChecks = response.data;
        // this.getSpecificContent();
      });
    },
    // getSpecificContent() {
    //   this.healthChecksService.getAll().forEach(item => )
    // },
  },
  created() {
        this.getAllHealthChecks();
  }
});
</script>

<template>
  <pv-card>
    <template #title> Average Performance </template>
    <template #content>
        <ul>
            <li>Volts:</li>
            <li>Watts:</li>
            <li>Hp:</li>
        </ul>
    </template>
  </pv-card>
</template>

<style scoped>
.p-card{
  margin: 1rem;
}
</style>