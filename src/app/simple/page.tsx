'use client'

import { useState } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import CharacterPortrait from '../components/characterPortrait/characterPortrait'
import { CHARACTERS, TEXTDISPLAYTYPES, POSES } from '../util/constants'
import { Switch } from '@mui/base'
import { Button, FormControlLabel, FormGroup, Stack } from '@mui/material'
import styles from './styles.module.css'

export default function Simple() {
  const [ selectedCharacter, setSelectedCharacter ] = useState<string>(CHARACTERS[0])
  const [ selectedTextDisplayType, setSelectedTextDisplayType ] = useState(TEXTDISPLAYTYPES[0])
  const [ selectedPose, setSelectedPose ] = useState(POSES[selectedCharacter] != undefined ? POSES[selectedCharacter][0] : undefined )
  const [ enhancedSprites, setEnhancedSprites ] = useState(true)
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={() => alert(`${selectedCharacter} ${selectedTextDisplayType} ${selectedPose} ${enhancedSprites}`)}>
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
                <CharacterPortrait onClick={setSelectedCharacter} characterName={character} />
              </Grid>
            )
          })}
        </Grid>
        
        <FormGroup>
        <Stack spacing={2}>
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

          <FormControl>
            <InputLabel id="pose-label">Pose</InputLabel>
            <Select
              labelId="pose-label"
              id="pose-select"
              label="Pose"
              value={selectedPose}
              onChange={(e) => setSelectedPose(e.target.value)}
            >
              {POSES[selectedCharacter]?.map((pose) => {
                return (
                  <MenuItem key={pose} value={pose}>{pose}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        

          <TextField
            id="multiline-textbox"
            label="Image Text"
            multiline
            rows={4}
            defaultValue="Enter your text here..."
          />
          </Stack>
        
          <Button type="submit">
            Submit
          </Button>
        </FormGroup>
        </Stack>
      </form>
    </div>
  )
}