<template>
  <div class="vs-avatar" :class="type" :style="{backgroundImage: `url(${src})`}"></div>
</template>

<script>

  export default {
    name: "vs-avatar",
    props:{
      type:{
        type: String,
        default: 'normal'
      },
      src:{
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>

<style lang="scss"  scoped>
.vs-avatar{
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ECEDEE center center no-repeat;
    background-size: contain;
  &.normal{
      width: 0.40rem;
      height: 0.40rem;
      object-fit: cover;
      object-position: center center;
      border-radius: 50%;
  }
}
</style>
