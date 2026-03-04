import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SOUNDS, CATEGORY_INFO } from '../data/sounds';
import SoundCard from '../components/SoundCard';

export default function SoundsScreen({ route, currentSound, isPlaying, onPlaySound }) {
  const { category } = route.params;
  const categoryInfo = CATEGORY_INFO[category];
  const categorySounds = SOUNDS.filter((s) => s.category === category);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { backgroundColor: categoryInfo.color + '15' }]}>
          <Text style={styles.headerIcon}>{categoryInfo.icon}</Text>
          <Text style={styles.headerTitle}>{categoryInfo.title}</Text>
          <Text style={styles.headerDesc}>{categoryInfo.description}</Text>
        </View>

        <View style={styles.grid}>
          {categorySounds.map((sound) => (
            <SoundCard
              key={sound.id}
              sound={sound}
              isPlaying={currentSound?.id === sound.id && isPlaying}
              onPress={() => onPlaySound(sound)}
            />
          ))}
        </View>

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
    paddingTop: 10,
  },
  header: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  headerIcon: {
    fontSize: 44,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  headerDesc: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spacer: {
    height: 100,
  },
});
