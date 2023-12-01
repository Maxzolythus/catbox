import { Button } from "@mui/base"
import { useState } from "react"

type CharacterPortraitProps = {
    characterName: string
    onClick?: Function
    defaultSelected?: boolean
}

export default function CharacterPortrait({ characterName, onClick, defaultSelected = false }: CharacterPortraitProps) {
    const [ selected, setSelected ] = useState(defaultSelected)

    const clickHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event.target?.innerText)
        setSelected((prev) => !prev)
    }

    return (
        <>
          <Button onClick={(event) => clickHandler(event)} color={selected ? "primary" : "secondary"}>{characterName}</Button>
        </>
    )
}