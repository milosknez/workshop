import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { CATEGORY_INFO, CATEGORIES, SOUNDS } from '../data/sounds';
import CategoryCard from '../components/CategoryCard';
import SoundCard from '../components/SoundCard';

export default function HomeScreen({ navigation, currentSound, isPlaying, onPlaySound }) {
  const favorites = SOUNDS.slice(0, 4); // Top picks for quick access

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Good night,</Text>
          <Text style={styles.babyName}>Katarina 👶</Text>
          <Text style={styles.subtitle}>
            Sweet dreams and peaceful sleep
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Quick Play</Text>
        <View style={styles.quickGrid}>
          {favorites.map((sound) => (
            <SoundCard
              key={sound.id}
              sound={sound}
              isPlaying={currentSound?.id === sound.id && isPlaying}
              onPress={() => onPlaySound(sound)}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        {Object.values(CATEGORIES).map((catKey) => {
          const cat = CATEGORY_INFO[catKey];
          return (
            <CategoryCard
              key={catKey}
              category={cat}
              onPress={() =>
                navigation.navigate('Sounds', { category: catKey })
              }
            />
          );
        })}

        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13111C',
  },
  scroll: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 28,
  },
  greeting: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  babyName: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 2,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 14,
    marginTop: 6,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 8,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  spacer: {
    height: 100,
  },
});
