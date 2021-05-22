import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da76/b325/1674fbfc9454ca30fb8e7833d6873c1d"
        }}
        style={styles.ImageBackground_101_6393}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/250f/9625/0255419c163d63163852b52e84c4bb48"
        }}
        style={styles.ImageBackground_101_6394}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ab3/11dc/fe738756b2b38993b8c2a1155847cae1"
        }}
        style={styles.ImageBackground_101_6400}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a23/f2f0/3b3ff14e1007122190a5c6444102c0c3"
        }}
        style={styles.ImageBackground_101_6401}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb9d/60c1/b97facb54a4ae336e6ef61f01afc10f2"
        }}
        style={styles.ImageBackground_101_6446}
      />
      <View style={styles.View_101_6414}>
        <View style={styles.View_101_6415}>
          <View style={styles.View_101_6416}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb55/fe41/88dc51aa5a640a6bf7787a7ce3cff2bb"
              }}
              style={styles.ImageBackground_101_6417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e0/6eee/87f1a5c8968163d93fc819cf56205bb0"
              }}
              style={styles.ImageBackground_101_6422}
            />
            <View style={styles.View_101_6427}>
              <View style={styles.View_101_6428} />
              <View style={styles.View_101_6429} />
            </View>
          </View>
          <View style={styles.View_101_6430}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/935a/f5c2/640a4d384c85e10222e97f6b33e1735d"
              }}
              style={styles.ImageBackground_101_6431}
            />
            <View style={styles.View_101_6432}>
              <Text style={styles.Text_101_6432}>10</Text>
            </View>
          </View>
          <View style={styles.View_101_6433}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f964/7b18/c64a1eae9cd2bf321a929b9a9b69cd8c"
              }}
              style={styles.ImageBackground_101_6434}
            />
            <View style={styles.View_101_6435}>
              <Text style={styles.Text_101_6435}>10</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e63/2fed/a2384afa5a6db680861c31725f2c30ab"
          }}
          style={styles.ImageBackground_101_6436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0e5/ad06/29cc6dccc08ac415a77af7bcac525747"
          }}
          style={styles.ImageBackground_101_6437}
        />
        <View style={styles.View_101_6439}>
          <Text style={styles.Text_101_6439}>45:00</Text>
        </View>
        <View style={styles.View_101_6438}>
          <Text style={styles.Text_101_6438}>01:30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7e4/042e/6ba7bf366f233ca0dd780068a720f905"
          }}
          style={styles.ImageBackground_101_6440}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a291/09e6/44922af67a2475fd03e915ec9caf599e"
          }}
          style={styles.ImageBackground_101_6441}
        />
      </View>
      <View style={styles.View_101_6442}>
        <View style={styles.View_101_6443}>
          <Text style={styles.Text_101_6443}>เกาะความฝัน</Text>
        </View>
        <View style={styles.View_101_6444}>
          <Text style={styles.Text_101_6444}>เพลงนอนหลับ</Text>
        </View>
      </View>
      <View style={styles.View_101_6408}>
        <View style={styles.View_101_6409}>
          <View style={styles.View_101_6410}>
            <View style={styles.View_101_6411}>
              <View style={styles.View_101_6412} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa14/3723/739e35295e772e99768fcb6d11f065be"
          }}
          style={styles.ImageBackground_101_6413}
        />
      </View>
      <View style={styles.View_101_6402}>
        <View style={styles.View_101_6403}>
          <View style={styles.View_101_6404}>
            <View style={styles.View_101_6405}>
              <View style={styles.View_101_6406} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f416/7633/e80d4bd61d33bf1c3f4b8d16d2257c7b"
          }}
          style={styles.ImageBackground_101_6407}
        />
      </View>
      <View style={styles.View_101_6395}>
        <View style={styles.View_101_6396}>
          <View style={styles.View_101_6397}>
            <View style={styles.View_101_6398} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94c2/1778/93707d3b302fe14a42dc3553815f6580"
          }}
          style={styles.ImageBackground_101_6399}
        />
      </View>
      <View style={styles.View_208_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_101_6393: {
    width: wp("54.938610279617684%"),
    minWidth: wp("54.938610279617684%"),
    height: hp("42.73007085414532%"),
    minHeight: hp("42.73007085414532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.78751627604167%"),
    top: hp("-0.35937366589822406%")
  },
  ImageBackground_101_6394: {
    width: wp("22.957535527178628%"),
    minWidth: wp("22.957535527178628%"),
    height: hp("25.43835040650081%"),
    minHeight: hp("25.43835040650081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.22531349071558%"),
    top: hp("-0.14264883239412568%")
  },
  ImageBackground_101_6400: {
    width: wp("62.0663555347977%"),
    height: hp("33.37000445589993%"),
    top: hp("27.48961735292862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.30398220486111%")
  },
  ImageBackground_101_6401: {
    width: wp("60.97359035326087%"),
    height: hp("32.62791868116035%"),
    top: hp("53.16880856706796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.1394172705314%")
  },
  ImageBackground_101_6446: {
    width: wp("134.36089114866394%"),
    height: hp("31.784632948578377%"),
    top: hp("98.91540860869193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.330686707427535%")
  },
  View_101_6414: {
    width: wp("90.44496103185386%"),
    minWidth: wp("90.44496103185386%"),
    height: hp("28.04478713072063%"),
    minHeight: hp("28.04478713072063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("72.19793601114242%")
  },
  View_101_6415: {
    width: wp("69.22617741828955%"),
    minWidth: wp("69.22617741828955%"),
    height: hp("14.895508979839054%"),
    minHeight: hp("14.895508979839054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.556015530646137%"),
    top: hp("0%")
  },
  View_101_6416: {
    width: wp("26.339922550219846%"),
    minWidth: wp("26.339922550219846%"),
    height: hp("14.895508979839054%"),
    minHeight: hp("14.895508979839054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.443095184178745%"),
    top: hp("0%")
  },
  ImageBackground_101_6417: {
    width: wp("26.339922550219846%"),
    height: hp("14.895508979839054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_6422: {
    width: wp("21.23671453356167%"),
    height: hp("12.00956334181822%"),
    top: hp("1.4429644808743234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5517044435952556%")
  },
  View_101_6427: {
    width: wp("4.826020964101893%"),
    minWidth: wp("4.826020964101893%"),
    height: hp("3.403806425834614%"),
    minHeight: hp("3.403806425834614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.757070347882696%"),
    top: hp("5.745842938866119%")
  },
  View_101_6428: {
    width: wp("1.6472393763813997%"),
    minWidth: wp("1.6472393763813997%"),
    height: hp("3.403806425834614%"),
    minHeight: hp("3.403806425834614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 24, 77, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_101_6429: {
    width: wp("1.6472393763813997%"),
    minWidth: wp("1.6472393763813997%"),
    height: hp("3.403806425834614%"),
    minHeight: hp("3.403806425834614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1787817028985614%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 24, 77, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_101_6430: {
    width: wp("9.36584564798696%"),
    minWidth: wp("9.36584564798696%"),
    height: hp("5.3331713858849366%"),
    minHeight: hp("5.3331713858849366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.86033269172705%"),
    top: hp("4.781153944672127%")
  },
  ImageBackground_101_6431: {
    width: wp("9.36584564798696%"),
    height: hp("5.3331713858849366%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_6432: {
    width: wp("3.8438064464624375%"),
    minWidth: wp("3.8438064464624375%"),
    minHeight: hp("1.7754468761506628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.761029966787433%"),
    top: hp("1.7788746317879145%")
  },
  Text_101_6432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_101_6433: {
    width: wp("9.36584564798696%"),
    minWidth: wp("9.36584564798696%"),
    height: hp("5.3331713858849366%"),
    minHeight: hp("5.3331713858849366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.781153944672127%")
  },
  ImageBackground_101_6434: {
    width: wp("9.36584564798696%"),
    height: hp("5.3331713858849366%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_6435: {
    width: wp("3.8438064464624375%"),
    minWidth: wp("3.8438064464624375%"),
    minHeight: hp("1.7754468761506628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7610299667874347%"),
    top: hp("1.7788746317879145%")
  },
  Text_101_6435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_101_6436: {
    width: wp("80.54159413213316%"),
    minWidth: wp("80.54159413213316%"),
    height: hp("0.000003982301076391936%"),
    minHeight: hp("0.000003982301076391936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8982629453502415%"),
    top: hp("22.887249722506823%")
  },
  ImageBackground_101_6437: {
    width: wp("6.94315030378996%"),
    minWidth: wp("6.94315030378996%"),
    height: hp("0.000006265544286920165%"),
    minHeight: hp("0.000006265544286920165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8982629453502415%"),
    top: hp("22.88731642759562%")
  },
  View_101_6439: {
    width: wp("9.903381642512077%"),
    minWidth: wp("9.903381642512077%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.54157938934179%"),
    top: hp("25.722382759135925%")
  },
  Text_101_6439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_101_6438: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.722382759135925%")
  },
  Text_101_6438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_101_6440: {
    width: wp("3.140096618357488%"),
    minWidth: wp("3.140096618357488%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.226871508907003%"),
    top: hp("21.99927158043033%")
  },
  ImageBackground_101_6441: {
    width: wp("4.1062801932367154%"),
    minWidth: wp("4.1062801932367154%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74377972146739%"),
    top: hp("21.726114241803288%")
  },
  View_101_6442: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    height: hp("9.091794165105767%"),
    minHeight: hp("9.091794165105767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.227079087409418%"),
    top: hp("53.54327425930669%")
  },
  View_101_6443: {
    width: wp("43.47826086956522%"),
    minWidth: wp("43.47826086956522%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_101_6443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_101_6444: {
    width: wp("24.336251890025853%"),
    minWidth: wp("24.336251890025853%"),
    minHeight: hp("1.7754468761506628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.604751660628022%"),
    top: hp("7.316347549521865%")
  },
  Text_101_6444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_101_6408: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88399899984904%"),
    top: hp("6.830601092896176%")
  },
  View_101_6409: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6410: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6411: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6412: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 23, 76, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  ImageBackground_101_6413: {
    width: wp("4.3478260869565215%"),
    height: hp("2.527322404371585%"),
    top: hp("2.493169398907103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.468599033816417%")
  },
  View_101_6402: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.97578643946255%"),
    top: hp("6.830601092896176%")
  },
  View_101_6403: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6404: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6405: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6406: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 23, 76, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  ImageBackground_101_6407: {
    width: wp("4.410165519530071%"),
    height: hp("2.2053989556317775%"),
    top: hp("2.6541287781762293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.437462258454104%")
  },
  View_101_6395: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("6.830601092896176%")
  },
  View_101_6396: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6397: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_6398: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  ImageBackground_101_6399: {
    width: wp("3.3494279004525445%"),
    minWidth: wp("3.3494279004525445%"),
    height: hp("1.8736387211116936%"),
    minHeight: hp("1.8736387211116936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9677383496565515%"),
    top: hp("2.819999319608094%")
  },
  View_208_2: {
    width: wp("36.231884057971016%"),
    minWidth: wp("36.231884057971016%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("23.633879781420767%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
