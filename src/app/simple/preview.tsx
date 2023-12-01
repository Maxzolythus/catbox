import Container from '@mui/material/Container'
import Image from 'next/image'
import RoseGarden from '../assets/backgrounds/rose_garden.png'
import { useState } from "react"
import { BACKGROUNDIMAGES, ORIGINAL, TEXTDISPLAYTYPES, UPDATED } from '../util/constants'
import { Paper, Stack } from '@mui/material'

// const backgroundImages = require.context('../assets/background', true, /\.png$/)
// const imagePaths = backgroundImages.keys()

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

    // getBackground converts human readable background names into background file names
    const getBackground = () => {
        const convertedBackground = background.toLowerCase().replace(' - ', '').replace(' ', '_')
        const fileName = `../assets/${convertedBackground}.png`
        return (
            <>
                <Image 
                src={BACKGROUNDIMAGES[convertedBackground]}
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

    return (
        <Stack>
        <h1>Preview:</h1>
        <Container fixed>
            { textType === TEXTDISPLAYTYPES[0] ? <Overlay text={text} /> : <Speech text={text} /> }
            {getBackground()}
            {getCharacter(characters[0])}
        </Container>
        </Stack>
    )
}