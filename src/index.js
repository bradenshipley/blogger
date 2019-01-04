import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import axios from "axios"

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN"
axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.request.use(
  request => {
    console.log(request)
    //can edit request config before returning
    return request
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    console.log(response)
    //can edit response config before returning
    return response
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

ReactDOM.render(<App />, document.getElementById("root"))
