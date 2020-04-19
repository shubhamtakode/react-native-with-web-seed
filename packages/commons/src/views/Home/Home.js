import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {useNavigation} from "../../hooks/use-navigation";
import {SampleComponent} from "../../components/SampleComponent";
export const Home = () => {
    // use this hook to drive your navigation
    const {navigateTo} = useNavigation();
    const [showModal, setShowModal] = useState(false);
    return <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>From Home for web</Text>
        <SampleComponent/>
    </View>
};
