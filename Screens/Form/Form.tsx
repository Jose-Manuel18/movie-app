import { Alert, Button } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styled from "styled-components/native";
import { Colors } from "../../Components/Utils/Colors";
import { IconButton } from "../../Components/IconButton";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../State/firebase";
import { FormProps } from "./types";
import { useMutation, gql } from "@apollo/client";
import { Loading } from "../../Components/Loading";
import { useSetRecoilState } from "recoil";
import { userState } from "../../State/UserState";

const schema = z.object({
  name: z.string().min(1),
  password: z.string().min(8),
  email: z.string().email(),
});

export function Form() {
  const { navigate }: { navigate: any } = useNavigation();
  const userData = useSetRecoilState(userState);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });
  const SIGN_UP = gql`
    mutation Mutation($email: String!, $password: String!, $name: String) {
      signup(email: $email, password: $password, name: $name) {
        token
        user {
          uid
          name
          id
          email
        }
      }
    }
  `;

  const [registerUser, { loading, error, data }] = useMutation(SIGN_UP);

  if (error) return null;
  if (loading) return <Loading />;
  console.log(data);
  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    await registerUser({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
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
      <Block spacer={64} />
      <LargeText>Create </LargeText>
      <LargeText>Account</LargeText>
      <Block spacer={32} />
      <InputContainer>
        <IconButton
          icon="person-outline"
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
            maxLength: 30,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholderTextColor="white"
              placeholder="Name"
            />
          )}
          name="name"
        />
      </InputContainer>
      {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
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
              placeholderTextColor="white"
            />
          )}
          name={"email"}
        />
      </InputContainer>
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
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
              placeholderTextColor="white"
              caretHidden={true}
              secureTextEntry={true}
              style={{ backgroundColor: Colors.DarkPurple }}
            />
          )}
          name="password"
        />
      </InputContainer>
      {errors.password && (
        <ErrorText>Password must contain at least 8 character(s)</ErrorText>
      )}
      <Block spacer={32} />
      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      <Block spacer={16} />
      <TextContainer>
        <Text>Have an account?</Text>
        <Block spacer={4} />
        <TouchableOpacity onPress={() => navigate("Login")}>
          <SText>sign in</SText>
        </TouchableOpacity>
      </TextContainer>
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

const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  border-style: solid;
  background-color: ${Colors.DarkPurple};
`;
const TextInput = styled.TextInput`
  flex: 1;
  padding-left: 8px;
  font-size: 18px;
  padding-bottom: 15px;
  padding-top: 23px;
  color: white;
  background-color: ${Colors.DarkPurple};
`;

const ErrorText = styled.Text`
  color: red;
`;
const Block = styled.View<{ spacer: number }>`
  padding: ${(props) => props.spacer}px;
  background-color: ${Colors.DarkPurple};
`;

const Text = styled.Text`
  color: white;
`;
//Sign in Text
const SText = styled.Text`
  color: ${Colors.Rose};
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${Colors.Rose};
`;
const TextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const TouchableOpacity = styled.TouchableOpacity``;
