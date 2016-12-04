// Import System requirements
import Vue from 'vue'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'

import routes from './routes'
import store from './store'

// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level

import AppView from './components/App.vue'

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

// Resource logic
Vue.use(Resource)

Vue.use(VueRouter)

Vue.http.options.root = 'http://localhost/api'
Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlZjNhMTcyNzAwODVhNmM5MDU0YjI0ZWQ2MGM5MTJmMjk1MWUzODc0Zjc4MDI4NGI1NjZkYjdjYWM4NGNjMWQ5NGYxNTRkZDhhYzYxZDQ4In0.eyJhdWQiOiIxIiwianRpIjoiZmVmM2ExNzI3MDA4NWE2YzkwNTRiMjRlZDYwYzkxMmYyOTUxZTM4NzRmNzgwMjg0YjU2NmRiN2NhYzg0Y2MxZDk0ZjE1NGRkOGFjNjFkNDgiLCJpYXQiOjE0Nzk2NTA3MzcsIm5iZiI6MTQ3OTY1MDczNywiZXhwIjoxNTExMTg2NzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nW49UHxO9vOrBhyru9elExizsmyamm6UrO9nTeg5APm0XmW_gF5hzq8y6RZbreT32qRfU0GUPugz3nVznTYK-tJoWAH7AbLdqTsr0pXWSgJPEviyQjqzzCI8XJmVicvpRBIu8MN1ME9qPtPQegHQsToMhxo-q23HPqXLQluFHVQwFiNUqArj5tyu-OjBznCu-hfMj72o2LbiVJhiVKDH381WDaPctRvjpdLrc74F45yfQhiMojYha0lny5kOjK7ClV0syguXYmHIwnfNWNCTVnOIAVT4qIqb3JCygnHn3M7879DffN8PQ4la4CtYQB8U2-xQNWmJnfmZUPiJWggdYkC1YhNVREATM5n0f9IQ9Sz6dBUWdDyknJqvRzhsPIHWMQZWCs3ZIELm3G5efC_APZ_dyAoykVpwmX_VqDYtn-aRQAcHF4oQx0lVwKnu6uIPO_XQrEoNS8cyvcIvFGkGuyHOgUoegXLDJHX9TJgbyp6TkxipQaFMZSlAzXNz32Mit-9jDwXnIYNjaj-d1dMlBrVdE1vn7csiLJBN65kUyXA51ucu1UyxFoEfs6ej7Xs0PNS33cYt4bfi9-KsNWRzA6v41vNqsCtRwPm3L_4LyLk2heeaD2QIAEbuFXhZFLL1YU6Ca2S95a-GxXX3c8QUWS0K-vc6L9NtrgoD2U5ZtlE'

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})

// Check local storage to handle refreshes
// if (window.localStorage) {
//   if (store.state.user !== window.localStorage.getItem('user')) {
//     store.dispatch('SET_USER', JSON.parse(window.localStorage.getItem('user')))
//     store.dispatch('SET_TOKEN', window.localStorage.getItem('token'))
//   }
// }

