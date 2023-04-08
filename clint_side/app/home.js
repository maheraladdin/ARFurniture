import { StyleSheet, View } from "react-native";
import Ar from "../myComponents/adv_page/ar_icon";
import Dark from "../myComponents/adv_page/label_dark_mode";
import Light from "../myComponents/adv_page/label_light_mode";
import ConBtn from "../myComponents/buttons/continue_button";
import { Link } from "expo-router";

export default function Home() {
	return (
		<>
			<View style={styles.container}>
				<Light />
				<Ar />
			</View>
			<View style={styles.conBtn}>
				<Link href={"/profile"}>
					<ConBtn />
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
		marginTop: 50,
		gap: 50,
	},
	conBtn: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		marginBottom: 30,
	},
});