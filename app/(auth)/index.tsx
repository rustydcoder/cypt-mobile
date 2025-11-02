import AuthButtons from "@/components/Auth/AuthButtons";
import AuthWrapper from "@/components/Auth/AuthWrapper";
import React from "react";
import { View } from "react-native";

const index = () => {
  return (
    <AuthWrapper>
      <View style={{ width: "100%", flex: 1, justifyContent: "flex-end" }}>
        <AuthButtons />
      </View>
    </AuthWrapper>
  );
};

export default index;
