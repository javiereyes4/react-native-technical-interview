import React from "react";
import { TextInput, View, Text } from "react-native";

export default function MyTextInput(props) {
  const { input, ...inputProps } = props;

  return (
    <View>
      <TextInput
        {...inputProps}
        // onChangeText={input.onChange}
        // onBlur={input.onBlur}
        // onFocus={input.onFocus}
        // value={input.value}
        style={{
          fontSize: 18,
          borderBottomColor: "#4BA411",
          borderBottomWidth: 1,
          marginBottom: 25,
          width: 200,
        }}
      />
    </View>
  );
}
