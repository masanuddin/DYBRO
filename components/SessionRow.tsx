import { View, Text } from "react-native";
import React from "react";
import { SessionRowProps } from "@/types/type";
import Metric from "./Metric";

const SessionRow = ({ date, focus, comfort, score, isSmall }: SessionRowProps) => {
    return (
        <View
            className={`border border-gray-100 rounded-2xl ${isSmall ? "p-3 mb-2" : "p-4 mb-3"} flex-row items-center justify-between`}
        >
            <View className="flex-1 min-w-0">
                <Text
                    className={`font-semibold text-gray-800 ${isSmall ? "text-sm" : "text-base"}`}
                    numberOfLines={1}
                >
                    {date}
                </Text>
                <View className={`flex-row gap-3 ${isSmall ? "mt-1.5" : "mt-2"}`}>
                    <Metric label="Focus" value={focus} isSmall={isSmall} />
                    <Metric label="Comfort" value={comfort} isSmall={isSmall} />
                    <Metric label="Duration" value="25m" isSmall={isSmall} />
                </View>
            </View>

            <View
                className={`bg-indigo-500 ${isSmall ? "px-2.5 py-1" : "px-3 py-1"} rounded-full ml-2`}
            >
                <Text className={`text-white ${isSmall ? "text-[10px]" : "text-xs"} font-semibold`}>
                    {score}
                </Text>
            </View>
        </View>
    );
};

export default SessionRow;
