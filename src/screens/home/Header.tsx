import { Text } from "react-native";
import React from "react";
import {
  StyledImage,
  StyledText,
  StyledTextInput,
  StyledView,
} from "../../styledReactNative";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { grayLight, primary } from "../../theme/colors";

export default function Header() {
  return (
    <StyledView className="p-4">
      <MainSection />
      <SearchSection />
    </StyledView>
  );
}

function MainSection() {
  return (
    <StyledView className="flex-row space-x-2 items-center mb-4">
      <StyledImage
        source={{
          uri: "https://links.papareact.com/wru",
        }}
        className="w-7 h-7 p-4 rounded-full"
      />

      <StyledView className="flex-1">
        <StyledText className="font-bold text-gray-400 text-xs">
          Deliver now!
        </StyledText>
        <StyledText className="font-bold text-xl">
          Current location
          <ChevronDownIcon size={20} color={primary} />
        </StyledText>
      </StyledView>

      <UserIcon size={35} color={primary} />
    </StyledView>
  );
}

function SearchSection() {
  return (
    <StyledView className="flex-row items-center space-x-3">
      <StyledView className="flex-row flex-1 space-x-2 bg-gray-100 p-3 items-center rounded-md">
        <SearchIcon size={20} color={grayLight} />
        <StyledTextInput
          className="flex-1"
          placeholder="Restaurants, commerces, plats"
          keyboardType="default"
        />
      </StyledView>
      <AdjustmentsIcon size={30} color={primary} />
    </StyledView>
  );
}
