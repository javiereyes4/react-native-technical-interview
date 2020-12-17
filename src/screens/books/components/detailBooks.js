import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import I18n from "react-native-i18n";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../assets/color/colors";

function DetailBooks(props) {
  const { dataBook, listSuggestions } = props;
  const [data, setDetailBook] = useState();
  const [commentsHeight, setCommentsHeight] = useState(130);
  useEffect(() => {
    setDetailBook(dataBook);
  }, []);

  function changeBook(value) {
    setDetailBook(value);
  }

  const changeHeigth = () => {
    setCommentsHeight(440);
  };

  const screenWidth = Math.round(Dimensions.get("window").width);
  return (
    data != undefined && (
      <View
        style={{
          width: screenWidth,
          alignContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.bgColor,
        }}
      >
        <View style={styles.container(screenWidth)}>
          <>
            {data.image_url != null && data.image_url != undefined ? (
              <Image
                style={styles.imageBook}
                source={{ uri: data.image_url }}
              />
            ) : (
              <Image
                style={styles.imageBook}
                source={require("../../../assets/images/imgNotAvailable.png")}
              />
            )}
          </>
          <View>
            <Text style={styles.titleBook}>{data.title}</Text>
            <Text style={styles.detailText}>{data.author}</Text>
            <Text style={styles.detailText}>{data.genre}</Text>
            <Text style={styles.detailText}>{data.year}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: screenWidth - 100,
          }}
        >
          <ScrollView horizontal={true}>
            <>
              {listSuggestions.map((item, key) => (
                <TouchableOpacity
                  key={`touch-${key}`}
                  onPress={() => changeBook(item)}
                >
                  {item.image_url != null ? (
                    item.title != data.title && (
                      <Image
                        key={`img-${key}`}
                        style={styles.imageBookSuggestions}
                        source={{ uri: item.image_url }}
                      />
                    )
                  ) : (
                    <Image
                      key={`img1-${key}`}
                      style={styles.imageBookSuggestions}
                      source={require("../../../assets/images/imgNotAvailable.png")}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </>
          </ScrollView>
        </View>
        {dataBook.comments != undefined && (
          <View style={styles.commentsView(commentsHeight, screenWidth)}>
            {dataBook.comments != undefined && commentsHeight != 130 ? (
              dataBook.comments.map((item, key) => (
                <View key={`commentView-${key}`}>
                  {item != undefined && (
                    <Text
                      key={`commentText-${key}`}
                      style={{ textAlign: "justify", marginVertical: 5 }}
                    >
                      {item}
                    </Text>
                  )}
                </View>
              ))
            ) : (
              <Text style={{ textAlign: "justify", marginVertical: 2 }}>
                {dataBook.comments[0]}
              </Text>
            )}
            <TouchableOpacity
              onPress={() => changeHeigth()}
              style={{ marginVertical: 10 }}
            >
              <Text style={{ color: COLORS.blue, fontWeight: "bold" }}>
                {I18n.t("viewMore")}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: (screenWidth) => ({
    width: screenWidth - 100,
    borderRadius: 10,
    height: 210,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
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
    marginVertical: 20,
  }),
  commentsView: (commentsHeight, screenWidth) => ({
    height: commentsHeight,
    width: screenWidth - 100,
    alignItems: "center",
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 20,
    padding: 10,
  }),
  imageBookSuggestions: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  imageBook: {
    width: 120,
    height: 180,
    marginHorizontal: 15,
  },
  titleBook: {
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 10,
    width: 120,
  },
  detailText: {
    marginVertical: 5,
  },
});

export default DetailBooks;
