<template>
  <div class="creative-view">
    <div class="creative-header">
      <h1 class="page-title">Interactive Timeline</h1>
      <p class="page-subtitle">My professional journey and achievements over the years</p>
    </div>
    
    <div class="timeline">
      <div 
        v-for="(item, index) in timelineItems"
        :key="index"
        class="timeline-item"
        :class="{ 'active': activeIndex === index }"
        @click="activeIndex = index"
      >
        <div class="timeline-marker">
          <span class="timeline-icon">{{ item.icon }}</span>
        </div>
        <div class="timeline-content">
          <div class="timeline-date">{{ item.date }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <div class="timeline-tags">
            <span 
              v-for="tag in item.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="stats-section">
      <h2>Career Statistics</h2>
      <div class="stats-grid">
        <div 
          v-for="stat in stats"
          :key="stat.label"
          class="stat-card"
        >
          <div class="stat-icon">{{ stat.icon }}</div>
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2>Technical Skills</h2>
      <div class="skills-container">
        <div 
          v-for="skill in skills"
          :key="skill.name"
          class="skill-item"
        >
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-percentage">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div 
              class="skill-progress"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreativeView',
  data() {
    return {
      activeIndex: null,
      timelineItems: [
        {
          date: '2023 - Present',
          title: 'Computer Engineering Student',
          description: 'Pursuing Bachelor’s in Computer Engineering. Skilled in web development, software engineering, and creative tech solutions.',
          icon: '🚀',
          tags:  ['Education', 'Academic', 'Foundation']
        },
        {
          date: '2020 - 2023',
          title: 'Computer Engineering Technology Graduate',
          description: 'Completed Diploma in Computer Engineering Technology. Specialized in web development and software engineering.',
          icon: '🎓',
          tags: ['Education', 'Academic', 'Foundation']
        }
      ],
      stats: [
        { icon: '📁', value: '10+', label: 'Projects Completed' },
        { icon: '👥', value: '10+', label: 'Skills Mastered' },
        { icon: '⭐', value: '5+', label: 'Years Experience' },
        { icon: '🏆', value: '15+', label: 'Concepts Explored' }
      ],
      skills: [
        { name: 'Vue.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'JavaScript/TypeScript', level: 82 },
        { name: 'Node.js', level: 88 },
        { name: 'CSS/Tailwind', level: 83 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Git/GitHub', level: 80 },
        { name: 'Database Design', level: 82 }
      ]
    }
  }
}
</script>

<style scoped>
.creative-view {
  max-width: 1000px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

.creative-header {
  margin-bottom: 3rem;
  text-align: center;
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

.timeline {
  position: relative;
  padding: 2rem 0;
  margin-bottom: 4rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  padding-left: 80px;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(8px);
}

.timeline-item.active .timeline-content {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-color: var(--color-primary);
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker,
.timeline-item.active .timeline-marker {
  border-color: var(--color-primary);
  transform: scale(1.1);
}

.timeline-icon {
  font-size: 1.5rem;
}

.timeline-content {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.timeline-date {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.timeline-content h3 {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.375rem 0.75rem;
  background: var(--color-background);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-primary);
}

.stats-section {
  margin-bottom: 4rem;
}

.stats-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.skills-section {
  margin-bottom: 2rem;
}

.skills-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
}

.skills-container {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.skill-item {
  margin-bottom: 1.75rem;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: var(--color-text);
}

.skill-percentage {
  font-weight: 600;
  color: var(--color-primary);
}

.skill-bar {
  height: 10px;
  background: var(--color-background);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius-sm);
  transition: width 1s ease-out;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-marker {
    width: 44px;
    height: 44px;
  }
  
  .timeline-icon {
    font-size: 1.25rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .skills-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
