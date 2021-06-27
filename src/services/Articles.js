import axios from 'axios'
const API_URL = 'http://localhost:3001/api/articles'

class Articles {
  constructor (API_URL) {
    this.API_URL = API_URL
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQ3OWQ1MzEwMzk0ZDJkMWVlODcwNGYiLCJlbWFpbCI6Impvc2VAdGVzdC5jb20iLCJpYXQiOjE2MjQ3NDQ1MTZ9.ghw-OsvrvO9DFAvaBJtXtJ7G9kU2645ukxxQfg64qWg'
    this.axiosConfig = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
  }

  async getAll () {
    try {
      const { data: articles } = await axios.get(this.API_URL, this.axiosConfig)
      return articles
    } catch (error) {
      console.log(error)
    }
  }

  async create ({ title, description, rating, price }) {
    try {
      const { data: createdArticle } = await axios.post(this.API_URL, {
        title, description, rating, price
      }, this.axiosConfig)

      return createdArticle
    } catch (error) {
      console.log(error)
    }
  }

  async delete (id) {
    try {
      const { data: deletedArticle } = await axios.delete(`${this.API_URL}/${id}`, this.axiosConfig)
      return deletedArticle
    } catch (error) {
      console.log(error)
    }
  }

  async update (id, propsToUpdate) {
    try {
      const { data: updatedArticle } = await axios.put(`${this.API_URL}/${id}`, { ...propsToUpdate }, this.axiosConfig)
      return updatedArticle
    } catch (error) {
      console.log(error)
    }
  }
}

const articles = new Articles(API_URL)

export default articles
