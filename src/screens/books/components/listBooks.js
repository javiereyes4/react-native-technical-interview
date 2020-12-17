import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

function ListBooks(props) {
  const { listBooks, screen } = props;
  const [books, setBooks] = useState(listBooks);
  const screenWidth = Math.round(Dimensions.get("window").width);

  function changeState(value) {
    screen(true, value);
  }

  function searchBook(value) {
    const filter = books.books.filter(
      (element) => element.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setBooks(value.length === 0 ? listBooks : { books: [...filter] });
  }

  return (
    <View
      style={{
        width: screenWidth,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder={"name"}
        maxLength={90}
        onChangeText={searchBook}
      />
      {books.books != undefined &&
        books.books.map((item, key) => (
          <View key={`div-${key}`} style={styles.container(screenWidth)}>
            <TouchableOpacity onPress={() => changeState(item)}>
              <>
                {item.image_url != null ? (
                  <Image
                    style={styles.imageBook}
                    source={{ uri: item.image_url }}
                  />
                ) : (
                  <Image
                    style={styles.imageBook}
                    source={require("../../../assets/images/imgNotAvailable.png")}
                  />
                )}
              </>
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.titleBook} key={`title-${key}`}>
                {item.title}
              </Text>
              <Text key={`publisher-${key}`}>{item.publisher}</Text>
            </View>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (screenWidth) => ({
    width: screenWidth - 100,
    borderRadius: 10,
    height: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  }),
  input: {
    fontSize: 18,
    borderBottomColor: "#3CB7FF",
    borderBottomWidth: 1,
    marginVertical: 25,
    width: 200,
  },
  imageBook: {
    width: 60,
    height: 80,
    marginHorizontal: 10,
  },
  titleBook: {
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 10,
  },
});

export default ListBooks;
