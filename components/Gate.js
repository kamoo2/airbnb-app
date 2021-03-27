// Gate.js : 2개의 다른 Navigation을 보여줌
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => dispatch(logIn("bs.token"))}>
          <Text>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// mapStateToProps를 사용할수도있지만 코드를 줄이기위해 hook을 사용할려고함
// const mapStateToProps = (state) => {
//   console.log(state);
//   return { isLoggedIn: false };
// };

// export default connect(mapStateToProps)(Gate);
