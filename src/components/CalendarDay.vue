<template>
    <div class="day">{{day.format('D')}}</div>
</template>

<script>
  export default {
    name: 'CalendarDay',
    props:['day']
  }
</script>

<style scoped>

</style>