Vue.http.get('userinfo').then((response) => {
  store.commit('UPDATE_USERINFO', response.body)
  store.dispatch('SET_TOKEN', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlZjNhMTcyNzAwODVhNmM5MDU0YjI0ZWQ2MGM5MTJmMjk1MWUzODc0Zjc4MDI4NGI1NjZkYjdjYWM4NGNjMWQ5NGYxNTRkZDhhYzYxZDQ4In0.eyJhdWQiOiIxIiwianRpIjoiZmVmM2ExNzI3MDA4NWE2YzkwNTRiMjRlZDYwYzkxMmYyOTUxZTM4NzRmNzgwMjg0YjU2NmRiN2NhYzg0Y2MxZDk0ZjE1NGRkOGFjNjFkNDgiLCJpYXQiOjE0Nzk2NTA3MzcsIm5iZiI6MTQ3OTY1MDczNywiZXhwIjoxNTExMTg2NzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nW49UHxO9vOrBhyru9elExizsmyamm6UrO9nTeg5APm0XmW_gF5hzq8y6RZbreT32qRfU0GUPugz3nVznTYK-tJoWAH7AbLdqTsr0pXWSgJPEviyQjqzzCI8XJmVicvpRBIu8MN1ME9qPtPQegHQsToMhxo-q23HPqXLQluFHVQwFiNUqArj5tyu-OjBznCu-hfMj72o2LbiVJhiVKDH381WDaPctRvjpdLrc74F45yfQhiMojYha0lny5kOjK7ClV0syguXYmHIwnfNWNCTVnOIAVT4qIqb3JCygnHn3M7879DffN8PQ4la4CtYQB8U2-xQNWmJnfmZUPiJWggdYkC1YhNVREATM5n0f9IQ9Sz6dBUWdDyknJqvRzhsPIHWMQZWCs3ZIELm3G5efC_APZ_dyAoykVpwmX_VqDYtn-aRQAcHF4oQx0lVwKnu6uIPO_XQrEoNS8cyvcIvFGkGuyHOgUoegXLDJHX9TJgbyp6TkxipQaFMZSlAzXNz32Mit-9jDwXnIYNjaj-d1dMlBrVdE1vn7csiLJBN65kUyXA51ucu1UyxFoEfs6ej7Xs0PNS33cYt4bfi9-KsNWRzA6v41vNqsCtRwPm3L_4LyLk2heeaD2QIAEbuFXhZFLL1YU6Ca2S95a-GxXX3c8QUWS0K-vc6L9NtrgoD2U5ZtlE')

  if (window.localStorage) {
    window.localStorage.setItem('token', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlZjNhMTcyNzAwODVhNmM5MDU0YjI0ZWQ2MGM5MTJmMjk1MWUzODc0Zjc4MDI4NGI1NjZkYjdjYWM4NGNjMWQ5NGYxNTRkZDhhYzYxZDQ4In0.eyJhdWQiOiIxIiwianRpIjoiZmVmM2ExNzI3MDA4NWE2YzkwNTRiMjRlZDYwYzkxMmYyOTUxZTM4NzRmNzgwMjg0YjU2NmRiN2NhYzg0Y2MxZDk0ZjE1NGRkOGFjNjFkNDgiLCJpYXQiOjE0Nzk2NTA3MzcsIm5iZiI6MTQ3OTY1MDczNywiZXhwIjoxNTExMTg2NzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.nW49UHxO9vOrBhyru9elExizsmyamm6UrO9nTeg5APm0XmW_gF5hzq8y6RZbreT32qRfU0GUPugz3nVznTYK-tJoWAH7AbLdqTsr0pXWSgJPEviyQjqzzCI8XJmVicvpRBIu8MN1ME9qPtPQegHQsToMhxo-q23HPqXLQluFHVQwFiNUqArj5tyu-OjBznCu-hfMj72o2LbiVJhiVKDH381WDaPctRvjpdLrc74F45yfQhiMojYha0lny5kOjK7ClV0syguXYmHIwnfNWNCTVnOIAVT4qIqb3JCygnHn3M7879DffN8PQ4la4CtYQB8U2-xQNWmJnfmZUPiJWggdYkC1YhNVREATM5n0f9IQ9Sz6dBUWdDyknJqvRzhsPIHWMQZWCs3ZIELm3G5efC_APZ_dyAoykVpwmX_VqDYtn-aRQAcHF4oQx0lVwKnu6uIPO_XQrEoNS8cyvcIvFGkGuyHOgUoegXLDJHX9TJgbyp6TkxipQaFMZSlAzXNz32Mit-9jDwXnIYNjaj-d1dMlBrVdE1vn7csiLJBN65kUyXA51ucu1UyxFoEfs6ej7Xs0PNS33cYt4bfi9-KsNWRzA6v41vNqsCtRwPm3L_4LyLk2heeaD2QIAEbuFXhZFLL1YU6Ca2S95a-GxXX3c8QUWS0K-vc6L9NtrgoD2U5ZtlE')
    window.localStorage.setItem('user', JSON.stringify(response.body.user))
    window.localStorage.setItem('audits', JSON.stringify(response.body.audits.data))
  }
}, (response) => {
  console.log('Whoops login went wrong', response)
})
