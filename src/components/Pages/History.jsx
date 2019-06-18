import React from "react"

const History = ({match, location, history}) => (
    <div>
        { JSON.stringify(history) }
    </div>
)

export default History