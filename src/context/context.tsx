import { createContext, useEffect, useState } from "react"
import axios from "axios"
export const DikrContext : any = createContext(null)

function DikrContextProvider ({children} : any){
    const [data , setData] = useState<Object>([])

    async function getData (){
        try {
            const response = await axios.get("https://dikr-backend-4.vercel.app/api/v1/dikr")
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
