<script>
import { defineComponent } from "vue";
import { HealthChecksService } from "../services/health-checks.service";

export default defineComponent({
  name: 'health-check-view',
  data() {
    return {
        healthChecksService: new HealthChecksService(),
        healthChecks: [],
    }
  },
  methods: {
    getAllHealthChecks() {
        this.healthChecksService.getAll().then(response => {
        this.healthChecks = response.data;
      });
    },
  },
  created() {
        this.getAllHealthChecks();
  }
});
</script>

<template>
    <div class="card">
        <pv-datatable v-model:filters="filters" :value="healthChecks" paginator :rows="5" 
          :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem" filterDisplay="row" 
          :loading="loading" :globalFilterFields="['id', 'treadmillId', 'volts', 'watts', 'hp']">
            <!-- <template #header>
                <div class="flex justify-content-end">
                    <span>
                        <input v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template> -->
            <!-- <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template> -->
            <pv-column field="id" sortable  header="Record Id"></pv-column>
            <pv-column field="treadmillId" sortable header="Treadmill Id"></pv-column>
            <!-- <pv-column field="date" sortable header="Date"></pv-column> -->
            <!-- <pv-column field="time" sortable header="Time"></pv-column> -->
            <pv-column field="volts" sortable header="Volts"></pv-column>
            <pv-column field="watts" sortable header="Watts"></pv-column>
            <pv-column field="hp" sortable header="Hp"></pv-column>
        </pv-datatable>
    </div>
</template>