<script>
import { h } from 'vue'
// 只能用函数方式声明
function Heading(props, context) {
  console.log('context: ', context)
  return h(`h${props.level}`, context.attrs, context.slots)
}

Heading.props = ['level']
export default Heading
</script>
