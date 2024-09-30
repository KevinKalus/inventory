'use client'
import { Collection, ImageFields } from "@/Types/Types"
import { FC } from "react"
import { CardsGrid } from "./CardsGrid/CardsGrid"
import { mockCollection } from "@/mocks/mockCollections"

interface UserCollectionsProps{
    collections:Collection[]
}

export const UserCollections:FC<UserCollectionsProps> = ({collections}) => {
    return <div className="flex flex-col justify-between">
        <span>{`Here is your collection `}</span>
       
    </div>
}