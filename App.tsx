import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

function HomeScreen() { 
    const [result, setResult] = useState("");


    const tossCoin = () => {
      const randomNumber = Math.random(); 
      setResult("Loading... ⏳");
      setTimeout(() => {
    
    
      if (randomNumber < 0.5) {
            setResult("HEAD 🌞");
          } else {
            setResult("TAIL 🌙");
          }
        }, 1000);
      };



  return ( 
    <View style={styles.container}> 
      <Text style={styles.text}> 
        Hello Everyone!
      </Text>
       <Pressable style={styles.button} onPress={tossCoin}>
        <Text style={styles.tossText}>Click For Toss</Text>
      </Pressable>

       {result ? (
        <Text style={styles.resultText}>Result: {result}</Text>
      ) : null}
    </View> 
  ); 
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  tossText: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  resultText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});