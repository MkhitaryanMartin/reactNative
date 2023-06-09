import {StyleSheet} from "react-native";
import {normalize} from "../../../assets/RootStyles/normalize";
import {BorderStyles} from "../../../assets/RootStyles";
import {FontStyle,Colors} from "../../../assets/RootStyles";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    containerText: {
        width: "100%",
        alignItems: "flex-start",
    },
    textCodV: {
        marginLeft: normalize(25),
        marginTop: normalize(46),
        ...FontStyle.display_h5.medium,
        fontSize: normalize(16),
        color: Colors.black[100]
    },
    textEnterV: {
        marginTop: normalize(25),
        marginLeft: normalize(25),
        color: Colors.black[200],
        ...FontStyle.display_h6.regular,
        fontSize: normalize(12),
        lineHeight: normalize(15)
    },
    containerItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "space-between",
        marginVertical:normalize(15)
    },
    item: {
        width: normalize(68),
        height: normalize(68),
        borderRadius: BorderStyles.radius.ss,
        backgroundColor: Colors.grey[1000],
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:normalize(7),

    },
    timer: {
        marginBottom: 5,
        alignSelf:"center",
        color: Colors.lilac,
        // ...FontStyle.display_h6.medium,
        fontWeight:500,
        fontSize: normalize(12),
        lineHeight: normalize(15),
    },
    keyboardContainer: {
        borderTopWidth: 0.5,
        borderTopColor: Colors.grey[1100],
        flexDirection: "row",
        flexWrap: "wrap",
    },
    numberContainer: {
        // backgroundColor:'red',
        height:normalize(50),
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        marginTop: normalize(25)
    },
    arrowContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: normalize(53)
    },
    arrowStyle: {
        color: Colors.black[100]
    },
    numberTextStyle: {
        fontWeight:500,
        fontSize: normalize(20),
        lineHeight: normalize(24)
    }
})
