import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/NotFound.vue'
import PingPage from './pages/PingPage.vue'
import SignInPage from './pages/SignInPage.vue'
import SignOutPage from './pages/SignOutPage.vue'
import CityPage from './pages/CityPage.vue'
import AllCountryPage from './pages/AllCountryPage.vue'
import CountryPage from './pages/CountryPage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage, meta: { isPublic: true } },
    { path: '/ping', name: 'ping', component: PingPage },
    { path: '/signin', name: 'signin', component: SignInPage, meta: { isPublic: true } },
    { path: '/signout', name: 'signout', component: SignOutPage },
    { path: '/cities/:cityName', name: 'city', component: CityPage, props: true },
    { path: '/countries', name: 'countries', component: AllCountryPage},
    { path: '/countries/:countryName', name: 'country', component: CountryPage, props: true },
    { path: '/:path(.*)', component: NotFound, meta: { isPublic: true } },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to) => {
    if (to.meta.isPublic) {
        return true
    }
    const res = await fetch('/api/whoami')
    if (res.ok) return true
    return '/signin'
})

export default router