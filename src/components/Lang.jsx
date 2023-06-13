import React from 'react'
import { useTranslation } from "react-i18next";


const Lang = () => {
    const { i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value
        i18n.changeLanguage(languageValue);
    }

    return (
        <select onChange={changeLanguageHandler}>
            <option value="en">English</option>
            <option value="hr">Hrvatski</option>
        </select>
    )
};

export default Lang;
