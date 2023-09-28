<script setup>
    import { ref, reactive ,onMounted } from 'vue'
    import InstalPlugin from '../../components/InstallPlugin.vue'    

    const modal = ref(false)

    const openModal = () =>{
        modal.value = true
    }

    const closemodal = () => {
        modal.value = false
    }

    const plugins = reactive({
        pluginsList: [
            { nombre: "serbimas", estado: "instalado" },
            { nombre: "plugin b", estado: "Desinstalado" },
            { nombre: "plugin c", estado: "instalado" },
            { nombre: "plugin d", estado: "instalado" },
            
        ]
    })


</script>

<template>
    <div class="m-5">
         <!-- contenido de los botones -->
        <header class="flex flex-col items-center">
            <h1 class="mb-2">Administrar Plugins</h1>
            <div class="w-1/2 border-t-4 border-green-600"></div>
        </header> 

        <main id="actions" class="mt-14">
            <div id="buttons-acction">
                <button class="global-button m-2" @click="openModal()">Instalar</button>
                <button class="global-button m-2">Filtrar</button>
                <button class="global-button m-2">Ordenar</button>    
            </div>
            <div id="list-plugins">
                <!-- tarjeta -->
                <div id="plugin-1" class="bg-blue-700  rounded-md mt-4" v-for="(plugin, index) in plugins.pluginsList" :key="index">
                    <!-- head de tarjeta -->
                    <div id="head" class="lg:grid lg:grid-cols-4 flex flex-col w-full justify-end">
                            <h1 class="col-spa-1">plugin: {{ plugin.nombre }}</h1>
                            <h1 class="col-spa-1">Estado:  {{ plugin.estado }}</h1>
                            <h1 class="col-spa-1">Activar</h1>
                            <div class="col-spa-1 flex justify-end pr-3">
                                <img src="../../../public/flecha.png" alt="" style="width: 20px;">
                            </div>
                    </div>
                    <!-- body de tarjeta -->
                    <div class="bg-blue-300 lg:grid lg:grid-cols-4 flex flex-col w-full">
                        <div class="lg:col-span-3 flex flex-col lg:flex-row">
                            <h1 class="ml-8 bg-slate-200 m-4 p-1 rounded-lg text-center">Historial</h1>
                            <h1 class="ml-8 bg-slate-200 m-4 p-1 rounded-lg text-center">Comentarios</h1>
                            <h1 class="ml-8 bg-slate-200 m-4 p-1 rounded-lg text-center">Configuracion</h1>
                        </div>
                        <div class="lg:col-span-1 flex lg:justify-end justify-start pr-3 ">
                            <h1 class=" bg-red-400 m-4 p-1 rounded-lg">Desinstalar</h1>
                        </div>
                    </div>
                </div>

                
            </div>
        </main>
    </div>

    <div>
        <InstalPlugin
            v-if="modal"
            @close-modal="closemodal"
        >
        </InstalPlugin>
    </div>
</template>