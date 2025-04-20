import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function ShowCard({ show }) {
  return (
    <View key={show.id} style={styles.card}>
      <Image source={{ uri: show.movie_image }} style={styles.image} />
      <Text style={styles.title}>{show.title}</Text>
      <Text style={styles.release}>{show.release_date}</Text>
      <Text style={styles.plot}>{show.overview}</Text>
      <Text style={styles.rating}>{show.vote_average}%</Text>
    </View>
  );
}

export function AnimatedShowCard({ show, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
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

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingTop: 20,
  },
  image: {
    width: 169,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#fff",
  },
  plot: {
    fontSize: 16,
    color: "#eee",
  },
  release: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 5,
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gold",
    marginTop: 5,
    marginBottom: 10,
  },
});
