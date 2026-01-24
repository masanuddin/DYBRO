import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SessionRow from "@/components/SessionRow";
import Legend from "@/components/Legend";
import Stat from "@/components/Stat";
import Card from "@/components/Card";



export default function App() {
    const { width } = useWindowDimensions();

    // Responsive breakpoints
    const isSmallDevice = width < 360;
    const isMediumDevice = width >= 360 && width < 400;

    // Dynamic values
    const containerPadding = isSmallDevice ? "px-4" : "px-5";
    const topPadding = isSmallDevice ? "pt-3" : "pt-4";
    const bottomPadding = isSmallDevice ? "pb-8" : "pb-10";

    return (
        <SafeAreaView className="flex-1 bg-[#FAF9F6]">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className={`${containerPadding} ${topPadding} ${bottomPadding}`}>
                    {/* HEADER */}
                    <View className={`${isSmallDevice ? "mb-4" : "mb-6"}`}>
                        <Text
                            className={`${isSmallDevice ? "text-xl" : "text-2xl"} font-bold text-gray-800`}
                        >
                            Insights
                        </Text>
                        <Text
                            className={`mt-1 ${isSmallDevice ? "text-sm" : "text-base"} text-gray-500`}
                        >
                            Today's focus summary
                        </Text>
                    </View>

                    {/* DAILY SUMMARY */}
                    <Card className={`${isSmallDevice ? "mb-5" : "mb-7"}`} isSmall={isSmallDevice}>
                        <RowBetween>
                            <Text
                                className={`${isSmallDevice ? "text-base" : "text-lg"} font-semibold text-gray-800 ml-2`}
                            >
                                Daily Summary
                            </Text>
                            <Text
                                className={`font-medium text-blue-500 ${isSmallDevice ? "text-sm" : "text-base"}`}
                            >
                                ↗ +12%
                            </Text>
                        </RowBetween>

                        <View
                            className={`flex-row items-center ${isSmallDevice ? "mt-3" : "mt-4"}`}
                        >
                            <View
                                className={`${isSmallDevice ? "w-16 h-16" : "w-20 h-20"} mx-2 rounded-full border-8 border-green-500 items-center justify-center`}
                            >
                                <Text
                                    className={`font-bold text-gray-800 ${isSmallDevice ? "text-sm" : "text-base"}`}
                                >
                                    74%
                                </Text>
                            </View>

                            <View className={`${isSmallDevice ? "ml-3" : "ml-5"} flex-1`}>
                                <Text
                                    className={`font-semibold text-gray-800 ${isSmallDevice ? "text-sm" : "text-base"}`}
                                >
                                    Focus Score
                                </Text>
                                <Text
                                    className={`mt-1 text-gray-500 ${isSmallDevice ? "text-xs" : "text-sm"}`}
                                >
                                    Great concentration today
                                </Text>
                            </View>
                        </View>

                        <View
                            className={`flex-row justify-center ${isSmallDevice ? "mt-4" : "mt-6"}`}
                        >
                            <Stat
                                value="127"
                                label="min focus"
                                color="text-green-500"
                                isSmall={isSmallDevice}
                            />
                            <Stat
                                value="4"
                                label="distractions"
                                color="text-red-500"
                                isSmall={isSmallDevice}
                            />
                            <Stat
                                value="5"
                                label="away"
                                color="text-gray-700"
                                isSmall={isSmallDevice}
                            />
                        </View>
                    </Card>

                    {/* SCORE HISTORY */}
                    <Card className={`${isSmallDevice ? "mb-5" : "mb-7"}`} isSmall={isSmallDevice}>
                        <View>
                            <Text
                                className={`${isSmallDevice ? "text-base" : "text-lg"} font-semibold text-gray-800`}
                            >
                                Score History & Forecast
                            </Text>
                            <Text
                                className={`mt-1 ${isSmallDevice ? "text-xs" : "text-sm"} text-gray-500`}
                            >
                                Past performance & AI prediction
                            </Text>
                        </View>

                        <View
                            className={`flex-row items-end justify-between ${isSmallDevice ? "h-32 mt-4" : "h-40 mt-6"}`}
                        >
                            {[70, 74, 78, 68, 62, 75, 80, 82, 76, 78].map((v, i) => (
                                <View
                                    key={i}
                                    className={`${isSmallDevice ? "w-4" : "w-5"} bg-indigo-500 rounded-md`}
                                    style={{ height: `${v}%` }}
                                />
                            ))}

                            {[72, 74, 76, 78, 80].map((v, i) => (
                                <View
                                    key={`f-${i}`}
                                    className={`${isSmallDevice ? "w-4" : "w-5"} rounded-md border-2 border-dashed border-indigo-400 bg-indigo-200/60`}
                                    style={{ height: `${v}%` }}
                                />
                            ))}
                        </View>

                        <View
                            className={`flex-row justify-center ${isSmallDevice ? "mt-3 gap-4" : "mt-4 gap-6"}`}
                        >
                            <Legend
                                label="Historical"
                                color="bg-indigo-500"
                                isSmall={isSmallDevice}
                            />
                            <Legend dashed label="Forecast" isSmall={isSmallDevice} />
                        </View>
                    </Card>

                    {/* RECENT SESSIONS */}
                    <Card className={`${isSmallDevice ? "mb-5" : "mb-7"}`} isSmall={isSmallDevice}>
                        <Text
                            className={`${isSmallDevice ? "text-base" : "text-lg"} font-semibold text-gray-800 mb-2`}
                        >
                            Recent Sessions
                        </Text>

                        <SessionRow
                            date="Jan 4, 2026"
                            focus="86%"
                            comfort="80%"
                            score="83%"
                            isSmall={isSmallDevice}
                        />
                        <SessionRow
                            date="Jan 3, 2026"
                            focus="87%"
                            comfort="75%"
                            score="81%"
                            isSmall={isSmallDevice}
                        />
                        <SessionRow
                            date="Jan 2, 2026"
                            focus="81%"
                            comfort="93%"
                            score="87%"
                            isSmall={isSmallDevice}
                        />
                        <SessionRow
                            date="Jan 1, 2026"
                            focus="79%"
                            comfort="94%"
                            score="87%"
                            isSmall={isSmallDevice}
                        />
                    </Card>

                    {/* FORECAST INSIGHT */}
                    <View
                        className={`bg-indigo-50 border border-indigo-200 rounded-2xl ${isSmallDevice ? "p-4" : "p-5"}`}
                    >
                        <Text
                            className={`font-semibold text-indigo-700 mb-1 ${isSmallDevice ? "text-sm" : "text-base"}`}
                        >
                            📊 Forecast Insight
                        </Text>
                        <Text
                            className={`${isSmallDevice ? "text-xs" : "text-sm"} text-indigo-600 leading-relaxed`}
                        >
                            Based on your last sessions, your focus trend is stable and likely to
                            improve over the next few days. Keep the momentum!
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function RowBetween({ children }: { children: React.ReactNode }) {
    return <View className="flex-row items-center justify-between">{children}</View>;
}
