let interval

const mouseover = event => {
    event.target.style.color = 'pink'
}
const mouseout = event => {
    event.target.style.color = 'grey'
}

export default {
    mounted(el, binding) {
        console.log(el)
        console.log(binding)

        el.style[binding.arg] = binding.value
        // el.style[]

        if (binding.modifiers.blink){
            let flag = true
            interval = setInterval(()=>{
                 el.style.color = flag ? '#fff' : binding.value
                flag = !flag
            },1000)
        }
        if (binding.modifiers.hover){
            el.addEventListener('mouseover', mouseover)
            el.addEventListener('mouseout', mouseout)
        }
    },
    updated(el, binding){
        console.log(binding)
        el.style[binding.arg] = binding.value
    },
    unmounted(el){
        if(interval) {
            clearInterval(interval)
            console.log(interval)
            console.log('unounted')
        }

        el.removeEventListener('mouseover', mouseover)
        el.removeEventListener('mouseout', mouseout)
    }
}