<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
          <h1 class="text-center mb-3">Heures vers jour/homme</h1>
            <v-text-field
              v-model="hours"
              label="Heures à convertir"
              type="number"
              hide-details
              @input="convert"
            ></v-text-field>

            <v-row align="center" class="mt-1">
              <v-col>
                <v-text-field
                  readonly
                  hide-details
                >
                  Jour homme : {{ result }}
                </v-text-field>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  icon="mdi-content-copy"
                  size="small"
                  @click="copyToClipboard"
                  color="primary"
                >
                <v-icon>mdi-content-copy</v-icon>
                  <v-tooltip
                    activator="parent"
                    location="top"
                  >
                    Copier la valeur
                  </v-tooltip>
                </v-btn>
              </v-col>
            </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { calculateManDays } from '../utils/timeCalculator'

const hours = ref('')
const result = ref('')

const convert = () => {
  result.value = calculateManDays(hours.value)
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(result.value)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

watch(hours, convert)
</script>

<style>
.v-alert__content {
  font-size: 15px;
}
.v-alert {
  height: 50px;
}
/* Add any specific styles for the TimeConverter component here */
</style>