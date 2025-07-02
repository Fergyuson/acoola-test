import { ref } from 'vue'

const _isOpen = ref(false)
const _content = ref<unknown>(null)

export function useModal() {
    const open = (payload?: unknown) => {
        _content.value = payload
        _isOpen.value = true
    }
    const close = () => (_isOpen.value = false)

    return { isOpen: _isOpen, content: _content, open, close }
}
