import React, { useEffect, useState } from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";
import I18n from "react-native-i18n";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBooks } from "../../redux/actions/booksActions";
import ListBooks from "./components/listBooks";
import { TouchableOpacity } from "react-native";
import DetailBooks from "./components/detailBooks";
import { COLORS } from "../../assets/color/colors";

function Books(props) {
  const { getBooks, books, logout } = props;
  const [detailView, setDetailView] = useState(false);
  const [detailBook, setDetailBook] = useState();
  const [suggestions, setSuggestions] = useState();
  useEffect(() => {
    getBooks();
  }, []);

  const changeScreen = (value, list) => {
    setDetailView(!detailView);
    setDetailBook(list);
    setSuggestions(
      books.books.filter((element) => element.genre === list.genre)
    );
  };

  const returnView = () => {
    setDetailView(!detailView);
  };

  return (
    <>
      <Header
        leftComponent={
          <TouchableOpacity onPress={returnView}>
            {detailView && (
              <Image
                style={styles.imageBook}
                source={require("../../assets/images/left-arrow.png")}
              />
            )}
          </TouchableOpacity>
        }
        centerComponent={{
          text: detailView ? I18n.t("bookDetail") : I18n.t("libary"),
          style: { color: COLORS.white },
        }}
        rightComponent={
          <TouchableOpacity onPress={logout}>
            <Image
              style={styles.imageBook}
              source={require("../../assets/images/logouts.png")}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView>
        {books.books != undefined && !detailView ? (
          <ListBooks listBooks={books} screen={changeScreen} />
        ) : (
          <DetailBooks dataBook={detailBook} listSuggestions={suggestions} />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imageBook: {
    width: 30,
    height: 25,
  },
});

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getBooks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);
