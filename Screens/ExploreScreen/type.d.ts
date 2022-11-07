import { movieTypes } from '../../Components/Carousel/Types/types'
export interface ExploreImageParam {
    item: movieTypes
    index: number
}
export interface selectedState {
    selected?: number | null
}

export type selectedProps = {
    selected?: selectedState | null
    setSelected: React.Dispatch<React.SetStateAction<selectedState | null>>
    genreContents?: readonly genre[] | null
}

