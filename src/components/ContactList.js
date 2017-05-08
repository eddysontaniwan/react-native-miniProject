/**
 * Created by MAC91ELFVH7SDB on 5/4/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { contactFetch } from '../actions/ContactAction';
import ContactListItem from './ContactListItem';

class ContactList extends Component {

    componentWillMount() {
        this.props.contactFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ contacts }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(contacts);
    }

    renderRow(contact) {
        return <ContactListItem contact={ contact } />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const contacts = state.contacts;
    return { contacts };
};

export default connect(mapStateToProps, { contactFetch })(ContactList);