<script setup>
    import { defineProps, defineEmits, onMounted, ref as vueRef } from 'vue';

    defineEmits(['close-modal'])

    

</script>

<template>
    <div class="popup">
        <div class="popup-inner w-3/4">
          
            <v-card-title class="mb-9">
                Instalar nuevo plugin
            </v-card-title>
            <v-form>
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field 
                        class="mb-5"
                        label="Nombre"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field 
                        class="mb-5"
                        label="Tipo Plugin"
                        />
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field 
                        class="mb-5"
                        label="Clave secreta"
                        />
                    </v-col>
                </v-row>
                <v-text-field 
                    class="mb-5"
                    label="json config"
                />
                <v-text-field 
                class="mb-5"
                label="Etiqueta"
                />
                <v-row>
                    <v-col
                        cols="12"
                        md="6">
                        <v-btn
                            color="pink-accent-3"
                            block
                            @click="$emit('close-modal')"
                            >
                            Cancelar
                        </v-btn>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                    >
                        <v-btn
                            color="green"
                            block
                            
                            >
                            Instalar plugin
                        </v-btn>
                    </v-col>
            </v-row>

            </v-form>
          
        </div>
    </div>
</template>

<style scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup-inner{
        background: #fff;
        border-radius: 15px;
        padding: 32px;
    }
    form {
        display: flex;
        flex-direction: column;
        
    }

    label, input {
        display: block;
        margin-bottom: 10px;
    }

</style>