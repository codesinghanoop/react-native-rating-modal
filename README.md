# react-native-rating-modal
An animated rating modal, flexible to handle for android as well as ios.

**Getting Started**

 - Step 1- npm install react-native-rating-modal --save
 - Step 2- react-native link react-native-vector-icons
 - Step 3- Build the project.
 
----------

**Usage**
import Modal from 'react-native-rating-modal'

export default class example extends Component {
  
  constructor(props)
  {
    super(props)
    this.state={
      isVisible: false,
      numberOfStarts: -1
    }
  }
  
  toggleModal()
  {
    this.setState({isVisible:!this.state.isVisible})
  }
  
  ratingCallback(value)
  {
    this.setState({ numberOfStarts: value })
  }
  
  visibilityCallback(value)
  {
    this.setState({ isVisible: value })
  }
  
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.pressMeButton} onPress ={() => {this.toggleModal()} }>
          <Text style={styles.pressButtonText}> Press Me! </Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isVisible}
          headerText='How was your experience?'
          detailsText='Please help others by rating you experience'
          ratingCallback={(value) => {this.ratingCallback(value)}}
          visibilityCallback={(value) => {this.visibilityCallback(value)}}
         />
        
        <Text style={styles.instructions}>
          {this.state.numberOfStarts}
        </Text>
      </View>
    );
  }
}

----------

**Properties**
container,content,headerText,headerStyle,detailsText,detailStyle,avatarName,avatarTextStyle,submitButtonStyle,isVisible

|  Name         | Type          |
| ------------- |:-------------:| 
| objectAvatar   | PropTypes.string|
| container      | propTypes.object |
| content | propTypes.object |
| headerText | propTypes.string |
| headerStyle      | propTypes.object |
| detailsText | propTypes.string |
| detailstyle | propTypes.object |
| avatarName | propTypes.string |
| avatarTextStyle | propTypes.object |
| submitButtonStyle | propTypes.object |
| isVisible | propTypes.bool |
| visibilityCallback | propTypes.func |
| ratingCallback | propTypes.func |

----------

**Todo list:-**    

 -  Animation handling prop
 -  Add test    

----------

**Author**

    Anoop Singh (codesingh)
    Email: anoop100singh@gmail.com
    Stack Overflow: codesingh(username)
    
----------    

**License**
    
MIT
