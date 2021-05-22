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
      <View style={styles.View_101_19464}>
        <View style={styles.View_101_19465}>
          <View style={styles.View_101_19466}>
            <View style={styles.View_101_19467}>
              <View style={styles.View_101_19468}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80ea/4771/67ad85fd320dc3631eb26abc22ed5700"
                  }}
                  style={styles.ImageBackground_101_19469}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80ea/4771/67ad85fd320dc3631eb26abc22ed5700"
                  }}
                  style={styles.ImageBackground_101_19470}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4357/23e4/4ae35d7e2886ca292045f716797a5818"
                  }}
                  style={styles.ImageBackground_101_19471}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dbd/fd72/38bd119410d0320fa3242030c5fc000c"
                }}
                style={styles.ImageBackground_101_19474}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9562/aa2d/0dcf89b08ae55bf00c602cc900d99370"
                }}
                style={styles.ImageBackground_101_19492}
              />
            </View>
          </View>
          <View style={styles.View_101_19504}>
            <View source={{ uri: "null" }} style={styles.View_101_19505} />
          </View>
        </View>
      </View>
      <View style={styles.View_101_19507}>
        <Text style={styles.Text_101_19507}>ยินดีต้อนรับสู่การนอนหลับ</Text>
      </View>
      <View style={styles.View_101_19508}>
        <Text style={styles.Text_101_19508}>
          สำรวจราชาแห่งการหลับใหลคนใหม่ มันใช้เสียงและ
          vesualizationเพื่อสร้างสภาวะที่สมบูรณ์แบบสำหรับการนอนหลับที่สดชื่น
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f5/f793/1a2548eb1a7ade6705c1d48d3bdae639"
        }}
        style={styles.ImageBackground_101_19509}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("104_5"))
        }
      >
        <View style={styles.View_101_19510}>
          <View style={styles.View_101_19511} />
          <View style={styles.View_101_19512}>
            <Text style={styles.Text_101_19512}>เริ่มต้นใช้งาน</Text>
          </View>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e807/5426/32b16227653476f12eecada7b071e003"
        }}
        style={styles.ImageBackground_101_19513}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9db0/6167/c4a084822e2f2c37e4c0cb94ea3a0a38"
        }}
        style={styles.ImageBackground_101_19514}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ee/8e7e/04082fe05823eb16ab71c5a10f4fba97"
        }}
        style={styles.ImageBackground_101_19515}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5a9/50a8/4b12a4353c343d00654182a422fa84f6"
        }}
        style={styles.ImageBackground_101_19516}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8580/33c0/7f4f36feece730fccfdd784f847bc621"
        }}
        style={styles.ImageBackground_101_19517}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8955/be3c/3ab65a90a3acb0653194b074805a596d"
        }}
        style={styles.ImageBackground_101_19518}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c46/77b5/fcb4c581072f19ec7338480edbb799a5"
        }}
        style={styles.ImageBackground_101_19519}
      />
      <View style={styles.View_101_19520}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb31/e978/b81624248c9941e76be2506ced2b2836"
          }}
          style={styles.ImageBackground_101_19521}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0b0/2c81/ecfd58dba2db2752952af65ca8eff63d"
          }}
          style={styles.ImageBackground_101_19522}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/058f/748c/7368d579a4c4bf0030531c0e9b0069ee"
          }}
          style={styles.ImageBackground_101_19523}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9f/4c37/9ea22960d5440b0c2f0a91f211b080a1"
          }}
          style={styles.ImageBackground_101_19524}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69d4/6218/bf06c5f1e218324f3eeb09fed2974920"
          }}
          style={styles.ImageBackground_101_19527}
        />
      </View>
      <View style={styles.View_101_19528}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb31/e978/b81624248c9941e76be2506ced2b2836"
          }}
          style={styles.ImageBackground_101_19529}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0b0/2c81/ecfd58dba2db2752952af65ca8eff63d"
          }}
          style={styles.ImageBackground_101_19530}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/058f/748c/7368d579a4c4bf0030531c0e9b0069ee"
          }}
          style={styles.ImageBackground_101_19531}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad9f/4c37/9ea22960d5440b0c2f0a91f211b080a1"
          }}
          style={styles.ImageBackground_101_19532}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69d4/6218/bf06c5f1e218324f3eeb09fed2974920"
          }}
          style={styles.ImageBackground_101_19535}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e94/c095/3dae847c3817568caa7131d15e10f3da"
        }}
        style={styles.ImageBackground_101_19536}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9435/9677/4624bf36c21923e076b3c6764286834f"
        }}
        style={styles.ImageBackground_101_19537}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe50/4d3c/ff19b75f6e8fc0c08571409e690da55c"
        }}
        style={styles.ImageBackground_101_19538}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1da4/af70/c6f2c9486ba364004491663418a8e697"
        }}
        style={styles.ImageBackground_101_19539}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9539/4dcc/ae51b92b03656ebffbe7151d3b16b46e"
        }}
        style={styles.ImageBackground_101_19540}
      />
      <View style={styles.View_101_19541}>
        <View style={styles.View_101_19542}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf49/e380/cc45cd07308d0e4aee29201de3fb5d73"
            }}
            style={styles.ImageBackground_103_2297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/288e/ff1c/08ccd54a50d92a468ee2af575c77f87b"
            }}
            style={styles.ImageBackground_101_19544}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20df/43d5/5853339efa299f08dc297fd1ba17aabb"
            }}
            style={styles.ImageBackground_101_19553}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e352/d5c0/4d101eb6d5c60315143839b61cc532f2"
            }}
            style={styles.ImageBackground_101_19562}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19a3/5d14/90af79d600099874ef866b1d01932866"
            }}
            style={styles.ImageBackground_101_19571}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c742/6085/e29e916980066c46452e8d08e8e6b982"
            }}
            style={styles.ImageBackground_101_19580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da77/1c6e/1e6d2be534b9689898922c69f41b57e9"
            }}
            style={styles.ImageBackground_101_19589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7e/5757/8f000f321fce08b9bd3f7d002da729a4"
            }}
            style={styles.ImageBackground_101_19598}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ab/5232/db14231516a362a5c21a8f2ca4ce0abd"
            }}
            style={styles.ImageBackground_101_19607}
          />
        </View>
        <View style={styles.View_101_19616}>
          <View style={styles.View_101_19617}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b810/350a/ed1e5edffa32cae06259a99740b9359f"
              }}
              style={styles.ImageBackground_101_19618}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89dc/c692/0cb1f79ae6d9e12f41daa428df094334"
              }}
              style={styles.ImageBackground_101_19624}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95fe/0bdf/bd1cf206a86a54d996f2ee6dda8ecb0a"
              }}
              style={styles.ImageBackground_103_2369}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6743/f18c/2d1fd0d39c2ed85aca3eeb08e1418978"
              }}
              style={styles.ImageBackground_103_2370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea31/10be/e91e4ff3bcc3a1e2df60990ea8035198"
              }}
              style={styles.ImageBackground_101_19629}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a580/259c/58f175a9374961eac95e2828ec07b678"
              }}
              style={styles.ImageBackground_103_2373}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5b/88ec/8cee213fd5cb8dc4b05bd5e59963e641"
              }}
              style={styles.ImageBackground_101_19633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f536/8e4d/2831611d43170150e4e17f0d2fcc7679"
              }}
              style={styles.ImageBackground_101_19636}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d65d/1853/561ec6adc02c882879ff21f5bdfb77b9"
              }}
              style={styles.ImageBackground_101_19651}
            />
            <View style={styles.View_101_19672}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/135d/3d99/70391b820df108cdec5e5e1b8456d28f"
                }}
                style={styles.ImageBackground_103_2410}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c73/474a/3c796871d321963b9ab210fcb4858de2"
                }}
                style={styles.ImageBackground_101_19674}
              />
            </View>
          </View>
          <View style={styles.View_101_19686}>
            <View style={styles.View_101_19687}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d8/f02c/cb6764f06d0b6a10e1e46838e0f360ec"
                }}
                style={styles.ImageBackground_103_2422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50d9/9be6/050261391d80fa367a8e3fa4a4f655ff"
                }}
                style={styles.ImageBackground_101_19689}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c54/a542/81f88e71fa989162ca30bb08f3a5231d"
              }}
              style={styles.ImageBackground_101_19701}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efab/f392/5bb6cc53fd471d0e8a32ecb03ea72d17"
              }}
              style={styles.ImageBackground_101_19704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9027/b5c2/ca5d3a2efedc5f406c07e630fa5fe714"
              }}
              style={styles.ImageBackground_103_2441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32ea/68d5/4db0410b2efa02985853622d57d73eb4"
              }}
              style={styles.ImageBackground_103_2442}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/306a/75e1/ba527411206036071b76440963762fba"
              }}
              style={styles.ImageBackground_101_19712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac78/18ff/916432f968d3fa61f296ca6368cd6c57"
              }}
              style={styles.ImageBackground_101_19715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f19/63ec/2e9ca433e70d6f9803f8effd1c387858"
              }}
              style={styles.ImageBackground_103_2447}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9025/e4be/5e3ccac8a584b03c828856f4b6d71f51"
              }}
              style={styles.ImageBackground_101_19719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bd0/e26c/abbf1267005a22fbb36957db9c554516"
              }}
              style={styles.ImageBackground_101_19736}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d74/3e57/4a23200b6da70c80b928cd0af6cbb805"
            }}
            style={styles.ImageBackground_101_19761}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_101_19464: {
    width: wp("146.352441760077%"),
    height: hp("165.31830667797985%"),
    top: hp("-6.236959155140028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.127394229317632%")
  },
  View_101_19465: {
    width: wp("146.352441760077%"),
    height: hp("165.31830667797985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_19466: {
    width: wp("146.352441760077%"),
    height: hp("165.31830667797985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_19467: {
    width: wp("146.352441760077%"),
    height: hp("165.31830667797985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_19468: {
    width: wp("146.352441760077%"),
    height: hp("165.31830667797985%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19469: {
    width: wp("64.17611532165233%"),
    height: hp("96.75819938951503%"),
    top: hp("5.192624284921449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.17632643842467%")
  },
  ImageBackground_101_19470: {
    width: wp("64.17610795025665%"),
    height: hp("96.75819938951503%"),
    top: hp("68.56010728846482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19471: {
    width: wp("89.90427652994791%"),
    height: hp("100.62100770043546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.712548002528683%")
  },
  ImageBackground_101_19474: {
    width: wp("104.22947095788044%"),
    height: hp("73.84290017716872%"),
    top: hp("28.540981271879268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.971010954483695%")
  },
  ImageBackground_101_19492: {
    width: wp("104.1401075280231%"),
    height: hp("91.47814140945184%"),
    top: hp("15.304648811048498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.398548365791065%")
  },
  View_101_19504: {
    width: wp("120.77294685990339%"),
    height: hp("102.45901639344261%"),
    top: hp("8.834697118873805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.25120655004529%")
  },
  View_101_19505: {
    width: wp("120.77294685990339%"),
    height: hp("102.45901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_19507: {
    width: wp("80.91787439613528%"),
    minWidth: wp("80.91787439613528%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("21.174863387978142%")
  },
  Text_101_19507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_101_19508: {
    width: wp("76.57004830917874%"),
    minWidth: wp("76.57004830917874%"),
    minHeight: hp("10.944297665455302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("28.825136612021858%")
  },
  Text_101_19508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_101_19509: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.850241545893724%"),
    top: hp("120.49180327868851%")
  },
  View_101_19510: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("100.95628415300546%")
  },
  View_101_19511: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(142, 151, 253, 1)",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  View_101_19512: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.850241545893724%"),
    top: hp("3.4153005464481083%")
  },
  Text_101_19512: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  ImageBackground_101_19513: {
    width: wp("27.56879871018267%"),
    minWidth: wp("27.56879871018267%"),
    height: hp("7.5170965142588795%"),
    minHeight: hp("7.5170965142588795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.78932197312803%"),
    top: hp("46.57105826289276%")
  },
  ImageBackground_101_19514: {
    width: wp("10.779378034066463%"),
    minWidth: wp("10.779378034066463%"),
    height: hp("2.939178643982267%"),
    minHeight: hp("2.939178643982267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.2499823086503623%"),
    top: hp("35.99524993062671%")
  },
  ImageBackground_101_19515: {
    width: wp("20.957519236394173%"),
    minWidth: wp("20.957519236394173%"),
    height: hp("5.714419630707288%"),
    minHeight: hp("5.714419630707288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.84904914892814%"),
    top: hp("10.952300191577015%")
  },
  ImageBackground_101_19516: {
    width: wp("15.94605561039874%"),
    minWidth: wp("15.94605561039874%"),
    height: hp("4.347960154215494%"),
    minHeight: hp("4.347960154215494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29138625877492%"),
    top: hp("6.345830198194159%")
  },
  ImageBackground_101_19517: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.1739130434782608%"),
    top: hp("9.797168168865266%")
  },
  ImageBackground_101_19518: {
    width: wp("2.4835505923211287%"),
    height: hp("1.7985072943682228%"),
    top: hp("8.424619247353142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  ImageBackground_101_19519: {
    width: wp("2.3799244332428717%"),
    height: hp("1.1791719113542733%"),
    top: hp("5.645877025166496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.794713117074275%")
  },
  View_101_19520: {
    width: wp("12.25604826701436%"),
    minWidth: wp("12.25604826701436%"),
    height: hp("6.931699429704843%"),
    minHeight: hp("6.931699429704843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.993911227166365%"),
    top: hp("5.301411946614584%")
  },
  ImageBackground_101_19521: {
    width: wp("12.25604826701436%"),
    minWidth: wp("12.25604826701436%"),
    height: hp("6.931699429704843%"),
    minHeight: hp("6.931699429704843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_101_19522: {
    width: wp("2.2499107508267757%"),
    minWidth: wp("2.2499107508267757%"),
    height: hp("1.2724905066151437%"),
    minHeight: hp("1.2724905066151437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.886682777589069%"),
    top: hp("1.2306421832308736%")
  },
  ImageBackground_101_19523: {
    width: wp("3.2620098279870073%"),
    minWidth: wp("3.2620098279870073%"),
    height: hp("1.8449071977959304%"),
    minHeight: hp("1.8449071977959304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.025588768115945%"),
    top: hp("2.5141314730618163%")
  },
  ImageBackground_101_19524: {
    width: wp("2.8577159568307477%"),
    minWidth: wp("2.8577159568307477%"),
    height: hp("1.2999004353591002%"),
    minHeight: hp("1.2999004353591002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.818544544459542%"),
    top: hp("5.474111421512124%")
  },
  ImageBackground_101_19527: {
    width: wp("1.4583222532041984%"),
    minWidth: wp("1.4583222532041984%"),
    height: hp("0.8247888153368006%"),
    minHeight: hp("0.8247888153368006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011616729883755%"),
    top: hp("5.238467357197745%")
  },
  View_101_19528: {
    width: wp("12.25604826701436%"),
    minWidth: wp("12.25604826701436%"),
    height: hp("6.931699429704843%"),
    minHeight: hp("6.931699429704843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.652029433688107%"),
    top: hp("5.057237969070185%")
  },
  ImageBackground_101_19529: {
    width: wp("12.25604826701436%"),
    minWidth: wp("12.25604826701436%"),
    height: hp("6.931699429704843%"),
    minHeight: hp("6.931699429704843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_101_19530: {
    width: wp("2.2499107508267757%"),
    minWidth: wp("2.2499107508267757%"),
    height: hp("1.2724905066151437%"),
    minHeight: hp("1.2724905066151437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8866827775890656%"),
    top: hp("1.2306421832308745%")
  },
  ImageBackground_101_19531: {
    width: wp("3.2620098279870073%"),
    minWidth: wp("3.2620098279870073%"),
    height: hp("1.8449071977959304%"),
    minHeight: hp("1.8449071977959304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.025588768115945%"),
    top: hp("2.514131473061817%")
  },
  ImageBackground_101_19532: {
    width: wp("2.8577159568307477%"),
    minWidth: wp("2.8577159568307477%"),
    height: hp("1.2999004353591002%"),
    minHeight: hp("1.2999004353591002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8185445444595345%"),
    top: hp("5.474111421512124%")
  },
  ImageBackground_101_19535: {
    width: wp("1.4583222532041984%"),
    minWidth: wp("1.4583222532041984%"),
    height: hp("0.8247888153368006%"),
    minHeight: hp("0.8247888153368006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.011616729883755%"),
    top: hp("5.238467357197745%")
  },
  ImageBackground_101_19536: {
    width: wp("12.25604826701436%"),
    minWidth: wp("12.25604826701436%"),
    height: hp("6.931699429704843%"),
    minHeight: hp("6.931699429704843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.811619560499697%"),
    top: hp("3.7764335590633538%")
  },
  ImageBackground_101_19537: {
    width: wp("2.995978922083758%"),
    height: hp("1.9983397155511575%"),
    top: hp("5.73547029755806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.7808557777589%")
  },
  ImageBackground_101_19538: {
    width: wp("2.0525091512191698%"),
    height: hp("0.90135798428228%"),
    top: hp("12.233104601583845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73677158816425%")
  },
  ImageBackground_101_19539: {
    width: wp("2.0525091512191698%"),
    height: hp("0.90135798428228%"),
    top: hp("12.233112939719945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73676421676856%")
  },
  ImageBackground_101_19540: {
    width: wp("2.0525091512191698%"),
    height: hp("0.90135798428228%"),
    top: hp("15.135543072809938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29137888737924%")
  },
  View_101_19541: {
    width: wp("89.13043478260869%"),
    minWidth: wp("89.13043478260869%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.744546346618357%"),
    top: hp("49.16601962730533%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_101_19542: {
    width: wp("89.13140780683877%"),
    height: hp("13.6100706506948%"),
    top: hp("17.67408027023565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000029485582729193993%")
  },
  ImageBackground_103_2297: {
    width: wp("85.37410422799668%"),
    height: hp("9.019522328194373%"),
    top: hp("2.8090513469091576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7573183216334556%")
  },
  ImageBackground_101_19544: {
    width: wp("6.680118173792743%"),
    height: hp("2.4385379311816937%"),
    top: hp("4.149039846951837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.350911458333334%")
  },
  ImageBackground_101_19553: {
    width: wp("6.62820051257737%"),
    height: hp("4.063949168054132%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19562: {
    width: wp("7.052245577752301%"),
    height: hp("2.352021431010929%"),
    top: hp("7.604813706028011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.920074020606886%")
  },
  ImageBackground_101_19571: {
    width: wp("7.423347436287553%"),
    height: hp("2.4753695628682117%"),
    top: hp("10.101018186475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.02114116281703%")
  },
  ImageBackground_101_19580: {
    width: wp("7.423349279136474%"),
    height: hp("2.4751423486594946%"),
    top: hp("10.745005790001713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.52726119036836%")
  },
  ImageBackground_101_19589: {
    width: wp("6.444261154690803%"),
    height: hp("2.1649032342629355%"),
    top: hp("7.834362592853481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.75212473109149%")
  },
  ImageBackground_101_19598: {
    width: wp("4.220286198860205%"),
    height: hp("4.083808523709656%"),
    top: hp("9.526270465121243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.89959598854544%")
  },
  ImageBackground_101_19607: {
    width: wp("4.392430402230525%"),
    height: hp("4.0657293601114235%"),
    top: hp("9.371364572660525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.642780101241705%")
  },
  View_101_19616: {
    width: wp("55.682771102241844%"),
    height: hp("23.023453175695867%"),
    top: hp("-0.00005002881660232106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.209640724071559%")
  },
  View_101_19617: {
    width: wp("29.894724675422708%"),
    height: hp("21.48564865028923%"),
    top: hp("1.5069013084870235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19618: {
    width: wp("14.24993432086447%"),
    height: hp("4.7233091677472885%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.381663741696858%")
  },
  ImageBackground_101_19624: {
    width: wp("5.833689371744791%"),
    height: hp("1.3433112472784325%"),
    top: hp("20.142335318476775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.428434952445652%")
  },
  ImageBackground_103_2369: {
    width: wp("29.894724675422708%"),
    height: hp("17.175856835203742%"),
    top: hp("3.3088058721823757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_103_2370: {
    width: wp("9.207555061377189%"),
    height: hp("5.292951865274398%"),
    top: hp("12.768838184127382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.970144668063103%")
  },
  ImageBackground_101_19629: {
    width: wp("9.62075680350336%"),
    height: hp("1.011104792193637%"),
    top: hp("7.148734337645145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.364442981959538%")
  },
  ImageBackground_103_2373: {
    width: wp("4.213309172846845%"),
    height: hp("2.1171215453434513%"),
    top: hp("9.198298219774593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.35051399267814%")
  },
  ImageBackground_101_19633: {
    width: wp("10.4346399721892%"),
    height: hp("0.9193868584971611%"),
    top: hp("8.764798523949793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.353783943802842%")
  },
  ImageBackground_101_19636: {
    width: wp("7.9649118985530825%"),
    height: hp("5.220176613395982%"),
    top: hp("13.71328218387125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.740722951105827%")
  },
  ImageBackground_101_19651: {
    width: wp("7.905501213626585%"),
    height: hp("4.570180340542819%"),
    top: hp("13.069944954960725%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.92017014360658%")
  },
  View_101_19672: {
    width: wp("4.248223788496377%"),
    height: hp("5.48424538367433%"),
    top: hp("13.041395176955263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.29828352628699%")
  },
  ImageBackground_103_2410: {
    width: wp("4.248223788496377%"),
    height: hp("5.48424538367433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19674: {
    width: wp("3.6649473623377116%"),
    height: hp("4.149120101511804%"),
    top: hp("0.8964663646260291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44117066019398976%")
  },
  View_101_19686: {
    width: wp("25.496489299092318%"),
    height: hp("20.63630317729679%"),
    top: hp("2.3871583365351796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.18627811745169%")
  },
  View_101_19687: {
    width: wp("4.036152420412515%"),
    height: hp("5.209893607050995%"),
    top: hp("12.037216770192963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_103_2422: {
    width: wp("4.036152420412515%"),
    height: hp("5.209893607050995%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_101_19689: {
    width: wp("3.482254691745924%"),
    height: hp("3.941712092832138%"),
    top: hp("0.8519573941256837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13367288930405152%")
  },
  ImageBackground_101_19701: {
    width: wp("5.715923954323294%"),
    height: hp("1.8495430711840022%"),
    top: hp("18.786754503927597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.484561348882849%")
  },
  ImageBackground_101_19704: {
    width: wp("12.824842664930555%"),
    height: hp("4.250746346562286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.66773699331975%")
  },
  ImageBackground_103_2441: {
    width: wp("25.355662470278535%"),
    height: hp("16.283076969000813%"),
    top: hp("3.2266085265112707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14082314311594502%")
  },
  ImageBackground_103_2442: {
    width: wp("7.294201966069171%"),
    height: hp("4.696052843104295%"),
    top: hp("12.110292194970967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.639883437594364%")
  },
  ImageBackground_101_19712: {
    width: wp("10.497906818482035%"),
    height: hp("1.423262507537675%"),
    top: hp("8.120560776340504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.017108714522955%")
  },
  ImageBackground_101_19715: {
    width: wp("8.804266003594883%"),
    height: hp("1.3124830735837174%"),
    top: hp("6.625449592298494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.764313776136021%")
  },
  ImageBackground_103_2447: {
    width: wp("4.540425913345411%"),
    height: hp("1.9894021456358861%"),
    top: hp("8.909648624274247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.028501059122135%")
  },
  ImageBackground_101_19719: {
    width: wp("9.54396713183122%"),
    height: hp("6.449918277928086%"),
    top: hp("12.463045380806008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9412019149116873%")
  },
  ImageBackground_101_19736: {
    width: wp("6.482261620857866%"),
    height: hp("4.129255534521217%"),
    top: hp("12.308072783256492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.84772731025437%")
  },
  ImageBackground_101_19761: {
    width: wp("8.737901328266531%"),
    height: hp("5.397067565084155%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.538546502302236%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
