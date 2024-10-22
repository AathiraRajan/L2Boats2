import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const Boat = ({ title, icon_name, poster, description }) => {
    return (
        <View>
            <Icon name={icon_name} size={20} />
            <Text>{title}</Text>
            <Image source={poster} style={{ width: 400, height: 500 }} />
            <Text>{description}</Text>
        </View>
    );
};

export default Boat;
