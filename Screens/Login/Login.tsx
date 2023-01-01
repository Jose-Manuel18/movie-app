import React from "react";
import styled from "styled-components/native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { auth } from "../../State/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigation } from "@react-navigation/native";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { Colors } from "../../Components/Utils/Colors";
import { IconButton } from "../../Components/IconButton";
import axios from "axios";
import { Button } from "react-native";
import { Block } from "../../Components/Block";
import { useSetRecoilState } from "recoil";
import { userState } from "../../State/UserState";

export interface LoginFormData {
  name: string;
  password: string;
  email: string;
  auth: Auth;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export function Login() {
  const userData = useSetRecoilState(userState);
  const { navigate }: { navigate: any } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          userData(user);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Block size={64} />
      <LargeText>Welcome</LargeText>
      <LargeText>Back</LargeText>
      <Flex />
      <InputContainer>
        <IconButton
          icon="mail-outline"
          size={24}
          color={Colors.TextColor}
          IconStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 23,
          }}
        />
        <Controller
          control={control}
          rules={{
            required: true,
            // pattern:
            //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          }}
          render={({ field: { value, onBlur, onChange } }) => (
            <TextInput
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Email"
              autoCompleteType="email"
              placeholderTextColor="white"
            />
          )}
          name={"email"}
        />
      </InputContainer>
      {errors.email && <EText>{errors.email.message}</EText>}
      <InputContainer>
        <IconButton
          icon="lock-closed-outline"
          size={24}
          color={Colors.TextColor}
          IconStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 23,
          }}
        />
        <Controller
          control={control}
          rules={{
            maxLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType="password"
              placeholder="Password"
              autoCompleteType="password"
              caretHidden={true}
              secureTextEntry={true}
              placeholderTextColor="white"
            />
          )}
          name="password"
        />
      </InputContainer>
      {errors.password && (
        <EText>Password must contain at least 8 character(s)</EText>
      )}
      <Block size={16} />
      <Button title="Press me" onPress={handleSubmit(onSubmit)} />
      <Block size={208} />
    </View>
  );
}
const View = styled.View`
  flex: 1;
  background-color: ${Colors.DarkPurple};
  padding: 0px 24px;
`;
const LargeText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 40px;
  text-align: left;
`;
const TextInput = styled.TextInput`
  flex: 1;
  padding-left: 8px;
  font-size: 18px;
  padding-bottom: 15px;
  padding-top: 23px;
  color: ${Colors.TextColor};
`;
const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
`;
const Text = styled.Text`
  color: white;
`;
//Error Text

const EText = styled.Text`
  color: red;
`;

const Flex = styled.View`
  flex: 1;
`;
