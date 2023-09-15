type CharacterPortraitProps = {
    characterName: string
}

export default function CharacterPortrait({ characterName }: CharacterPortraitProps) {
    return (
        <p>{characterName}</p>
    )
}