const getData = () => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "cf523f5a76msh4689799707fda14p19eaddjsn26bd7e314fff"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err);
    });
}

getData()