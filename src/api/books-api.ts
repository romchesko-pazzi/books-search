import axios from "axios";
import {API_KEY} from "./api-key";


const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/",
});

export const booksAPI = {
    getBooks(book: string) {
        return instance.get(`v1/volumes?q=${book}&key=${API_KEY}`);
    }
}