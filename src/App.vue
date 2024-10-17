<template>
<!-- TradingVueJs 101 (example from 'Getting Started' ) -->

<trading-vue :data="chart" :width="this.width" :height="this.height"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from 'trading-vue-js'
import Data from '../data/data.json'

export default {
    name: 'app',
    components: { TradingVue },
    methods: {
        onResize(event) {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        let hl2 = (high + low) / 2
        let tdv = hl2 * volume
        let avg20bars = sma(tdv, 20)
        let dvi = tdv / avg20bars

        let color = dvi >= 20 ? '#800080' :
                    dvi >= 10 ? '#00FFFF' :
                    dvi >= 5 ? '#00FF00' :
                    dvi >= 1 ? '#FFFF00' :
                    '#FFFFFF'

        const data = [hl2, dvi, color, high, dvi]
        return {
            chart: Data,
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333',
            }
        }
    }
}
</script>
