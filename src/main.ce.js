import {
    defineCustomElement
} from 'vue'
import MyFirstCustomElement from '@/element/MyFirstCustomElement.ce.vue'

window.customElements.define("my-component", defineCustomElement(MyFirstCustomElement))