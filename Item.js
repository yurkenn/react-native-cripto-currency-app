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
          style={{ with: 64, height: 64 }}
        />
        <View>
          <Text>{item.symbol}</Text>
          <Text>{item.name}</Text>
          <Text>{item.quote.USD.price}$</Text>
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
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
});

export default Item;
