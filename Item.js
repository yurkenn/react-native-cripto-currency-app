import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Item = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
          }}
          style={styles.image}
        />
        <View>
          <Text>{item.symbol}</Text>
          <Text>{item.name}</Text>
          <Text>{item.quote.USD.price}$</Text>
          <Text>{item.quote.USD.percent_change_24h}%</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
});

export default Item;
