import { createApp } from 'vue'
import App from './App.vue'
import '/theme.css'

createApp(App).mount('#app')
// directive(
//     //ГЛОБАЛЬНАЯ РЕГИСТАРЦИЯ ДИРЕКТИВЫ
//     'foces',{
//         mounted(el){
//             el.focus()
//         }
//     })


//ИСПОЛЬЗОВАНИЕ МИКСИНОВ УСТАРЕВШИЙ СПОСОБ ---> ИСПОЛЬЗУЕТЬСЯ ТЕПЕРЬ compostion api