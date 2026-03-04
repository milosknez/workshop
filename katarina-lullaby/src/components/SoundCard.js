import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function SoundCard({ sound, isPlaying, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, isPlaying && styles.cardPlaying]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{sound.icon}</Text>
        {isPlaying && (
          <View style={styles.playingIndicator}>
            <View style={[styles.bar, styles.bar1]} />
            <View style={[styles.bar, styles.bar2]} />
            <View style={[styles.bar, styles.bar3]} />
          </View>
        )}
      </View>
      <Text style={[styles.title, isPlaying && styles.titlePlaying]} numberOfLines={1}>
        {sound.title}
      </Text>
      <Text style={styles.duration}>{sound.duration}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    width: '47%',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  cardPlaying: {
    backgroundColor: 'rgba(179, 157, 219, 0.3)',
    borderColor: '#B39DDB',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 28,
  },
  playingIndicator: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -4,
    gap: 2,
  },
  bar: {
    width: 3,
    backgroundColor: '#B39DDB',
    borderRadius: 2,
  },
  bar1: { height: 8 },
  bar2: { height: 12 },
  bar3: { height: 6 },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  titlePlaying: {
    color: '#B39DDB',
  },
  duration: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
});
