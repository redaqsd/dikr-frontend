import { useContext, useEffect, useState } from "react"
import { DikrContext } from "../context/context"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft , FaArrowAltCircleRight } from "react-icons/fa"
import { IoMdExit } from "react-icons/io"


function Controller ({dikrName} : any){
    interface DikrData {
        content : string,
        times : number,
        category : string
    }
    const {data} : {data : DikrData[]} = useContext(DikrContext)
    const [dikrData , setDikrData] = useState<DikrData[]>([])
    const [activeDikr , setActiveDikr] = useState<number>(0)
    const [current , setCurrent] = useState<number[]>([])

    useEffect(() => {
        const filtredData = data.filter((elem) => elem.category.includes(dikrName))
        setDikrData(filtredData)
    },[data])

    useEffect(() => {
        const initialCurrent = new Array(dikrData.length).fill(0)
        setCurrent(initialCurrent)
    },[dikrData])

    function arrowRight (){
        setActiveDikr((prev) => (prev + 1 === dikrData.length ? 0 : prev + 1))
    }

    function arrowLeft (){
        setActiveDikr((prev) => (prev === 0 ? dikrData.length - 1 : prev - 1))
    }
    
    function handleBtn (){
        if(current[activeDikr] + 1 === dikrData[activeDikr].times){
            setTimeout(() => {
                arrowRight()
            },500)
        }

        const newCurrent = [...current]
        newCurrent[activeDikr] += 1
        setCurrent(newCurrent)
    }

    function handleNums () {
        if(dikrData[activeDikr]?.times === 1){
            return <span className="times">
                مرة واحدة
            </span>
        }else if (dikrData[activeDikr]?.times === 3) {
            return <span className="times">
                ثلاث مرات  
            </span>
        }else {
            return <span className="times">
                ثلاث وثلاثين مره  
            </span>
        }
    }

    return <div className="dikr-section">
        <h1 className="dikr-type">اذكار {dikrName} </h1>
        <div className="single-dikr" key={dikrData[activeDikr]?.category}>
            <p className="dikr-content"> {dikrData[activeDikr]?.content} </p>
        </div>
        <div className="control-section">
            <FaArrowAltCircleLeft onClick={() => arrowLeft()}  className="arrow" />
                <div className="options">
                    <span className="current-dikr"> {activeDikr + 1} / {dikrData.length} </span>
                    {handleNums()}
                    <button className="current-times" onClick={() => handleBtn()}> {current[activeDikr]} </button>
                </div>
            <FaArrowAltCircleRight onClick={() => arrowRight()}  className="arrow"/>
        </div>

        <Link  to="/">
            <IoMdExit className="exit"  />
        </Link>
    </div>
}

export default Controller