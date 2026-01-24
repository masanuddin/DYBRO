import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import "../../global.css";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => {
  return (
    <View
      className={`w-12 h-12 rounded-full items-center justify-center ${
        focused ? "bg-general-400" : ""
      }`}
    >
      <Image
        source={source}
        resizeMode="contain"
        tintColor="white"
        className="w-7 h-7"
      />
    </View>
  );
};


const _layout = () => {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    paddingBottom: 27,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 40,
                    height: 78,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",

                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />,
                }}
            />
            <Tabs.Screen
                name="insight"
                options={{
                    headerShown: false,
                    title: "Insight",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chart} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />,
                }}
            />
        </Tabs>
    );
};

export default _layout;
