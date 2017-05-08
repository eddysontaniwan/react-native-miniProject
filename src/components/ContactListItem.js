/**
 * Created by MAC91ELFVH7SDB on 5/5/17.
 */

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ContactListItem extends Component {
    onRowPress() {
        console.log(this.props.contact);
        Actions.contactEdit({ contact: this.props.contact });
    }

    render() {
        const { firstName, lastName } = this.props.contact;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {firstName} {lastName}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ContactListItem;
