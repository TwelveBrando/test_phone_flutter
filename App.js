import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [startedAt] = useState(() => new Date().toLocaleString("ru-RU"));

  useEffect(() => {
    console.log("[LaunchCheck] app started", Platform.OS);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Text style={styles.ok}>✓</Text>
      <Text style={styles.title}>Приложение запущено</Text>
      <Text style={styles.sub}>iOS / {Platform.OS}</Text>
      <Text style={styles.time}>{startedAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f0fdf4",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  ok: { fontSize: 72, color: "#16a34a", marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "700", color: "#14532d" },
  sub: { fontSize: 16, color: "#166534", marginTop: 8 },
  time: { fontSize: 14, color: "#4b5563", marginTop: 20 },
});
