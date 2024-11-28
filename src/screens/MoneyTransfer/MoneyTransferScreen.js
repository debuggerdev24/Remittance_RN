import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import styles from './Style';
import { back, more, user } from '../../utils/Constance/images';
import { text } from '../../utils/Constance/text';
import { keypad } from '../../utils/Constance/const';

const MoneyTransferScreen = ({ navigation }) => {
  // Render item for the keypad. This function returns a button with text from the `keypad` data.
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Set the status bar appearance */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

      {/* Header with navigation and options */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.backImg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{text.sendMoney}</Text>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={more} style={styles.moreImg} />
        </TouchableOpacity>
      </View>

      {/* Main container for keypad and user details */}
      <View style={styles.keypadConatiner}>
        {/* Section for "Send To" label */}
        <View style={styles.sendContainer}>
          <Text style={styles.sendText}>{text.sendTo}</Text>
        </View>

        {/* User information section */}
        <View style={styles.userContainer}>
          <View style={styles.user}>
            <View style={styles.userImag}>
              <Image style={styles.imgUser} source={{ uri: user }} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.userName}>{text.name}</Text>
              <Text style={styles.userNumber}>{text.number}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.changeContainer}>
            <Text style={styles.changes}>{text.changes}</Text>
          </TouchableOpacity>
        </View>

        {/* Account card section */}
        <View
          style={styles.accountCardView}
        >
          <View style={styles.accNumberContainer}>
            <View style={styles.rings}>
              <View style={styles.filledRing} />
              <View style={styles.emptyRing} />
            </View>
            <Text style={styles.accNumber}>{text.cardNumbner}</Text>
            <View style={styles.downContainer}>
              <Image source={back} style={styles.downImg} />
            </View>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.balanceText}>{text.yourBalance}</Text>
            <Text style={styles.amountText}>{text.amount}</Text>
          </View>
        </View>

        {/* Keypad section */}
        <View style={styles.flatContainer}>
          <FlatList
            scrollEnabled={false}
            numColumns={3}
            data={keypad}
            renderItem={renderItem}
          />
        </View>

        {/* Send button */}
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>
            {text.send}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneyTransferScreen;
