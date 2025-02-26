<template>
  <div class="login-container">
    <div class="left-section">
      <div class="title-area">
        <h2 class="typing-title">Staraupon</h2>
      </div>
      <h1>Create Account<br/>to Access</h1>
      
      <p class="register-text">
        Already have an account?<br/>
        you can <router-link to="/login" class="register-link">Sign in here</router-link>.
      </p>
    </div>

    <div class="right-section">
      <form @submit.prevent="handleRegister" class="login-form">
        <div class="form-group">
          <input type="text" v-model="username" placeholder="Your username" required>
        </div>

        <div class="form-group">
          <input type="email" v-model="email" placeholder="Your email address" required>
        </div>
        
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Password" required>
        </div>

        <div class="form-group">
          <input type="password" v-model="confirmPassword" placeholder="Confirm password" required>
        </div>

        <button type="submit" class="sign-in-btn">Create Account</button>

        <div class="divider">
          <span>or continue with</span>
        </div>

        <div class="social-login">
          <button class="social-btn google">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          <button class="social-btn apple">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#000" d="M17.05 12.536c-.031-3.008 2.455-4.462 2.568-4.532-1.399-2.043-3.57-2.324-4.344-2.355-1.847-.188-3.607 1.088-4.544 1.088-.937 0-2.385-1.063-3.921-1.035-2.016.031-3.873 1.172-4.91 2.977-2.092 3.633-.535 9.018 1.503 11.969 1.001 1.441 2.187 3.063 3.743 3.006 1.503-.063 2.073-.973 3.891-.973 1.817 0 2.336.973 3.922.941 1.62-.031 2.646-1.473 3.631-2.924 1.146-1.676 1.619-3.299 1.647-3.383-.036-.016-3.156-1.211-3.186-4.779zm-2.986-8.785c.828-1.004 1.386-2.402 1.233-3.791-1.191.049-2.633.793-3.486 1.793-.766.889-1.436 2.311-1.255 3.676 1.33.104 2.686-.682 3.508-1.678z"/>
            </svg>
          </button>
          <button class="social-btn facebook">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }
  localStorage.setItem('username', username.value)
  router.push('/login')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #f5f7ff 0%, #fff1f9 100%);
  padding: 20px;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
  padding-top: -80px; /* 向上移动内容 */
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 15%;
}

.login-form {
  width: 100%;
  max-width: 400px;
}

.title-area {
  height: 120px;
  display: flex;
  align-items: center;
}

.typing-title {
  font-size: 4.2rem;
  font-weight: bold;
  color: #000;
  position: relative;
  width: fit-content;
  white-space: nowrap;
  border-right: 3px solid;
  animation: typing 1.5s steps(9),
             cursor .4s step-end 3 forwards;
  overflow: hidden;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000;
  line-height: 1.2;
}

.register-text {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

.register-link {
  color: #4169E1;
  text-decoration: none;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

input {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #f8f9fa;
  font-size: 1rem;
}

.sign-in-btn {
  width: 100%;
  background: #4169E1;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
}

.divider {
  text-align: center;
  position: relative;
  margin: 2rem 0;
}

.divider::before,
.divider::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #ddd;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: #f5f7ff;
  padding: 0 10px;
  color: #666;
  font-size: 0.9rem;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  width: 48px;
  height: 48px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.social-btn svg {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    padding: 20px;
  }

  .left-section,
  .right-section {
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes cursor {
  50% { border-color: transparent }
  100% { border-color: transparent }
}
</style>