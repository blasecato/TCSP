import React from "react";
import { Link } from 'react-router-dom';

import { Card,Button } from 'antd';

import LayoutHome from "../../../components/LayoutHome/LayoutHome";

import vial from "../../../assets/image/img/img3.jpg";
import comun from "../../../assets/image/img/comun.jpg";
import produc from "../../../assets/image/img/produc.jpg";

const { Meta } = Card;

class Tipo extends React.Component {
    render(){
        return(
            <div className="users">
            <LayoutHome></LayoutHome>
            <div className="users--title">
                <h1 className="users--title--cron">Tipo de Infraestructura</h1> 
            </div>
            <div className="users__content-cards">
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<Link to="/registerinfra"><img alt="example" src={comun} /></Link>}
                >
                    <Meta title="Tipo Comunitaria" description="Tipo de infraestructura comjunitaria"/>
                    <Link className="btn btn--cron" to="/registerinfra" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<Link to="/registerinfra"><img alt="example" src={vial} /></Link>}
                >
                    <Meta title="Tipo Vial" description="Tipo de infraestructura Vial ¡AQUI!" />
                    <Link className="btn btn--cron" to="/registerinfra" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
                <Card
                    className="users__content-cards--card"
                    hoverable
                    cover={<Link to="/registerinfra"><img alt="example" src={produc} /></Link>}
                >
                    <Meta title="Tipo Productiva" description="Tipo de infraestructura Productiva" />
                    <Link className="btn btn--cron" to="/registerinfra" type="primary" shape="circle">
                        IR
                    </Link>
                </Card>
            </div>
            <div className="mesage"><span className="cron">¡</span>Aqui puedes Escoger que tipo de infraestructura vas a registrar<span className="cron">!</span></div>

    </div>
        );
    }
}

export default Tipo;