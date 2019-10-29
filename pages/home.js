import React, { Component } from 'react';
import firebase from './firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator, StackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class HomeScreen extends Component {

render() {
return (
<ScrollView>
  <View style={{ flex: 1 }}>
    <View style={styles.detailsContainer}>
      <View style={styles.newsfeedContainer}>
        <Image style={styles.searchImage} source={require("../assets/person3.jpg")}></Image>
        <TextInput placeholder='Would you like to share something?' style={styles.TextChat} ></TextInput>
      </View>
    </View>
    <View style = { styles.scrollViewHolder }>
      <ScrollView style={styles.firstScrollViewImage} horizontal = { true } showsHorizontalScrollIndicator = { false }>
        <View>
          <Image style={styles.img} source={require("../assets/person1.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/person2.jpg")}></Image>
          <Text style={styles.trendingUserName}>Nina Smith</Text>
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/person3.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/person4.jpg")}></Image>
          <Text style={styles.trendingUserName}>Layla Duke</Text> 
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/mahamed.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/adna.jpg")}></Image>
          <Text style={styles.trendingUserName}>Hashi Maha</Text> 
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/person5.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/person6.jpg")}></Image>
          <Text style={styles.trendingUserName}>Isac Henry</Text> 
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/person7.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/person8.jpg")}></Image>
          <Text style={styles.trendingUserName}>Devon Bill</Text> 
        </View>
        <View>
          <Image style={styles.img} source={require("../assets/person2.jpg")}></Image>
          <Image style={styles.smallImage} source={require("../assets/person3.jpg")}></Image>
          <Text style={styles.trendingUserName}>Brad Novelton</Text> 
        </View>
      </ScrollView>
    </View>

    <View style={styles.newsfeedouterContainer}>
      <View style={styles.newsfeedContainer}>
        <Image style={styles.searchImage} source={require("../assets/chelsea.jpg")}></Image>
        <Text style={styles.userNameText}>Chelsea FC Latest News</Text>
      </View>
      <Text style={styles.trendingNews}>No one likes a sloppy finish! :/

      Chelsea Football Club</Text>
      <Image style={styles.trendingNewsImages} source={require("../assets/lampard.jpg")} />
      <View style={styles.iconContainer}>
        <View>
          <Icon name="ios-thumbs-up" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Love</Text>
        </View>
        <View>
          <Icon name="ios-chatboxes" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Like</Text>
        </View>
        <View>
          <Icon name="ios-share" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
    </View>

    <View style={styles.newsfeedouterContainer}>
      <View style={styles.newsfeedContainer}>
        <Image style={styles.searchImage} source={require("../assets/hbc.jpg")}></Image>
        <Text style={styles.userNameText}>BBC News</Text>
      </View>
      <Text style={styles.trendingNews}>In the face of the climate crisis, an all-systems-go 
      approach to tech innovation and investment will be critical.</Text>
      <Image style={styles.trendingNewsImages} source={require("../assets/hbcimage.jpg")} />
      <Text style={styles.trendingNewsDetails}>A call for moonshots, silver buckshots, and all of the above</Text>
      <View style={styles.iconContainer}>
        <View>
          <Icon name="ios-thumbs-up" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Love</Text>
        </View>
        <View>
          <Icon name="ios-chatboxes" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Like</Text>
        </View>
        <View>
          <Icon name="ios-share" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
    </View>

    <View style={styles.newsfeedouterContainer}>
      <View style={styles.newsfeedContainer}>
        <Image style={styles.searchImage} source={require("../assets/bbc.png")}></Image>
        <Text style={styles.userNameText}>BBC News</Text>
      </View>
      <Text style={styles.trendingNews}>The former British prime minister may have made her famous
      'Bruges speech' in 1988, but many believe it marked the first step on the road to Brexit.</Text>
      <Image style={styles.trendingNewsImages} source={require("../assets/bbcimage.jpeg")} />
      <View style={styles.iconContainer}>
        <View>
          <Icon name="ios-thumbs-up" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Love</Text>
        </View>
        <View>
          <Icon name="ios-chatboxes" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Like</Text>
        </View>
        <View>
          <Icon name="ios-share" style={styles.icon}></Icon>
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
    </View>
  </View>
</ScrollView>
);
}
}

const styles = StyleSheet.create({
postsContainer: {
flexDirection: 'row',
paddingHorizontal: 20,
paddingVertical: 20,
borderBottomWidth: StyleSheet.hairlineWidth,
borderBottomColor: 'gray',

alignItems: 'center',
textAlign: "center"

},

detailscontainer: {
paddingHorizontal: 20,
paddingVertical: 10,
flexDirection: 'row',
marginTop: 20


},

//This the start
newsfeedouterContainer: {
flex: 1,
borderRadius: 5,
backgroundColor: "#f2f2f8",
shadowOpacity: 0.3,
margin: 10,
bottom: 20,

},
newsfeedContainer: {
paddingVertical: 0,
paddingHorizontal: 0,
flexDirection: 'row',
backgroundColor: "#f2f2f2",
borderRadius: 5,
top: 5,

},
searchImage: {
width: 60,
height: 60,
margin: 10,
borderRadius: 30,

},
TextChat: {
color: 'red',
width: '80%',
height: 40,
borderColor: 'black',
borderWidth: 0.5,
borderRadius: 25,
marginTop: 20,
paddingLeft: 20,
marginRight: 10,

},
img: {
width: 120,
height: 200,
justifyContent: 'center',
margin: 10,
borderRadius: 10,
position: 'relative',
},
smallImage: {
width: 50,
height: 50,
borderRadius: 25,
borderColor: 'red',
borderWidth: 1,
justifyContent: 'center',
margin: 15,
position: 'absolute',
},
trendingUserName: {
position: 'absolute',
width: '200%',
height: 20,
paddingLeft: 15,
top: 180,
color: 'white',
fontSize: 18,
fontWeight: '600',
},
trendingNewsDetails: {
fontSize: 22,
fontWeight: '300',
backgroundColor: '#d6d6d8',
borderBottomWidth: 1,
paddingLeft: 5,

},
scrollViewHolder: {
backgroundColor: "#f2f2f8",
},
newsfeedouterContainer: {
flex: 1,
borderRadius: 5,
backgroundColor: "#f2f2f8",
shadowOpacity: 1,
margin: 0,

},
trendingNews: {
fontSize: 16,
color: 'black',
borderBottomColor: 'black',
marginTop: 20,
marginBottom: 20,
paddingLeft: 5,
},
trendingNewsImages: {
width: '100%',
height: 200,
},
userNameText: {
fontSize: 24,
color: 'black',
fontWeight: '600',
top: 22,
paddingLeft: 5,
},
iconContainer: {
flexDirection: 'row',
marginLeft: 10,
},
icon: {
color: '#6e6f70',
fontSize: 32,
marginLeft: 30,
paddingHorizontal: 10,
},
iconText: {
marginLeft: 80,
top: -20,
paddingLeft:5,

}
});
