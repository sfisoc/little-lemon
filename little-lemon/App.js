import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from './screens/Onboarding';
import Profile from "./screens/Profile";
import Home from "./screens/Home";


const Stack = createNativeStackNavigator();

function App() {

  var state = {
    
    isOnboardingCompleted: false
  };

    useEffect(() => {
      (async () => {
        try {

          const boardingStatus = await AsyncStorage.getItem("isOnboardingCompleted");


          state.isOnboardingCompleted = (boardingStatus === "true");

        } catch (e) {
          Alert.alert(e.message);
        }
      })();
    }, []);


return (
<NavigationContainer>
<Stack.Navigator  initialRouteName={state.isOnboardingCompleted ? "Home":"Onboarding"}>
          {state.isOnboardingCompleted ? 
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Profile" component={Profile} />
            </>
           : 
           <>
           <Stack.Screen
              name="Onboarding"
              in
              component={Onboarding}
              options={{ headerShown: false }}/>

            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}/>
            
            <Stack.Screen name="Profile" component={Profile} />
           </>
          }
</Stack.Navigator>
</NavigationContainer>);

}

export default App;