import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NowPlayingBar({ sound, isPlaying, onPlayPause, onTimer, timerText }) {
  if (!sound) return null;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.icon}>{sound.icon}</Text>
        <View>
          <Text style={styles.title} numberOfLines={1}>{sound.title}</Text>
          {timerText ? (
            <Text style={styles.timer}>{timerText}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={onTimer} style={styles.timerBtn}>
          <Text style={styles.timerIcon}>⏱️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPause} style={styles.playBtn}>
          <Text style={styles.playIcon}>{isPlaying ? '⏸' : '▶️'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2545',
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(179, 157, 219, 0.3)',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  timer: {
    color: '#B39DDB',
    fontSize: 12,
    marginTop: 1,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timerBtn: {
    padding: 6,
  },
  timerIcon: {
    fontSize: 20,
  },
  playBtn: {
    backgroundColor: '#B39DDB',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 18,
  },
});
