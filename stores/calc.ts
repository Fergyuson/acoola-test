import { defineStore } from 'pinia'

export const useCalc = defineStore('calc', {
    state: () => ({
        options: {
            type: '' as 'Landing' | 'E-commerce' | '',
            cms: '' as 'Bitrix24' | 'WordPress' | '',
            design: '' as 'Template' | 'Custom' | ''
        },
        prices: {
            type: { Landing: 80000, 'E-commerce': 150000 },
            cms: { Bitrix24: 60000, WordPress: 40000 },
            design: { Template: 0, Custom: 30000 }
        }
    }),
    getters: {
        total(state) {
            const { type, cms, design } = state.options
            return (
                (type ? state.prices.type[type] : 0) +
                (cms ? state.prices.cms[cms] : 0) +
                (design ? state.prices.design[design] : 0)
            )
        }
    },
    actions: {
        reset() {
            this.options.type = this.options.cms = this.options.design = ''
        }
    }
})
