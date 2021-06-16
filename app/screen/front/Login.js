import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default function Login() {
    return (
        <View>
            <WebView 
                            
                            source={{uri: 'https://sso.datadik.kemdikbud.go.id/app/3D1C4271-7C02-487E-B330-7294B7EB4564'}} 
                            avaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                            style={{ flex:1, height: 500, width: 350 }}
                            />
        </View>
    )
}

const styles = StyleSheet.create({})
