import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { FocusStatus, StatusConfigItem, StatusCardProps } from "@/types/type";
import { useResponsive } from "@/hooks/Responsive";

export const STATUS_CONFIG: Record<FocusStatus, StatusConfigItem> = {
    focused: {
        label: "Focused",
        badgeBg: "bg-green-100",
        badgeText: "text-green-600",
        icon: icons.akuilaSenang,
    },
    distracted: {
        label: "Distracted",
        badgeBg: "bg-yellow-100",
        badgeText: "text-yellow-600",
        icon: icons.akuilaSedih,
    },
    away: {
        label: "Away",
        badgeBg: "bg-red-100",
        badgeText: "text-red-600",
        icon: icons.akuilaMarah,
    },
};

// Dipakai di home page

const StatusCard = ({ status, description }: StatusCardProps) => {
    const config = STATUS_CONFIG[status];
    const { isSmallDevice, spacing, text } = useResponsive();

    return (
        <View
            className={`bg-white rounded-3xl ${spacing.cardPadding} flex-row items-center shadow-sm mt-5`}
        >
            {/* ICON */}
            <View
                className={`${isSmallDevice ? "w-14 h-14" : "w-16 h-16"} rounded-full items-center justify-center ${isSmallDevice ? "mr-3" : "mr-4"}`}
            >
                <Image
                    source={config.icon}
                    className={`${isSmallDevice ? "w-10 h-10" : "w-12 h-12"}`}
                    resizeMode="contain"
                />
            </View>

            {/* CONTENT */}
            <View className="flex-1 min-w-0">
                {/* BADGE */}
                <View
                    className={`self-start ${isSmallDevice ? "px-2.5 py-1" : "px-3 py-1"} rounded-full mb-2 ${config.badgeBg}`}
                >
                    <Text className={`${text.sm} font-medium ${config.badgeText}`}>
                        {config.label}
                    </Text>
                </View>

                {/* DESCRIPTION */}
                <Text className={`text-gray-700 font-medium ${text.sm}`} numberOfLines={3}>
                    {description}
                </Text>
            </View>
        </View>
    );
};

export default StatusCard;
