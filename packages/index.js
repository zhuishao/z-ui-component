import ZInput from './z-input/index'

const components = [
    ZInput,
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
