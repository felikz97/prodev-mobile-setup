import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Entry Screen - Awesome</Text>

      {/* ✅ Additional styled text components */}
      <View style={styles.textGroup}>
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
    flex: 1, // ensures full screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#90caf9',
  },
  textGroup: {
    marginTop: 20,
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
