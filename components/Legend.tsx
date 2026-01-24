import { View, Text } from "react-native";
import React from "react";
import { LegendProps } from "@/types/type";

const Legend = ({
    label,
    color,
    dashed,
    isSmall = false,
}: LegendProps) => {
    return (
        <View className="flex-row items-center gap-2">
            <View
                className={`${isSmall ? "h-2.5 w-2.5" : "h-3 w-3"} rounded ${
                    dashed ? "border border-dashed border-indigo-400" : color
                }`}
            />
            <Text className={`${isSmall ? "text-[10px]" : "text-xs"} text-gray-500`}>{label}</Text>
        </View>
    );
};

export default Legend;
