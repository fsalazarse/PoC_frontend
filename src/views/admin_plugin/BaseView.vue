<script setup>
    import {reactive} from 'vue';
    import { RouterLink } from 'vue-router';

    //import NavBar from '../../components/navBar.vue'

    const services = reactive({
        serviceList: [
            { nombre: "Cumplimiento Tributario", id:"1"},
            { nombre: "Recursos humanos", id:"2"},
            { nombre: "Proyectos", id:"3"},
            { nombre: "contabilidad", id:"4"},
            { nombre: "Tributario", id:"4"},
        ]
    })
    
    const plugins = reactive({
        pluginsList: [
            { id : "1", nombre: "serbimas", estado: "instalado", IDservice:"1"},
            { id : "2", nombre: "plugin b", estado: "Desinstalado", IDservice:"1" },
            { id : "3", nombre: "plugin c", estado: "instalado", IDservice:"1" },
            { id : "4", nombre: "plugin d", estado: "instalado", IDservice:"2" },
        ]
    })
    console.log(plugins.pluginsList);

</script>

<template>
    <div class="lg:grid lg:grid-cols-7 lg:gap-2 flex flex-col">
        <!-- Columna de navegación -->
        <div class="bg-green-800 lg:col-span-1">
            <!-- responsive -->
            <div class="rounded-r lg:hidden flex justify-between w-full p-6 items-center">
                <button>Menu</button>

                <!-- <NavBar>
                    
                </NavBar> -->
            </div>
            <!-- web (usa clases de ocultamiento condicional) -->
            <!-- Contenido de la barra de navegación en pantallas grandes -->
            <div id="navbar"
                class="items-center lg:rounded-r transform lg:translate-x-0 ease-in-out transition duration-500 hidden lg:flex lg:w-full justify-start sm:w-64 flex-col h-screen">
                <div id="logo" class="bg-slate-500 m-2 w-40 h-20 mb-6">
                    <h1 class="text-center">Logo</h1>
                </div>
                <RouterLink
                    class="text-white hover:bg-green-900 w-full flex justify-center py-2"
                     :to="{name:'home'}"
                >
                    Home 
                </RouterLink>
                <button class="text-white hover:bg-green-900 w-full py-2 rounded relative group">
                    Administración
                    <div class="hidden mt-2 py-2 bg-white border border-gray-300 rounded-lg group-hover:block">
                        <RouterLink
                            class="text-gray-800"
                         :to="{name:'admin-plugins'}"
                        >
                            Plugins 
                        </RouterLink>
                
                    </div>
                </button>

                <br>
                <br>

                <button class="text-white hover:bg-green-900 w-full py-2 rounded relative group" v-for="(servicio, index) in services.serviceList" :key="index">
                    {{servicio.nombre}} 
                    <div  v-for="(plugin, index) in plugins.pluginsList" :key="index">
                        <div class=" hidden mt-2 py-2 bg-white border border-gray-300 rounded-lg group-hover:block" v-if="plugin.IDservice==servicio.id">
                            <!-- Contenido del submenu aquí -->
                            <RouterLink
                                class="text-gray-800"
                                :to="{name:'plugin', params: { id: plugin.id }}"
                            >
                            {{ plugin.nombre }}
                        </RouterLink>
                        </div>
                    </div>
                </button>
                <div class="mt-auto">
                    <button class="text-white hover:bg-green-900 w-full py-2 rounded">
                        Configuracion
                    </button>
                    <button class="text-white hover:bg-green-900 w-full py-2 rounded">
                        Salir
                    </button>
                </div>
                
            </div>
        </div>

        <!-- Columna de contenido -->
        <div class="lg:col-span-6">
            <!-- usuario y rol del usuario -->
            <div class="lg:col-span-4 hidden lg:flex justify-between m-6">
                <h1 class="bg-green-800 p-2 rounded-full text-white">usuario: Luca Paccioli</h1>
                <div class="flex">
                    <h1 class="bg-green-800 p-2 rounded-full text-white">Rol: Administrador</h1>
                    <img src="../../../public/usericon.png" alt="" srcset="" style="width: 40px;">
                </div>
            </div>

                
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped></style>
