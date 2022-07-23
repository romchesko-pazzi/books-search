import {AppThunkType} from "./hooks";
import {booksAPI} from "../api/books-api";

const initialState: InitStateType = {
    value: "",
}

export const searchReducer = (state = initialState, action: SearchActionType): InitStateType => {
    switch (action.type) {
        default:
            return state
    }
}

const searchBook = () => {
    return {
        type: "SEARCH-BOOK"
    } as const
}

export const searchBookTC = (book: string): AppThunkType => async (dispatch) => {
    const response = await booksAPI.getBooks(book)
    console.log(response)
}


type InitStateType = {
    value: string
}

export type SearchActionType = ReturnType<typeof searchBook>




