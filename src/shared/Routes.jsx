import Home from './Home'
import Other from './Other'
import About from './About'

// import asyncComponent from './AsyncComponent'
// const About = asyncComponent(() => import('./About'))
// const Home = asyncComponent(() => import('./Home'))
// const Other = asyncComponent(() => import('./Other'))
// 

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    loadData: About.loadData
  },
  {
    path: '/other',
    component: Other
  },
]

export default routes