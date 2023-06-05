import * as React from 'react';
import { Button, View, Text ,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from './constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgetPwdScreen from './screens/ForgetPwdScreen';
import VerifyScreen_pwd from './screens/VerifyScreen_pwd';
import VerifyScreen_login from './screens/VerifyScreen_login';
import SetNewPwdScreen from './screens/SetNewPwdScreen';
import ProfileScreen from './screens/ProfileScreen';
import SendCommentScreen from './screens/SendCommentScreen';
import SettingScreen from './screens/SettingScreen';
import SetPreferScreen from './screens/SetPreferScreen';
import ResetPwdScreen from './screens/ResetPwdScreen';
import UserOnCampusScreen from './screens/UserOnCampuScreen';
import UserOffCampusScreen from './screens/UserOffCampuScreen';
import PopudishScreen from './screens/PopudishScreen';
import NewsaleScreen from './screens/NewsaleScreen';
import ComcoluScreen from './screens/ComcoluScreen';
import EvecommandScreen from './screens/EvecommandScreen';
import FlowScreen from './screens/FlowScreen';
import ChangepwdScreen from './screens/ChangepwdScreen';
import SettingBScreen from './screens/SettingBScreen';
import CaptchaScreen from './screens/CaptchaScreen';
import SetNewPwdBScreen from './screens/SetNewPwdBScreen';

  const OnCampusTab = createBottomTabNavigator();

  function UserOnCampusTabs({route}) {
    const {requestBody}=route.params;
    return (
      <OnCampusTab.Navigator 
        initialRouteName="OnHome" 
        screenOptions={({route})=>({
           headerShown: false,
           tabBarActiveTintColor:theme.colors.main,
           tabBarIcon:({focused,color,size})=>{
              let iconName;
              let iconColor;
              iconColor=focused?theme.colors.main:theme.colors.gray;
              if(route.name=='OnHome'){
                iconName='home';
              }
              if(route.name=='Settings'){
                iconName='cog';
              }
              if(route.name=='Comment'){
                iconName='plus-circle';
              }
              if(route.name=='Profile'){
                iconName='file-alt';
              }
              return(
                <Icon name={iconName} size={20} color={iconColor}/>
              );
           },
           
           })}>
        <OnCampusTab.Screen name="Settings" component={SettingScreen} initialParams={{requestBody}} />
        <OnCampusTab.Screen name="Comment" component={SendCommentScreen} initialParams={{requestBody}}/>
        <OnCampusTab.Screen name="OnHome" component={UserOnCampusScreen} initialParams={{requestBody}}/>
        <OnCampusTab.Screen name="Profile" component={ProfileScreen} initialParams={{requestBody}}/>
      </OnCampusTab.Navigator>
    );
  }

  const OffCampusTab = createBottomTabNavigator();

  function UserOffCampusTabs() {
    return (
      <OffCampusTab.Navigator 
        initialRouteName="OffHome" 
        screenOptions={({route})=>({
          headerShown: false,
          tabBarActiveTintColor:theme.colors.main,
          tabBarIcon:({focused,color,size})=>{
             let iconName;
             let iconColor;
             iconColor=focused?theme.colors.main:theme.colors.gray;
             if(route.name=='OffHome'){
               iconName='home';
             }
             if(route.name=='SettingB'){
               iconName='cog';
             }
             return(
               <Icon name={iconName} size={20} color={iconColor}/>
             );
          },
          
          })}>
        <OffCampusTab.Screen name="SettingB" component={SettingBScreen} />
        <OnCampusTab.Screen name="OffHome" component={UserOffCampusScreen} />
      </OffCampusTab.Navigator>
    );
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title:'欢迎'}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{title:'登录'}}/>
        <Stack.Screen name="UserOnCampus" component={UserOnCampusTabs} options={{headerShown:false}}/>
        <Stack.Screen name="UserOffCampus" component={UserOffCampusTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{title:'注册'}}/>
        <Stack.Screen name="Captcha" component={CaptchaScreen} options={{title:'忘记密码'}}/>
        <Stack.Screen name="ForgetPwd" component={ForgetPwdScreen} options={{title:'忘记密码'}}/>
        <Stack.Screen name="Verify_pwd" component={VerifyScreen_pwd} options={{title:'发送验证码'}}/>
        <Stack.Screen name="Verify_login" component={VerifyScreen_login} options={{title:'发送验证码'}}/>
        <Stack.Screen name="SetNewPwd" component={SetNewPwdScreen} options={{title:'设置密码'}}/>
        <Stack.Screen name="SetNewPwdB" component={SetNewPwdBScreen} options={{title:'设置密码'}}/>
        <Stack.Screen name="SetPrefer" component={SetPreferScreen} options={{title:'设置偏好'}}/>
        <Stack.Screen name="ResetPwd" component={ResetPwdScreen} />
        <Stack.Screen name="Popudish" component={PopudishScreen} options={{title:'热门菜品'}}/>
        <Stack.Screen name="Newsale" component={NewsaleScreen} options={{title:'新品/折扣菜品'}}/>
        <Stack.Screen name="Comcolu" component={ComcoluScreen} options={{title:'评价栏'}}/>
        <Stack.Screen name="Evecommand" component={EvecommandScreen} options={{title:'每日推荐'}}/>
        <Stack.Screen name="Flow" component={FlowScreen} options={{title:'流量监控'}}/>
        <Stack.Screen name="Changepwd" component={ChangepwdScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
