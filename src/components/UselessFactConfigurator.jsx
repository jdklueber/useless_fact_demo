import React from "react";

function UselessFactConfigurator({language, setLanguage}) {

    return (
        <div>
            <select value={language} onChange={(e)=>setLanguage(e.currentTarget.value)}>
                <option>en</option>
                <option>de</option>
            </select>
        </div>
    )
}


export default UselessFactConfigurator;