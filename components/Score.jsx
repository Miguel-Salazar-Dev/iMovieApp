import { View, Text } from "react-native";

export function Score({ score }) {
  const getColor = () => {
    if (score < 40) return "-red-500";
    if (score < 85) return "-yellow-500";
    return "-green-500";
  };

  const className = getColor();

  return (
    <View
      className={`flex-row gap-0 border-4 border${className} w-16 h-16 rounded-full justify-center items-center`}
    >
      <Text className={`text-2xl color${className} font-bold`}>{score}</Text>
      <Text className={`text-sm color${className} font-bold`}>%</Text>
    </View>
  );
}
