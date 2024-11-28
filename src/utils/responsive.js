import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375; // Base width for responsiveness (iPhone 8)
const baseHeight = 667; // Base height for responsiveness (iPhone 8)

const responsive = (value, isFontSize = false) => {
  // Calculate the scaling factor based on the base dimensions
  const widthScale = width / baseWidth;
  const heightScale = height / baseHeight;
  
  // Use the smaller scale to maintain aspect ratio
  const scale = isFontSize ? widthScale : Math.min(widthScale, heightScale);

  // Return the scaled value, rounded for font sizes
  return isFontSize ? Math.round(value * scale) : value * scale;
};

export default responsive;