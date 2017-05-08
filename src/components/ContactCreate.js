/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { contactUpdate, contactCreate } from '../actions/ContactAction';
import { Card, CardSection, Button, Spinner } from './common';
import ContactForm from './ContactForm';

class ContactCreate extends Component {
    onButtonPress() {
        const { firstName, lastName, age } = this.props;

        this.props.contactCreate({ firstName, lastName, age });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Save
            </Button>
        );
    }

    render() {
        console.log(this.props.error);
        return (
            <Card>
                <ContactForm {...this.props} />
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red',
        textAlign: 'center'
    }
};

const mapStateToProps = (state) => {
    return { ...state.contactForm };
};

export default connect(mapStateToProps, {
    contactUpdate, contactCreate
})(ContactCreate);
