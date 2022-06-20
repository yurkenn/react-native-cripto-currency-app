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
        <View style={styles.texts}>
          <Text>{item.symbol}</Text>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text style={{ fontWeight: "bold" }}>
            {item.quote.USD.price.toFixed(2)}$
          </Text>
          <Text>{item.quote.USD.percent_change_24h.toFixed(2)}%</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  texts: {
    marginStart: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginStart: 96,
  },
});

export default Item;
