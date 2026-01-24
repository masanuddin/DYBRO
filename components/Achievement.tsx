import { View, Text } from 'react-native'
import React from 'react'
import { AchievementProps } from '@/types/type';

const Achievement = ({ label, isSmall }: AchievementProps) => (
    <View className={`flex-row items-center ${isSmall ? 'py-1.5' : 'py-2'}`}>
        <Text className={`text-yellow-500 mr-2 ${isSmall ? 'text-base' : 'text-lg'}`}>★</Text>
        <Text className={`text-gray-700 ${isSmall ? 'text-sm' : 'text-base'}`} numberOfLines={1}>{label}</Text>
    </View>
);
export default Achievement