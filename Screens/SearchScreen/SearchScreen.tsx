import { StyleSheet } from "react-native"
import React from "react"
import { Colors } from "../../Components/Utils/Colors"
import SearchAPI from "../../API/SearchAPI"
import { SafeAreaView } from "react-native-safe-area-context"
const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchAPI />
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DarkPurple,
    },
})
