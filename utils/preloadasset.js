import { Asset } from 'expo-asset'
import { Image } from 'react-native'
import * as Font from "expo-font"

export const cacheImage = (images)=> (images.map(image=>{
    if (typeof image==="string"){
        return Image.prefetch(image)
    }else{
        return Asset.fromModule(image).downloadAsync()
    }
}))


export const cacheFont = (fonts) =>fonts.map(font=>{
    return Font.loadAsync(font)
})