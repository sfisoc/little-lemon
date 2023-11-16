import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding';
import Profile from "./screens/Profile";
import { Home } from "./screens/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createNativeStackNavigator();

function App() {

  if (state.isLoading) {
     // We haven't finished reading from AsyncStorage yet
     return <SplashScreen />;
    }

    // const isOnboardingCompleted = await AsyncStorage.getItem("isOnboardingCompleted");




 return (
   <NavigationContainer>

<Stack.Navigator>
          {state.isOnboardingCompleted ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          ) : (
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
          )}

       <Stack.Screen name="Onboarding" component={OnboardingScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
export default App;