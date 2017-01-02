import axios from 'axios'

let instance = null;
const apiUrl = 'https://api.imgur.com/3/'
const clientSecret = '100bbd710be03769259dea47f8bd01150455e0ec'
const clientId = '2915dd7f23878f2'

class ApiService  {

  constructor() {
    if(!instance){
      console.log('ApiService instance created')
      instance = this;
      const token = localStorage.getItem('token')

      axios.defaults.baseURL = apiUrl
      axios.defaults.responseType = 'json'
      axios.defaults.method = 'get'
      axios.defaults.headers.common['Authorization'] = `Client-ID ${clientId}`
      axios.defaults.headers.common['Accept'] = 'application/json'
      this.axios = axios

    }
    return instance
  }

  /*
    Imgur Gallery api
    Key       Required  Value
    section   optional  hot | top | user - defaults to hot
    sort      optional  viral | top | time | rising (only available with user section) - defaults to viral
    page      optional  integer - the data paging number
    window    optional  Change the date range of the request if the section is "top", day | week | month | year | all, defaults to day
    showViral optional  
  */
  gallery(data){
    if(!data) return 
    const {section, sort, limit, page, viral} = data
    const url = `gallery/${section}/${sort}/${limit}/${page}?showViral=${viral}`
    return this.axios({url})
  }

  image(id){
    if(!id) return
    const url = `gallery/image/${id}`
    return this.axios({url})
  }

  album(id){
    if(!id) return 
    const url = `gallery/album/${id}`
    return this.axios({url})
  }
}

export default ApiService
