import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const homescreen = () => {
    return (
        <View style={{ marginTop: 15 }}>
            <Image style={{ Height: 370, width: "100%", resizeMode: "contain" }}
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQzM8HZAxhNmyrqbeSeWByIxuS8AfgkTWHg&usqp=CAU"
                }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ textAlign: "center", color: "magenta", fonSize: 20, fontWeight: "600" }}>QUIZ RULES </Text>

                <View style={{ padding: 10, backgroundColor: "#F88379", borderRadius: 6, maarginTop: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center",marginVertical:5 }}>
                        <Text style={{ color: "white" }}>-</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fntWeight: "500" }}>For each correct answer you get a 5 points!</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical:5}}>
                        <Text style={{ color: "white" }}>-</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fntWeight: "500" }}>There is no negative marking for the wrong answers!</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center",marginVertical:5 }}>
                        <Text style={{ color: "white" }}>-</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fntWeight: "500" }}>For each question has a time limit of 15 seconds!</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center",marginVertical:5 }}>
                        <Text style={{ color: "white" }}>-</Text>
                        <Text style={{ marginLeft: 4, color: "#722F37", fontSize: 15, fntWeight: "500" }}>You should answer all the questions compulsarily!</Text>
                    </View>
                </View>
            </View>
            <Pressable style={{backgroundColor:"magenta", padding:14, width: 120, borderRadius:25, marginLeft: "auto",marginRight: "auto", marginTop:30,}}> 
                <Text style={{color:"white", fontWeigh:"600",textAlign:"center"}}> Start Quiz</Text>
            </Pressable>
        </View>
    )
}

export default homescreen

const styles = StyleSheet.create({})