'use client'

import { useState } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import CharacterPortrait from '../components/characterPortrait/characterPortrait'
import { BACKGROUNDIMAGES, CHARACTERS, TEXTDISPLAYTYPES, POSES } from '../util/constants'
import { Switch } from '@mui/base'
import { Button, FormControlLabel, FormGroup, Stack } from '@mui/material'
import styles from './styles.module.css'
import Preview from './preview'

export default function Simple() {
  const backgrounds = Object.keys(BACKGROUNDIMAGES)

  const [ selectedCharacters, setSelectedCharacters ] = useState({})
  const [ selectedTextDisplayType, setSelectedTextDisplayType ] = useState(TEXTDISPLAYTYPES[0])
  const [ selectedBackground, setSelectedBackground ] = useState(backgrounds[0])
  const [ enhancedSprites, setEnhancedSprites ] = useState(true)
  const [ imageText, setImageText ] = useState("")

  const removeKey = (key:string, { [key]: _, ...rest }) => rest

  const modifyCharacters = (characterName:string) => {
    if (characterName in selectedCharacters) { // remove character
      setSelectedCharacters((prev) => (
        removeKey(characterName, prev)
      ))
    } else { // add character
      setSelectedCharacters((prev) => (
        {...prev, [characterName]: {name: characterName, pose: POSES[characterName] ? POSES[characterName][0] : undefined, x: 0, y: 0}}
      ))
    }
  }
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={() => alert(`${selectedCharacters} ${selectedTextDisplayType} ${selectedPose} ${enhancedSprites}`)}>
        <FormControl>
          <FormControlLabel 
            control={<Switch checked={enhancedSprites} onChange={() => setEnhancedSprites((prev) => !prev)} />} 
            label="Enhanced Sprites?"
            labelPlacement='start' />
        </FormControl>
        <Stack spacing={2}>
        <Grid container spacing={2} columns={6}>
          {CHARACTERS.map((character) => {
            return (
              <Grid key={character} item xs={2}>
                <CharacterPortrait onClick={modifyCharacters} characterName={character} />
              </Grid>
            )
          })}
        </Grid>

        <FormGroup>
        <Stack spacing={2}>
          <FormControl>
            <InputLabel id="background-label">Background</InputLabel>
            <Select
              labelId="background-label"
              id="background-select"
              value={selectedBackground}
              label="Background"
              onChange={(e) => setSelectedBackground(e.target.value)}
            >
              {backgrounds.map((background) => {
                return (
                  <MenuItem key={background} value={background}>{background}</MenuItem>
                )
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="text-display-type-label">Text Display Type</InputLabel>
            <Select
              labelId="text-display-type-label"
              id="text-display-type-select"
              value={selectedTextDisplayType}
              label="Text Display Type"
              onChange={(e) => setSelectedTextDisplayType(e.target.value)}
            >
              {TEXTDISPLAYTYPES.map((type) => {
                return (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        
          { selectedTextDisplayType !== 'None' &&
          <TextField
            id="multiline-textbox"
            label="Image Text"
            multiline
            rows={4}
            value={imageText}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setImageText(event.target.value);
            }}
          /> }
          </Stack>
        
          <Button type="submit">
            Submit
          </Button>
        </FormGroup>
        </Stack>
      </form>
      <Preview background={selectedBackground} characters={selectedCharacters} enhanced={enhancedSprites} textType={selectedTextDisplayType} text={imageText} />
    </div>
  )
}