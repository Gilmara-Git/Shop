import React, { useState, useCallback, useEffect } from "react";
import { Text, ScrollView, View, TextInput } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { NavigationStackProp } from "react-navigation-stack";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton  from '../../../components/UI/HeaderButton';
import * as productActions from '../../../store/actions/products';
import { styles } from "./styles";

interface IEditProduct {
  navigation: NavigationStackProp;
}

const EditProduct = ({ navigation }: IEditProduct) => {
  const prodId = navigation.getParam("prodId");
  const hasEditProduct = useSelector((state: RootStateOrAny) =>
    state.products.userProducts.find(
      (product: { id: string }) => product.id === prodId
    )
  );

  const [title, setTitle] = useState(
    hasEditProduct ? hasEditProduct.title : ""
  );
  const [imageUrl, setImageUrl] = useState(
    hasEditProduct ? hasEditProduct.imageUrl : ""
  );
  const [description, setDescription] = useState(
    hasEditProduct ? hasEditProduct.description : ""
  );
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const submitHandler = useCallback(()=> {
  
    if(hasEditProduct){
      dispatch(productActions.updateProduct({prodId, title, imageUrl, description}))
    }else{
      dispatch(productActions.createProduct({title, imageUrl, description, price}))
    }
    navigation.goBack();
}, [dispatch, prodId, title, imageUrl, description, price]);

    useEffect(()=>{
        navigation.setParams({submit : submitHandler})
    }, [submitHandler]);

    

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
          value={imageUrl}
          onChangeText={(textInput) => setImageUrl(textInput)}
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
