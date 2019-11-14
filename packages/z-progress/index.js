import ZProgress from './z-progress.vue'

ZProgress.install = function (Vue) {
    Vue.component(ZProgress.name, ZProgress)
}

export default ZProgress
