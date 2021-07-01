// import axios from 'axios'

export function getQuotes(payload) {
    return { type: 'getQuotes/setGetQuotes', payload }
}

export function fetchQuotes() {
    return (dispatch) => {
        fetch('https://api.kanye.rest/')
        .then((res) => res.json())
        .then(({ data }) => {
            dispatch(getQuotes(data))
        })
        .catch((err) => {
            console.log(err);
        })
    }
}