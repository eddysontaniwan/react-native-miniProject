/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */

import _ from 'lodash';
import React, { Component } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { contactUpdate, contactSave, contactDelete } from '../actions/ContactAction';
import { Card, CardSection, Button, Confirm, Spinner } from './common';

class ContactEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.contact, (value, prop) => {
            console.log(value, prop);
            this.props.contactUpdate({ prop, value });
        });
    }

    onButtonPress() {
        console.log(this.props);
        const { firstName, lastName, age, id } = this.props;
        this.props.contactSave({
            firstName,
            lastName,
            age,
            id
        });
    }

    onAccept() {
        const { id } = this.props.contact;
        console.log(this.props.contact);

        this.props.contactDelete({ id });
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Save Changes
            </Button>
        );
    }
    
    render() {
        console.log(this.props.error);
        return (
            <Card>
                <ContactForm />
                <Animated.Text style={styles.errorTextStyle}>
                        {this.props.error}
                </Animated.Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
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
    contactUpdate, contactSave, contactDelete
})(ContactEdit);
