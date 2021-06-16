import React,{useState} from 'react'
import { StyleSheet, View } from 'react-native'
import TitleForm from '@components/TitleForm';
import TitleLeftRight from '@components/TitleLeftRight';

export default function FilterMall() {
    return (
        <View style={{padding:20}}>

            <Form>

            <TitleForm 
                title={'Berdasarkan Toko'}
            />
        
            <Item success style={{}}>
                <Input placeholder=''/>
                <Icon name='checkmark-circle' />
            </Item>
        
            <TitleForm 
            
                title={'Berdasarkan Dana'}
            />
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sumber Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Range Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>




            <TitleForm 
                title={'BERDASAR PENERBIT'}
            />
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sumber Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>


            <TitleForm 
                title={'BERDASAR TOKO'}
            />
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sumber Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>


            <TitleForm 
                title={'BERDASAR Lokasi'}
            />
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sumber Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>


            <TitleForm 
                title={'BERDASAR Brand'}
            />
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%' }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Sumber Dana" value="" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>




            
          </Form>


        
          <Button block style={{marginTop:10}}>
            <Text style={{color:'white'}}>Cari</Text>
          </Button>
           
        </View>
    )
}

const styles = StyleSheet.create({})
