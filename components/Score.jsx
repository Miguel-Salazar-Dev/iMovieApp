import { View, Text } from "react-native";

export function Score({ score }) {
  /*
  const getColor = () => {
    if (score < 40) return "-red-500";
    if (score < 85) return "-yellow-500";
    if (score >= 85) return "-green-500";
  };

  const className = getColor();
  //console.log(className);
*/
  return (
    <View
      className={`flex-row gap-0 border-4 border-yellow-500 w-16 h-16 rounded-full justify-center items-center`}
    >
      <Text className={`text-2xl color-yellow-500 font-bold`}>{score}</Text>
      <Text className={`text-sm color-yellow-500 font-bold`}>%</Text>
    </View>
  );
}
