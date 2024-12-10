import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const restaurantProfile = () => {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { restaurant_id } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function fetchRestaurant() {
    let { data, error } = await supabase
      .from("restaurants")
      .select("*")
      .eq("restaurant_id", restaurant_id);
    if (error) {
      console.error("Error fetching restaurant:", error);
    } else {
      setRestaurant(data[0]);
      console.log("Restaurant data:", data[0]); 
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (restaurant_id) {
      fetchRestaurant();
    }
  }, [restaurant_id]);
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Loading ...</Text>
      </View>
    );
  }
  function handleImageClick(imageUrl) {
    console.log("Selected Image URL:", imageUrl);
    setSelectedImage(imageUrl);
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
    setSelectedImage(null);
  }
  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 bg-[#3772FF] rounded-lg shadow-md"
        >
          <Text className="text-white text-lg font-semibold">Back</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {
            router.push(`/pages/restaurant/${restaurant_id}/booking_page`);
          }}
          className="py-2 px-4 bg-[#3772FF] rounded-lg shadow-md"
        >
          <Text className="text-white text-center font-semibold">
            Book Table
          </Text>
        </Pressable>
      </View>
      <Text className="text-2xl font-semibold text-gray-800 mb-2 mt-4">
        {restaurant["restaurant_name"]}
      </Text>
      <Text className="text-base text-gray-600 italic mb-2">
        {restaurant["restaurant_email"]}
      </Text>
      {restaurant["restaurant_phone"] && (
        <Text className="text-base text-gray-700 mb-4">
          {restaurant["restaurant_phone"]}
        </Text>
      )}
      <Text className="text-base text-gray-600 mb-4 pt-1">
        {restaurant["description"]}
      </Text>
      <Image
        source={{ uri: restaurant["restaurant_img"] }}
        className="w-full h-80 rounded-lg mb-6" 
      />
      <View classname="flex-row justify-center mt-4">
        {restaurant["is_menu_img"] ? (
          <Pressable
            onPress={() => handleImageClick(restaurant["menu_link"])}
            className="py-4 px-8 bg-[#3772FF] rounded-lg shadow-md w-4/5"
          >
            <Text className="text-white text-center font-semibold">
              View Menu
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => router.push(restaurant["menu_link"])}
            className="py-4 px-8 bg-[#3772FF] rounded-lg shadow-md w-4/5" 
          >
            <Text className="text-white text-center font-semibold">
              View Menu
            </Text>
          </Pressable>
        )}
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View className="flex-1 justify-center items-center bg-black bg-opacity-70">
            <View
              className="w-[90%] h-[90%] bg-white rounded-lg p-4" 
            >
              <TouchableOpacity onPress={closeModal} className="mb-4">
                <Text className="text-[#3772FF] text-lg font-semibold">
                  Back
                </Text>
              </TouchableOpacity>
              <Image
                source={{ uri: selectedImage }}
                className="w-full h-full rounded-lg" 
                resizeMode="contain"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};
export default restaurantProfile;
