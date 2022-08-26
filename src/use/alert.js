import {ref} from "vue";


export function useAlert(visibality = false){

    const alert = ref(visibality)

    const toggle = () => alert.value = !alert.value
    const close =  () => alert.value = false

    return {alert,toggle,close}
    // return [alert, toggle, close]  //КАРТЕЖ
}