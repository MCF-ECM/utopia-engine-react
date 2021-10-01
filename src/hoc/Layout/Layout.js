import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';


class Layout extends Component {
    state = {showModal: true};

    hideModal = () => this.setState({...this.state, showModal: false});

    render() {
        return (
            <div>
                {this.props.children}
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.hideModal}
                    title={"Utopia Engine"}
                >
                    <img
                        alt="Logo d'Utopia Engine"
                        src="https://cf.geekdo-images.com/HTsjNQHQQMf029lmvlOFqA__itemrep/img/BX4Bcn68QCWJHaEIrCG5mTioiCE=/fit-in/246x300/filters:strip_icc()/pic1827127.jpg"
                    />
                    <p>Le projet est basé sur le PnP (Print & Play) gratuit <b>Utopia Engine</b>.</p>
                    <p>Vous jouez le rôle d'un vieil artificier nommé Isodoros qui tente de reconstruire l'Utopia Engine, un appareil légendaire datant d'un passé lointain et peut-être le seul espoir d'éviter la fin du monde qui approche rapidement. Vous devez récupérer les six pièces de la machine dans six régions dangereuses et assembler l'Utopia Engine avant la fin du monde. Le jeu utilise une mécanique de dés simple pour simuler la recherche dans les régions sauvages, l'activation et l'assemblage d'artefacts puissants, et le combat avec les armes des artefacts.</p>
                    <i>Résumé traduit depuis <a href="https://boardgamegeek.com/boardgame/75223/utopia-engine">BoardGameGeek</a></i>
                </Modal>
            </div>
        );
    }
}

export default Layout;
