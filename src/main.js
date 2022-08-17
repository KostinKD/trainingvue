import { createApp } from 'vue'
import App from './App.vue'
import '/theme.css'
import translateplugin from "@/translateplugin";


const app = createApp(App)

app.use(translateplugin)
app.mount('#app')
// directive(
//     //ГЛОБАЛЬНАЯ РЕГИСТАРЦИЯ ДИРЕКТИВЫ
//     'foces',{
//         mounted(el){
//             el.focus()
//         }
//     })


//ИСПОЛЬЗОВАНИЕ МИКСИНОВ УСТАРЕВШИЙ СПОСОБ ---> ИСПОЛЬЗУЕТЬСЯ ТЕПЕРЬ compostion api