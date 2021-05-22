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
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_6392"))
        }
      >
        <View style={styles.View_205_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d74/5bf2/a6affa4ce7d47789b591de5bbc05c06d"
            }}
            style={styles.ImageBackground_104_159}
          />
          <View style={styles.View_104_132}>
            <View style={styles.View_104_133}>
              <View style={styles.View_104_135}>
                <Text style={styles.Text_104_135}>ชื่อศิลปิน</Text>
              </View>
              <View style={styles.View_104_136}>
                <Text style={styles.Text_104_136}>ชื่อเพลง</Text>
              </View>
            </View>
            <View style={styles.View_104_137}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae2c/80f7/aeccf3eacc80a38c6b76d099f629782d"
                }}
                style={styles.ImageBackground_104_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57e0/0967/a4872831b01b4186f85b771454a5971a"
                }}
                style={styles.ImageBackground_104_139}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_6392"))
        }
      >
        <View style={styles.View_104_124}>
          <View style={styles.View_104_129}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4064/74eb/1efe2ff5dd5050e67604e92216ce7d78"
              }}
              style={styles.ImageBackground_104_130}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7c4/da4f/6cb5362fd77a5a84ee2a6f675962aeb7"
              }}
              style={styles.ImageBackground_104_131}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_104_91}>
        <Text style={styles.Text_104_91}>เพลงทั้งหมด</Text>
      </View>
      <View style={styles.View_104_378}>
        <View style={styles.View_104_379}>
          <Text style={styles.Text_104_379}>24.234 ชื่นชอบ</Text>
        </View>
        <View style={styles.View_104_380}>
          <Text style={styles.Text_104_380}>34.234 การฟัง</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b49/3b76/c8a402f24948a022bf3ab25d7013fa1d"
          }}
          style={styles.ImageBackground_104_381}
        />
        <View style={styles.View_104_382}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76cf/9f9f/73cdf2a792a75bf7628173024eeb56e4"
            }}
            style={styles.ImageBackground_104_383}
          />
        </View>
      </View>
      <View style={styles.View_104_377}>
        <Text style={styles.Text_104_377}>
          ผ่อนคลายจิตใจในการนอนหลับพักผ่อนด้วย โทนเสียงที่ทุ้มและชัดเจนเหล่านี้
        </Text>
      </View>
      <View style={styles.View_133_346}>
        <View style={styles.View_104_374}>
          <Text style={styles.Text_104_374}>10 เพลง</Text>
        </View>
        <View style={styles.View_104_375}>
          <Text style={styles.Text_104_375}>เพลงนอนหลับ</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a8/bf14/2c3ef69a8c049ca15ff938662a783f2c"
          }}
          style={styles.ImageBackground_104_376}
        />
      </View>
      <View style={styles.View_104_90}>
        <Text style={styles.Text_104_90}>สุขสันต์ยามเช้า</Text>
      </View>
      <View style={styles.View_104_187}>
        <View style={styles.View_104_188} />
        <View style={styles.View_104_189}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c218/987f/c0f044552f935f143c13ea352aff08a4"
            }}
            style={styles.ImageBackground_104_190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d173/0e8c/0dd6d15f2a2881740fd7dc836b24e902"
            }}
            style={styles.ImageBackground_104_193}
          />
          <View style={styles.View_104_202}>
            <View style={styles.View_104_203}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97a2/96f1/7e4d1765c96a4a3c38f990d371d5a938"
                }}
                style={styles.ImageBackground_104_204}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/551f/6f0d/1ea3e8452eb80151d5c99970af8fd220"
                }}
                style={styles.ImageBackground_104_205}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/285f/bc67/f38c303613781c7c078746af75a048eb"
                }}
                style={styles.ImageBackground_104_206}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5870/afef/c71b66f8192496a3054c0d11d6e9a7b8"
                }}
                style={styles.ImageBackground_104_207}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b442/7e9c/a38bc64c51cd20b01da484996236e7aa"
                }}
                style={styles.ImageBackground_104_208}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b442/7e9c/a38bc64c51cd20b01da484996236e7aa"
                }}
                style={styles.ImageBackground_104_209}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa84/0223/1fb048f03f260bcab8fe614226857814"
                }}
                style={styles.ImageBackground_104_210}
              />
            </View>
            <View style={styles.View_104_214}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de3/7bf5/4bb6558f17e65ff4d02a37bdb28e663b"
                }}
                style={styles.ImageBackground_104_215}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df9e/9ef4/b45aab8f1620fc4cd4fcdb27e8000879"
                }}
                style={styles.ImageBackground_104_216}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08ac/d17b/0719fe84c1fb3c954ab67db18a0cf255"
                }}
                style={styles.ImageBackground_104_217}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7891/d526/a1e30d5340a9cbab94144d89e067db88"
                }}
                style={styles.ImageBackground_104_225}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf4d/2f61/22cbd170f84924240fa26c171efbebb7"
                }}
                style={styles.ImageBackground_104_226}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f2/a652/64674b27db9942f474778011d0b77c01"
                }}
                style={styles.ImageBackground_104_229}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c27d/12b3/91cef5963a3da8b624d68133f54b5017"
            }}
            style={styles.ImageBackground_104_230}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cae7/a71d/ba8641ed15bfc6ebba88ed7e619bcbbb"
            }}
            style={styles.ImageBackground_104_234}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f4/2231/e3bf66ebbe169099cbfffd3223b57529"
            }}
            style={styles.ImageBackground_104_299}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42e2/3824/e7a1ff0f5d9d33001cde0065dc9a4a55"
            }}
            style={styles.ImageBackground_104_321}
          />
        </View>
      </View>
      <View style={styles.View_104_112}>
        <View style={styles.View_104_113}>
          <View style={styles.View_104_114}>
            <View style={styles.View_104_115}>
              <View style={styles.View_104_116} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa14/3723/739e35295e772e99768fcb6d11f065be"
          }}
          style={styles.ImageBackground_104_117}
        />
      </View>
      <View style={styles.View_104_106}>
        <View style={styles.View_104_107}>
          <View style={styles.View_104_108}>
            <View style={styles.View_104_109}>
              <View style={styles.View_104_110} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f416/7633/e80d4bd61d33bf1c3f4b8d16d2257c7b"
          }}
          style={styles.ImageBackground_104_111}
        />
      </View>
      <View style={styles.View_104_118}>
        <View style={styles.View_104_119}>
          <View style={styles.View_104_120}>
            <View style={styles.View_104_121} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0397/4b80/21bffde87d2b4c2f7fba53d45c92a8ca"
          }}
          style={styles.ImageBackground_104_122}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_205_0: {
    width: wp("90.37632596665534%"),
    minWidth: wp("90.37632596665534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("78.41530054644808%")
  },
  ImageBackground_104_159: {
    width: wp("90.37632596665534%"),
    minWidth: wp("90.37632596665534%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.196721311475414%")
  },
  View_104_132: {
    width: wp("27.64173129906401%"),
    minWidth: wp("27.64173129906401%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.019106657608695343%"),
    top: hp("0%")
  },
  View_104_133: {
    width: wp("13.148977675875603%"),
    minWidth: wp("13.148977675875603%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.492753623188406%"),
    top: hp("0.3415300546448208%")
  },
  View_104_135: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%")
  },
  Text_104_135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.55,
    textTransform: "none"
  },
  View_104_136: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10549941500604021%"),
    top: hp("0%")
  },
  Text_104_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_137: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_138: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_139: {
    width: wp("2.657004830917874%"),
    height: hp("1.639344262295082%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%")
  },
  View_104_124: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73913043478261%"),
    top: hp("43.30601092896175%")
  },
  View_104_129: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_130: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_104_131: {
    width: wp("5.314009201123518%"),
    height: hp("3.2786882640234105%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%")
  },
  View_104_91: {
    width: wp("35.66970088055744%"),
    minWidth: wp("35.66970088055744%"),
    minHeight: hp("2.846167256923321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("72.40437158469946%")
  },
  Text_104_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_378: {
    width: wp("76.6153455356469%"),
    minWidth: wp("76.6153455356469%"),
    height: hp("2.265092714236734%"),
    minHeight: hp("2.265092714236734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("66.01906031207308%")
  },
  View_104_379: {
    width: wp("23.913354919728448%"),
    minWidth: wp("23.913354919728448%"),
    minHeight: hp("1.7754468761506628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.990324011171499%"),
    top: hp("0%")
  },
  Text_104_379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_104_380: {
    width: wp("26.644062650376473%"),
    minWidth: wp("26.644062650376473%"),
    minHeight: hp("1.7754468761506628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.9712810424215%"),
    top: hp("0%")
  },
  Text_104_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_104_381: {
    width: wp("4.410165519530071%"),
    height: hp("2.2053989556317775%"),
    top: hp("0.058233542520497394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_382: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.206284100892114%"),
    minHeight: hp("2.206284100892114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.73941113753019%"),
    top: hp("0.05880053577527633%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_104_383: {
    width: wp("4.830917874396135%"),
    height: hp("2.188524652699955%"),
    top: hp("0.0177602298924171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_104_377: {
    width: wp("66.42512077294685%"),
    minWidth: wp("66.42512077294685%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("55.558401639344254%")
  },
  Text_104_377: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_133_346: {
    width: wp("36.95652173913043%"),
    minWidth: wp("36.95652173913043%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("51.09289617486339%")
  },
  View_104_374: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_104_374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_104_375: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067634%"),
    top: hp("0%")
  },
  Text_104_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  ImageBackground_104_376: {
    width: wp("0.7847989814868872%"),
    minWidth: wp("0.7847989814868872%"),
    height: hp("0.4438617190376657%"),
    minHeight: hp("0.4438617190376657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.65017361111111%"),
    top: hp("0.8341804879610635%")
  },
  View_104_90: {
    width: wp("51.449275362318836%"),
    minWidth: wp("51.449275362318836%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("43.73435765667691%")
  },
  Text_104_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_187: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.62619135288593%"),
    minHeight: hp("39.62619135288593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_104_188: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.62619135288593%"),
    minHeight: hp("39.62619135288593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(175, 219, 197, 1)"
  },
  View_104_189: {
    width: wp("100%"),
    height: hp("39.62619135288593%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_190: {
    width: wp("104.88652031202822%"),
    height: hp("62.83314188972848%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_193: {
    width: wp("101.724788647343%"),
    height: hp("44.45551470980618%"),
    top: hp("5.066693415407275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.892598470052083%")
  },
  View_104_202: {
    width: wp("63.067870209182516%"),
    height: hp("26.49050853291496%"),
    top: hp("8.572796263981386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.49294100406665%")
  },
  View_104_203: {
    width: wp("63.067870209182516%"),
    height: hp("16.872142312305222%"),
    top: hp("9.618373516478826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000007371395682298498%")
  },
  ImageBackground_104_204: {
    width: wp("63.067870209182516%"),
    height: hp("16.872142312305222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_205: {
    width: wp("5.387155099767417%"),
    height: hp("1.9247973551515671%"),
    top: hp("8.67403791250427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.56248783719713%")
  },
  ImageBackground_104_206: {
    width: wp("5.386250260947407%"),
    height: hp("1.9247973551515671%"),
    top: hp("8.67403791250427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.634391747810994%")
  },
  ImageBackground_104_207: {
    width: wp("2.770728419944284%"),
    height: hp("1.445157671235298%"),
    top: hp("13.300994706284152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.435568252047478%")
  },
  ImageBackground_104_208: {
    width: wp("5.722584010322313%"),
    height: hp("1.557056239393891%"),
    top: hp("11.113909945461922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.766657511393223%")
  },
  ImageBackground_104_209: {
    width: wp("5.722118230257633%"),
    height: hp("1.557056239393891%"),
    top: hp("11.113909945461922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.232565322359974%")
  },
  ImageBackground_104_210: {
    width: wp("36.65538548271437%"),
    height: hp("12.766087641481494%"),
    top: hp("0.39830442334784877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9177092768719781%")
  },
  View_104_214: {
    width: wp("35.2383157481318%"),
    height: hp("19.015096445552636%"),
    top: hp("0.000008338136100238813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22887048398815%")
  },
  ImageBackground_104_215: {
    width: wp("35.2383157481318%"),
    height: hp("19.015096445552636%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_104_216: {
    width: wp("3.8795314549247997%"),
    height: hp("2.1350170093807366%"),
    top: hp("5.55656724940232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.550163748183678%")
  },
  ImageBackground_104_217: {
    width: wp("28.297275045643683%"),
    height: hp("14.158373973408683%"),
    top: hp("1.0706500277493167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.115061681627651%")
  },
  ImageBackground_104_225: {
    width: wp("4.023408659414393%"),
    height: hp("2.368193245976349%"),
    top: hp("5.887191022028688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.850022173158216%")
  },
  ImageBackground_104_226: {
    width: wp("13.876396216056197%"),
    height: hp("7.129835431041613%"),
    top: hp("0.45025101124914624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.485019720694865%")
  },
  ImageBackground_104_229: {
    width: wp("19.30983723073766%"),
    height: hp("7.61512902265038%"),
    top: hp("11.399366034836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.907224940792943%")
  },
  ImageBackground_104_230: {
    width: wp("13.173948278749622%"),
    height: hp("10.228783445931523%"),
    top: hp("12.899980388703892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.675682031014116%")
  },
  ImageBackground_104_234: {
    width: wp("100.05141548488452%"),
    height: hp("57.59648390806438%"),
    top: hp("5.027187326566769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7727874903287288%")
  },
  ImageBackground_104_299: {
    width: wp("98.7165073265776%"),
    height: hp("55.71427892466061%"),
    top: hp("5.896838245496072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7690351550705765%")
  },
  ImageBackground_104_321: {
    width: wp("102.34905740489131%"),
    height: hp("57.302481229188004%"),
    top: hp("4.718993140048668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2440409637303742%")
  },
  View_104_112: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.88405797101449%"),
    top: hp("6.830601092896176%")
  },
  View_104_113: {
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
  View_104_114: {
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
  View_104_115: {
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
  View_104_116: {
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
  ImageBackground_104_117: {
    width: wp("4.3478260869565215%"),
    height: hp("2.527322404371585%"),
    top: hp("2.493169398907103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.468599033816432%")
  },
  View_104_106: {
    width: wp("13.28502507601383%"),
    minWidth: wp("13.28502507601383%"),
    height: hp("7.513661723319299%"),
    minHeight: hp("7.513661723319299%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.97584541062803%"),
    top: hp("6.830601092896176%")
  },
  View_104_107: {
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
  View_104_108: {
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
  View_104_109: {
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
  View_104_110: {
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
  ImageBackground_104_111: {
    width: wp("4.410165519530071%"),
    height: hp("2.2053989556317775%"),
    top: hp("2.6541287781762293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.437462258454104%")
  },
  View_104_118: {
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
  View_104_119: {
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
  View_104_120: {
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
  View_104_121: {
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
  ImageBackground_104_122: {
    width: wp("4.516525084269796%"),
    height: hp("2.459016654009376%"),
    top: hp("2.527322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.384214981742527%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
