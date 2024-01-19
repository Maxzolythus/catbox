import { Container, Paper, Stack } from "@mui/material"

type RibbonCardProps = {
  character: Character;
}

export default function RibbonCard({character} : RibbonCardProps) {
    return(
        <Paper elevation={1}>
            <p>{`${character.name}:`}</p>
            <Container fixed>
                <p>{`Pose: ${character.pose}`}</p>
                <p>{`x: ${character.x}`}</p>
                <p>{`y: ${character.y}`}</p>
            </Container>
        </Paper>
    )
}