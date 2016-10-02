// Import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Create component
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnailStyle}
            />
        </View>
        <View style={styles.headerContentStyles}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  hederContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

// Export component
export default AlbumDetail;
