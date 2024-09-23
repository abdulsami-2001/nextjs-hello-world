"use client"
import { useRouter } from 'next/navigation'

export default function OrderProduct() {
    const router = useRouter()

    const handleClick = () => {
        console.log("click handled")
        router.replace('/')
    }

    return (
        <>
            <h1>Order Product | Payment Page</h1>
            <button onClick={handleClick} >Place Order</button>
        </>
    )
}