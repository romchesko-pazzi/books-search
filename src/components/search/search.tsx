import React, {ChangeEvent, memo, useState} from "react";
import {TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import s from "./search.module.css"

export const Search: React.FC<SearchPropsType> = memo((props) => {

    const [value, setValue] = useState("");

    const {findBook} = props

    const textAreaHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const search = () => {
        findBook(value);
        setValue("");
    }

    return (
        <div className={s.searchBox}>
            <h1>Search for books</h1>
            <TextField
                id="outlined-basic"
                variant="outlined"
                value={value}
                onChange={textAreaHandler}
            />
            <SearchIcon
                cursor={"pointer"}
                onClick={search}
            />
        </div>
    );
});


type SearchPropsType = {
    findBook: (event: string) => void
}