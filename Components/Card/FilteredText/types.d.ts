import { Genre_Content } from '../../../Screens/ExploreScreen/type'
export interface sliderTextProps {
    genre: Genre_Content
    onPress(event: GestureResponderEvent): void
    isSelected: boolean
}

