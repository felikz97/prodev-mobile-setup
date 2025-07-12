import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
        <Text>Entry Screen - Awesome</Text>
        
        <View>
            <Text style={styles.largeText}>Typescript is great if you practice more</Text>
            <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
            <Text style={styles.smallText}>ALX is awesome</Text>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    largeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    mediumText: {
        fontSize: 18,
        marginVertical: 6,
    },
    smallText: {
        fontSize: 14,
        fontStyle: 'italic',
        marginVertical: 4,
    },
});
