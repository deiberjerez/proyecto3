function CountryAPI() {
    fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},//investigar
        body: JSON.stringify({
            query: `query ExampleQuery($countryCode2: ID!) {
                country(code: $countryCode2) {
                  code
                  name
                  capital
                  languages {
                    code
                    name
                  }
                  currency
                  continent {
                    code
                    name
                  }
                  states {
                    code
                    name
                  }
                }
              }`,
            variables: { countryCode2: "US" }
        })
    })
    .then(res => res.json())
    .then(data => console.log(data.data.country))
}

CountryAPI()