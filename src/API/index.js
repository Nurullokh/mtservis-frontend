import axios from 'axios'

export default axios.create({
    baseURL: 'https://homeservice.pythonanywhere.com/api/'
})