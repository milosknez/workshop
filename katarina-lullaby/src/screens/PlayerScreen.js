import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { CATEGORY_INFO } from '../data/sounds';

const { width } = Dimensions.get('window');

export default function PlayerScreen({
  currentSound,
  isPlaying,
  onPlayPause,
  onTimer,
  timerText,
  volume,
  onVolumeChange,
}) {
  if (!currentSound) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>🎵</Text>
          <Text style={styles.emptyTitle}>No Sound Playing</Text>
          <Text style={styles.emptySubtitle}>
            Choose a lullaby or sound from the Home tab to soothe Katarina
          </Text>
        </View>
      </View>
    );
  }

  const categoryInfo = CATEGORY_INFO[currentSound.category];

  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        <View style={[styles.artworkCircle, { backgroundColor: categoryInfo.color + '20' }]}>
          <View style={[styles.artworkInner, { backgroundColor: categoryInfo.color + '30' }]}>
            <Text style={styles.artworkIcon}>{currentSound.icon}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>{currentSound.title}</Text>
      <Text style={styles.category}>{categoryInfo.title}</Text>

      {timerText ? (
        <View style={styles.timerBadge}>
          <Text style={styles.timerText}>⏱️ {timerText}</Text>
        </View>
      ) : null}

      <View style={styles.controls}>
        <TouchableOpacity onPress={onTimer} style={styles.sideBtn}>
          <Text style={styles.sideBtnText}>⏱️</Text>
          <Text style={styles.sideBtnLabel}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPlayPause}
          style={[styles.playBtn, { backgroundColor: categoryInfo.color }]}
        >
          <Text style={styles.playBtnText}>{isPlaying ? '⏸' : '▶️'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onVolumeChange(volume > 0 ? 0 : 0.7)}
          style={styles.sideBtn}
        >
          <Text style={styles.sideBtnText}>{volume === 0 ? '🔇' : '🔊'}</Text>
          <Text style={styles.sideBtnLabel}>{volume === 0 ? 'Muted' : 'Sound'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.volumeContainer}>
        <Text style={styles.volumeLabel}>Volume</Text>
        <View style={styles.volumeBar}>
          <View style={[styles.volumeFill, { width: `${volume * 100}%`, backgroundColor: categoryInfo.color }]} />
        </View>
        <View style={styles.volumeButtons}>
          {[0.25, 0.5, 0.75, 1.0].map((v) => (
            <TouchableOpacity
              key={v}
              style={[styles.volBtn, volume === v && { backgroundColor: categoryInfo.color + '30' }]}
              onPress={() => onVolumeChange(v)}
            >
              <Text style={styles.volBtnText}>{Math.round(v * 100)}%</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13111C',
    alignItems: 'center',
    paddingTop: 40,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptySubtitle: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  artwork: {
    marginBottom: 30,
  },
  artworkCircle: {
    width: width * 0.55,
    height: width * 0.55,
    borderRadius: width * 0.275,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artworkInner: {
    width: width * 0.38,
    height: width * 0.38,
    borderRadius: width * 0.19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artworkIcon: {
    fontSize: 64,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 4,
  },
  category: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    marginBottom: 16,
  },
  timerBadge: {
    backgroundColor: 'rgba(179, 157, 219, 0.2)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 10,
  },
  timerText: {
    color: '#B39DDB',
    fontSize: 13,
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginTop: 20,
    marginBottom: 36,
  },
  sideBtn: {
    alignItems: 'center',
  },
  sideBtnText: {
    fontSize: 24,
  },
  sideBtnLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 11,
    marginTop: 4,
  },
  playBtn: {
    width: 76,
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBtnText: {
    fontSize: 30,
  },
  volumeContainer: {
    width: '80%',
    alignItems: 'center',
  },
  volumeLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    marginBottom: 8,
  },
  volumeBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    marginBottom: 12,
  },
  volumeFill: {
    height: 4,
    borderRadius: 2,
  },
  volumeButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  volBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  volBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
});
