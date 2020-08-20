import React from 'react';
import {Theme} from './types';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from './src/contexts/ManageThemeContext';
import {
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import ImagePath from './src/utilities/ImagePath';

const Home = () => {
  // Helper function => useContext(ManageThemeContext)
  const theme = useTheme();
  return (
    <Container>
      <View
        style={[
          styles.buttonConatiner,
          // {backgroundColor: theme.mode === 'light' ? '#2E3440' : '#ededed'}
        ]}>
        <ButtonText>
          {theme.mode === 'light'
            ? 'Switch to Dark Mode'
            : 'Switch to Light Mode'}
        </ButtonText>
        <TouchableOpacity
          onPress={() => {
            theme.setMode(theme.mode === 'light' ? 'dark' : 'light');
          }}>
          <Image
            source={
              theme.mode === 'light'
                ? ImagePath.SWITCH_DARK
                : ImagePath.SWITCH_LIGHT
            }
            style={styles.switchImage}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

// Get the background color from the theme object
const Container = styled.View<Theme>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
`;

const ButtonText = styled.Text<Theme>`
  color: ${(props) =>
    props.theme.background === '#2E3440' ? '#ededed' : '#2E3440'};
  margin-right: 10;
  font-size: 18;
`;

// Wrap Home in the ThemeManager so it can access the current theme and
// the function to update it
const App = () => (
  <ThemeManager>
    <Home />
  </ThemeManager>
);

const styles = StyleSheet.create({
  switchImage: {
    height: 45,
    width: 45,
    // marginRight: 10,
  },
  buttonConatiner: {
    // height: 40,
    flexDirection: 'row',
    // width: Dimensions.get('screen').width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 20,
  },
});

export default App;
