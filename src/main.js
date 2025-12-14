import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import "./style.css"

// Import views
import LoginView from "./views/LoginView.vue"
import DashboardLayout from "./views/DashboardLayout.vue"
import ProfileView from "./views/ProfileView.vue"
import ShowcaseView from "./views/ShowcaseView.vue"
import ContactView from "./views/ContactView.vue"
import CreativeView from "./views/CreativeView.vue"

// Define routes
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/portfolio",
    component: DashboardLayout,
    children: [
      {
        path: "profile",
        name: "Profile",
        component: ProfileView,
      },
      {
        path: "showcase",
        name: "Showcase",
        component: ShowcaseView,
      },
      {
        path: "contact",
        name: "Contact",
        component: ContactView,
      },
      {
        path: "creative",
        name: "Creative",
        component: CreativeView,
      },
    ],
  },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")

  if (to.path !== "/login" && !isAuthenticated) {
    next("/login")
  } else if (to.path === "/login" && isAuthenticated) {
    next("/portfolio/profile")
  } else {
    next()
  }
})

const app = createApp(App)
app.use(router)
app.mount("#app")
