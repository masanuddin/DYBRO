import { View, Text } from 'react-native'
import React from 'react'
import { SettingRowProps } from '@/types/type';


const SettingRow = ({ label, value, isSmall }: SettingRowProps) => (
    <View className={`flex-row items-center justify-between ${isSmall ? 'py-2' : 'py-3'}`}>
        <Text className={`text-gray-700 ${isSmall ? 'text-sm' : 'text-base'} flex-1`} numberOfLines={1}>{label}</Text>
        <Text className={`text-gray-400 ${isSmall ? 'text-xs' : 'text-sm'} ml-2`} numberOfLines={1}>{value}</Text>
    </View>
);


export default SettingRow