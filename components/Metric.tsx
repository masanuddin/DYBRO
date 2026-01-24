import { View, Text } from "react-native";
import React from "react";
import { MetricProps } from "@/types/type";

const Metric = ({ label, value, isSmall = false }: MetricProps) => {
    return (
        <View>
            <Text className={`${isSmall ? "text-[10px]" : "text-xs"} text-gray-500`}>{label}</Text>
            <Text className={`font-semibold text-gray-800 ${isSmall ? "text-xs" : "text-sm"}`}>
                {value}
            </Text>
        </View>
    );
};

export default Metric;
