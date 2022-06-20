import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Item from "./Item";
import { fetchData } from "./api";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => alert(err) || console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>
        Coinmarket
        <FontAwesome name="bitcoin" size={24} color="black" />
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  texts: {
    paddingTop: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
    textAlign: "center",
    color: "#333",
  },
});

export default App;
