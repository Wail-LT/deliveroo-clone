import React from "react";
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledTouchableOpacity,
} from "../styledReactNative";

export default function CategoryScrollView() {
  return (
    <StyledScrollView
      className="pl-4"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
      <CategoryCard
        imgSource="https://links.papareact.com/gn7"
        title="Card title"
      />
    </StyledScrollView>
  );
}

type CategoryCardProps = {
  imgSource: string;
  title: string;
};

function CategoryCard({ imgSource, title }: CategoryCardProps) {
  return (
    <StyledTouchableOpacity className="relative mr-4">
      <StyledImage
        className="w-20 h-20 rounded"
        source={{
          uri: imgSource,
        }}
      />
      <StyledText className="absolute bottom-1 left-1 text-white font-bold">{title}</StyledText>
    </StyledTouchableOpacity>
  );
}
