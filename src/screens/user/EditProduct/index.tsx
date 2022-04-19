import React, { useState, useCallback, useEffect } from "react";
import { Text, ScrollView, View, TextInput } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton  from '../../../components/UI/HeaderButton';
import { styles } from "./styles";

interface IEditProduct {
  navigation: NavigationStackProp;
}

const EditProduct = ({ navigation }: IEditProduct) => {
  const prodId = navigation.getParam("prodId");
  const productDetails = useSelector((state: RootStateOrAny) =>
    state.products.userProducts.find(
      (product: { id: string }) => product.id === prodId
    )
  );

  const [title, setTitle] = useState(
    productDetails ? productDetails.title : ""
  );
  const [image, setImage] = useState(
    productDetails ? productDetails.imageUrl : ""
  );
  const [description, setDescription] = useState(
    productDetails ? productDetails.description : ""
  );
  const [price, setPrice] = useState("");

  const submitHandler = useCallback(()=> {
      console.log('submitting!!');
}, []);

    useEffect(()=>{
        navigation.setParams({submit : submitHandler})
    }, [submitHandler])

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Title</Text>
        <TextInput
          placeholder="title"
          value={title}
          onChangeText={(textInput) => setTitle(textInput)}
          style={styles.editableInput}
        ></TextInput>
      </View>


      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Description</Text>
        <TextInput
          placeholder="describe your product"
          multiline={true}
          value={description}
          onChangeText={(textInput) => setDescription(textInput)}
          style={styles.editableInput}
        ></TextInput>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>Image</Text>
        <TextInput
          placeholder="image Url"
          multiline={true}
          value={image}
          onChangeText={(textInput) => setImage(textInput)}
          style={styles.editableInput}
        ></TextInput>
      </View>
      {prodId ? null : (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Price</Text>
          <TextInput
            placeholder="price"
            value={price}
            onChangeText={(textInput) => setPrice(textInput)}
            style={styles.editableInput}
          ></TextInput>
        </View>
      )}
    </ScrollView>
  );
};

EditProduct.navigationOptions = (navData: any) => {
  const hasParam = navData.navigation.getParam("prodId");
  const submitFn = navData.navigation.getParam("submit");
  console.log(submitFn, 'submitFn')
  return {
    headerTitle: hasParam ? "Edit Product" : "Add Product",
    headerRight:()=>(
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title='Save'
                            iconName='save'
                            onPress={submitFn}
                            />
                        
                    </HeaderButtons>
                    )
  };
};

export default EditProduct;
