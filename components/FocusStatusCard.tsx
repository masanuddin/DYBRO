import { Text, View } from "react-native";
import Card from "@/components/Card";
import { FocusStatus } from "@/types/type";

type FocusStatusCardProps = {
  uiStatus: FocusStatus;
  confidence: number;
  isSmall?: boolean;
};

export default function FocusStatusCard({
  uiStatus,
  confidence,
  isSmall = false,
}: FocusStatusCardProps) {
  const isFocused = uiStatus === "focused";
  const isDistracted = uiStatus === "distracted";

  const barColor = isFocused
    ? "bg-green-500"
    : isDistracted
    ? "bg-red-500"
    : "bg-gray-400";

  return (
    <Card
      isSmall={isSmall}
      className={
        isFocused
          ? "bg-green-50"
          : isDistracted
          ? "bg-red-50"
          : "bg-gray-100"
      }
    >
      {/* STATUS TEXT */}
      <Text
        className={`text-lg font-bold ${
          isFocused
            ? "text-green-700"
            : isDistracted
            ? "text-red-700"
            : "text-gray-600"
        }`}
      >
        {isFocused && "🟢 Focused"}
        {isDistracted && "🔴 Not Focused"}
        {uiStatus === "away" && "📷 No Active Camera Session"}
      </Text>

      {/* DESCRIPTION */}
      <Text className="mt-1 text-sm text-gray-600">
        {isFocused && "Visual attention detected via camera"}
        {isDistracted && "Visual distraction detected via camera"}
        {uiStatus === "away" && "Waiting for camera session to start"}
      </Text>

      {/* CONFIDENCE BAR */}
      {uiStatus !== "away" && (
        <View className="mt-3">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xs text-gray-500">Confidence</Text>
            <Text className="text-xs font-medium text-gray-600">
              {confidence}%
            </Text>
          </View>

          <View className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <View
              className={`h-full ${barColor}`}
              style={{ width: `${confidence}%` }}
            />
          </View>
        </View>
      )}
    </Card>
  );
}