import { View, Text } from "react-native";
import React from "react";
import { StatProps } from "@/types/type";

const Stat = ({ value, label, color, isSmall = false }: StatProps) => {
    return (
        <View className="items-center w-1/3">
            <Text className={`${isSmall ? "text-lg" : "text-xl"} font-bold ${color}`}>{value}</Text>
            <Text className={`${isSmall ? "text-xs" : "text-sm"} text-gray-500`} numberOfLines={1}>
                {label}
            </Text>
        </View>
    );
};

export default Stat;
