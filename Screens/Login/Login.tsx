import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { auth } from "../../State/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import { Colors } from "../../Components/Utils/Colors";
import { IconButton } from "../../Components/IconButton";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    reset({ email: "", password: "" });
  }, [errorMessage]);
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          userData(user);
        },
      );
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  return (
    <View>
      <Block size={64} />
      <TopContainer>
        <LargeText>Welcome</LargeText>
        <LargeText>Back</LargeText>
      </TopContainer>
      <MiddleContainer>
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
                autoComplete="email"
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
                autoComplete="email"
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
      </MiddleContainer>
      <BottomContainer>
        <Button onPress={handleSubmit(onSubmit)}>
          <BText>Sign In</BText>
        </Button>
        <Block size={16} />
        <FError>
          {errorMessage ? "There has been an error, try again" : null}
        </FError>
      </BottomContainer>
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
//Error Text

const EText = styled.Text`
  color: red;
`;

const Block = styled.View<{ size?: number }>`
  height: ${(p) => p.size}px;
`;
const Button = styled.TouchableOpacity`
  background-color: ${Colors.Rose};
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
const BText = styled.Text`
  color: ${Colors.TextColor};
  font-weight: bold;
  font-size: 16px;
`;
const TopContainer = styled.View`
  flex: 1;
`;
const MiddleContainer = styled.View`
  flex: 1;
`;

const BottomContainer = styled.View`
  flex: 1;
`;
const FError = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
