import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { TIMER_OPTIONS } from '../data/sounds';

export default function TimerModal({ visible, onClose, onSelect, activeTimer }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.container}>
          <View style={styles.handle} />
          <Text style={styles.title}>Sleep Timer</Text>
          <Text style={styles.subtitle}>
            {activeTimer
              ? `Timer active: ${activeTimer} remaining`
              : 'Set a timer to auto-stop the sound'}
          </Text>
          <View style={styles.optionsGrid}>
            {TIMER_OPTIONS.map((option) => (
              <TouchableOpacity
                key={option.minutes}
                style={[
                  styles.option,
                  option.minutes === 0 && activeTimer && styles.optionCancel,
                ]}
                onPress={() => onSelect(option.minutes)}
              >
                <Text
                  style={[
                    styles.optionText,
                    option.minutes === 0 && activeTimer && styles.optionCancelText,
                  ]}
                >
                  {option.minutes === 0 && activeTimer ? 'Cancel Timer' : option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#1E1B2E',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 10,
    width: '23%',
    marginBottom: 10,
    alignItems: 'center',
  },
  optionCancel: {
    backgroundColor: 'rgba(244, 143, 177, 0.2)',
    borderWidth: 1,
    borderColor: '#F48FB1',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  optionCancelText: {
    color: '#F48FB1',
  },
});
