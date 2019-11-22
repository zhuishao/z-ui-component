import ZInput from './z-input/index'
import ZProgress from './z-progress/index'

const components = [
    ZInput,
    ZProgress,
]

const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name,component)
    })
}
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    ...components,
}
