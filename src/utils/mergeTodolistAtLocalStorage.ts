import AsyncStorage from '@react-native-async-storage/async-storage';

const COMPLETED_KEY = 'completedMap';

export const saveCompletedMap = async (map: Record<string, boolean>) => {
  await AsyncStorage.setItem(COMPLETED_KEY, JSON.stringify(map));
};

export const loadCompletedMap = async (): Promise<Record<string, boolean>> => {
  const raw = await AsyncStorage.getItem(COMPLETED_KEY);
  return raw ? JSON.parse(raw) : {};
};