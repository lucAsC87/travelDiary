import React from "react"
import Header from "./components/Header"
import Travel from "./components/Travel"
import data from "./data"

export default function App() {
    const travels = data.map(travel => {
        return (
            <Travel 
            key={travel.id}
            travel={travel}
            />
        )
    })
    return (
       <> 
        <Header />
        <section className="travels-list">
        {travels}
        </section>
       </>
    )
}