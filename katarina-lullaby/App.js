import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SoundsScreen from './src/screens/SoundsScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import NowPlayingBar from './src/components/NowPlayingBar';
import TimerModal from './src/components/TimerModal';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ currentSound, isPlaying, onPlaySound }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#13111C' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="HomeMain" options={{ headerShown: false }}>
        {(props) => (
          <HomeScreen
            {...props}
            currentSound={currentSound}
            isPlaying={isPlaying}
            onPlaySound={onPlaySound}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Sounds"
        options={({ route }) => ({
          title: route.params?.title || 'Sounds',
        })}
      >
        {(props) => (
          <SoundsScreen
            {...props}
            currentSound={currentSound}
            isPlaying={isPlaying}
            onPlaySound={onPlaySound}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const TAB_ICONS = {
  Home: { focused: '🏠', unfocused: '🏠' },
  Player: { focused: '🎵', unfocused: '🎵' },
  Settings: { focused: '⚙️', unfocused: '⚙️' },
};

export default function App() {
  const [currentSound, setCurrentSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerRemaining, setTimerRemaining] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const timerRef = useRef(null);

  // Timer countdown logic
  useEffect(() => {
    if (timerRemaining > 0 && isPlaying) {
      timerRef.current = setInterval(() => {
        setTimerRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
            setTimerMinutes(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerRemaining > 0, isPlaying]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const timerText = timerRemaining > 0 ? formatTime(timerRemaining) : '';

  const handlePlaySound = useCallback((sound) => {
    if (currentSound?.id === sound.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSound(sound);
      setIsPlaying(true);
    }
  }, [currentSound?.id]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleTimerSelect = useCallback((minutes) => {
    setShowTimer(false);
    if (minutes === 0) {
      setTimerMinutes(0);
      setTimerRemaining(0);
    } else {
      setTimerMinutes(minutes);
      setTimerRemaining(minutes * 60);
    }
  }, []);

  const handleVolumeChange = useCallback((v) => {
    setVolume(v);
  }, []);

  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          primary: '#B39DDB',
          background: '#13111C',
          card: '#1A1726',
          text: '#FFFFFF',
          border: '#2A2545',
          notification: '#F48FB1',
        },
      }}
    >
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              const icons = TAB_ICONS[route.name];
              return (
                <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>
                  {focused ? icons.focused : icons.unfocused}
                </Text>
              );
            },
            tabBarActiveTintColor: '#B39DDB',
            tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
            tabBarStyle: {
              backgroundColor: '#1A1726',
              borderTopColor: '#2A2545',
              paddingTop: 6,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '600',
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home">
            {() => (
              <HomeStack
                currentSound={currentSound}
                isPlaying={isPlaying}
                onPlaySound={handlePlaySound}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Player">
            {() => (
              <PlayerScreen
                currentSound={currentSound}
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onTimer={() => setShowTimer(true)}
                timerText={timerText}
                volume={volume}
                onVolumeChange={handleVolumeChange}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

        {currentSound && (
          <View style={styles.nowPlayingContainer}>
            <NowPlayingBar
              sound={currentSound}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onTimer={() => setShowTimer(true)}
              timerText={timerText}
            />
          </View>
        )}

        <TimerModal
          visible={showTimer}
          onClose={() => setShowTimer(false)}
          onSelect={handleTimerSelect}
          activeTimer={timerText}
        />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13111C',
  },
  nowPlayingContainer: {
    position: 'absolute',
    bottom: 62,
    left: 0,
    right: 0,
  },
});
