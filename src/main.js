import { createApp } from 'vue'
import App from './App.vue'
import '/theme.css'
import translateplugin from "@/translateplugin";


const app = createApp(App)

const ru = {
    app: {
        title: 'Как работают плагины во VUE',
        changeBtn: 'Сменить язык'
    }
}

const eng = {
    app: {
        title: 'How plugin works in VUE',
        changeBtn: 'Change lang'
    }
}

app.use(translateplugin, {ru,eng})
app.mount('#app')
// directive(
//     //ГЛОБАЛЬНАЯ РЕГИСТАРЦИЯ ДИРЕКТИВЫ
//     'foces',{
//         mounted(el){
//             el.focus()
//         }
//     })


//ИСПОЛЬЗОВАНИЕ МИКСИНОВ УСТАРЕВШИЙ СПОСОБ ---> ИСПОЛЬЗУЕТЬСЯ ТЕПЕРЬ compostion api