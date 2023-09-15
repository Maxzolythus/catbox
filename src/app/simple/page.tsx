'use client'

import { useState } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import CharacterPortrait from '../components/characterPortrait/characterPortrait'

export default function Simple() {
  const [ selectedCharacter, setSelectedCharacter ] = useState('Beatrice')
  const characters = ['Battler', 'Beatrice']
  const textDisplayTypes = ['Overlay', 'Speech']
  const poses = {
    'Battler': ['Crying']
  }

  return (
    <div>
      <div className="container">
        <Grid container spacing={2} columns={16}>
          {characters.map((item) => {
            return (
              <Grid item xs={2}>
                <CharacterPortrait characterName={item} />
              </Grid>
            )
          })}
        </Grid>

        <FormControl fullWidth>
          <InputLabel id="text-display-type-label">Text Display Type</InputLabel>
          <Select
            labelId="text-display-type-label"
            id="text-display-type-select"
            value={textDisplayTypes[0]}
            label="Text Display Type"
            //onChange={handleChange}
          >
            {textDisplayTypes.map((item) => {
              return (
                <MenuItem value={item}>{item}</MenuItem>
              )
            })}
          </Select>

          <InputLabel id="pose-label">Pose</InputLabel>
          <Select
            labelId="pose-label"
            id="pose-select"
            label="Pose"
            //onChange={handleChange}
          >
            {poses[selectedCharacter]?.map((item) => {
              return (
                <MenuItem value={item}>{item}</MenuItem>
              )
            })}
          </Select>

          <TextField
          id="multiline-textbox"
          label="Image Text"
          multiline
          rows={4}
          defaultValue="Enter your text here..."
        />
        </FormControl>
      </div>
      <p>SIMPLE</p>
    </div>
  )
}