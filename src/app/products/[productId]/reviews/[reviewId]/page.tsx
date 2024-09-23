"use client"

export default function ReviewDetails({ params }: { params: { productId: string, reviewId: string } }) {
    if (Math.round(Math.random())) {
        throw new Error('My Custome Error Message')
    }
    return (
        <h1>Review details of product: {params.productId} is {params.reviewId}</h1>
    )
}