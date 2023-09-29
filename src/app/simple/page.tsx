'use client'

import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import CharacterPortrait from '../components/characterPortrait/characterPortrait'
import { CHARACTERS, TEXTDISPLAYTYPES, POSES } from '../util/constants'

export default function Simple() {
  const [ selectedCharacter, setSelectedCharacter ] = useState(CHARACTERS[0])
  
  return (
    <div>
      {selectedCharacter}
      <div className="container">
        <Grid container spacing={2} columns={16}>
          {CHARACTERS.map((character) => {
            return (
              <Grid item xs={2}>
                <CharacterPortrait onClick={setSelectedCharacter} characterName={character} />
              </Grid>
            )
          })}
        </Grid>

        <FormControl fullWidth>
          <InputLabel id="text-display-type-label">Text Display Type</InputLabel>
          <Select
            labelId="text-display-type-label"
            id="text-display-type-select"
            value={TEXTDISPLAYTYPES[0]}
            label="Text Display Type"
            //onChange={handleChange}
          >
            {TEXTDISPLAYTYPES.map((type) => {
              return (
                <MenuItem value={type}>{type}</MenuItem>
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
            {POSES[selectedCharacter]?.map((pose) => {
              return (
                <MenuItem value={pose}>{pose}</MenuItem>
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