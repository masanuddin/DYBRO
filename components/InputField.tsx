import { InputFieldProps } from "@/types/type";
import { MaterialIcons } from "@expo/vector-icons";
import {
    TextInput,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";
import { useResponsive } from "@/hooks/Responsive";

// Di Pakai di Sign In dan Sign Out
const InputField = ({
    label,
    icon,
    secureTextEntry = false,
    labelStyle,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
    const { isSmallDevice, text } = useResponsive();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="my-2 w-full">
                    {/* Label */}
                    <Text 
                        className={`${text.base} font-JakartaSemiBold ${isSmallDevice ? 'mb-2' : 'mb-3'} ${labelStyle}`}
                    >
                        {label}
                    </Text>

                    {/* Input Container */}
                    <View
                        className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
                        style={{ minHeight: isSmallDevice ? 54 : 60 }}
                    >
                        {/* Icon */}
                        <View className={`${isSmallDevice ? 'pl-4' : 'pl-5'}`}>
                            <MaterialIcons 
                                name={icon} 
                                size={isSmallDevice ? 22 : 26} 
                                color="#9CA3AF"
                            />
                        </View>

                        {/* Text Input */}
                        <TextInput
                            className={`rounded-full ${isSmallDevice ? 'px-3 py-4' : 'px-4 py-5'} font-JakartaSemiBold ${isSmallDevice ? 'text-base' : 'text-lg'} flex-1 text-left ${inputStyle}`}
                            secureTextEntry={secureTextEntry}
                            placeholderTextColor="#9CA3AF"
                            style={{ fontSize: isSmallDevice ? 15 : 16 }}
                            {...props}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default InputField;