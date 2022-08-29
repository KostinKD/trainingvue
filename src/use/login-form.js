import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup.string().trim().required('Введите email').email('Введите корректный email')
    )

    const PASS_MIN_LENGHT = 7
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup.string().trim().required('Введите пароь').min(PASS_MIN_LENGHT, `Пароль должен быть от ${PASS_MIN_LENGHT} символов, сейчас:`)
    )

    const isTooManyAttempts = computed(()=> submitCount.value >= 3)
    watch(isTooManyAttempts, value => {
        if (value){
            setTimeout(()=>submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit( async values => {
        console.log(values)
        await store.dispatch('auth/login', values)
        router.push('/')
    })

    // const emailAuth = ref('')
    // const passwordAuth = ref('')


    return{
        email,eError,eBlur,
        password, pError,pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}
