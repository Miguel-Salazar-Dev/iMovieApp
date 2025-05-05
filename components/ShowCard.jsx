import { useEffect, useRef } from "react";
import { Text, View, Image, Animated } from "react-native";
import { Score } from "./Score";

export function ShowCard({ show }) {
  return (
    <View className="bg-gray-500/10 p-4 rounded-xl gap-1 mb-4" key={show.id}>
      <View className="flex-row gap-4 justify-start items-center">
        <Image
          source={{ uri: show.movie_image }}
          className="border-yellow-500 border rounded-lg w-[169] h-[250] mb-3"
        />
        <Score score={show.vote_average} />
      </View>
      <Text className="text-2xl font-bold mb-0 color-slate-100">
        {show.title}
      </Text>
      <Text className="text-xs color-slate-300 mb-2">{show.release_date}</Text>
      <Text className="mb-2 flex-shrink text-base text-slate-200 ">
        {show.overview.slice(0, 150)} ...
      </Text>
    </View>
  );
}

export function AnimatedShowCard({ show, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ShowCard show={show} />
    </Animated.View>
  );
}
