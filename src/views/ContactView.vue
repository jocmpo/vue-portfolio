<template>
  <div class="contact-view">
    <div class="contact-header">
      <h1 class="page-title">Get In Touch</h1>
      <p class="page-subtitle">Have a question or want to work together? Send me a message!</p>
    </div>
    
    <div class="contact-container">
      <div class="contact-info">
        <h2>Contact Information</h2>
        <p>Feel free to reach out through any of these channels:</p>
        
        <div class="info-items">
          <div class="info-item">
            <span class="info-icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>jnm.cmp@gmail.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon">📱</span>
            <div>
              <h4>Phone</h4>
              <p>+63 929 271 8141</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Rodriguez, Rizal, Philippines</p>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon">⏰</span>
            <div>
              <h4>Response Time</h4>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form-card">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Your full name"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              placeholder="What is this about?"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="6"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
          
          <div v-if="successMessage" class="success-message">
            {{ successMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      successMessage: ''
    }
  },
  methods: {
    handleSubmit() {
      this.isSubmitting = true
      
      // Simulate form submission
      setTimeout(() => {
        this.successMessage = 'Thank you for your message! I will get back to you soon.'
        this.isSubmitting = false
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.successMessage = ''
        }, 5000)
      }, 1500)
    }
  }
}
</script>

<style scoped>
.contact-view {
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-out;
}

.contact-header {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
}

.contact-info {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  height: fit-content;
}

.contact-info h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.contact-info > p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.info-item:hover {
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.75rem;
}

.info-item h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.info-item p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.contact-form-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.contact-form {
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
  font-size: 0.95rem;
  color: var(--color-text);
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  padding: 1rem;
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-md);
  color: var(--color-success);
  text-align: center;
  animation: slideIn 0.3s ease-out;
}

@media (max-width: 968px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .contact-form-card {
    padding: 2rem;
  }
}
</style>
