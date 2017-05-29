import React from 'react'
import {Image, TouchableHighlight, View, Animated, Easing, TouchableWithoutFeedback,Text,Dimensions, Picker} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = Picker.Item;


export default class RatingModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blackViewOpacityValue: new Animated.Value(1.0),
      whiteViewOpacityValue: new Animated.Value(1.0),
      height: 1000,
      orderRating: '5',
      pickerBottomValue: new Animated.Value(-250),
      isVisible: this.props.isVisible
    };
    
    this.state.blackViewOpacityValue.setValue(0);
    this.state.whiteViewOpacityValue.setValue(0);
  }
  hideSelf(){
    this.setState({height: 1000, isVisible: false})
    this.props.visibilityCallback(false)
  }
  
  componentWillReceiveProps(nextProps)
  {
    if(!this.state.isVisible &&  nextProps.isVisible)
    {
      this.setState({
        isVisible: nextProps.isVisible
      })
      this.state.blackViewOpacityValue.setValue(0);
      this.state.whiteViewOpacityValue.setValue(0);
      this.presentModal()
    }
  }

  showSelf(){
    this.setState({height: 0, isVisible:true})
  }
  componentDidMount(){
    if(this.state.isVisible)
    this.presentModal()
  }

  presentModal() {
    this.showSelf();
    Animated.sequence([
    Animated.timing(                        
      this.state.blackViewOpacityValue,         
      {
        toValue: 1,                       
        easing: Easing.quad,
      
      }
    ),Animated.timing(                      
      this.state.whiteViewOpacityValue,             
      {
        toValue: 1.0,                         
        easing: Easing.quad,
        
      },
    )]).start();                               

  }

  dismissModal(){
    Animated.sequence([
    Animated.timing(                          
      this.state.whiteViewOpacityValue,             
      {
        toValue: 0,                        
        easing: Easing.quad,
      }
    ),Animated.timing(                         
      this.state.blackViewOpacityValue,                
      {
        toValue: 0.0,                        
        easing: Easing.quad,
        duration: 1000,
      },
    )]).start(this.hideSelf());
  }

  okPress(){
    this.dismissModal()
    if(this.state.onOkay != null){
      this.state.onOkay()
    }


  }
  cancelPress(){
    this.dismissModal()
    if(this.state.onCancel !== null){
      this.state.onCancel()
    }


  }

  rate(){
    this.showPicker()
  }

  renderStarRating(){
    var num = '5.0';
    var halfNum = false
    num = this.state.orderRating.split('.')
    var numInt = parseInt(num[0])
    var stars = []

    for (var i = 0; i < 5; i++) {
      if((i+1) <= numInt){
        stars.push((<Icon key={Math.random(5)} name="star" size={15} color="#F6A623" />))
      }else if(halfNum){
        halfNum = false;
        stars.push((<Icon key={Math.random(5)} name="star-half-o" size={15} color="#F6A623" />))
      }else{
        stars.push((<Icon key={Math.random(5)} name="star-o" size={15} color="#F6A623" />))
      }
    }
    return stars

  }

  changeRatingValue(value){
      this.setState({orderRating : value})
  }

  showPicker(){
    Animated.timing(
    this.state.pickerBottomValue,
      {
        toValue: 0,
        duration: 500,
        easing: Easing.quad
      }
    ).start();
  }

  hidePicker(){
    Animated.timing(
      this.state.pickerBottomValue,
      {
        toValue: -250,
        duration: 500,
        easing: Easing.quad
      }
    ).start();
  }

  submitRatings(){
        this.props.ratingCallback(this.state.orderRating)
        this.dismissModal();
  }


  render() {
    const { objectAvatar,container,content,headerText,headerStyle,detailsText,detailStyle,avatarName,avatarTextStyle,submitButtonStyle,isVisible } = this.props
    if(this.state.isVisible)
    {
    return (
      <TouchableWithoutFeedback onPress={()=>this.dismissModal()}>
      <Animated.View style={[styles.container,{
        opacity: this.state.blackViewOpacityValue, marginTop: this.state.height},container]}  >
        <Animated.View style={[styles.contentContainer,{
          opacity: this.state.whiteViewOpacityValue},content]}>
          {this.props.showImage ?
            <View style={{alignSelf:'center',marginTop:24,}}>
            <Image source={this.props.image} style={{width:72,height:72 ,borderRadius:36, justifyContent:'center',backgroundColor:'yellow'}} />
            </View>
            :
            null
          }
          <View>
            <Text style={[styles.headerText,headerStyle]}>{headerText}</Text>
          </View>
          <View>
            <Text style={[styles.detailsText,detailStyle]}>{detailsText}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
              {objectAvatar === null ? null :<View>
              <Image style={{alignSelf:'center'}} source={{uri: objectAvatar }} style={{width:72,height:72 ,borderRadius:36}} />
              <Text style={[styles.nameText,avatarTextStyle]}>{avatarName}</Text>
              <TouchableWithoutFeedback onPress={() => this.rate()}>
                <View>
                <View style={{flexDirection:'row',marginTop:6}}>
                {this.renderStarRating()}
                </View>
                <Text style={styles.nameText}>Tap to Rate</Text>
                </View>
              </TouchableWithoutFeedback></View>
            }
            </View>
          </View>
          <TouchableHighlight style={[styles.modalButton,submitButtonStyle]} onPress= {()=>{this.submitRatings()} }>
          <Text style={{textAlign:'center',paddingTop:15,fontSize:10}} >Submit Rating</Text>
          </TouchableHighlight> 
        </Animated.View>
        <Animated.View style={{width:Dimensions.get('window').width,backgroundColor:'white',position:'absolute',bottom:this.state.pickerBottomValue,borderTopColor:'#4c4c4c',borderTopWidth:1}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#F2F2F2',borderBottomWidth:1,}}>
            <Text style={{marginLeft: 12, fontFamily:'System',fontSize:12,marginTop:12,marginBottom:12, letterSpacing:1,color:'#4C4C4C',backgroundColor:'#00000000'}}>Select Rating</Text>
            <TouchableHighlight style={{marginRight:12,marginTop:12,}} onPress={() => this.hidePicker()} underlayColor={'rgba(0,0,0,0)'}>
              <Text style={{marginRight: 12, fontFamily:'System',fontSize:12, letterSpacing:1,color:'#4C4C4C',backgroundColor:'#00000000'}}>Save</Text>
              </TouchableHighlight>
          </View>
          <Picker
             enabled={false} selectedValue={this.state.orderRating}
             onValueChange={(friends) => this.changeRatingValue(friends)}
             >
            <Item label="1" value="1" />
            <Item label="2" value="2" />
            <Item label="3" value="3" />
            <Item label="4" value="4" />
            <Item label="5" value="5" />
          </Picker>
        </Animated.View>
      </Animated.View>

      </TouchableWithoutFeedback>
    )
   }
   else {
     return (
       <View />
     )
   }   
  }
}

