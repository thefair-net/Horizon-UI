<template>
  <div class="page">
    <div class="cell">
      checkbox: <vs-checkbox :type="'checkbox'" v-model="value1"/><span @click="() => {value1 = !value1}">描述选项 [size regular]</span>
    </div>
    <div class="cell">
      checkbox: <vs-checkbox :type="'checkbox'" v-model="value1" :size="'large'" :color="'red'"/><span @click="() => {value1 = !value1}">描述选项 [size large]</span>
    </div>
    <div class="cell">
      radio: <vs-checkbox :type="'radio'" v-model="value2"/><span @click="() => {value2 = !value2}">描述选项 [size regular]</span>
    </div>
    <div class="cell">
      radio: <vs-checkbox :type="'radio'" v-model="value2" :size="'mini'" :color="'green'"/><span @click="() => {value2 = !value2}">描述选项 [size mini]</span>
    </div>
    <div class="cell">
      disabled: <vs-checkbox :type="'checkbox'" v-model="value3" disabled/><span @click="() => {value3 = !value3}">描述选项 [disabled]</span>
    </div>
  </div>
</template>

<script>
import {Checkbox} from "../../../lib";

export default {
  name: "radio",
  components: {
    'vs-checkbox': Checkbox
  },
  data() {
    return {
      value1: true,
      value2: true,
      value3: false
    }
  }
}
</script>

<style>
._checkbox {
  margin-left: 15px;
}
</style>

<style lang="scss" scoped>
.page {
}
.cell {
  padding: 15px;
  width: 100%;
  height: 56px;
  border: 1px #999999 solid;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
}

</style>
