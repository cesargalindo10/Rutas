export const persistLocalStorage = (key,values)=>{
    localStorage.setItem(key, JSON.stringify({...values}))
}
export const clearLocalStorage=(key)=>{
    localStorage.removeItem(key)
}