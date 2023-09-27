import { computed, ref } from 'vue'

export default function listPlugins() {

    const PluginWithService = () => {
        const prueba = "hola mundo";
        return prueba;
    }

    return {
        PluginWithService
    }
}