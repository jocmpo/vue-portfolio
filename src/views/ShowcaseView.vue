<template>
  <div class="showcase-view">
    <div class="showcase-header">
      <h1 class="page-title">Portfolio Showcase</h1>
      <p class="page-subtitle">A collection of my recent projects and work</p>
    </div>
    
    <div class="filter-bar">
      <button 
        v-for="filter in filters"
        :key="filter"
        @click="selectedFilter = filter"
        :class="['filter-btn', { active: selectedFilter === filter }]"
      >
        {{ filter }}
      </button>
    </div>
    
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
          <div class="project-overlay">
            <a :href="project.link" target="_blank" class="view-btn">View Project →</a>
          </div>
        </div>
        <div class="project-content">
          <div class="project-tags">
            <span 
              v-for="tag in project.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowcaseView',
  data() {
    return {
      selectedFilter: 'All',
      filters: ['All', 'Web', 'Mobile', 'Design'],
      projects: [
            {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'Online store platform for a coffee shop with product catalog and checkout.',
        image: '/src/assets/1.png?height=300&width=400',
        tags: ['Web', 'Vue.js', 'Node.js'],
        category: 'Web',
        link: '#'
      },
      {
        id: 2,
        title: 'Real Estate Web App',
        description: 'Web application to browse and manage real estate listings efficiently.',
        image: '/src/assets/2.png?height=300&width=400',
        tags: ['Web', 'React Native', 'Firebase'],
        category: 'Web',
        link: '#'
      },
      {
        id: 3,
        title: 'E-Commerce Platform',
        description: 'E-commerce website for a plant shop with product catalog and cart.',
        image: '/src/assets/3.png?height=300&width=400',
        tags: ['Design', 'Branding', 'UI/UX'],
        category: 'Design',
        link: '#'
      },
      {
        id: 4,
        title: 'E-Commerce Platform',
        description: 'Travel and tours online store with booking and payment integration.',
        image: '/src/assets/4.png?height=300&width=400',
        tags: ['Web', 'React', 'WebSocket'],
        category: 'Web',
        link: '#'
      }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'All') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.selectedFilter)
    }
  }
}
</script>

<style scoped>
.showcase-view {
  max-width: 1400px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

.showcase-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
}

.filter-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.project-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: var(--color-background);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(37, 99, 235, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-btn {
  padding: 0.75rem 1.5rem;
  background: white;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.2s ease;
}

.view-btn:hover {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: var(--color-background);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary);
}

.project-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.project-content p {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
