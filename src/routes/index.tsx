import React, { useEffect, useState } from "react";
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import SplashScreen from "react-native-splash-screen";
import { backgroundColorProperty, THEME } from "../shared/theme";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../shared/services/nav.service";
import AuthStack from "./Auth/Auth.routes";
import BottomTabs from "./Tabs/Tabs.routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../shared/store";
import { IntroSlide } from "../shared/models/types";
import AppIntroSlider from "react-native-app-intro-slider";
import { INTRO_SLIDES } from "../shared/utils/AppConstants";
import { RF } from "../shared/theme/responsive";
import IntroSlider from "../shared/components/IntroSlider";
import {
  setDarkMode,
  setFirstTime,
} from "../shared/store/reducers/settingsReducer";
import {
  deleteUserPinCode,
  hasUserSetPinCode,
} from "@haskkor/react-native-pincode";
import Pin from "../screens/Auth/Pin";
import VersionCheck from "react-native-version-check";
import AppUpdateModal from "../shared/components/AppUpdateModal";
import linking from "../shared/utils/Linking";
import AppModal from "../shared/components/AppModal";
import { ICONS } from "../assets";
import { useAppAlert } from "../shared/hooks/useAppAlert";
import AppTopAlert from "../shared/components/AppTopAlert";

const Routes = () => {
  const {
    wallet: { isRendered, defaultCurrency },
    settings: { darkMode, firstTime, pinEnabled },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  /**
   * Get the system color scheme and apply Theme
   */
  let mode = useColorScheme();
  const appleSystemColorScheme = () => {
    if (mode === "dark") dispatch(setDarkMode(true));
    else dispatch(setDarkMode(false));
  };

  useEffect(() => {
    // appleSystemColorScheme();
    SplashScreen.hide();
  }, []);

  //----- PIN CODE -----//

  const [visible, setVisible] = useState(false);

  const handlePIN = async () => {
    hasUserSetPinCode().then(async res => {
      if (res) {
        if (pinEnabled) {
          setVisible(true);
        } else {
          checkUpdateNeeded();
          await deleteUserPinCode();
        }
      } else {
        checkUpdateNeeded();
      }
    });
  };
  useEffect(() => {
    handlePIN();
  }, []);

  const onDone = () => dispatch(setFirstTime(false));

  const onPinClose = () => {
    setVisible(false);
    setTimeout(() => {
      checkUpdateNeeded();
    }, 0);
  };

  //------ Update Modal ---------//

  const [showUpdate, setShowUpdate] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  const checkUpdateNeeded = async () => {
    try {
      let updateNeeded = await VersionCheck.needUpdate();
      if (updateNeeded.isNeeded) {
        setShowUpdate(true);
      } else {
        setShowMaintenanceModal(true);
      }
    } catch (error) {
      setShowMaintenanceModal(true);
    }
  };

  const { showTopAlert, onDismissTopAlert, topAlertData } = useAppAlert();

  return (
    <>
      <SafeAreaView style={[{ flex: 1 }, backgroundColorProperty()]}>
        {/* {showTopAlert && (
          <AppTopAlert onDismiss={onDismissTopAlert} alertData={topAlertData} />
        )} */}
        {showUpdate && (
          <AppUpdateModal
            isVisible={showUpdate}
            toggleModal={() => setShowUpdate(!showUpdate)}
          />
        )}
        {showMaintenanceModal && (
          <AppModal
            isVisible={showMaintenanceModal}
            toggleModal={() => setShowMaintenanceModal(!showMaintenanceModal)}
            title='Security Alert'
            description={`We're improving our infrastructure.\nNow the wallet is encrypted and more secure. Don't share your private key/seed phrase with anyone!`}
            icon={ICONS.MAINTENANCE}
          />
        )}
        {visible && <Pin isVisible={true} onRequestClose={onPinClose} />}
        {firstTime ? (
          <AppIntroSlider
            bottomButton={true}
            showDoneButton={true}
            showSkipButton={true}
            showNextButton={false}
            renderItem={({ item }: { item: IntroSlide }) => (
              <IntroSlider item={item} />
            )}
            data={INTRO_SLIDES}
            onSkip={onDone}
            onDone={onDone}
            dotStyle={{ backgroundColor: THEME.COLORS.textLight }}
            activeDotStyle={{ backgroundColor: THEME.COLORS.yellow }}
            renderDoneButton={() => (
              <Text style={styles.sliderDoneButton}>Skip</Text>
            )}
            renderSkipButton={() => (
              <Text style={styles.sliderDoneButton}>Skip</Text>
            )}
          />
        ) : (
          <NavigationContainer
            linking={linking}
            theme={{
              colors: {
                background: darkMode
                  ? THEME.COLORS.primaryDarkBackground
                  : THEME.COLORS.primaryLightBackground,
              },
            }}
            ref={navigationRef}
          >
            {isRendered ? <BottomTabs /> : <AuthStack />}
          </NavigationContainer>
        )}
      </SafeAreaView>
      <SafeAreaView style={backgroundColorProperty()} />
    </>
  );
};

export default Routes;

const styles = StyleSheet.create({
  sliderDoneButton: {
    color: THEME.COLORS.yellow,
    fontFamily: THEME.FONTS.TYPE.REGULAR,
    fontSize: THEME.FONTS.SIZE.SMALL,
    marginVertical: THEME.MARGIN.NORMAL,
    alignSelf: "center",
  },
});
