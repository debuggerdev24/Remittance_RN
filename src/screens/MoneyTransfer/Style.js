import { StyleSheet } from "react-native";
import responsive from "../../utils/responsive";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: responsive(60)
    },
    headerContainer: { paddingHorizontal: responsive(20), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" },
    backBtn: { width: responsive(30), height: responsive(30), backgroundColor: "lightgray", borderRadius: responsive(15), padding: responsive(5), justifyContent: "center", alignItems: "center" },
    backImg: { width: '80%', height: "80%" },
    headerText: { fontWeight: "bold", fontSize: responsive(18, true) },
    moreBtn: { width: responsive(30), height: responsive(30), backgroundColor: "lightgray", borderRadius: responsive(15), padding: responsive(5), justifyContent: "center", alignItems: "center" },
    moreImg: { width: '80%', height: "80%" },
    keypadConatiner: { flex: 1, backgroundColor: "black", marginTop: responsive(40), borderTopLeftRadius: responsive(30), borderTopRightRadius: responsive(30) },
    sendContainer: { marginTop: responsive(30), paddingHorizontal: responsive(20) },
    sendText: { color: "white", fontWeight: "bold", fontSize: responsive(14, true) },
    userContainer: { marginTop: responsive(20), paddingHorizontal: responsive(20), flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    userImag: { width: responsive(40), height: responsive(40) },
    imgUser: { width: '100%', height: '100%', borderRadius: responsive(20) },
    userName: { color: "white", fontSize: responsive(16, true) },
    userNumber: { color: "gray", fontSize: responsive(12, true) },
    user: { flexDirection: "row" },
    nameContainer: { marginLeft: responsive(10) },
    changes: { color: "#fcc53e", fontSize: responsive(14, true) },
    changeContainer: { alignItems: "center" },
    accNumberContainer: { marginTop: responsive(20), flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: 'space-between', backgroundColor: "#343d3e", height: responsive(40), borderRadius: responsive(25), width: responsive(200), padding: responsive(10) },
    rings: { flexDirection: "row" },
    filledRing: { width: responsive(25), height: responsive(25), backgroundColor: "white", borderRadius: responsive(12.5) },
    emptyRing: { width: responsive(25), height: responsive(25), borderRadius: responsive(12.5), borderWidth: 5, position: "absolute", left: responsive(18), borderColor: "white" },
    accNumber: { color: "white", fontSize: responsive(12, true), marginLeft: responsive(20) },
    downContainer: { width: responsive(20), height: responsive(20) },
    downImg: { width: '100%', height: '100%', tintColor: "white", transform: [{ rotate: '270deg' }] },
    cardContainer : { marginTop: responsive(20), alignSelf: "center" },
    balanceText: { color: "gray", fontSize: responsive(12, true), textAlign: "center" },
    amountText:{ color: "white", fontSize: responsive(30, true) },
    button: {
        backgroundColor: '#171717',
        width: responsive(100),
        height: responsive(60),
        justifyContent: 'center',
        alignItems: 'center',
        margin: responsive(5),
        borderRadius: responsive(10),
      },
      buttonText: {
        color: 'white',
        fontSize: responsive(24, true),
      },
      flatContainer:{alignSelf:'center', marginTop: responsive(20), height:responsive(300)},
      sendBtn : {justifyContent:'center', alignItems:"center", backgroundColor:"#fcc53e", height:responsive(50), marginHorizontal:responsive(20), marginTop: responsive(20), borderRadius: responsive(40)},
      sendText : { color: 'black', fontSize: responsive(16, true) },
      accountCardView : {
        backgroundColor: '#171717',
        marginHorizontal: responsive(20),
        height: responsive(150),
        borderRadius: responsive(20),
        marginTop: responsive(20),
      }
});

export default styles