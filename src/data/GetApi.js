export const GetApi = () => {
    const data = fetch('https://esc-ipetm69.herokuapp.com/personal/')
    .then(response => response.json())
    .catch(error => console.log(error))
    return data
}
GetApi()