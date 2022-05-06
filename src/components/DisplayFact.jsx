import React, {useEffect} from "react";
import {useState} from "react";

function DisplayFact({language}) {
    const [fact, setFact] = useState({});
    const url = `https://uselessfacts.jsph.pl/random.json?language=${language}`;
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        loadRandomFact();
    }, [language]);

    const loadRandomFact = async () => {
        console.log("loadRandomFact")
        if (!isFetching) {
            setIsFetching(true);
            console.log("Fetching!!");
            try {
                const response = await fetch(url)
                console.log(response);
                if (response.status !== 200) {
                    // Stop (reject) the promise chain.
                    console.log(`response is not 200 OK: ${response.status} : ${response.statusText}`);
                }
                const fact = await response.json();               // json() returns a promise
                setFact(fact);
            } catch (error) {
                console.log(error);
            }

            console.log("fetch complete!");
            setIsFetching(false);
        }
        console.log("loadRandomFact complete!");

    }

    return (
        <div>
            URL: {url}
            <div>Fact {fact.id}:</div>
            <div className={"mt-5"}>{fact.text}</div>
            <div>
                {isFetching? "Please wait...." : <button onClick={loadRandomFact}>Reload!</button> }
            </div>
        </div>
    )
}


export default DisplayFact;