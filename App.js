import { StyleSheet, ScrollView } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333232'
  },
});
