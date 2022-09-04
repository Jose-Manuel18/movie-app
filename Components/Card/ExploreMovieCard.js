import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { NowPlayingState } from "../../State/NowPlayingState";
import { Col, Row, Grid } from "react-native-easy-grid";
const ExploreMovieCard = ({ onPress, movie }) => {
  const { state, contents } = useRecoilValueLoadable(NowPlayingState);
  if (state === "hasError" || state === "loading") return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Grid>
          <Col>
            <View style={styles.trendingCardImageContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={[
                  // indexCurrent ?
                  styles.bigImage,
                  //  : styles.smallImage,
                  // styles.sharedStyle,
                ]}
              />
            </View>
          </Col>
          <Col>
            <Row>
              <View style={styles.trendingCardImageContainer}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                  style={[
                    // indexCurrent ?
                    styles.bigImage,
                    //  : styles.smallImage,
                    // styles.sharedStyle,
                  ]}
                />
              </View>
            </Row>
            <Row>
              <View style={styles.trendingCardImageContainer}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                  style={[
                    // indexCurrent ?
                    styles.bigImage,
                    //  : styles.smallImage,
                    // styles.sharedStyle,
                  ]}
                />
              </View>
            </Row>
          </Col>
        </Grid>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreMovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 13,
  },
  trendingCardImageContainer: {},
  bigImage: {
    resizeMode: "stretch",
    width: 200,
    height: 300,
    borderRadius: 16,
  },
  smallImage: {
    borderRadius: 16,
    resizeMode: "stretch",
    width: 80,
    height: 110,
  },
  sharedStyle: {},
});
