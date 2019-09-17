export const imagelistenermixin={
    data(){
        return{
            imageitems:null
        }
    },
    mounted(){
        const refresh =this.debounce(this.$refs.scroll.refresh, 500)
        this.imageitems=() => {
            refresh()
        }
        this.$bus.$on('imgloadone',this.imageitems )
    },
    methods:{
        //防抖动方法/节流方法
        debounce(func, delay) {
            let timer = null
            return function (...args) {
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this, args)
                }, delay)
            }
        }
    }
}
//mixins这个方法是用于添加公共的方法，会叠加，就像是vue对象一样，可以存methods，data，mounted，created，等等