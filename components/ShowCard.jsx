import { useEffect, useRef } from "react";
import { Text, View, Image, Animated, Pressable } from "react-native";
import { Score } from "./Score";

export function ShowCard({ show }) {
  return (
    <Pressable className="border border-gray-500/10 active:border-yellow-300 rounded-xl mb-4 ">
      <View
        className="bg-gray-500/10 p-4 rounded-xl gap-1 w-full flex-col"
        key={show.id}
      >
        <View className="flex-row gap-4 items-center">
          <Image
            source={{ uri: show.movie_image }}
            className="border-yellow-700 border rounded-lg w-[169] h-[250]"
          />
          <View className="flex-shrink items-center">
            <Text className="text-2xl text-center font-bold mb-2 color-slate-100">
              {show.title}
            </Text>
            <Text className="text-xs color-slate-300 mb-2">
              {show.release_date}
            </Text>
            <Score score={show.vote_average} />
            <Text className="text-base mt-4 flex-shrink text-slate-200 text-pretty">
              {show.overview.slice(0, 100)} ...
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
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
