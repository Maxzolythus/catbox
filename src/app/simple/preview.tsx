import Container from '@mui/material/Container'
import { useState } from "react"
import { TEXTDISPLAYTYPES } from '../util/constants'

type TextProps = {
    text: string
}

function Overlay({ text }: TextProps) {
    return (
        <>
            <p>Overlay</p>
            <p>{text}</p>
        </>
    )
}

function Speech({ text }: TextProps) {
    return (
        <>
            <p>Speech</p>
            <p>{text}</p>
        </>
    )
}

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
        <Container fixed>
            {getBackground}
            {getCharacter(characters[0])}
            { textType === TEXTDISPLAYTYPES[0] ? <Overlay text={text} /> : <Speech text={text} /> }
        </Container>
    )
}