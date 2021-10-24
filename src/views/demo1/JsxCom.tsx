import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'JSXDemo',
  components: {},
  setup() {

    const handleClick = () => {
      alert(222)
    }

    const checked = ref(false)
    let inputValue = ref('')
    
  

    return () => (
      <div>
        <input type="text" v-model={inputValue.value} />
        <a-card title="Default size card" v-slots={{
          extra() {
            return <a-button type="link" onClick={handleClick}>Button22</a-button>
          }
        }}>
          <p>card content{inputValue.value}</p>
          <p>card content</p>
          <a-switch v-model:checked={checked.value} />
          <input type="text" v-model={inputValue.value} />
        </a-card>
      </div>
    )
  }
})