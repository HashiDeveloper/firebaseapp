import React, { Component } from 'react';
import { Constants } from 'react';
import firebase from './firebase';
import Icon from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, style, TextInput } from 'react-native';
import { Button } from 'native-base';


export default class AboutScreen extends Component {
state = { currentUser: null }

//to get current user 
componentDidMount() {
const { currentUser } = firebase.auth()
this.setState({ currentUser })
}
render() {

const { currentUser } = this.state
return (
<View style={{ flex: 1 }}>
  <ScrollView style={{ flex: 1 }}>
    <View style={styles.herowImageContainer}>
      <View>
        <Image style={styles.img} source={require("../assets/mahamed.jpg")}></Image>
        <Image style={styles.imgRounded} source={require("../assets/adna.jpg")}></Image>
      </View>
      
      <View style={styles.userNameContainer}>
        <Text style={styles.UserName}>Mahamed Hashi</Text> 
      </View>
      <Button style={styles.Button3}>
        <Text style={styles.textButton3}>Tap to Share</Text>
      </Button>
    </View>
    <View style={styles.userDetailsContainer}>
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-home"  size={22} />
        <Text style={styles.userDetails}>Lives In Toronto, Ontario</Text>
      </View>
      
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-call" size={22} />
        <Text style={styles.userDetails}>647-647-6471</Text>
      </View>
      
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-home" size={22} />
        <Text style={styles.userDetails}>From Cape Town, Western Cape</Text>
      </View>
      
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-school"  size={22} />
        <Text style={styles.userDetails}>Went to Burnhamthorpe Collegiate </Text>
      </View>
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-school"  size={22} />
        <Text style={styles.userDetails}>Studied Computer Science </Text>
      </View>
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-heart"  size={22} />
        <Text style={styles.userDetails}>Married</Text>
      </View>
      <View style={styles.userDetailsInerContainer}>
        <Icon name="ios-mail"  size={22} />
        <Text style={styles.userDetails}>hashi@gmail.com</Text>
      </View>
    </View>
    
    <View style={styles.freindsContainer}>
      <View style={styles.frindsTitleContainer}>
        <Text style={styles.frindsTitle}> Friends</Text>
        <Text style={styles.frindsTitleSecond}>  Add Friends</Text>
      </View>
      <Text style={styles.frindsTotalNumber}> 906 Frinds</Text>
      <View style={styles.frindsInnerContainer}>
        <View style={styles.frinds}>
         <Image style={styles.frindsImages} source={require("../assets/person1.jpg")}></Image>
         <Text style={styles.freindsNames}>Nina Smith</Text>
       </View>

       <View style={styles.frinds}>
         <Image style={styles.frindsImages} source={require("../assets/person2.jpg")}></Image>
         <Text style={styles.freindsNames}>Jackson Jade</Text>
       </View>

       <View style={styles.frinds}>
         <Image style={styles.frindsImages} source={require("../assets/person3.jpg")}></Image>
         <Text style={styles.freindsNames}>Leyla Duke</Text>
       </View>
     </View>

     <View style={styles.frindsInnerContainer}>
      <View style={styles.frinds}>
       <Image style={styles.frindsImages} source={require("../assets/person4.jpg")}></Image>
       <Text style={styles.freindsNames}>Samantha Rob</Text>
     </View>

     <View style={styles.frinds}>
       <Image style={styles.frindsImages} source={require("../assets/person6.jpg")}></Image>
       <Text style={styles.freindsNames}>Trudue Hale</Text>
     </View>

     <View style={styles.frinds}>
       <Image style={styles.frindsImages} source={require("../assets/person8.jpg")}></Image>
       <Text style={styles.freindsNames}>Alexa John</Text>
     </View>
   </View>

   <Button style={styles.Button2}>
    <Text style={styles.textButton2}>See All Friends</Text>
  </Button>
</View>
<View style={styles.timeline}>
  <View style={styles.texttimelineContainer}>
    <Text style={styles.texttimeline}>Timeline</Text>
  </View>
  <View style={styles.newsfeedouterContainer}>
    <View style={styles.newsfeedContainer}>
      <Image style={styles.searchImage} source={require("../assets/mahamed.jpg")}></Image>
      <Text style={styles.userNameText}>Mahamed Hashi</Text>
    </View>
    <Text style={styles.trendingNews}>My First Born! May allah Protect you</Text>
    <Image style={styles.trendingNewsImages} source={require("../assets/adna.jpg")} />
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

<View style={styles.freindsContainer}>
  <View style={styles.frindsTitleContainer}>
    <Text style={styles.frindsTitle}> Photos</Text>
  </View>
  <View style={styles.frindsInnerContainer}>
    <View style={styles.frinds}>
     <Image style={styles.frindsImages} source={require("../assets/mahamed1.jpg")}></Image>
   </View>

   <View style={styles.frinds}>
     <Image style={styles.frindsImages} source={require("../assets/mahamed2.jpg")}></Image>
   </View>

   <View style={styles.frinds}>
     <Image style={styles.frindsImages} source={require("../assets/mahamed3.jpg")}></Image>
   </View>
 </View>

 <View style={styles.frindsInnerContainer}>
  <View style={styles.frinds}>
   <Image style={styles.frindsImages} source={require("../assets/mahamed4.jpg")}></Image>
 </View>

 <View style={styles.frinds}>
   <Image style={styles.frindsImages} source={require("../assets/mahamed5.jpg")}></Image>
 </View>

 <View style={styles.frinds}>
   <Image style={styles.frindsImages} source={require("../assets/adna1.jpg")}></Image>
 </View>
</View>
</View>


</ScrollView>
</View>
);
}
}

