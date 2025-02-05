import {
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  ImageBackground
} from "react-native";
import { Colors } from "@/constants/Colors";
import { CONTACT_ITEMS } from '@/constants/ContactsList'
import bg1 from "@/assets/images/water_bg.jpeg";


export default function TabTwoScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComp = <View style={styles.separator} />;

  return (
    <ImageBackground source={bg1} resizeMode="cover" style={styles.image}>
      <Container>
        <FlatList
          data={CONTACT_ITEMS}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={separatorComp}
          renderItem={({ item }) => (
            <View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.Contact}</Text>
              </View>
            </View>
          )}
        />
      </Container>
    </ImageBackground>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 20,
      backgroungColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      marginVertical: 10,
      paddingHorizontal: 10,
      maxWidth: 300,
      alignSelf: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    description: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      marginVertical: 10,
      paddingHorizontal: 10,
      maxWidth: 300,
      alignSelf: "center",
    },
  });
}

