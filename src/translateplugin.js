export default {
    install(app, options){
        let current = 'ru'

        const changeLanguage = name => {
            current = name
        }
        console.log(app)
        console.log(options)
        app.config.globalProperties.$alert = text =>{
            window.alert(text)
        }

        app.config.globalProperties.$translatewords = key =>{
            // Получаем ru которые объект т.е ru => app.title -> [app,title]
            return key.split('.').reduce((words, k) => {
                return words[k] || '=== UNKNOWN ==='
            }, options[current])
        }

        app.provide('changetranslatewords', changeLanguage)
    }
}