const styles = StyleSheet.create({
img: {
width: '100%',
height: 200,
position: 'relative',
},
imgRounded: {
width: 200,
height: 200,
position: 'absolute',
justifyContent: 'center',
alignContent: 'center',
borderRadius: 100,
borderColor: 'white',
borderWidth: 3,
marginLeft: '23%',
top: 120,
},
trendingUserName: {
fontSize: 22,
fontWeight: '400',
justifyContent: 'center',
alignContent: 'center',
},
herowImageContainer: {
// backgroundColor: '#f2f2f8',
bottom: 20,
},
UserName: {
fontWeight: '600',
fontSize: 34,
alignContent: 'center',
justifyContent: 'center',
marginTop:120,
color: 'blue',
marginLeft: '22%',
},
userDetailsContainer: {
flexDirection: 'column',
padding: 10,
},
userDetails: {
fontSize: 18,
fontWeight: '300',
paddingLeft: 8,

},
userDetailsInerContainer: {
flexDirection: 'row',
padding: 5,
},
freindsContainer: {
backgroundColor: '#f2f2f8',
top: 20, 
},
frindsTitleContainer: {
flexDirection: 'row',
padding: 5,
},
frindsTitle: {
fontSize: 26,
fontWeight: '600',

},
frindsTitleSecond: {
fontSize: 18,
color: 'blue',
paddingLeft: 180,
},

frindsTotalNumber: {
fontSize: 12,
color: 'black',
paddingLeft: 10,
},
frinds: {
flexDirection: 'column',
borderRadius: 5,
},
frindsInnerContainer: {
flexDirection: 'row',
width: '90%',
padding: 3,
},
frindsImages: {
width: 114,
height: 114,
justifyContent: 'center',
alignContent: 'center',
margin: 10,
flexDirection: 'column',
borderRadius: 16, 
},
freindsNames: {
color: 'blue',
fontSize: 16,
fontWeight: '200',
flexDirection: 'column',
marginLeft: 12,

},
Button2: {
backgroundColor: '#aeaeaf',
width: '94%',
alignContent: "center",
justifyContent: "center",
marginLeft: 10,
marginRight: 10,
paddingRight: 10,

},
Button3: {
backgroundColor: '#2a2ad3',
width: '94%',
alignContent: "center",
justifyContent: "center",
marginLeft: 10,
marginRight: 10,
paddingRight: 10,
top: 5,
fontWeight: '500',

},
textButton2: {
alignContent: "center",
justifyContent: "center",
color: 'white',
fontWeight: '300',
},
textButton3: {
color: 'white',
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
color: 'blue',
width: '80%',
height: 40,
borderColor: 'black',
borderWidth: 0.5,
borderRadius: 25,
marginTop: 20,
paddingLeft: 20,
marginRight: 10,

},
texttimelineContainer: {
top: 40,
paddingLeft: 5,
width: '100%',
height: 80,
backgroundColor: "#f2f2f2",
},
texttimeline: {
fontWeight: '600',
fontSize: 26,
paddingLeft: 5,
},
newsfeedouterContainer: {
flex: 1,
borderRadius: 5,
backgroundColor: "#f2f2f8",
margin: 0,

},
newsfeedContainer: {
paddingVertical: 0,
paddingHorizontal: 0,
flexDirection: 'row',
backgroundColor: "#f2f2f2",
borderRadius: 5,
top: 5,

},
userNameText: {
fontSize: 24,
color: 'black',
fontWeight: '600',
// fontStyle: 'normal',
top: 22,
paddingLeft: 5,
},
trendingNewsDetails: {
fontSize: 22,
fontWeight: '300',
backgroundColor: '#d6d6d8',
borderBottomWidth: 1,
paddingLeft: 15,

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
iconContainer: {
flexDirection: 'row',
marginLeft: 10,
},
icon: {
color: 'darkgrey',
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
