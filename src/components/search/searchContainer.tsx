import React from 'react';
import {Search} from "./search";
import {useAppDispatch} from "../../state/hooks";
import {searchBookTC} from "../../state/searchReducer";

export const SearchContainer = () => {
    const dispatch = useAppDispatch();

    const findBook = (book:string) => {
        dispatch(searchBookTC(book))
    }

    return (
        <Search findBook={findBook}/>
    );
};

