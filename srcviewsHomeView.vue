<template>
  <div class="home-container">
    <div class="content">
      <h1>Welcome {{ username }}</h1>
      <button @click="handleLogout" class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || 'User'
})

const handleLogout = () => {
  localStorage.removeItem('username')
  router.push('/login')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7ff 0%, #fff1f9 100%);
}

.content {
  text-align: center;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 2rem;
}

.logout-btn {
  background: #4169E1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background: #3154b3;
}
</style>