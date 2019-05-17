//ignore name of file, this file is what is about the plural that calls the singular! THIS COMPONENT GETS THE LIST. Then you can pass the list to multiple files if needed. because you might add another API and all those components will connect to App. Therefore app wouldnt need to know the list information. Just this function needs it and can then pass it on.


//need to pass the list to characters so need to import it in

import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { pingAPI } from '../services/rickAndMortyAPI';


//i guess called AllChars because its getting all the character by pinging API? getChars sounds better though

//holds state so is a class

export default class GetChars extends PureComponent {
  state = {
    characters: []
  }

  fetchCharacters = () => {
    pingAPI()
      //destructoring characters off of the object we get back
      .then(({ characters }) => this.setState({ characters: characters }));
  }

  //so when we call the component, such as <GetChars />, the component will mount onto the Dom, but the function needs to know to run itself and thus run fetchCharacters. You cant call fetchCharacters() like youd think because were inside of a class and I guess with react you just cant do that. You can however call it inside of its class if its in another function! Enter: componentDidMount. So this tells the function when to run(when its mounted in the DOM)

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    return <Characters characters={this.state.characters} />;
  }
}

