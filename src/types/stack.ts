import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TTodo } from "./todo";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  TodoDetail: { todo: TTodo };
};

export type TodoDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TodoDetail'
>;

export type TodoDetailScreenRouteProp = RouteProp<RootStackParamList, 'TodoDetail'>;
