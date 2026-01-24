import { useWindowDimensions } from "react-native";

/* =======================
   BREAKPOINTS
======================= */

export const BREAKPOINTS = {
    SMALL: 360,
    MEDIUM: 400,
    SHORT_HEIGHT: 700,
    VERY_SHORT_HEIGHT: 650,
} as const;

/* =======================
   RESPONSIVE HOOK
======================= */

export const useResponsive = () => {
    const { width, height } = useWindowDimensions();

    // Device detection
    const isSmallDevice = width < BREAKPOINTS.SMALL;
    const isMediumDevice = width >= BREAKPOINTS.SMALL && width < BREAKPOINTS.MEDIUM;
    const isLargeDevice = width >= BREAKPOINTS.MEDIUM;
    const isShortDevice = height < BREAKPOINTS.SHORT_HEIGHT;
    const isVeryShortDevice = height < BREAKPOINTS.VERY_SHORT_HEIGHT;

    return {
        // Raw values
        width,
        height,

        // Device types
        isSmallDevice,
        isMediumDevice,
        isLargeDevice,
        isShortDevice,
        isVeryShortDevice,

        // Spacing utilities
        spacing: {
            containerPadding: isSmallDevice ? "px-4" : "px-5",
            cardPadding: isSmallDevice ? "p-4" : "p-5",
            cardPaddingSmall: isSmallDevice ? "p-3" : "p-4",
            // Removed topPadding & topMargin - use justify-center instead for auth screens
            marginBottom: isSmallDevice ? "mb-4" : "mb-6",
            marginBottomLarge: isSmallDevice ? "mb-5" : "mb-7",
            buttonPadding: isSmallDevice ? "py-3" : "py-4",
            gap: isSmallDevice ? "gap-2" : "gap-3",
            gapLarge: isSmallDevice ? "gap-4" : "gap-6",
        },

        // Typography utilities
        text: {
            xs: isSmallDevice ? "text-[10px]" : "text-xs",
            sm: isSmallDevice ? "text-xs" : "text-sm",
            base: isSmallDevice ? "text-sm" : "text-base",
            lg: isSmallDevice ? "text-base" : "text-lg",
            xl: isSmallDevice ? "text-lg" : "text-xl",
            "2xl": isSmallDevice ? "text-xl" : isMediumDevice ? "text-xl" : "text-2xl",
            "3xl": isSmallDevice ? "text-2xl" : isMediumDevice ? "text-2xl" : "text-3xl",
        },

        // Size utilities
        size: {
            icon: isSmallDevice ? "w-9 h-9" : "w-10 h-10",
            iconLarge: isSmallDevice ? "w-16 h-16" : "w-20 h-20",
            logo: isSmallDevice ? "w-16 h-16" : "w-20 h-20",
            button: isSmallDevice ? "h-11" : "h-12",
            circle: isSmallDevice ? "w-16 h-16" : "w-20 h-20",
            chartBar: isSmallDevice ? "w-4" : "w-5",
            chartHeight: isSmallDevice ? "h-32" : "h-40",
            legendDot: isSmallDevice ? "h-2.5 w-2.5" : "h-3 w-3",
        },

        // Card utilities
        card: {
            width: isSmallDevice ? "w-[90%]" : "w-[85%]",
            padding: isSmallDevice ? "p-4" : "p-5",
            paddingSmall: isSmallDevice ? "p-3" : "p-4",
        },

        // Footer utilities (for auth screens)
        footer: {
            bottom: isVeryShortDevice ? "bottom-1" : "bottom-2",
            margin: isVeryShortDevice ? "mb-6" : "mb-10",
        },

        // ScrollView utilities
        scroll: {
            paddingBottom: isVeryShortDevice ? 80 : 100,
        },
    };
};

/* =======================
   USAGE EXAMPLES
======================= */

// Example 1: Auth Screens (Sign In / Sign Up)
// import { useResponsive } from "@/hooks/Responsive";
//
// const { isSmallDevice, spacing, text, size, card, footer, scroll } = useResponsive();
// <View className={`${spacing.topPadding} ${spacing.topMargin}`}>
//   <Image className={size.logo} />
//   <Text className={text["3xl"]}>Welcome</Text>
//   <View className={card.width}>
//     <Button className={size.button} />
//   </View>
// </View>

// Example 2: Dashboard / Insights Screens
// const { isSmallDevice, spacing, text, size } = useResponsive();
// <View className={spacing.containerPadding}>
//   <Text className={text["2xl"]}>Dashboard</Text>
//   <View className={size.chartHeight}>
//     {/* Chart content */}
//   </View>
// </View>

// Example 3: Profile / Settings Screens
// const { isSmallDevice, spacing, text } = useResponsive();
// <ScrollView className={spacing.containerPadding}>
//   <Text className={text.lg}>Settings</Text>
//   <Text className={text.sm}>Preferences</Text>
// </ScrollView>
