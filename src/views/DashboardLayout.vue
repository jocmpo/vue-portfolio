<template>
  <div class="dashboard-layout">
    <aside class="sidebar" :class="{ 'open': isSidebarOpen }">
      <div class="sidebar-header">
        <h2>Portfolio</h2>
        <button @click="toggleSidebar" class="close-btn">✕</button>
      </div>
      
      <nav class="nav-menu">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="closeSidebar"
        >
          <span class="nav-icon">{{ link.icon }}</span>
          <span class="nav-text">{{ link.name }}</span>
        </router-link>
      </nav>
      
      <div class="sidebar-footer">
        <button @click="toggleDarkMode" class="theme-btn">
          <span>{{ isDarkMode ? '☀️' : '🌙' }}</span>
          <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
        <button @click="handleLogout" class="logout-btn">
          <span>→</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
    
    <div class="main-content">
      <header class="top-bar">
        <button @click="toggleSidebar" class="menu-btn">☰</button>
        <div class="user-info">
          <span>{{ username }}</span>
          <div class="avatar">{{ userInitial }}</div>
        </div>
      </header>
      
      <main class="content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
    </div>
    
    <div 
      v-if="isSidebarOpen" 
      class="overlay"
      @click="closeSidebar"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      isSidebarOpen: false,
      username: localStorage.getItem('username') || 'User',
      isDarkMode: localStorage.getItem('darkMode') === 'true',
      navLinks: [
        { name: 'Profile', path: '/portfolio/profile', icon: '👤' },
        { name: 'Showcase', path: '/portfolio/showcase', icon: '🎨' },
        { name: 'Contact', path: '/portfolio/contact', icon: '✉️' },
        { name: 'Creative', path: '/portfolio/creative', icon: '✨' }
      ]
    }
  },
  computed: {
    userInitial() {
      return this.username.charAt(0).toUpperCase()
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.body.classList.toggle('dark-mode', this.isDarkMode)
      localStorage.setItem('darkMode', this.isDarkMode)
    },
    handleLogout() {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  },
  mounted() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode')
    }
    
    if (this.$route.path === '/portfolio') {
      this.$router.push('/portfolio/profile')
    }
  }
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  position: relative;
}

.sidebar {
  width: 260px;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
}

.close-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  padding: 0.25rem;
}

.nav-menu {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 500;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background-color: var(--color-background);
  color: var(--color-text);
}

.nav-link.router-link-active {
  background-color: rgba(37, 99, 235, 0.08);
  color: var(--color-primary);
  border-left-color: var(--color-primary);
}

.nav-icon {
  font-size: 1.25rem;
}

.nav-text {
  font-size: 0.95rem;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.theme-btn {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--color-primary);
  border: none;
  border-radius: var(--radius-md);
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: all 0.2s ease;
}

.theme-btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-1px);
}

.logout-btn {
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background-color: var(--color-background);
  border-color: var(--color-text-tertiary);
  color: var(--color-text);
}

.main-content {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.top-bar {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
}

.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-text);
  padding: 0.25rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-info span {
  font-weight: 500;
  color: var(--color-text);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
}

.content {
  flex: 1;
  padding: 2rem;
}

.overlay {
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
  
  .close-btn {
    display: block;
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .menu-btn {
    display: block;
  }
  
  .overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
  }
  
  .content {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 1rem;
  }
  
  .content {
    padding: 1rem;
  }
}
</style>
