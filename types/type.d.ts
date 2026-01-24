import { TextInputProps, TouchableOpacityProps } from "react-native";

// SignIn & SignUp
export interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
}

// On Boarding
export interface QuestionsOnBoarding {
    id: number;
    icon: any;
    question: string;
    type: "text" | "choice";
    options?: string[];
}

// Status Card (Component)
export type FocusStatus = "focused" | "distracted" | "away";

export interface StatusCardProps {
    status: FocusStatus;
    description: string;
    bgColor?: string;
}

export interface StatusConfigItem {
    label: string;
    badgeBg: string;
    badgeText: string;
    icon: any;
}

// Session Row Component
export interface SessionRowProps {
    date: string;
    focus: string;
    comfort: string;
    score: string;
    isSmall?: boolean;
}

// Metric Row Component
export interface MetricProps {
    label: string;
    value: string;
    isSmall?: boolean;
}

// Legend Component
export interface LegendProps {
    label: string;
    color?: string;
    dashed?: boolean;
    isSmall?: boolean;
}

// Star Component
export interface StatProps {
    value: string;
    label: string;
    color: string;
    isSmall?: boolean;
}

// CardInsight Comonent
export interface CardInsightProps {
    children: React.ReactNode;
    className?: string;
    isSmall?: boolean;
}

// Stat card Component
export interface StatCardProps {
    label: string;
    value: string;
    isSmall?: boolean;
}

export interface AchievementProps {
    label: string;
    isSmall?: boolean;
}

export interface SettingRowProps {
    label: string;
    value: string;
    isSmall?: boolean;
}
