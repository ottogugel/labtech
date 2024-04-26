import { DATA } from "@/utils/data/images";
import { useState, useEffect, useRef } from "react";
import { FlatList, Image, View } from "react-native";
import Animated, { FadeInLeft, FadeOutRight, Layout } from "react-native-reanimated";

export const Carousel = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);

  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 100,
      },
      onViewableItemsChanged,
    },
  ]);

  // JSX
  useEffect(() => {
    if(activeBanner === DATA.length - 1) {
      return;
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true
      });
      setActiveBanner(old => old + 1);
    }, 3000)
    return () => clearTimeout(timeId)
  }, [activeBanner])

  return (
    <View>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View className="justify-center items-center gap-3 p-5">
            <Image
              source={{ uri: item.imageUrl }}
              className="w-64 h-40 rounded-md"
            />
          </View>
        )}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Animated.View
            layout={Layout}
            entering={FadeInLeft}
            exiting={FadeOutRight}
            className={`${
              activeBanner === index ? "w-3" : "w-2"
            } h-2 rounded mx-0.5 ${
              activeBanner === index ? "bg-black" : "bg-gray-500"
            }`}
          />
        )}
        scrollEnabled={false}
        horizontal
        keyExtractor={(item, index) => String(index)}
        className="pt-5 self-center bottom-4"
      />
    </View>
  );
};
