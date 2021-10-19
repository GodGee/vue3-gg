<template>
  <ul>
    <li><router-link to="/">dashborad</router-link></li>
    <li><router-link to="/about">about</router-link></li>
    <li><router-link to="/todos">todos</router-link></li>

    <li>自定义导航</li>
    <li><nav-link to="/">nav-dashborad</nav-link></li>
    <li><nav-link to="/about">nav-about</nav-link></li>
    <li><nav-link to="/todos">nav-todos</nav-link></li>
  </ul>
</template>

<script>
import NavLink from './NavLink.vue'
export default {
  components: { NavLink },
}
</script>

<style></style>
