import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getTopShows } from "../lib/imdb";
import { AnimatedShowCard } from "./ShowCard";
import { Logo } from "./Logo";

export function Main() {
  const [shows, setShows] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getTopShows().then((shows) => {
      setShows(shows);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <Logo height={50} />
        <Text style={{ fontSize: 22, color: "#f5c518", marginTop: 10 }}>
          iMovie App
        </Text>
      </View>
      {shows.length === 0 ? (
        <ActivityIndicator color={"gold"} size={"large"} />
      ) : (
        <FlatList
          data={shows}
          //keyExtractor={(show) => show.slug} Se debe colocar el keyExtractor si los datos no contienen .key o .id
          renderItem={({ item }) => (
            <AnimatedShowCard show={item} index={item.key} />
          )}
        />
      )}
    </View>
  );
}
