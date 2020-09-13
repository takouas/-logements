import React from 'react';
import { Link } from 'react-router-dom';
import './pageNotFound.css'
class NotFoundPage extends React.Component {
    render() {
        return <div>
            <div class="container">

                <section class="page-not-found">


                    <div class="page-not-found-main">
                        <center style={{ padding: '25px' }}>
                            <p>Oops!!!! </p>
                            <h4>Cette page n’est pas disponible</h4>
                            <h4>Le lien que vous avez suivi est peut-être rompu, ou la page a été supprimée.</h4>



                            <h4 class="heading-primary">
                                Vous pouvez cliquer <Link to="/"> <a>ici pour retournez à la page d'accueil</a> </Link>

                            </h4>
                        </center>
                    </div>
                </section>

            </div>
        </div>;
    }
}
export default NotFoundPage;
