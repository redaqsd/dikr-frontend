import { useContext, useEffect, useState } from "react"
import { DikrContext } from "../context/context"
import { Link } from "react-router-dom"

function HomeSection (){
    interface DikrData {
        category : string
    }
    const {data} : {data : DikrData[]} = useContext(DikrContext)
    const [categories , setCategories] = useState<string[]>([])

    useEffect(() => {
        let arr : string[] = []
        for(let x = 0; x < data.length; x++){
            if(!arr.includes(data[x].category)){
                arr.push(data[x].category)
            }
        }
        arr.splice(0,1)
        setCategories(arr)
    },[data])



    return (
        <div className="home-section">
            <h1 className="app-name">Adkar Application</h1>
            <div className="categories-grid">
                {categories.map((category: string, i: number) => (
                    <Link className="dikr-button" key={i} to={`/${category}`}>
                        <h1 className="category-name"> {category} </h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeSection