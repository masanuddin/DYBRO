import { View, Text } from "react-native";
import React from "react";

type SummaryColor = "green" | "red" | "gray";

const colorClass: Record<SummaryColor, string> = {
    green: "text-green-500",
    red: "text-red-500",
    gray: "text-gray-500",
};

interface SummaryTodayProps {
    value: string;
    label: string;
    color: SummaryColor;
    isSmall?: boolean;
}

// dipakai di homepage Button

const SummaryToday = ({
    value,
    label,
    color,
    isSmall = false,
}: SummaryTodayProps) => {
    return (
        <View className={`bg-white w-[30%] rounded-2xl ${isSmall ? 'p-3' : 'p-4'} items-center shadow-sm`}>
            <Text 
                className={`${isSmall ? 'text-lg' : 'text-xl'} font-bold ${colorClass[color]}`}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {value}
            </Text>
            <Text 
                className={`text-gray-500 ${isSmall ? 'text-xs' : 'text-sm'} mt-1 text-center`}
                numberOfLines={2}
            >
                {label}
            </Text>
        </View>
    );
};

export default SummaryToday;