import Container from '@mui/material/Container'
import Image from 'next/image'
import RoseGarden from '../assets/backgrounds/rose_garden.png'
import { useState } from "react"
import { BACKGROUNDIMAGES, ORIGINAL, TEXTDISPLAYTYPES, UPDATED } from '../util/constants'
import { Paper, Stack } from '@mui/material'

type TextProps = {
    text: string
}

function Overlay({ text }: TextProps) {
    return (
        <Paper variant='overlay'>
            <p>Overlay</p>
            <p>{text}</p>
        </Paper>
    )
}

function Speech({ text }: TextProps) {
    return (
        <Paper variant='text'>
            <p>Speech</p>
            <p>{text}</p>
        </Paper>
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

    // getBackground returns the background image
    const getBackground = () => {
        return (
            <>
                <Image 
                src={BACKGROUNDIMAGES[background]}
                width={500}
                height={500} 
                alt={background}/>
            </>
        )
    }

    // getCharacter converts human readable character objects into file names
    const getCharacter = (character : string) => {
        const convertedCharacterName = character.toLowerCase().replace(' - ', '').replace(' ', '_')
        const fileName = `${convertedCharacterName}_${enhanced ? UPDATED : ORIGINAL}_${`pose`}.png`
        return fileName
    }

    // renderText returns inserted text in the correct format
    const renderText = () => {
        if (textType !== "None") {
            return textType === TEXTDISPLAYTYPES[1] ? <Overlay text={text} /> : <Speech text={text} />
        }
    }

    return (
        <Stack>
        <h1>Preview:</h1>
        <Container fixed>
            {renderText()}
            {getBackground()}
            {getCharacter(characters[0])}
        </Container>
        </Stack>
    )
}