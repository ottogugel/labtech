import { productData } from "@/utils/data/product";
import { FlatList, Image, ScrollView, View } from "react-native";

type CarouselProps = {
  id: string;
  imageUrl: string;
}

export function Carousel() {
  return (
    <ScrollView>
      <FlatList
        data={productData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="justify-center items-center gap-3 p-5">
            <Image source={{ uri: item.imageUrl }} className="w-64 h-40 rounded-md" />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}