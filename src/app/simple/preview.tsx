import { useState } from "react"

type PreviewProps = {
    background: string,
    characters: string[], // likely needs to be an object that is character name, pose, and position
    enhanced: boolean,
    textType: string,
    text: string
}

export default function Preview({ background, characters, enhanced, textType, text }: PreviewProps) {

    // getBackground converts human readable background names into background file names
    const getBackground = () => {
        return background
    }

    // getCharacter converts human readable character objects into file names
    const getCharacter = (character) => {
        return character
    }

    return (
        <>
            {getBackground}
            {getCharacter(characters[0])}
            <p>{text}</p>
        </>
    )
}