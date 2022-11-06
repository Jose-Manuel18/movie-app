import { GestureResponderEvent, Pressable, View } from 'react-native'
import React, { ComponentProps } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface IconButtonProps {
    icon: ComponentProps<typeof Ionicons>['name']
    size: number
    color: string
    onPress?(event: GestureResponderEvent): void
    disabled?: boolean
}

const IconButton = ({
    icon,
    size,
    color,
    onPress,
    disabled,
}: IconButtonProps) => {
    return (
        <View>
            <Pressable onPress={onPress} disabled={disabled}>
                <Ionicons
                    name={icon}
                    size={size}
                    color={color}
                    onPress={onPress}
                />
            </Pressable>
        </View>
    )
}

export default IconButton

