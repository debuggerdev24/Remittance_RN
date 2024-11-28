import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './Style';
import { connection, menu, notification, plus, request, swap } from '../../utils/Constance/images';
import { text } from '../../utils/Constance/text';
import LinearGradient from 'react-native-linear-gradient';
import { recentActivities, users } from '../../utils/Constance/const';

const HomeScreen = ({ navigation }) => {
    // Renders each user in the Quick Send list
    const renderItem = ({ item }) => {
        return (
            <View style={styles.flatcontainer}>
                <Image
                    source={{ uri: item.profileImage }}
                    style={styles.flatImg}
                />
                <Text style={styles.flatUserName}>
                    {item.username}
                </Text>
            </View>
        );
    };

    // Renders each activity in the Recent Activity list
    const renderItemForRecent = ({ item }) => {
        return (
            <View style={styles.recentFlatContainer}>
                <View style={styles.recentFlatContainerInner}>
                    <Image
                        source={item.img}
                        style={styles.recentFlatImg}
                    />
                    <View style={styles.recentFlatTextContainer}>
                        <Text style={styles.recentFlatActivity}>
                            {item.activityName}
                        </Text>
                        <Text style={styles.recentFlatDate}>
                            {item.date}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.recentFlatMoney}>
                        {item.money}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* StatusBar configuration */}
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'white'}
            />

            {/* Header Section */}
            <View style={styles.headerContainer}>
                {/* Menu Button */}
                <TouchableOpacity style={styles.menuBtn}>
                    <Image source={menu} style={styles.menuImg} />
                </TouchableOpacity>

                {/* Header Balance Info */}
                <View style={styles.headerTextContainer}>
                    <View style={styles.headerTextInnerContainer}>
                        <View style={styles.headerView}>
                            <Text style={styles.dollarText}>{text.$}</Text>
                        </View>
                        <Text style={styles.balanceText}>{text.balance}</Text>
                    </View>
                    <View style={styles.swapView}>
                        <Image source={swap} style={styles.swapImg} />
                    </View>
                </View>

                {/* Notification Button */}
                <TouchableOpacity style={styles.notificationView}>
                    <Image source={notification} style={styles.notificationIcon} />
                </TouchableOpacity>
            </View>

            {/* Balance Section */}
            <View style={styles.amountContainer}>
                <View>
                    <Text style={styles.balanceAmountText}>{text.yourBalance}</Text>
                    <Text style={styles.balanceAmount}>{text.amount}</Text>
                </View>
                <TouchableOpacity style={styles.plusContainer}>
                    <Image source={plus} style={styles.plusImg} />
                </TouchableOpacity>
            </View>

            {/* Main Content Section */}
            <View style={styles.bottomContainar}>
                <View style={styles.detailContainer}>
                    {/* Money Transfer Options */}
                    <View style={styles.innerButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('MoneyTransferScreen')} style={styles.monetButton}>
                            <Image source={connection} style={styles.connectionImg} />
                            <Text style={styles.transferText}>{text.transfer}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.requestBtn}>
                            <Image source={request} style={styles.requestImg} />
                            <Text style={styles.requestText}>{text.request}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Quick Send Section */}
                    <View style={styles.dataContainer}>
                        <View style={styles.dataInnerContainer}>
                            <Text style={styles.quickText}>{text.quickSend}</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>{text.seeAll}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.flatContainer}>
                            <FlatList horizontal data={users} renderItem={renderItem} />
                        </View>
                    </View>

                    {/* Recent Activities Section */}
                    <View style={styles.activityContainer}>
                        <View style={styles.innerBtnView}>
                            <Text style={styles.recentText}>{text.recentActivity}</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAll}>{text.seeAll}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.activityFlatContainer}>
                            <FlatList data={recentActivities} renderItem={renderItemForRecent} />
                        </View>
                    </View>
                </View>

                {/* Credit Card Section with Gradient */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#dcd78f', '#fbc63b']}
                    style={styles.linearGradient}
                >
                    <View style={styles.innerView}>
                        <Text style={styles.cardNumberText}>{text.cardNumbner}</Text>
                        <View style={styles.ringsView}>
                            <View style={styles.filledRing} />
                            <View style={styles.emptyRing} />
                        </View>
                    </View>
                    <View style={styles.linerTextContainer}>
                        <View>
                            <Text style={styles.holderName}>{text.cardHolderName}</Text>
                            <Text style={styles.name}>{text.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.expiryDate}>{text.expiryDate}</Text>
                            <Text style={styles.date}>{text.date}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

export default HomeScreen;
