import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ContactList from './components/ContactList';
import ContactCreate from './components/ContactCreate';
import ContactEdit from './components/ContactEdit';

const RouterComponent = () => {
   return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
           onRight={() => Actions.contactCreate()}
           rightTitle="Add"
           key="contactList"
           component={ContactList}
           title="Contacts"
           initial
        />
        <Scene
           backTitle="Back"
           key="contactCreate"
           component={ContactCreate}
           title="Create Contacts"
        />
        <Scene
           backTitle="Back"
           key="contactEdit"
           component={ContactEdit}
           title="Edit Contact"
        />
      </Router>
   );
};

export default RouterComponent;
