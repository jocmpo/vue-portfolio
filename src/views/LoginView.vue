<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1>Welcome Back</h1>
        <p>Sign in to access your portfolio dashboard</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            required
            :class="{ 'error': errors.username }"
          />
          <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            :class="{ 'error': errors.password }"
          />
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>
        
        <div v-if="errors.general" class="error-banner">
          {{ errors.general }}
        </div>
        
        <button type="submit" class="login-button" :disabled="isLoading">
          <span v-if="!isLoading">Sign In</span>
          <span v-else>Signing In...</span>
        </button>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      errors: {}
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.username) {
        this.errors.username = 'Username is required'
      }
      
      if (!this.password) {
        this.errors.password = 'Password is required'
      } else if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    handleLogin() {
      if (!this.validateForm()) {
        return
      }
      
      this.isLoading = true
      
      // Simulate API call with hardcoded credentials
      setTimeout(() => {
        if (this.username === 'admin' && this.password === 'admin123') {
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('username', this.username)
          this.$router.push('/portfolio/profile')
        } else {
          this.errors.general = 'Invalid username or password'
          this.isLoading = false
        }
      }, 800)
    }
  },
  mounted() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-card {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  padding: 3rem;
  width: 100%;
  max-width: 420px;
  animation: scaleIn 0.4s ease-out;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.login-header p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--color-text);
}

.form-group input {
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
}

.form-group input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input.error {
  border-color: var(--color-error);
}

.error-message {
  font-size: 0.85rem;
  color: var(--color-error);
}

.error-banner {
  padding: 0.75rem 1rem;
  background-color: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-md);
  color: var(--color-error);
  font-size: 0.9rem;
  text-align: center;
}

.login-button {
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.login-button:active:not(:disabled) {
  transform: translateY(0);
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
  
  .login-header h1 {
    font-size: 1.75rem;
  }
}
</style>
