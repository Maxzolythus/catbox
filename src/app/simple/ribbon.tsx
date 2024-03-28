import { Stack } from "@mui/material"
import RibbonCard from "./ribbonCard";

type RibbonProps = {
  characters: {[key: string]: Character};
}

export default function Ribbon({characters} : RibbonProps) {
    return(
      <Stack>
        <h2>Ribbon</h2>
        <Stack spacing={2} sx={{ maxHeight: '250px', overflow: 'auto' }}>
          {Object.keys(characters).map((character) => {
            return <RibbonCard key={`${character}-ribbon-card`} character={characters[character]} />
          })}
        </Stack>
      </Stack>
    )
}