import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Main Wrapper View */}
      <View style={styles.additionalTextGroup}>
        <Text style={styles.largeText}>
          Typescript is great if you practice more
        </Text>
        <Text style={styles.mediumText}>
          React Native provides you a single codebase for cross platforms
        </Text>
        <Text style={styles.smallText}>
          ALX is awesome
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#90caf9',
  },
  additionalTextGroup: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  largeText: {
    fontSize: 30,
    color: '#f44336',
    marginBottom: 5,
    fontWeight: '700',
    fontVariant: ['small-caps'],
  },
  mediumText: {
    fontSize: 20,
    color: '#9c27b0',
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'right',
  },
  smallText: {
    fontSize: 15,
    color: '#2196f3',
    fontWeight: '400',
    textAlign: 'center',
  },
});
