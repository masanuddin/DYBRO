import { View, Text } from "react-native";
import React from "react";
import { StatCardProps } from "@/types/type";

const StatCard = ({ label, value, isSmall }: StatCardProps) => (
    <View className={`bg-gray-100 rounded-xl ${isSmall ? "p-3" : "p-4"} w-[48%]`}>
        <Text
            className={`${isSmall ? "text-base" : "text-lg"} font-bold text-indigo-600`}
            numberOfLines={1}
        >
            {value}
        </Text>
        <Text
            className={`${isSmall ? "text-xs" : "text-sm"} text-gray-500 mt-0.5`}
            numberOfLines={1}
        >
            {label}
        </Text>
    </View>
);

export default StatCard;
