"use client"

export default function Error({ error  ,reset}) {
    return (
        <>
            <h1>Error: {error.message}</h1>
            <button onClick={reset}>Load page again</button>
        </>
    )
}