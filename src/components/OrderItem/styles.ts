import { StyleSheet } from "react-native";
import themes from "../../global/styles/themes";

const styles = StyleSheet.create({
  container: {
    shadowColor: themes.colors.primary,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 10,
    margin: "5%",
    elevation: 5,
    borderRadius: 8,
    backgroundColor: themes.colors.beige,
  },
  innerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  amountContainer: {
    backgroundColor: themes.colors.lavender,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  textAmount: {
    fontSize: 19,
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    color: themes.colors.navy,
  },
  textDate: {
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    fontSize: 10,
    color: themes.colors.primary,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: themes.colors.primary,
    padding: "2%",
    borderRadius: 8,
    marginTop: "2%",
    marginHorizontal: "30%", // Apply Dimensions API here
  },
  buttonText: {
    color: themes.colors.white,
    fontFamily: themes.fonts.MSATitle700Bold,
    fontSize: 14,
  },
  orderNumber: {
    fontFamily: themes.fonts.MSA300Light,
    textAlign: "center",
    color: themes.colors.primary,
    fontSize: 18,
    marginTop: "2%",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "2%",
  },
  imageContainer: {
    height: 100,
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "35%",
    borderRadius: 8,
  },
  image: {
    width: "40%",
    height: "40%",
    borderRadius: 8,
    marginVertical: "2%",
  },
  detailText: {
    fontFamily: themes.fonts.MSATitle700Bold,
    textAlign: "center",
    color: themes.colors.primary,
    fontSize: 14,
    marginTop: "2%",
  },
});
export default styles;
