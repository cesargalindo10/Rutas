import { Route, Routes } from "react-router-dom"

export const NotFoundPage=({children})=>{
    return (
        <Routes>
            {children}
            <Route path="*" element={<>Not found</>}/>
        </Routes>
    )
}