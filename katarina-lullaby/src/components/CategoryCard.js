import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function CategoryCard({ category, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, { borderColor: category.color + '40' }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconBg, { backgroundColor: category.color + '25' }]}>
        <Text style={styles.icon}>{category.icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
  },
  iconBg: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 26,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 3,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.55)',
    fontSize: 13,
  },
});
