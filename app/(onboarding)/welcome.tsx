import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { questionsOB } from "@/constants";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useResponsive } from "@/hooks/Responsive";
import { useChild } from "@/contexts/ChildContext";

export default function OnboardingScreen() {
    const [step, setStep] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [focused, setFocused] = useState<boolean>(false);
    const { isSmallDevice, spacing, text, size } = useResponsive();
    const { setChildName } = useChild();

    // 🔥 GUARD
    if (!questionsOB || questionsOB.length === 0) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center">
                <Text className={text.base}>NO QUESTIONS</Text>
            </SafeAreaView>
        );
    }

    const current = questionsOB[step];
    const value = answers[current.id] || "";
    const progress = ((step + 1) / questionsOB.length) * 100;
    const isLastStep = step === questionsOB.length - 1;

    // 🔥 CONTINUE / FINISH HANDLER
    const handleContinue = async () => {
    if (!value) return;

    // 🔥 STEP 1 = CHILD NAME
    if (current.id === 1) {
        setChildName(value); // ⬅️ INI KUNCI SEGALANYA
    }

    if (!isLastStep) {
        setStep((prev) => prev + 1);
    } else {
        await AsyncStorage.setItem("onboardingDone", "true");
        router.replace("/(root)/(tabs)");
    }
    };

    return (
        <SafeAreaView className={`flex-1 bg-[#F8FAFC] ${spacing.containerPadding}`}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            >
                <ScrollView
                    className="flex-1"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Progress */}
                    <View className={`${isSmallDevice ? "mt-2" : "mt-3"}`}>
                        <View className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <View
                                className="h-full bg-blue-500"
                                style={{ width: `${progress}%` }}
                            />
                        </View>

                        <View
                            className={`flex-row justify-between ${isSmallDevice ? "mt-2" : "mt-3"}`}
                        >
                            <Text className={`${text.sm} text-[#9A7B5A]`}>
                                Step {step + 1} of {questionsOB.length}
                            </Text>
                            <TouchableOpacity
                                onPress={async () => {
                                    await AsyncStorage.setItem("onboardingDone", "true");
                                    router.replace("/(root)/(tabs)");
                                }}
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            >
                                <Text className={`${text.sm} text-blue-600`}>Skip setup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Card */}
                    <View
                        className={`bg-white ${isSmallDevice ? "mt-6" : "mt-8"} ${spacing.cardPadding} rounded-2xl shadow-lg shadow-black/10`}
                    >
                        {/* Icon */}
                        <View
                            className={`${size.icon} bg-blue-100 rounded-xl items-center justify-center ${isSmallDevice ? "mb-3" : "mb-4"}`}
                        >
                            <Text
                                className={`text-blue-600 ${isSmallDevice ? "text-lg" : "text-xl"}`}
                            >
                                {current.icon ?? "✨"}
                            </Text>
                        </View>

                        {/* Question */}
                        <Text
                            className={`${text["2xl"]} font-semibold text-[#3F2E1C] ${isSmallDevice ? "mb-4" : "mb-6"}`}
                        >
                            {current.question}
                        </Text>

                        {/* TEXT TYPE */}
                        {current.type === "text" && (
                            <TextInput
                                value={value}
                                placeholder="Type your answer..."
                                placeholderTextColor="#9CA3AF"
                                onChangeText={(text) =>
                                    setAnswers((prev) => ({
                                        ...prev,
                                        [current.id]: text,
                                    }))
                                }
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                multiline={isSmallDevice}
                                numberOfLines={isSmallDevice ? 2 : 1}
                                className={`px-4 ${spacing.buttonPadding} rounded-xl border ${
                                    focused ? "border-blue-500" : "border-gray-300"
                                } ${text.base}`}
                                style={{
                                    minHeight: isSmallDevice ? 44 : 48,
                                    textAlignVertical: "center",
                                }}
                            />
                        )}

                        {/* CHOICE TYPE */}
                        {current.type === "choice" && (
                            <View className={`flex-row flex-wrap ${spacing.gap}`}>
                                {current.options?.map((opt) => {
                                    const selected = value === opt;
                                    return (
                                        <TouchableOpacity
                                            key={opt}
                                            onPress={() =>
                                                setAnswers((prev) => ({
                                                    ...prev,
                                                    [current.id]: opt,
                                                }))
                                            }
                                            activeOpacity={0.7}
                                            className={`w-[48%] ${spacing.buttonPadding} rounded-xl border items-center justify-center ${
                                                selected
                                                    ? "bg-blue-100 border-blue-500"
                                                    : "border-gray-300"
                                            }`}
                                            style={{ minHeight: isSmallDevice ? 44 : 48 }}
                                        >
                                            <Text
                                                className={`font-medium ${
                                                    selected ? "text-blue-600" : "text-gray-700"
                                                } ${text.base}`}
                                                numberOfLines={2}
                                                adjustsFontSizeToFit
                                            >
                                                {opt}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        )}
                    </View>

                    {/* Spacer untuk push button ke bawah */}
                    <View className="flex-1" />

                    {/* Continue / Finish */}
                    <View className={spacing.marginBottom}>
                        <TouchableOpacity
                            disabled={!value}
                            onPress={handleContinue}
                            activeOpacity={0.8}
                            className={`${spacing.buttonPadding} rounded-xl items-center justify-center ${
                                value ? "bg-blue-500" : "bg-blue-300"
                            }`}
                            style={{ minHeight: isSmallDevice ? 44 : 48 }}
                        >
                            <Text className={`text-white font-semibold ${text.base}`}>
                                {isLastStep ? "Finish →" : "Continue →"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
