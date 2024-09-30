'use client'
import { Collection, ImageFields } from "@/Types/Types"
import { FC } from "react"


interface UserCollectionsProps{
    collections:Collection[]
}

export const UserCollections:FC<UserCollectionsProps> = () => {
    return <div className="flex flex-col justify-between">
        <span>{`Here is your collection `}</span>
       </div>
}