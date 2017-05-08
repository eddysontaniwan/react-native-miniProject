/**
 * Created by MAC91ELFVH7SDB on 5/5/17.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { contactUpdate, firstNameChanged, lastNameChanged, ageChanged, clearFormData, contactFetch } from '../actions/ContactAction';
import { CardSection, Input } from './common';

class ContactForm extends Component {

    componentWillUnmount() {
        this.props.clearFormData();
        this.props.contactFetch();
    }

    onFirstNameChange(text) {
        this.props.firstNameChanged(text);
    }

    onLastNameChange(text) {
        this.props.lastNameChanged(text);
    }

    onAgeChange(text) {
        this.props.ageChanged(text);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="FirstName"
                        placeholder="John"
                        value={this.props.firstName}
                        onChangeText={
                            this.onFirstNameChange.bind(this)
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="LastName"
                        placeholder="Doe"
                        value={this.props.lastName}
                        onChangeText={
                            this.onLastNameChange.bind(this)
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Age"
                        placeholder="20"
                        value={this.props.age}
                        onChangeText={
                            this.onAgeChange.bind(this)
                        }
                    />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state.contactForm };
};

export default connect(mapStateToProps, {
    contactUpdate, firstNameChanged,
    lastNameChanged, ageChanged,
    clearFormData, contactFetch
})(ContactForm);
