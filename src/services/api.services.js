const baseUrl = 'https://rickandmortyapi.com/api/'
const charUrl = baseUrl+'character/'
export const getMorty=()=>{
    return fetch(charUrl+'2').then(res=>res.json());
}