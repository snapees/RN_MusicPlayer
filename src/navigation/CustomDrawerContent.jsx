import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {colors} from '../constants/colors';
import {fontSize, iconSizes, spacing} from '../constants/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontFamilies} from '../constants/Fonts';
import {useNavigation} from '@react-navigation/native';

const ProfileIcon = () => (
  <FontAwesome
    name={'user'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.sm, marginLeft: spacing.sm}}
  />
);

const HeartIcon = () => (
  <AntDesign
    name={'hearto'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.mmd}}
  />
);

const LanguageIcon = () => (
  <Ionicons
    name={'earth'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.mmd}}
  />
);

const MessageIcon = () => (
  <FontAwesome
    name={'envelope-o'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.mmd}}
  />
);

const FAQIcon = () => (
  <FontAwesome
    name={'question-circle-o'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.md}}
  />
);

const SettingIcon = () => (
  <FontAwesome
    name={'cog'}
    color={colors.iconSecondary}
    size={iconSizes.md}
    style={{marginRight: spacing.md}}
  />
);

const CustomDrawerContent = props => {
  const navigation = useNavigation();
  const isDarkMode = true;
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign
            name={'close'}
            color={colors.iconSecondary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name={isDarkMode ? 'sun' : 'moon'}
            color={colors.iconSecondary}
            size={iconSizes.lg}
          />
        </TouchableOpacity>
      </View>

      {/* menu item container */}
      <View style={styles.drawerItemContainer}>
        <DrawerItem
          label={'Profile'}
          icon={ProfileIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Liked Songs'}
          icon={HeartIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => {
            // props.navigation.navigate('Like');
            navigation.navigate('Like');
          }}
        />
        <DrawerItem
          label={'Language'}
          icon={LanguageIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Contact Us'}
          icon={MessageIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'FAQs'}
          icon={FAQIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
        <DrawerItem
          label={'Settings'}
          icon={SettingIcon}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerItemContainer: {
    marginVertical: spacing.xl,
  },
  labelStyle: {
    fontSize: fontSize.md,
    color: colors.textPrimary,
    fontFamily: fontFamilies.medium,
  },
  drawerItem: {
    marginVertical: spacing.sm,
  },
});

export default CustomDrawerContent;
