import { Container, FormControl, InputLabel, MenuItem, Paper, Select, Stack } from "@mui/material"
import { useState } from "react";
import { POSES } from "../util/constants";

type RibbonCardProps = {
  character: Character;
}

// TODO: Use redux to derive image names
export default function RibbonCard({character} : RibbonCardProps) {
    const [ selectedPose, setSelectedPose ] = useState(POSES[character.name])
    return(
        <Paper elevation={1}>
            <p>{`${character.name}:`}</p>
            <Container fixed>
                <p>{`Pose:`}</p>
                <FormControl>
                    <Select
                    id="pose-select"
                    value={selectedPose}
                    onChange={(e) => setSelectedPose(e.target.value)}
                    >
                    {POSES[character.name]?.map((pose) => {
                        return (
                        <MenuItem key={pose} value={pose}>{pose}</MenuItem>
                        )
                    })}
                    </Select>
                </FormControl>
                <p>{`x: ${character.x}`}</p>
                <p>{`y: ${character.y}`}</p>
            </Container>
        </Paper>
    )
}