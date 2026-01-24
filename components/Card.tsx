import { View, Text } from "react-native";
import React from "react";
import { CardInsightProps } from "@/types/type";

const Card = ({ children, className = "", isSmall = false }: CardInsightProps) => {
    return (
        <View className={`bg-white rounded-3xl ${isSmall ? "p-4" : "p-5"} shadow-sm ${className}`}>
            {children}
        </View>
    );
};

export default Card;
