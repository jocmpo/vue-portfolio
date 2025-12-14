<template>
  <div class="profile-view">
    <div class="profile-header">
      <h1 class="page-title">Profile</h1>
      <p class="page-subtitle">Your personal information and bio</p>
    </div>
    
    <div class="profile-content">
      <div class="profile-card">
       <div class="profile-photo">
        <img src="/src/assets/pic.jpg" alt="Profile Photo" class="profile-image" />
      </div>
        
        <div class="profile-info">
          <h2>{{ profileData.name }}</h2>
          <p class="role">{{ profileData.role }}</p>
          <p class="bio">{{ profileData.bio }}</p>
        </div>
      </div>
      
      <div class="details-grid">
        <div class="detail-card">
          <h3>Contact Information</h3>
          <div class="detail-item">
            <span class="detail-label">Email</span>
            <span class="detail-value">{{ profileData.email }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Phone</span>
            <span class="detail-value">{{ profileData.phone }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Location</span>
            <span class="detail-value">{{ profileData.location }}</span>
          </div>
        </div>
        
        <div class="detail-card">
          <h3>Professional Details</h3>
          <div class="detail-item">
            <span class="detail-label">Experience</span>
            <span class="detail-value">{{ profileData.experience }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Education</span>
            <span class="detail-value">{{ profileData.education }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Specialization</span>
            <span class="detail-value">{{ profileData.specialization }}</span>
          </div>
        </div>
      </div>
      
      <div class="social-links">
        <h3>Connect With Me</h3>
        <div class="social-grid">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="social-link"
          >
            <span class="social-icon">{{ social.icon }}</span>
            <span class="social-name">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      profileData: {
        name: 'Joan Mae Ocampo',
        role: 'Computer Engineering Student',
        bio: 'Passionate Computer Engineering student with a strong foundation in web development, programming, and innovative technology solutions. Actively engaged in projects that enhance technical skills and contribute to the tech community.',
        email: 'jnm.cmp@gmail.com',
        phone: '+63 929 471 8141',
        location: 'Rodriguez, Rizal, Philippines',
        experience: '5+ Years',
        education: 'BS Computer Science',
        specialization: 'Web Development'
      },
      socialLinks: [
        { name: 'GitHub', icon: '💻', url: 'https://github.com/jocmpo' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/ocampo-joan-mae-p-7b731537b' },
        { name: 'Facebook', icon: '📥', url: 'https://twitter.com' },
        { name: 'Portfolio', icon: '🌐', url: 'https://example.com' }
      ]
    }
  },
  computed: {
    userInitial() {
      return this.profileData.name.charAt(0).toUpperCase()
    }
  }
}
</script>

<style scoped>
.profile-view {
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

.profile-header {
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

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  display: flex;
  gap: 2rem;
  align-items: start;
}

.profile-photo {
  flex-shrink: 0;
}

.photo-placeholder {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  box-shadow: var(--shadow-lg);
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.profile-image {
  width: 120px;      
  height: 120px;      
  border-radius: 50%; 
  object-fit: cover;  
  display: block;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1.5px solid #ddd;  
}


.role {
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 500;
  margin-bottom: 1rem;
}

.bio {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.detail-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.detail-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--color-border);
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 0;
  border-bottom: 1px solid var(--color-border);
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 500;
  color: var(--color-text-secondary);
}

.detail-value {
  color: var(--color-text);
  font-weight: 500;
}

.social-links {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.social-links h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.social-link:hover {
  background: var(--color-surface);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-icon {
  font-size: 1.5rem;
}

.social-name {
  font-weight: 500;
}

@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }
  
  .photo-placeholder {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
}
</style>
