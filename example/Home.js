import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'green'
    },
    player: {
        flex: 1
    },

    content: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    control: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    mainControl: {
        flexDirection: 'column'
    },
    video: {
        flex: 1,
        width: '100%',
        height: 220,
        backgroundColor: 'red'
    },
    html: {
        padding: 8,
        width: '100%',
        height: '100%',
        backgroundColor: 'green'
    }
});

export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.mainControl}>
                <View style={styles.control}>
                    <Button
                        title="BrightCove HTML"
                        onPress={() => navigate('BrightCoveHTML')}
                    />
                    <Button
                        title="Default HTML"
                        onPress={() => navigate('DefaultHTML')}
                    />
                </View>
                <View style={styles.control}>
                    <Button
                        title="BrightCove Scroll"
                        onPress={() => navigate('BrightCoveScroll')}
                    />
                    <Button
                        title="Default Scroll"
                        onPress={() => navigate('DefaultScroll')}
                    />
                </View>
            </View>
        );
    }
}


