import { View, Text } from "react-native";

export function Score({ score }) {
  const getTextColor = () => {
    if (score < 40) return "color-red-600";
    if (score < 85) return "color-yellow-600";
    if (score >= 85) return "color-green-600";
  };
  const classNameText = getTextColor();

  const getBorderColor = () => {
    if (score < 40) return "border-red-600";
    if (score < 85) return "border-yellow-600";
    if (score >= 85) return "border-green-600";
  };
  const classNameBorder = getBorderColor();

  return (
    <View
      className={`flex-row gap-0 border-4 ${classNameBorder} w-16 h-16 rounded-full justify-center items-center`}
    >
      <Text className={`text-2xl ${classNameText} font-bold`}>{score}</Text>
      <Text className={`text-sm ${classNameText} font-bold`}>%</Text>
    </View>
  );
}
