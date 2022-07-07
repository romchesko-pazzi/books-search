import axios from "axios";


const instance = axios.create({
    baseURL: "https://www.googleapis.com/auth/books"
})

export const booksAPI = {
    getBooks(book: string) {
        return instance.get("");
    }
}