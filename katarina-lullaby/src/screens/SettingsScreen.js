import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

export default function SettingsScreen() {
  const [fadeOut, setFadeOut] = React.useState(true);
  const [keepScreenOn, setKeepScreenOn] = React.useState(false);
  const [loopSounds, setLoopSounds] = React.useState(true);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>⚙️</Text>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Playback</Text>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>Loop Sounds</Text>
              <Text style={styles.rowDesc}>Repeat sounds continuously</Text>
            </View>
            <Switch
              value={loopSounds}
              onValueChange={setLoopSounds}
              trackColor={{ false: '#3e3e3e', true: '#B39DDB' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>Fade Out Timer</Text>
              <Text style={styles.rowDesc}>Gradually reduce volume when timer ends</Text>
            </View>
            <Switch
              value={fadeOut}
              onValueChange={setFadeOut}
              trackColor={{ false: '#3e3e3e', true: '#B39DDB' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>Keep Screen On</Text>
              <Text style={styles.rowDesc}>Prevent screen from sleeping while playing</Text>
            </View>
            <Switch
              value={keepScreenOn}
              onValueChange={setKeepScreenOn}
              trackColor={{ false: '#3e3e3e', true: '#B39DDB' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutEmoji}>👶</Text>
            <Text style={styles.aboutTitle}>Katarina's Lullaby</Text>
            <Text style={styles.aboutVersion}>Version 1.0.0</Text>
            <Text style={styles.aboutDesc}>
              Made with love for baby Katarina.{'\n'}
              Sweet dreams and peaceful nights.
            </Text>
          </View>
        </View>
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
    alignItems: 'center',
    marginBottom: 28,
  },
  headerIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  row: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rowText: {
    flex: 1,
    marginRight: 12,
  },
  rowTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  rowDesc: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
  },
  aboutCard: {
    backgroundColor: 'rgba(179, 157, 219, 0.1)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(179, 157, 219, 0.2)',
  },
  aboutEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  aboutTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  aboutVersion: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    marginBottom: 12,
  },
  aboutDesc: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});
