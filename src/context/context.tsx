import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const DikrContext : any = createContext(null)

function DikrContextProvider ({children} : any){
    const [data , setData] = useState<Object>([])

    async function getData (){
        try {
            const response = await axios.get("http://localhost:3000/api/v1/dikr")
            setData(response.data.dikr)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    const contextValue = {data}
    return <DikrContext.Provider value = {contextValue}>
        {children}
    </DikrContext.Provider>
}

export default DikrContextProvider