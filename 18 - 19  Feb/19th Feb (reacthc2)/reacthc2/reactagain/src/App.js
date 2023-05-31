import React, { useEffect, useState } from "react"
import Card from "./card"
import Axios from 'axios'

function App() {

    const [details, setDetails] = useState({})

    const fetechDetails = async () => {
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log("RESPONSE", data);
        
        const details = data.results[0]
        setDetails(details)
    }

    let list = ["hitesh", "Anurag", "manas"]

    useEffect(()=> {
        fetechDetails();
    }, [])

  return (
    <>
    <div>App</div>
    <Card myname="hitesh" list={list} details={details} />
    <button
    onClick={fetechDetails}
    >get Details</button>
    </>
  )
}

export default App