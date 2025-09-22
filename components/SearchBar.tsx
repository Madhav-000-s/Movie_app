import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  onClear?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress, onClear }: Props) => {
  return (
    <View className="flex-row items-center bg-searchBar rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value && value.length > 0 && onClear && (
        <TouchableOpacity onPress={onClear} className="ml-2">
          <Image
            source={icons.search} // You might want to add a close icon
            className="w-5 h-5"
            resizeMode="contain"
            tintColor="#A8B5DB"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;