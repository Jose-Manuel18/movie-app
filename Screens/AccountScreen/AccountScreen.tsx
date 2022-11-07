import { Text } from 'react-native'
import React from 'react'
import { Colors } from '../../Components/Utils/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
export const AccountScreen = () => {
    const { top } = useSafeAreaInsets()
    const View = styled.View`
        flex: 1;
        padding-top: ${top};
        background-color: ${Colors.DarkPurple};
    `
    return (
        <View>
            <Text>AccountScreen</Text>
        </View>
    )
}

