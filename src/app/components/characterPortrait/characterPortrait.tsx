import { Button } from "@mui/base"

type CharacterPortraitProps = {
    characterName: string
    onClick?: Function
}

export default function CharacterPortrait({ characterName, onClick }: CharacterPortraitProps) {
    return (
        <>
          <Button onClick={(event) => onClick && onClick(event.target.innerText)}>{characterName}</Button>
        </>
    )
}