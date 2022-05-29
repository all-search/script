import { onMounted, onUnmounted, ref, watch } from 'vue'
import { getSession, setSession } from '../util/index'
import { onFullScreenChange } from '../util/fullScreen'
import { debounce } from '../util/debounce'
const session = getSession('mode')

const getMode = val => {
  if (val !== 'vertical' && val !== 'horizontal') {
    return 'horizontal'
  }
  return val
}

const mode = ref(getMode(session))

const initStyle = () => {

}

onFullScreenChange(() => {
  initStyle(mode.value)
})

watch(mode, (value) => {
  const formatVal = getMode(value)
  setSession('mode', formatVal)
})

const resizeHandle = debounce(() => initStyle(mode.value))

export default function useMode () {
  onMounted(() => {
    window.addEventListener('resize', resizeHandle, false)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandle, false)
  })

  return {
    mode
  }
}


